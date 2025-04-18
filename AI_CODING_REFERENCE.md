# 🧠 AI Coding Reference Sheet: Prince Jona / Intervised LLC Website

## 1. Project Overview

### Purpose

This website is the primary digital home for **Prince Jona**, representing him as an artist, technologist, and truth-seeker. It also serves as the business hub for **Intervised LLC**, showcasing services, media, identity, and spiritual-technical offerings.

### Tech Stack Summary

| Layer      | Tech Choice                | Notes                                              |
| ---------- | -------------------------- | -------------------------------------------------- |
| Framework  | Next.js (App Router)       | For routing, SSR, SEO, and performance             |
| Language   | TypeScript                 | Provides static typing and enhanced editor tooling |
| Styling    | Inline styles, CSS Modules | Tailwind CSS *not* currently used                  |
| Animations | Anime.js                   | Used for entry/transitional animations in UI       |
| Deployment | Vercel                     | Automatically deploys on `main` branch updates     |

---

## 2. Core Goals & Philosophical Principles

### Design Goals

- **Authenticity:** Reflect Jona's multidimensional identity: music, AI, the Bronx, spirituality.
- **Business Clarity:** Express the value proposition and offerings of Intervised LLC.
- **Cohesion:** Dark-futuristic aesthetic must feel resonant and intentional.
- **Responsiveness:** Ensure the site is snappy, responsive, and mobile-ready.

### Technical Principles

- **SEO Excellence:** Built-in metadata, JSON-LD structured data, and a live sitemap.
- **Maintainability:** Modular structure, type safety, and commit hygiene.
- **Truth in Code:** Nothing included without reason. Code reflects the same clarity and intentionality that Jona lives by.

---

## 3. Directory Structure Overview

### Root-Level (`/`)

- `package.json` – NPM scripts and dependency declarations
- `next.config.ts` – Next.js configuration
- `tsconfig.json` – TypeScript project settings
- `README.md` – Developer guidance and notes
- `AI_CODING_REFERENCE.md` - This reference sheet

### Static Files (`/public`)

- Images, icons, and files like `robots.txt`, `favicon.ico`, `manifest.json`

### App Directory (`/src/app`)

The central router and page rendering system powered by Next.js App Router.

| File/Folder         | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| `layout.tsx`        | Defines global structure, styling, and metadata    |
| `page.tsx`          | Home page route, rendered by default (Server Component) |
| `globals.css`       | Global styles                                      |
| `sitemap.ts`        | Server-generated dynamic sitemap                   |
| `/[route]/page.tsx` | Defines new routes (e.g., `/about`) (Server Component) |
| `/[param]/page.tsx` | Dynamic route rendering (e.g., `/identity/[slug]`) (Server Component) |

### Components (`/src/components`)

- All reusable UI and logic components
- Client-only files must include `"use client";`
- Naming convention: `PageNameClient.tsx` for client-bound page helpers

### Animations (`/src/animations`)

- Anime.js reusable configs
- Hooks for scroll-triggered or staggered animations

---

## 4. Routing System (Next.js App Router)

### Concept

Each folder in `/src/app/` represents a route segment.

### Route Definitions

- `page.tsx` = route component UI
- `layout.tsx` = persistent layout wrapper across nested routes
- `[slug]` folders = dynamic routes based on URL parameters

### Example

```bash
/src/app/story/page.tsx → /story
/src/app/about/team/page.tsx → /about/team
/src/app/blog/[slug]/page.tsx → /blog/my-first-post
```

---

## 5. Component Strategy

### Definitions

- **Server Component:** Default in `/app`; used for static content, server-side rendering, data fetching, and metadata. **Cannot use hooks.**
- **Client Component:** Needed when using React state (`useState`), effects (`useEffect`), refs (`useRef`), context (`useContext`), or browser-only APIs. Must begin with:
  ```tsx
  "use client";
  ```
  Typically placed in `/src/components`.

### Separation Pattern (Essential)

For pages needing both server logic (metadata/data) and client interactivity:

1.  **Server Component (`/app/.../page.tsx`):** Handles `metadata` export, server-side data fetching/logic. Renders the Client Component.
2.  **Client Component (`/src/components/...Client.tsx`):** Marked with `"use client";`. Handles all UI rendering, state, effects, and event listeners. Receives data as props from the Server Component if needed.

