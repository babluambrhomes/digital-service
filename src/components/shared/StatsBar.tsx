"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface StatItem {
  icon?: LucideIcon;
  value: string;
  label: string;
  description?: string;
}

interface StatsBarProps {
  stats: StatItem[];
  variant?: "light" | "dark" | "bordered";
}

export function StatsBar({ stats, variant = "bordered" }: StatsBarProps) {
  const wrapperClass =
    variant === "dark"
      ? "py-16 dark-kraft-bg"
      : variant === "bordered"
      ? "py-12 border-y-2 border-dashed border-border kraft-bg"
      : "py-12 kraft-bg";

  return (
    <section className={wrapperClass}>
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              {stat.icon && (
                <div
                  className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed ${
                    variant === "dark"
                      ? "bg-white/10 text-white border-white/20"
                      : "bg-primary/10 text-primary border-primary/20"
                  }`}
                >
                  <stat.icon className="h-6 w-6" />
                </div>
              )}
              <p
                className={`font-caveat text-4xl font-bold ${
                  variant === "dark" ? "text-white" : "text-primary"
                }`}
              >
                {stat.value}
              </p>
              <p
                className={`font-patrick text-sm font-semibold mt-1 ${
                  variant === "dark" ? "text-white/80" : "text-foreground"
                }`}
              >
                {stat.label}
              </p>
              {stat.description && (
                <p
                  className={`font-kalam text-xs mt-1 ${
                    variant === "dark" ? "text-white/50" : "text-muted-foreground"
                  }`}
                >
                  {stat.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
