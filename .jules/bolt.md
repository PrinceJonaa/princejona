# Bolt's Journal

## 2024-05-23 - [Memory Leak in Effect Hooks]
**Learning:** Found `addEventListener` in `useEffect` without a cleanup function in `IdentityCard.tsx`. This causes memory leaks when components unmount.
**Action:** Always ensure `useEffect` returns a cleanup function when adding event listeners, or prefer CSS for simple interactions.

## 2024-05-24 - [Client-Side Navigation]
**Learning:** Found usage of `<a>` tags for internal navigation in `page.tsx`, causing full page reloads and slower navigation.
**Action:** Always use Next.js `Link` component for internal routes to enable client-side routing, prefetching, and state preservation.
