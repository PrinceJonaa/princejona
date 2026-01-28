# Palette's Journal

## 2024-05-22 - Accessibility in Interactive Cards
**Learning:** Animated cards often rely on `div` click handlers, stripping semantic meaning and keyboard access.
**Action:** Use `<button>` or `motion.button` for interactive elements, ensuring `aria-pressed` or similar states are communicated.

## 2024-10-26 - Navigation and Focus Visibility
**Learning:** Internal links using `<a>` cause full reloads, and `ring-white` focus styles disappear in light mode.
**Action:** Use Next.js `<Link>` for all internal navigation and prefer `ring-blue-500` with `ring-offset-2` for universal focus visibility.
