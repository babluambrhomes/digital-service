"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
  variant?: "light" | "dark";
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({
  features,
  variant = "light",
  columns = 3,
}: FeatureGridProps) {
  const gridCols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
      {features.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="group"
        >
          <div
            className={`h-full rounded-2xl border-2 p-6 transition-all duration-200 hand-shadow hand-shadow-hover ${
              variant === "dark"
                ? "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"
                : "border-border bg-card hover:-translate-y-0.5"
            }`}
            style={{ filter: "url(#sketchy)" }}
          >
            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed ${
                item.color
                  ? `bg-gradient-to-br ${item.color} text-white border-transparent`
                  : variant === "dark"
                  ? "bg-white/10 text-white border-white/20"
                  : "bg-primary/10 text-primary border-primary/20"
              } group-hover:scale-110 transition-transform`}
            >
              <item.icon className="h-6 w-6" />
            </div>
            <h3
              className={`font-caveat text-xl font-bold mb-2 ${
                variant === "dark" ? "text-white" : "text-foreground"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`font-kalam text-sm leading-relaxed ${
                variant === "dark" ? "text-white/60" : "text-muted-foreground"
              }`}
            >
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
