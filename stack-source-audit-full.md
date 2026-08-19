# Full Stack Ledger Evidence Model

The Stack ledger covers **60 original, non-archived public repositories** from the public `TheCyperpunk` GitHub inventory. Every row exposes the repository name, direct public source URL, and its GitHub-detected primary language. The six repositories previously audited at code, manifest, and README level retain their richer multi-technology evidence.

| Evidence tier | Repository coverage | Visible representation |
|---|---:|---|
| Repository metadata | 60 | Repository name, direct GitHub source, and primary language where GitHub provides one |
| Code, manifest, and README audit | 6 | Expanded technology chip lists for `collegeproject`, `award-experiment`, `SorobanVault-`, `smart-energy-monitoring`, `multi-api-video-search`, and `TeleCloneChat` |
| Public organization membership | 0 | No organization-owned project work is inferred |

The data is generated at `client/src/lib/stack-repo-audit.ts` from `/home/ubuntu/stack-audit/all-repos/stack-repository-audit.json`. Forked and archived repositories are deliberately excluded.

## Targeted Re-audit: `videoplatform`

The `videoplatform` row was upgraded from primary-language metadata after a targeted public-source review. GitHub’s language endpoint reports **TypeScript 347,195 bytes**, **CSS 3,820 bytes**, **Dockerfile 3,733 bytes**, and **JavaScript 2,931 bytes**. Its public frontend manifest declares Next.js, React, TanStack Query, Zustand, Tailwind CSS, Zod, and Framer Motion; the backend manifest declares Fastify and MongoDB integration. Public repository structure also contains Docker Compose, Kubernetes configuration, and Nginx configuration. The row now carries these evidence-backed signals.

## Complete Repository-by-Repository Verification

All **60 original, non-archived public repositories** were rechecked individually through GitHub language data, a bounded public source-tree review, and—where present—root or nested manifests, build/deployment configuration, and README/Markdown documentation. Generated output now lives in `client/src/lib/stack-repo-audit.ts`. Vendored dependency directories and generated build output are excluded, so visible stack chips represent repository-owned source evidence. Empty repositories remain represented in the ledger but do not receive invented stack labels.
