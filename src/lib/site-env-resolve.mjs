/**
 * Pure indexability resolution helpers (testable without TypeScript loader).
 */

/** @typedef {{ publicIndexable?: string; vercelEnv?: string; isProd?: boolean; defaultIndexable?: boolean }} IndexabilityEnv */

/** @param {IndexabilityEnv} env */
export function resolveIndexability(env) {
  if (env.publicIndexable === 'true') return true;
  if (env.publicIndexable === 'false') return false;
  if (env.defaultIndexable === false) return false;
  if (env.vercelEnv === 'production') return true;
  if (env.vercelEnv === 'preview' || env.vercelEnv === 'development') return false;
  return env.isProd ?? false;
}

/** @param {IndexabilityEnv} env */
export function resolveRobotsMetaContent(env) {
  return resolveIndexability(env) ? null : 'noindex, nofollow';
}
