# Upside Lifts

Marketing landing page for **Upside Lifts** — shaftless residential in-home elevators built with Nuxt 4, Nuxt UI v4, and Cloudflare Workers.

## Stack

- **Framework**: Nuxt 4 + Vue 3
- **UI**: Nuxt UI v4 + Tailwind CSS v4
- **Runtime / Hosting**: Cloudflare Workers (`wrangler`)
- **Tooling**: pnpm, Oxlint, Oxfmt, Vitest

## Development

```bash
pnpm install
pnpm dev
```

## Build & Deploy

Live preview worker: https://upsidelifts.acidjazz.workers.dev

```bash
pnpm build
pnpm run deploy
```

## Linting & Formatting

```bash
pnpm lint
pnpm fmt:check
```
