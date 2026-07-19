import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://samvistudios.com';
const SITE_NAME = 'Samvi Studios';
const DEFAULT_IMAGE = `${SITE_URL}/SamviStudios.jpg`;
const DEFAULT_DESCRIPTION =
  'Samvi Studios — Fusion of Arts in Kompally, Hyderabad. Expert-led Yoga, Classical Dance, Music, Zumba, Gymnastics, Certification Courses, Workshops, Retreats & Corporate Wellness Programs.';

/**
 * SEO component for per-page meta tags, Open Graph, Twitter Card, and JSON-LD structured data.
 *
 * @param {string} title         - Page title (appended with " | Samvi Studios")
 * @param {string} description   - Meta description
 * @param {string} canonical     - Canonical URL path (e.g. "/services")
 * @param {string} ogImage       - Absolute URL for OG image (optional, falls back to default)
 * @param {string} ogType        - OG type ("website" or "article")
 * @param {object} structuredData - JSON-LD object (optional override)
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = '/',
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  structuredData,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Fusion of Arts | Yoga, Dance, Music & More in Kompally`;
  const canonicalUrl = `${SITE_URL}${canonical}`;

  // Default JSON-LD: LocalBusiness schema
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_URL,
    name: SITE_NAME,
    alternateName: 'Samvi Studios — Fusion of Arts',
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    logo: DEFAULT_IMAGE,
    image: DEFAULT_IMAGE,
    telephone: ['+91-97006-05652', '+91-95158-24491'],
    email: 'hello@samvistudios.com',
    priceRange: '₹₹',
    servesCuisine: 'Arts & Wellness',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kompally',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500014',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.516629',
      longitude: '78.4735231',
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '06:00', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '06:00', closes: '18:00' },
    ],
    sameAs: [
      'https://www.instagram.com/samvi_studios/',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Arts & Wellness Programs',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Offline Sessions — Yoga, Dance, Zumba, Music, Gymnastics' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Online Sessions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workshops' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Certification Courses' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Personal Training' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Wellness Programs' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sangeethu' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Events' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retreats' } },
      ],
    },
  };

  const schema = structuredData || defaultSchema;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} — Fusion of Arts`} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
