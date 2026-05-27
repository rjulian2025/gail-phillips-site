export const site = {
  name: 'Gail A. Phillips, LCSW',
  shortName: 'Gail A. Phillips',
  tagline: 'Psychodynamic psychotherapy for adults seeking deep, lasting change.',
  url: import.meta.env.SITE || 'https://www.gailphillips.net',
  ogImage: '/images/gail-garden-hero.webp',
  license: 'LCSW #1528',
  footerTagline: 'Psychotherapy Private Practice in Buckhead Since 1992 · LCSW #1528',
  fees: {
    standard: '$250 per 50-minute session',
    extended: '$500 per 110-minute session'
  },
  email: 'gail@gailphillips.net',
  phone: '(404) 982-9010',
  phoneTel: '+14049829010',
  address: {
    line1: '2734 N. Hills Drive, NE',
    city: 'Atlanta, Georgia 30305'
  }
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/the-work', label: 'The Work' },
  { href: '/who-i-work-with', label: 'Who I Work With' },
  { href: '/for-therapists', label: 'For Therapists' },
  { href: '/resources', label: 'Resources' }
] as const;

