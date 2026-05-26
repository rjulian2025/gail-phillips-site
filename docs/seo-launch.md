# SEO-safe launch — Gail A. Phillips (gailphillips.net)

Goal: same domain, preserve URL intent, avoid redirect chains and “everything to home” patterns.

## Canonical host

The old crawl used **`http://www.gailphillips.net/`** as the live homepage. Match that:

- **Canonical:** `https://www.gailphillips.net`
- **Vercel:** add both `gailphillips.net` and `www.gailphillips.net`; set **www** as primary redirect target in the Vercel domain UI
- **`SITE_URL`:** `https://www.gailphillips.net` (production)

## Redirect strategy (in `vercel.json`)

| Old (WordPress) | New (Astro) | Why |
|-----------------|-------------|-----|
| 16 specialty / about / appointment paths | Closest new page or article | Same intent, passes equity |
| `/resources/` | *(none — same URL on new site)* | Old WP hub path matches Astro `/resources`; do not self-redirect |
| Any `/:path/` with trailing slash | `/:path` | WordPress trailing slashes |
| `/wp-content/*`, `/wp-includes/*` | **410 Gone** | Assets/PDFs — not redirected to Home |

Do **not** 301 legacy HTML URLs to `/` unless there is no equivalent page.

## Pre-launch checklist

1. [ ] `SITE_URL` and Resend env vars set on **gail-phillips-site** only  
2. [ ] DNS: `www` + apex → Vercel; www preferred  
3. [ ] Spot-check 301s on production domain (sample below)  
4. [ ] Confirm sitemap: `https://www.gailphillips.net/sitemap.xml`  
5. [ ] Google Search Console: add property, submit sitemap  
6. [ ] Inspect top 5 old URLs (Coverage / Performance) after 48–72h  

## Sample redirect tests (after DNS)

```bash
curl -sI https://www.gailphillips.net/about-me/ | grep -iE '^(HTTP|location)'
curl -sI https://www.gailphillips.net/anxiety/ | grep -iE '^(HTTP|location)'
curl -sI https://www.gailphillips.net/resources/ | grep -iE '^(HTTP|location)'
curl -sI https://www.gailphillips.net/wp-content/themes/GailPhillips3/style.css | grep -iE '^HTTP'
```

Expect **301** with a single `Location` to the new path; wp-content expect **410**.

## Post-launch (first 2 weeks)

- Monitor GSC **Pages** and **Redirects** for 404 spikes  
- Avoid changing redirect targets unless necessary (each change resets signal)  
- Keep old site crawl CSV as baseline (`Gail Phillips.net_Oldsite_internal_all.csv`)

## New URLs (no legacy redirect required)

`/for-therapists`, `/the-work`, `/who-i-work-with`, and new resource articles are net-new or renamed hubs — they were not indexable paths on the old WordPress site with the same slugs.
