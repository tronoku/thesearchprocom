interface PageMeta {
  title: string;
  description: string;
  type?: 'website' | 'article' | 'service';
}

export const metadata = {
  home: {
    title: "TheSearchPro - SEO Company that Gets Results",
    description: "Professional SEO services that help websites increase their organic search score and compete for the highest rankings.",
    type: 'website'
  },
  services: {
    seo: {
      title: "SEO Services - Boost Your Search Rankings | TheSearchPro",
      description: "Boost your website's rankings with our proven SEO strategies and expert analysis. Get more organic traffic and qualified leads.",
      type: 'service'
    },
    ppc: {
      title: "PPC Management Services - Drive Targeted Traffic | TheSearchPro",
      description: "Drive targeted traffic and conversions with our expert PPC management services. Maximize ROI with strategic paid advertising campaigns.",
      type: 'service'
    },
    webDesign: {
      title: "Web Design Services - Custom Websites That Convert | TheSearchPro",
      description: "Get a custom website designed to convert visitors into customers. Professional web design services focused on SEO and user experience.",
      type: 'service'
    },
    socialMedia: {
      title: "Social Media Marketing Services - Grow Your Brand | TheSearchPro",
      description: "Build your brand and engage with customers through strategic social media marketing. Get real results and grow your online presence.",
      type: 'service'
    },
    webAnalytics: {
      title: "Web Analytics Services - Data-Driven Insights | TheSearchPro",
      description: "Get comprehensive insights about your website's performance with our advanced web analytics services. Make data-driven decisions.",
      type: 'service'
    },
    localSearch: {
      title: "Local Search Services - Dominate Your Market | TheSearchPro",
      description: "Improve your local search visibility and attract more customers in your area. Expert local SEO services for businesses.",
      type: 'service'
    },
    mapsOptimization: {
      title: "Maps Optimization Services - Get Found Locally | TheSearchPro",
      description: "Optimize your presence on Google Maps and local directories to attract more local customers. Improve your local visibility.",
      type: 'service'
    },
    linkBuilding: {
      title: "Link Building & PR Services - Build Authority | TheSearchPro",
      description: "Build authority with quality backlinks and strategic digital PR campaigns. Improve your rankings with proven link building strategies.",
      type: 'service'
    },
    emailDesign: {
      title: "Email Design Services - Convert Subscribers | TheSearchPro",
      description: "Create email campaigns that engage and convert with our custom email design services. Get professional email templates that drive results.",
      type: 'service'
    }
  },
  about: {
    title: "About TheSearchPro - Your Digital Growth Partner",
    description: "Learn how TheSearchPro helps businesses grow through proven SEO and digital marketing strategies.",
    type: 'website'
  },
  contact: {
    title: "Contact TheSearchPro - Get Your Free SEO Consultation",
    description: "Contact our SEO experts for a free consultation and discover how we can help improve your website's search engine rankings.",
    type: 'website'
  },
  privacy: {
    title: "Privacy Policy - TheSearchPro",
    description: "Learn how TheSearchPro collects, uses, and protects your personal information.",
    type: 'website'
  },
  terms: {
    title: "Terms of Service - TheSearchPro",
    description: "Read our terms and conditions for using TheSearchPro's services.",
    type: 'website'
  }
} as const; 