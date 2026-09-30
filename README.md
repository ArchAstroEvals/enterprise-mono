# enterprise-mono

pnpm monorepo: SaaS platform across `apps/*` and `packages/*`.

## Services

- `@mono/api` — Node HTTP API (`apps/api`)
- `@mono/web` — Next.js storefront (`apps/web`)

## Workspaces

- `packages/auth`, `packages/billing`, `packages/teams`, `packages/flags`
- `packages/audit`, `packages/notify`, `packages/support`
- `apps/api`, `apps/web`

## Test

`pnpm vitest run` from the root. Typecheck with `pnpm typecheck`.
