# Palette's Journal

## 2024-05-22 - Accessibility in Interactive Cards
**Learning:** Animated cards often rely on `div` click handlers, stripping semantic meaning and keyboard access.
**Action:** Use `<button>` or `motion.button` for interactive elements, ensuring `aria-pressed` or similar states are communicated.

## 2024-05-23 - Focus Management in Navigation
**Learning:** Standard `<a>` tags in Next.js bypass client-side routing, and interactive elements (like cards) composed of nested divs lose native keyboard focus behavior.
**Action:** Replace `<a>` with Next.js `Link` components and apply `focus-visible` ring styles directly to the interactive container to ensure keyboard navigability.
