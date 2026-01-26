# Sentinel Journal

This journal records critical security learnings and vulnerability patterns found in the codebase.

## 2024-05-23 - Critical Next.js Vulnerabilities
**Vulnerability:** Found multiple critical/high vulnerabilities in Next.js version 15.2.4 (pinned in package.json). These included Cache Key Confusion, Content Injection, and SSRF risks (see `npm audit` report from 2024-05-23 for the full CVE list).
**Learning:** Pinned dependencies can drift from security patches quickly. Next.js 15.x had significant security patches released recently.
**Prevention:** Regularly audit dependencies using `npm audit` and update `next` to the latest patch version within the major version. We updated to `15.5.9`.
