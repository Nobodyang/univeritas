/* ============================================================
   学府真鉴 UniVeritas · 自部署后端 (v16)
   账号（scrypt 加盐哈希）/ 会话（token 哈希存储）/ 收藏清单 / 论坛
   短信验证码（console/阿里云/腾讯云）/ 成长体系（XP·等级·徽章·签到）
   通知中心 / 埋点聚合 / 管理后台 / gzip 压缩
   仅依赖 express + better-sqlite3；Node >= 18
   API 事实源：API_CONTRACT_v16.md
   ============================================================ */
'use strict';

const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const zlib = require('zlib');
const https = require('https');
const vm = require('vm');
const express = require('express');
const Database = require('better-sqlite3');

const PORT = parseInt(process.env.PORT || '3000', 10);
// 前端 index.html 所在目录：默认取 server/ 的上一级（部署时把 index.html 放在 server 同级）
const WEB_ROOT = process.env.WEB_ROOT
  ? path.resolve(process.env.WEB_ROOT)
  : (fs.existsSync(path.join(__dirname, 'index.html')) ? __dirname : path.join(__dirname, '..'));
const DATA_DIR = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'univeritas.db');
const TOKEN_TTL_MS = 30 * 24 * 3600 * 1000; // 会话 30 天
const MAX_BODY = '512kb';
// 短信服务商：console（默认，打印日志+返回 devCode）| aliyun | tencent | none（完全关闭短信验证）
const SMS_PROVIDER = (process.env.SMS_PROVIDER || 'console').toLowerCase();
const SMS_CODE_TTL_MS = 10 * 60 * 1000; // 验证码 10 分钟有效
const SMS_CODE_MAX_ATTEMPTS = 5;        // 试错 5 次作废

fs.mkdirSync(DATA_DIR, { recursive: true });

/* ---------------- 成长体系常量（与 API_CONTRACT_v16 镜像一致，一个字不许差） ---------------- */
const XP_RULES = { checkin: 10, checkinStreak7: 20, post: 20, comment: 8, commentReceived: 3, reportAccepted: 5, profileComplete: 15, favorite: 2, share: 3, favDailyCap: 10, shareDailyCap: 9 };
const LEVELS = [{ lv: 1, name: '真鉴新手', en: 'Newcomer', xp: 0 }, { lv: 2, name: '见习侦探', en: 'Junior Scout', xp: 50 }, { lv: 3, name: '数据猎人', en: 'Data Hunter', xp: 150 }, { lv: 4, name: '真相追寻者', en: 'Truth Seeker', xp: 350 }, { lv: 5, name: '资深顾问', en: 'Senior Advisor', xp: 700 }, { lv: 6, name: '真鉴大师', en: 'Veritas Master', xp: 1200 }, { lv: 7, name: '学府传说', en: 'Campus Legend', xp: 2000 }];
const BADGES = [{ id: 'welcome', name: '初来乍到', en: 'First Step' }, { id: 'streak7', name: '七日之约', en: '7-Day Streak' }, { id: 'firstpost', name: '首发', en: 'First Post' }, { id: 'posts10', name: '直言不讳', en: 'Outspoken' }, { id: 'comments50', name: '热心肠', en: 'Helper' }, { id: 'favs10', name: '校探', en: 'School Scout' }, { id: 'fit10', name: '数据控', en: 'Data Nerd' }, { id: 'guardian3', name: '真相卫士', en: 'Truth Guardian' }];
const BADGE_IDS = new Set(BADGES.map(b => b.id));
const TIERS = new Set(['reach', 'match', 'safety']);

/* ---------------- SQLite 建表 + 幂等迁移 ---------------- */
const db = new Database(DB_FILE);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');
db.exec(`
CREATE TABLE IF NOT EXISTS users (
  phone      TEXT PRIMARY KEY,
  pass_hash  TEXT NOT NULL,
  salt       TEXT NOT NULL,
  nickname   TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY,
  phone      TEXT NOT NULL REFERENCES users(phone) ON DELETE CASCADE,
  expires    INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS favorites (
  phone   TEXT NOT NULL REFERENCES users(phone) ON DELETE CASCADE,
  uni_id  TEXT NOT NULL,
  PRIMARY KEY (phone, uni_id)
);
CREATE TABLE IF NOT EXISTS list_items (
  phone   TEXT NOT NULL REFERENCES users(phone) ON DELETE CASCADE,
  uni_id  TEXT NOT NULL,
  tier    TEXT NOT NULL,
  PRIMARY KEY (phone, uni_id)
);
CREATE TABLE IF NOT EXISTS posts (
  id         TEXT PRIMARY KEY,
  phone      TEXT NOT NULL,
  author     TEXT NOT NULL,
  title      TEXT NOT NULL,
  body       TEXT NOT NULL,
  tags       TEXT NOT NULL DEFAULT '[]',
  created_at INTEGER NOT NULL,
  reports    INTEGER NOT NULL DEFAULT 0,
  hidden     INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE IF NOT EXISTS comments (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id    TEXT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  phone      TEXT NOT NULL,
  author     TEXT NOT NULL,
  body       TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS sms_codes (
  phone     TEXT NOT NULL,
  scene     TEXT NOT NULL,
  code_hash TEXT NOT NULL,
  expires   INTEGER NOT NULL,
  attempts  INTEGER NOT NULL DEFAULT 0,
  created   INTEGER NOT NULL,
  PRIMARY KEY (phone, scene)
);
CREATE TABLE IF NOT EXISTS xp_log (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  phone      TEXT NOT NULL,
  action     TEXT NOT NULL,
  amount     INTEGER NOT NULL,
  day        TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS notifications (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  phone      TEXT NOT NULL,
  type       TEXT NOT NULL,
  title      TEXT NOT NULL,
  body       TEXT NOT NULL DEFAULT '',
  link       TEXT NOT NULL DEFAULT '',
  read       INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS events (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  type       TEXT NOT NULL,
  path       TEXT NOT NULL DEFAULT '',
  action     TEXT NOT NULL DEFAULT '',
  meta       TEXT NOT NULL DEFAULT '',
  phone      TEXT NOT NULL DEFAULT '',
  day        TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS reports (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id    TEXT NOT NULL,
  reporter   TEXT NOT NULL DEFAULT 'anonymous',
  reason     TEXT NOT NULL DEFAULT '',
  status     TEXT NOT NULL DEFAULT 'pending',
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_posts_created ON posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_comments_post ON comments(post_id);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires);
CREATE INDEX IF NOT EXISTS idx_xplog_phone_day ON xp_log(phone, day);
CREATE INDEX IF NOT EXISTS idx_xplog_day ON xp_log(day);
CREATE INDEX IF NOT EXISTS idx_notif_phone ON notifications(phone, read);
CREATE INDEX IF NOT EXISTS idx_events_day ON events(day);
CREATE INDEX IF NOT EXISTS idx_events_type ON events(type, action);
CREATE INDEX IF NOT EXISTS idx_reports_status ON reports(status);
CREATE TABLE IF NOT EXISTS meta (k TEXT PRIMARY KEY, v TEXT);
`);

/* 幂等列迁移：PRAGMA table_info 检查后 ALTER */
function ensureColumn(table, col, ddl) {
  const cols = db.prepare(`PRAGMA table_info(${table})`).all().map(c => c.name);
  if (!cols.includes(col)) {
    db.exec(`ALTER TABLE ${table} ADD COLUMN ${ddl}`);
    console.log(`[migrate] ${table} 新增列 ${col}`);
  }
}
ensureColumn('users', 'xp', "xp INTEGER NOT NULL DEFAULT 0");
ensureColumn('users', 'streak', "streak INTEGER NOT NULL DEFAULT 0");
ensureColumn('users', 'last_checkin', "last_checkin TEXT");
ensureColumn('users', 'badges', "badges TEXT NOT NULL DEFAULT '[]'");
ensureColumn('users', 'is_admin', "is_admin INTEGER NOT NULL DEFAULT 0");
ensureColumn('users', 'banned', "banned INTEGER NOT NULL DEFAULT 0");
ensureColumn('users', 'profile_complete', "profile_complete INTEGER NOT NULL DEFAULT 0");
ensureColumn('users', 'created_at', "created_at INTEGER NOT NULL DEFAULT 0");
ensureColumn('posts', 'featured', "featured INTEGER NOT NULL DEFAULT 0");
// 老库迁移：若尚无任何管理员，按规则提拔（ADMIN_PHONE 匹配者优先，否则最早注册用户）
(function promoteFirstAdmin() {
  const has = db.prepare('SELECT COUNT(*) AS n FROM users WHERE is_admin=1').get().n;
  if (has > 0) return;
  let row = null;
  if (process.env.ADMIN_PHONE) row = db.prepare('SELECT phone FROM users WHERE phone=?').get(process.env.ADMIN_PHONE);
  if (!row) row = db.prepare('SELECT phone FROM users ORDER BY created_at ASC, phone ASC LIMIT 1').get();
  if (row) {
    db.prepare('UPDATE users SET is_admin=1 WHERE phone=?').run(row.phone);
    console.log('[migrate] 首个管理员已指定：' + maskPhone(row.phone));
  }
})();

