# Bolt's Journal

## 2024-05-23 - [Memory Leak in Effect Hooks]
**Learning:** Found `addEventListener` in `useEffect` without a cleanup function in `IdentityCard.tsx`. This causes memory leaks when components unmount.
**Action:** Always ensure `useEffect` returns a cleanup function when adding event listeners, or prefer CSS for simple interactions.

## 2024-05-24 - [Unoptimized Internal Navigation]
**Learning:** The project was using `<a>` tags for internal links instead of Next.js `Link` components. This disables client-side routing and prefetching, causing full page reloads.
**Action:** Always verify internal navigation uses `next/link`.
