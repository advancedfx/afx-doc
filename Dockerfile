ENV NGINX_PATH=/docs/.vitepress/dist

# 依赖和构建
FROM purp1e/alpine-more:latest AS build
WORKDIR /app
COPY . .
RUN npm config set registry https://mirrors.cloud.tencent.com/npm/
RUN npm install -g pnpm
RUN pnpm config set registry https://mirrors.cloud.tencent.com/npm/
RUN pnpm install
RUN pnpm build

# Nginx
FROM nginx:alpine AS prod-stage
COPY --from=build /app/$NGINX_PATH /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
