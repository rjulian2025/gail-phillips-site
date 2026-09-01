/**
 * Indexability helpers for preview/staging guardrails.
 * See Deeper Site OS INDEXABILITY-GUARDRAILS pattern.
 */
import { SITE_URL, VERCEL_ENV } from 'astro:env/server';
import { PUBLIC_INDEXABLE } from 'astro:env/client';
import { site } from '../data/site';

export function getSiteUrl(): string {
  return (SITE_URL || site.url).replace(/\/$/, '');
}

export function isIndexableBuild(): boolean {
  if (PUBLIC_INDEXABLE === 'true') return true;
  if (PUBLIC_INDEXABLE === 'false') return false;
  if (VERCEL_ENV === 'production') return true;
  if (VERCEL_ENV === 'preview' || VERCEL_ENV === 'development') return false;
  return import.meta.env.PROD;
}

/** Omit meta robots on indexable production builds; emit noindex,nofollow otherwise. */
export function robotsMetaContent(): string | null {
  return isIndexableBuild() ? null : 'noindex, nofollow';
}
