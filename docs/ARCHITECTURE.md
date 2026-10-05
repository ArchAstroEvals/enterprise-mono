# Architecture

- `packages/*` hold pure domain logic with colocated tests.
- `apps/api` is a thin Node HTTP layer over packages.
- `apps/web` is a Next.js storefront over packages.
- `infra/` is owned by the CI-agent persona.
