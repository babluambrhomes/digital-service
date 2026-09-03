"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { SquigglyLine } from "./DoodleDecorations";

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  badge?: {
    icon?: LucideIcon;
    text: string;
    variant?: "primary" | "dark";
  };
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  highlight,
  subtitle,
  badge,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
    >
      {badge && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-patrick text-sm font-semibold mb-4 border-2 border-dashed ${
            badge.variant === "dark"
              ? "bg-white/10 text-white border-white/20"
              : "bg-primary/10 text-primary border-primary/20"
          }`}
        >
          {badge.icon && <badge.icon className="h-4 w-4" />}
          {badge.text}
        </span>
      )}
      <h2 className="font-caveat text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        {title}{" "}
        {highlight && (
          <span className="relative inline-block text-primary">
            {highlight}
            <SquigglyLine
              color="oklch(0.45 0.18 250)"
              className="absolute -bottom-1 left-0 w-full"
            />
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 font-kalam text-lg text-muted-foreground max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