/* ---------------- 工具 ---------------- */
const scrypt = (pwd, salt) => crypto.scryptSync(pwd, salt, 64).toString('hex');
const sha256 = s => crypto.createHash('sha256').update(s).digest('hex');
const newToken = () => crypto.randomBytes(32).toString('hex');
const newId = p => p + Date.now().toString(36) + crypto.randomBytes(4).toString('hex');
const now = () => Date.now();
const DAY_MS = 24 * 3600 * 1000;
// 本地日期 YYYY-MM-DD（用于签到 / XP 每日上限 / 埋点按日聚合）
function dayStr(t) {
  const d = new Date(t == null ? Date.now() : t);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
// 手机号打码：138****1234（国际号保留前 3 后 4）
function maskPhone(p) {
  p = String(p || '');
  if (p.length < 7) return p ? '***' : '';
  return p.slice(0, 3) + '****' + p.slice(-4);
}
// 手机号：中国大陆 1[3-9]\d{9}，或 + 国际号 6-15 位
function validPhone(p) {
  if (typeof p !== 'string') return false;
  p = p.trim();
  return /^1[3-9]\d{9}$/.test(p) || /^\+\d{6,15}$/.test(p);
}
// 密码：≥8 位且同时含字母与数字
function validPassword(p) {
  return typeof p === 'string' && p.length >= 8 && p.length <= 128 && /[A-Za-z]/.test(p) && /\d/.test(p);
}
function cleanStr(s, max) {
  if (typeof s !== 'string') return '';
  return s.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, max);
}
function levelOf(xp) {
  let lv = LEVELS[0];
  for (const L of LEVELS) if (xp >= L.xp) lv = L;
  return lv;
}
const nextLevelOf = xp => LEVELS.find(l => l.xp > xp) || null;

/* ---------------- 限流（内存令牌桶，按 桶名:IP 隔离） ---------------- */
const buckets = new Map();
function rateLimitOk(key, limit, windowMs) {
  const t = now();
  let b = buckets.get(key);
  if (!b || t - b.start > windowMs) { b = { start: t, count: 0 }; buckets.set(key, b); }
  b.count++;
  return b.count <= limit;
}
setInterval(() => { // 定期清理闲置桶，防内存膨胀
  const t = now();
  for (const [k, b] of buckets) if (t - b.start > 3600 * 1000) buckets.delete(k);
}, 60 * 1000).unref();
function makeRateLimit(name, limit, windowMs) {
  return function (req, res, next) {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const key = name + ':' + ip;
    if (!rateLimitOk(key, limit, windowMs)) {
      return res.status(429).json({ error: 'rate_limited', message: '请求过于频繁，请稍后再试 / Too many attempts, retry later' });
    }
    next();
  };
}
const rateLimitMw = makeRateLimit('auth', parseInt(process.env.RATE_LIMIT_AUTH_MAX || '10', 10), 5 * 60 * 1000); // 登录/注册/短信/重置
const rateLimitWrite = makeRateLimit('write', 30, 5 * 60 * 1000);    // 签到/通知/举报等写操作
const rateLimitEvents = makeRateLimit('events', 120, 5 * 60 * 1000); // 埋点高频
const rateLimitAdmin = makeRateLimit('admin', 60, 5 * 60 * 1000);    // 管理后台
// 短信同号限流：1 次 / 60s（SMS_RESEND_INTERVAL_MS 可调）、5 次 / 小时
const SMS_RESEND_MS = parseInt(process.env.SMS_RESEND_INTERVAL_MS || '60000', 10);
const smsBuckets = new Map();
function smsRateOk(phone) {
  const t = now();
  let b = smsBuckets.get(phone);
  if (!b) { b = { last: 0, start: t, count: 0 }; smsBuckets.set(phone, b); }
  if (t - b.last < SMS_RESEND_MS) return false;
  if (t - b.start > 3600 * 1000) { b.start = t; b.count = 0; }
  if (b.count >= 5) return false;
  b.last = t; b.count++;
  return true;
}
setInterval(() => {
  const t = now();
  for (const [k, b] of smsBuckets) if (t - b.start > 3600 * 1000 && t - b.last > 60 * 1000) smsBuckets.delete(k);
}, 10 * 60 * 1000).unref();

/* ---------------- AI 审核规则引擎（与前端同一套规则） ---------------- */
const AUDIT_AD = ['中介', '保录', '代写', '加微信', 'qq群', '优惠', '包过', '保offer', '保 offer', '代办', '保分', '躺录', '内部名额', '保录取'];
const AUDIT_ABUSE = ['傻逼', '煞笔', '脑残', '弱智', '废物', '垃圾人', '滚蛋', '妈的', 'nmsl', '脑瘫', '智障'];
function auditText(s) {
  s = String(s || '');
  const low = s.toLowerCase();
  const reasons = [];
  const ad = AUDIT_AD.filter(w => low.includes(w.toLowerCase()));
  if (ad.length) reasons.push('疑似广告 / 中介推广（命中：' + [...new Set(ad)].join('、') + '）');
  const ab = AUDIT_ABUSE.filter(w => low.includes(w.toLowerCase()));
  if (ab.length) reasons.push('包含辱骂 / 不当用语（命中：' + [...new Set(ab)].join('、') + '）');
  if (/微信\s*[:：]?\s*[a-zA-Z][\w-]{4,}/.test(s) || /\bv(x|信)\s*[:：]?\s*[a-zA-Z][\w-]{4,}/i.test(s))
    reasons.push('包含微信号等站外联系方式');
  if (/\bq{1,2}\s*[:：]?\s*\d{5,11}\b/i.test(s)) reasons.push('包含 QQ 号等站外联系方式');
  if (/(?<!\d)1[3-9]\d{9}(?!\d)/.test(s)) reasons.push('包含手机号码');
  if (/(https?:\/\/|www\.)\S+/i.test(s)) reasons.push('包含站外链接');
  return { pass: !reasons.length, reasons };
}

/* ---------------- 短信发送（三家实现，无第三方依赖） ----------------
   console ：默认。打印日志并在响应附带 devCode（仅开发用）。
   aliyun  ：env ALIYUN_SMS_KEY / ALIYUN_SMS_SECRET / ALIYUN_SMS_SIGN / ALIYUN_SMS_TEMPLATE
             手写阿里云 POP RPC API (dysmsapi SendSms 2017-05-25) HMAC-SHA1 签名。
   tencent ：env TENCENT_SMS_KEY / TENCENT_SMS_SECRET / TENCENT_SMS_APPID /
                  TENCENT_SMS_SIGN / TENCENT_SMS_TEMPLATE (/ TENCENT_SMS_REGION)
             手写腾讯云 SMS v3 (2021-01-11) TC3-HMAC-SHA256 签名。
   none    ：完全关闭短信验证（注册不要求 code，/api/auth/sms 与 /api/auth/forgot 返回 501）。 */
