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

## Tech Stack

React 18 + Vite + TypeScript (strict) + Tailwind CSS + React Router DOM 7

## Architecture

**Routing:** All routes defined in `src/main.tsx` using React Router. Every route is wrapped in `<Layout>` which provides shared navbar (`NavbarLanding`) and footer (`FooterLanding`) via `<Outlet>`.

**Pages:** Each route maps to a page component in `src/pages/`. Product pages: Operator, Extract, Sage, Pulse, Copilot. Info pages: About, Careers, Pricing, Docs, Security, Legal, Privacy, Terms, Cookie, SLA.

**SEO:** `src/components/SEO.tsx` wraps React Helmet Async for head/meta tags. JSON-LD structured data generators live in `src/lib/structuredData.ts` (Organization, Product, Breadcrumb schemas).

**Form integration:** `DemoRequestPage` submits to Web3Forms API using `VITE_WEB3FORMS_ACCESS_KEY` env var.

**Styling:** Tailwind with extensive custom theme in `tailwind.config.js` — MD3 color tokens, custom fonts (Public Sans, Inter, Space Grotesk, JetBrains Mono), 0px default border radius. Custom CSS effects (cyber-grid, scanline animations, glow) in `src/index.css`.

**Design aesthetic:** Dark cyberpunk/industrial theme. Primary accent: `#D2F000` (electric lime). Background: `#131313`.

## Deployment

Vercel with SPA rewrite (all routes → index.html). Config in `vercel.json`.

## Environment Variables

- `VITE_WEB3FORMS_ACCESS_KEY` — required for demo request form submission
