"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  CheckCircle2,
  Sparkles,
  Rocket,
  Zap,
  Shield,
  Clock,
  BadgeCheck,
  Users,
  TrendingUp,
  MessageCircle,
  Award,
  List,
  Workflow,
  IndianRupee,
  HelpCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatsBar } from "@/components/shared/StatsBar";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { DarkCTA } from "@/components/shared/DarkCTA";
import { PageBanner } from "@/components/shared/PageBanner";
import { Service } from "@/types";
import { PROCESS_STEPS } from "@/lib/constants";
import {
  serviceColors,
  serviceDetailImages,
} from "@/lib/service-utils";
import { DoodleCheck } from "@/components/shared/DoodleDecorations";

const serviceStats: Record<string, { value: string; label: string }[]> = {
  "website-development": [
    { value: "7-14", label: "Days Delivery" },
    { value: "99%", label: "Uptime" },
    { value: "SSL", label: "Secured" },
    { value: "300%", label: "More Leads" },
  ],
  "google-business-profile": [
    { value: "5-7", label: "Days Setup" },
    { value: "200%", label: "More Views" },
    { value: "100%", label: "Verified" },
    { value: "5x", label: "More Calls" },
  ],
  "local-seo": [
    { value: "3-6", label: "Months Results" },
    { value: "Top 3", label: "Rankings" },
    { value: "100%", label: "White Hat" },
    { value: "300%", label: "ROI" },
  ],
  "whatsapp-business": [
    { value: "1-2", label: "Days Setup" },
    { value: "98%", label: "Open Rate" },
    { value: "Verified", label: "Badge" },
    { value: "5min", label: "Response Time" },
  ],
  "social-media-management": [
    { value: "2-3", label: "Days to Start" },
    { value: "4x", label: "More Engagement" },
    { value: "12+", label: "Posts Monthly" },
    { value: "24/7", label: "Brand Presence" },
  ],
  "google-ads": [
    { value: "2-5", label: "Days to Leads" },
    { value: "Top 3", label: "Ad Placement" },
    { value: "100%", label: "Budget Control" },
    { value: "5x", label: "ROI Average" },
  ],
  "logo-branding": [
    { value: "3-5", label: "Days to Concepts" },
    { value: "100%", label: "Ownership" },
    { value: "Unlimited", label: "Revisions" },
    { value: "11+", label: "Brand Assets" },
  ],
  "content-writing": [
    { value: "3-5", label: "Days per Post" },
    { value: "100%", label: "Original" },
    { value: "300%", label: "More Traffic" },
    { value: "4", label: "Posts Monthly" },
  ],
  "mobile-app-development": [
    { value: "4-8", label: "Weeks Delivery" },
    { value: "2", label: "Platforms (iOS + Android)" },
    { value: "40%", label: "Cheaper Build" },
    { value: "24/7", label: "Customer Access" },
  ],
};

const featureIcons = [
  Star,
  Rocket,
  Zap,
  Shield,
  Clock,
  BadgeCheck,
  Users,
  TrendingUp,
  MessageCircle,
  Award,
];

const pricingPlans = (service: Service) => [
  {
    name: "Starter",
    price: service.pricing.starter,
    tagline: "Everything you need to get started",
    features: [
      "Core setup included",
      "Basic configuration",
      "Email support",
      "Standard delivery time",
    ],
    highlighted: true,
    custom: false,
  },
  {
    name: "Custom",
    price: service.pricing.premium,
    tagline: "Fully tailored to your needs — we quote after understanding your project",
    features: [
      "Everything in Starter",
      "Requirement-based scope & features",
      "Custom development & integrations",
      "Dedicated account manager",
      "Priority support",
    ],
    highlighted: false,
    custom: true,
  },
];

const navLinks = [
  { href: "#overview", label: "Overview", icon: List },
  { href: "#features", label: "Features", icon: Sparkles },
  { href: "#process", label: "Process", icon: Workflow },
  { href: "#pricing", label: "Pricing", icon: IndianRupee },
  { href: "#faq", label: "FAQ", icon: HelpCircle },
];

const planMessage = (
  service: Service,
  plan: { name: string; custom: boolean; price: string }
) => {
  return plan.custom
    ? `Hi GrowthZone! I'm interested in your ${service.title} — Custom plan (From ${plan.price}). I have specific requirements, please share a custom quote.`
    : `Hi GrowthZone! I'm interested in your ${service.title} — ${plan.name} plan (${plan.price}). Please share the details and next steps.`;
};