function httpsJson(options, payload) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = '';
      res.on('data', c => { data += c; if (data.length > 65536) { req.destroy(new Error('响应过大')); } });
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.setTimeout(8000, () => req.destroy(new Error('短信网关请求超时')));
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}
async function aliyunSend(phone, code) {
  const key = process.env.ALIYUN_SMS_KEY, secret = process.env.ALIYUN_SMS_SECRET;
  const sign = process.env.ALIYUN_SMS_SIGN, tpl = process.env.ALIYUN_SMS_TEMPLATE;
  if (!key || !secret || !sign || !tpl) return { ok: false, reason: 'ALIYUN_SMS_KEY/SECRET/SIGN/TEMPLATE 未配置完整' };
  const params = {
    Action: 'SendSms', Version: '2017-05-25', Format: 'JSON', RegionId: 'cn-hangzhou',
    AccessKeyId: key, SignatureMethod: 'HMAC-SHA1', SignatureNonce: crypto.randomUUID(),
    Timestamp: new Date().toISOString().replace(/\.\d{3}Z$/, 'Z'), SignatureVersion: '1.0',
    PhoneNumbers: phone.replace(/^\+/, ''), SignName: sign, TemplateCode: tpl,
    TemplateParam: JSON.stringify({ code })
  };
  const enc = v => encodeURIComponent(String(v)).replace(/\+/g, '%20').replace(/\*/g, '%2A').replace(/%7E/g, '~');
  const canonical = Object.keys(params).sort().map(k => enc(k) + '=' + enc(params[k])).join('&');
  const stringToSign = 'GET&%2F&' + enc(canonical);
  const signature = crypto.createHmac('sha1', secret + '&').update(stringToSign).digest('base64');
  try {
    const r = await httpsJson({ host: 'dysmsapi.aliyuncs.com', path: '/?Signature=' + enc(signature) + '&' + canonical, method: 'GET' });
    const j = JSON.parse(r.body);
    return j.Code === 'OK' ? { ok: true } : { ok: false, reason: j.Message || j.Code || ('HTTP ' + r.status) };
  } catch (e) { return { ok: false, reason: e.message }; }
}
async function tencentSend(phone, code) {
  const secretId = process.env.TENCENT_SMS_KEY, secretKey = process.env.TENCENT_SMS_SECRET;
  const appId = process.env.TENCENT_SMS_APPID, signName = process.env.TENCENT_SMS_SIGN, tplId = process.env.TENCENT_SMS_TEMPLATE;
  if (!secretId || !secretKey || !appId || !signName || !tplId) return { ok: false, reason: 'TENCENT_SMS_KEY/SECRET/APPID/SIGN/TEMPLATE 未配置完整' };
  const service = 'sms', host = 'sms.tencentcloudapi.com', action = 'SendSms', version = '2021-01-11';
  const region = process.env.TENCENT_SMS_REGION || 'ap-guangzhou';
  const timestamp = Math.floor(Date.now() / 1000);
  const payload = JSON.stringify({
    SmsSdkAppId: appId, SignName: signName, TemplateId: tplId,
    TemplateParamSet: [code],
    PhoneNumberSet: [/^\+/.test(phone) ? phone : '+86' + phone]
  });
  const canonicalHeaders = 'content-type:application/json; charset=utf-8\nhost:' + host + '\nx-tc-action:' + action.toLowerCase() + '\n';
  const signedHeaders = 'content-type;host;x-tc-action';
  const canonicalRequest = ['POST', '/', '', canonicalHeaders, signedHeaders, sha256(payload)].join('\n');
  const date = new Date(timestamp * 1000).toISOString().slice(0, 10);
  const credentialScope = date + '/' + service + '/tc3_request';
  const stringToSign = ['TC3-HMAC-SHA256', String(timestamp), credentialScope, sha256(canonicalRequest)].join('\n');
  const kDate = crypto.createHmac('sha256', 'TC3' + secretKey).update(date).digest();
  const kService = crypto.createHmac('sha256', kDate).update(service).digest();
  const kSigning = crypto.createHmac('sha256', kService).update('tc3_request').digest();
  const signature = crypto.createHmac('sha256', kSigning).update(stringToSign).digest('hex');
  const authorization = 'TC3-HMAC-SHA256 Credential=' + secretId + '/' + credentialScope + ', SignedHeaders=' + signedHeaders + ', Signature=' + signature;
  try {
    const r = await httpsJson({
      host, path: '/', method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8', 'Host': host,
        'X-TC-Action': action, 'X-TC-Version': version, 'X-TC-Region': region,
        'X-TC-Timestamp': String(timestamp), 'Authorization': authorization
      }
    }, payload);
    const j = JSON.parse(r.body);
    const st = j.Response && j.Response.SendStatusSet && j.Response.SendStatusSet[0];
    if (st && st.Code === 'Ok') return { ok: true };
    const err = j.Response && j.Response.Error;
    return { ok: false, reason: (st && st.Message) || (err && err.Message) || ('HTTP ' + r.status) };
  } catch (e) { return { ok: false, reason: e.message }; }
}
async function sendSms(phone, code) {
  if (SMS_PROVIDER === 'console') {
    console.log('[sms:console] 验证码 ' + code + ' → ' + maskPhone(phone) + '（10 分钟内有效，仅开发环境使用）');
    return { ok: true, devCode: code };
  }
  if (SMS_PROVIDER === 'aliyun') return aliyunSend(phone, code);
  if (SMS_PROVIDER === 'tencent') return tencentSend(phone, code);
  return { ok: false, reason: '未知 SMS_PROVIDER: ' + SMS_PROVIDER };
}
// 校验并消费验证码：过期/不存在/试错 ≥5 次均失败并作废
function verifySmsCode(phone, scene, code) {
  const row = db.prepare('SELECT * FROM sms_codes WHERE phone=? AND scene=?').get(phone, scene);
  if (!row) return false;
  const del = () => db.prepare('DELETE FROM sms_codes WHERE phone=? AND scene=?').run(phone, scene);
  if (row.expires < now()) { del(); return false; }
  if (row.attempts >= SMS_CODE_MAX_ATTEMPTS) { del(); return false; }
  const ok = typeof code === 'string' && /^\d{6}$/.test(code) &&
    crypto.timingSafeEqual(Buffer.from(sha256(code), 'hex'), Buffer.from(row.code_hash, 'hex'));
  if (ok) { del(); return true; }
  const at = row.attempts + 1;
  if (at >= SMS_CODE_MAX_ATTEMPTS) del();
  else db.prepare('UPDATE sms_codes SET attempts=? WHERE phone=? AND scene=?').run(at, phone, scene);
  return false;
}

/* ---------------- Express 应用 ---------------- */
const app = express();
app.disable('x-powered-by');
app.set('trust proxy', true);
app.use(express.json({ limit: MAX_BODY }));

/* gzip 压缩中间件（node 内置 zlib 手写，不引依赖）：
   Accept-Encoding 含 gzip 且响应体 >1KB 且为可压缩文本类型时压缩；
   对 res.write/res.end 做缓冲包装，静态文件与 API JSON 均生效；
   不改动 Cache-Control（SPA fallback 的 no-cache 等保持原样）。 */
const GZIP_TYPES = /text\/|application\/json|javascript|xml|svg|icon/i;
app.use((req, res, next) => {
  if (!/\bgzip\b/i.test(String(req.headers['accept-encoding'] || ''))) return next();
  const write = res.write, end = res.end;
  const chunks = [];
  let bail = false; // 非可压缩类型 → 直通，避免把大二进制 buffered 在内存
  const compressible = () => GZIP_TYPES.test(String(res.getHeader('content-type') || ''));
  res.write = function (chunk, enc, cb) {
    if (typeof enc === 'function') { cb = enc; enc = undefined; }
    if (!bail && chunks.length === 0 && !compressible()) bail = true;
    if (bail) return write.call(res, chunk, enc, cb);
    if (chunk) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, enc));
    if (cb) cb();
    return true;
  };
  res.end = function (chunk, enc, cb) {
    if (typeof enc === 'function') { cb = enc; enc = undefined; }
    if (bail) return end.call(res, chunk, enc, cb);
    if (chunk) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, enc));
    const body = Buffer.concat(chunks);
    const sc = res.statusCode;
    if (body.length > 1024 && sc >= 200 && sc < 300 && compressible() && !res.getHeader('content-encoding')) {
      zlib.gzip(body, (e, gz) => {
        if (e) {
          if (!res.getHeader('content-length')) res.setHeader('content-length', body.length);
          write.call(res, body); return end.call(res, cb);
        }
        res.removeHeader('content-length');
        res.setHeader('content-encoding', 'gzip');
        res.setHeader('vary', 'Accept-Encoding');
        res.setHeader('content-length', gz.length);
        write.call(res, gz);
        end.call(res, cb);
      });
    } else {
      if (body.length && !res.getHeader('content-length')) res.setHeader('content-length', body.length);
      if (body.length) write.call(res, body);
      end.call(res, cb);
    }
  };
  next();
});

/* helmet 风格安全头（手写，不引依赖） */
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
  if (req.path.startsWith('/api/')) res.setHeader('Cache-Control', 'no-store');
  next();
});

/* Bearer token 认证 */
function authUser(req) {
  const h = req.headers.authorization || '';
  const m = h.match(/^Bearer\s+([0-9a-f]{64})$/i);
  if (!m) return null;
  const row = db.prepare('SELECT s.phone, s.expires, u.nickname, u.is_admin, u.banned FROM sessions s JOIN users u ON u.phone=s.phone WHERE s.token_hash=?')
    .get(sha256(m[1]));
  if (!row) return null;
  if (row.expires < now()) { db.prepare('DELETE FROM sessions WHERE token_hash=?').run(sha256(m[1])); return null; }
  return { phone: row.phone, nick: row.nickname, tokenHash: sha256(m[1]), isAdmin: !!row.is_admin, banned: !!row.banned };
}
function requireAuth(req, res, next) {
  const u = authUser(req);
  if (!u) return res.status(401).json({ error: 'unauthorized', message: '未登录或会话已过期 / Not authenticated' });
  if (u.banned) return res.status(403).json({ error: 'banned', message: '账号已被封禁 / Account banned' });
  req.user = u;
  next();
}
function isAdmin(req, res, next) {
  const u = authUser(req);
  if (!u) return res.status(401).json({ error: 'unauthorized', message: '未登录或会话已过期 / Not authenticated' });
  if (!u.isAdmin) return res.status(403).json({ error: 'forbidden', message: '需要管理员权限 / Admin only' });
  req.user = u;
  next();
}
const profileOf = row => ({
  phone: row.phone, nick: row.nickname, ts: row.created_at,
  isAdmin: !!row.is_admin,
  xp: row.xp || 0, level: levelOf(row.xp || 0).lv, levelName: levelOf(row.xp || 0).name,
  badges: JSON.parse(row.badges || '[]'), streak: row.streak || 0
});

