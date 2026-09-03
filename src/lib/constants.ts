import {
  NavLink,
  Service,
  Testimonial,
  FAQ,
  ProcessStep,
  SocialLink,
} from "@/types";

export const SITE_CONFIG = {
  name: "GrowthZone",
  tagline: "Your Complete Digital Growth Partner",
  description:
    "We provide end-to-end digital services — from branding, web development, and mobile apps to WhatsApp Business, paid ads, AI-powered workflows, cloud solutions, and SEO. Everything your business needs to grow online, under one roof.",
  phone: "+91 99999 99999",
  email: "hello@growthzone.in",
  whatsapp: "8860057058",
  address: "123 Business Hub, Mumbai, Maharashtra 400001",
  url: "https://growthzone.in",
};

export const NAV_LINKS: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Estimate", href: "/estimate" },
  { title: "About", href: "/about" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
   {
    id: "4",
    title: "Software Development",
    slug: "software-development",
    shortDescription:
      "Custom software, CRM, ERP, POS, and industry-specific management solutions built for your business.",
    description:
      "Off-the-shelf software forces you to adapt your business to its limitations. We build custom software that adapts to your business. From CRM and ERP systems to POS software, inventory management, HR & payroll, school management, hospital management, and real estate solutions — we develop tailored software that automates your operations, reduces errors, and scales with your growth.",
    icon: "Code",
    features: [
      "Custom Software Development",
      "Business Software Development",
      "Management Software",
      "CRM Development",
      "ERP Development",
      "POS Software",
      "Inventory Management Software",
      "HR & Payroll Software",
      "School/College Management Software",
      "Hospital Management Software",
      "Real Estate Management Software",
    ],
    deliverables: [
      "Custom software built to your exact business requirements",
      "Modern, intuitive user interface design",
      "Database architecture optimized for your data needs",
      "Role-based access control and user management",
      "Reporting dashboards with real-time analytics",
      "API integrations with third-party tools you already use",
      "Data migration from existing systems",
      "Comprehensive testing and quality assurance",
      "User training and complete documentation",
      "Deployment and go-live support",
      "Post-launch maintenance and bug fixes",
    ],
    benefits: [
      "Software that fits your workflow, not the other way around",
      "Automate repetitive tasks and reduce human errors",
      "Centralized data for better decision-making",
      "Scalable solutions that grow with your business",
      "Lower long-term costs vs multiple SaaS subscriptions",
      "Full ownership and control over your software",
    ],
    pricing: {
      starter: "₹24,999",
      growth: "₹79,999",
      premium: "₹2,49,999+",
      monthly: {
        starter: "₹4,999",
        growth: "₹14,999",
        premium: "₹29,999",
      },
      monthlyFeatures: {
        starter: [
          "Bug fixes and maintenance",
          "Minor feature updates",
          "Email support",
          "Server monitoring",
        ],
        growth: [
          "Everything in Starter",
          "New feature development (up to 20 hrs/month)",
          "Monthly performance report",
          "Priority support",
        ],
        premium: [
          "Everything in Growth",
          "Unlimited development hours",
          "Dedicated development team",
          "Monthly strategy meetings",
          "24/7 priority support",
        ],
      },
    },
    faqs: [
      {
        question: "How much does custom software cost?",
        answer:
          "It depends on complexity. A simple CRM starts at ₹24,999, a full ERP system starts at ₹79,999, and enterprise solutions start at ₹2,49,999+. We provide a detailed quote after understanding your requirements.",
      },
      {
        question: "How long does it take to build custom software?",
        answer:
          "Simple tools: 4-6 weeks. Medium complexity (CRM, POS): 2-3 months. Complex systems (ERP, hospital management): 3-6 months. We follow agile methodology with regular demos.",
      },
      {
        question: "Can you integrate with our existing tools?",
        answer:
          "Yes! We integrate with popular tools like Zoho, Salesforce, Tally, QuickBooks, Google Workspace, and more. If it has an API, we can connect it.",
      },
      {
        question: "Do you provide training and support?",
        answer:
          "Yes! We provide complete user training, documentation, and ongoing maintenance. Our support plans ensure your software runs smoothly after launch.",
      },
    ],
  },
  {
    id: "1",
    title: "Branding & Design",
    slug: "branding-design",
    shortDescription:
      "Logos, brand identity, UI/UX design, and complete branding kits that make your business look established.",
    description:
      "Your brand is the first thing customers notice. We create memorable logos, complete brand identities, UI/UX designs for websites and apps, business cards, social media creatives, and brand guidelines — everything that makes your business look professional and trustworthy from day one. Whether you're launching a startup or rebranding an existing business, our design team delivers visuals that connect with your audience.",
    icon: "Palette",
    features: [
      "Logo Design",
      "Brand Identity Design",
      "Brand Guidelines",
      "Business Card & Stationery Design",
      "Social Media Creative Design",
      "UI/UX Design",
      "Website UI Design",
      "Mobile App UI/UX Design",
    ],
    deliverables: [
      "Custom logo design with multiple concepts and unlimited revisions",
      "Complete brand identity kit (colors, fonts, tone of voice)",
      "Brand guidelines document for consistent usage",
      "Business card, letterhead, and envelope design",
      "Social media profile and cover image kit",
      "Social media post templates for Instagram, Facebook, LinkedIn",
      "Website UI/UX wireframes and high-fidelity mockups",
      "Mobile app UI/UX design with interactive prototypes",
      "Figma/Adobe XD source files for all designs",
      "All deliverables in PNG, SVG, PDF, and editable formats",
    ],
    benefits: [
      "Professional first impression that builds instant trust",
      "Consistent brand presence across all platforms",
      "Stand out from competitors with unique visual identity",
      "Reusable design assets that save time and money",
      "Higher conversion rates with polished UI/UX design",
      "Complete brand toolkit you own 100%",
    ],
    pricing: {
      starter: "₹4,999",
      growth: "₹14,999",
      premium: "₹34,999+",
      monthly: {
        starter: "₹1,499",
        growth: "₹3,999",
        premium: "₹7,999",
      },
      monthlyFeatures: {
        starter: [
          "Up to 3 design requests per month",
          "Social media template updates",
          "Email support",
        ],
        growth: [
          "Everything in Starter",
          "Up to 8 design requests per month",
          "Seasonal campaign designs",
          "Priority WhatsApp support",
        ],
        premium: [
          "Everything in Growth",
          "Unlimited design requests",
          "Dedicated designer on call",
          "Brand strategy reviews",
        ],
      },
    },
    faqs: [
      {
        question: "How many logo concepts do you provide?",
        answer:
          "We present 2-3 unique logo concepts based on your brief. After you choose a direction, we refine it with unlimited revisions until you're 100% happy. The complete brand kit is delivered within 7-14 business days.",
      },
      {
        question: "Do I own the designs and source files?",
        answer:
          "Yes — 100% ownership. All logo files, source files (Figma, PSD, AI), brand guidelines, and design assets are delivered to you. Use them anywhere without restrictions.",
      },
      {
        question: "Can you redesign my existing brand?",
        answer:
          "Absolutely! We can modernize your existing brand while keeping the recognition you've built. We'll refresh your logo, update your color palette, and create new materials that feel current.",
      },
      {
        question: "What is UI/UX design and why does it matter?",
        answer:
          "UI/UX design is how your website or app looks and feels. Good UI/UX means users find what they need quickly, enjoy the experience, and are more likely to convert. Poor design drives 88% of users away after one bad experience.",
      },
      {
        question: "How long does a full branding project take?",
        answer:
          "Logo and basic branding: 5-7 business days. Complete brand identity with guidelines: 10-14 business days. Website or app UI/UX design: 2-4 weeks depending on complexity.",
      },
    ],
  },
  {
    id: "2",
    title: "Web Development",
    slug: "web-development",
    shortDescription:
      "Custom websites, e-commerce stores, landing pages, and CMS solutions built with modern tech.",
    description:
      "Your website is your 24/7 digital storefront. We build blazing-fast, responsive websites using modern technologies like Next.js, React, and Tailwind CSS. From business websites and e-commerce stores to landing pages and CMS solutions — we handle everything from design to deployment. Every site is mobile-first, SEO-optimized, and built to convert visitors into customers.",
    icon: "Globe",
    features: [
      "Business Website Development",
      "E-commerce Development",
      "Landing Page Development",
      "CMS Development",
      "Website Redesign",
      "Website Maintenance & Support",
    ],
    deliverables: [
      "Custom responsive website built with Next.js/React",
      "Mobile-first design optimized for all devices",
      "E-commerce store with product management and payment gateway",
      "CMS integration for easy content updates",
      "Contact forms, WhatsApp integration, and lead capture",
      "SEO setup including meta tags, sitemap, and Open Graph",
      "Google Analytics 4 and conversion tracking",
      "Speed optimization — pages load under 2 seconds",
      "SSL certificate and security hardening",
      "Social media and third-party integrations",
      "1 month free support and maintenance after launch",
    ],
    benefits: [
      "24/7 online presence that works while you sleep",
      "Professional credibility — 75% judge businesses by their website",
      "Fast loading speed improves Google rankings and user experience",
      "Mobile-first design captures 70%+ of local search traffic",
      "Scalable architecture that grows with your business",
      "Easy content management without technical knowledge",
    ],
    pricing: {
      starter: "₹9,999",
      growth: "₹29,999",
      premium: "₹79,999+",
      monthly: {
        starter: "₹1,999",
        growth: "₹4,999",
        premium: "₹9,999",
      },
      monthlyFeatures: {
        starter: [
          "Monthly backups & security scans",
          "Content updates (up to 3 per month)",
          "Email support",
          "Uptime monitoring",
        ],
        growth: [
          "Everything in Starter",
          "Up to 10 content updates per month",
          "Monthly performance report",
          "Priority support",
          "Monthly SEO refresh",
        ],
        premium: [
          "Everything in Growth",
          "Unlimited content updates",
          "Dedicated account manager",
          "Monthly strategy call",
          "24/7 priority support",
        ],
      },
    },
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "Landing page: 3-5 business days. Business website (5-10 pages): 2-3 weeks. E-commerce store: 3-4 weeks. Custom web application: 4-8 weeks. We provide a detailed timeline before starting.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "We use Next.js, React, Tailwind CSS, and Node.js — the same technologies used by Netflix, Nike, and Apple. For e-commerce, we work with Shopify, WooCommerce, and custom solutions. These ensure blazing-fast performance and future-proof scalability.",
      },
      {
        question: "Do you provide hosting and domain?",
        answer:
          "Yes! We help you set up hosting on Vercel, AWS, or traditional providers. We guide you through domain purchase and DNS setup. Domain costs ~₹500-800/year, hosting varies by needs.",
      },
      {
        question: "Can I update the website myself?",
        answer:
          "Absolutely! We integrate user-friendly CMS panels (WordPress, Sanity, or custom admin) that let you update content, images, and blog posts without any coding. We provide training to get you started.",
      },
      {
        question: "Do you handle website redesigns?",
        answer:
          "Yes! We redesign existing websites to look modern, load faster, and convert better. We analyze your current site's performance and create a redesign strategy that retains what works and fixes what doesn't.",
      },
    ],
  },
  {
    id: "3",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    shortDescription:
      "Android, iOS, and cross-platform apps built with Flutter/React Native — one codebase, both stores.",
    description:
      "Your customers live on their phones — is your business there? We design and build fast, beautiful mobile apps for Android and iOS using Flutter and React Native. Whether you need a booking app, ordering app, loyalty program, or a full-featured business app, we handle everything from UI/UX design to Play Store and App Store publishing. One codebase, both stores, endless opportunities.",
    icon: "Smartphone",
    features: [
      "Android App Development",
      "iOS App Development",
      "Cross-Platform App Development",
      "React Native App Development",
      "Flutter App Development",
      "App Maintenance & Support",
      "App UI/UX Design",
    ],
    deliverables: [
      "Cross-platform mobile app for Android and iOS",
      "Custom UI/UX design tailored to your brand",
      "Splash screen, app icons, and complete branding",
      "Push notifications for user engagement",
      "Payment gateway integration (UPI, cards, wallets)",
      "REST API integration with existing systems",
      "Admin dashboard for content and user management",
      "Testing on real devices for bug-free launch",
      "Play Store and App Store listing with ASO",
      "Crash reporting and analytics integration",
      "1 month free support after launch",
    ],
    benefits: [
      "Reach customers on the platform they use most — their phone",
      "Build loyalty with push notifications and in-app engagement",
      "Stand out from competitors who only have a website",
      "Automate bookings, orders, and payments 24/7",
      "Own your customer data instead of renting from platforms",
      "Cross-platform saves 40-50% vs building two native apps",
    ],
    pricing: {
      starter: "₹24,999",
      growth: "₹59,999",
      premium: "₹1,49,999+",
      monthly: {
        starter: "₹4,999",
        growth: "₹9,999",
        premium: "₹19,999",
      },
      monthlyFeatures: {
        starter: [
          "App maintenance & bug fixes",
          "Content updates (up to 2 per month)",
          "Push notification monitoring",
          "Email support",
        ],
        growth: [
          "Everything in Starter",
          "Up to 5 content updates per month",
          "App store optimization",
          "Monthly performance report",
          "Priority support",
        ],
        premium: [
          "Everything in Growth",
          "New feature development monthly",
          "Dedicated account manager",
          "Monthly strategy call",
          "24/7 priority support",
        ],
      },
    },
    faqs: [
      {
        question: "How long does it take to build a mobile app?",
        answer:
          "Simple app: 4-6 weeks. App with payments and dashboards: 6-10 weeks. Complex app: 3-4 months. We always share a detailed timeline before starting.",
      },
      {
        question: "Flutter vs React Native — which is better?",
        answer:
          "Both are excellent cross-platform frameworks. Flutter offers slightly better performance and pixel-perfect UI. React Native is better if you need extensive third-party integrations. We recommend based on your specific needs.",
      },
      {
        question: "Do you handle app store publishing?",
        answer:
          "Yes! We handle the entire process — developer accounts, listings, screenshots, keywords, and review management. You'll need Google Play (₹3,400 one-time) and Apple Developer ($99/year) accounts.",
      },
      {
        question: "Can I update the app after launch?",
        answer:
          "Yes! Our monthly plans cover updates, bug fixes, and new features. We also build admin dashboards so you can update content yourself without technical knowledge.",
      },
    ],
  },
 
  {
    id: "5",
    title: "AI-Powered Workflow",
    slug: "ai-powered-workflow",
    shortDescription:
      "AI-powered business process automation, workflow optimization, CRM automation, and intelligent lead management.",
    description:
      "Stop wasting hours on repetitive tasks. We build AI-powered workflow automations that handle lead follow-ups, email sequences, WhatsApp workflows, CRM automation, data entry, and report generation — all running 24/7 without human intervention. Our solutions connect your tools, eliminate manual work, and ensure nothing falls through the cracks. Set it up once, let the AI handle the rest while you focus on growing your business.",
    icon: "Zap",
    features: [
      "AI-Powered Workflow Automation",
      "Business Process Automation",
      "CRM Automation",
      "Email Automation & Sequences",
      "WhatsApp Automation",
      "Lead Management Automation",
      "AI Data & Report Automation",
      "API Integration & Tool Connectivity",
      "Third-Party Tool Integrations",
      "Custom Automation Scripts",
    ],
    deliverables: [
      "Complete workflow audit and AI automation strategy",
      "AI-powered automated email sequences and drip campaigns",
      "WhatsApp automation with intelligent auto-replies",
      "CRM setup with AI-driven lead scoring and routing",
      "Lead capture forms with instant AI follow-up sequences",
      "Automated reporting dashboards and data pipelines",
      "Third-party tool integrations (Zapier, Make, n8n)",
      "Custom API integrations between your systems",
      "AI-powered automation for repetitive business tasks",
      "Testing, documentation, and team training",
      "Ongoing optimization and support",
    ],
    benefits: [
      "Save 10-20 hours per week on repetitive tasks",
      "Never miss a lead with instant AI-powered follow-ups",
      "Consistent customer communication across all channels",
      "Reduce human errors in data entry and processes",
      "Scale operations without hiring more staff",
      "Get real-time insights with automated reporting",
    ],
    pricing: {
      starter: "₹14,999",
      growth: "₹39,999",
      premium: "₹99,999+",
      monthly: {
        starter: "₹3,999",
        growth: "₹9,999",
        premium: "₹19,999",
      },
      monthlyFeatures: {
        starter: [
          "Workflow monitoring & maintenance",
          "Minor automation tweaks",
          "Email support",
          "Monthly health check",
        ],
        growth: [
          "Everything in Starter",
          "New automation workflows (up to 3/month)",
          "Performance optimization",
          "Priority support",
        ],
        premium: [
          "Everything in Growth",
          "Unlimited automation development",
          "Dedicated automation engineer",
          "Monthly strategy reviews",
          "24/7 priority support",
        ],
      },
    },
    faqs: [
      {
        question: "What can be automated in my business?",
        answer:
          "Almost anything repetitive: email follow-ups, lead assignment, invoice generation, appointment reminders, data entry between tools, report generation, and customer onboarding. We audit your processes and identify the highest-impact automations.",
      },
      {
        question: "Do I need to know coding?",
        answer:
          "No! We build no-code and low-code automations using tools like Zapier, Make, n8n, and custom solutions. You can manage simple workflows yourself, and we handle the complex ones.",
      },
      {
        question: "Which tools do you integrate with?",
        answer:
          "We integrate with 500+ tools including Salesforce, HubSpot, Zoho, Mailchimp, WhatsApp Business API, Google Sheets, Slack, Trello, and more. If it has an API or Zapier integration, we can connect it.",
      },
      {
        question: "How long does automation setup take?",
        answer:
          "Simple automations: 3-5 days. Multi-step workflows: 1-2 weeks. Complex AI-powered automations: 2-4 weeks. We start with a quick-win automation and build from there.",
      },
    ],
  },
  {
    id: "6",
    title: "SEO & Digital Marketing",
    slug: "seo-digital-marketing",
    shortDescription:
      "Local SEO, technical SEO, on-page/off-page SEO, and organic growth strategies.",
    description:
      "Get found by customers who are actively searching for your services — organically. We provide comprehensive SEO: local search optimization, technical audits, on-page and off-page optimization, link building, content strategy, and Google Business Profile management. Our data-driven approach delivers measurable, compounding results that grow your traffic month after month.",
    icon: "TrendingUp",
    features: [
      "SEO",
      "Local SEO",
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Link Building",
      "Google Business Profile Optimization",
      "Content Strategy",
      "Analytics & Reporting",
    ],
    deliverables: [
      "Comprehensive SEO audit and strategy",
      "Keyword research (100+ keywords)",
      "On-page SEO optimization for all pages",
      "Technical SEO fixes (Core Web Vitals, schema, sitemap)",
      "Off-page SEO and link building campaigns",
      "Google Business Profile setup & optimization",
      "Monthly content strategy and execution",
      "Local citation building and management",
      "Monthly performance reports with traffic & ranking data",
      "Dedicated account manager for Premium plans",
    ],
    benefits: [
      "Rank higher on Google for your target keywords",
      "Dominate local search and Google Maps",
      "Build long-term organic traffic that compounds",
      "Free traffic — no ad spend required",
      "Attract qualified leads actively searching for you",
      "Data-driven decisions with transparent reporting",
    ],
    pricing: {
      starter: "₹7,999",
      growth: "₹19,999",
      premium: "₹49,999+",
      monthly: {
        starter: "₹3,999",
        growth: "₹9,999",
        premium: "₹24,999",
      },
      monthlyFeatures: {
        starter: [
          "5 keyword tracking & reporting",
          "Monthly citations check",
          "1 content piece per month",
          "Email support",
        ],
        growth: [
          "Everything in Starter",
          "30 keyword tracking",
          "4 content pieces per month",
          "Link building (5 per month)",
          "Priority support",
        ],
        premium: [
          "Everything in Growth",
          "100+ keyword tracking",
          "Weekly content + outreach",
          "Full SEO management",
          "Monthly strategy call",
        ],
      },
    },
    faqs: [
      {
        question: "How long until SEO shows results?",
        answer:
          "SEO is a long-term investment. You'll see improvements in 2-3 months, noticeable ranking changes in 3-6 months, and significant results in 6-12 months. Unlike ads, SEO results compound — once you rank, traffic is free.",
      },
      {
        question: "Do you guarantee #1 rankings?",
        answer:
          "No ethical agency can guarantee specific rankings. But our proven white-hat strategies consistently deliver top-3 rankings for businesses within 6 months. We focus on sustainable growth, not quick fixes.",
      },
      {
        question: "What's the difference between SEO and Paid Ads?",
        answer:
          "SEO builds free organic traffic over time — it compounds and doesn't require ongoing ad spend. Paid Ads deliver instant traffic but stop the moment you stop paying. We recommend SEO as the long-term foundation; add Paid Ads when you want fast, measurable traffic immediately.",
      },
      {
        question: "How do you track results?",
        answer:
          "We set up Google Analytics, Search Console, and rank tracking tools. Monthly reports show traffic growth, keyword rankings, click-through rates, and conversions — all transparent and easy to understand.",
      },
    ],
  },
  {
    id: "7",
    title: "Content Services",
    slug: "content-services",
    shortDescription:
      "SEO content, blog writing, copywriting, product descriptions, and complete content strategies.",
    description:
      "Content is how Google finds you and how customers trust you. We create SEO-optimized blog posts, website copy, product descriptions, social media content, email copy, ad copywriting, and technical writing that ranks on Google and converts visitors into customers. Every piece is researched, original, and tailored to your industry and audience.",
    icon: "PenLine",
    features: [
      "Content Writing",
      "Website Content Writing",
      "Blog Writing",
      "SEO Content Writing",
      "Product Description Writing",
      "Social Media Content",
      "Copywriting",
      "Technical Writing",
      "Email Content",
      "Ad Copywriting",
    ],
    deliverables: [
      "Content strategy aligned with your business goals",
      "SEO-optimized blog posts (800-2000 words each)",
      "Website copy (Home, About, Services, Landing Pages)",
      "Product and service descriptions that convert",
      "Social media content calendar and posts",
      "Email marketing content and drip sequences",
      "Ad copy for Google, Meta, and other platforms",
      "Technical documentation and user guides",
      "Meta titles, descriptions, and Open Graph tags",
      "100% original, plagiarism-free content",
      "Content calendar and topic planning",
      "Monthly content performance reports",
    ],
    benefits: [
      "Rank on Google with keyword-targeted content",
      "Build authority and trust with expert content",
      "Generate free organic traffic that compounds over time",
      "Turn visitors into customers with persuasive copywriting",
      "Keep your website fresh — Google rewards new content",
      "Consistent brand voice across all channels",
    ],
    pricing: {
      starter: "₹3,999",
      growth: "₹9,999",
      premium: "₹24,999+",
      monthly: {
        starter: "₹1,999",
        growth: "₹4,999",
        premium: "₹9,999",
      },
      monthlyFeatures: {
        starter: [
          "4 articles per month",
          "Basic keyword research",
          "Meta titles & descriptions",
          "Email support",
        ],
        growth: [
          "Everything in Starter",
          "8 articles per month",
          "Website copy updates",
          "Social media content",
          "Priority support",
        ],
        premium: [
          "Everything in Growth",
          "16+ articles per month",
          "Full content calendar",
          "Dedicated content strategist",
          "Weekly strategy reviews",
        ],
      },
    },
    faqs: [
      {
        question: "How many articles do I get per month?",
        answer:
          "Starter: 4 articles. Growth: 8 articles. Premium: 16+ articles. Each is 800-2000 words, SEO-optimized, and matched to keywords your customers search for.",
      },
      {
        question: "Will my content rank on Google?",
        answer:
          "We write content that ranks, not fluff. Every piece targets specific keywords, includes proper headings and meta data, and follows SEO best practices. Most clients see organic traffic growth within 3-4 months.",
      },
      {
        question: "Do you write for my specific industry?",
        answer:
          "Yes! We write for tech, healthcare, education, real estate, e-commerce, SaaS, finance, and more. Our writers research your industry to create accurate, authoritative content.",
      },
      {
        question: "What's the difference between copywriting and content writing?",
        answer:
          "Content writing educates and informs (blogs, guides, articles). Copywriting persuades and sells (ads, landing pages, email campaigns). We offer both — each optimized for its purpose.",
      },
    ],
  },
  {
    id: "8",
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    shortDescription:
      "Cloud deployment, server management, CI/CD pipelines, Docker, and infrastructure optimization.",
    description:
      "Your software needs a robust, scalable, and secure infrastructure. We handle cloud deployment on AWS, Cloudflare, and other platforms, server setup and management, CI/CD pipelines, Docker containerization, database optimization, backup strategies, and monitoring. Whether you're launching a new app or optimizing existing infrastructure, we ensure your systems are fast, reliable, and cost-efficient.",
    icon: "Cloud",
    features: [
      "Cloud Deployment",
      "AWS Services",
      "Cloudflare Setup",
      "Server Setup & Management",
      "CI/CD Pipeline",
      "Docker & Containerization",
      "Database Setup & Optimization",
      "Backup & Monitoring",
    ],
    deliverables: [
      "Cloud infrastructure setup (AWS, GCP, Azure, Cloudflare)",
      "Server provisioning and configuration",
      "CI/CD pipeline for automated deployments",
      "Docker containerization for consistent environments",
      "Database setup, optimization, and migration",
      "Automated backup and disaster recovery plans",
      "Monitoring and alerting (uptime, performance, errors)",
      "SSL/TLS certificate setup and management",
      "CDN configuration for global fast loading",
      "Cost optimization and resource scaling",
      "Security hardening and compliance setup",
      "Documentation and runbooks",
    ],
    benefits: [
      "99.9% uptime with reliable cloud infrastructure",
      "Automated deployments reduce human errors by 90%",
      "Scale resources up or down based on demand",
      "Lower infrastructure costs with optimization",
      "Faster global loading with CDN and edge computing",
      "Disaster recovery and data protection built-in",
    ],
    pricing: {
      starter: "₹9,999",
      growth: "₹29,999",
      premium: "₹79,999+",
      monthly: {
        starter: "₹2,999",
        growth: "₹7,999",
        premium: "₹19,999",
      },
      monthlyFeatures: {
        starter: [
          "Server monitoring & alerts",
          "Basic backup management",
          "Email support",
          "Monthly health reports",
        ],
        growth: [
          "Everything in Starter",
          "Performance optimization",
          "CI/CD pipeline maintenance",
          "Priority support",
        ],
        premium: [
          "Everything in Growth",
          "Dedicated DevOps engineer",
          "24/7 monitoring & response",
          "Infrastructure scaling",
          "Monthly strategy reviews",
        ],
      },
    },
    faqs: [
      {
        question: "Which cloud provider should I use?",
        answer:
          "It depends on your needs. AWS for enterprise-grade flexibility. Cloudflare for cost-effective edge computing. Google Cloud for AI/ML workloads. We recommend the best fit based on your budget and requirements.",
      },
      {
        question: "How much does cloud hosting cost?",
        answer:
          "Simple websites: ₹500-2,000/month. Medium apps: ₹2,000-10,000/month. Large applications: ₹10,000-50,000+/month. We optimize costs so you only pay for what you use.",
      },
      {
        question: "What is CI/CD and why do I need it?",
        answer:
          "CI/CD automates code deployment — when you push code changes, it automatically builds, tests, and deploys. This eliminates manual deployment errors, saves time, and enables rapid, reliable releases.",
      },
      {
        question: "Do you manage existing cloud infrastructure?",
        answer:
          "Yes! We audit, optimize, and manage existing cloud setups. Whether you're on AWS, GCP, Azure, or Vercel, we can take over management and optimize for performance and cost.",
      },
    ],
  },
  {
    id: "9",
    title: "WhatsApp Business",
    slug: "whatsapp-business",
    shortDescription:
      "WhatsApp Business setup, Business API, click-to-chat, catalogs, auto-replies, broadcasts, and CRM integration.",
    description:
      "WhatsApp is where your customers already are. We set up WhatsApp Business App and WhatsApp Business API, build your product catalog, create click-to-chat buttons for your website, set up auto-replies and away messages, build broadcast campaigns, and integrate everything with your CRM. Turn your WhatsApp into a powerful sales and support channel — running 24/7, never missing a lead.",
    icon: "MessageCircle",
    features: [
      "WhatsApp Business App Setup",
      "WhatsApp Business API Setup",
      "Click-to-Chat Website Integration",
      "Product Catalog Setup",
      "Auto-Reply & Away Messages",
      "Broadcast Campaigns",
      "Review & Link Building via WhatsApp",
      "CRM Integration",
      "Lead Capture via WhatsApp",
      "WhatsApp Automation Workflows",
    ],
    deliverables: [
      "Complete WhatsApp Business profile setup and verification",
      "Product/service catalog with photos, prices, and descriptions",
      "Click-to-chat buttons integrated into your website",
      "Custom auto-reply and away message sequences",
      "WhatsApp Business API setup (for scale)",
      "Broadcast campaign templates and list management",
      "CRM integration for lead tracking",
      "WhatsApp automation workflows (Zapier/Make)",
      "Quick-reply templates for common queries",
      "Training documentation and team walkthrough",
    ],
    benefits: [
      "Never miss a customer enquiry — replies in seconds, 24/7",
      "Customers prefer WhatsApp — it's the most trusted channel in India",
      "Increase bookings and sales by reducing response time to near-zero",
      "Automate repeatable conversations and save hours every week",
      "Build a direct, personal channel to every customer you serve",
      "Scale support and sales without hiring more staff",
    ],
    pricing: {
      starter: "₹4,999",
      growth: "₹14,999",
      premium: "₹29,999+",
      monthly: {
        starter: "₹999",
        growth: "₹2,999",
        premium: "₹6,999",
      },
      monthlyFeatures: {
        starter: [
          "Catalog updates (up to 3/month)",
          "Auto-reply monitoring",
          "Email support",
        ],
        growth: [
          "Everything in Starter",
          "Broadcast campaigns (up to 4/month)",
          "Automation tweaks",
          "Priority support",
        ],
        premium: [
          "Everything in Growth",
          "Unlimited automation development",
          "Dedicated account manager",
          "Monthly strategy reviews",
          "24/7 priority support",
        ],
      },
    },
    faqs: [
      {
        question: "Do I need WhatsApp Business API or just the App?",
        answer:
          "WhatsApp Business App is free and works for most small-to-medium businesses — it gives you catalogs, auto-replies, and labels. WhatsApp Business API is for businesses that need higher message volumes, automation at scale, and CRM integration. We help you choose the right one.",
      },
      {
        question: "Can you set up WhatsApp on my website?",
        answer:
          "Yes! We add a click-to-chat WhatsApp button on your website so visitors can start a conversation instantly. We can also build WhatsApp-based lead capture forms, appointment booking flows, and automated chat sequences.",
      },
      {
        question: "How do broadcasts work?",
        answer:
          "Broadcasts let you send a message to multiple contacts at once (like an email blast, but on WhatsApp). We help you build your broadcast lists, write the messages, and manage opt-in compliance so your messages actually reach your customers.",
      },
      {
        question: "Can you connect WhatsApp to our CRM?",
        answer:
          "Yes! We integrate WhatsApp with CRMs like Zoho, HubSpot, Salesforce, and custom systems — so every conversation, lead, and deal is tracked automatically. We also build custom workflows using Zapier and Make.",
      },
    ],
  },
  {
    id: "10",
    title: "Paid Ads Management",
    slug: "paid-ads-management",
    shortDescription:
      "Google Ads, Meta/Facebook Ads, YouTube Ads, and LinkedIn Ads — managed campaigns that deliver measurable ROI.",
    description:
      "Paid advertising is the fastest way to get in front of ready-to-buy customers. We manage Google Ads (Search, Display, Shopping, YouTube), Meta/Facebook and Instagram Ads, and LinkedIn Ads — from keyword research and ad copywriting to landing page design, conversion tracking, A/B testing, and monthly reporting. Every campaign is built to generate real enquiries and sales, not just clicks.",
    icon: "Megaphone",
    features: [
      "Google Ads (Search, Display, Shopping, YouTube)",
      "Meta/Facebook Ads",
      "Instagram Ads",
      "YouTube Ads",
      "LinkedIn Ads",
      "Ad Copy & Creative Design",
      "Landing Page Design",
      "Conversion Tracking & Attribution",
      "A/B Testing",
      "Monthly Reporting & Optimization",
    ],
    deliverables: [
      "Full ads strategy and campaign architecture",
      "Keyword research and competitor analysis (Google Ads)",
      "Audience targeting and segmentation setup",
      "Ad copywriting (3-5 variations per ad group)",
      "Landing page design and optimization",
      "Conversion tracking setup (Google Analytics, Meta Pixel)",
      "A/B testing on ads, audiences, and landing pages",
      "Monthly performance reports with ROI analysis",
      "Budget optimization and bid management",
      "Dedicated ads manager for Growth/Premium plans",
    ],
    benefits: [
      "Get instant traffic and leads — results within days, not months",
      "Pay only for results — measurable cost-per-lead and ROAS",
      "Reach your exact audience by location, interests, and intent",
      "Scale spend up or down anytime — no lock-in",
      "Test offers and messaging fast without long-term commitment",
      "Transparent reporting so you know exactly where every rupee goes",
    ],
    pricing: {
      starter: "₹7,999",
      growth: "₹19,999",
      premium: "₹49,999+",
      monthly: {
        starter: "₹3,999",
        growth: "₹9,999",
        premium: "₹24,999",
      },
      monthlyFeatures: {
        starter: [
          "1 ad platform managed",
          "Up to 3 ad campaigns",
          "Monthly performance report",
          "Email support",
        ],
        growth: [
          "Everything in Starter",
          "2-3 ad platforms managed",
          "Up to 10 ad campaigns",
          "Landing page optimization",
          "Priority support",
        ],
        premium: [
          "Everything in Growth",
          "All ad platforms",
          "Unlimited campaigns",
          "Dedicated ads manager",
          "Weekly optimization calls",
          "24/7 priority support",
        ],
      },
    },
    faqs: [
      {
        question: "How much should I spend on ads?",
        answer:
          "Ad budget is separate from our management fee. A good starting budget is ₹300-500/day (₹9,000-15,000/month). We start conservative, track what works, and scale what delivers results. Never spend more than you're comfortable losing while we optimize.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Paid ads deliver traffic from day one. You'll start seeing impressions and clicks within hours of launch. Conversions (calls, form fills, purchases) typically start within the first week, and we optimize continuously from there.",
      },
      {
        question: "Which ad platform is right for my business?",
        answer:
          "Google Ads capture high-intent searchers ('AC repair near me'). Meta/Facebook Ads are great for awareness and reaching people by interests/demographics. LinkedIn Ads work well for B2B. We recommend the best mix based on your business and audience.",
      },
      {
        question: "What if ads don't work for my business?",
        answer:
          "We start with a small test budget and clear success metrics. If the data shows ads aren't delivering after 2-4 weeks of optimization, we'll tell you honestly and pivot — either to a different platform, different audience, or to SEO as a longer-term strategy.",
      },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    business: "TechNova Solutions",
    role: "CTO",
    content:
      "GrowthZone built our entire web application and automated our workflows. Our operational efficiency improved by 300% and the custom CRM they built saves our team 15 hours every week. Absolutely phenomenal work!",
    rating: 5,
  },
  {
    id: "2",
    name: "Dr. Priya Sharma",
    business: "HealthFirst Clinics",
    role: "Director",
    content:
      "From branding to website to AI chatbot — GrowthZone handled everything for our clinic chain. Patient bookings increased by 60% and the AI chatbot handles 80% of routine queries. Best digital partner we've ever worked with!",
    rating: 5,
  },
  {
    id: "3",
    name: "Amit Patel",
    business: "ShopKart E-commerce",
    role: "Founder",
    content:
      "GrowthZone built our e-commerce platform, mobile app, and handles all our digital marketing. Sales grew by 400% in 6 months. Their team understands technology AND business — rare combination!",
    rating: 5,
  },
  {
    id: "4",
    name: "Sneha Joshi",
    business: "InnovateEd Academy",
    role: "CEO",
    content:
      "Our school management software, website, and mobile app — all built by GrowthZone. Parents love the app and our administrative work reduced by 50%. The AI-powered analytics help us make data-driven decisions.",
    rating: 5,
  },
  {
    id: "5",
    name: "Vikram Singh",
    business: "BuildRight Construction",
    role: "Managing Director",
    content:
      "GrowthZone developed our real estate management software, CRM, and cloud infrastructure. Lead management is now fully automated and our sales team closes 3x more deals. Outstanding technical expertise!",
    rating: 5,
  },
  {
    id: "6",
    name: "Meera Reddy",
    business: "CloudFirst Technologies",
    role: "VP Engineering",
    content:
      "GrowthZone migrated our entire infrastructure to AWS, set up CI/CD pipelines, and built custom DevOps automation. Our deployment time went from 2 hours to 5 minutes. Their cloud expertise is world-class!",
    rating: 5,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description:
      "We start with a deep dive into your business — understanding your goals, challenges, tech stack, and current digital ecosystem. Then we create a customized strategy across the services you need.",
    icon: "Phone",
  },
  {
    step: 2,
    title: "Planning & Architecture",
    description:
      "Our team creates technical architecture, wireframes, system designs, and project roadmaps. You review and approve everything before we start building. Complete transparency at every step.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Build & Deploy",
    description:
      "We build your solution using modern technologies, test everything thoroughly, and deploy with zero downtime. From websites to AI chatbots to cloud infrastructure — pixel-perfect execution.",
    icon: "Rocket",
  },
  {
    step: 4,
    title: "Optimize & Scale",
    description:
      "The real growth begins after launch. We monitor performance, optimize systems, run A/B tests, and continuously improve. We scale your infrastructure and strategies as your business grows.",
    icon: "TrendingUp",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "How quickly can you start working on my project?",
    answer:
      "We typically start within 2-3 business days after the initial consultation and payment confirmation. For urgent projects, we offer express delivery at a nominal additional cost.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Yes! We work with clients globally. Our digital services transcend geography — we've delivered projects for clients across India, US, UK, Middle East, and Southeast Asia.",
  },
  {
    question: "What if I need changes after the project is delivered?",
    answer:
      "We offer free support for the duration specified in your package (1-90 days depending on plan). After that, you can opt for our monthly maintenance plans starting at ₹2,999/month.",
  },
  {
    question: "How do I track the progress of my project?",
    answer:
      "We provide regular updates via WhatsApp and email with screenshots and progress reports. For Premium clients, we set up a client portal for real-time project tracking.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade at any time. We'll credit the value of your current plan towards the new one — you only pay the difference.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, for projects above ₹15,000, we offer a flexible 50-50 payment plan — 50% upfront to start the project and 50% on delivery. No EMI or interest charges.",
  },
  {
    question: "Will you manage everything or do I need to do something?",
    answer:
      "We handle everything end-to-end. You just need to provide your business information and approve key decisions. We take care of the rest — designing, building, deploying, and managing your digital solutions.",
  },
  {
    question: "What makes you different from freelancers or other agencies?",
    answer:
      "Unlike freelancers, we're a complete agency with experts in design, development, AI, cloud, and digital marketing — all under one roof. Unlike big agencies, we deliver enterprise-quality work at startup-friendly prices with personalized attention.",
  },
];

