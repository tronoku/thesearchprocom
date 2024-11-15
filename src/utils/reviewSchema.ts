interface Review {
  author: string;
  reviewBody: string;
  reviewRating: number;
  datePublished: string;
}

interface ServiceReview {
  serviceName: string;
  serviceUrl: string;
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  reviews: Review[];
}

export function generateServiceReviewSchema({
  serviceName,
  serviceUrl,
  aggregateRating,
  reviews
}: ServiceReview) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "provider": {
      "@type": "Organization",
      "name": "TheSearchPro"
    },
    "url": `${import.meta.env.PUBLIC_SITE_URL}${serviceUrl}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating || 5,
      "worstRating": aggregateRating.worstRating || 1
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  };
} 