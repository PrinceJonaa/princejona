# Palette's Journal

## 2024-05-22 - Accessibility in Interactive Cards
**Learning:** Animated cards often rely on `div` click handlers, stripping semantic meaning and keyboard access.
**Action:** Use `<button>` or `motion.button` for interactive elements, ensuring `aria-pressed` or similar states are communicated.

## 2024-05-22 - Nested Interactive Styles
**Learning:** When wrapping complex components in `Link`, visual states often live on children.
**Action:** Use `group` on the `Link` and `group-hover`/`group-focus-visible` on children to ensure keyboard focus matches mouse hover visuals.