/* ---------------- 成长体系核心 ---------------- */
function userCounts(phone) {
  return {
    posts: db.prepare('SELECT COUNT(*) AS n FROM posts WHERE phone=?').get(phone).n,
    comments: db.prepare('SELECT COUNT(*) AS n FROM comments WHERE phone=?').get(phone).n,
    favs: db.prepare('SELECT COUNT(*) AS n FROM favorites WHERE phone=?').get(phone).n,
    fit: db.prepare("SELECT COUNT(*) AS n FROM xp_log WHERE phone=? AND action='fit'").get(phone).n,
    guardian: db.prepare("SELECT COUNT(*) AS n FROM reports WHERE reporter=? AND status='accepted'").get(phone).n
  };
}
function notify(phone, type, title, body, link) {
  if (!phone || phone === 'system' || phone === 'anonymous') return;
  if (!db.prepare('SELECT phone FROM users WHERE phone=?').get(phone)) return;
  db.prepare('INSERT INTO notifications (phone, type, title, body, link, read, created_at) VALUES (?,?,?,?,?,0,?)')
    .run(phone, cleanStr(type, 24), cleanStr(title, 120), cleanStr(body, 500), cleanStr(link, 300), now());
}
// 徽章检测：返回本次新获得的徽章 id 列表
function checkBadges(phone) {
  const u = db.prepare('SELECT badges, streak FROM users WHERE phone=?').get(phone);
  if (!u) return [];
  const have = new Set(JSON.parse(u.badges || '[]'));
  const c = userCounts(phone);
  const earn = [];
  const give = id => { if (BADGE_IDS.has(id) && !have.has(id)) { have.add(id); earn.push(id); } };
  give('welcome');
  if ((u.streak || 0) >= 7) give('streak7');
  if (c.posts >= 1) give('firstpost');
  if (c.posts >= 10) give('posts10');
  if (c.comments >= 50) give('comments50');
  if (c.favs >= 10) give('favs10');
  if (c.fit >= 10) give('fit10');
  if (c.guardian >= 3) give('guardian3');
  if (earn.length) db.prepare('UPDATE users SET badges=? WHERE phone=?').run(JSON.stringify([...have]), phone);
  return earn;
}
// 加 XP（含 favorite/share 每日上限）、升级检测（触发通知）、徽章检测
function addXp(phone, action, amount) {
  const u = db.prepare('SELECT xp FROM users WHERE phone=?').get(phone);
  if (!u) return null;
  let gain = amount;
  if (action === 'favorite' || action === 'share') {
    const cap = action === 'favorite' ? XP_RULES.favDailyCap : XP_RULES.shareDailyCap;
    const used = db.prepare('SELECT COALESCE(SUM(amount),0) AS s FROM xp_log WHERE phone=? AND action=? AND day=?')
      .get(phone, action, dayStr()).s;
    gain = Math.max(0, Math.min(amount, cap - used));
  }
  const oldLv = levelOf(u.xp);
  if (gain > 0 || amount === 0) { // amount===0 的 fit 事件也落日志（用于徽章计数）
    db.prepare('INSERT INTO xp_log (phone, action, amount, day, created_at) VALUES (?,?,?,?,?)')
      .run(phone, action, gain, dayStr(), now());
  }
  if (gain > 0) db.prepare('UPDATE users SET xp=xp+? WHERE phone=?').run(gain, phone);
  const xp2 = u.xp + gain;
  const newLv = levelOf(xp2);
  const leveledUp = newLv.lv > oldLv.lv;
  if (leveledUp) notify(phone, 'levelup', '升级了：Lv.' + newLv.lv + ' ' + newLv.name, '恭喜晋升为「' + newLv.name + ' / ' + newLv.en + '」，继续探索真相！', '#/growth');
  const newBadges = checkBadges(phone);
  return { gained: gain, xp: xp2, level: newLv.lv, levelName: newLv.name, leveledUp, newBadges };
}
const growthOf = g => (g ? { xp: g.xp, level: g.level, leveledUp: g.leveledUp, newBadges: g.newBadges } : undefined);

/* ---------------- 认证 API ---------------- */
app.post('/api/auth/register', rateLimitMw, (req, res) => {
  const phone = cleanStr(req.body && req.body.phone, 20);
  const password = (req.body && typeof req.body.password === 'string') ? req.body.password : '';
  const nickIn = cleanStr(req.body && req.body.nickname, 12);
  const nickname = nickIn || ('用户' + phone.slice(-4));
  if (!validPhone(phone)) return res.status(400).json({ error: 'bad_phone', message: '手机号格式不正确 / Invalid phone number' });
  if (!validPassword(password)) return res.status(400).json({ error: 'bad_password', message: '密码至少 8 位，且需同时包含字母和数字 / Password needs 8+ chars with letters & digits' });
  if (SMS_PROVIDER !== 'none') {
    const code = cleanStr(req.body && req.body.code, 8);
    if (!code) return res.status(422).json({ error: 'code_required', message: '请先获取短信验证码 / SMS code required' });
    if (!verifySmsCode(phone, 'register', code)) return res.status(422).json({ error: 'code_invalid', message: '验证码错误或已过期 / Invalid or expired code' });
  }
  const exists = db.prepare('SELECT phone FROM users WHERE phone=?').get(phone);
  if (exists) return res.status(409).json({ error: 'already_registered', message: '该手机号已注册，请直接登录 / Phone already registered' });
  // 首个注册用户或 ADMIN_PHONE 匹配者自动成为管理员
  const isFirst = db.prepare('SELECT COUNT(*) AS n FROM users').get().n === 0;
  const isAdmin = (isFirst || (process.env.ADMIN_PHONE && phone === process.env.ADMIN_PHONE)) ? 1 : 0;
  const profileComplete = nickIn ? 1 : 0;
  const salt = crypto.randomBytes(16).toString('hex');
  db.prepare("INSERT INTO users (phone, pass_hash, salt, nickname, created_at, badges, is_admin, profile_complete) VALUES (?,?,?,?,?,'[\"welcome\"]',?,?)")
    .run(phone, scrypt(password, salt), salt, nickname, now(), isAdmin, profileComplete);
  if (profileComplete) addXp(phone, 'profileComplete', XP_RULES.profileComplete); // 资料完善奖励
  const token = newToken();
  db.prepare('INSERT INTO sessions (token_hash, phone, expires) VALUES (?,?,?)')
    .run(sha256(token), phone, now() + TOKEN_TTL_MS);
  const u = db.prepare('SELECT * FROM users WHERE phone=?').get(phone);
  res.json({ token, profile: profileOf(u) });
});

app.post('/api/auth/login', rateLimitMw, (req, res) => {
  const phone = cleanStr(req.body && req.body.phone, 20);
  const password = (req.body && typeof req.body.password === 'string') ? req.body.password : '';
  const fail = () => res.status(401).json({ error: 'bad_credentials', message: '手机号或密码不正确 / Incorrect phone or password' }); // 统一模糊措辞
  if (!validPhone(phone) || !password) return fail();
  const u = db.prepare('SELECT * FROM users WHERE phone=?').get(phone);
  // 用户不存在时也执行一次 scrypt，抹平时间侧信道
  const hash = scrypt(password, u ? u.salt : '0'.repeat(32));
  if (!u) return fail();
  const a = Buffer.from(hash, 'hex'), b = Buffer.from(u.pass_hash, 'hex');
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return fail();
  if (u.banned) return res.status(403).json({ error: 'banned', message: '账号已被封禁，如有疑问请联系管理员 / Account banned' });
  const token = newToken();
  db.prepare('INSERT INTO sessions (token_hash, phone, expires) VALUES (?,?,?)')
    .run(sha256(token), phone, now() + TOKEN_TTL_MS);
  res.json({ token, profile: profileOf(u) });
});

