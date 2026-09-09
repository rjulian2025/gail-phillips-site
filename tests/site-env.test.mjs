import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { resolveIndexability, resolveRobotsMetaContent } from '../src/lib/site-env-resolve.mjs';

describe('resolveIndexability', () => {
  it('treats PUBLIC_INDEXABLE=true as indexable', () => {
    assert.equal(resolveIndexability({ publicIndexable: 'true' }), true);
  });

  it('treats PUBLIC_INDEXABLE=false as non-indexable', () => {
    assert.equal(resolveIndexability({ publicIndexable: 'false' }), false);
  });

  it('treats Vercel preview as non-indexable', () => {
    assert.equal(resolveIndexability({ vercelEnv: 'preview', isProd: true }), false);
  });

  it('treats Vercel production as indexable', () => {
    assert.equal(resolveIndexability({ vercelEnv: 'production' }), true);
  });
});

describe('resolveRobotsMetaContent', () => {
  it('returns noindex,nofollow for non-indexable builds', () => {
    assert.equal(resolveRobotsMetaContent({ publicIndexable: 'false' }), 'noindex, nofollow');
  });

  it('omits robots meta for indexable production builds', () => {
    assert.equal(resolveRobotsMetaContent({ vercelEnv: 'production' }), null);
  });
});
