# Sentinel's Journal

## Critical Security Learnings

## 2024-05-22 - Critical Vulnerability in Next.js Dependency
**Vulnerability:** Next.js version 15.2.4 (current) contains multiple critical vulnerabilities including RCE and cache poisoning (GHSA-9qr9-h5gf-34mp, etc.).
**Learning:** Manual version pinning in `package.json` can lead to missed security patches. Routine `npm audit` checks are essential.
**Prevention:** Update `next` dependency to >=15.5.11 immediately.
