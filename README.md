# Seb Studio

Modern agency portfolio website built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## Overview

Seb Studio is a single-page marketing site designed to showcase:
- Services
- Portfolio projects
- Client testimonials
- Business stats
- Contact form with client-side validation

The UI includes motion animations, responsive layouts, and a reusable component architecture.

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- shadcn/ui + Radix UI
- Framer Motion
- React Router
- TanStack Query
- Vitest + Testing Library

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+

## Getting Started

```bash
git clone <your-repository-url>
cd Seb-Studio
npm install
npm run dev
```

App runs on `http://localhost:8080`.

## Available Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates a production build in `dist/`
- `npm run build:dev` creates a development-mode build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint checks
- `npm run test` runs tests once with Vitest
- `npm run test:watch` runs Vitest in watch mode

## Project Structure

```text
src/
  components/      Reusable page and UI components
  data/            Site content and section data
  hooks/           Custom React hooks
  lib/             Shared utility functions
  pages/           Route-level pages
  test/            Test setup and specs
```

## Customization

- Update branding and content in `src/data/siteData.ts`
- Adjust theme tokens and global styles in `src/index.css`
- Tune Tailwind config in `tailwind.config.ts`
- Add or modify sections in `src/components/`

## Quality and Testing

Run these before opening a PR:

```bash
npm run lint
npm run test
npm run build
```

## Deployment

Build the project:

```bash
npm run build
```

Deploy the generated `dist/` directory to any static hosting platform, such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## License

This project is private and currently has no public license file.
