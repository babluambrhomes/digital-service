import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Stethoscope,
  ShoppingCart,
  GraduationCap,
  Store,
  Building2,
  Landmark,
  Hotel,
  Truck,
  Baby,
  HeartPulse,
  Scissors,
  MonitorSmartphone,
  Plane,
} from "lucide-react";

export interface Industry {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  focus: string[];
  solutions: string[];
  image: string;
  stats: string;
  color: string;
  textColor: string;
  bgColor: string;
  featured: boolean;
}

export const INDUSTRIES: Industry[] = [
  {
    icon: Briefcase,
    title: "Startups & SaaS",
    slug: "startups-and-saas",
    description:
      "From MVP development to scale-up infrastructure — websites, apps, cloud setup, and automation for ambitious startups.",
    focus: [
      "MVP & product development",
      "AI & workflow automation",
      "Cloud & DevOps setup",
    ],
    solutions: [
      "Web & mobile app development",
      "Custom software & automation",
      "Cloud infrastructure & CI/CD",
      "AI-powered business tools",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop",
    stats: "3x faster launch",
    color: "from-orange-500 to-red-500",
    textColor: "text-orange-600",
    bgColor: "bg-orange-500/10",
    featured: true,
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Clinics",
    slug: "healthcare-and-clinics",
    description:
      "Patient portals, appointment apps, hospital management systems, and compliant digital experiences for healthcare.",
    focus: [
      "Hospital management software",
      "Patient mobile apps",
      "AI patient support chatbots",
    ],
    solutions: [
      "Hospital & clinic management software",
      "Patient appointment apps",
      "AI-powered patient support",
      "Secure cloud infrastructure",
    ],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=500&fit=crop",
    stats: "60% more efficiency",
    color: "from-blue-500 to-cyan-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-500/10",
    featured: true,
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    slug: "ecommerce-and-retail",
    description:
      "Powerful online stores, POS systems, inventory management, and mobile apps that boost sales and streamline operations.",
    focus: [
      "E-commerce platforms",
      "POS & inventory software",
      "Mobile shopping apps",
    ],
    solutions: [
      "High-converting e-commerce stores",
      "POS & inventory management software",
      "Mobile apps with payment integration",
      "AI product recommendations",
    ],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=500&fit=crop",
    stats: "3x more sales",
    color: "from-green-500 to-emerald-500",
    textColor: "text-green-600",
    bgColor: "bg-green-500/10",
    featured: true,
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    slug: "education-and-edtech",
    description:
      "School and college management systems, learning apps, and websites that streamline administration and engage students.",
    focus: [
      "School management software",
      "Learning & tutoring apps",
      "Admission automation",
    ],
    solutions: [
      "School / college management systems",
      "Online learning platforms",
      "Student & parent mobile apps",
      "Admission workflow automation",
    ],
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=500&fit=crop",
    stats: "50% less admin work",
    color: "from-indigo-500 to-blue-500",
    textColor: "text-indigo-600",
    bgColor: "bg-indigo-500/10",
    featured: false,
  },
  {
    icon: Building2,
    title: "Real Estate & PropTech",
    slug: "real-estate-and-proptech",
    description:
      "Real estate management software, property websites, CRM, and lead automation for developers, brokers, and property managers across India.",
    focus: [
      "Real estate management software",
      "Property listing platforms",
      "CRM & lead automation",
    ],
    solutions: [
      "Real estate management software",
      "Property listing websites & apps",
      "CRM with automated lead follow-ups",
      "WhatsApp & email automation",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=500&fit=crop",
    stats: "4x more leads",
    color: "from-blue-500 to-indigo-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-500/10",
    featured: false,
  },
  {
    icon: Landmark,
    title: "Finance & FinTech",
    slug: "finance-and-fintech",
    description:
      "Secure, compliant digital solutions — custom software, payment integrations, and automation for banks and financial firms.",
    focus: [
      "FinTech product development",
      "Payment gateway integration",
      "Compliance & security",
    ],
    solutions: [
      "Custom fintech software",
      "Secure payment integrations",
      "Bank-grade cloud infrastructure",
      "Financial data automation",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=500&fit=crop",
    stats: "2x faster processing",
    color: "from-slate-500 to-gray-600",
    textColor: "text-slate-600",
    bgColor: "bg-slate-500/10",
    featured: false,
  },
  {
    icon: Hotel,
    title: "Hospitality & Restaurants",
    slug: "hospitality-and-restaurants",
    description:
      "Booking platforms, ordering apps, POS systems, and digital marketing that keep restaurant tables full and hotel bookings high.",
    focus: [
      "Online ordering & booking apps",
      "Restaurant POS systems",
      "Digital marketing",
    ],
    solutions: [
      "Online ordering & reservation apps",
      "Restaurant POS & management software",
      "SEO & social media marketing",
      "AI customer service chatbots",
    ],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=500&fit=crop",
    stats: "50% more bookings",
    color: "from-rose-500 to-red-500",
    textColor: "text-rose-600",
    bgColor: "bg-rose-500/10",
    featured: false,
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    slug: "logistics-and-supply-chain",
    description:
      "Fleet management, inventory tracking, and warehouse automation powered by custom software and IoT integrations.",
    focus: [
      "Fleet & route management",
      "Inventory tracking systems",
      "Supply chain automation",
    ],
    solutions: [
      "Fleet management software",
      "Real-time inventory tracking",
      "Supply chain workflow automation",
      "Data dashboards & reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=500&fit=crop",
    stats: "40% lower costs",
    color: "from-yellow-500 to-amber-500",
    textColor: "text-yellow-600",
    bgColor: "bg-yellow-500/10",
    featured: false,
  },
  {
    icon: MonitorSmartphone,
    title: "IT & Software Services",
    slug: "it-and-software-services",
    description:
      "White-label development, DevOps, cloud consultancy, and maintenance for other software and IT service businesses.",
    focus: [
      "White-label development",
      "DevOps & cloud consultancy",
      "Maintenance & support",
    ],
    solutions: [
      "White-label web & app development",
      "DevOps & cloud infrastructure",
      "24/7 maintenance & support",
      "Security & performance audits",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=500&fit=crop",
    stats: "3x delivery capacity",
    color: "from-teal-500 to-green-500",
    textColor: "text-teal-600",
    bgColor: "bg-teal-500/10",
    featured: false,
  },
  {
    icon: HeartPulse,
    title: "Fitness & Wellness",
    slug: "fitness-and-wellness",
    description:
      "Membership apps, class booking systems, and branded digital experiences for gyms, salons, and wellness centers.",
    focus: [
      "Membership & booking apps",
      "Brand & UI/UX design",
      "Social media marketing",
    ],
    solutions: [
      "Membership & class booking apps",
      "Complete branding packages",
      "Websites & landing pages",
      "Social media & ads management",
    ],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=500&fit=crop",
    stats: "3x more members",
    color: "from-pink-500 to-rose-500",
    textColor: "text-pink-600",
    bgColor: "bg-pink-500/10",
    featured: false,
  },
  {
    icon: Scissors,
    title: "Beauty & Salons",
    slug: "beauty-and-salons",
    description:
      "Online booking apps, branded websites, and Instagram-ready creatives that keep your calendar fully booked.",
    focus: [
      "Online booking systems",
      "Brand identity design",
      "Social media growth",
    ],
    solutions: [
      "Online booking & scheduling apps",
      "Complete brand & logo design",
      "Scroll-stopping social media content",
      "Website & Google visibility",
    ],
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=500&fit=crop",
    stats: "50% more bookings",
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-600",
    bgColor: "bg-purple-500/10",
    featured: false,
  },
  {
    icon: Store,
    title: "Professional Services",
    slug: "professional-services",
    description:
      "Websites, CRM, and appointment automation for legal, CA/accounting, consulting, and other professional firms that build client trust.",
    focus: [
      "Trust-building websites",
      "CRM & client management",
      "Appointment automation",
    ],
    solutions: [
      "Professional service websites",
      "CRM with automated follow-ups",
      "Appointment booking automation",
      "Content & blog for authority",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop",
    stats: "2x more clients",
    color: "from-cyan-500 to-blue-500",
    textColor: "text-cyan-600",
    bgColor: "bg-cyan-500/10",
    featured: false,
  },
  {
    icon: Baby,
    title: "Retail & Consumer Goods",
    slug: "retail-and-consumer-goods",
    description:
      "Branding, e-commerce, and mobile apps that help consumer brands launch, grow, and connect with customers.",
    focus: [
      "Brand identity & packaging",
      "E-commerce & D2C stores",
      "Consumer mobile apps",
    ],
    solutions: [
      "Complete brand & packaging design",
      "D2C e-commerce stores",
      "Customer loyalty mobile apps",
      "Digital marketing campaigns",
    ],
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=500&fit=crop",
    stats: "4x more customers",
    color: "from-amber-500 to-orange-500",
    textColor: "text-amber-600",
    bgColor: "bg-amber-500/10",
    featured: false,
  },
  {
    icon: Plane,
    title: "Travel & Tourism",
    slug: "travel-and-tourism",
    description:
      "Booking platforms, travel apps, and marketing that turn browsers into bookings for travel agencies and tour operators across India.",
    focus: [
      "Booking & travel platforms",
      "Travel mobile apps",
      "Online marketing",
    ],
    solutions: [
      "Booking & itinerary platforms",
      "Travel & tour mobile apps",
      "SEO & ads for travel brands",
      "AI trip-planning assistants",
    ],
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=500&fit=crop",
    stats: "3x more bookings",
    color: "from-sky-500 to-blue-500",
    textColor: "text-sky-600",
    bgColor: "bg-sky-500/10",
    featured: false,
  },
];
