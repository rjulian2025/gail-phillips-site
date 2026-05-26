# Gail A. Phillips, LCSW — website

Astro static site for **Gail A. Phillips** (Buckhead psychodynamic psychotherapy). Migrated from [bhead-psych-preview](https://github.com/rjulian2025/bhead-psych-preview).

**Not related to** the [Michel Bordeau](../michel-bordeau-site/) project — separate repo, client, domain, and Vercel project.

## Local development

```bash
npm install
npm run dev
```

http://127.0.0.1:4323

## Deploy (Vercel)

1. Use the **gail-phillips-site** Vercel project only (not Michel or other clients).
2. Set `SITE_URL=https://www.gailphillips.net`, plus Resend vars when ready.
3. Point **gailphillips.net** and **www.gailphillips.net** at Vercel; prefer **www** as primary (matches the old site).
4. Legacy WordPress 301s and 410s are in `vercel.json` (audited against the old-site crawl).

**SEO launch checklist:** [`docs/seo-launch.md`](./docs/seo-launch.md)

See `.env.example` for required variables.
