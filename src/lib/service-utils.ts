import {
  Palette,
  Globe,
  Smartphone,
  Code,
  Zap,
  TrendingUp,
  PenLine,
  Cloud,
  MessageCircle,
  Megaphone,
} from "lucide-react";

export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Globe,
  Smartphone,
  Code,
  Zap,
  TrendingUp,
  PenLine,
  Cloud,
  MessageCircle,
  Megaphone,
};

export const serviceImages: Record<string, string> = {
  "branding-design":
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=500&fit=crop",
  "web-development":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=500&fit=crop",
  "mobile-app-development":
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=500&fit=crop",
  "software-development":
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=500&fit=crop",
  "ai-powered-workflow":
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=500&fit=crop",
  "seo-digital-marketing":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop",
  "content-services":
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=500&fit=crop",
  "cloud-devops":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=500&fit=crop",
  "whatsapp-business":
    "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&h=500&fit=crop",
  "paid-ads-management":
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=500&fit=crop",
};

export const serviceHighlights: Record<string, string> = {
  "branding-design": "Look professional from day one",
  "web-development": "Blazing-fast websites that convert",
  "mobile-app-development": "One app, both stores, endless customers",
  "software-development": "Software built for your workflow",
  "ai-powered-workflow": "AI-powered automation running 24/7",
  "seo-digital-marketing": "Get found by customers searching now",
  "content-services": "Content that ranks and converts",
  "cloud-devops": "Scalable, reliable infrastructure",
  "whatsapp-business": "Turn WhatsApp into a sales channel",
  "paid-ads-management": "Instant traffic, measurable ROI",
};

export const serviceColors: Record<
  string,
  { gradient: string; ring: string; text: string; bg: string }
> = {
  "branding-design": {
    gradient: "from-violet-500 to-purple-600",
    ring: "ring-violet-500/30",
    text: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  "web-development": {
    gradient: "from-blue-600 to-indigo-600",
    ring: "ring-blue-500/30",
    text: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  "mobile-app-development": {
    gradient: "from-fuchsia-500 to-purple-600",
    ring: "ring-fuchsia-500/30",
    text: "text-fuchsia-500",
    bg: "bg-fuchsia-500/10",
  },
  "software-development": {
    gradient: "from-emerald-500 to-teal-600",
    ring: "ring-emerald-500/30",
    text: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  "ai-powered-workflow": {
    gradient: "from-amber-500 to-orange-600",
    ring: "ring-amber-500/30",
    text: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  "seo-digital-marketing": {
    gradient: "from-red-500 to-rose-600",
    ring: "ring-red-500/30",
    text: "text-red-500",
    bg: "bg-red-500/10",
  },
  "content-services": {
    gradient: "from-cyan-500 to-sky-600",
    ring: "ring-cyan-500/30",
    text: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  "cloud-devops": {
    gradient: "from-orange-500 to-amber-600",
    ring: "ring-orange-500/30",
    text: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  "whatsapp-business": {
    gradient: "from-green-500 to-emerald-600",
    ring: "ring-green-500/30",
    text: "text-green-500",
    bg: "bg-green-500/10",
  },
  "paid-ads-management": {
    gradient: "from-red-500 to-orange-600",
    ring: "ring-red-500/30",
    text: "text-red-500",
    bg: "bg-red-500/10",
  },
};

export const serviceDetailImages: Record<string, string> = {
  "branding-design":
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&h=600&fit=crop",
  "web-development":
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&h=600&fit=crop",
  "mobile-app-development":
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=600&fit=crop",
  "software-development":
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&h=600&fit=crop",
  "ai-powered-workflow":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&h=600&fit=crop",
  "seo-digital-marketing":
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&h=600&fit=crop",
  "content-services":
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&h=600&fit=crop",
  "cloud-devops":
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&h=600&fit=crop",
  "whatsapp-business":
    "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1400&h=600&fit=crop",
  "paid-ads-management":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=600&fit=crop",
};
