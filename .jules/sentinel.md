## 2026-01-26 - Missing Security Headers
**Vulnerability:** The application was missing standard security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
**Learning:** Default Next.js configuration does not include these headers automatically; they must be explicitly configured in `next.config.ts`.
**Prevention:** Always verify `next.config.ts` includes a `headers()` function with these standard security headers.
