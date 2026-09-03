"use client";

import { PageBanner } from "@/components/shared/PageBanner";
import { DarkCTA } from "@/components/shared/DarkCTA";
import { SITE_CONFIG } from "@/lib/constants";

const sections = [
  {
    title: "Our Refund Promise",
    body: [
      `At ${SITE_CONFIG.name}, we stand behind our work. If we fail to deliver what we promised, we will make it right — including offering a refund where appropriate. This policy explains when refunds are available.`,
    ],
  },
  {
    title: "When You Can Get a Refund",
    body: [
      "If you cancel before work on your project has commenced, you are entitled to a full refund of any amount paid.",
      "If we fail to deliver the agreed deliverables within the promised timeline (15-30 days, depending on scope) and the delay is not caused by you, you may request a full or partial refund.",
      "If we are unable to start your project for any reason on our side, you get a 100% refund.",
    ],
  },
  {
    title: "When Refunds Are Not Available",
    body: [
      "Once work on your project has started, the advance payment is non-refundable because we invest time, effort, and resources into your project from day one.",
      "Refunds are not available if the project is delayed because you did not provide required content, feedback, or approvals on time.",
      "Third-party costs already incurred on your behalf (such as Google Ads spend, domain registration, or tool subscriptions) are non-refundable.",
      "Monthly subscription services are non-refundable for the current billing cycle once the month has started.",
    ],
  },
  {
    title: "How Refunds Are Processed",
    body: [
      "To request a refund, email us at " + SITE_CONFIG.email + " with your order details and the reason for the request.",
      "We will review your request and respond within 3 working days. If approved, the refund will be processed to your original payment method within 7-10 working days.",
    ],
  },
  {
    title: "Revisions Instead of Refunds",
    body: [
      "If you're not happy with a deliverable, tell us what needs to change. Every project includes revisions, and we genuinely want you to be satisfied with the final result.",
      "We'll always try to fix the issue through revisions first — refunds are the last resort after we've had a fair chance to make it right.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      `Have questions about this Refund Policy? Email us at ${SITE_CONFIG.email} or call ${SITE_CONFIG.phone} and we'll be happy to help.`,
    ],
  },
];

export default function RefundPage() {
  return (
    <>
      <PageBanner
        badge="Refund Policy"
        title="Fair Refunds,"
        titleHighlight="No Hidden Terms"
        description="We want you to feel confident working with us. Here's exactly how our refund policy works — it's simple and fair."
        imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=600&fit=crop"
        imageAlt="Refund Policy"
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
        title="Worried About Taking the First Step?"
        subtitle="Our refund policy protects you. If we can't deliver, you get your money back. Book a free consultation today."
        buttonText="Book Free Consultation"
      />
    </>
  );
}
