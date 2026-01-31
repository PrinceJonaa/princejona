## 2026-01-31 - Interactive Container Accessibility
**Learning:** Interactive elements (like Cards acting as links) must expose focus states on the top-level interactive container (Link) rather than inner elements to ensure keyboard users perceive the active element correctly.
**Action:** Always move interactive styles (hover, focus, transition) to the parent `Link` or `button` element and ensure `focus-visible` styles are explicitly defined.
