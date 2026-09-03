"use client";

import { HelpCircle, ArrowRight, IndianRupee } from "lucide-react";
import Link from "next/link";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EstimateCalculator } from "@/components/estimate/EstimateCalculator";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { DarkCTA } from "@/components/shared/DarkCTA";
import { Button } from "@/components/ui/button";
import { ALL_FAQS } from "@/lib/constants";

const estimateFaqs = ALL_FAQS.filter(
  (faq) => faq.category === "Estimates & Plans"
);

export function EstimateContent() {
  return (
    <>
      <PageBanner
        badge="Estimate"
        title="Build Your Own"
        titleHighlight="Project Plan"
        description="Pick a Starter plan for any service, or go Custom for a fully tailored quote. Choose exactly what your business needs. No hidden fees, no lock-ins."
        imageSrc="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1920&h=600&fit=crop"
        imageAlt="Estimate"
      />

      <section className="section-padding kraft-bg">
        <div className="container-custom">
          <SectionHeading
            badge={{ icon: IndianRupee, text: "Cost Calculator" }}
            title="Estimate Your"
            highlight="Project Cost"
            subtitle="Select the digital services you need, choose Starter or Custom for each, and see your estimated total instantly."
          />
          <EstimateCalculator />
        </div>
      </section>

      <section className="section-padding">
        <SectionHeading
          badge={{ icon: HelpCircle, text: "FAQ" }}
          title="Estimate"
          highlight="Questions"
          subtitle="Everything about estimates, payments and upgrades — answered."
        />
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-24">

              <div
                className="relative rounded-2xl overflow-hidden border-2 border-border shadow-xl paper-card"
                style={{ filter: "url(#sketchy)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1774437891793-2013f7b5a04a?w=800&h=600&fit=crop"
                  alt="Estimate FAQ"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-caveat text-lg font-bold text-white">
                    Confused about what it costs?
                  </p>
                  <p className="font-kalam text-xs text-white/80">
                    Book a free call — we&apos;ll build the right plan together.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <FAQAccordion faqs={estimateFaqs} />
              <div className="mt-8 text-center">
                <Button size="lg" variant="outline" asChild className="text-base px-8 py-6">
                  <Link href="/faq?category=Estimates%20%26%20Plans">
                    View All FAQs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DarkCTA
        variant="split"
        title="Ready to Get Your Custom Quote?"
        subtitle="Tell us what you need and we'll send a tailored plan within 24 hours. Free consultation — no obligations."
        buttonText="Get Your Free Quote"
      />
    </>
  );
}
