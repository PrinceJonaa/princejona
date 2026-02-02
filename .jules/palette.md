## 2024-05-22 - Theme-Dependent Focus Rings
**Learning:** Hardcoded focus ring colors (e.g., `ring-white/50`) can become invisible when the background color changes (e.g., in light mode), failing accessibility requirements.
**Action:** Always use theme-aware variables like `ring-foreground` combined with `ring-offset-background` to ensure focus indicators are visible in all color schemes.