interface ServiceDetailLayoutProps {
  service: Service;
}

export function ServiceDetailLayout({ service }: ServiceDetailLayoutProps) {
  const heroImage =
    serviceDetailImages[service.slug] ||
    serviceDetailImages["website-development"];
  const stats = serviceStats[service.slug] || serviceStats["website-development"];
  const colors = serviceColors[service.slug] || serviceColors["website-development"];
  const plans = pricingPlans(service);

  const processSteps = PROCESS_STEPS.map((s, i) => ({
    step: String(s.step),
    title: s.title,
    description: s.description,
    icon: featureIcons[i] || Sparkles,
    color: "from-blue-600 to-indigo-600",
  }));

  return (
    <>
      {/* PAGE BANNER */}
      <PageBanner
        badge="Our Service"
        title={service.title}
        titleHighlight="Made Easy"
        description={service.shortDescription}
        imageSrc={heroImage}
        imageAlt={service.title}
      />

      <div className=" border-y-2 border-dashed border-border bg-background/90 backdrop-blur-md">
        <div className="container-custom py-2.5">
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex shrink-0 items-center gap-1.5 rounded-full border-2 border-dashed border-border px-4 py-1.5 font-patrick text-sm font-semibold text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                <link.icon className="h-3.5 w-3.5" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-custom relative z-10 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="mt-2 font-kalam text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild className="text-base px-8">
                  <Link href={`/contact?service=${service.slug}`}>
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8">
                  <a href="tel:+919999999999">
                    <Phone className="mr-2 h-4 w-4" /> Call for Free Quote
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="font-patrick text-sm text-muted-foreground ml-1">
                    4.9★ from 150+ clients
                  </span>
                </div>
                <span className="hidden h-4 w-px bg-border sm:block" />
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-patrick text-sm text-muted-foreground">
                    Delivered by experts
                  </span>
                </div>
                <span className="hidden h-4 w-px bg-border sm:block" />
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="font-patrick text-sm text-muted-foreground">
                    Free consultation
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative hidden lg:block"
            >
              <div
                className="rounded-3xl overflow-hidden border-2 border-border bg-card shadow-xl"
                style={{ filter: "url(#sketchy)" }}
              >
                <img
                  src={heroImage}
                  alt={service.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary text-primary-foreground p-5 shadow-lg border-2 border-white/20" style={{ transform: "rotate(-3deg)" }}>
                <p className="font-patrick text-[10px] uppercase tracking-wider opacity-90">
                  Starting at
                </p>
                <p className="font-caveat text-3xl font-bold">{service.pricing.starter}</p>
              </div>

              <div className="absolute -top-5 -right-5 flex items-center gap-2 rounded-xl bg-card border-2 border-dashed border-primary/30 p-3 shadow-lg hand-shadow" style={{ transform: "rotate(3deg)" }}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <span className="font-patrick text-xs font-bold">
                  5x More
                  <br />
                  <span className="text-muted-foreground font-medium">Enquiries</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsBar stats={stats} />

      {/* OVERVIEW / DELIVERABLES */}
      <section id="overview" className="section-padding kraft-bg scroll-mt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Left intro + summary */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 lg:sticky lg:top-24"
            >
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-dashed border-primary/20 bg-primary/5 px-4 py-1.5"
                style={{ transform: "rotate(-1deg)" }}
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                <span className="font-patrick text-xs font-semibold uppercase tracking-wider text-primary">
                  What&apos;s Included
                </span>
              </div>
              <h2 className="font-caveat text-3xl sm:text-4xl font-bold tracking-tight">
                Everything Included in{" "}
                <span className="text-primary">This Service</span>
              </h2>
              <p className="mt-4 font-kalam text-lg text-muted-foreground leading-relaxed">
                No hidden costs, no surprises. Here&apos;s everything you get
                when you choose this service.
              </p>

              <div
                className="mt-8 rounded-2xl border-2 border-border bg-card p-6 paper-card hand-shadow"
                style={{ filter: "url(#sketchy)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.gradient} text-white shadow-lg border-2 border-white/20`}
                  >
                    <List className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-caveat text-2xl font-bold leading-none">
                      {service.deliverables.length} deliverables
                    </p>
                    <p className="font-patrick text-xs text-muted-foreground mt-1">
                      Included in every package
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 border-t-2 border-dashed border-border pt-4">
                  <li className="flex items-center gap-2.5 font-kalam text-sm text-muted-foreground">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
                    No hidden costs or add-ons
                  </li>
                  <li className="flex items-center gap-2.5 font-kalam text-sm text-muted-foreground">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
                    Free support after launch
                  </li>
                  <li className="flex items-center gap-2.5 font-kalam text-sm text-muted-foreground">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
                    Upgrade anytime, pay the difference
                  </li>
                </ul>
                <Button asChild size="sm" className="w-full mt-5">
                  <Link href={`/contact?service=${service.slug}`}>
                    Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right checklist */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div
                className="rounded-2xl border-2 border-border bg-card shadow-xl paper-card overflow-hidden"
                style={{ filter: "url(#sketchy)" }}
              >
                <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 bg-primary/5 border-b-2 border-dashed border-border">
                  <p className="font-caveat text-lg font-bold">
                    Your Service Checklist (Starter Plan)
                  </p>
                  <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1 font-patrick text-[11px] font-bold">
                    {service.deliverables.length} items
                  </span>
                </div>
                <ul className="divide-y divide-dashed divide-border">
                  {service.deliverables.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04 }}
                      className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-3.5 hover:bg-primary/5 transition-colors group"
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${colors.gradient} text-white font-patrick text-xs font-bold shadow`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-kalam text-sm leading-snug text-foreground">
                        {item}
                      </span>
                      <DoodleCheck
                        size={18}
                        color="oklch(0.55 0.18 150)"
                        className="shrink-0 ml-auto group-hover:scale-110 transition-transform"
                      />
                    </motion.li>
                  ))}
                </ul>

                {/* Custom plan hook */}
                <div className="px-5 sm:px-6 py-5 bg-card border-t-2 border-dashed border-border">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <p className="font-patrick text-xs font-bold text-foreground">
                      Want a custom plan?
                    </p>
                  </div>
                  <p className="font-kalam text-sm text-muted-foreground mb-4">
                    Tell us what you need and we&apos;ll build a custom plan
                    around your exact requirements and budget.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES BENTO */}
      <section id="features" className="section-padding scroll-mt-32">
        <div className="container-custom">
          <SectionHeading
            badge={{ icon: Sparkles, text: "Key Features" }}
            title="Why This Service"
            highlight="Works for You"
            subtitle="Each feature is built to solve a specific problem your business faces every day."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => {
              const FeatureIcon = featureIcons[index % featureIcons.length];
              const isFirst = index === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={isFirst ? "md:col-span-2" : ""}
                >
                  <div
                    className={`relative h-full rounded-2xl border-2 border-border paper-card p-6 hand-shadow hand-shadow-hover transition-all duration-200 hover:-translate-y-0.5 ${isFirst ? "flex flex-col sm:flex-row items-start sm:items-center gap-5" : ""
                      }`}
                    style={{ filter: "url(#sketchy)" }}
                  >
                    <span className="absolute top-4 right-4 font-caveat text-3xl font-bold text-muted-foreground/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.gradient} text-white shadow-lg border-2 border-white/20`}
                    >
                      <FeatureIcon className="h-7 w-7" />
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <h3 className="font-caveat text-xl font-bold mb-2">{feature}</h3>
                      <p className="font-kalam text-sm text-muted-foreground">
                        {isFirst
                          ? "The core of this service — everything else builds on it."
                          : `Includes ${service.title} best practices tailored to your business.`}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-padding kraft-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-dashed border-primary/20 bg-primary/5 px-4 py-1.5" style={{ transform: "rotate(-1deg)" }}>
                <Award className="h-3.5 w-3.5 text-primary" />
                <span className="font-patrick text-xs font-semibold uppercase tracking-wider text-primary">
                  Why Your Business Needs This
                </span>
              </div>
              <h2 className="font-caveat text-3xl font-bold mb-4">
                The Results You&apos;ll See
              </h2>
              <p className="font-kalam text-muted-foreground mb-8 leading-relaxed">
                In today&apos;s competitive market, having a strong online
                presence isn&apos;t optional — it&apos;s essential. Here&apos;s
                how this service helps you stand out.
              </p>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5 border-2 border-dashed border-primary/20">
                      <DoodleCheck size={14} color="oklch(0.45 0.18 250)" />
                    </div>
                    <p className="font-kalam font-medium">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=600&fit=crop"
                alt="Business Growth"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3] border-2 border-border"
                style={{ filter: "url(#sketchy)" }}
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary text-primary-foreground p-4 shadow-lg hidden md:block border-2 border-white/20" style={{ transform: "rotate(-3deg)" }}>
                <p className="font-caveat text-2xl font-bold">98%</p>
                <p className="font-patrick text-sm opacity-90">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-padding scroll-mt-32">
        <div className="container-custom">
          <SectionHeading
            badge={{ icon: Workflow, text: "How It Works" }}
            title="From First Call to"
            highlight="Launch in 15 Days"
            subtitle="A proven 4-step process that gets your business online and growing — fast. No delays, no confusion, complete transparency."
          />
          <ProcessSteps steps={processSteps} variant="horizontal" />
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section-padding kraft-bg scroll-mt-32">
        <div className="container-custom">
          <SectionHeading
            badge={{ icon: IndianRupee, text: "Pricing" }}
            title="Simple & Transparent"
            highlight="Pricing"
            subtitle="No hidden costs. Choose our Starter plan to get started — and we'll customize anything else to fit your needs."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full border-2 paper-card hand-shadow hand-shadow-hover transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? "border-primary shadow-xl"
                      : "border-dashed border-border"
                  }`}
                  style={{ filter: "url(#sketchy)" }}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-caveat text-2xl font-bold">{plan.name}</h3>
                      {plan.highlighted && (
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-indigo-600 px-3 py-1 text-[10px] font-patrick font-bold uppercase tracking-wider text-primary-foreground">
                          Most Popular
                        </span>
                      )}
                      {plan.custom && (
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-3 py-1 text-[10px] font-patrick font-bold uppercase tracking-wider text-primary-foreground">
                          <Sparkles className="h-3 w-3 mr-1" /> Custom Quote
                        </span>
                      )}
                    </div>
                    <p className="font-kalam text-sm text-muted-foreground mb-4">
                      {plan.tagline}
                    </p>
                    <div className="mb-5">
                      <span className="font-caveat text-4xl font-bold text-primary">
                        {plan.custom ? "From " : ""}
                        {plan.price}
                      </span>
                      {plan.custom && (
                        <p className="mt-2 font-kalam text-xs text-muted-foreground">
                          Minimum price — exact quote after a free consultation.
                        </p>
                      )}
                    </div>
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
                          <span className="font-kalam text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      size="lg"
                      className="w-full font-patrick"
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      <Link
                        href={`/contact?service=${encodeURIComponent(
                          service.title
                        )}&message=${encodeURIComponent(
                          planMessage(service, plan)
                        )}`}
                      >
                        {plan.custom ? "Get Custom Quote" : `Get ${plan.name}`}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center font-kalam text-sm text-muted-foreground"
          >
            Need something custom?{" "}
            <Link href={`/contact?service=${service.slug}`} className="font-bold text-primary underline decoration-dashed underline-offset-4">
              Talk to us
            </Link>{" "}
            — we&apos;ll build a plan around your budget.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding scroll-mt-32">
        <div className="container-custom">
          <SectionHeading
            badge={{ icon: HelpCircle, text: "FAQ" }}
            title="Frequently Asked"
            highlight="Questions"
            subtitle="Everything you need to know before getting started. Still have questions? Just ask us."
          />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

            {/* Left image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 lg:sticky lg:top-24"
            >

              <div
                className="relative rounded-2xl overflow-hidden border-2 border-border shadow-xl paper-card"
                style={{ filter: "url(#sketchy)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1774437891793-2013f7b5a04a?w=800&h=600&fit=crop"
                  alt="Frequently Asked Questions"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-caveat text-lg font-bold text-white">
                    Got more questions?
                  </p>
                  <p className="font-kalam text-xs text-white/80">
                    We&apos;re one call away — free consultation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right accordion + view all */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-3"
            >
              <FAQAccordion faqs={service.faqs} />

              <div className="mt-8 text-center">
                <Button size="lg" variant="outline" asChild className="text-base px-8 py-6">
                  <Link href={`/faq?category=${encodeURIComponent(service.title)}`}>
                    View All FAQs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA WITH FORM */}
      <DarkCTA
        variant="split"
        title={`Ready to Get Started With ${service.title}?`}
        subtitle="Book a free consultation today. We'll walk you through exactly how this service will help your business grow."
        buttonText="Get in Touch"
      >
        <div className="rounded-2xl border-2 border-border bg-card p-6 shadow-xl paper-card">
          <h3 className="font-caveat text-2xl font-bold mb-4">
            Send Us a Message
          </h3>
          <ContactForm service={service.slug} />
        </div>
      </DarkCTA>
    </>
  );
}
