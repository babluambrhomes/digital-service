"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  FeaturedServiceCard,
  CompactServiceCard,
} from "@/components/services/ServiceCards";

export function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 kraft-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Complete Digital Services for Your Business"
          subtitle="From branding and development to AI and cloud — everything your business needs to compete and win online, all under one roof."
        />

        <div className="mt-12 space-y-5">
          {/* Featured large card */}
          <FeaturedServiceCard service={SERVICES[0]} />

          {/* Compact cards in a stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.slice(1, 5).map((service, i) => (
              <CompactServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="rounded-full">
            <Link href="/services" className="group">
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
