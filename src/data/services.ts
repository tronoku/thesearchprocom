import type { Service } from '../types/service';

export const services: Record<string, Service> = {
  seo: {
    name: "Search Engine Optimization",
    shortName: "SEO",
    description: "Boost your website's rankings with our proven SEO strategies and expert analysis.",
    features: [
      {
        title: "Technical SEO",
        description: "We optimize your website's technical foundation to ensure search engines can effectively crawl and index your content.",
        icon: "code"
      },
      {
        title: "Content Strategy",
        description: "We develop and implement content strategies that target valuable keywords and engage your audience.",
        icon: "article"
      },
      {
        title: "Link Building",
        description: "We build high-quality backlinks that boost your site's authority and improve rankings.",
        icon: "link"
      }
    ],
    process: [
      {
        number: 1,
        title: "SEO Audit",
        description: "We analyze your website's current performance and identify opportunities for improvement."
      },
      {
        number: 2,
        title: "Strategy Development",
        description: "We create a customized SEO strategy based on your goals and target audience."
      },
      {
        number: 3,
        title: "Implementation",
        description: "We implement technical optimizations, content improvements, and link building campaigns."
      },
      {
        number: 4,
        title: "Monitoring & Optimization",
        description: "We continuously monitor performance and optimize our approach for best results."
      }
    ],
    results: {
      title: "SEO Results That Matter",
      subtitle: "Our SEO services deliver measurable improvements",
      stats: [
        {
          value: "285%",
          label: "Average Increase in Organic Traffic"
        },
        {
          value: "156%",
          label: "More Qualified Leads"
        },
        {
          value: "4.2x",
          label: "Return on Investment"
        }
      ]
    },
    pricing: [
      {
        name: "Local SEO",
        price: "$999/mo",
        description: "For local businesses",
        features: [
          "Keyword Research",
          "On-Page Optimization",
          "Local Citations",
          "Google Business Profile",
          "Monthly Reporting",
          "Basic Link Building"
        ]
      },
      {
        name: "Professional SEO",
        price: "$1,999/mo",
        description: "For growing businesses",
        isPopular: true,
        features: [
          "Everything in Local SEO",
          "Content Strategy",
          "Technical SEO",
          "Advanced Link Building",
          "Competitor Analysis",
          "Weekly Reporting",
          "Priority Support"
        ]
      },
      {
        name: "Enterprise SEO",
        price: "Custom",
        description: "For large websites",
        features: [
          "Everything in Professional",
          "International SEO",
          "Custom Reporting",
          "Content Creation",
          "Advanced Technical SEO",
          "Strategic Consulting",
          "Dedicated Account Manager"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer: "While some improvements can be seen within the first few months, significant results typically take 4-6 months. SEO is a long-term strategy that builds sustainable organic traffic growth over time."
      },
      {
        question: "What's included in your SEO services?",
        answer: "Our SEO services include technical optimization, keyword research, content strategy, on-page optimization, link building, and regular performance reporting. We provide a comprehensive approach to improve your search visibility."
      },
      {
        question: "Do you guarantee first page rankings?",
        answer: "No reputable SEO company can guarantee specific rankings as search algorithms are complex and constantly changing. We focus on implementing proven strategies that improve your visibility and drive qualified traffic."
      },
      {
        question: "How do you measure SEO success?",
        answer: "We track key metrics including organic traffic growth, keyword rankings, conversion rates, and ROI. We provide regular reports showing the impact of our SEO efforts on your business goals."
      }
    ],
    cta: {
      name: "SEO",
      action: "Improve Your Search Rankings"
    }
  },
  // Add other services here...
}; 