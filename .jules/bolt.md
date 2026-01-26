# Bolt's Journal

## 2024-05-23 - [Memory Leak in Effect Hooks]
**Learning:** Found `addEventListener` in `useEffect` without a cleanup function in `IdentityCard.tsx`. This causes memory leaks when components unmount.
**Action:** Always ensure `useEffect` returns a cleanup function when adding event listeners, or prefer CSS for simple interactions.

## 2024-05-24 - [Framer Motion Optimization]
**Learning:** Replacing `useInView` + `useEffect` with `whileInView` reduces boilerplate and bundle size significantly (e.g., ~50% reduction for simple components).
**Action:** Prefer `whileInView` prop for scroll-triggered animations in Framer Motion.
