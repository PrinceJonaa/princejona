# Palette's Journal

## 2024-05-22 - Accessibility in Interactive Cards
**Learning:** Animated cards often rely on `div` click handlers, stripping semantic meaning and keyboard access.
**Action:** Use `<button>` or `motion.button` for interactive elements, ensuring `aria-pressed` or similar states are communicated.

## 2025-05-22 - Next.js Link Structure
**Learning:** Next.js `Link` components (rendering `<a>`) should directly carry interactive styles (hover, focus, padding) instead of wrapping styled `div`s. This ensures the focus ring wraps the entire interactive area.
**Action:** Move `className` from inner `div` to `Link` and add `focus-visible` styles.
