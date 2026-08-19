# Vercel Deployment Guide

## Deployment readiness

The portfolio is ready to deploy as a static Vite application. The production build has passed locally, and the repository already contains `vercel.json`, which defines the build command, `dist/public` output directory, SPA fallback rewrite, and immutable caching for hashed assets. The repository to import is **`TheCyperpunk/manus-ai`**; use its `main` branch.

| Setting | Use this value | Reason |
|---|---|---|
| Framework Preset | `Vite` | The application is a React + Vite static frontend. |
| Root Directory | `.` | The package manifest and Vercel configuration are at the repository root. |
| Install Command | Leave Vercel default | The checked-in `pnpm-lock.yaml` identifies pnpm. |
| Build Command | `pnpm build` | Matches the committed Vercel configuration. |
| Output Directory | `dist/public` | Matches the committed Vercel configuration. |
| Production Branch | `main` | This is the portfolio’s tracked release branch. |

## First deployment

Open the [Vercel New Project page](https://vercel.com/new), connect GitHub if prompted, and import **`TheCyperpunk/manus-ai`**. Select the Vite preset if the platform has not already detected it. Confirm the settings in the table, leave the Root Directory as the repository root, and deploy. Vercel supports dashboard imports from GitHub and automatically creates new deployments for later pushes to the connected branch.[1]

> The current `vercel.json` is the source of truth for build output, client-side route fallback, and static asset caching. Do not replace it with a generic Vite configuration.

## Environment variables

The portfolio has no runtime backend dependency. The only production value that should be configured is optional analytics continuity. If you want to retain the current analytics script, add the existing values for `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID` in **Settings → Environment Variables**, applying them to Production and Preview as appropriate. These are public browser-facing values, not secrets. If analytics is not required, remove the analytics `<script>` from `client/index.html` in a later code revision rather than leaving the values undefined.

The unused template Map and OAuth integrations do not participate in the current portfolio routes, so do not copy their template variables into Vercel unless those features are later enabled.

## Custom domain

After the first deployment completes, open the Vercel project’s **Settings → Domains** panel and add the domain you own. For an apex domain, Vercel will provide an **A record**; for a subdomain, it will provide a unique **CNAME** record. Follow the exact record shown in the Vercel dashboard, because project-specific DNS targets can differ. Vercel will confirm the domain status after it verifies the DNS configuration.[2]

Add both the apex domain and `www` if you want a clear canonical address, then set the non-canonical one to redirect. If you choose the Vercel nameserver method, reproduce any existing email, verification, or other DNS records in Vercel first.[2]

## Post-deployment verification

Use the Vercel deployment URL to test the Overview, Projects, Participation, Stack, a case-study URL, and the legacy `/contact` URL. The `/contact` URL must resolve to `/#contact-switchboard`; direct reloads on nested routes must continue to load the SPA rather than returning a 404. Confirm that the hero portrait and Signal mark load from the existing `/manus-storage/` paths, that the first navigation to a deferred route presents the Source Atlas loading skeleton where loading is perceptible, and that the live production site has no console errors.

Vercel’s Git integration can deploy every subsequent push to the connected branch, so the normal release workflow is: test locally, commit the change, push `main`, then verify the new production deployment in the dashboard.[1]

## References

[1]: https://vercel.com/docs/getting-started-with-vercel "Vercel — Getting started"
[2]: https://vercel.com/docs/domains/working-with-domains/add-a-domain "Vercel — Adding and configuring a custom domain"
