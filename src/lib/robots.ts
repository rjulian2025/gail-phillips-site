import { getSiteUrl, shouldNoindex } from './site-env';

const AI_CRAWLER_AGENTS = [
  'GPTBot',
  'ClaudeBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'CCBot',
  'Applebot-Extended'
] as const;

function nonIndexableRobots(siteUrl: string): string {
  return [
    '# indexability-state: noindex',
    `# site: ${siteUrl}`,
    'User-agent: *',
    'Disallow: /',
    ''
  ].join('\n');
}

function indexableRobots(siteUrl: string): string {
  const lines = [
    '# indexability-state: indexable',
    `# site: ${siteUrl}`,
    'User-agent: *',
    'Allow: /',
    ''
  ];

  for (const agent of AI_CRAWLER_AGENTS) {
    lines.push(`User-agent: ${agent}`, 'Allow: /', '');
  }

  lines.push(`Sitemap: ${siteUrl}/sitemap.xml`, '');
  return lines.join('\n');
}

export function buildRobotsTxt(): string {
  const siteUrl = getSiteUrl();
  return shouldNoindex() ? nonIndexableRobots(siteUrl) : indexableRobots(siteUrl);
}
