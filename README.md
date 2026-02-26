# Prince Jona

Immersive digital home for artist-technologist Prince Jona. Built with Next.js 15 (App Router) and modern motion libraries, it fuses storytelling, music, and identity work into a responsive, cinematic web experience.

## What this project is
- Next.js single-page experience that introduces Prince Jona through interactive archetypes, story beats, and core truths.
- Front-end only application instrumented with Vercel Analytics and Speed Insights for performance insight.
- Tailwind CSS 4 driven styling layered with custom motion (anime.js, framer-motion) to create an intentional, meditative interface.

## Purpose
- Serve as the primary digital sanctuary for Prince Jona’s art, mission, and offerings.
- Provide potential collaborators, fans, and clients with a distilled view of identities, narrative arc, and guiding principles.
- Support Intervised LLC by framing its ethos and linking out to services, socials, and active promotions.

## Key Features
- Animated hero statement that fades in with anime.js to set the tone on first load.
- Identity cards that scale on hover and deep-link into detail pages (staged under `src/app/identity/[slug]`).
- Scroll-triggered story sections using framer-motion for smooth reveal animations.
- Flippable “Core Truths” deck that invites interaction and reflection.
- PWA-friendly metadata (`manifest.json`, Open Graph, Twitter cards) and analytics instrumentation.

## Tech Stack
- Next.js 15 & React 19 (App Router, client components where motion is required)
- TypeScript for type safety
- Tailwind CSS 4 with inline theming
- anime.js & framer-motion for animation primitives
- Vercel Analytics & Speed Insights for observability

## Project Structure
```
src/
  app/
    layout.tsx          # Global metadata, fonts, and analytics wiring
    page.tsx            # Landing page with hero and identity grid
    story/page.tsx      # “The Call / Conflict / Revelation / Mission” timeline
    truths/page.tsx     # Interactive truths card grid
    identity/[slug]/    # Identity detail route (currently stored as page.bak.tsx)
    globals.css         # Tailwind CSS 4 entrypoint and theme variables
  components/
    IdentityCard.tsx    # Reusable motion-enabled identity tile
public/
  og.png                # Social sharing preview
  manifest.json         # PWA manifest
  robots.txt, sitemap.xml
```

## Getting Started
1. Ensure Node.js 18.18+ (or any runtime supported by Next.js 15).
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Visit `http://localhost:3000` to explore the experience.

## Available Scripts
- `npm run dev` — start the dev server with Turbopack.
- `npm run build` — produce a production build.
- `npm run start` — serve the built app.
- `npm run lint` — run Next.js linting with the configured ESLint rules.

## Content Updates
- Update the hero identities in `src/app/page.tsx` (`identities` array).
- Adjust story beats in `src/app/story/page.tsx` (`sections` array).
- Edit or expand truths in `src/app/truths/page.tsx` (`truths` array).
- To re-enable identity detail pages, rename `page.bak.tsx` under `src/app/identity/[slug]/` to `page.tsx` and customize the copy.

## Deployment
The project is configured for Vercel. Push to the connected repository (or deploy manually with `npx vercel`) and Vercel will build with the production configuration.

## Connect
- Linktree: https://linktr.ee/princejona
- Instagram: https://instagram.com/princejonaa
- YouTube: https://www.youtube.com/@princejona
- TikTok: https://www.tiktok.com/@princejonaofficial
