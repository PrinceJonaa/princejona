# Bolt's Journal

## 2024-05-23 - [Memory Leak in Effect Hooks]
**Learning:** Found `addEventListener` in `useEffect` without a cleanup function in `IdentityCard.tsx`. This causes memory leaks when components unmount.
**Action:** Always ensure `useEffect` returns a cleanup function when adding event listeners, or prefer CSS for simple interactions.

## 2024-05-23 - [Next.js Navigation Performance]
**Learning:** Found usage of standard `<a>` tags for internal navigation in `src/app/page.tsx`, causing full page reloads.
**Action:** Always verify internal links use the Next.js `Link` component for client-side routing and prefetching.
