# Palette's Journal

## 2024-05-22 - Accessibility in Interactive Cards
**Learning:** Animated cards often rely on `div` click handlers, stripping semantic meaning and keyboard access.
**Action:** Use `<button>` or `motion.button` for interactive elements, ensuring `aria-pressed` or similar states are communicated.

## 2026-02-03 - Navigation Accessibility and Focus States
**Learning:** `<a>` tags for internal links cause full page reloads, hurting UX; missing focus states make navigation impossible for keyboard users.
**Action:** Always use Next.js `<Link>` for internal navigation and ensure explicit `focus-visible` styles are applied to all interactive elements.
