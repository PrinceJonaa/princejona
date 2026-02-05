# Palette's Journal

## 2024-05-22 - Accessibility in Interactive Cards
**Learning:** Animated cards often rely on `div` click handlers, stripping semantic meaning and keyboard access.
**Action:** Use `<button>` or `motion.button` for interactive elements, ensuring `aria-pressed` or similar states are communicated.

## 2024-05-23 - Focus Visibility in Light Mode
**Learning:** `ring-white/50` is ineffective for focus indicators on light backgrounds.
**Action:** Use `ring-foreground` combined with `ring-offset-2` to ensure visibility across both light and dark modes.
