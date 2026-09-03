"use client";

import { PageBanner } from "@/components/shared/PageBanner";
import { DarkCTA } from "@/components/shared/DarkCTA";
import { SITE_CONFIG } from "@/lib/constants";

const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      `By accessing or using ${SITE_CONFIG.name} ("we", "us", "our") or purchasing our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.`,
      "These terms apply to all visitors, clients, and users of our website and services.",
    ],
  },
  {
    title: "Our Services",
    body: [
      "We provide end-to-end digital services across 10 categories: Branding & Design, Web Development, Mobile App Development, Software Development, AI-Powered Workflow, SEO & Digital Marketing, Content Services, Cloud & DevOps, WhatsApp Business, and Paid Ads Management.",
      "The exact scope of each service, deliverables, and timelines are described on the relevant service page and confirmed in writing (via email or WhatsApp) before we begin work.",
    ],
  },
  {
    title: "Quotes, Payments & Billing",
    body: [
      "All prices shown on our website are indicative. Your final quote is confirmed once we understand your requirements through a consultation.",
      "For one-time projects, an advance payment is required before work begins, with the balance due on delivery. For monthly services, payment is due at the start of each billing cycle.",
      "Payments are non-refundable once work on your project has commenced, except as described in our Refund Policy.",
    ],
  },
  {
    title: "Delivery Timeline",
    body: [
      "We commit to delivering most projects within agreed timelines. Delivery time depends on the scope of the project — from a few days for small tasks to a few weeks for larger builds.",
      "The timeline is measured from the date we receive your advance payment and all required content and information.",
      "Delays caused by late feedback, missing content, or changes requested by you will extend the delivery timeline accordingly.",
    ],
  },
  {
    title: "Your Responsibilities",
    body: [
      "You agree to provide accurate information about your business and to provide necessary content, logos, and approvals in a timely manner so we can deliver on schedule.",
      "You are responsible for maintaining the confidentiality of any account credentials we share with you for the purpose of delivering the services.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Once your project is paid for in full, you own the final deliverables, including website design, content, and branding created specifically for you.",
      "We may showcase your project in our portfolio unless you request otherwise in writing.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "We make every effort to deliver high-quality work and measurable results, but we cannot guarantee specific business outcomes such as revenue, rankings, or sales.",
      "Our total liability for any claim related to our services is limited to the amount you paid us for the specific service giving rise to the claim.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time. Any changes will be posted on this page with an updated date. Continued use of our services after changes means you accept the revised terms.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      `If you have any questions about these Terms of Service, contact us at ${SITE_CONFIG.email} or call ${SITE_CONFIG.phone}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageBanner
        badge="Terms of Service"
        title="Simple, Fair"
        titleHighlight="Terms & Conditions"
        description="Clear expectations between us and you — no hidden clauses, no confusing legal jargon. Just straightforward terms for working together."
        imageSrc="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=600&fit=crop"
        imageAlt="Terms of Service"
      />

      <section className="section-padding kraft-bg">
        <div className="container-custom max-w-4xl">
          <p className="font-patrick text-sm text-muted-foreground mb-10">
            Last updated: 1 August 2026
          </p>
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="rounded-2xl border-2 border-dashed border-border bg-card p-6 md:p-8 paper-card hand-shadow"
                style={{ filter: "url(#sketchy)" }}
              >
                <h2 className="font-caveat text-2xl md:text-3xl font-bold mb-4">
                  <span className="gradient-text">{index + 1}.</span>{" "}
                  {section.title}
                </h2>
                {section.body.map((para, i) => (
                  <p
                    key={i}
                    className="font-kalam text-sm md:text-base text-muted-foreground leading-relaxed mb-3 last:mb-0"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        title="Ready to Get Started?"
        subtitle="Clear terms, transparent pricing, and a dedicated team that delivers. Let's talk about growing your business."
        buttonText="Get Free Consultation"
      />
    </>
  );
}
