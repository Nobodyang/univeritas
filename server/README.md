# 学府真鉴 UniVeritas · 自部署后端

为单文件 SPA「学府真鉴 UniVeritas」提供真实后端：账号注册登录、收藏/选校清单云同步、论坛发帖/评论/举报（含服务端 AI 规则审核）。

- 仅两个 npm 依赖：`express` + `better-sqlite3`
- Node.js **>= 18**（推荐 20 LTS）
- 数据库：SQLite 单文件（`server/data/univeritas.db`），零外部服务
- 前端离线降级：检测不到 `/api/health` 时，index.html 自动回退为纯 localStorage 演示模式，静态托管完全可用

---

## 1. 快速开始（裸机 / VPS）

```bash
# 1) 目录结构：把前端 index.html 放在 server/ 的同级目录
#    your-site/
#      index.html        ← 前端单文件
#      server/           ← 本目录
cd server

# 2) 安装依赖（better-sqlite3 是原生模块，Linux 需 python3/make/g++；
#    大多数平台会自动下载预编译二进制，无需编译）
npm install

# 3) 启动（默认端口 3000，可用 PORT 覆盖）
npm start
# 或 PORT=8080 node server.js
```

打开 `http://服务器IP:3000` 即可。首页右上角注册账号（手机号 + 密码），
收藏、清单、发帖全部写入服务器 SQLite。

### 环境变量

| 变量 | 默认 | 说明 |
|---|---|---|
| `PORT` | `3000` | 监听端口 |
| `WEB_ROOT` | `server/` 上级目录（含 index.html 者） | 前端静态文件目录 |
| `DATA_DIR` | `server/data` | SQLite 数据目录 |
| `SMS_PROVIDER` | `console` | 短信服务商：`console`（开发，验证码经日志+响应 `devCode` 返回）/ `aliyun` / `tencent` / `none`（完全关闭短信验证，注册不要求 code，forgot 不可用） |
| `ADMIN_PHONE` | 未设置 | 指定管理员手机号；否则**首个注册用户**自动成为管理员 |
| `ALIYUN_SMS_KEY` / `ALIYUN_SMS_SECRET` / `ALIYUN_SMS_SIGN` / `ALIYUN_SMS_TEMPLATE` | 未设置 | 阿里云短信（AccessKey / 签名 / 模板 CODE） |
| `TENCENT_SMS_KEY` / `TENCENT_SMS_SECRET` / `TENCENT_SMS_APPID` / `TENCENT_SMS_SIGN` / `TENCENT_SMS_TEMPLATE` / `TENCENT_SMS_REGION` | 未设置（region 默认 `ap-guangzhou`） | 腾讯云短信（SecretId/Key / SdkAppId / 签名 / 模板 ID） |
| `SMS_RESEND_INTERVAL_MS` | `60000` | 同号短信重发间隔（另有限制 5 次/小时） |
| `RATE_LIMIT_AUTH_MAX` | `10` | 登录/注册/短信/重置接口每 IP 每 5 分钟次数上限 |

完整示例见 `.env.example`。

### ICP 备案占位（前端）

`index.html` 内置 `window.__ICP_NO`（默认空字符串，不显示）。自部署完成备案后，
在 `index.html` 中将其改为实际备案号（如 `window.__ICP_NO='京ICP备2024000000号-1';`），
页脚即自动显示并链接至工信部备案查询页。另：页脚的《隐私政策》《用户协议》为模板草案
（`#/privacy`、`#/terms` 路由），上线前请法务审核。

---

## 2. systemd 常驻（推荐）

`/etc/systemd/system/univeritas.service`：

```ini
[Unit]
Description=UniVeritas server
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/univeritas/server
ExecStart=/usr/bin/node server.js
Restart=on-failure
RestartSec=3
Environment=PORT=3000
Environment=NODE_ENV=production
# 以低权限用户运行（提前 chown -R univeritas:univeritas /opt/univeritas）
User=univeritas
NoNewPrivileges=true
ProtectSystem=full
ProtectHome=true

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now univeritas
journalctl -u univeritas -f   # 查看日志
```