```tsx
// /app/example/page.tsx (Server Component)
import ExampleClient from '@/components/ExampleClient';

export const metadata = { title: 'Example Page' };

async function getData() { /* Fetch server data */ return { message: 'Data from server' }; }

export default async function ExamplePage() {
  const data = await getData();
  return <ExampleClient initialData={data} />; // Pass server data as props
}

// /src/components/ExampleClient.tsx (Client Component)
"use client";
import { useState, useEffect } from 'react';

interface Props { initialData: { message: string } }

export default function ExampleClient({ initialData }: Props) {
  const [count, setCount] = useState(0);
  useEffect(() => { /* Animation or effect */ }, []);

  return (
    <div>
      <p>{initialData.message}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
```

---

## 6. Styling System

### Guidelines

- **Inline Styles:** Acceptable for unique, one-off adjustments or dynamic styles based on props/state.
- **CSS Modules (`*.module.css`):** Preferred for component-scoped, reusable styling. Import and use the `styles` object.
- **Global Styles:** Defined *only* in `/src/app/globals.css`. Use sparingly.

### Avoid:

- **Tailwind CSS:** Do not introduce Tailwind unless formally planned and approved for a specific refactor or new section.
- **Global Class Name Collisions:** Rely on CSS Modules to prevent this.
- **Styled-Components / Emotion:** Avoid introducing new CSS-in-JS libraries.

---

## 7. State & Animation

### State Management

- **Local State:** Use standard React hooks (`useState`, `useReducer`) within Client Components only.
- **Global State:** No global state library (Redux, Zustand, etc.) is currently implemented. If needed, discuss requirements first. Consider Zustand for simplicity if required.

### Animations

