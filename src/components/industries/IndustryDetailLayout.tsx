"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DarkCTA } from "@/components/shared/DarkCTA";
import { DoodleCheck } from "@/components/shared/DoodleDecorations";

interface IndustryDetailLayoutProps {
  title: string;
  description: string;
  image: string;
  stats: string;
  focus: string[];
  solutions: string[];
  color: string;
}

export function IndustryDetailLayout({
  title,
  description,
  image,
  stats,
  focus,
  solutions,
  color,
}: IndustryDetailLayoutProps) {
  return (
    <>
      <PageBanner
        badge="Industries We Serve"
        title={title}
        titleHighlight="Growth"
        description={description}
        imageSrc={image}
        imageAlt={title}
      />

      <section className="section-padding kraft-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 font-patrick text-sm font-bold text-primary hover:gap-3 transition-all mb-10"
            >
              <ArrowLeft className="h-4 w-4" />
              All Industries
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={image}
                alt={title}
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3] border-2 border-border"
                style={{ filter: "url(#sketchy)" }}
              />
              <div
                className="absolute -bottom-6 -right-6 rounded-xl bg-white/95 backdrop-blur-sm px-5 py-4 shadow-lg border border-white/50"
                style={{ transform: "rotate(3deg)" }}
              >
                <p className="font-caveat text-2xl font-bold text-foreground">
                  {stats}
                </p>
                <p className="font-patrick text-xs font-semibold text-muted-foreground">
                  Average Result
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-caveat text-3xl sm:text-4xl font-bold tracking-tight">
                We Help {title} Get{" "}
                <span className="text-primary">More Customers Online</span>
              </h2>
              <p className="font-kalam text-muted-foreground leading-relaxed">
                {description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {focus.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border-2 border-dashed border-border bg-card p-3 hand-shadow"
                  >
                    <DoodleCheck size={16} color="oklch(0.55 0.18 150)" />
                    <span className="font-patrick text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge={{ icon: Sparkles, text: "What We Do" }}
            title={`What We Build for`}
            highlight={title}
            subtitle={`Industry-specific solutions that turn ${title} businesses into customer magnets.`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group h-full"
              >
                <div
                  className={`h-full rounded-2xl border-2 border-dashed bg-gradient-to-br ${color} p-6 text-white shadow-lg hand-shadow hand-shadow-hover transition-all duration-200 hover:-translate-y-0.5`}
                  style={{ filter: "url(#sketchy)" }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 border-2 border-dashed border-white/30">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <p className="font-patrick text-sm font-bold leading-relaxed">
                    {solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        title={`Ready to Grow Your ${title} Business?`}
        subtitle="Book a free consultation and we'll build the same growth system for your business — with no obligations."
        buttonText="Grow My Business"
        buttonHref={`/contact?businessType=${encodeURIComponent(title)}`}
      />
    </>
  );
}
