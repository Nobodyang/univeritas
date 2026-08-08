/* UniVeritas v16 冒烟测试：拉起独立实例（临时 DATA_DIR，console 短信），curl 全端点。
   用法：node test_server_v16.js  （退出码 0 = 全过） */
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = 3199;
const BASE = 'http://127.0.0.1:' + PORT;
const WEB_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'uv-v16-test-'));

let passed = 0, failed = 0;
const fails = [];
function ok(cond, name, extra) {
  if (cond) { passed++; console.log('  ✓ ' + name); }
  else { failed++; fails.push(name); console.log('  ✗ ' + name + (extra !== undefined ? ' → ' + JSON.stringify(extra) : '')); }
}
// 原始 http 请求（不自动解压，便于检查 gzip 头）
function req(method, p, { body, token, gzip } = {}) {
  return new Promise((resolve, reject) => {
    const data = body !== undefined ? Buffer.from(JSON.stringify(body)) : null;
    const headers = { 'Content-Type': 'application/json' };
    if (data) headers['Content-Length'] = data.length;
    if (token) headers['Authorization'] = 'Bearer ' + token;
    if (gzip) headers['Accept-Encoding'] = 'gzip';
    const r = http.request(BASE + p, { method, headers }, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const raw = Buffer.concat(chunks);
        let json = null;
        try { json = JSON.parse(raw.toString('utf8')); } catch (e) {}
        resolve({ status: res.statusCode, headers: res.headers, raw, json });
      });
    });
    r.on('error', reject);
    if (data) r.write(data);
    r.end();
  });
}
const wait = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const child = spawn(process.execPath, [path.join(__dirname, 'server.js')], {
    env: {
      ...process.env, PORT: String(PORT), DATA_DIR, WEB_ROOT,
      SMS_PROVIDER: 'console', SMS_RESEND_INTERVAL_MS: '1', RATE_LIMIT_AUTH_MAX: '100'
    },
    stdio: ['ignore', 'pipe', 'pipe']
  });
  child.stderr.on('data', d => process.stderr.write('[server] ' + d));
  let up = false;
  for (let i = 0; i < 60; i++) {
    await wait(250);
    try { const h = await req('GET', '/api/health'); if (h.json && h.json.ok) { up = true; break; } } catch (e) {}
  }
  if (!up) { console.error('server 未能启动'); child.kill(); process.exit(1); }
  console.log('server up (DATA_DIR=' + DATA_DIR + ')');

  /* ---- gzip：静态文件 ---- */
  console.log('\n[gzip]');
  const g1 = await req('GET', '/index.html', { gzip: true });
  ok(g1.status === 200 && g1.headers['content-encoding'] === 'gzip', 'GET /index.html 带 gzip → content-encoding: gzip', { status: g1.status, ce: g1.headers['content-encoding'] });
  const g2 = await req('GET', '/index.html');
  ok(g2.status === 200 && !g2.headers['content-encoding'], '不带 Accept-Encoding → 不压缩');
  const g3 = await req('GET', '/api/health', { gzip: true });
  ok(g3.status === 200 && !g3.headers['content-encoding'], '小响应(<1KB)不压缩');

  /* ---- 短信 + 注册 ---- */
  console.log('\n[auth/sms/register]');
  const p1 = '13800001111', p2 = '13900002222', pw = 'passw0rd123';
  const sms1 = await req('POST', '/api/auth/sms', { body: { phone: p1, scene: 'register' } });
  ok(sms1.status === 200 && sms1.json.ok && sms1.json.ttl === 300 && /^\d{6}$/.test(sms1.json.devCode || ''), 'sms(register) → ok+ttl:300+devCode', sms1.json);
  const badReg = await req('POST', '/api/auth/register', { body: { phone: p1, password: pw, code: '000000' } });
  ok(badReg.status === 422 && badReg.json.error === 'code_invalid', '错误验证码注册 → 422 code_invalid', badReg.json);
  const reg1 = await req('POST', '/api/auth/register', { body: { phone: p1, password: pw, nickname: '管理员甲', code: sms1.json.devCode } });
  ok(reg1.status === 200 && reg1.json.token && reg1.json.profile.isAdmin === true, '首个注册用户 → token + isAdmin=true', reg1.json.profile);
  const t1 = reg1.json.token;
  const noCode = await req('POST', '/api/auth/register', { body: { phone: '13700003333', password: pw } });
  ok(noCode.status === 422 && noCode.json.error === 'code_required', '缺 code 注册 → 422 code_required', noCode.json);

  const sms2 = await req('POST', '/api/auth/sms', { body: { phone: p2, scene: 'register' } });
  const reg2 = await req('POST', '/api/auth/register', { body: { phone: p2, password: pw, code: sms2.json.devCode } });
  ok(reg2.status === 200 && reg2.json.profile.isAdmin === false, '第二个用户非管理员', reg2.json.profile);
  const t2 = reg2.json.token;

  /* ---- me ---- */
  console.log('\n[me]');
  const me1 = await req('GET', '/api/auth/me', { token: t1 });
  ok(me1.status === 200 && me1.json.phone === p1 && me1.json.isAdmin === true &&
    Array.isArray(me1.json.badges) && me1.json.badges.includes('welcome') &&
    me1.json.level === 1 && me1.json.nextLevelXp === 50 &&
    Array.isArray(me1.json.favorites) && typeof me1.json.list === 'object' &&
    typeof me1.json.unread === 'number', 'me 返回契约全字段（xp/level/badges/unread/favorites/list…）', me1.json);
  const xpAfterReg = me1.json.xp; // 有 nickname → profileComplete +15
  ok(xpAfterReg === 15, '注册带昵称 → profileComplete +15 XP', xpAfterReg);

  /* ---- 签到 ---- */
  console.log('\n[checkin]');
  const ci1 = await req('POST', '/api/growth/checkin', { token: t1, body: {} });
  ok(ci1.status === 200 && ci1.json.ok && ci1.json.gained === 10 && ci1.json.streak === 1 && ci1.json.leveledUp === false, '首次签到 +10 streak=1', ci1.json);
  const ci2 = await req('POST', '/api/growth/checkin', { token: t1, body: {} });
  ok(ci2.status === 409 && ci2.json.ok === false && ci2.json.already === true, '重复签到 → 409 already:true', ci2.json);

  /* ---- 发帖 XP + 评论 XP/通知 ---- */
  console.log('\n[posts/comments/xp]');
  const longBody = '这是一篇关于申请季时间线梳理的长帖正文。' + '内容填充，用于触发 gzip 压缩阈值测试。'.repeat(60);
  const post1 = await req('POST', '/api/posts', { token: t1, body: { title: '申请季时间线经验分享帖', body: longBody, tags: ['harvard'] } });
  ok(post1.status === 201 && post1.json.growth && post1.json.growth.xp === 15 + 10 + 20 && post1.json.growth.leveledUp === false &&
    post1.json.post.phone === '138****1111' && post1.json.post.mine === true, '发帖 +20 XP，phone 打码，mine=true', { growth: post1.json.growth, phone: post1.json.post && post1.json.post.phone });
  const pid = post1.json.post.id;
  ok(Array.isArray(post1.json.growth.newBadges) && post1.json.growth.newBadges.includes('firstpost'), '首帖徽章 firstpost', post1.json.growth.newBadges);

  const c1 = await req('POST', '/api/posts/' + pid + '/comments', { token: t2, body: { body: '写得很好，收藏了！' } });
  ok(c1.status === 201 && c1.json.growth && c1.json.growth.xp === 8, '评论者 +8 XP', c1.json.growth);
  const cid = c1.json.comment.id;
  const me1b = await req('GET', '/api/auth/me', { token: t1 });
  ok(me1b.json.xp === 15 + 10 + 20 + 3, '帖作者收到评论 +3 XP（commentReceived）', me1b.json.xp);
  ok(me1b.json.unread >= 1, '帖作者有未读通知', me1b.json.unread);
  const n1 = await req('GET', '/api/notifications', { token: t1 });
  ok(n1.status === 200 && n1.json.some(n => n.type === 'comment' && n.link === '#/post/' + pid), '评论触发「我的帖被评论」通知', n1.json.map(n => n.type));
  const nr = await req('POST', '/api/notifications/read', { token: t1, body: { all: true } });
  const me1c = await req('GET', '/api/auth/me', { token: t1 });
  ok(nr.json.ok && me1c.json.unread === 0, 'notifications/read {all:true} → unread=0');

  /* ---- 排行榜打码 ---- */
  console.log('\n[leaderboard]');
  const lbAll = await req('GET', '/api/growth/leaderboard?range=all');
  ok(lbAll.status === 200 && Array.isArray(lbAll.json) && lbAll.json.length === 2 &&
    lbAll.json.every(r => /^\d{3}\*{4}\d{4}$/.test(r.phone)) &&
    !JSON.stringify(lbAll.json).includes(p1) && !JSON.stringify(lbAll.json).includes(p2),
    'leaderboard(all) 手机号全部打码', lbAll.json);
  const lbWeek = await req('GET', '/api/growth/leaderboard?range=week');
  ok(lbWeek.status === 200 && lbWeek.json[0] && typeof lbWeek.json[0].gained === 'number', 'leaderboard(week) 带 gained', lbWeek.json);

  /* ---- 埋点 + XP 事件每日上限 ---- */
  console.log('\n[events]');
  const ev1 = await req('POST', '/api/events', { body: { type: 'pv', path: '/', action: '', meta: { ref: 'test' } } });
  ok(ev1.status === 200 && ev1.json.ok, '匿名 pv 埋点 ok');
  await req('POST', '/api/events', { token: t2, body: { type: 'feature', action: 'map-open', path: '/' } });
  let favGain = 0, capped = false;
  for (let i = 0; i < 6; i++) { // favorite +2/次，favDailyCap=10 → 第 6 次应被 cap 到 0
    const r = await req('POST', '/api/events', { token: t2, body: { type: 'xp', action: 'favorite' } });
    if (r.json.growth) favGain += r.json.growth.gained;
    if (r.json.growth && r.json.growth.gained === 0) capped = true;
  }
  ok(favGain === 10 && capped, 'favorite XP 每日上限 10（前 5 次 +2，第 6 次 0）', favGain);
  const evBad = await req('POST', '/api/events', { body: { type: 'hack' } });
  ok(evBad.status === 400, '非法 type → 400');

  /* ---- gzip：API JSON >1KB ---- */
  console.log('\n[gzip api]');
  const gApi = await req('GET', '/api/posts?limit=10', { gzip: true });
  ok(gApi.status === 200 && gApi.headers['content-encoding'] === 'gzip' && gApi.raw.length < g2.raw.length, 'API JSON >1KB → gzip', { ce: gApi.headers['content-encoding'], size: gApi.raw.length });

  /* ---- 管理后台 ---- */
  console.log('\n[admin]');
  const admDeny = await req('GET', '/api/admin/overview', { token: t2 });
  ok(admDeny.status === 403, '非管理员访问 admin → 403');
  const ov = await req('GET', '/api/admin/overview', { token: t1 });
  ok(ov.status === 200 && ov.json.users === 2 && ov.json.posts >= 1 && ov.json.comments === 1 &&
    ov.json.dau >= 1 && Array.isArray(ov.json.events7d) && ov.json.events7d.length >= 1 &&
    ov.json.topFeatures.some(f => f.feature === 'map-open'), 'overview 全字段（users/posts/comments/dau/events7d/topFeatures）', ov.json);

  const rep = await req('POST', '/api/posts/' + pid + '/report', { token: t2, body: { reason: '测试举报：疑似不实信息' } });
  ok(rep.status === 200 && rep.json.ok && rep.json.reports === 1, '举报 +1 落 reports 表', rep.json);
  const ovb = await req('GET', '/api/admin/overview', { token: t1 });
  ok(ovb.json.reportsPending === 1, 'reportsPending=1', ovb.json.reportsPending);
  const rq = await req('GET', '/api/admin/reports', { token: t1 });
  ok(rq.status === 200 && rq.json.reports.length === 1 && rq.json.reports[0].count === 1 &&
    rq.json.reports[0].reasons[0].reason.includes('测试举报') && rq.json.reports[0].reasons[0].reporter === '139****2222',
    '举报队列：post + 次数 + 原因 + 举报者打码', rq.json.reports);
  const xpBefore = (await req('GET', '/api/auth/me', { token: t2 })).json.xp;
  const hide = await req('POST', '/api/admin/posts/' + pid + '/hide', { token: t1, body: {} });
  ok(hide.status === 200 && hide.json.hidden === true, 'admin hide');
  const me2b = await req('GET', '/api/auth/me', { token: t2 });
  ok(me2b.json.xp === xpBefore + 5, '举报被采纳 → 举报者 +5 XP（reportAccepted）', { before: xpBefore, after: me2b.json.xp });
  const n2 = await req('GET', '/api/notifications', { token: t2 });
  ok(n2.json.some(n => n.type === 'report'), '举报处理结果通知', n2.json.map(n => n.type));
  const ghost = await req('GET', '/api/posts/' + pid);
  ok(ghost.status === 404, '隐藏后帖子对外 404');
  const unhide = await req('POST', '/api/admin/posts/' + pid + '/unhide', { token: t1, body: {} });
  ok(unhide.status === 200 && unhide.json.hidden === false, 'admin unhide');
  const feat = await req('POST', '/api/admin/posts/' + pid + '/feature', { token: t1, body: {} });
  const featList = await req('GET', '/api/posts?cat=featured');
  ok(feat.json.featured === true && featList.json.posts.some(p => p.id === pid && p.featured === true), 'feature 后 cat=featured 可见');
  await req('POST', '/api/admin/posts/' + pid + '/unfeature', { token: t1, body: {} });
  const featList2 = await req('GET', '/api/posts?cat=featured');
  ok(!featList2.json.posts.some(p => p.id === pid), 'unfeature 后精选列表为空');

  const users = await req('GET', '/api/admin/users?q=139', { token: t1 });
  ok(users.status === 200 && users.json.users.length === 1 && users.json.users[0].phone === p2, 'admin users?q= 搜索', users.json.users);

  const delC = await req('POST', '/api/admin/comments/' + cid + '/delete', { token: t1, body: {} });
  const afterDelC = await req('GET', '/api/posts/' + pid);
  ok(delC.json.ok && afterDelC.json.post.comments.length === 0, 'admin 删除评论');

  /* ---- 封禁 ---- */
  console.log('\n[ban]');
  const ban = await req('POST', '/api/admin/users/' + p2 + '/ban', { token: t1, body: {} });
  ok(ban.json.ok && ban.json.banned === true, 'ban 用户');
  const loginBanned = await req('POST', '/api/auth/login', { body: { phone: p2, password: pw } });
  ok(loginBanned.status === 403 && loginBanned.json.error === 'banned', '被封禁登录 → 403 banned', loginBanned.json);
  const postBanned = await req('POST', '/api/posts', { token: t2, body: { title: '封禁后尝试发帖测试', body: '封禁后尝试发帖的正文内容，应该被拒绝。', tags: ['yale'] } });
  ok(postBanned.status === 403 && postBanned.json.error === 'banned', '被封禁发帖 → 403 banned', postBanned.json);
  const cmtBanned = await req('POST', '/api/posts/' + pid + '/comments', { token: t2, body: { body: '封禁后评论' } });
  ok(cmtBanned.status === 403, '被封禁评论 → 403');
  const unban = await req('POST', '/api/admin/users/' + p2 + '/unban', { token: t1, body: {} });
  ok(unban.json.ok && unban.json.banned === false, 'unban 恢复');
  const ga = await req('POST', '/api/admin/users/' + p2 + '/grant-admin', { token: t1, body: {} });
  const ov2 = await req('GET', '/api/admin/overview', { token: t2 });
  ok(ga.json.isAdmin === true && ov2.status === 200, 'grant-admin 后可访问后台');
  const ra = await req('POST', '/api/admin/users/' + p2 + '/revoke-admin', { token: t1, body: {} });
  ok(ra.json.isAdmin === false, 'revoke-admin');
  const selfBan = await req('POST', '/api/admin/users/' + p1 + '/ban', { token: t1, body: {} });
  ok(selfBan.status === 400, '不能封禁自己');

  /* ---- 忘记密码 ---- */
  console.log('\n[forgot]');
  const smsR = await req('POST', '/api/auth/sms', { body: { phone: p1, scene: 'reset' } });
  ok(smsR.status === 200 && /^\d{6}$/.test(smsR.json.devCode || ''), 'sms(reset) → devCode');
  const npw = 'newpass456x';
  const fg = await req('POST', '/api/auth/forgot', { body: { phone: p1, code: smsR.json.devCode, newPassword: npw } });
  ok(fg.status === 200 && fg.json.ok, 'forgot 重置成功');
  const oldTok = await req('GET', '/api/auth/me', { token: t1 });
  ok(oldTok.status === 401, '旧 token 已吊销 → 401');
  const loginNew = await req('POST', '/api/auth/login', { body: { phone: p1, password: npw } });
  ok(loginNew.status === 200 && loginNew.json.token, '新密码登录成功');
  const loginOld = await req('POST', '/api/auth/login', { body: { phone: p1, password: pw } });
  ok(loginOld.status === 401, '旧密码登录 → 401');

  child.kill('SIGTERM');
  fs.rmSync(DATA_DIR, { recursive: true, force: true });
  console.log('\n========== 结果：' + passed + ' 通过, ' + failed + ' 失败 ==========');
  if (fails.length) console.log('失败项：\n - ' + fails.join('\n - '));
  process.exit(failed ? 1 : 0);
}
main().catch(e => { console.error(e); process.exit(1); });
