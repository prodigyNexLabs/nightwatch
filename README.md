# Crozroad Web

The official web application for **Crozroad**, a hyperlocal discovery and booking platform that connects users with nearby spaces, activities, services, and host-operated listings. Built by [ProdigyNexLabs](https://www.prodigynexlabs.com).

---

## Overview

Crozroad brings together local spaces, parking, nearby activities, host tools, and community collaboration into one platform. This repository contains the public-facing brochure website, download pages, legal documents, and the authenticated host dashboard.

### Key surfaces

| Surface | Route | Description |
|---|---|---|
| Landing page | `/` | Cinematic brochure with feature slides, stats, download CTA, and host CTA |
| FAQ | `/faq` | Categorized accordion FAQ with 8 topic tabs |
| Contact | `/contact` | Contact form, support channels, and sidebar info |
| Download | `/download` | App overview with features, reviews, and store links |
| App Store | `/download/ios` | iOS-specific download page with app details and privacy info |
| Google Play | `/download/android` | Android-specific download page with data safety and optimization details |
| Host Login | `/host/login` | Slide carousel + multi-method login (Mobile OTP, Google, Facebook, Apple, email/password) |
| Host Dashboard | `/host/dashboard/*` | Authenticated area: Overview, Listings, Requests, Profile |
| Privacy Policy | `/legal/privacy-policy` | Full privacy policy document |
| Terms & Conditions | `/legal/terms-and-conditions` | Platform terms of service |
| Renting Terms | `/legal/renting-terms` | Terms specific to space and service rentals |
| User Terms | `/legal/user-terms` | End-user agreement |

### Embedded mode

All embeddable pages (`/faq`, `/contact`, `/download/*`, `/legal/*`) support `?embedded=1` as a URL parameter, which hides the Navbar and Footer for use inside iOS and Android in-app webviews.

---

## Tech stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 18.3.1 |
| Language | TypeScript | 5.9.3 |
| Bundler | Vite (SWC) | 7.x |
| Styling | Tailwind CSS + runtime theme tokens | 3.4.x |
| UI library | Material UI (selective use) | 7.3.x |
| Icons | Lucide React | 0.525.x |
| Animations | Framer Motion | 11.x |
| Routing | React Router DOM | 6.30.x |
| Data fetching | TanStack React Query + Axios | 5.x / 1.7.x |
| State | Zustand | 4.5.x |
| Font | Nunito (Google Fonts) | — |

### Design system

| Token | Value | Usage |
|---|---|---|
| Mint | `#4C9B86` | Primary accent, buttons, links |
| Gold | `#D6A85E` | Secondary accent, badges, highlights |
| Cream | `#FAF6EF` | Page backgrounds |
| Charcoal | `#1C1E1F` | Dark sections, host slides |
| Text primary | `#1B1B1B` | Headings, body text |
| Text secondary | `#6F6F6F` | Descriptions, captions |

---

## Getting started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env` file in the project root:

```env
VITE_API_DOMAIN=https://api.crozroad.com
VITE_API_VERSION=v1
# Or set the full base URL directly:
# VITE_API_BASE_URL=https://api.crozroad.com/api/v1
```

### Development server

```bash
npm run dev
```

Opens at `http://localhost:5173` by default.

### Production build

```bash
npm run build
```

Outputs to `dist/`. The build runs TypeScript checking (`tsc -b`) followed by Vite bundling.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

Uses ESLint 9 with TypeScript, React, and Prettier configurations.

---

## Route architecture

### Layout groups

- **PageLayout** — Full Navbar + Footer. Used for the landing page.
- **EmbeddableLayout** — Navbar + Footer that hide when `?embedded=1` is present. Used for FAQ, Contact, Download, and Legal pages.
- **Standalone** — No shared layout. Used for host auth pages (`/host/login`, `/host/auth`).
- **HostDashboardLayout** — Authenticated dashboard shell with sidebar navigation. Protected by `RequireHostAuth` guard.

### Legacy redirects

| Old path | Redirects to |
|---|---|
| `/privacy` | `/legal/privacy-policy` |
| `/terms` | `/legal/terms-and-conditions` |

---

## Authentication

Host authentication uses a session-based flow:

1. **Login** — `POST` to backend via `loginHost(username, password)` returns a session token
2. **User fetch** — `fetchCurrentHostUser()` retrieves the authenticated host profile
3. **State** — Session and user stored in Zustand (`useHostAuthStore`) with `applyLogin(session, user)`
4. **Guard** — `RequireHostAuth` component redirects unauthenticated users to `/host/login?redirect=...`

The Host Login page supports multiple authentication methods:
- **Mobile OTP** (primary) — Phone number input followed by 6-digit verification
- **Social login** — Google, Facebook, Apple buttons (UI-ready, backend integration pending)
- **Email & password** — Traditional credential-based login

---

## Deployment

The `dist/` folder after `npm run build` is a static SPA. Deploy to any static hosting provider:

- **Vercel** / **Netlify** — Zero-config with framework detection
- **AWS S3 + CloudFront** — Upload `dist/` to S3, configure CloudFront for SPA routing
- **Nginx** — Serve `dist/` with `try_files $uri /index.html` for client-side routing

Ensure all routes fall back to `index.html` for React Router to handle navigation.

---

## License

Proprietary. All rights reserved by Crozroad Pvt Ltd.

---

<p align="center">
  <strong>Crozroad</strong> — Your neighbourhood, in your pocket.<br/>
  A <a href="https://www.prodigynexlabs.com">ProdigyNexLabs</a> product.
</p>
