## 2025-10-26 - Navigation and Focus Improvements
**Learning:** Moving styles from inner wrapper divs to the Next.js `Link` component improves accessibility by ensuring the interactive element (anchor) matches the visual bounds of the component, allowing for proper focus ring rendering.
**Action:** When refactoring clickable cards, ensure the `Link` component carries the layout and interactive styles (display: block, padding, hover/focus states) and remove unnecessary inner wrappers.
