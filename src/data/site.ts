export const site = {
  name: 'Gail A. Phillips, LCSW',
  shortName: 'Gail A. Phillips',
  tagline: 'Psychodynamic psychotherapy for adults seeking deep, lasting change.',
  url: import.meta.env.SITE || 'https://www.gailphillips.net',
  ogImage: '/images/gail-garden-hero.webp',
  license: 'LCSW #1528',
  fee: '$250 per session, private pay',
  email: 'gail@example.com',
  phone: ''
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/the-work', label: 'The Work' },
  { href: '/who-i-work-with', label: 'Who I Work With' },
  { href: '/for-therapists', label: 'For Therapists' },
  { href: '/resources', label: 'Resources' }
] as const;

