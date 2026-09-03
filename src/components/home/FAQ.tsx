"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FAQS } from "@/lib/constants";
import { FAQAccordion } from "@/components/shared/FAQAccordion";

export function FAQ() {
  return (
    <section className="section-padding kraft-bg relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
        <HelpCircle className="h-56 w-56" strokeWidth={1.5} />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-primary/20 bg-primary/5 px-4 py-1.5 font-patrick text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="font-caveat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Got Questions?{" "}
            <span className="text-primary">We&apos;ve Got Answers.</span>
          </h2>
          <p className="mt-4 font-kalam text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before getting started with GrowthZone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative lg:sticky lg:top-24"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border paper-card"
              style={{ filter: "url(#sketchy)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1774437891793-2013f7b5a04a?w=800&h=600&fit=crop"
                alt="Frequently Asked Questions"
                className="w-full h-72 sm:h-80 lg:h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            </div>

            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] max-w-sm rounded-2xl border-2 border-border bg-card p-5 shadow-xl paper-card"
              style={{ filter: "url(#sketchy)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border-2 border-dashed border-primary/20">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-caveat text-base font-bold text-foreground leading-tight">
                    Still have questions?
                  </h4>
                  <p className="font-kalam text-xs text-muted-foreground">
                    Our team is happy to help
                  </p>
                </div>
              </div>
              <Button asChild size="sm" className="w-full">
                <Link href="/contact">
                  Contact with Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=""
          >
            <FAQAccordion faqs={FAQS.slice(0, 6)} />

            <div className="mt-8 text-center lg:text-left">
              <Button size="lg" variant="outline" asChild className="text-base px-8 py-6">
                <Link href="/faq?category=General">
                  View All FAQs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
