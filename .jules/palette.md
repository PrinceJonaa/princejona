# Palette's Journal

## 2024-05-22 - Initial Setup
**Learning:** Established UX/A11y tracking for this project.
**Action:** Will record critical accessibility and UX learnings here.

## 2024-05-22 - Next.js Link Accessibility
**Learning:** Wrapping a styled `div` inside a Next.js `Link` can obscure focus states. Moving styles to the `Link` component itself (rendering as `a`) ensures proper keyboard focus rings and semantics.
**Action:** Always apply interactive styles (hover, focus) directly to the `Link` component in Next.js App Router.
