"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Mehta Jewellers", logo: "MJ" },
  { name: "RehabFirst Clinic", logo: "RF" },
  { name: "Lace-up Fashion", logo: "LF" },
  { name: "Agarwal Associates", logo: "AA" },
  { name: "Shree Balaji Logistics", logo: "SB" },
  { name: "SpiceRoute", logo: "SR" },
  { name: "Kaveri Traders", logo: "KT" },
  { name: "Sunrise Dental", logo: "SD" },
  { name: "UrbanNest Realty", logo: "UR" },
  { name: "Bharat Packers", logo: "BP" },
];

export function TrustedBy() {
  return (
    <section className="py-16 border-y-2 border-dashed border-border kraft-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="font-patrick text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by 150+ Businesses Across the Globe
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl border-2 border-dashed border-border bg-card/50 hand-shadow hover:hand-shadow-lg transition-all shrink-0"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary font-patrick text-xs font-bold text-white border-2 border-white/30"
                  aria-hidden="true"
                >
                  {brand.logo}
                </span>
                <span className="font-patrick text-sm font-semibold text-muted-foreground">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
          {[
            { number: "150+", label: "Happy Clients" },
            { number: "4.9★", label: "Client Rating" },
            { number: "200+", label: "Projects Done" },
            { number: "98%", label: "Client Retention" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="font-caveat text-3xl font-bold text-primary">
                {stat.number}
              </span>
              <span className="font-patrick text-xs text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
