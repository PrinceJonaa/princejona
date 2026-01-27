## 2024-05-23 - Focus Ring Visibility
**Learning:** Default white focus rings (`ring-white/50`) are invisible on light backgrounds, which breaks accessibility for keyboard users in light mode.
**Action:** Always use high-contrast colors (e.g., `ring-blue-500`) or `ring-current` combined with `ring-offset-2` to ensure visibility on both light and dark backgrounds.
