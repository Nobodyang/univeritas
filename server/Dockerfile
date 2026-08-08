# 学府真鉴 UniVeritas 后端镜像
FROM node:20-alpine

ENV NODE_ENV=production
WORKDIR /app

# better-sqlite3 为原生模块，优先用预编译二进制；无匹配时回退源码编译需工具链
RUN apk add --no-cache python3 make g++

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev || npm install --omit=dev

COPY server.js seed_posts.json ./
# 部署时把前端 index.html 放到镜像 /app/index.html（或挂载 WEB_ROOT 指向的目录）
# COPY ../index.html ./index.html  ← 构建上下文限制，请在仓库根目录构建：
#   docker build -f server/Dockerfile -t univeritas .  （并在本行取消注释）
COPY index.html* ./

ENV PORT=3000
ENV WEB_ROOT=/app
ENV DATA_DIR=/app/data
RUN mkdir -p /app/data && chown -R node:node /app
EXPOSE 3000
VOLUME ["/app/data"]

USER node
CMD ["node", "server.js"]
