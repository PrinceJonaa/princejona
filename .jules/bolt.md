# Bolt's Journal

## 2024-05-23 - [Memory Leak in Effect Hooks]
**Learning:** Found `addEventListener` in `useEffect` without a cleanup function in `IdentityCard.tsx`. This causes memory leaks when components unmount.
**Action:** Always ensure `useEffect` returns a cleanup function when adding event listeners, or prefer CSS for simple interactions.

## 2024-05-23 - [Unchecked Anchor Tags]
**Learning:** The default Next.js ESLint config didn't flag manual `<a>` tags for internal routes in `src/app/page.tsx`, leading to full page reloads.
**Action:** Manually grep for `<a href="/` during performance reviews to catch hard navigations.
