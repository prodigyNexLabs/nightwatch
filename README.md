# Crozroad — Local Ecosystem + Host Platform

Production-grade Vite + React + TypeScript (SWC) web app for Crozroad.

## Architecture decisions

- **React 18 + Vite + SWC** for fast builds and predictable production output.
- **Tailwind CSS + runtime theme tokens** for centralized design control.
- **React Router v6** for clear public and host-only route boundaries.
- **TanStack Query + Axios** for robust data fetching and cache behavior.
- **Zustand** for lightweight auth and UI state.
- **Framer Motion** for subtle page and component transitions.

## Folder structure

```text
src/
  app/                # Router + app bootstrap
  components/
    layout/           # Navbar, footer, container, dashboard shell
    ui/               # Primitive components (Button, Card, Input, Modal, Badge, Section)
  config/             # Site and environment configuration
  content/            # Shared brochure/FAQ ecosystem copy
  pages/              # Route-level pages (public, legal, host)
  routes/             # Route guards
  services/           # API mapping and service clients
  store/              # Zustand stores
  theme/              # Token source + CSS variable application
  types/              # Shared TypeScript models
  utils/              # Utility helpers
```

## Local development

- `npm install`
- `npm run dev`

## Build and quality checks

- `npm run lint`
- `npm run build`
