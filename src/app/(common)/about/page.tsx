"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageBanner } from "@/components/shared/PageBanner";
import { StatsBar } from "@/components/shared/StatsBar";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { DarkCTA } from "@/components/shared/DarkCTA";
import { Testimonials } from "@/components/home/Testimonials";
import { DoodleCheck } from "@/components/shared/DoodleDecorations";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Target,
  Lightbulb,
  Heart,
  Users,
  Rocket,
  Globe,
  Award,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Medal,
  Trophy,
} from "lucide-react";

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make world-class digital services accessible and affordable for every growing business. From branding to AI, we help startups, SMEs, and enterprises build a complete digital presence.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Rocket,
    title: "Our Vision",
    description:
      "To become India's most trusted full-stack digital services partner, helping 1000+ businesses grow with websites, apps, software, AI, cloud, and marketing by 2026.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "Our Promise",
    description:
      "We treat your business like our own. Every strategy, every design, every line of code is made with one goal — helping you win more customers.",
    color: "from-pink-500 to-rose-600",
  },
];

const journey = [
  {
    year: "2024",
    title: "Founded",
    description:
      "Started with a single client — a startup in Mumbai that needed a website and brand identity.",
    icon: Globe,
    color: "from-blue-600 to-indigo-600",
  },
  {
    year: "2025",
    title: "First 25 Clients",
    description:
      "Expanded to 25+ businesses across India with websites, apps, and marketing services.",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
  },
  {
    year: "2025",
    title: "AI & Cloud Services",
    description:
      "Launched dedicated AI, automation, and cloud & DevOps service lines.",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
  },
  {
    year: "2026",
    title: "150+ Clients",
    description:
      "Crossed 150 happy clients with a 4.9★ client rating.",
    icon: Star,
    color: "from-pink-500 to-rose-600",
  },
  {
    year: "2026",
    title: "Pan-India",
    description:
      "Expanded to 25+ cities across India with 10+ service categories.",
    icon: Award,
    color: "from-purple-500 to-violet-600",
  },
  {
    year: "2027",
    title: "Next Chapter",
    description:
      "Scaling advanced AI products, custom software, and enterprise cloud solutions.",
    icon: Rocket,
    color: "from-cyan-500 to-blue-600",
  },
];

const culture = [
  {
    title: "We're obsessed with results",
    description:
      "Every decision we make is driven by one question: will this help our clients get more customers?",
    icon: TrendingUp,
  },
  {
    title: "We explain everything in simple language",
    description:
      "No jargon, no tech talk. We explain what we're doing and why it matters for your business.",
    icon: Users,
  },
  {
    title: "We respond fast",
    description:
      "Got a question? Need a change? We respond within 2 hours, not 2 days.",
    icon: Clock,
  },
  {
    title: "We do what we promise",
    description:
      "If we commit to a deadline, we meet it. Period.",
    icon: Shield,
  },
];

const awards = [
  { title: "Best Digital Agency 2024", org: "Business Awards India" },
  { title: "Top SEO Company", org: "Clutch.co" },
  { title: "Client Satisfaction Award", org: "GoodFirms" },
  { title: "Fastest Growing Agency", org: "Startup Awards 2024" },
];

const values = [
  {
    icon: Target,
    title: "Results First",
    description:
      "Every strategy, every campaign, every decision is measured by one thing — results for your business.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve with AI tools, latest SEO techniques, and cutting-edge web technologies.",
  },
  {
    icon: Heart,
    title: "Client Love",
    description:
      "Your success is our success. We go above and beyond because we genuinely care about your business.",
  },
  {
    icon: Users,
    title: "Transparency",
    description:
      "No jargon, no hidden fees, no surprises. You always know exactly what we're doing and why.",
  },
];

const valuesColors = [
  "from-blue-600 to-indigo-600",
  "from-amber-500 to-orange-600",
  "from-pink-500 to-rose-600",
  "from-emerald-500 to-teal-600",
];

const valuesGrid = values.map((v, i) => ({
  ...v,
  color: valuesColors[i] || "from-blue-600 to-indigo-600",
}));

const cultureGrid = culture.map((c, i) => ({
  ...c,
  color: valuesColors[i] || "from-emerald-500 to-teal-600",
}));

