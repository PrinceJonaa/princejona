# Sentinel's Journal

## 2024-05-22 - [Project Security Initialization]
**Vulnerability:** Missing centralized security tracking.
**Learning:** Security context is easily lost without a dedicated journal.
**Prevention:** Initialize .jules/sentinel.md in all new projects.

## 2024-05-22 - [Security Headers Configuration]
**Vulnerability:** Missing HTTP security headers (HSTS, Clickjacking protection, etc.).
**Learning:** Default Next.js configuration does not include aggressive security headers.
**Prevention:** Explicitly configure headers in `next.config.ts` to enforce HTTPS and restrict browser behaviors.
