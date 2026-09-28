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
    business: "Mehta Jewellers",
    location: "Jaipur",
    industry: "Retail & Local SEO",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
    before: {
      title: "Before GrowthZone",
      points: [
        "No website or online presence",
        "No Google Business Profile listing",
        "Relying only on walk-in customers",
        "No online enquiries or reviews",
      ],
      metric: "Zero online enquiries",
    },
    after: {
      title: "After GrowthZone",
      points: [
        "Professional website with product catalog",
        "Google Business Profile + local SEO setup",
        "WhatsApp enquiry automation for new leads",
        "Review system — 4.9★ rating on Google",
      ],
      metric: "32+ enquiries / week",
    },
    improvement: "240%",
    testimonial:
      "GrowthZone put our 3-generation jewellery business on the map. In 4 months, store visits doubled and we now get enquiries daily from across Rajasthan.",
    author: "Arjun Mehta, Owner",
  },
  {
    id: "2",
    business: "RehabFirst Physiotherapy",
    location: "Pune",
    industry: "Healthcare & Apps",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    before: {
      title: "Before GrowthZone",
      points: [
        "Manual appointment scheduling over phone",
        "Patients forgot appointments — 25% no-shows",
        "No online booking for working patients",
        "No systematic patient follow-ups",
      ],
      metric: "25% appointment no-shows",
    },
    after: {
      title: "After GrowthZone",
      points: [
        "Clinic website with online booking",
        "WhatsApp appointment confirmations & reminders",
        "Automated post-session exercise reminders",
        "Google review funnel for new patients",
      ],
      metric: "40% drop in no-shows",
    },
    improvement: "310%",
    testimonial:
      "Appointment no-shows dropped by 40% and 70% of new patients now book directly from Google. Our clinic runs like clockwork.",
    author: "Dr. Nandini Kulkarni, Founder",
  },
  {
    id: "3",
    business: "Lace-up Fashion",
    location: "Surat",
    industry: "D2C E-commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    before: {
      title: "Before GrowthZone",
      points: [
        "B2B only — selling to local shops",
        "No direct-to-consumer online store",
        "No brand presence on social media",
        "Zero email or customer database",
      ],
      metric: "Limited to trade buyers",
    },
    after: {
      title: "After GrowthZone",
      points: [
        "High-converting D2C e-commerce store",
        "Google Shopping + Meta PPC campaigns",
        "Instagram reels & influencer marketing",
        "Automated email & WhatsApp flows",
      ],
      metric: "₹40L+ online revenue / year",
    },
    improvement: "420%",
    testimonial:
      "Our store was live in weeks and ads paid for themselves in the first month. Online revenue crossed ₹40 lakh in year one — from zero online brand.",
    author: "Imran Shaikh, Co-Founder",
  },
  {
    id: "4",
    business: "Agarwal Accounts & Tax Advisors",
    location: "Indore",
    industry: "Professional Services & CRM",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    before: {
      title: "Before GrowthZone",
      points: [
        "Referral-only — no website or Google presence",
        "No systematic lead capture or follow-up",
        "Competing with firms that ranked on Google",
        "No branded client communication",
      ],
      metric: "100% dependent on referrals",
    },
    after: {
      title: "After GrowthZone",
      points: [
        "Professional trust-building website",
        "LinkedIn & Google presence for corporate clients",
        "CRM with automated WhatsApp follow-ups",
        "Quarterly newsletter & content for authority",
      ],
      metric: "25+ new corporate clients",
    },
    improvement: "250%",
    testimonial:
      "GrowthZone created our website, LinkedIn branding and automated WhatsApp follow-ups. We added 25+ corporate clients in just 8 months.",
    author: "Sunita Agarwal, Partner",
  },
  {
    id: "5",
    business: "Shree Balaji Logistics",
    location: "Kanpur",
    industry: "Logistics Software & IoT",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    before: {
      title: "Before GrowthZone",
      points: [
        "Fleet managed on paper registers",
        "No real-time tracking of trucks",
        "Delays & disputes on every trip",
        "Manual billing and settlement errors",
      ],
      metric: "60% manual errors",
    },
    after: {
      title: "After GrowthZone",
      points: [
        "Fleet management & dispatch software",
        "Driver mobile app with GPS tracking",
        "Live tracking dashboard for consignments",
        "Automated billing and settlement reports",
      ],
      metric: "Real-time tracking, all trips",
    },
    improvement: "380%",
    testimonial:
      "Our transport business ran on registers and phone calls. Today we track every consignment in real time and operational errors fell by 60%.",
    author: "Rajesh Verma, MD",
  },
  {
    id: "6",
    business: "SpiceRoute Restaurant",
    location: "Hyderabad",
    industry: "Hospitality & WhatsApp Automation",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    before: {
      title: "Before GrowthZone",
      points: [
        "Orders only via aggregators — 30% commissions",
        "Walk-ins only for dining",
        "No own customer database",
        "Lost on Google searches for local food",
      ],
      metric: "30% commission on orders",
    },
    after: {
      title: "After GrowthZone",
      points: [
        "Own food-ordering website built",
        "WhatsApp order bot for direct orders",
        "Local SEO — #1 for 'Hyderabad biryani'",
        "Loyalty & repeat-order WhatsApp broadcasts",
      ],
      metric: "65% of revenue from own channels",
    },
    improvement: "300%",
    testimonial:
      "65% of our revenue now comes from direct orders. GrowthZone built our website, WhatsApp bot and local SEO that ranks us #1.",
    author: "Pooja Reddy, Owner",
  },
];
