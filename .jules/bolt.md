## 2026-01-25 - Avoid JS Animations for Simple Hovers
**Learning:** `animejs` was being used for simple hover effects, introducing unnecessary runtime overhead and memory leaks (missing cleanup).
**Action:** Prefer CSS transitions for simple hover states like scaling.
