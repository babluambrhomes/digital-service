"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { DoodleCheck } from "./DoodleDecorations";

interface Step {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  details?: string[];
  color: string;
}

interface ProcessStepsProps {
  steps: Step[];
  variant?: "timeline" | "grid" | "horizontal";
}

export function ProcessSteps({ steps, variant = "timeline" }: ProcessStepsProps) {
  if (variant === "horizontal") {
    return (
      <div className="relative max-w-5xl mx-auto">
        {/* Hand-drawn horizontal connector line */}
        <div className="hidden lg:block absolute left-6 right-6 top-7 -translate-y-1/2">
          <svg
            width="100%"
            height="4"
            className="overflow-visible"
            preserveAspectRatio="none"
          >
            <path
              d="M2,2 Q12,0 24,2 Q36,4 48,2 Q60,0 72,2 Q84,4 96,2 Q108,0 120,2 Q132,4 144,2 Q156,0 168,2 Q180,4 192,2 Q204,0 216,2 Q228,4 240,2 Q252,0 264,2 Q276,4 288,2 Q300,0 312,2 Q324,4 336,2 Q348,0 360,2 Q372,4 384,2 Q396,0 408,2 Q420,4 432,2 Q444,0 456,2 Q468,4 480,2 Q492,0 504,2 Q516,4 528,2 Q540,0 552,2 Q564,4 576,2 Q588,0 600,2 Q612,4 624,2 Q636,0 648,2 Q660,4 672,2 Q684,0 696,2 Q708,4 720,2 Q732,0 744,2 Q756,4 768,2 Q780,0 792,2 Q804,4 816,2 Q828,0 840,2 Q852,4 864,2 Q876,0 888,2 Q900,4 912,2 Q924,0 936,2 Q948,4 960,2 Q972,0 984,2 Q996,4 1008,2"
              stroke="oklch(0.45 0.18 250 / 0.25)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-full rounded-2xl border-2 border-border paper-card p-6 text-center hand-shadow hand-shadow-hover transition-all duration-200 hover:-translate-y-0.5" style={{ filter: "url(#sketchy)" }}>
                {/* Node circle on the line */}
                <div className="absolute left-1/2 -top-6 -translate-x-1/2 z-10">
                  <div className="relative">
                    <svg width="48" height="48" viewBox="0 0 48 48" className="absolute -top-0 -left-0">
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        stroke="oklch(0.45 0.18 250 / 0.3)"
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                    </svg>
                    <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative z-10`}>
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <div className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${step.color} px-3 py-1 mb-3`}>
                    <span className="text-[11px] font-patrick font-bold text-white uppercase tracking-wider">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="font-caveat text-xl font-bold mb-2">{step.title}</h3>
                  <p className="font-kalam text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div
              className="rounded-2xl border-2 border-border paper-card p-6 text-center h-full hand-shadow hand-shadow-hover transition-all duration-200 hover:-translate-y-0.5"
              style={{ filter: "url(#sketchy)" }}
            >
              <div
                className={`inline-flex items-center rounded-full bg-gradient-to-r ${step.color} px-3 py-1 mb-4`}
              >
                <span className="text-[11px] font-patrick font-bold text-white uppercase tracking-wider">
                  Step {step.step}
                </span>
              </div>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-primary/20 bg-primary/10 text-primary">
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="font-caveat text-xl font-bold mb-2">{step.title}</h3>
              <p className="font-kalam text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Hand-drawn squiggly connector line */}
      <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 sm:-translate-x-px">
        <svg
          width="3"
          height="100%"
          className="overflow-visible"
          preserveAspectRatio="none"
        >
          <path
            d="M1.5,0 Q4,20 1.5,40 Q-1,60 1.5,80 Q4,100 1.5,120 Q-1,140 1.5,160 Q4,180 1.5,200 Q-1,220 1.5,240 Q4,260 1.5,280 Q-1,300 1.5,320 Q4,340 1.5,360 Q-1,380 1.5,400 Q4,420 1.5,440 Q-1,460 1.5,480 Q4,500 1.5,520 Q-1,540 1.5,560 Q4,580 1.5,600"
            stroke="oklch(0.45 0.18 250 / 0.25)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {steps.map((step, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative flex items-start gap-6 sm:gap-0 mb-12 last:mb-0 ${
              isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            {/* Hand-drawn circle node on timeline */}
            <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
              <div className="relative">
                <svg width="48" height="48" viewBox="0 0 48 48" className="absolute -top-0 -left-0">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="oklch(0.45 0.18 250 / 0.3)"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />
                </svg>
                <div
                  className={`h-12 w-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative z-10`}
                >
                  <step.icon className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            {/* Card */}
            <div
              className={`ml-[calc(1.5rem+1.5rem+1rem)] sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                isLeft ? "sm:pr-8 sm:text-right" : "sm:pl-8"
              }`}
            >
              <div
                className="rounded-2xl border-2 border-border paper-card p-6 hand-shadow hand-shadow-hover transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ filter: "url(#sketchy)" }}
              >
                <div
                  className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${step.color} px-3 py-1 mb-3`}
                >
                  <span className="text-[11px] font-patrick font-bold text-white uppercase tracking-wider">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-caveat text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>

                <p className="font-kalam text-sm text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>

                {step.details && (
                  <ul
                    className={`space-y-2 ${isLeft ? "sm:text-left" : ""}`}
                  >
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 font-kalam text-xs text-muted-foreground"
                      >
                        <DoodleCheck size={14} color="oklch(0.55 0.15 150)" className="shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
