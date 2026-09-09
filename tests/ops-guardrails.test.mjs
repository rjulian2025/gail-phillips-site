import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = join(import.meta.dirname, '..');

test('vercel.json declares RJOS baseline headers', () => {
  const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
  const block = vercel.headers?.find((e) => e.source === '/(.*)');
  assert.ok(block, 'expected /(.*) headers block');
  for (const key of [
    'Strict-Transport-Security',
    'X-Content-Type-Options',
    'X-Frame-Options',
    'Referrer-Policy',
    'Permissions-Policy',
  ]) {
    assert.ok(block.headers.find((h) => h.key === key), `missing ${key}`);
  }
});

test('404 sets noindex robots override', () => {
  const page = readFileSync(join(root, 'src/pages/404.astro'), 'utf8');
  assert.match(page, /noindex|noIndex/i);
});
