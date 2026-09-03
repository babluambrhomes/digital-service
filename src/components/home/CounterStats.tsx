"use client";

import { motion } from "framer-motion";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";

const stats = [
  { number: 150, suffix: "+", label: "Happy Clients" },
  { number: 200, suffix: "+", label: "Projects Completed" },
  { number: 10, suffix: "+", label: "Service Categories" },
  { number: 4.9, suffix: "★", label: "Client Rating" },
];

function StatCell({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const { count, ref } = useAnimatedCounter(stat.number, stat.suffix);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group"
    >
      <div
        className="rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.04] backdrop-blur-sm p-8 sm:p-10 text-center h-full transition-all hover:bg-white/[0.08] hover:border-white/25 hand-shadow"
        style={{ filter: "url(#sketchy)" }}
      >
        <p className="font-caveat text-5xl sm:text-6xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-orange-300 transition-all">
          {count}
        </p>
        <p className="font-patrick text-sm sm:text-base font-semibold text-white/70 mt-3">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export function CounterStats() {
  return (
    <section className="py-20 relative overflow-hidden dark-kraft-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-caveat text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Numbers That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
              Speak
            </span>
          </h2>
          <p className="mt-4 font-kalam text-lg text-white/60 max-w-2xl mx-auto">
            We deliver enterprise-quality digital solutions at startup-friendly
            prices. Here&apos;s what we&apos;ve achieved for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <StatCell key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
