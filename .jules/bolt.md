# Bolt's Journal

## 2024-05-23 - [Memory Leak in Effect Hooks]
**Learning:** Found `addEventListener` in `useEffect` without a cleanup function in `IdentityCard.tsx`. This causes memory leaks when components unmount.
**Action:** Always ensure `useEffect` returns a cleanup function when adding event listeners, or prefer CSS for simple interactions.

## 2024-05-24 - [Declarative vs Imperative Animations]
**Learning:** Found usage of `useInView` combined with `useEffect` and `useAnimation` for simple scroll animations. This introduces unnecessary state updates and hook overhead.
**Action:** Refactor to use Framer Motion's declarative `whileInView` prop which handles this internally and more efficiently.
