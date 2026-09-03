"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import {
  iconMap,
  serviceImages,
  serviceHighlights,
  serviceColors,
} from "@/lib/service-utils";

type Service = (typeof SERVICES)[0];

export function FeaturedServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];
  const image = serviceImages[service.slug];
  const highlight = serviceHighlights[service.slug];
  const colors = serviceColors[service.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link href={`/services/${service.slug}`} className="group block">
        <div
          className="relative rounded-3xl overflow-hidden border-2 border-border bg-card hand-shadow hand-shadow-hover transition-all duration-300 hover:-translate-y-1 grid grid-cols-1 lg:grid-cols-2"
          style={{ filter: "url(#sketchy)" }}
        >
          {/* Image side */}
          <div className="relative h-64 sm:h-80 lg:h-full min-h-[320px] overflow-hidden">
            <img
              src={image}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 lg:to-black/40" />

            {/* Floating badge */}
            <div className="absolute top-5 left-5">
              <div
                className={`flex items-center gap-2 rounded-full bg-gradient-to-br ${colors.gradient} px-4 py-2 text-white shadow-lg border-2 border-white/20`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-patrick text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              </div>
            </div>

            {/* Price tag */}
            <div
              className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl border border-white/50"
              style={{ transform: "rotate(2deg)" }}
            >
              <p className="font-patrick text-[10px] text-muted-foreground uppercase tracking-wider">
                Starting at
              </p>
              <p className="font-caveat text-2xl font-bold text-foreground">
                {service.pricing.starter}
              </p>
            </div>
          </div>

          {/* Content side */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-1.5 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400"
                />
              ))}
              <span className="font-patrick text-xs text-muted-foreground ml-1">
                4.9★ from 150+ clients
              </span>
            </div>

            <h3 className="font-caveat text-3xl sm:text-4xl font-bold text-foreground mb-2">
              {service.title}
            </h3>
            <p className="font-patrick text-sm font-medium text-primary mb-3">
              {highlight}
            </p>
            <p className="font-kalam text-sm text-muted-foreground leading-relaxed mb-6">
              {service.shortDescription}
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className={`inline-flex items-center rounded-full ${colors.bg} px-3 py-1.5 font-patrick text-xs font-semibold ${colors.text} border border-dashed border-current/15`}
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 font-patrick text-sm font-bold text-primary group-hover:gap-3 transition-all duration-300">
                View Full Details
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="h-4 w-px bg-border" />
              <span className="font-kalam text-xs text-muted-foreground">
                Free consultation
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function CompactServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = iconMap[service.icon];
  const image = serviceImages[service.slug];
  const highlight = serviceHighlights[service.slug];
  const colors = serviceColors[service.slug];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/services/${service.slug}`} className="group block h-full">
        <div
          className="relative flex flex-col sm:flex-row rounded-2xl overflow-hidden border-2 border-border bg-card hand-shadow hand-shadow-hover transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 h-full"
          style={{ filter: "url(#sketchy)" }}
        >
          {/* Compact image */}
          <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
            <img
              src={image}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent sm:bg-gradient-to-r" />

            {/* Icon overlay on mobile */}
            <div className="absolute bottom-3 left-3 sm:hidden">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${colors.gradient} text-white shadow-lg border-2 border-white/20`}
              >
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col justify-center flex-1 min-w-0">
            <div className="flex items-center gap-2.5 mb-2">
              <div
                className={`hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${colors.gradient} text-white shadow-md border-2 border-white/20 shrink-0 group-hover:scale-110 transition-transform`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-caveat text-xl font-bold text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="font-patrick text-xs font-medium text-primary">
                  {highlight}
                </p>
              </div>
            </div>

            <p className="font-kalam text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
              {service.shortDescription}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                {service.features.slice(0, 2).map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 font-patrick text-[10px] font-semibold text-muted-foreground border border-dashed border-border"
                  >
                    {f}
                  </span>
                ))}
                {service.features.length > 2 && (
                  <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 font-patrick text-[10px] font-semibold text-muted-foreground">
                    +{service.features.length - 2}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 font-patrick text-xs font-bold text-primary group-hover:gap-2 transition-all">
                {service.pricing.starter}
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
