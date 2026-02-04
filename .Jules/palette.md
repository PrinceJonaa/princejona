# Palette's Journal

## 2024-05-22 - Accessibility in Interactive Cards
**Learning:** Animated cards often rely on `div` click handlers, stripping semantic meaning and keyboard access.
**Action:** Use `<button>` or `motion.button` for interactive elements, ensuring `aria-pressed` or similar states are communicated.

## 2024-10-26 - Semantic Linking and Focus Styles
**Learning:** Next.js `Link` components should carry the visual and layout styles (like `block`, `padding`) instead of inner wrappers to ensure the keyboard focus ring matches the interactive area.
**Action:** Move styles to `Link`, ensure `display: block` (or similar), and apply `focus-visible` ring styles directly to the `Link` component.