---

## 3. nginx 反向代理

```nginx
server {
    listen 80;
    server_name example.com;

    client_max_body_size 1m;   # API 体积极小，限制上传大小

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        # 本站无 WebSocket，无需 Upgrade 头
    }
}
```

---

## 4. HTTPS 建议

**最简单：Caddy**。安装后 `/etc/caddy/Caddyfile` 只需两行：

```
example.com
reverse_proxy 127.0.0.1:3000
```

Caddy 自动申请并续期 Let's Encrypt 证书。
用 nginx 则推荐 `certbot --nginx` 自动签证书。
生产环境务必走 HTTPS——登录密码与会话 token 都在传输中。

---

## 5. Docker

```bash
# 在仓库根目录（index.html 与 server/ 同级）构建：
docker build -f server/Dockerfile -t univeritas .
docker run -d --name univeritas -p 3000:3000 \
  -v univeritas-data:/app/data univeritas
```

数据持久化在命名卷 `univeritas-data`（容器内 `/app/data`）。

---

## 6. 短信验证（v16 起内建三家实现，零额外依赖）

`SMS_PROVIDER` 四种取值：

| 值 | 行为 |
|---|---|
| `console`（默认） | 验证码打印到服务日志，并在 `/api/auth/sms` 响应附带 `devCode`（**仅开发用**，生产勿用） |
| `aliyun` | 阿里云 dysmsapi SendSms（POP RPC API，HMAC-SHA1 签名，手写无 SDK） |
| `tencent` | 腾讯云 sms.tencentcloudapi.com SendSms（v3 TC3-HMAC-SHA256 签名，手写无 SDK） |
| `none` | 完全关闭短信验证：注册不要求 `code`；`/api/auth/sms`、`/api/auth/forgot` 返回 501 |

规则（契约固定）：6 位数字码，DB 只存 SHA-256，10 分钟有效，试错 5 次作废；
同号 1 次/60s、5 次/小时；`scene` 为 `register` 或 `reset`。

开通指引：

1. **阿里云**：控制台 → 短信服务 → 申请签名与「验证码」模板（需企业资质）→
   拿到 AccessKeyId/Secret，设置 `ALIYUN_SMS_KEY/SECRET/SIGN/TEMPLATE`。
2. **腾讯云**：控制台 → 短信 → 申请签名与模板 → 拿到 SecretId/SecretKey 与
   SDK AppID，设置 `TENCENT_SMS_KEY/SECRET/APPID/SIGN/TEMPLATE`（`TENCENT_SMS_REGION` 可选）。

未配置完整环境变量时发送会返回 502 与缺失说明。`SMS_PROVIDER` 非 `none` 时，
注册与重置密码**强制校验验证码**（校验失败 422 `code_invalid`）。

## 6.1 管理后台（isAdmin）

- 管理员来源：**首个注册用户** 或 `ADMIN_PHONE` 环境变量指定的手机号（二者满足其一即 `is_admin=1`）。
- 老库迁移：启动时若全库无管理员，自动提拔 `ADMIN_PHONE` 匹配者，否则最早注册用户。
- 后台 API（均需 Bearer token + 管理员）：`GET /api/admin/overview`（users/posts/comments/
  reportsPending/dau/events7d/topFeatures）、`GET /api/admin/reports`（举报队列）、
  `POST /api/admin/posts/:id/hide|unhide|feature|unfeature|delete`、
  `POST /api/admin/comments/:id/delete`、`GET /api/admin/users?q=`、
  `POST /api/admin/users/:id/ban|unban|grant-admin|revoke-admin`。
