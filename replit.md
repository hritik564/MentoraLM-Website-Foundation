# MentoraLM Website

Phase 0 foundation for the MentoraLM parent-brand education and career ecosystem website.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/mentoralm-website/src/App.tsx` — route map and shared site shell
- `artifacts/mentoralm-website/src/components/navigation/` — responsive structural navigation
- `artifacts/mentoralm-website/src/components/sections/` — semantic Phase 0 homepage section placeholders
- `artifacts/mentoralm-website/src/components/ui/logo.tsx` — reusable official-logo asset seam
- `artifacts/mentoralm-website/src/data/products.ts` — typed seven-slot product/module model
- `artifacts/mentoralm-website/src/index.css` — foundation tokens and responsive styles

## Architecture decisions

- The homepage intentionally renders only Phase 0 foundation markers and labeled section placeholders; marketing design begins in later phases.
- Product/module metadata is centralized in `src/data/products.ts`, including four unnamed upcoming module slots.
- The official logo is not recreated; the `Logo` component accepts a supplied asset when it becomes available.
- The site is frontend-only in this phase; no API, database, authentication, analytics, or external integrations are required.

## Product

The site provides the structural parent-brand shell for MentoraLM, including accessible navigation, future homepage anchors, typed flagship/upcoming module architecture, and placeholder routes for the three known products.

## User preferences

- Keep work in the current phase focused on architecture; do not begin Phase 1 visual design or later product experiences unless explicitly requested.

## Gotchas

- The frontend Vite config expects `PORT` and `BASE_PATH` from the managed artifact workflow; direct build checks should provide them explicitly.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