app.get('/api/auth/me', requireAuth, (req, res) => {
  const u = db.prepare('SELECT * FROM users WHERE phone=?').get(req.user.phone);
  if (!u) return res.status(401).json({ error: 'unauthorized', message: '账户不存在 / Account not found' });
  const L = levelOf(u.xp);
  const next = nextLevelOf(u.xp);
  const unread = db.prepare('SELECT COUNT(*) AS n FROM notifications WHERE phone=? AND read=0').get(u.phone).n;
  const favorites = db.prepare('SELECT uni_id FROM favorites WHERE phone=?').all(u.phone).map(r => r.uni_id);
  const list = {};
  db.prepare('SELECT uni_id, tier FROM list_items WHERE phone=?').all(u.phone)
    .forEach(r => { if (TIERS.has(r.tier)) list[r.uni_id] = r.tier; });
  res.json({
    phone: u.phone, nick: u.nickname,
    xp: u.xp, level: L.lv, levelName: L.name, nextLevelXp: next ? next.xp : null,
    badges: JSON.parse(u.badges || '[]'), streak: u.streak, lastCheckin: u.last_checkin,
    unread, isAdmin: !!u.is_admin, favorites, list,
    profile: profileOf(u) // 兼容旧前端
  });
});

app.post('/api/auth/logout', requireAuth, (req, res) => {
  db.prepare('DELETE FROM sessions WHERE token_hash=?').run(req.user.tokenHash);
  res.json({ ok: true });
});

/* 短信验证码：6 位码，DB 存 sha256，10 分钟有效，试错 5 次作废；同号 1/60s、5/hour */
app.post('/api/auth/sms', rateLimitMw, async (req, res) => {
  if (SMS_PROVIDER === 'none') {
    return res.status(501).json({ error: 'sms_disabled', message: '短信验证已关闭（SMS_PROVIDER=none）/ SMS verification disabled' });
  }
  const phone = cleanStr(req.body && req.body.phone, 20);
  const scene = cleanStr(req.body && req.body.scene, 16) || 'register';
  if (!validPhone(phone)) return res.status(400).json({ error: 'bad_phone', message: '手机号格式不正确 / Invalid phone number' });
  if (!['register', 'reset'].includes(scene)) return res.status(400).json({ error: 'bad_scene', message: "scene 仅允许 register|reset" });
  const user = db.prepare('SELECT phone FROM users WHERE phone=?').get(phone);
  if (scene === 'register' && user) return res.status(409).json({ error: 'already_registered', message: '该手机号已注册，请直接登录 / Phone already registered' });
  if (scene === 'reset' && !user) return res.status(404).json({ error: 'not_found', message: '该手机号未注册 / Phone not registered' });
  if (!smsRateOk(phone)) return res.status(429).json({ error: 'sms_rate_limited', message: '发送过于频繁：同号 1 次/60 秒、5 次/小时 / SMS rate limited' });
  const code = String(crypto.randomInt(100000, 1000000));
  const r = await sendSms(phone, code);
  if (!r.ok) return res.status(502).json({ error: 'sms_send_failed', message: '短信发送失败：' + r.reason });
  db.prepare('INSERT OR REPLACE INTO sms_codes (phone, scene, code_hash, expires, attempts, created) VALUES (?,?,?,?,0,?)')
    .run(phone, scene, sha256(code), now() + SMS_CODE_TTL_MS, now());
  const out = { ok: true, ttl: 300 };
  if (r.devCode) out.devCode = r.devCode; // 仅 console/开发模式
  res.json(out);
});

/* 忘记密码：短信验证后重置并吊销该用户全部 token */
app.post('/api/auth/forgot', rateLimitMw, (req, res) => {
  if (SMS_PROVIDER === 'none') {
    return res.status(501).json({ error: 'sms_disabled', message: '短信验证已关闭，无法自助重置密码，请联系管理员 / SMS disabled' });
  }
  const phone = cleanStr(req.body && req.body.phone, 20);
  const code = cleanStr(req.body && req.body.code, 8);
  const newPassword = (req.body && typeof req.body.newPassword === 'string') ? req.body.newPassword : '';
  if (!validPhone(phone)) return res.status(400).json({ error: 'bad_phone', message: '手机号格式不正确 / Invalid phone number' });
  if (!validPassword(newPassword)) return res.status(400).json({ error: 'bad_password', message: '新密码至少 8 位，且需同时包含字母和数字 / Invalid new password' });
  const u = db.prepare('SELECT phone FROM users WHERE phone=?').get(phone);
  if (!u) return res.status(404).json({ error: 'not_found', message: '该手机号未注册 / Phone not registered' });
  if (!verifySmsCode(phone, 'reset', code)) return res.status(422).json({ error: 'code_invalid', message: '验证码错误或已过期 / Invalid or expired code' });
  const salt = crypto.randomBytes(16).toString('hex');
  db.prepare('UPDATE users SET pass_hash=?, salt=? WHERE phone=?').run(scrypt(newPassword, salt), salt, phone);
  db.prepare('DELETE FROM sessions WHERE phone=?').run(phone); // 吊销全部旧 token
  res.json({ ok: true });
});

/* ---------------- 收藏 / 清单 API ---------------- */
app.get('/api/me/favorites', requireAuth, (req, res) => {
  const rows = db.prepare('SELECT uni_id FROM favorites WHERE phone=?').all(req.user.phone);
  res.json({ favorites: rows.map(r => r.uni_id) });
});
app.put('/api/me/favorites', requireAuth, (req, res) => {
  const favs = req.body && req.body.favorites;
  if (!Array.isArray(favs) || favs.length > 500 || !favs.every(x => typeof x === 'string' && x.length > 0 && x.length <= 64))
    return res.status(400).json({ error: 'bad_favorites', message: 'favorites 须为字符串数组（≤500 项）/ favorites must be a string array (≤500)' });
  const tx = db.transaction(() => {
    db.prepare('DELETE FROM favorites WHERE phone=?').run(req.user.phone);
    const ins = db.prepare('INSERT OR IGNORE INTO favorites (phone, uni_id) VALUES (?,?)');
    for (const id of new Set(favs)) ins.run(req.user.phone, id);
  });
  tx();
  checkBadges(req.user.phone); // favs10 徽章
  res.json({ ok: true, count: favs.length });
});

app.get('/api/me/list', requireAuth, (req, res) => {
  const rows = db.prepare('SELECT uni_id, tier FROM list_items WHERE phone=?').all(req.user.phone);
  const list = {};
  rows.forEach(r => { if (TIERS.has(r.tier)) list[r.uni_id] = r.tier; });
  res.json({ list });
});
app.put('/api/me/list', requireAuth, (req, res) => {
  const list = req.body && req.body.list;
  if (!list || typeof list !== 'object' || Array.isArray(list)) return res.status(400).json({ error: 'bad_list', message: 'list 须为 {id: tier} 对象 / list must be an object' });
  const entries = Object.entries(list);
  if (entries.length > 500 || !entries.every(([k, v]) => typeof k === 'string' && k.length > 0 && k.length <= 64 && TIERS.has(v)))
    return res.status(400).json({ error: 'bad_tier', message: 'tier 仅允许 reach|match|safety，且 ≤500 项 / invalid tiers' });
  const tx = db.transaction(() => {
    db.prepare('DELETE FROM list_items WHERE phone=?').run(req.user.phone);
    const ins = db.prepare('INSERT OR REPLACE INTO list_items (phone, uni_id, tier) VALUES (?,?,?)');
    for (const [id, tier] of entries) ins.run(req.user.phone, id, tier);
  });
  tx();
  res.json({ ok: true, count: entries.length });
});

/* ---------------- 成长体系 API ---------------- */
app.post('/api/growth/checkin', rateLimitWrite, requireAuth, (req, res) => {
  const u = db.prepare('SELECT * FROM users WHERE phone=?').get(req.user.phone);
  const today = dayStr();
  if (u.last_checkin === today) {
    return res.status(409).json({ ok: false, already: true, error: 'already_checkin', message: '今天已签到 / Already checked in today', streak: u.streak, xp: u.xp, level: levelOf(u.xp).lv });
  }
  const streak = u.last_checkin === dayStr(now() - DAY_MS) ? (u.streak || 0) + 1 : 1;
  db.prepare('UPDATE users SET streak=?, last_checkin=? WHERE phone=?').run(streak, today, u.phone);
  let gained = XP_RULES.checkin;
  if (streak % 7 === 0) gained += XP_RULES.checkinStreak7; // 每 7 天连签里程碑奖励
  const g = addXp(u.phone, 'checkin', gained);
  if (streak === 7) notify(u.phone, 'streak', '七日之约达成', '连续签到 7 天，额外 +' + XP_RULES.checkinStreak7 + ' XP，徽章「七日之约」已解锁！', '#/growth');
  res.json({ ok: true, gained: g.gained, streak, xp: g.xp, level: g.level, leveledUp: g.leveledUp, newBadges: g.newBadges });
});

