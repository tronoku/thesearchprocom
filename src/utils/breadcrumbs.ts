type BreadcrumbItem = {
  text: string;
  href?: string;
};

export const serviceBreadcrumbs = {
  seo: [
    { text: 'Services', href: '/services' },
    { text: 'Search Engine Optimization' }
  ],
  ppc: [
    { text: 'Services', href: '/services' },
    { text: 'Pay Per Click Marketing' }
  ],
  webDesign: [
    { text: 'Services', href: '/services' },
    { text: 'Web Design & Development' }
  ],
  socialMedia: [
    { text: 'Services', href: '/services' },
    { text: 'Social Media Marketing' }
  ],
  webAnalytics: [
    { text: 'Services', href: '/services' },
    { text: 'Web Analytics' }
  ],
  brandMarketing: [
    { text: 'Services', href: '/services' },
    { text: 'Brand Marketing' }
  ],
  localSearch: [
    { text: 'Services', href: '/services' },
    { text: 'Local Search Strategy' }
  ],
  mapsOptimization: [
    { text: 'Services', href: '/services' },
    { text: 'Maps Search Optimization' }
  ],
  linkBuilding: [
    { text: 'Services', href: '/services' },
    { text: 'Link Building & PR' }
  ],
  emailDesign: [
    { text: 'Services', href: '/services' },
    { text: 'Email Design' }
  ]
} as const;

export const mainBreadcrumbs = {
  services: [{ text: 'Services' }],
  about: [{ text: 'About' }],
  contact: [{ text: 'Contact' }]
} as const; 