"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import {
  iconMap,
  serviceColors,
  serviceHighlights,
} from "@/lib/service-utils";

export function ServicesMegaMenu({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const close = () => setOpen(false);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={handleBlur}
    >
      <Link
        href="/services"
        onClick={close}
        aria-haspopup="true"
        aria-expanded={open}
        className={`font-patrick text-sm font-semibold transition-colors relative group inline-flex items-center gap-1 ${
          scrolled
            ? "text-muted-foreground hover:text-foreground"
            : "text-black/60 hover:text-black"
        }`}
      >
        Services
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
        <span
          className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all ${
            open ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-16 z-40"
          >
            <div className="paper-bg border-b-2 border-dashed border-border shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar">
              <div className="container-custom py-8">
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="font-patrick text-sm font-bold uppercase tracking-widest text-muted-foreground">
                      All Services
                    </span>
                  </div>
                  <Link
                    href="/services"
                    onClick={close}
                    className="inline-flex items-center gap-1.5 font-patrick text-sm font-bold text-primary hover:underline"
                  >
                    View All Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SERVICES.map((service, i) => {
                    const Icon = iconMap[service.icon];
                    const colors = serviceColors[service.slug];
                    const highlight = serviceHighlights[service.slug];
                    return (
                      <motion.div
                        key={service.slug}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          onClick={close}
                          className="group block h-full"
                        >
                          <div className="h-full rounded-xl border-2 border-dashed border-border bg-card p-4 hand-shadow hand-shadow-hover transition-all hover:-translate-y-0.5 hover:border-primary/20">
                            <div className="flex items-start gap-3">
                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${colors.gradient} text-white border-2 border-white/20 group-hover:scale-110 transition-transform`}
                              >
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="min-w-0">
                                <h3 className="font-caveat text-lg font-bold leading-tight text-foreground">
                                  {service.title}
                                </h3>
                                <p className="font-patrick text-xs font-medium text-primary">
                                  {highlight}
                                </p>
                                <p className="font-kalam text-xs text-muted-foreground leading-relaxed mt-1 line-clamp-2">
                                  {service.shortDescription}
                                </p>
                              </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between border-t border-dashed border-border pt-2">
                              <span className="font-patrick text-xs text-muted-foreground">
                                Starting at
                              </span>
                              <span className="inline-flex items-center gap-1 font-patrick text-sm font-bold text-primary">
                                {service.pricing.starter}
                                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA strip */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-primary/20 bg-primary/5 p-5">
                  <div>
                    <p className="font-caveat text-lg font-bold text-foreground">
                      Not sure which service you need?
                    </p>
                    <p className="font-kalam text-sm text-muted-foreground">
                      Get a free consultation — we&apos;ll recommend exactly what
                      fits your business.
                    </p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <Button asChild size="sm" className="font-patrick">
                      <Link href="/contact" onClick={close}>
                        Get Free Consultation
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="font-patrick">
                      <a
                        href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hi! I want to grow my business online.")}`}
                        onClick={close}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4 mr-1.5" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
