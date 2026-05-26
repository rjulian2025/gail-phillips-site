import type { APIRoute } from 'astro';
import { articleSlugs } from '../data/articles';
import { site } from '../data/site';

const corePaths = ['/', '/about', '/the-work', '/who-i-work-with', '/for-therapists', '/resources', '/begin'];
const articlePaths = articleSlugs.map((slug) => `/resources/${slug}`);

export const GET: APIRoute = () => {
  const all = [...corePaths, ...articlePaths];
  const urls = all
    .map(
      (path) => `  <url>
    <loc>${site.url}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/resources/') ? '0.7' : '0.8'}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};

