# Bolt's Journal

## 2024-05-23 - [Memory Leak in Effect Hooks]
**Learning:** Found `addEventListener` in `useEffect` without a cleanup function in `IdentityCard.tsx`. This causes memory leaks when components unmount.
**Action:** Always ensure `useEffect` returns a cleanup function when adding event listeners, or prefer CSS for simple interactions.

## 2024-05-24 - [Anchor Tags vs Link Component]
**Learning:** Found usage of raw `<a>` tags for internal navigation in `page.tsx`. This causes full page reloads, negating Next.js's SPA benefits.
**Action:** Always replace internal `<a>` tags with `Link` components to enable client-side routing and prefetching.
