"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  DoodleCheck,
  DoodleCircle,
  DoodleStar,
  DoodleX,
} from "@/components/shared/DoodleDecorations";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    improvement: "+250%",
    improvementLabel: "Faster Development",
    tags: ["Web Development", "Custom Software"],
    title: "From Manual Processes to Digital Solutions",
    problem: {
      title: "Your Problem",
      points: [
        "Manual workflows eating up your team's productive hours",
      ],
      metric: "Hours wasted daily on repetitive tasks",
    },
    solution: {
      title: "Our Solution",
      points: [
        "Custom web applications built to your workflow",
        "Automation that runs 24/7",
        "Modern tech stack for blazing speed",
      ],
      metric: "+250% operational efficiency",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    improvement: "24/7",
    improvementLabel: "AI-Powered Support",
    tags: ["AI Chatbots", "Automation"],
    title: "From Missed Calls to AI-Powered Responses",
    problem: {
      title: "Your Problem",
      points: [
        "Missing customer queries after business hours",
      ],
      metric: "Leads lost to slow response times",
    },
    solution: {
      title: "Our Solution",
      points: [
        "AI chatbots answering instantly, 24/7",
        "Automated lead capture and follow-ups",
        "Smart workflow automation",
      ],
      metric: "Zero missed opportunities",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    improvement: "40-50%",
    improvementLabel: "Cost Savings",
    tags: ["Cross-Platform Apps", "Flutter"],
    title: "From Expensive Native Apps to Cross-Platform Power",
    problem: {
      title: "Your Problem",
      points: [
        "Building separate Android and iOS apps costs a fortune",
      ],
      metric: "Double the cost, double the timeline",
    },
    solution: {
      title: "Our Solution",
      points: [
        "One codebase, both stores",
        "Flutter & React Native expertise",
        "Native-quality performance",
      ],
      metric: "40-50% cost savings",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
    improvement: "99.9%",
    improvementLabel: "Uptime Guaranteed",
    tags: ["Cloud & DevOps", "AWS"],
    title: "From Server Downtime to Cloud Reliability",
    problem: {
      title: "Your Problem",
      points: [
        "Server crashes and downtime costing you customers",
      ],
      metric: "Revenue lost every minute of downtime",
    },
    solution: {
      title: "Our Solution",
      points: [
        "AWS & Cloudflare infrastructure",
        "CI/CD pipelines for zero-downtime deploys",
        "24/7 monitoring & alerting",
      ],
      metric: "99.9% uptime guaranteed",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop",
    improvement: "3x",
    improvementLabel: "More Trust & Leads",
    tags: ["Branding & Design", "Identity"],
    title: "From Unprofessional Look to Brand That Builds Trust",
    problem: {
      title: "Your Problem",
      points: [
        "Outdated logo and inconsistent brand visuals",
      ],
      metric: "Customers judge you in 3 seconds",
    },
    solution: {
      title: "Our Solution",
      points: [
        "Complete brand identity — logo, colors, fonts",
        "Business cards, letterheads, brand guidelines",
        "Professional stationery and digital assets",
      ],
      metric: "3x more customer trust",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1200&h=800&fit=crop",
    improvement: "60%",
    improvementLabel: "More Enquiries",
    tags: ["WhatsApp Business", "Automation"],
    title: "From Missed WhatsApp Messages to 24/7 Sales Channel",
    problem: {
      title: "Your Problem",
      points: [
        "Customers message on WhatsApp but you reply late",
      ],
      metric: "Leads lost to slow or no response",
    },
    solution: {
      title: "Our Solution",
      points: [
        "WhatsApp Business profile with catalog & auto-replies",
        "Click-to-Chat buttons on your website",
        "CRM integration to track every lead",
      ],
      metric: "60% more enquiries captured",
    },
  },
];

function ProblemSolutionRow({
  item,
  index,
}: {
  item: (typeof items)[0];
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${reversed ? "lg:direction-rtl" : ""
        }`}
    >
      {/* VISUAL SIDE */}
      <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
        <div
          className="rounded-2xl overflow-hidden shadow-2xl border-2 border-border paper-card"
          style={{ filter: "url(#sketchy)" }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* <div
          className="absolute -top-4 -left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-card text-primary shadow-xl border-2 border-primary/30"
          style={{ transform: "rotate(-3deg)" }}
        >
          <span className="font-caveat text-2xl font-bold leading-none">
            {index + 1}
          </span>
        </div> */}

        <div
          className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl px-5 py-3 shadow-xl border-2 border-white/20"
          style={{ transform: "rotate(3deg)" }}
        >
          <p className="font-caveat text-3xl font-bold">{item.improvement}</p>
          <p className="font-patrick text-xs font-semibold opacity-90">
            {item.improvementLabel}
          </p>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-dashed border-white/30 bg-white/20 backdrop-blur-sm px-3 py-1 font-patrick text-xs font-semibold text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT SIDE */}
      <div className={reversed ? "lg:order-1" : ""}>
        <h3 className="font-caveat text-2xl sm:text-3xl font-bold mb-6">
          {item.title}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* PROBLEM */}
          <div className="rounded-xl border-2 border-dashed border-destructive/20 bg-destructive/5 p-4">
            <h4 className="font-patrick text-xs font-bold uppercase tracking-wider text-destructive mb-3">
              {item.problem.title}
            </h4>
            <ul className="space-y-2">
              {item.problem.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-kalam text-xs text-muted-foreground"
                >
                  <DoodleX size={12} color="oklch(0.55 0.2 25)" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-patrick text-xs font-bold text-destructive">
              {item.problem.metric}
            </p>
          </div>

          {/* SOLUTION */}
          <div className="rounded-xl border-2 border-dashed border-green-500/20 bg-green-500/5 p-4">
            <h4 className="font-patrick text-xs font-bold uppercase tracking-wider text-green-600 mb-3">
              {item.solution.title}
            </h4>
            <ul className="space-y-2">
              {item.solution.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-kalam text-xs text-muted-foreground"
                >
                  <DoodleCheck size={12} color="oklch(0.55 0.18 150)" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-patrick text-xs font-bold text-green-600">
              {item.solution.metric}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProblemSolution() {
  return (
    <section className="pt-20 sm:pt-28 kraft-bg relative overflow-hidden">
      {/* Floating doodle decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <DoodleStar
          className="absolute top-12 left-[6%] text-primary/15 animate-float"
          size={28}
        />
        <DoodleStar
          className="absolute top-24 right-[8%] text-amber-400/20 animate-float-slow"
          size={20}
        />
        <DoodleCircle
          className="absolute bottom-24 left-[10%] text-primary/10 animate-float-slow"
          size={36}
        />
        <DoodleStar
          className="absolute bottom-16 right-[12%] text-primary/10 animate-float"
          size={22}
        />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          badge={{ icon: Sparkles, text: "Transform Your Business" }}
          title="Your Challenge."
          highlight="Our Expertise."
          subtitle="No more guesswork. See the exact problem holding your business back — and the proven digital solutions we deliver, side by side."
        />

        <div className="mt-14 space-y-16">
          {items.map((item, i) => (
            <ProblemSolutionRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
