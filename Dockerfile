# 依赖和构建
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g pnpm
RUN pnpm config set registry https://registry.npm.taobao.org
RUN pnpm install
COPY . .
RUN pnpm build

# Nginx
FROM nginx:alpine AS prod-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]