app.get('/api/growth/leaderboard', (req, res) => {
  const range = req.query.range === 'week' ? 'week' : 'all';
  let rows;
  if (range === 'week') {
    rows = db.prepare(`SELECT u.phone, u.xp, w.gained FROM users u
      JOIN (SELECT phone, SUM(amount) AS gained FROM xp_log WHERE day>=? GROUP BY phone) w ON w.phone=u.phone
      WHERE u.banned=0 ORDER BY w.gained DESC, u.xp DESC LIMIT 50`).all(dayStr(now() - 6 * DAY_MS));
  } else {
    rows = db.prepare('SELECT phone, xp FROM users WHERE banned=0 ORDER BY xp DESC, created_at ASC LIMIT 50').all();
  }
  res.json(rows.map(r => {
    const L = levelOf(r.xp);
    const out = { phone: maskPhone(r.phone), xp: r.xp, level: L.lv, levelName: L.name };
    if (range === 'week') out.gained = r.gained;
    return out;
  }));
});

/* ---------------- 通知 API ---------------- */
app.get('/api/notifications', requireAuth, (req, res) => {
  const rows = db.prepare('SELECT * FROM notifications WHERE phone=? ORDER BY created_at DESC, id DESC LIMIT 100').all(req.user.phone);
  res.json(rows.map(n => ({ id: n.id, type: n.type, title: n.title, body: n.body, link: n.link, read: !!n.read, createdAt: n.created_at })));
});
app.post('/api/notifications/read', rateLimitWrite, requireAuth, (req, res) => {
  const b = req.body || {};
  if (b.all === true) {
    db.prepare('UPDATE notifications SET read=1 WHERE phone=?').run(req.user.phone);
  } else if (Array.isArray(b.ids)) {
    const ids = b.ids.filter(x => Number.isInteger(x)).slice(0, 200);
    const q = db.prepare('UPDATE notifications SET read=1 WHERE phone=? AND id=?');
    db.transaction(() => ids.forEach(i => q.run(req.user.phone, i)))();
  } else {
    return res.status(400).json({ error: 'bad_request', message: '须传 {ids:[..]} 或 {all:true}' });
  }
  res.json({ ok: true });
});

/* ---------------- 埋点 API（仅存聚合字段，可匿名；type:'xp' 时执行成长规则） ---------------- */
app.post('/api/events', rateLimitEvents, (req, res) => {
  const type = cleanStr(req.body && req.body.type, 16);
  if (!['pv', 'feature', 'xp'].includes(type))
    return res.status(400).json({ error: 'bad_type', message: "type 仅允许 pv|feature|xp" });
  const pth = cleanStr(req.body && req.body.path, 200);
  const action = cleanStr(req.body && req.body.action, 60);
  let metaStr = '';
  const meta = req.body && req.body.meta;
  if (meta && typeof meta === 'object') { try { metaStr = JSON.stringify(meta).slice(0, 500); } catch (e) { metaStr = ''; } }
  else if (typeof meta === 'string') metaStr = meta.slice(0, 500);
  const u = authUser(req); // 可匿名
  const phone = u ? u.phone : '';
  db.prepare('INSERT INTO events (type, path, action, meta, phone, day, created_at) VALUES (?,?,?,?,?,?,?)')
    .run(type, pth, action, metaStr, phone, dayStr(), now());
  const out = { ok: true };
  if (type === 'xp' && u) {
    let g = null;
    if (action === 'favorite') g = addXp(u.phone, 'favorite', XP_RULES.favorite);
    else if (action === 'share') g = addXp(u.phone, 'share', XP_RULES.share);
    else if (action === 'fit') g = addXp(u.phone, 'fit', 0); // fit 不给 XP，仅计数（fit10 徽章）
    if (g) out.growth = { gained: g.gained, xp: g.xp, level: g.level, leveledUp: g.leveledUp, newBadges: g.newBadges };
  }
  res.json(out);
});

/* ---------------- 论坛 API ---------------- */
function postJSON(p, withComments, viewerPhone) {
  const out = {
    id: p.id, title: p.title, body: p.body,
    tags: JSON.parse(p.tags || '[]'),
    nick: p.author,
    phone: p.phone === 'system' ? '' : maskPhone(p.phone), // 输出一律打码
    mine: !!(viewerPhone && p.phone === viewerPhone),
    ts: p.created_at, reports: p.reports, featured: !!p.featured, audit: 'pass'
  };
  if (withComments) {
    out.comments = db.prepare('SELECT id, author AS nick, body, created_at AS ts FROM comments WHERE post_id=? ORDER BY created_at ASC, id ASC').all(p.id);
  }
  return out;
}

app.get('/api/posts', (req, res) => {
  const viewer = authUser(req);
  const tag = cleanStr(req.query.tag, 64);
  const q = cleanStr(req.query.q, 80);
  const cat = cleanStr(req.query.cat, 32);
  let limit = parseInt(req.query.limit, 10); if (!Number.isFinite(limit) || limit < 1) limit = 50;
  limit = Math.min(limit, 100);
  let offset = parseInt(req.query.offset, 10); if (!Number.isFinite(offset) || offset < 0) offset = 0;
  const conds = ['hidden=0'], args = [];
  if (cat === 'featured') conds.push('featured=1'); // 精选视图
  if (tag) { conds.push("EXISTS (SELECT 1 FROM json_each(posts.tags) je WHERE je.value=?)"); args.push(tag); }
  if (q) { conds.push('(title LIKE ? OR body LIKE ? OR author LIKE ?)'); const like = '%' + q.replace(/[%_]/g, '') + '%'; args.push(like, like, like); }
  const sql = `SELECT * FROM posts WHERE ${conds.join(' AND ')} ORDER BY created_at DESC, id DESC LIMIT ? OFFSET ?`;
  const rows = db.prepare(sql).all(...args, limit + 1, offset);
  const hasMore = rows.length > limit;
  const page = rows.slice(0, limit);
  const total = db.prepare(`SELECT COUNT(*) AS n FROM posts WHERE ${conds.join(' AND ')}`).get(...args).n;
  res.json({ posts: page.map(p => postJSON(p, true, viewer && viewer.phone)), total, limit, offset, hasMore });
});

app.post('/api/posts', requireAuth, (req, res) => {
  const title = cleanStr(req.body && req.body.title, 60);
  const body = cleanStr(req.body && req.body.body, 2000);
  let tags = req.body && req.body.tags;
  if (!Array.isArray(tags)) tags = [];
  tags = [...new Set(tags.filter(t => typeof t === 'string' && /^[a-z0-9_-]{1,40}$/i.test(t)))].slice(0, 3);
  if (title.length < 5) return res.status(400).json({ error: 'bad_title', message: '标题须为 5-60 字 / Title must be 5-60 chars' });
  if (body.length < 20) return res.status(400).json({ error: 'bad_body', message: '正文须为 20-2000 字 / Body must be 20-2000 chars' });
  if (!tags.length) return res.status(400).json({ error: 'bad_tags', message: '请至少 tag 1 所学校 / Tag at least 1 school' });
  const audit = auditText(title + '\n' + body);
  if (!audit.pass) return res.status(422).json({ error: 'moderation_blocked', message: '内容未通过 AI 审核 / Blocked by moderation', reasons: audit.reasons });
  const id = newId('p');
  db.prepare('INSERT INTO posts (id, phone, author, title, body, tags, created_at) VALUES (?,?,?,?,?,?,?)')
    .run(id, req.user.phone, req.user.nick, title, body, JSON.stringify(tags), now());
  const g = addXp(req.user.phone, 'post', XP_RULES.post); // 发帖 +20 XP
  const p = db.prepare('SELECT * FROM posts WHERE id=?').get(id);
  res.status(201).json({ post: postJSON(p, true, req.user.phone), growth: growthOf(g) });
});

app.get('/api/posts/:id', (req, res) => {
  const viewer = authUser(req);
  const p = db.prepare('SELECT * FROM posts WHERE id=? AND hidden=0').get(String(req.params.id));
  if (!p) return res.status(404).json({ error: 'not_found', message: '帖子不存在 / Post not found' });
  res.json({ post: postJSON(p, true, viewer && viewer.phone) });
});

app.post('/api/posts/:id/comments', requireAuth, (req, res) => {
  const p = db.prepare('SELECT * FROM posts WHERE id=? AND hidden=0').get(String(req.params.id));
  if (!p) return res.status(404).json({ error: 'not_found', message: '帖子不存在 / Post not found' });
  const body = cleanStr(req.body && req.body.body, 500);
  if (body.length < 2) return res.status(400).json({ error: 'bad_body', message: '评论至少 2 个字 / Comment too short' });
  const audit = auditText(body);
  if (!audit.pass) return res.status(422).json({ error: 'moderation_blocked', message: '评论未通过 AI 审核 / Comment blocked', reasons: audit.reasons });
  const r = db.prepare('INSERT INTO comments (post_id, phone, author, body, created_at) VALUES (?,?,?,?,?)')
    .run(p.id, req.user.phone, req.user.nick, body, now());
  const g = addXp(req.user.phone, 'comment', XP_RULES.comment); // 评论 +8 XP
  // 帖子作者（非自己、非 system）：+3 XP 并触发「我的帖被评论」通知
  if (p.phone && p.phone !== 'system' && p.phone !== req.user.phone) {
    addXp(p.phone, 'commentReceived', XP_RULES.commentReceived);
    notify(p.phone, 'comment', '你的帖子收到新评论', '《' + p.title.slice(0, 40) + '》：' + body.slice(0, 80), '#/post/' + p.id);
  }
  const c = db.prepare('SELECT id, author AS nick, body, created_at AS ts FROM comments WHERE id=?').get(r.lastInsertRowid);
  res.status(201).json({ comment: c, growth: growthOf(g) });
});

