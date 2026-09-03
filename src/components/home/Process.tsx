"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  DoodleArrowRight,
  DoodleStar,
} from "@/components/shared/DoodleDecorations";
import { Phone, PenTool, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Free Consultation",
    description:
      "We understand your business, goals, and challenges, and recommend the right digital solutions.",
    accentColor: "oklch(0.55 0.18 250)",
    iconColor: "text-blue-600",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Plan & Architecture",
    description:
      "We design the solution, architecture, and roadmap tailored to your needs and get your approval.",
    accentColor: "oklch(0.50 0.18 290)",
    iconColor: "text-purple-600",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Build & Deploy",
    description:
      "We build, test, and deploy with modern tech — websites, apps, AI, cloud, and more.",
    accentColor: "oklch(0.60 0.18 50)",
    iconColor: "text-orange-600",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Optimize & Scale",
    description:
      "We monitor performance, optimize systems, and scale your solutions as your business grows.",
    accentColor: "oklch(0.55 0.18 155)",
    iconColor: "text-emerald-600",
  },
];

function NodeCircle({ step }: { step: (typeof steps)[0] }) {
  return (
    <div
      className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed bg-card shadow-lg"
      style={{ borderColor: `${step.accentColor}66` }}
    >
      <step.icon className={`h-7 w-7 ${step.iconColor}`} />
      <span
        className="absolute -top-2 -right-3 flex h-7 w-7 items-center justify-center rounded-full font-caveat text-sm font-bold text-white shadow-md"
        style={{ backgroundColor: step.accentColor }}
      >
        {step.number}
      </span>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden kraft-bg">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-[10%] w-2 h-2 rounded-full bg-primary/20 animate-float" />
        <div
          className="absolute top-20 right-[15%] w-3 h-3 rounded-full bg-primary/15"
          style={{ animation: "float-slow 6s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-16 left-[20%] w-2.5 h-2.5 rounded-full bg-primary/10"
          style={{ animation: "float 4s ease-in-out infinite 1s" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={{ icon: Rocket, text: "Our Process" }}
          title="How It Works"
          highlight="4 Simple Steps"
          subtitle="Launching a digital project shouldn't be complicated. Here's our proven process that's delivered results for 150+ businesses."
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block mt-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-10 left-[12%] right-[12%] border-t-2 border-dashed border-primary/30" />
            {/* End arrow */}
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 hidden xl:block">
              <DoodleArrowRight size={24} color="oklch(0.45 0.18 250 / 0.4)" />
            </div>

            <div className="grid grid-cols-4 gap-6 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                  className="text-center"
                >
                  <div className="relative z-10 inline-flex">
                    <NodeCircle step={step} />
                  </div>
                  <h3 className="mt-6 font-caveat text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-kalam text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden mt-14 relative">
          <div className="absolute left-10 top-4 bottom-4 border-l-2 border-dashed border-primary/30" />
          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative flex items-start gap-6"
              >
                <div className="relative z-10 shrink-0">
                  <NodeCircle step={step} />
                </div>
                <div className="pt-4">
                  <h3 className="font-caveat text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-kalam text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-dashed border-primary/20 bg-primary/5 px-6 py-3">
            <DoodleStar
              size={16}
              color="oklch(0.45 0.18 250)"
              className="animate-wiggle"
            />
            <span className="text-sm text-muted-foreground">
              Ready to get started?{" "}
              <span className="font-bold text-primary">
                It all begins with a free call.
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
