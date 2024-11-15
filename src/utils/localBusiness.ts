export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${import.meta.env.PUBLIC_SITE_URL}/#organization`,
    "name": "TheSearchPro",
    "image": `${import.meta.env.PUBLIC_SITE_URL}/images/logo.svg`,
    "logo": `${import.meta.env.PUBLIC_SITE_URL}/images/logo.svg`,
    "url": import.meta.env.PUBLIC_SITE_URL,
    "telephone": "+1-800-513-8069", 
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "postalCode": "98101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "47.6062",
      "longitude": "-122.3321"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://twitter.com/thesearchpro",
      "https://www.linkedin.com/company/thesearchpro",
      "https://www.facebook.com/thesearchpro"
    ]
  };
} 