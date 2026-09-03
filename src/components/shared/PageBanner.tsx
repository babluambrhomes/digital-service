"use client";

import { motion } from "framer-motion";

interface PageBannerProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  showBottomGradient?: boolean;
}

export function PageBanner({
  badge,
  title,
  titleHighlight,
  description,
  imageSrc,
  imageAlt,
  showBottomGradient = true,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.97_0.008_80/0.95)] via-[oklch(0.97_0.008_80/0.88)] to-[oklch(0.97_0.008_80/0.75)]" />
      </div>
      <div className="container-custom relative z-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-patrick text-sm font-semibold text-primary mb-6 border-2 border-dashed border-primary/20">
            {badge}
          </span>
          <h1 className="font-caveat text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            {title}{" "}
            <span className="gradient-text">{titleHighlight}</span>
          </h1>
          <p className="mt-6 font-kalam text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
      {showBottomGradient && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      )}
    </section>
  );
}
