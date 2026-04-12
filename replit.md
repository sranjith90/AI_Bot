# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### ButterflyBot Website (`artifacts/butterflybot-site`)
- **Type**: React + Vite (presentation-first landing page)
- **Preview path**: `/`
- **Description**: Production-ready AI chatbot company landing page inspired by butterflybot.in
- **Tech**: React 19, Vite, Tailwind CSS v4, Wouter, React Query
- **Structure**:
  - `src/components/` — Reusable UI components (Navbar, Hero, Features, HowItWorks, Testimonials, Pricing, About, Contact, Footer)
  - `src/pages/` — Page-level components (Home, NotFound)
  - `src/services/api.ts` — Typed API service layer (fetch-based, ready for .NET backend)
  - `src/hooks/` — Custom React hooks (useScrollPosition, useIntersectionObserver)
  - `src/utils/` — Utility functions (cn, formatters)
- **Backend integration**: Service layer at `src/services/api.ts` — set `VITE_API_BASE_URL` env var to point to .NET server
