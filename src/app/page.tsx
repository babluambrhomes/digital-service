import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { Services } from "@/components/home/Services";
import { IndustryShowcase } from "@/components/home/IndustryShowcase";

import { HowItWorks } from "@/components/home/Process";
import { CounterStats } from "@/components/home/CounterStats";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonials } from "@/components/home/Testimonials";

import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { BlogSection } from "@/components/home/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ProblemSolution />
      <Services />
      <IndustryShowcase />
      <HowItWorks />
      <CounterStats />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
      <BlogSection />
    </>
  );
}
