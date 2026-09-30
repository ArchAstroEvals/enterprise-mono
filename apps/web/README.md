# @mono/web

Next.js storefront over the workspace packages.

- `app/` routes are server components; only forms are client.
- Unit coverage lives in `packages/*`; user flows in `/e2e`.
- Deploys via `infra/k8s` + ArgoCD (see `/infra`).
