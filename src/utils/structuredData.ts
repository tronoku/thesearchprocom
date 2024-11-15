export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TheSearchPro",
    "url": import.meta.env.PUBLIC_SITE_URL,
    "logo": `${import.meta.env.PUBLIC_SITE_URL}/images/logo.svg`,
    "description": import.meta.env.PUBLIC_SITE_DESCRIPTION,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "postalCode": "98101",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-206-800-6382",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://twitter.com/thesearchpro",
      "https://www.linkedin.com/company/thesearchpro",
      "https://www.facebook.com/thesearchpro"
    ]
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "TheSearchPro"
    },
    "url": `${import.meta.env.PUBLIC_SITE_URL}${service.url}`,
    "areaServed": "Worldwide"
  };
}

export function generateBreadcrumbSchema(items: { text: string; href?: string; }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@id": item.href ? `${import.meta.env.PUBLIC_SITE_URL}${item.href}` : "",
        "name": item.text
      }
    }))
  };
} 