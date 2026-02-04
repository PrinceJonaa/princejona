# Palette's Journal

## 2024-05-22 - Accessibility in Interactive Cards
**Learning:** Animated cards often rely on `div` click handlers, stripping semantic meaning and keyboard access.
**Action:** Use `<button>` or `motion.button` for interactive elements, ensuring `aria-pressed` or similar states are communicated.

## 2024-05-24 - Semantic Links and Focus States
**Learning:** Next.js `Link` components should directly receive interactive styles (layout, focus, hover) rather than wrapping a styled `div`. This ensures the anchor tag itself is the interactive target, providing correct keyboard focus behavior and semantic structure.
**Action:** Apply `block`, `focus-visible`, and layout classes directly to `Link` components instead of inner containers.