/* 举报：计数 ≥3 自动隐藏（原有逻辑），同时落 reports 表支撑管理队列 */
app.post('/api/posts/:id/report', rateLimitWrite, (req, res) => {
  const p = db.prepare('SELECT id, reports, hidden FROM posts WHERE id=?').get(String(req.params.id));
  if (!p) return res.status(404).json({ error: 'not_found', message: '帖子不存在 / Post not found' });
  const u = authUser(req);
  const reporter = u ? u.phone : 'anonymous';
  const reason = cleanStr(req.body && req.body.reason, 200) || '未填写原因';
  db.prepare('INSERT INTO reports (post_id, reporter, reason, status, created_at) VALUES (?,?,?,?,?)')
    .run(p.id, reporter, reason, 'pending', now());
  const reports = p.reports + 1;
  const hidden = reports >= 3 ? 1 : p.hidden;
  db.prepare('UPDATE posts SET reports=?, hidden=? WHERE id=?').run(reports, hidden, p.id);
  res.json({ ok: true, reports, hidden: !!hidden });
});

/* ---------------- 管理后台 API（isAdmin） ---------------- */
// 处理某帖的待办举报：accepted → 举报者 +5 XP + 通知；rejected → 仅通知
function settleReports(postId, status) {
  const rows = db.prepare("SELECT * FROM reports WHERE post_id=? AND status='pending'").all(postId);
  const upd = db.prepare('UPDATE reports SET status=? WHERE id=?');
  for (const r of rows) {
    upd.run(status, r.id);
    if (r.reporter && r.reporter !== 'anonymous') {
      if (status === 'accepted') {
        addXp(r.reporter, 'reportAccepted', XP_RULES.reportAccepted);
        notify(r.reporter, 'report', '举报已处理', '你举报的内容已被管理员处理，感谢维护社区秩序（+' + XP_RULES.reportAccepted + ' XP）', '');
      } else {
        notify(r.reporter, 'report', '举报已审核', '你举报的内容经审核未违规，感谢反馈', '');
      }
    }
  }
  return rows.length;
}

app.get('/api/admin/overview', rateLimitAdmin, isAdmin, (req, res) => {
  const users = db.prepare('SELECT COUNT(*) AS n FROM users').get().n;
  const posts = db.prepare('SELECT COUNT(*) AS n FROM posts').get().n;
  const comments = db.prepare('SELECT COUNT(*) AS n FROM comments').get().n;
  const reportsPending = db.prepare("SELECT COUNT(*) AS n FROM reports WHERE status='pending'").get().n;
  const dau = db.prepare("SELECT COUNT(DISTINCT phone) AS n FROM events WHERE day=? AND phone<>''").get(dayStr()).n;
  const events7d = db.prepare('SELECT day AS date, COUNT(*) AS count FROM events WHERE day>=? GROUP BY day ORDER BY day ASC')
    .all(dayStr(now() - 6 * DAY_MS));
  const topFeatures = db.prepare("SELECT action AS feature, COUNT(*) AS count FROM events WHERE type='feature' AND action<>'' GROUP BY action ORDER BY count DESC LIMIT 10").all();
  res.json({ users, posts, comments, reportsPending, dau, events7d, topFeatures });
});

app.get('/api/admin/reports', rateLimitAdmin, isAdmin, (req, res) => {
  const rows = db.prepare(`SELECT r.id AS rid, r.reason, r.reporter, r.created_at AS rts, p.*
    FROM reports r JOIN posts p ON p.id=r.post_id WHERE r.status='pending' ORDER BY p.created_at DESC, r.created_at ASC`).all();
  const map = new Map();
  for (const r of rows) {
    if (!map.has(r.id)) map.set(r.id, { post: postJSON(r, false, null), count: 0, reasons: [] });
    const g = map.get(r.id);
    g.count++;
    g.reasons.push({ id: r.rid, reason: r.reason, reporter: r.reporter === 'anonymous' ? 'anonymous' : maskPhone(r.reporter), ts: r.rts });
  }
  res.json({ reports: [...map.values()] });
});

const ADMIN_POST_ACTIONS = new Set(['hide', 'unhide', 'feature', 'unfeature', 'delete']);
app.post('/api/admin/posts/:id/:action', rateLimitAdmin, isAdmin, (req, res) => {
  const action = String(req.params.action);
  if (!ADMIN_POST_ACTIONS.has(action)) return res.status(400).json({ error: 'bad_action', message: 'action 仅允许 hide|unhide|feature|unfeature|delete' });
  const p = db.prepare('SELECT * FROM posts WHERE id=?').get(String(req.params.id));
  if (!p) return res.status(404).json({ error: 'not_found', message: '帖子不存在 / Post not found' });
  if (action === 'hide') {
    db.prepare('UPDATE posts SET hidden=1 WHERE id=?').run(p.id);
    settleReports(p.id, 'accepted');
  } else if (action === 'unhide') {
    db.prepare('UPDATE posts SET hidden=0 WHERE id=?').run(p.id);
    settleReports(p.id, 'rejected');
  } else if (action === 'feature') {
    db.prepare('UPDATE posts SET featured=1 WHERE id=?').run(p.id);
  } else if (action === 'unfeature') {
    db.prepare('UPDATE posts SET featured=0 WHERE id=?').run(p.id);
  } else if (action === 'delete') {
    settleReports(p.id, 'accepted');
    db.prepare('DELETE FROM posts WHERE id=?').run(p.id); // comments 级联删除
    return res.json({ ok: true, deleted: true });
  }
  const after = db.prepare('SELECT hidden, featured FROM posts WHERE id=?').get(p.id);
  res.json({ ok: true, hidden: !!after.hidden, featured: !!after.featured });
});

app.post('/api/admin/comments/:id/delete', rateLimitAdmin, isAdmin, (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id)) return res.status(400).json({ error: 'bad_id', message: '评论 id 非法' });
  const r = db.prepare('DELETE FROM comments WHERE id=?').run(id);
  if (!r.changes) return res.status(404).json({ error: 'not_found', message: '评论不存在 / Comment not found' });
  res.json({ ok: true });
});

app.get('/api/admin/users', rateLimitAdmin, isAdmin, (req, res) => {
  const q = cleanStr(req.query.q, 40);
  let rows;
  if (q) {
    const like = '%' + q.replace(/[%_]/g, '') + '%';
    rows = db.prepare('SELECT * FROM users WHERE phone LIKE ? OR nickname LIKE ? ORDER BY created_at DESC LIMIT 100').all(like, like);
  } else {
    rows = db.prepare('SELECT * FROM users ORDER BY created_at DESC LIMIT 100').all();
  }
  res.json({
    users: rows.map(u => ({
      phone: u.phone, // 管理端返回完整手机号以便执行封禁/授权操作（仅限管理员鉴权后可见）
      nick: u.nickname, xp: u.xp, level: levelOf(u.xp).lv, levelName: levelOf(u.xp).name,
      isAdmin: !!u.is_admin, banned: !!u.banned, ts: u.created_at,
      posts: db.prepare('SELECT COUNT(*) AS n FROM posts WHERE phone=?').get(u.phone).n
    }))
  });
});

const ADMIN_USER_ACTIONS = new Set(['ban', 'unban', 'grant-admin', 'revoke-admin']);
app.post('/api/admin/users/:id/:action', rateLimitAdmin, isAdmin, (req, res) => {
  const action = String(req.params.action);
  if (!ADMIN_USER_ACTIONS.has(action)) return res.status(400).json({ error: 'bad_action', message: 'action 仅允许 ban|unban|grant-admin|revoke-admin' });
  const target = db.prepare('SELECT * FROM users WHERE phone=?').get(String(req.params.id));
  if (!target) return res.status(404).json({ error: 'not_found', message: '用户不存在 / User not found' });
  if (target.phone === req.user.phone && (action === 'ban' || action === 'revoke-admin'))
    return res.status(400).json({ error: 'self_action', message: '不能对自己执行该操作 / Cannot target yourself' });
  if (action === 'ban') {
    // 不删会话：requireAuth 对 banned 用户统一 403（契约：登录 403、发/评论 403）
    db.prepare('UPDATE users SET banned=1 WHERE phone=?').run(target.phone);
  } else if (action === 'unban') {
    db.prepare('UPDATE users SET banned=0 WHERE phone=?').run(target.phone);
  } else if (action === 'grant-admin') {
    db.prepare('UPDATE users SET is_admin=1 WHERE phone=?').run(target.phone);
  } else if (action === 'revoke-admin') {
    db.prepare('UPDATE users SET is_admin=0 WHERE phone=?').run(target.phone);
  }
  const after = db.prepare('SELECT banned, is_admin FROM users WHERE phone=?').get(target.phone);
  res.json({ ok: true, banned: !!after.banned, isAdmin: !!after.is_admin });
});

