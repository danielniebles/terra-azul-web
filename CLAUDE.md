# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

**Terra Azul Web** is a single-page marketing website for an architecture/construction firm, built with Next.js 15 (App Router), React 19, TypeScript 5, and Tailwind CSS 4.

### Routing

Uses a single `(root)` route group — there is only one page (`app/(root)/page.tsx`). Navigation is anchor-based (`#home`, `#servicios`, etc.) with smooth scroll. Two layout layers:
- `app/layout.tsx` — HTML shell, global fonts (Montserrat via `next/font/google`, Lato locally)
- `app/(root)/layout.tsx` — wraps with `<Navbar>` and `<Footer>`

### Sections

All page sections live in `app/(root)/_sections/` (underscore prefix hides them from routing). The home page simply composes them in order. New sections go here.

### Data

All hardcoded content (menu items, team members, services, projects, SDG goals, slider config) lives in `app/constants/index.tsx`. Update content there, not in the components.

### Server vs. Client Components

- `Navbar` is a **server component** that uses `headers()` + `userAgent()` from `next/server` to detect mobile and conditionally render `<NavbarMobile>`.
- `HomeSlider` and `ContactForm` are **client components** (`'use client'`).
- All sections default to server components unless they need interactivity.

### Styling

Custom theme colors are defined as CSS variables in `app/globals.css`:
- `--color-terra-sand: #d8cfb3`
- `--color-mint-green: #769375`
- `--color-forest-green: #294121`
- `--color-navy-blue: #294e5b`

Custom utility classes (`.flex-between`, `.heading`, `.content`, `.container`, etc.) are also defined in `globals.css`. Use these before reaching for arbitrary Tailwind values.

UI components from shadcn/ui (New York style) live in `components/ui/`. Add new shadcn components with `npx shadcn@latest add <component>`.

### Contact Form

Submits via WhatsApp (`wa.me` link). The submit button is disabled until the privacy policy checkbox is checked. Form state managed with `useState`.

### Images

Hero banner uses `<picture>` with separate mobile/desktop sources. Team, projects, services assets are in `public/` subdirectories. Use `next/image` for all images.
