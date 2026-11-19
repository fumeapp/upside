# Repo Assistant Instructions

Purpose

- Canonical, repo-level assistant prompt for Upside Lifts (`upsidelifts`). Read at session start and re-consult before code changes.

Project context

- Stack: Nuxt 4 + Vue 3; Nuxt UI v4 (Reka UI + Tailwind CSS + Tailwind Variants); Cloudflare Workers (`wrangler`).
- Currently a marketing landing page without a database; future iterations may add a contact / survey request form that sends email (e.g., via Cloudflare `SEND_EMAIL`).
- Authoritative docs (fetch before asserting behavior):
  - Nuxt v4: https://nuxt.com/llms-full.txt
  - Nuxt UI v4: https://ui.nuxt.com/llms-full.txt
  - Nuxt UI component page: https://ui.nuxt.com/components/<name>

Conventions

- Follow Nuxt UI v4 component-first architecture (`UPage`, `UPageHero`, `UPageSection`, `UPageGrid`, `UPageCard`, `UPageCTA`, `UHeader`, `UFooter`, `UTable`, `UAccordion`, `UForm`, `UFormField`).
- Global styles and custom color scales live in `app/assets/css/main.css`; theme color mappings live in `app/app.config.ts`.
- Icons via Iconify (`i-lucide-*`).
- Strictly scope formatters and linters (`oxfmt`, `oxlint --fix`) to modified/task-relevant files.
- Verify builds and deployments with `pnpm build` and `pnpm deploy` (Cloudflare Worker: `upsidelifts`).
