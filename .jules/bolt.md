# Bolt's Journal

## 2024-05-23 - [Memory Leak in Effect Hooks]
**Learning:** Found `addEventListener` in `useEffect` without a cleanup function in `IdentityCard.tsx`. This causes memory leaks when components unmount.
**Action:** Always ensure `useEffect` returns a cleanup function when adding event listeners, or prefer CSS for simple interactions.

## 2024-10-27 - [Internal Navigation Anti-Pattern]
**Learning:** Found `<a>` tags used for internal routes in `src/app/page.tsx`. This bypasses Next.js client-side routing, causing full page reloads and losing prefetching benefits.
**Action:** Audit all navigation elements to ensure internal links use `next/link` and external links use `<a>`.
