# MentoraLM Website

Production homepage for the MentoraLM parent-brand education and career ecosystem website.

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
- `artifacts/mentoralm-website/src/components/sections/` — production homepage sections and footer
- `artifacts/mentoralm-website/src/components/ui/logo.tsx` — reusable official-logo asset seam
- `artifacts/mentoralm-website/src/components/ui/foundation.tsx` — reusable container, section, heading, text, card, badge, and divider primitives
- `artifacts/mentoralm-website/src/data/products.ts` — typed seven-slot product/module model
- `artifacts/mentoralm-website/src/data/product-accents.ts` — typed accent configuration for flagship and upcoming products
- `artifacts/mentoralm-website/src/styles/tokens.css` — centralized brand, typography, spacing, surface, gradient, shadow, and motion tokens
- `artifacts/mentoralm-website/src/styles/globals.css` — responsive layout, navigation, primitive, and accessibility styles

## Architecture decisions

- The homepage is a production editorial parent-brand experience: Hero, problem, intelligence, modules, process, Menti, rationale, final CTA, and footer.
- The homepage uses no Phase 0 foundation panels, architecture markers, placeholder sections, asset-pending labels, fake metrics, or unverified social proof.
- Product/module metadata is centralized in `src/data/products.ts`, including four unnamed upcoming module slots.
- The official logo is not recreated; the `Logo` component accepts a supplied asset when it becomes available.
- Phase 1 visual infrastructure is centralized in `src/styles/tokens.css` and `src/styles/globals.css`; components consume semantic tokens instead of scattered brand values.
- The site remains frontend-only; no API, database, authentication, analytics, or external integrations are required.

## Product

The site provides the parent-brand homepage for MentoraLM, accessible navigation, typed flagship/upcoming module architecture, and working routes for the three known products.

## User preferences

- Keep future work focused on verified content and real product integration; do not invent proof points or replace the product route architecture without an explicit request.

## Gotchas

- The frontend Vite config expects `PORT` and `BASE_PATH` from the managed artifact workflow; direct build checks should provide them explicitly.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
