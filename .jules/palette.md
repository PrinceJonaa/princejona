## 2024-05-23 - Accessibility of Next.js Links
**Learning:** Wrapping interactive `div`s with `Link` without moving styles to the `Link` component creates a disconnected focus state where the focus ring appears around the unstyled anchor.
**Action:** Always apply interactive styles (hover, focus, layout) directly to the `Link` component to ensure visual and keyboard focus alignment.
