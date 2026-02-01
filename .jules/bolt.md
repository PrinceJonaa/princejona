# Bolt's Journal

## 2024-05-23 - [Memory Leak in Effect Hooks]
**Learning:** Found `addEventListener` in `useEffect` without a cleanup function in `IdentityCard.tsx`. This causes memory leaks when components unmount.
**Action:** Always ensure `useEffect` returns a cleanup function when adding event listeners, or prefer CSS for simple interactions.

## 2024-05-24 - [Hard Navigation Anti-Pattern]
**Learning:** Found standard `<a>` tags used for internal routing in `page.tsx`. This disables client-side routing, causing full page reloads and slower navigation.
**Action:** Always verify navigation elements use `next/link` components for internal routes to enable prefetching and instant transitions.
