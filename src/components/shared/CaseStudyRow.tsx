"use client";

import { motion } from "framer-motion";
import { DoodleCheck, DoodleX } from "@/components/shared/DoodleDecorations";
import type { CaseStudy } from "@/lib/caseStudies";

export function CaseStudyRow({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
        index % 2 === 1 ? "lg:direction-rtl" : ""
      }`}
    >
      <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <div
          className="rounded-2xl overflow-hidden shadow-2xl border-2 border-border paper-card"
          style={{ filter: "url(#sketchy)" }}
        >
          <img
            src={study.image}
            alt={study.business}
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div
          className="absolute -top-4 -left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-card text-primary shadow-xl border-2 border-primary/30"
          style={{ transform: "rotate(-3deg)" }}
        >
          <span className="font-caveat text-2xl font-bold leading-none">
            {index + 1}
          </span>
        </div>
        <div
          className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl px-5 py-3 shadow-xl border-2 border-white/20"
          style={{ transform: "rotate(3deg)" }}
        >
          <p className="font-caveat text-3xl font-bold">{study.improvement}</p>
          <p className="font-patrick text-xs font-semibold opacity-90">
            More Revenue
          </p>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-dashed border-white/30 bg-white/20 backdrop-blur-sm px-3 py-1 font-patrick text-xs font-semibold text-white">
              {study.industry}
            </span>
            <span className="inline-flex items-center rounded-full border border-dashed border-white/30 bg-white/20 backdrop-blur-sm px-3 py-1 font-patrick text-xs font-semibold text-white">
              {study.location}
            </span>
          </div>
        </div>
      </div>

      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
        <h3 className="font-caveat text-2xl font-bold mb-2">{study.business}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl border-2 border-dashed border-destructive/20 bg-destructive/5 p-4">
            <h4 className="font-patrick text-xs font-bold uppercase tracking-wider text-destructive mb-3">
              {study.before.title}
            </h4>
            <ul className="space-y-2">
              {study.before.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-kalam text-xs text-muted-foreground"
                >
                  <DoodleX size={12} color="oklch(0.55 0.2 25)" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-patrick text-xs font-bold text-destructive">
              {study.before.metric}
            </p>
          </div>

          <div className="rounded-xl border-2 border-dashed border-green-500/20 bg-green-500/5 p-4">
            <h4 className="font-patrick text-xs font-bold uppercase tracking-wider text-green-600 mb-3">
              {study.after.title}
            </h4>
            <ul className="space-y-2">
              {study.after.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-kalam text-xs text-muted-foreground"
                >
                  <DoodleCheck size={12} color="oklch(0.55 0.18 150)" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-patrick text-xs font-bold text-green-600">
              {study.after.metric}
            </p>
          </div>
        </div>

        <div
          className="rounded-xl border-2 border-border bg-card p-4 paper-card"
          style={{ filter: "url(#sketchy)" }}
        >
          <svg
            className="h-6 w-6 text-primary/20 mb-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
          <p className="font-kalam text-sm italic text-muted-foreground mb-3">
            &ldquo;{study.testimonial}&rdquo;
          </p>
          <p className="font-patrick text-xs font-semibold text-foreground">
            — {study.author}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
