"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { INDUSTRIES } from "@/lib/industries";

function FeaturedIndustry({
  industry,
  index,
}: {
  industry: (typeof INDUSTRIES)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/industries/${industry.slug}`} className="block h-full">
        <div
          className="relative h-full rounded-3xl overflow-hidden border-2 border-border bg-card hand-shadow hand-shadow-hover transition-all duration-300 hover:-translate-y-1"
          style={{ filter: "url(#sketchy)" }}
        >
          {/* Full background image */}
          <div className="relative h-72 sm:h-80 overflow-hidden">
            <img
              src={industry.image}
              alt={industry.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Stats badge - tilted */}
            <div
              className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-xl border border-white/50"
              style={{ transform: "rotate(3deg)" }}
            >
              <p className="font-caveat text-2xl font-bold text-foreground">
                {industry.stats}
              </p>
            </div>

            {/* Bottom content on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${industry.color} text-white shadow-lg border-2 border-white/20`}
                >
                  <industry.icon className="h-5 w-5" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 border border-white/10">
                  <Sparkles className="h-3 w-3 text-yellow-300" />
                  <span className="font-patrick text-[10px] font-bold text-white">
                    Popular
                  </span>
                </span>
              </div>
              <h3 className="font-caveat text-2xl font-bold text-white mb-1">
                {industry.title}
              </h3>
              <p className="font-kalam text-sm text-white/70 line-clamp-2">
                {industry.description}
              </p>
              <div className="mt-3 flex items-center gap-2 font-patrick text-xs font-bold text-white/90 group-hover:gap-3 transition-all">
                See How We Do It
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function CompactIndustry({
  industry,
  index,
}: {
  industry: (typeof INDUSTRIES)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group"
    >
      <Link href={`/industries/${industry.slug}`} className="block h-full">
        <div
          className="relative h-full flex flex-row rounded-2xl overflow-hidden border-2 border-border bg-card hand-shadow hand-shadow-hover transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20"
          style={{ filter: "url(#sketchy)" }}
        >
          {/* Image strip */}
          <div className="relative w-28 sm:w-32 shrink-0 overflow-hidden">
            <img
              src={industry.image}
              alt={industry.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />

            {/* Icon on image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${industry.color} text-white shadow-lg border-2 border-white/20 group-hover:scale-110 transition-transform`}
              >
                <industry.icon className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col justify-center flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <h3 className="font-caveat text-lg font-bold text-foreground leading-tight">
                {industry.title}
              </h3>
              <span
                className={`shrink-0 inline-flex items-center rounded-full ${industry.bgColor} px-2 py-0.5 font-patrick text-[10px] font-bold ${industry.textColor}`}
              >
                {industry.stats}
              </span>
            </div>
            <p className="font-kalam text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function IndustryShowcase() {
  const featured = INDUSTRIES.filter((i) => i.featured).slice(0, 2);
  const compact = INDUSTRIES.filter((i) => !i.featured).slice(0, 4);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-amber-500/3 blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-primary/20 bg-primary/5 px-4 py-1.5 font-patrick text-xs font-semibold uppercase tracking-wider text-primary mb-4"
            style={{ transform: "rotate(-1deg)" }}
          >
            Industries We Serve
          </span>
          <h2 className="font-caveat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            We Build Growth Strategies for{" "}
            <span className="text-primary">Every Industry</span>
          </h2>
          <p className="mt-4 font-kalam text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you run a restaurant or a coaching center — we have
            industry-specific solutions that work.
          </p>
        </motion.div>

        {/* Bento-style layout */}
        <div className="space-y-5">
          {/* Featured row - 2 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((industry, i) => (
              <FeaturedIndustry
                key={industry.title}
                industry={industry}
                index={i}
              />
            ))}
          </div>

          {/* Compact row - stacked horizontal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {compact.map((industry, i) => (
              <CompactIndustry
                key={industry.title}
                industry={industry}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-patrick text-sm font-bold text-primary hover:gap-3 transition-all"
          >
            View all industries we serve
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
