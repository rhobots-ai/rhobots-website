# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rhobots marketing website — a React SPA showcasing 6 AI products (Operator, Extract, Sage, Pulse, Copilot, Studio). No backend; purely frontend deployed on Vercel.

## Commands

- **Dev server:** `npm run dev` (Vite)
- **Build:** `npm run build` (runs `tsc -b && vite build`)
- **Lint:** `npm run lint` (ESLint)
- **Preview prod build:** `npm run preview`
- **No test framework is configured.**

Use **npm** (`package-lock.json`). Vite 6, Node 24 (`.nvmrc`).

## Tech Stack

React 18 + Vite 6 + TypeScript (strict) + Tailwind CSS 3 + React Router DOM 7

## Architecture

**Routing:** All routes defined in `src/main.tsx` using React Router. Every route is wrapped in `<Layout>` which provides shared navbar (`NavbarLanding`) and footer (`FooterLanding`) via `<Outlet>`.

**Pages:** Each route maps to a page component in `src/pages/`. Product pages: Operator, Extract, Sage, Pulse, Copilot. Info pages: About, Careers, Pricing, Docs, Security, Legal, Privacy, Terms, Cookie, SLA. Also Case Studies (listing + detail), Partners (+ thank-you), Demo Request, and the Pulse demo/customer-support pages.

**UI primitives:** `src/components/ui/` holds the reusable vocabulary — `Section`, `Hero`, `Heading`, `Eyebrow`, `Card`, `Button`. **Compose these before writing new markup**; a page is normally a stack of `Section`s, each opening with an `Eyebrow` + `Heading`.

**SEO:** `src/components/SEO.tsx` wraps React Helmet Async for head/meta tags. JSON-LD structured data generators live in `src/lib/structuredData.ts` (Organization, Product, Breadcrumb schemas).

**Form integration:** `DemoRequestPage` submits to Web3Forms API using `VITE_WEB3FORMS_ACCESS_KEY` env var.

## Design system

**Aesthetic:** Light enterprise theme. White surfaces, near-black text and buttons, one olive accent.

**Styling:** Tailwind with an extensive custom theme in `tailwind.config.js` — MD3 colour tokens, custom fonts (Public Sans, Inter, Space Grotesk, JetBrains Mono), and a deliberately tight radius scale (`rounded` 2px, `rounded-lg` 3px, `rounded-xl` 4px).

**Never invent hex values** — use the token names:

- Surfaces: `bg-background` (`#ffffff`), `bg-surface-dim`, `bg-surface-container*`
- Text: `text-on-surface` (`#131313`), `text-on-surface-variant` (secondary), `text-outline` (micro-labels)
- Accent: `text-primary-fixed` / `bg-primary-fixed` (`#4c5a00` olive), `bg-primary-container`
- Buttons: `bg-primary` (near-black) with `text-on-primary`
- Lines: `border-outline-variant` (hairlines)
- Type: `font-headline` / `font-body` / `font-label` / `font-mono`

**Headings are sentence case** — no uppercase, italic, heavy weight or negative tracking. See the `Heading` component's docstring; this was a deliberate decision in the light redesign. The one place uppercase survives is the mono micro-label (`Eyebrow`): `font-mono text-xs uppercase tracking-[0.18em] text-outline`.

**Removed in the light redesign — do not reintroduce:** `cyber-grid`, `grid-substrate`, `industrial-border`, `scanline`, `glow-bleed`, and the old `#D2F000` lime / `#131313` page background. `src/index.css` says so explicitly. Still available: `blink-cursor`, `pulse-spinner`, the voice-orb classes, and the Pulse form skins.

**Gotcha:** `Heading` hardcodes `text-on-surface`, and that rule sits later in the compiled stylesheet than `text-inverse-on-surface` — so on `Section tone="inverse"` a plain `text-*` override loses and the heading renders black-on-black. Force it: `<Heading className="!text-inverse-on-surface">`.

## Claude Design sync

`.design-sync/` holds the inputs that publish this component library to claude.ai/design (see `.design-sync/NOTES.md`). Two things to know when changing components:

- `.design-sync/entry.ts` is a **hand-maintained export list**. A new component in `src/components/` will NOT reach the design system until it is added there *and* to `componentSrcMap` in `.design-sync/config.json`.
- Preview cards live in `.design-sync/previews/*.tsx`. Style them with theme tokens, never hardcoded colours — a hardcoded `text-white` silently goes invisible if the theme changes.

## Deployment

Vercel with SPA rewrite (all routes → index.html). Config in `vercel.json`.

## Environment Variables

- `VITE_WEB3FORMS_ACCESS_KEY` — required for demo request form submission
