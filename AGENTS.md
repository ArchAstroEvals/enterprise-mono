# AGENTS.md (Claude harness)

- pnpm monorepo: `apps/*` depend on `packages/*` via `workspace:*`.
- Unit tests live next to sources (`*.test.ts`); run `pnpm vitest run`.
- Typecheck with `pnpm typecheck` before opening a PR.
- API routes live in `apps/api/src/routes`; never put React in packages.
- Infra changes go through `infra/` + the CI-agent, not feature PRs.
