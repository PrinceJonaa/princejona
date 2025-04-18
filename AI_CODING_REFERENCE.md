# AI Coding Reference Sheet: Prince Jona / Intervised LLC Website

## 1. Project Overview

*   **Purpose:** This is the official website for Prince Jona, serving as a digital hub for his identity as an artist, technologist, and truth-seeker. It also represents his company, Intervised LLC, showcasing its services and mission.
*   **Tech Stack:**
    *   Framework: Next.js (App Router)
    *   Language: TypeScript
    *   Styling: Inline Styles, CSS Modules (`*.module.css`). **Note:** Tailwind CSS is *not* currently used.
    *   Animations: Anime.js
    *   Deployment: Vercel

## 2. Core Goals & Principles

*   **Reflect Identity:** The site must authentically represent Prince Jona's multi-dimensional nature (music, AI, spirituality, tech, Bronx roots).
*   **Showcase Intervised LLC:** Clearly present the services, mission, and value proposition of Intervised LLC.
*   **Aesthetic Cohesion:** Maintain the existing visual style (dark, futuristic, spiritual).
*   **Performance:** Ensure the site is fast and responsive.
*   **SEO Excellence:** Implement best practices for discoverability (metadata, structured data, sitemap).
*   **Maintainability:** Write clean, understandable, and well-structured code.
*   **Truth & Clarity:** Code and content should reflect clarity of intent and purpose, aligning with Prince Jona's core values.

## 3. Directory Structure

*   **`/` (Root):** Configuration files (`next.config.ts`, `tsconfig.json`, `package.json`, etc.), README, and this reference sheet.
*   **`/public`:** Static assets (images, icons, `robots.txt`, `manifest.json`).
*   **`/src`:** Main application source code.
    *   **`/src/app`:** Core of the Next.js App Router.
        *   `layout.tsx`: Root layout, global styles, global metadata, global structured data.
        *   `page.tsx`: Entry point for specific routes (e.g., `/src/app/page.tsx` is the homepage). These are primarily **Server Components**.
        *   `sitemap.ts`: Dynamically generates the `/sitemap.xml`.
        *   `globals.css`: Global CSS styles.
        *   **Route Groups & Folders:** Folders define URL segments (e.g., `/src/app/story/page.tsx` maps to `/story`).
        *   **Dynamic Routes:** Folders like `[slug]` handle dynamic URL parameters (e.g., `/src/app/identity/[slug]/page.tsx`).
    *   **`/src/components`:** Reusable UI components. Client Components requiring hooks (`useState`, `useEffect`, etc.) should have the `"use client";` directive at the top. Server Components intended only for server-side rendering should *not* have this directive.
        *   `*Client.tsx`: Naming convention used for Client Components that handle UI and interactivity for a specific Server Component page (e.g., `HomePageClient.tsx` used by `src/app/page.tsx`).
    *   **`/src/animations`:** Code related to Anime.js animations (core functions, hooks).

## 4. Routing

*   The project uses the **Next.js App Router**.
*   Routes are defined by the folder structure within `/src/app`.
*   `page.tsx` files define the UI for a specific route segment.
*   `layout.tsx` files define shared UI for a segment and its children.

## 5. Component Structure & Pattern

*   **Server Components by Default:** Files within `/src/app` (like `page.tsx`, `layout.tsx`) are primarily Server Components unless marked otherwise. They are ideal for data fetching, accessing backend resources, and **generating metadata/structured data**.
*   **Client Components:** Components needing React hooks (`useState`, `useEffect`, `useRef`, `useContext`, etc.) or browser-only APIs **must** have the `"use client";` directive at the top. These are typically placed in `/src/components`.
*   **Separation Pattern:** For pages requiring both server-side metadata/data fetching *and* client-side interactivity, the pattern is:
    1.  Keep the `/src/app/.../page.tsx` as a Server Component. Handle `metadata` export and server logic here.
    2.  Create a corresponding Client Component (e.g., `HomePageClient.tsx`) in `/src/components`. Place UI, state hooks, effect hooks, and event handlers here. Mark it with `"use client";`.
    3.  Import and render the Client Component from the Server Component (`page.tsx`).

