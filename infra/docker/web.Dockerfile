FROM node:24-slim
WORKDIR /srv
COPY . .
RUN npm install -g pnpm && pnpm install && pnpm --filter @mono/web build
CMD ["pnpm", "--filter", "@mono/web", "start"]