- 隐藏/删除帖子会把其待办举报置为 `accepted`（举报者 +5 XP + 通知）；取消隐藏置为 `rejected`（仅通知）。
- 被封禁用户：登录 403、一切鉴权接口（发帖/评论/收藏等）403；不能对自己执行 ban / revoke-admin。
- 公开输出中的手机号一律打码（`138****1234`）；仅管理端 users 列表返回完整手机号以便执行操作。

## 6.2 成长体系（XP / 等级 / 徽章 / 签到）

常量与 `API_CONTRACT_v16.md` 镜像一致（前后端一个字不差）：
`XP_RULES`（签到 10、连签 7 天 +20、发帖 20、评论 8、被评论 3、举报采纳 5、资料完善 15、
收藏 2（日上限 10）、分享 3（日上限 9））、7 级 `LEVELS`、8 枚 `BADGES`。
发帖/评论自动加 XP 并在响应带 `growth` 摘要；收藏/分享/数据对照的 XP 由前端随埋点
`POST /api/events {type:'xp', action:'favorite'|'share'|'fit'}` 落地并执行每日上限；
`POST /api/growth/checkin` 签到（重复 409 `already:true`）；
`GET /api/growth/leaderboard?range=week|all` 排行榜（手机号打码）。

## 6.3 通知与截止日提醒

`GET /api/notifications`、`POST /api/notifications/read {ids|all}`。
触发器：我的帖被评论、举报处理结果、升级、连签 7 天里程碑；另有每 6 小时后台 job
扫描「收藏校 ∩ `assets/data-stats.js` 的 ROUNDS」中 ≤14 天的截止日并生成提醒（24h 去重）。
`assets/data-stats.js` 不存在或解析失败时该 job 自动跳过（优雅降级，不影响主服务）。

## 6.4 埋点与 gzip

- `POST /api/events {type:'pv'|'feature'|'xp', path, action, meta}`：可匿名（sendBeacon），
  仅存聚合字段；管理端 overview 提供 DAU / 7 日事件 / top features。
- gzip：内置 zlib 手写中间件，`Accept-Encoding` 含 gzip 且响应 >1KB 且为文本类型时压缩
  （静态文件与 API JSON 均生效，自动设置 `Vary: Accept-Encoding`，不改动既有缓存头）。

---

## 7. 数据备份与迁移

SQLite 单文件，备份 = 拷目录：

```bash
# 热备份（WAL 模式下安全）：
sqlite3 server/data/univeritas.db ".backup backup.db"
# 或停机后直接整目录拷贝：
cp -r server/data /backup/univeritas-$(date +%F)
```

迁移服务器：停服 → 拷 `server/data/` → 新机器同路径放回 → 启动。

---

## 8. 安全设计说明

- **密码**：Node 内置 `crypto.scrypt` 加盐哈希（每用户独立 16 字节盐），
  不存明文、不引 bcrypt；登录比较用 `timingSafeEqual` 防时序侧信道，
  用户不存在时也执行一次 scrypt 抹平时间差。
- **会话**：token 为 32 字节随机 hex（64 字符），数据库只存其 **SHA-256 哈希**，
  泄露数据库也无法伪造会话；30 天过期，定期清理。
- **SQL**：全部 better-sqlite3 预编译参数化语句，无字符串拼接。
- **限流**：登录/注册/短信接口内存令牌桶，10 次 / 5 分钟 / IP，超出返回 429。
- **登录失败**：统一 401 模糊措辞（「手机号或密码不正确」），不暴露账号是否存在。
- **输入校验**：手机号格式（大陆 `1[3-9]\d{9}` 或 `+国际号 6-15 位`）、
  密码 ≥8 位含字母数字、收藏 ≤500 项、tier 枚举白名单、标签字符白名单、
  标题/正文/评论长度上限，全部服务端强制。
- **安全头**：手写 helmet 风格响应头（nosniff / DENY frame / Referrer-Policy /
  Permissions-Policy / COOP / CORP，API 响应 no-store）；请求体上限 512KB。
