export interface NavLink {
  title: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string[];
  benefits: string[];
  pricing: {
    starter: string;
    growth: string;
    premium: string;
    monthly: {
      starter: string;
      growth: string;
      premium: string;
    };
    monthlyFeatures?: {
      starter: string[];
      growth: string[];
      premium: string[];
    };
  };
  faqs: FAQ[];
}

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  businessType?: string;
  service?: string;
  message?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Stat {
  number: string;
  label: string;
}
