## 2026-01-27 - Accessibility of Next.js Links
**Learning:** Next.js `Link` components should directly receive interactive styles (hover, focus) instead of inner containers to ensure the keyboard focus ring matches the visual element and to support client-side routing properly.
**Action:** Always wrap the entire interactive card/area in the `Link` component and apply `focus-visible` styles to it.
