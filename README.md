# Gail A. Phillips, LCSW — website

Astro static site for **Gail A. Phillips** (Buckhead psychodynamic psychotherapy). Migrated from [bhead-psych-preview](https://github.com/rjulian2025/bhead-psych-preview).

**Not related to** the [Michel Bordeau](../michel-bordeau-site/) or [Deeper Websites](../deeperwebsites-coming-soon/) projects — separate repo, client, domain, Vercel project, and dev port.

Open this directory as your **Cursor workspace root** when working on Gail (do not use `Desktop/Deeper Websites`, which is only the agency messaging API).

## Local development

```bash
npm install
npm run dev
```

http://127.0.0.1:4324

## Production

| Item | Value |
|------|--------|
| Domain | https://www.gailphillips.net |
| Vercel project | `gail-phillips-site` |
| GitHub | `rjulian2025/gail-phillips-site` |
| Production branch | `main` |

Analytics are intentionally disabled (privacy-minimal policy). Preview builds use `PUBLIC_INDEXABLE=false` or Vercel preview env for noindex guardrails.

## Deploy (Vercel)

1. Use the **gail-phillips-site** Vercel project only (not Michel or other clients).
2. Set `SITE_URL=https://www.gailphillips.net`, plus Resend vars when ready.
3. Point **gailphillips.net** and **www.gailphillips.net** at Vercel; prefer **www** as primary (matches the old site).
4. Legacy WordPress 301s and 410s are in `vercel.json` (audited against the old-site crawl).

**SEO launch checklist:** [`docs/seo-launch.md`](./docs/seo-launch.md)

See `.env.example` for required variables.

## Rollback

Redeploy a prior known-good commit from the Vercel dashboard, or revert on `main` and push. Record the deployment ID and SHA in the operator registry. Current approved production baseline: commit `7af74175` (Phase 2E security headers).