- **内容审核**：发帖/评论经服务端规则引擎（广告中介词、辱骂词、
  微信/QQ/电话/站外链接正则），命中返回 422 与具体原因；举报 ≥3 次自动隐藏。
- **建议**：生产环境放 nginx/Caddy 之后并启用 HTTPS；systemd 以非 root 用户运行。

---

## 9. API 一览

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/api/health` | `{ok:true, mode:'server'}`，前端据此判定在线模式 |
| POST | `/api/auth/register` | `{phone, password, nickname?, code?}` → `{token, profile}`；409 已注册；短信启用时 code 必填（失败 422） |
| POST | `/api/auth/login` | `{phone, password}` → `{token, profile}`；失败统一 401；封禁 403 |
| GET | `/api/auth/me` | Bearer 认证 → 成长/通知/收藏全量摘要（见下） |
| POST | `/api/auth/logout` | 注销当前会话 |
| POST | `/api/auth/sms` | `{phone, scene:'register'\|'reset'}` → `{ok, ttl:300}`（console 模式附 `devCode`）；`SMS_PROVIDER=none` 时 501 |
| GET / PUT | `/api/me/favorites` | 收藏：GET `{favorites:[id]}`；PUT 整体覆盖 |
| GET / PUT | `/api/me/list` | 选校清单：GET `{list:{id:tier}}`；PUT 整体覆盖 |
| GET | `/api/posts?tag=&q=&cat=&limit=&offset=` | 帖子列表（hidden=0，倒序分页，默认 50；`cat=featured` 精选视图） |
| GET | `/api/posts/:id` | 单帖含评论 |
| POST | `/api/posts` | `{title, body, tags[]}` 发帖（登录 + AI 审核，422 拦截；+20 XP，响应带 `growth`） |
| POST | `/api/posts/:id/comments` | `{body}` 评论（登录 + 审核；评论者 +8、帖作者 +3 XP 并收通知） |
| POST | `/api/posts/:id/report` | `{reason?}` 举报 +1 落 reports 表，≥3 自动隐藏 |
| POST | `/api/auth/forgot` | `{phone, code, newPassword}` 短信验证后重置密码并吊销全部 token |
| POST | `/api/growth/checkin` | 每日签到（+10 XP，连签 7 天 +20）；当天重复 409 `{ok:false, already:true}` |
| GET | `/api/growth/leaderboard?range=week\|all` | XP 排行榜（手机号打码；week 带 `gained`） |
| GET | `/api/notifications` | 通知列表 `[{id,type,title,body,link,read,createdAt}]` |
| POST | `/api/notifications/read` | `{ids:[..]}` 或 `{all:true}` 标记已读 |
| POST | `/api/events` | 埋点 `{type:'pv'\|'feature'\|'xp', path, action, meta}`（可匿名；xp 事件执行每日上限） |
| GET | `/api/admin/overview` | 管理端：users/posts/comments/reportsPending/dau/events7d/topFeatures |
| GET | `/api/admin/reports` | 管理端：举报队列（post + 次数 + 原因） |
| POST | `/api/admin/posts/:id/hide\|unhide\|feature\|unfeature\|delete` | 管理端：帖子操作 |
| POST | `/api/admin/comments/:id/delete` | 管理端：删除评论 |
| GET | `/api/admin/users?q=` | 管理端：用户搜索 |
| POST | `/api/admin/users/:id/ban\|unban\|grant-admin\|revoke-admin` | 管理端：用户操作 |

`GET /api/auth/me` → `{phone, nick, xp, level, levelName, nextLevelXp, badges, streak, lastCheckin, unread, isAdmin, favorites, list}`（另含兼容字段 `profile`）。
帖子/排行榜等公开输出中手机号一律打码为 `138****1234`，并附 `mine` 布尔位标识是否本人帖子。

认证方式：`Authorization: Bearer <token>`。
