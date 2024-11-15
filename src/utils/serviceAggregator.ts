interface Service {
  name: string;
  description: string;
  url: string;
}

export function generateServiceAggregatorSchema(services: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "TheSearchPro"
        },
        "url": `${import.meta.env.PUBLIC_SITE_URL}${service.url}`
      }
    }))
  };
} 