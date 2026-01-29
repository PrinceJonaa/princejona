## 2024-05-23 - Accessibility of Interactive Wrappers
**Learning:** When wrapping content with Next.js `Link`, applying interactive styles (hover, focus, layout) to inner containers breaks keyboard accessibility and creates confusing focus states. The `Link` component itself is the interactive element in the DOM (rendering as `<a>`).
**Action:** Always apply `className` containing layout, padding, hover, and focus styles directly to the `Link` component. Ensure `display: block` or `inline-block` is set if it needs to contain block-level elements.
