# Crozroad — Urban Access & Discovery OS

Production-grade Vite + React + TypeScript (SWC) website for Crozroad, built by ProdigyNexLabs.

## Architecture decisions

- **React 18 + Vite + SWC** for fast builds and predictable production output.
- **Tailwind CSS** with explicit design tokens in Tailwind config.
- **React Router v6** for clean route boundaries with animated page transitions.
- **TanStack Query + Axios** for data fetching patterns with caching and retries.
- **Zustand** for lightweight UI state (mobile nav, UI toggles).
- **Strict TypeScript** and ESLint + Prettier for consistent, production-ready quality.
- **Environment-based config** via `VITE_*` variables and typed config wrappers.

## Folder structure (and why it exists)

```
src/
  app/                # Routing, providers, app bootstrap
  components/         # Reusable UI building blocks
    ui/               # Buttons, cards, inputs, badges
    layout/           # Navbar, footer, container, layout wrappers
    sections/         # Landing page sections (hero, features, CTA)
  pages/              # Route-level screens
  config/             # Central app + theme configuration
  hooks/              # Query/data hooks
  services/           # Axios + API functions
  store/              # Zustand stores
  styles/             # Global styles + Tailwind base
  utils/              # Utility helpers (class merging)
  assets/             # Static assets
```

## Central configuration

All company and product metadata live in [src/config/site.config.ts](src/config/site.config.ts). Update that file to change the company name, app name, support email, URLs, social links, and legal entity details across all pages.

## Environment configuration

Create a `.env` file (see `.env.example`) to define API endpoints:

- `VITE_API_BASE_URL` — Base URL for API calls.

## Local development

Install dependencies and start the dev server:

- `npm install`
- `npm run dev`

Build for production:

- `npm run build`

## Cloudflare Pages compatibility

This project uses standard Vite output and is compatible with Cloudflare Pages static hosting.