/* ---------------- 收藏校截止日提醒 job（每 6 小时） ----------------
   数据源：WEB_ROOT/assets/data-stats.js（含 ROUNDS / UNI_ALIASES 常量）。
   文件不存在或解析失败时跳过本 job（优雅降级，不影响主服务）。 */
// 从源码中提取 `NAME={...}` / `window.NAME={...}` 的纯对象字面量并求值（避免整文件执行带来的外部依赖）
function extractObjectLiteral(src, name) {
  const m = src.match(new RegExp('(?:window\\.)?' + name + '\\s*=\\s*\\{'));
  if (!m) return null;
  let i = m.index + m[0].length - 1, depth = 0, inStr = false, esc = false, quote = '';
  const start = i;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (inStr) { if (esc) esc = false; else if (ch === '\\') esc = true; else if (ch === quote) inStr = false; continue; }
    if (ch === '"' || ch === "'" || ch === '`') { inStr = true; quote = ch; continue; }
    if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) break; }
  }
  if (depth !== 0) return null;
  try { return vm.runInNewContext('(' + src.slice(start, i + 1) + ')', Object.create(null), { timeout: 1000 }); }
  catch (e) { return null; }
}
function loadRounds() {
  const f = path.join(WEB_ROOT, 'assets', 'data-stats.js');
  if (!fs.existsSync(f)) return null;
  try {
    const src = fs.readFileSync(f, 'utf8');
    const ROUNDS = extractObjectLiteral(src, 'ROUNDS');
    if (!ROUNDS || typeof ROUNDS !== 'object') { console.error('[deadline-job] data-stats.js 中未找到 ROUNDS 字面量'); return null; }
    const ALIAS = extractObjectLiteral(src, 'UNI_ALIASES') || {};
    return { ROUNDS, ALIAS };
  } catch (e) {
    console.error('[deadline-job] data-stats.js 解析失败：', e.message);
    return null;
  }
}
const MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
// 'Nov 1' → 最近一次未来的该月日时间戳
function parseRoundDate(s) {
  if (!s || typeof s !== 'string') return null;
  const m = s.trim().match(/^([A-Za-z]{3,9})\s+(\d{1,2})/);
  if (!m) return null;
  const mo = MONTHS[m[1].slice(0, 3).toLowerCase()];
  if (mo == null) return null;
  const day = parseInt(m[2], 10);
  const yr = new Date().getFullYear();
  let d = new Date(yr, mo, day);
  if (d.getTime() < now() - DAY_MS) d = new Date(yr + 1, mo, day); // 今年已过 → 下一申请季
  return d.getTime();
}
function deadlineJob() {
  const data = loadRounds();
  if (!data) return; // 优雅降级
  const ROUNDS = data.ROUNDS, ALIAS = data.ALIAS || {};
  const favs = db.prepare('SELECT phone, uni_id FROM favorites').all();
  let sent = 0;
  for (const f of favs) {
    const key = ALIAS[f.uni_id] || f.uni_id;
    const r = ROUNDS[key];
    if (!r) continue;
    for (const rnd of ['ed1', 'ed2', 'ea', 'rea', 'rd']) {
      const ts = parseRoundDate(r[rnd]);
      if (!ts) continue;
      const days = Math.floor((ts - now()) / DAY_MS);
      if (days < 0 || days > 14) continue; // 仅 ≤14 天
      const title = '截止日提醒：' + key + ' ' + rnd.toUpperCase() + ' ' + r[rnd];
      // 24h 内同标题去重
      const dup = db.prepare("SELECT id FROM notifications WHERE phone=? AND type='deadline' AND title=? AND created_at>?")
        .get(f.phone, title, now() - DAY_MS);
      if (dup) continue;
      notify(f.phone, 'deadline', title,
        key + ' 的 ' + rnd.toUpperCase() + ' 截止日（' + r[rnd] + '）距今约 ' + days + ' 天' + (r.note ? '：' + String(r.note).slice(0, 80) : ''),
        '#/timeline');
      sent++;
    }
  }
  if (sent) console.log('[deadline-job] 生成 ' + sent + ' 条截止日提醒');
}
setTimeout(() => { try { deadlineJob(); } catch (e) { console.error('[deadline-job]', e.message); } }, 8000).unref();
setInterval(() => { try { deadlineJob(); } catch (e) { console.error('[deadline-job]', e.message); } }, 6 * 3600 * 1000).unref();

/* ---------------- 健康检查 ---------------- */
app.get('/api/health', (req, res) => res.json({ ok: true, mode: 'server' }));

/* ---------------- 种子导入 ---------------- */
function importSeed() {
  const n = db.prepare('SELECT COUNT(*) AS n FROM posts').get().n;
  if (n > 0) return;
  const f = path.join(__dirname, 'seed_posts.json');
  if (!fs.existsSync(f)) return;
  let items;
  try { items = JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { console.error('[seed] seed_posts.json 解析失败：', e.message); return; }
  if (!Array.isArray(items)) return;
  const ins = db.prepare('INSERT OR IGNORE INTO posts (id, phone, author, title, body, tags, created_at, reports, hidden) VALUES (?,?,?,?,?,?,?,0,0)');
  const tx = db.transaction(list => {
    list.forEach((it, i) => {
      const title = cleanStr(it.title || it.t, 60);
      let body = cleanStr(it.body || it.zh || '', 2000);
      const pf = cleanStr(it.pf || it.platform || '', 40);
      const url = cleanStr(it.url || '', 300);
      if (pf || url) body += (body ? '\n\n' : '') + `转载自${pf || '网络'}，原文：${url}`;
      if (title.length < 2 || !body) return;
      let tags = Array.isArray(it.tags || it.tag) ? (it.tags || it.tag) : [];
      tags = tags.filter(t => typeof t === 'string').slice(0, 3);
      const ts = Number(it.ts) || (it.d ? Date.parse(it.d) : NaN);
      ins.run(newId('seed'), 'system', cleanStr(it.author || it.a || '佚名', 30), title, body,
        JSON.stringify(tags), Number.isFinite(ts) ? ts : now() - i * 60000);
    });
  });
  tx(items);
  console.log(`[seed] 已导入 ${items.length} 条种子帖`);
}
importSeed();

/* ---------------- 定期清理过期会话 / 过期验证码 ---------------- */
setInterval(() => {
  db.prepare('DELETE FROM sessions WHERE expires<?').run(now());
  db.prepare('DELETE FROM sms_codes WHERE expires<?').run(now());
}, 3600 * 1000).unref();

/* ---------------- 静态托管 ---------------- */
app.use(express.static(WEB_ROOT, {
  index: 'index.html',
  maxAge: '1h',
  setHeaders(res, fp) {
    if (fp.endsWith('.html')) res.setHeader('Cache-Control', 'no-cache');
  }
}));
// SPA 兜底：非 /api 的 GET 一律回 index.html
app.get(/^\/(?!api\/).*/, (req, res) => {
  const f = path.join(WEB_ROOT, 'index.html');
  if (fs.existsSync(f)) return res.sendFile(f);
  res.status(404).send('index.html not found — set WEB_ROOT or place index.html next to server/');
});

/* 404 / 错误处理 */
app.use('/api', (req, res) => res.status(404).json({ error: 'not_found', message: 'Not found' }));
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err && err.type === 'entity.too.large') return res.status(413).json({ error: 'too_large', message: '请求体过大 / Payload too large' });
  if (err && err.type === 'entity.parse.failed') return res.status(400).json({ error: 'bad_json', message: 'JSON 格式错误 / Bad JSON' });
  console.error('[error]', err);
  res.status(500).json({ error: 'internal', message: '服务器内部错误 / Internal server error' });
});

/* ---------------- 启动 / 优雅关闭 ---------------- */
const server = app.listen(PORT, () => {
  console.log(`UniVeritas server listening on http://0.0.0.0:${PORT}`);
  console.log(`WEB_ROOT = ${WEB_ROOT}`);
  console.log(`DB       = ${DB_FILE}`);
  console.log(`SMS      = ${SMS_PROVIDER}${SMS_PROVIDER === 'console' ? '（开发模式，验证码经 devCode 返回）' : ''}`);
});
function shutdown(sig) {
  console.log(`\n${sig} received, shutting down…`);
  server.close(() => {
    try { db.close(); } catch (e) {}
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 5000).unref();
}
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
