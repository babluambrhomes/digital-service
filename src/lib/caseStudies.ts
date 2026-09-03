export interface CaseStudy {
  id: string;
  business: string;
  location: string;
  industry: string;
  image: string;
  before: {
    title: string;
    points: string[];
    metric: string;
  };
  after: {
    title: string;
    points: string[];
    metric: string;
  };
  improvement: string;
  testimonial: string;
  author: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    business: "TechNova Solutions",
    location: "Mumbai",
    industry: "Software & Automation",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    before: {
      title: "Before GrowthZone",
      points: [
        "Manual data entry across 3 systems",
        "No centralized CRM",
        "Leads lost in spreadsheets",
        "No automated follow-ups",
      ],
      metric: "12 hours/week wasted",
    },
    after: {
      title: "After GrowthZone",
      points: [
        "Custom CRM built and deployed",
        "Full workflow automation",
        "AI lead scoring and routing",
        "Automated reporting dashboards",
      ],
      metric: "15 hours/week saved",
    },
    improvement: "300%",
    testimonial:
      "GrowthZone built our custom CRM and automated our workflows. Operational efficiency improved by 300% and our team saves 15 hours every week.",
    author: "Rajesh Kumar, CTO",
  },
  {
    id: "2",
    business: "HealthFirst Clinics",
    location: "Bangalore",
    industry: "Healthcare & AI",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    before: {
      title: "Before GrowthZone",
      points: [
        "Manual appointment scheduling",
        "No patient mobile access",
        "Reception overloaded with queries",
        "No clinic management system",
      ],
      metric: "80% manual processes",
    },
    after: {
      title: "After GrowthZone",
      points: [
        "Clinic management software built",
        "Patient mobile app launched",
        "AI chatbot handles 80% of queries",
        "New clinic branches expanded",
      ],
      metric: "60% more patients",
    },
    improvement: "400%",
    testimonial:
      "From branding to AI chatbot to clinic management software — GrowthZone handled everything. Patient bookings increased by 60%.",
    author: "Dr. Priya Sharma, Director",
  },
  {
    id: "3",
    business: "ShopKart",
    location: "Delhi",
    industry: "E-commerce & Apps",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    before: {
      title: "Before GrowthZone",
      points: [
        "No online store",
        "Manual order processing",
        "No inventory system",
        "Limited to local customers",
      ],
      metric: "₹= daily sales",
    },
    after: {
      title: "After GrowthZone",
      points: [
        "Full e-commerce platform built",
        "Mobile shopping app launched",
        "Inventory & POS system integrated",
        "AI product recommendations active",
      ],
      metric: "4x monthly sales",
    },
    improvement: "400%",
    testimonial:
      "GrowthZone built our e-commerce platform, mobile app, and handles our digital marketing. Sales grew by 400% in 6 months.",
    author: "Amit Patel, Founder",
  },
  {
    id: "4",
    business: "InnovateEd Academy",
    location: "Pune",
    industry: "Education Software",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    before: {
      title: "Before GrowthZone",
      points: [
        "Paper-based administration",
        "No student/parent app",
        "Admin staff overwhelmed",
        "No data-driven decisions",
      ],
      metric: "50% admin time on paperwork",
    },
    after: {
      title: "After GrowthZone",
      points: [
        "School management software built",
        "Student & parent mobile app launched",
        "Admission process automated",
        "AI analytics dashboard for decisions",
      ],
      metric: "50% less admin work",
    },
    improvement: "350%",
    testimonial:
      "Our school management software, website, and mobile app — all built by GrowthZone. Administrative work reduced by 50%.",
    author: "Sneha Joshi, CEO",
  },
  {
    id: "5",
    business: "BuildRight Construction",
    location: "Gurugram",
    industry: "Real Estate & CRM",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    before: {
      title: "Before GrowthZone",
      points: [
        "No centralized lead management",
        "Manual follow-up processes",
        "No real estate software",
        "Cloud infrastructure outdated",
      ],
      metric: "40% leads not followed up",
    },
    after: {
      title: "After GrowthZone",
      points: [
        "Real estate management software built",
        "CRM with automated follow-ups",
        "Project website with virtual tours",
        "AWS cloud migration completed",
      ],
      metric: "3x more deals closed",
    },
    improvement: "500%",
    testimonial:
      "GrowthZone developed our real estate software, CRM, and cloud infrastructure. Automation boosted our closing rate by 3x.",
    author: "Vikram Singh, MD",
  },
  {
    id: "6",
    business: "CloudFirst Technologies",
    location: "Hyderabad",
    industry: "Cloud & DevOps",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    before: {
      title: "Before GrowthZone",
      points: [
        "Manual deployments taking 2 hours",
        "Frequent server downtime",
        "No CI/CD pipeline",
        "High cloud costs",
      ],
      metric: "2-hour deployments",
    },
    after: {
      title: "After GrowthZone",
      points: [
        "Full AWS infrastructure setup",
        "CI/CD pipeline automated",
        "Docker containerization adopted",
        "40% cost reduction achieved",
      ],
      metric: "5-minute deployments",
    },
    improvement: "50%",
    testimonial:
      "GrowthZone migrated our infrastructure to AWS and set up CI/CD pipelines. Deployment time went from 2 hours to 5 minutes.",
    author: "Meera Reddy, VP Engineering",
  },
];