export const FAQ_CATEGORIES = [
  "All",
  "General",
  "Branding & Design",
  "Web Development",
  "Mobile App Development",
  "Software Development",
  "AI-Powered Workflow",
  "SEO & Digital Marketing",
  "Content Services",
  "Cloud & DevOps",
  "WhatsApp Business",
  "Paid Ads Management",
  "Estimates & Plans",
] as const;

export const ALL_FAQS: FAQ[] = [
  // ── General ──
  {
    question: "How quickly can you start working on my project?",
    answer:
      "We typically start within 2-3 business days after the initial consultation and payment confirmation. For urgent projects, we offer express delivery at a nominal additional cost.",
    category: "General",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Yes! We work with clients globally. Our digital services transcend geography — we've delivered projects for clients across India, US, UK, Middle East, and Southeast Asia.",
    category: "General",
  },
  {
    question: "What makes you different from freelancers or other agencies?",
    answer:
      "Unlike freelancers, we're a complete agency with experts in design, development, AI, cloud, and digital marketing — all under one roof. Unlike big agencies, we deliver enterprise-quality work at startup-friendly prices with personalized attention.",
    category: "General",
  },
  {
    question: "Will you manage everything or do I need to do something?",
    answer:
      "We handle everything end-to-end. You just need to provide your business information and approve key decisions. We take care of the rest — designing, building, deploying, and managing your digital solutions.",
    category: "General",
  },
  {
    question: "How do I track the progress of my project?",
    answer:
      "We provide regular updates via WhatsApp and email with screenshots and progress reports. For Premium clients, we set up a client portal for real-time project tracking.",
    category: "General",
  },

  // ── Branding & Design ──
  {
    question: "How many logo concepts do you provide?",
    answer:
      "We present 2-3 unique logo concepts based on your brief. After you choose a direction, we refine it with unlimited revisions until you're 100% happy. The complete brand kit is delivered within 7-14 business days.",
    category: "Branding & Design",
  },
  {
    question: "Do I own the designs and source files?",
    answer:
      "Yes — 100% ownership. All logo files, source files (Figma, PSD, AI), brand guidelines, and design assets are delivered to you. Use them anywhere without restrictions.",
    category: "Branding & Design",
  },
  {
    question: "Can you redesign my existing brand?",
    answer:
      "Absolutely! We can modernize your existing brand while keeping the recognition you've built. We'll refresh your logo, update your color palette, and create new materials that feel current.",
    category: "Branding & Design",
  },
  {
    question: "What is UI/UX design and why does it matter?",
    answer:
      "UI/UX design is how your website or app looks and feels. Good UI/UX means users find what they need quickly, enjoy the experience, and are more likely to convert. Poor design drives 88% of users away after one bad experience.",
    category: "Branding & Design",
  },

  // ── Web Development ──
  {
    question: "How long does it take to build a website?",
    answer:
      "Landing page: 3-5 business days. Business website (5-10 pages): 2-3 weeks. E-commerce store: 3-4 weeks. Custom web application: 4-8 weeks. We provide a detailed timeline before starting.",
    category: "Web Development",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use Next.js, React, Tailwind CSS, and Node.js — the same technologies used by Netflix, Nike, and Apple. For e-commerce, we work with Shopify, WooCommerce, and custom solutions. These ensure blazing-fast performance and future-proof scalability.",
    category: "Web Development",
  },
  {
    question: "Do you provide hosting and domain?",
    answer:
      "Yes! We help you set up hosting on Vercel, AWS, or traditional providers. We guide you through domain purchase and DNS setup. Domain costs ~₹500-800/year, hosting varies by needs.",
    category: "Web Development",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Absolutely! We integrate user-friendly CMS panels (WordPress, Sanity, or custom admin) that let you update content, images, and blog posts without any coding. We provide training to get you started.",
    category: "Web Development",
  },

  // ── Mobile App Development ──
  {
    question: "How long does it take to build a mobile app?",
    answer:
      "Simple app: 4-6 weeks. App with payments and dashboards: 6-10 weeks. Complex app: 3-4 months. We always share a detailed timeline before starting.",
    category: "Mobile App Development",
  },
  {
    question: "Flutter vs React Native — which is better?",
    answer:
      "Both are excellent cross-platform frameworks. Flutter offers slightly better performance and pixel-perfect UI. React Native is better if you need extensive third-party integrations. We recommend based on your specific needs.",
    category: "Mobile App Development",
  },
  {
    question: "Do you handle app store publishing?",
    answer:
      "Yes! We handle the entire process — developer accounts, listings, screenshots, keywords, and review management. You'll need Google Play (₹3,400 one-time) and Apple Developer ($99/year) accounts.",
    category: "Mobile App Development",
  },
  {
    question: "Can I update the app after launch?",
    answer:
      "Yes! Our monthly plans cover updates, bug fixes, and new features. We also build admin dashboards so you can update content yourself without technical knowledge.",
    category: "Mobile App Development",
  },

  // ── Software Development ──
  {
    question: "How much does custom software cost?",
    answer:
      "It depends on complexity. A simple CRM starts at ₹24,999, a full ERP system starts at ₹79,999, and enterprise solutions start at ₹2,49,999+. We provide a detailed quote after understanding your requirements.",
    category: "Software Development",
  },
  {
    question: "How long does it take to build custom software?",
    answer:
      "Simple tools: 4-6 weeks. Medium complexity (CRM, POS): 2-3 months. Complex systems (ERP, hospital management): 3-6 months. We follow agile methodology with regular demos.",
    category: "Software Development",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes! We integrate with popular tools like Zoho, Salesforce, Tally, QuickBooks, Google Workspace, and more. If it has an API, we can connect it.",
    category: "Software Development",
  },

  // ── AI-Powered Workflow ──
  {
    question: "What can be automated in my business?",
    answer:
      "Almost anything repetitive: email follow-ups, lead assignment, invoice generation, appointment reminders, data entry between tools, report generation, social media posting, and customer onboarding. We audit your processes and identify the highest-impact automations.",
    category: "AI-Powered Workflow",
  },
  {
    question: "Do I need to know coding?",
    answer:
      "No! We build no-code and low-code automations using tools like Zapier, Make, n8n, and custom solutions. You can manage simple workflows yourself, and we handle the complex ones.",
    category: "AI-Powered Workflow",
  },
  {
    question: "Which tools do you integrate with?",
    answer:
      "We integrate with 500+ tools including Salesforce, HubSpot, Zoho, Mailchimp, WhatsApp Business API, Google Sheets, Slack, Trello, and more. If it has an API or Zapier integration, we can connect it.",
    category: "AI-Powered Workflow",
  },
  {
    question: "How does AI improve my automations?",
    answer:
      "AI takes your workflows beyond simple rules. It drafts replies, qualifies and scores leads, decides routing, and learns from data over time — so your automations get smarter and handle more of the work themselves.",
    category: "AI-Powered Workflow",
  },

  // ── SEO & Digital Marketing ──
  {
    question: "How long until SEO shows results?",
    answer:
      "SEO is a long-term investment. You'll see improvements in 2-3 months, noticeable ranking changes in 3-6 months, and significant results in 6-12 months. Unlike ads, SEO results compound — once you rank, traffic is free.",
    category: "SEO & Digital Marketing",
  },
  {
    question: "Do you guarantee #1 rankings?",
    answer:
      "No ethical agency can guarantee specific rankings. But our proven white-hat strategies consistently deliver top-3 rankings for businesses within 6 months. We focus on sustainable growth, not quick fixes.",
    category: "SEO & Digital Marketing",
  },
  {
    question: "What's included in your SEO service?",
    answer:
      "Local SEO, technical SEO (site speed, Core Web Vitals, schema), on-page optimization, off-page link building, Google Business Profile management, content strategy, and monthly reporting. Everything you need to rank higher organically.",
    category: "SEO & Digital Marketing",
  },
  {
    question: "What's the difference between SEO and Paid Ads?",
    answer:
      "SEO builds free organic traffic over time — it compounds and doesn't require ongoing ad spend. Paid Ads deliver instant traffic but stop when you stop paying. We recommend SEO as the long-term foundation; add Paid Ads for immediate results.",
    category: "SEO & Digital Marketing",
  },

  // ── Content Services ──
  {
    question: "How many articles do I get per month?",
    answer:
      "Starter: 4 articles. Growth: 8 articles. Premium: 16+ articles. Each is 800-2000 words, SEO-optimized, and matched to keywords your customers search for.",
    category: "Content Services",
  },
  {
    question: "Will my content rank on Google?",
    answer:
      "We write content that ranks, not fluff. Every piece targets specific keywords, includes proper headings and meta data, and follows SEO best practices. Most clients see organic traffic growth within 3-4 months.",
    category: "Content Services",
  },
  {
    question: "What's the difference between copywriting and content writing?",
    answer:
      "Content writing educates and informs (blogs, guides, articles). Copywriting persuades and sells (ads, landing pages, email campaigns). We offer both — each optimized for its purpose.",
    category: "Content Services",
  },

  // ── Cloud & DevOps ──
  {
    question: "Which cloud provider should I use?",
    answer:
      "It depends on your needs. AWS for enterprise-grade flexibility. Cloudflare for cost-effective edge computing. Google Cloud for AI/ML workloads. We recommend the best fit based on your budget and requirements.",
    category: "Cloud & DevOps",
  },
  {
    question: "What is CI/CD and why do I need it?",
    answer:
      "CI/CD automates code deployment — when you push code changes, it automatically builds, tests, and deploys. This eliminates manual deployment errors, saves time, and enables rapid, reliable releases.",
    category: "Cloud & DevOps",
  },
  {
    question: "Do you manage existing cloud infrastructure?",
    answer:
      "Yes! We audit, optimize, and manage existing cloud setups. Whether you're on AWS, GCP, Azure, or Vercel, we can take over management and optimize for performance and cost.",
    category: "Cloud & DevOps",
  },

  // ── WhatsApp Business ──
  {
    question: "Do I need WhatsApp Business API or just the App?",
    answer:
      "WhatsApp Business App is free and works for most small-to-medium businesses — it gives you catalogs, auto-replies, and labels. WhatsApp Business API is for businesses that need higher message volumes, automation at scale, and CRM integration. We help you choose the right one.",
    category: "WhatsApp Business",
  },
  {
    question: "Can you set up WhatsApp on my website?",
    answer:
      "Yes! We add a click-to-chat WhatsApp button on your website so visitors can start a conversation instantly. We also build WhatsApp-based lead capture forms, appointment booking flows, and automated chat sequences.",
    category: "WhatsApp Business",
  },
  {
    question: "How do WhatsApp broadcasts work?",
    answer:
      "Broadcasts let you send a message to multiple contacts at once (like an email blast, but on WhatsApp). We help you build your broadcast lists, write the messages, and manage opt-in compliance so your messages actually reach your customers.",
    category: "WhatsApp Business",
  },
  {
    question: "Can you connect WhatsApp to our CRM?",
    answer:
      "Yes! We integrate WhatsApp with CRMs like Zoho, HubSpot, Salesforce, and custom systems — so every conversation, lead, and deal is tracked automatically. We also build custom workflows using Zapier and Make.",
    category: "WhatsApp Business",
  },

  // ── Paid Ads Management ──
  {
    question: "How much should I spend on ads?",
    answer:
      "Ad budget is separate from our management fee. A good starting budget is ₹300-500/day (₹9,000-15,000/month). We start conservative, track what works, and scale what delivers results.",
    category: "Paid Ads Management",
  },
  {
    question: "How quickly will I see results from paid ads?",
    answer:
      "Paid ads deliver traffic from day one. You'll start seeing impressions and clicks within hours of launch. Conversions (calls, form fills, purchases) typically start within the first week, and we optimize continuously from there.",
    category: "Paid Ads Management",
  },
  {
    question: "Which ad platform is right for my business?",
    answer:
      "Google Ads capture high-intent searchers ('AC repair near me'). Meta/Facebook Ads are great for awareness and reaching people by interests/demographics. LinkedIn Ads work well for B2B. We recommend the best mix based on your business and audience.",
    category: "Paid Ads Management",
  },
  {
    question: "What if ads don't work for my business?",
    answer:
      "We start with a small test budget and clear success metrics. If the data shows ads aren't delivering after 2-4 weeks of optimization, we'll tell you honestly and pivot — to a different platform, audience, or to SEO as a longer-term strategy.",
    category: "Paid Ads Management",
  },

  // ── Estimates & Plans ──
  {
    question: "How much does a project cost?",
    answer:
      "Our services start from ₹2,999 for basic maintenance and go up to ₹2,49,999+ for enterprise software. Most projects fall in the ₹9,999-₹79,999 range. We provide a detailed quote after understanding your needs.",
    category: "Estimates & Plans",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No! Our pricing is completely transparent. What you see is what you pay. The only additional costs are third-party services (hosting, domains, APIs) which go directly to the providers.",
    category: "Estimates & Plans",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade at any time. We'll credit the value of your current plan towards the new one — you only pay the difference.",
    category: "Estimates & Plans",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, for projects above ₹15,000, we offer a flexible 50-50 payment plan — 50% upfront to start the project and 50% on delivery. No EMI, no interest charges. We also accept UPI, bank transfers, and Razorpay payments.",
    category: "Estimates & Plans",
  },
  {
    question: "Which plan is right for my business?",
    answer:
      "Starter is perfect for businesses that need basic setup and support. Growth is our most popular plan for businesses ready to actively scale. Premium is for businesses that want a complete digital transformation with dedicated support.",
    category: "Estimates & Plans",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Instagram", url: "https://instagram.com/growthzone", icon: "Instagram" },
  { platform: "Facebook", url: "https://facebook.com/growthzone", icon: "Facebook" },
  { platform: "LinkedIn", url: "https://linkedin.com/company/growthzone", icon: "Linkedin" },
  { platform: "Twitter", url: "https://twitter.com/growthzone", icon: "Twitter" },
];

export const FOOTER_LINKS = {
  services: SERVICES.map((s) => ({
    title: s.title,
    href: `/services/${s.slug}`,
  })),
  company: [
    { title: "Home", href: "/" },
    { title: "Estimate", href: "/estimate" },
    { title: "About Us", href: "/about" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Industries", href: "/industries" },
    { title: "FAQ", href: "/faq" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Refund Policy", href: "/refund" },
  ],
};

export const STATS = [
  { value: "200+", label: "Projects Delivered" },
  { value: "150+", label: "Happy Clients" },
  { value: "10+", label: "Service Categories" },
  { value: "4.9★", label: "Client Rating" },
];
