export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface ResultStat {
  value: string;
  label: string;
}

export interface Results {
  title: string;
  subtitle?: string;
  stats: ResultStat[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceCTA {
  name: string;
  action: string;
}

export interface Service {
  name: string;
  shortName: string;
  description: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  results: Results;
  pricing: PricingTier[];
  faqs: FAQ[];
  cta: ServiceCTA;
} 