"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES, type Industry } from "@/lib/industries";
import { PageBanner } from "@/components/shared/PageBanner";
import { DarkCTA } from "@/components/shared/DarkCTA";
import { DoodleCheck } from "@/components/shared/DoodleDecorations";

function IndustryCard({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) {
  const Icon = industry.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="group h-full"
    >
      <div
        className="relative h-full flex flex-col rounded-2xl overflow-hidden border-2 border-border bg-card hand-shadow hand-shadow-hover transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
        style={{ filter: "url(#sketchy)" }}
      >
        {/* Image header */}
        <div className="relative h-44 shrink-0 overflow-hidden">
          <img
            src={industry.image}
            alt={industry.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Icon + stats overlay */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${industry.color} text-white shadow-lg border-2 border-white/20 group-hover:scale-110 transition-transform`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <span
              className={`inline-flex items-center rounded-full ${industry.bgColor} px-3 py-1 font-patrick text-[11px] font-bold ${industry.textColor} border border-white/40 bg-white/80 backdrop-blur-sm`}
            >
              {industry.stats}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-caveat text-xl font-bold text-foreground mb-2">
            {industry.title}
          </h3>
          <p className="font-kalam text-sm text-muted-foreground leading-relaxed mb-4">
            {industry.description}
          </p>

          <ul className="space-y-2 mb-5">
            {industry.focus.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 font-patrick text-sm text-muted-foreground"
              >
                <DoodleCheck size={14} color="oklch(0.55 0.18 150)" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-2">
            <Link
              href={`/industries/${industry.slug}`}
              className="inline-flex items-center gap-2 font-patrick text-sm font-bold text-primary group-hover:gap-3 transition-all"
            >
              View Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <PageBanner
        badge="Industries We Serve"
        title="Industries We've Helped"
        titleHighlight="Grow Online"
        description="From restaurants to real estate, we've built growth systems for businesses in every industry. See all the industries we work with — and what we do for each one."
        imageSrc="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=600&fit=crop"
        imageAlt="Industries We Serve"
      />

      <section className="section-padding kraft-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((industry, i) => (
              <IndustryCard key={industry.title} industry={industry} index={i} />
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        title="Your Industry Is Next"
        subtitle="We've helped 150+ businesses with our digital services. Tell us about your industry and we'll build the same success for you."
        buttonText="Get Free Consultation"
      />
    </>
  );
}
