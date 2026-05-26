import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://www.gailphillips.net');

export default defineConfig({
  site,
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()]
  }
});