export default function AboutPage() {
  return (
    <>
      <PageBanner
        badge="About GrowthZone"
        title="Your Complete Digital"
        titleHighlight="Growth Partner"
        description="We're a team of passionate designers, developers, and strategists who build complete digital experiences — from brand identity to websites, apps, software, AI, and cloud."
        imageSrc="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1920&h=800&fit=crop"
        imageAlt="Team Collaboration"
        showBottomGradient={false}
      />

      <StatsBar stats={STATS} variant="bordered" />

      <section className="section-padding kraft-bg">
        <div className="container-custom">
          <SectionHeading
            title="What Drives Us"
            subtitle="Three core principles that guide everything we do."
          />
          <FeatureGrid features={missionVision} columns={3} />
        </div>
      </section>

      <section className="section-padding kraft-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-caveat text-3xl font-bold">Our Story</h2>
              <p className="font-kalam text-muted-foreground leading-relaxed">
                GrowthZone was born from a simple observation: growing
                businesses — the startups, SMEs, and local brands that power
                our economy — were being left behind when it came to digital.
              </p>
              <p className="font-kalam text-muted-foreground leading-relaxed">
                They were told they needed a website here, an app there, a
                marketing budget everywhere — without a partner who could
                handle the whole picture. We set out to change that.
              </p>
              <p className="font-kalam text-muted-foreground leading-relaxed">
                Today, we combine human expertise with AI-powered tools to
                deliver faster, better, and more affordable results across 10
                service categories. Whether it&apos;s building a stunning brand,
                a web or mobile app, custom software, automation, or a strong
                SEO strategy — we handle it all so you can focus on what you
                do best.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "150+ Happy Clients",
                  "200+ Projects",
                   "10+ Service Categories",
                  "4.9★ Client Rating",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <DoodleCheck size={18} color="oklch(0.45 0.18 250)" />
                    <span className="font-kalam text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=600&fit=crop"
                alt="Our Team Working"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3] border-2 border-border"
                style={{ filter: "url(#sketchy)" }}
              />
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary text-primary-foreground p-5 shadow-lg hidden md:block border-2 border-white/20" style={{ transform: "rotate(3deg)" }}>
                <p className="font-caveat text-3xl font-bold">2+</p>
                <p className="font-patrick text-sm opacity-90">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge={{ icon: Globe, text: "Our Journey" }}
            title="From a Single Client to"
            highlight="150+ Businesses"
            subtitle="We started in 2024 with one startup in Mumbai. Today, we serve 150+ businesses across India with 10+ digital service categories."
          />

          <div className="relative">
            <button className="journey-prev absolute -left-2 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-border bg-card shadow-md transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg hidden md:flex" style={{ filter: "url(#sketchy)" }}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="journey-next absolute -right-2 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-border bg-card shadow-md transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg hidden md:flex" style={{ filter: "url(#sketchy)" }}>
              <ChevronRight className="h-5 w-5" />
            </button>

            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1.1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: ".journey-prev",
                nextEl: ".journey-next",
              }}
              pagination={{
                clickable: true,
                el: ".journey-pagination",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2.2,
                },
                1024: {
                  slidesPerView: 2.2,
                },
              }}
              className="pb-12 journey-swiper"
            >
              {journey.map((milestone) => (
                <SwiperSlide key={milestone.year}>
                  <div
                    className="rounded-2xl border-2 border-border paper-card p-6 h-full w-full mx-auto flex flex-col hand-shadow hand-shadow-hover transition-all duration-200 hover:-translate-y-0.5"
                    style={{ filter: "url(#sketchy)" }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`inline-flex items-center rounded-full bg-gradient-to-r ${milestone.color} px-3 py-1`}
                      >
                        <span className="text-xs font-patrick font-bold text-white uppercase tracking-wider">
                          {milestone.year}
                        </span>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-primary/20 bg-primary/10 text-primary">
                        <milestone.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="font-caveat text-xl font-bold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-kalam text-sm text-muted-foreground leading-relaxed flex-1">
                      {milestone.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="journey-pagination flex justify-center gap-2 mt-2" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge={{ icon: Heart, text: "What We Stand For" }}
            title="The Values That Guide"
            highlight="Everything We Do"
            subtitle="These aren't just words on a wall — they're how we run our company and treat every client."
          />
          <FeatureGrid features={cultureGrid} columns={4} />
          <div className="mt-6">
            <FeatureGrid features={valuesGrid} columns={4} />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge={{ icon: Trophy, text: "Recognition" }}
            title="Awards &"
            highlight="Recognition"
            subtitle="We're honoured to be recognised by leading platforms and industry bodies."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div
                  className="rounded-2xl border-2 border-dashed border-border bg-card p-6 text-center h-full hand-shadow hand-shadow-hover transition-all duration-200 hover:-translate-y-0.5"
                  style={{ filter: "url(#sketchy)" }}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-white shadow-lg">
                    <Medal className="h-7 w-7" />
                  </div>
                  <h3 className="font-caveat text-lg font-bold">{award.title}</h3>
                  <p className="font-patrick text-sm text-muted-foreground mt-1">{award.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <DarkCTA
        title="Ready to Work With Us?"
        subtitle="Let's discuss how we can help your business grow online. Free consultation — no obligations."
        buttonText="Get in Touch"
      />

      <style jsx global>{`
        .journey-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .journey-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
      `}</style>
    </>
  );
}