- **Library:** [Anime.js](https://animejs.com/) is the standard.
- **Implementation:**
    - Import: `import anime from 'animejs';`
    - Trigger: Use `useEffect` hook within a Client Component.
    - Targeting: Use CSS selectors (classes preferred).
    - Best Practice: Abstract common animation sequences into reusable functions or hooks within `/src/animations`.

```tsx
// Example within a Client Component
useEffect(() => {
  anime({
    targets: '.fade-in-element',
    opacity: [0, 1],
    duration: 600,
    easing: 'easeOutQuad',
    delay: anime.stagger(100) // Optional stagger
  });
}, []); // Run once on mount
```

---

## 8. SEO Implementation

### Metadata API

- Use the built-in `export const metadata: Metadata = {...}` object in `layout.tsx` (global defaults) and `page.tsx` (page-specific overrides).
- Ensure `title`, `description`, and `openGraph` properties are set for all major pages.

### Structured Data (JSON-LD)

- **Injection:**
    - Server Components (`layout.tsx`, `page.tsx`): Use `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />`.
    - Client Components: Use `next/script`:
      ```tsx
      import Script from 'next/script';
      <Script id="unique-id" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ```
- **Placement & Types:**
    - `layout.tsx`: `WebSite`, `Organization`, `Person` (site owner/founder). Link them using `@id`.
    - `page.tsx` / Client Component: Page-specific types like `Article`, `Service`, `CollectionPage`, `VideoObject`, `Event`, `FAQPage`, `BreadcrumbList`.
    - Component-Level: Embed specific schema (e.g., `Service` in a service card) within the component itself.
- **Validation:** Always validate generated schema using Google's Rich Results Test or the Schema Markup Validator.

### Sitemap & Robots

- **Sitemap:** Dynamically generated via `/src/app/sitemap.ts`. Ensure it includes all relevant public routes.
- **Robots:** `/public/robots.txt` controls crawler access. Ensure it allows crawling of necessary pages and points to the sitemap URL (`https://princejona.com/sitemap.xml`).

---

## 9. Best Practices & Conventions

| Area                     | Rule                                                                 | Example / Notes                                           |
| ------------------------ | -------------------------------------------------------------------- | --------------------------------------------------------- |
| **Server/Client**        | Strictly separate concerns (Section 5)                               | No hooks in Server Components.                            |
| **File Naming**          | Follow conventions (Section 19)                                      | `MyComponent.tsx`, `page.tsx`, `MyComponent.module.css` |
| **TypeScript**           | Use types/interfaces for props, state, function signatures           | `interface Props { title: string; }`                     |
| **Component Design**     | Single Responsibility Principle (SRP)                                | Keep components focused and reusable.                     |
| **HTML**                 | Use semantic tags (`<nav>`, `<article>`, etc.)                       | Improves accessibility and SEO.                           |
| **Accessibility (a11y)** | Use `aria-*` attributes, ensure keyboard nav, provide `alt` text     | Test with screen readers if possible.                     |
| **Commit Style**         | Conventional Commits: `type(scope): summary`                         | `feat(auth): add login form validation`                   |
| **Code Comments**        | Explain *why*, not *what*, if code isn't self-explanatory            | Use JSDoc for complex functions/types.                    |
| **Error Handling**       | Implement graceful error handling where needed (e.g., data fetching) | Use `try...catch` or error boundaries.                    |

---

## 10. What Not to Do (Anti-Patterns)

- ❌ **Hooks in Server Components:** Will cause errors. Refactor immediately.
- ❌ **Introducing Major Dependencies:** Discuss architectural changes (new libraries, frameworks) before implementation.
- ❌ **Ignoring SEO/Metadata:** Do not remove or neglect metadata/schema without understanding the impact.
- ❌ **Committing Broken Code:** Always run `npm run build` and test locally before pushing. Fix linting/type errors.
- ❌ **Mixing Styling Approaches:** Stick to inline styles and CSS Modules. Avoid ad-hoc Tailwind/CSS-in-JS.
- ❌ **Prop Drilling:** For deep state sharing, consider React Context (in Client Components) or discuss state management needs.

---

## 11. Error Handling & Debugging Protocol

### Step-by-Step

1.  **Read & Understand:** Analyze the full error message (terminal, browser console, Vercel logs). Note the error type, message, file, and line number.
2.  **Classify Error:**
    *   **Build-time:** Fails during `npm run build` (Webpack, TypeScript, Next.js config issues).
    *   **Server-runtime:** Error occurs on the server during request handling (data fetching, Server Component rendering). Check terminal/Vercel logs.
    *   **Client-runtime:** Error occurs in the browser (React hooks, DOM manipulation, browser APIs). Check browser console.
    *   **Type Error:** Reported by `tsc` or editor (TypeScript issues).
    *   **Linting Error:** Reported by ESLint (code style/potential bugs).
3.  **Isolate & Reproduce:** Try to reliably reproduce the error locally. Comment out code, use `console.log`, or the debugger.
4.  **Apply Fix:** Correct the code based on the error type and best practices (refer to this guide).
5.  **Verify Fix:** Run `npm run build` and test the affected functionality thoroughly in the browser (`npm run dev`).
6.  **Commit:** Use a clear `fix:` commit message explaining the error and the solution.
7.  **Push & Monitor:** Push the fix and check the Vercel deployment status and logs. Re-test on the preview/production URL.

---

## 12. Local Development & Run Commands

**Start Dev Server:**
```bash
npm run dev
```

**Build for Production:**
```bash
npm run build
```

**Preview Production Build Locally:**
```bash
npm run start
```

**Run Type Checks:**
```bash
npx tsc --noEmit
```

**Lint Codebase:**
```bash
npm run lint
```
*(Note: Ensure `lint` script exists in `package.json`, e.g., `"lint": "next lint"`)*

**Check Format (Example using Prettier):**
```bash
# If Prettier is set up:
# npx prettier --check .
# npx prettier --write .
```

**Dependencies Audit:**
```bash
npm audit
# To attempt automatic fixes:
npm audit fix
```

**ℹ️ Environment:** Use Node.js v18+ and npm 9+ for compatibility with Next.js.

---

## 13. Deployment Guide (Vercel)

**Deployment Triggers:**
*   **Production:** Push/merge commits to the `main` branch.
*   **Preview:** Create a Pull Request or push to a non-`main` branch.

**Manual Deployment (CLI):**
```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

**Environment Variables:**
*   Configure via Vercel Dashboard → Project Settings → Environment Variables.
*   Crucial for API keys, database connections, and site configuration.

| Variable Name        | Purpose                                     | Example Value             | Scope(s)        |
|----------------------|---------------------------------------------|---------------------------|-----------------|
| `NEXT_PUBLIC_SITE_URL` | Base URL for sitemap, metadata, schema    | `https://princejona.com`  | Production      |
| `NODE_ENV`           | Framework mode (usually set by Vercel)      | `production`              | Production      |
| *(e.g., SANITY_TOKEN)*| *(API Key for Headless CMS)*                | `sk...`                   | Prod, Preview   |

---

## 14. Adding a New Page/Route

**Example Workflow: Adding `/about`**

1.  **Create Folder:** `/src/app/about/`
2.  **Create `page.tsx`:** `/src/app/about/page.tsx` (Server Component).
3.  **Add Metadata:**
    ```typescript
    import type { Metadata } from 'next';
    export const metadata: Metadata = { title: 'About Prince Jona' };
    ```
4.  **Add Structured Data:** Include `AboutPage` schema.
    ```tsx
    const aboutPageSchema = { /* ... */ };
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
    ```
5.  **Build UI (Server):** Add static JSX content.
6.  **Client Interactivity (If Needed):**
    *   Create `/src/components/AboutClient.tsx` with `"use client";`.
    *   Implement hooks/handlers.
    *   Import and render `<AboutClient />` within `page.tsx`.
7.  **Styling:** Use inline styles or create `/src/app/about/about.module.css`.
8.  **Sitemap:** Verify `/about` is included in `/src/app/sitemap.ts` output.
9.  **Navigation:** Add link in `/src/components/SectionNav.tsx`.
10. **Test:** Run `npm run dev`, navigate to `/about`, check content, metadata (view source), and interactivity. Run `npm run build`.

---

## 15. Creating New Components

**Example Workflow: `CallToActionCard.tsx`**

1.  **Create File:** `/src/components/CallToActionCard.tsx`.
2.  **Determine Type:** Needs `onClick` handler -> Client Component. Add `"use client";`.
3.  **Define Props:**
    ```typescript
    interface Props {
      title: string;
      buttonText: string;
      onButtonClick: () => void;
    }
    ```
4.  **Implement UI:**
    ```tsx
    export default function CallToActionCard({ title, buttonText, onButtonClick }: Props) {
      return (
        <div className={styles.card}>
          <h2>{title}</h2>
          <button onClick={onButtonClick}>{buttonText}</button>
        </div>
      );
    }
    ```
5.  **Styling:** Create `/src/components/CallToActionCard.module.css`. Import `styles` in the component.
6.  **Export & Use:** `export default ...`; Import in parent component.

---

## 16. Structured Data (JSON-LD) Best Practices (Recap)

**Placement Strategy:**
*   **Global:** `WebSite`, `Organization`, `Person` in `layout.tsx`. Use `@id` for linking.
*   **Page-Level:** `Article`, `Service`, `CollectionPage`, etc., in `page.tsx` or main Client Component.
*   **Component-Level:** Specific schema (e.g., `VideoObject`) embedded within the component rendering the entity.

**Injection:** Use `<script>` (Server) or `next/script` (Client).

**Validation:** **Always** use Google's Rich Results Test before deploying changes.

---

## 17. Anime.js Animations (Recap)

**Core Steps:**
1.  Work within a **Client Component** (`"use client";`).
2.  `import anime from 'animejs';`
3.  Use `useEffect(() => { ... }, []);` for mount animations.
4.  Target elements using CSS selectors (`targets: '.selector'`).
5.  Set initial styles (opacity, transform) if needed for the animation start state.

---

## 18. Debugging Process (Recap)

**Key Steps:**
1.  **Identify Source:** Browser Console, Terminal (`dev`/`build`), Vercel Logs.
2.  **Understand Error Type:** React Hook Rule? Type Error? Build Failure? Runtime Crash?
3.  **Isolate:** Comment code, log values, use debugger.
4.  **Fix & Verify:** Apply correction, run `npm run build`, test locally.
5.  **Commit & Push:** Use `fix:` prefix. Monitor deployment.

---

## 19. File Naming Conventions (Recap)

| Item Type        | Convention              | Example                         |
|------------------|-------------------------|---------------------------------|
| Component        | `PascalCase.tsx`        | `UserProfileCard.tsx`           |
| Page             | `page.tsx`              | `/app/about/page.tsx`           |
| Layout           | `layout.tsx`            | `/app/blog/layout.tsx`          |
| CSS Module       | `PascalCase.module.css` | `UserProfileCard.module.css`    |
| Client Component | `PascalCaseClient.tsx`  | `HomePageClient.tsx`            |
| API Route        | `route.ts`              | `/app/api/users/route.ts`       |
| Dynamic Route    | `[slug]` folder         | `/app/posts/[slug]/page.tsx`    |
| Utility/Config   | `camelCase`/`kebab-case`| `utils.ts`, `next.config.ts`    |

---

## 20. Backlog & Potential Extensions

*(Placeholder for future ideas)*

*   **PWA Features:** Enhance `manifest.json`, add service worker (`@ducanh2912/next-pwa`).
*   **Contact Form:** Implement using Server Actions or API Route.
*   **Storybook:** Set up for isolated component development/testing.
*   **Animation Hooks:** Refactor common Anime.js logic.
*   **CMS Integration:** Consider Sanity/Strapi/Contentful for dynamic content.
*   **Testing:** Add Jest/RTL unit tests, Cypress/Playwright E2E tests.

---

This document is designed to be AI-operable. All steps, workflows, and naming conventions follow consistent logic for intelligent agents and human devs to interpret, build, debug, or deploy with no ambiguity.
