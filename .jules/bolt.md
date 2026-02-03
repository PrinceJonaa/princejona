# Bolt's Journal

## 2024-05-23 - [Memory Leak in Effect Hooks]
**Learning:** Found `addEventListener` in `useEffect` without a cleanup function in `IdentityCard.tsx`. This causes memory leaks when components unmount.
**Action:** Always ensure `useEffect` returns a cleanup function when adding event listeners, or prefer CSS for simple interactions.

## 2024-05-24 - [Hard Navigation with Anchor Tags]
**Learning:** Found `<a>` tags used for internal navigation in `src/app/page.tsx`. This causes full page reloads instead of client-side routing.
**Action:** Always use `Link` from `next/link` for internal routes to enable prefetching and faster transitions.
