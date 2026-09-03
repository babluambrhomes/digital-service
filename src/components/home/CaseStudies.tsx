"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { CaseStudyRow } from "@/components/shared/CaseStudyRow";

export function CaseStudies() {
  return (
    <section className="section-padding relative overflow-hidden kraft-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5 pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-green-500/20 bg-green-500/5 px-4 py-1.5 font-patrick text-xs font-semibold text-green-600 mb-4">
            <TrendingUp className="h-4 w-4" />
            Real Results
          </span>
          <h2 className="font-caveat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            See How We{" "}
            <span className="text-green-600">
              Transformed
            </span>{" "}
            These Businesses
          </h2>
          <p className="mt-4 font-kalam text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it — look at the real results we&apos;ve
            delivered with our digital services.
          </p>
        </motion.div>

        <div className="space-y-16">
          {CASE_STUDIES.slice(0, 3).map((study, index) => (
            <CaseStudyRow key={study.id} study={study} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-base px-8 py-6"
          >
            <Link href="/case-studies">
              See All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" asChild className="text-base px-8 py-6">
            <Link href="/contact">
              Get Similar Results for Your Business
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
