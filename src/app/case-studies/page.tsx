import { CASE_STUDIES } from "@/lib/caseStudies";
import { CaseStudyRow } from "@/components/shared/CaseStudyRow";
import { PageBanner } from "@/components/shared/PageBanner";
import { DarkCTA } from "@/components/shared/DarkCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Success Stories | GrowthZone",
  description:
    "Real success stories from Indian businesses we've helped grow — jewellery retail, healthcare, D2C e-commerce, CA firms, logistics and restaurants. See the measurable results we delivered.",
  keywords: ["digital agency case studies india", "growth stories sme india", "website seo results india"],
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageBanner
        badge="Real Results"
        title="See How We Transformed"
        titleHighlight="These Businesses"
        description="Real businesses. Real challenges. Real growth. Explore every success story and see the exact results we delivered for clients across industries."
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=600&fit=crop"
        imageAlt="Case Studies"
      />

      <section className="section-padding kraft-bg">
        <div className="container-custom">
          <div className="space-y-16">
            {CASE_STUDIES.map((study, index) => (
              <CaseStudyRow key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        title="Your Business Could Be Next"
        subtitle="Every business above started exactly where you are today. Tell us about your business and we'll build the same growth system for you."
        buttonText="Get Free Consultation"
      />
    </>
  );
}