## 6. Styling

*   Primarily uses **inline styles** within JSX components.
*   **CSS Modules** (`*.module.css`) are used for component-scoped styles (e.g., `TruthCard.module.css`).
*   Global styles are defined in `/src/app/globals.css`.
*   **Avoid introducing Tailwind CSS** unless explicitly requested and planned.

## 7. State Management & Animations

*   **State:** Local component state is managed using `useState` within Client Components. No global state management library (like Redux or Zustand) is currently implemented.
*   **Animations:** Anime.js is used for animations, typically triggered within `useEffect` hooks in Client Components.

## 8. SEO Implementation

*   **Metadata:** Defined by exporting a `metadata` object from `layout.tsx` (global) or `page.tsx` (page-specific) Server Components.
*   **Structured Data (JSON-LD):** Injected via `<script type="application/ld+json">` tags.
    *   Global schemas (`Person`, `Organization`, `WebSite`) are in `src/app/layout.tsx`.
    *   Page-specific schemas (`Article`, `CollectionPage`, `Service`, `BreadcrumbList`) are added to the relevant `page.tsx` (if Server Component) or Client Component (`SectionNav.tsx` for Breadcrumbs). Use the `next/script` component for injection in Client Components.
*   **Sitemap:** Dynamically generated by `/src/app/sitemap.ts`. The static `public/sitemap.xml` has been removed.
*   **robots.txt:** Located in `/public/robots.txt`.

## 9. Conventions & Best Practices

*   **Server/Client Separation:** Strictly adhere to the pattern described in Section 5. Do not add client hooks to Server Components.
*   **TypeScript:** Use TypeScript for type safety. Define interfaces and types where appropriate.
*   **Component Focus:** Keep components small and focused on a single responsibility.
*   **Semantic HTML:** Use appropriate HTML tags (`nav`, `main`, `section`, `article`, `h1`-`h6`, etc.).
*   **Accessibility:** Use ARIA attributes (`aria-label`, `aria-current`, etc.) where necessary, ensure keyboard navigability (`tabIndex`), and provide image `alt` text.
*   **Commit Messages:** Write clear, descriptive commit messages following conventional formats (e.g., `feat:`, `fix:`, `refactor:`, `docs:`). Summarize the change and list key details.
*   **Error Handling:** If a change introduces errors (build, runtime, linting), analyze the error message, identify the root cause, and apply the necessary fix. Test the fix before committing.

## 10. What NOT To Do

*   **Do NOT add client-side hooks (`useState`, `useEffect`, etc.) directly into Server Components (`page.tsx`, `layout.tsx`)**. Use the separation pattern (Section 5).
*   **Do NOT introduce major new dependencies or architectural changes** without prior discussion and planning.
*   **Do NOT remove existing structured data or metadata** without understanding its purpose.
*   **Do NOT commit broken code.** Test changes locally before committing/pushing.

## 11. Handling Corrections & Errors

1.  **Analyze:** Carefully read the error message (from Vercel, local build, linter, etc.). Identify the file, line number, and the nature of the error.
2.  **Identify Cause:** Determine why the error occurred (e.g., incorrect hook usage, syntax error, type mismatch, failed dependency).
3.  **Fix:** Apply the necessary code changes to resolve the error.
4.  **Test:** Run the build locally (`npm run build`) or check the development server to ensure the error is gone and no new issues were introduced.
5.  **Commit:** Commit the fix with a clear message (e.g., `fix: Resolve useEffect error on homepage`).
6.  **Push:** Push the commit to the remote repository.

By following this guide, AI assistants can contribute effectively to the development and maintenance of this website while adhering to its goals and technical standards.
