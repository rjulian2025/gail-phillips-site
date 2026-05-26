# Gail Phillips site — quick reference

| Item | Value |
|------|--------|
| Client | Gail A. Phillips, LCSW |
| Source (Lovable) | `rjulian2025/bhead-psych-preview` |
| Production domain | `gailphillips.net` (configure in Vercel) |
| Dev port | `4324` (Michel `4322`, Deeper `4323`) |
| Cursor workspace | Open **this folder** as the project root — not `Desktop/Deeper Websites` |

This directory is the **only** home for the Gail site. Do not add Gail pages or assets to `michel-bordeau-site` or other client repos.

## Isolation checklist

- Vercel project: **gail-phillips-site** only
- Env vars: `SITE_URL`, `CONTACT_*`, `RESEND_API_KEY` on this project only
- API route: `/api/contact` (not Deeper’s `/api/message`)
- Before deploy: `npm run clean && npm run build`
