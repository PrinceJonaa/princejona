# Palette's Journal

## 2024-05-22 - Accessibility in Interactive Cards
**Learning:** Animated cards often rely on `div` click handlers, stripping semantic meaning and keyboard access.
**Action:** Use `<button>` or `motion.button` for interactive elements, ensuring `aria-pressed` or similar states are communicated.

## 2026-02-06 - Client-Side Navigation & Focus States
**Learning:** `<a>` tags for internal links cause full page reloads, breaking the SPA experience. Focus rings on interactive elements must have sufficient contrast (e.g., `ring-foreground` + `ring-offset-background`) to be visible on diverse backgrounds.
**Action:** Always use `<Link>` for internal navigation and enforce `focus-visible` styles with clear contrast.
