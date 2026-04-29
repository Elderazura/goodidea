/**
 * JSON-LD structured data for Goodidea Dubai
 * Helps Google understand the business entity, services, and local presence.
 */
export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Goodidea',
    legalName: 'Goodidea FZ LLC',
    url: 'https://goodidea.ae',
    logo: 'https://goodidea.ae/images/goodidea-logo.svg',
    description:
      'Dubai-based creative and branding agency. We build brands that mean something through strategy, identity, naming, and design.',
    foundingDate: '2018',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1705, Al Manara Tower, Business Bay',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.1957,
      longitude: 55.2696,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971501350609',
        contactType: 'customer service',
        email: 'dubaiis@goodidea.ae',
        areaServed: ['AE', 'SA', 'GB'],
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    sameAs: [
      'https://www.instagram.com/goodideadubai',
      'https://www.linkedin.com/company/goodideadubai',
      'https://www.facebook.com/goodideadubai',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Branding & Strategy Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Identity' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Strategy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Naming' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tone of Voice' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Branding' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  )
}
