"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Star,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import {
  DoodleCheck,
  DoodleStar,
  DoodleCircle,
} from "@/components/shared/DoodleDecorations";
import { Typewriter } from "@/components/shared/Typewriter";
import { VideoPlayerModal } from "@/components/shared/VideoPlayerModal";


export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const typedHighlights = useMemo(
    () => [
      "A website that loads in 2 seconds.",
      "AI chatbots that work 24/7.",
      "Mobile apps for Android & iOS.",
      "Custom software for your business.",
      "Cloud infrastructure that scales.",
    ],
    [],
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden paper-bg">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background/90" />
      </div>

      {/* Doodle decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <DoodleStar className="absolute top-[12%] left-[8%] text-primary/10 animate-float-slow" size={40} />
        <DoodleCircle className="absolute top-[18%] right-[10%] text-amber-400/10 animate-float-slow" size={60} />
        <DoodleStar className="absolute bottom-[22%] left-[12%] text-primary/8 animate-float-slow" size={24} />
        <DoodleStar className="absolute top-[65%] right-[6%] text-primary/8 animate-float-slow" size={20} />
        <span className="absolute top-[15%] right-[22%] animate-float-slow" style={{ animationDelay: "2s" }}>
          <DoodleStar className="text-primary/12" size={18} />
        </span>
        <span className="absolute bottom-[18%] right-[28%] animate-float-slow" style={{ animationDelay: "1s" }}>
          <DoodleCircle className="text-amber-400/8" size={32} />
        </span>
        <span className="absolute bottom-[35%] left-[5%] animate-float-slow" style={{ animationDelay: "3s" }}>
          <DoodleStar className="text-primary/6" size={28} />
        </span>
        {/* Notebook lines subtle background */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-lines" width="100%" height="32" patternUnits="userSpaceOnUse">
              <line x1="0" y1="31" x2="100%" y2="31" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-lines)" />
        </svg>
      </div>

      <div className="container-custom relative z-10 py-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-primary/20 bg-primary/5 px-4 py-2 font-patrick text-sm text-primary font-semibold"
              style={{ transform: "rotate(-1deg)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              #1 Complete Digital Services Agency
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 font-caveat text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            We Build Digital Experiences
            <br />
            <span className="relative inline-block text-primary">
              That Drive Growth
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none" style={{ overflow: "visible" }}>
                <path d="M0,5 Q20,0 40,5 T80,5 T120,5 T160,5 T200,5" stroke="oklch(0.45 0.18 250)" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 font-kalam text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            We provide end-to-end digital services — from branding and web development to AI, cloud, and automation —
            so you get everything your business needs under one roof.{" "}
            <Typewriter
              words={typedHighlights}
              className=" text-foreground"
            />
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              "10+ Service Categories",
              "Enterprise-Grade Quality",
              "Startup-Friendly Prices",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 font-kalam text-sm text-muted-foreground"
              >
                <DoodleCheck size={14} color="oklch(0.55 0.15 150)" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="px-8 py-6 font-patrick text-base group">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-8 py-6 font-patrick text-base"
            >
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                {SITE_CONFIG.phone}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 font-patrick text-base relative"
              onClick={() => setIsVideoOpen(true)}
            >
              <span className="relative flex h-2.5 w-2.5 mr-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <Play className="mr-2 h-5 w-5" />
              Watch How It Works
            </Button>
          </motion.div>




          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-12 flex justify-center items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1774585975271-915c0e24e9da?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1774437776063-004e4444c063?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1774438029301-87bd78152961?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1774437556413-b54bb6ab725e?w=80&h=80&fit=crop&crop=face",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-9 w-9 rounded-full border-2 border-background object-cover"
                  style={{ filter: "url(#sketchy)" }}
                />
              ))}
            </div>
            <div className="h-6 w-px border border-dashed border-border" />
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-kalam text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">150+</span> businesses trust us
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <VideoPlayerModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </section>
  );
}
