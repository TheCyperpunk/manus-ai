# Production Performance Audit

## Baseline — 2026-08-19

| Output | Raw size | Gzip size | Finding |
|---|---:|---:|---|
| `index-B4CLjuFl.js` | 917.26 kB | 238.57 kB | Initial route bundle contains all portfolio pages and shared dependencies. |
| `index-DAdtO6IU.css` | 259.74 kB | 46.28 kB | Global stylesheet is large but compresses efficiently; preserve current visual system while removing unused delivery only if safely measurable. |
| `index.html` | 368.16 kB | 105.75 kB | Dominated by the inlined Manus runtime payload (approximately 366.9 kB), not portfolio content. |

## Confirmed Targets

1. Defer non-Overview routes using `React.lazy` and a minimal, accessible loading fallback.
2. Split shared third-party dependencies into stable vendor chunks to improve caching.
3. Exclude the Manus visual-editor runtime from production builds intended for external static hosting; retain it in development preview.
4. Preserve all typography, motion, navigation, and route behavior; verify `/contact` continues redirecting to `/#contact-switchboard`.

## Notes

- The project has no local media payloads in the initial bundle; visual assets are already referenced from `/manus-storage/`.
- Google Fonts are already preconnected with `font-display: swap` through the requested stylesheet URL.
