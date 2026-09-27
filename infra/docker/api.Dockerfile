FROM node:24-slim
WORKDIR /srv
COPY package.json pnpm-workspace.yaml ./
COPY apps/api/package.json apps/api/
COPY packages/auth/package.json packages/auth/
RUN npm install -g pnpm && pnpm install --filter @mono/api...
CMD ["node", "apps/api/src/index.ts"]
