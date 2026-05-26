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

1. Create a **new** Vercel project linked to this repository only.
2. Set `SITE_URL`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
3. Point **gailphillips.net** at this deployment (not the Michel Bordeau domain).

See `.env.example` for required variables.
