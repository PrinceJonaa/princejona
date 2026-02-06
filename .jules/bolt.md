# Bolt's Journal

## 2024-05-23 - [Memory Leak in Effect Hooks]
**Learning:** Found `addEventListener` in `useEffect` without a cleanup function in `IdentityCard.tsx`. This causes memory leaks when components unmount.
**Action:** Always ensure `useEffect` returns a cleanup function when adding event listeners, or prefer CSS for simple interactions.

## 2024-05-23 - [Navigation Performance]
**Learning:** Found usage of `<a>` tags for internal navigation in `src/app/page.tsx`, causing full page reloads.
**Action:** Replace `<a>` with `Link` for client-side routing and prefetching.
