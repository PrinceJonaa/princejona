# Prince Jona Website Skeleton

A React + Vite front-end that presents Prince Jona's work through a dual-layer experience: the Surface layer for casual visitors and the Deep Library for codex explorers inspired by the Truth Lattice ecosystem.

## Features
- Surface/Deep routing via `HashRouter`, ensuring static hosting compatibility.
- Tailwind CSS configured through CDN with a custom palette defined in `index.html`.
- Bilingual codex content served from structured data (`content/codices.ts`) typed by `types.ts`.
- Configurable environment bindings through Vite's `loadEnv`, ready for keys such as `GEMINI_API_KEY`.

## Quick Start
1. Install pnpm (v10 recommended) if it is not already available.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```
   The app is served at `http://localhost:5173` with hot reload.
4. Build for production:
   ```bash
   pnpm build
   ```
5. Preview the production bundle locally:
   ```bash
   pnpm preview
   ```

## Project Structure
```text
App.tsx             # Route wiring and layout switching
components/         # Reusable UI (Navbar, Footer, CodexCard, VideoEmbed)
content/            # Codex data sources
layouts/            # Surface and Deep shells
pages/              # Routed views for each section
constants.tsx       # Shared glyph metadata and icons
index.html          # Tailwind config + entry HTML
index.tsx           # React entry point
vite.config.ts      # Vite + React configuration and env bindings
```

## Development Notes
- Use TypeScript with two-space indentation and double quotes to match the existing style.
- Prefer Tailwind utility classes defined in `index.html`; extend the inline config when new tokens are needed.
- Run `pnpm exec tsc --noEmit` for a quick type check before committing.
- Store secrets in a local `.env` (ignored by git) and document external integrations.

## Contributing
Before opening a pull request, review `AGENTS.md` for lens-aligned workflow expectations, naming conventions, and review rituals. Each contribution should document verification steps (`pnpm preview`, device screenshots) so changes stay traceable.

## Deployment
`pnpm build` emits a static `dist/` bundle suitable for static hosts (e.g., Netlify, Vercel, GitHub Pages). Because routing uses hashes, deep links remain functional without additional server configuration.
