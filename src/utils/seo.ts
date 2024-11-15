interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article' | 'service';
  image?: string;
  path: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateSEOMeta({
  title,
  description,
  type = 'website',
  image = '/images/og-image.jpg',
  path,
  publishedTime,
  modifiedTime
}: SEOProps) {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL;
  const siteName = import.meta.env.PUBLIC_SITE_TITLE;
  const canonicalURL = `${siteUrl}${path}`;

  return {
    // Basic Meta Tags
    title: `${title} - ${siteName}`,
    description,
    canonical: canonicalURL,

    // Open Graph
    og: {
      title,
      description,
      type,
      image: `${siteUrl}${image}`,
      url: canonicalURL,
      siteName,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime })
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: `${siteUrl}${image}`,
      site: '@thesearchpro'
    }
  };
} 