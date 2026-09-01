import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://www.gailphillips.net');

export default defineConfig({
  site,
  trailingSlash: 'never',
  env: {
    schema: {
      SITE_URL: envField.string({ context: 'server', access: 'public', optional: true }),
      VERCEL_ENV: envField.string({ context: 'server', access: 'public', optional: true }),
      PUBLIC_INDEXABLE: envField.string({ context: 'client', access: 'public', optional: true })
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
