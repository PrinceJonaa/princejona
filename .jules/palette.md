## 2024-05-22 - Next.js 15 Params & Flip Cards
**Learning:** Next.js 15 treats `params` as a Promise in dynamic routes. Always `await params` before accessing properties to prevent runtime errors.
**Action:** Use `const { slug } = await params;` in page components.

## 2024-05-22 - 3D Flip Card Structure
**Learning:** A true flip interaction requires two distinct faces (Front/Back) and `preserve-3d`. Rotating a single element 360 degrees is a spin, not a flip, and can be confusing if content doesn't change or invert.
**Action:** Implement flip cards with a parent container (`preserve-3d`) and two children: Front (`relative`, `backface-hidden`) and Back (`absolute`, `rotateY(180deg)`, `backface-hidden`).
