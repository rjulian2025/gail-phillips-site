import { site } from './site';

const base = site.url.replace(/\/$/, '');

/** Homepage JSON-LD @graph: practice identity, practitioner, services, and attribution. */
export function homePageSchema(pageTitle: string, pageDescription: string) {
  const orgId = `${base}/#organization`;
  const personId = `${base}/#person`;
  const websiteId = `${base}/#website`;
  const webpageId = `${base}/#webpage`;

  const postalAddress = {
    '@type': 'PostalAddress',
    streetAddress: site.address.line1,
    addressLocality: 'Atlanta',
    addressRegion: 'GA',
    postalCode: '30305',
    addressCountry: 'US'
  };

  const areaServed = [
    { '@type': 'City', name: 'Atlanta', containedInPlace: { '@type': 'State', name: 'Georgia' } },
    { '@type': 'AdministrativeArea', name: 'Buckhead, Atlanta, Georgia' },
    { '@type': 'State', name: 'Georgia' },
    { '@type': 'State', name: 'Florida' }
  ];

  const services = [
    {
      '@type': 'Service',
      '@id': `${base}/#service-individual-psychotherapy`,
      name: 'Individual psychodynamic psychotherapy',
      description:
        'Depth-oriented psychotherapy for adults experiencing persistent depression, chronic anxiety, relational patterns, grief, and related concerns.',
      provider: { '@id': orgId },
      serviceType: 'Psychodynamic psychotherapy',
      areaServed
    },
    {
      '@type': 'Service',
      '@id': `${base}/#service-relationship-psychotherapy`,
      name: 'Relationship psychotherapy',
      description:
        'Psychotherapy for couples, adult family members, roommates, and coworkers addressing conflict, disconnection, trust, and repeating relational patterns.',
      provider: { '@id': orgId },
      serviceType: 'Relationship psychotherapy',
      areaServed
    },
    {
      '@type': 'Service',
      '@id': `${base}/#service-telehealth`,
      name: 'Virtual psychotherapy',
      description: 'Telehealth sessions for clients located in Georgia and Florida.',
      provider: { '@id': orgId },
      serviceType: 'Telehealth psychotherapy',
      areaServed: [
        { '@type': 'State', name: 'Georgia' },
        { '@type': 'State', name: 'Florida' }
      ]
    }
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': orgId,
        name: site.name,
        alternateName: site.shortName,
        url: base,
        description: site.tagline,
        image: `${base}${site.ogImage}`,
        logo: `${base}/favicon.svg`,
        telephone: site.phoneTel,
        email: site.email,
        address: postalAddress,
        areaServed,
        founder: { '@id': personId },
        employee: { '@id': personId },
        priceRange: '$$$',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Psychotherapy services',
          itemListElement: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@id': s['@id'] }
          }))
        },
        sameAs: []
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: site.shortName,
        givenName: 'Gail',
        familyName: 'Phillips',
        honorificSuffix: 'LCSW',
        jobTitle: 'Licensed Clinical Social Worker',
        description:
          'Psychodynamic psychotherapist in Buckhead, Atlanta, with thirty-four years of clinical experience working with thoughtful adults.',
        url: `${base}/about`,
        image: `${base}/images/gail-portrait-new.webp`,
        worksFor: { '@id': orgId },
        knowsAbout: [
          'Psychodynamic psychotherapy',
          'Anxiety',
          'Depression',
          'Relationship patterns',
          'Grief',
          'Existential therapy'
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Professional license',
          name: site.license,
          recognizedBy: { '@type': 'Organization', name: 'State of Georgia' }
        }
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: base,
        name: site.name,
        description: site.tagline,
        inLanguage: 'en-US',
        publisher: { '@id': personId },
        author: { '@id': personId }
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: `${base}/`,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
        mainEntity: { '@id': orgId },
        author: { '@id': personId },
        publisher: { '@id': personId },
        inLanguage: 'en-US'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${base}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${base}/`
          }
        ]
      },
      ...services
    ]
  };
}
