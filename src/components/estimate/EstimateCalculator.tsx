"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IndianRupee,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  X,
  MessageCircle,
} from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { serviceColors, iconMap } from "@/lib/service-utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Tier = "starter" | "premium";

interface Selection {
  slug: string;
  tier: Tier;
}

const TIERS: { key: Tier; label: string; desc: string }[] = [
  { key: "starter", label: "Starter", desc: "Fixed price" },
  { key: "premium", label: "Custom", desc: "Tailored quote" },
];

const parsePrice = (price: string) =>
  parseInt(price.replace(/[^0-9]/g, ""), 10);

const formatINR = (value: number) =>
  value.toLocaleString("en-IN", { maximumFractionDigits: 0 });

export function EstimateCalculator() {
  const [selections, setSelections] = useState<Selection[]>([]);

  const isSelected = (slug: string) =>
    selections.some((s) => s.slug === slug);

  const toggleService = (slug: string) => {
    setSelections((prev) =>
      isSelected(slug)
        ? prev.filter((s) => s.slug !== slug)
        : [...prev, { slug, tier: "premium" }]
    );
  };

  const updateSelection = (
    slug: string,
    patch: Partial<Omit<Selection, "slug">>
  ) => {
    setSelections((prev) =>
      prev.map((s) => (s.slug === slug ? { ...s, ...patch } : s))
    );
  };

  const getService = (slug: string) =>
    SERVICES.find((s) => s.slug === slug)!;

  const getPrice = (slug: string, tier: Tier) => {
    const service = getService(slug);
    return service.pricing[tier];
  };

  const totals = useMemo(() => {
    let total = 0;
    selections.forEach((s) => {
      total += parsePrice(getPrice(s.slug, s.tier));
    });
    return { total };
  }, [selections]);

  const removeService = (slug: string) => {
    setSelections((prev) => prev.filter((s) => s.slug !== slug));
  };

  const whatsappMessage = (() => {
    if (selections.length === 0) return "";
    const lines = [
      "Hi GrowthZone! Please share a quote for the following:",
      "",
    ];
    selections.forEach((sel, i) => {
      const service = getService(sel.slug);
      const tierLabel = TIERS.find((t) => t.key === sel.tier)?.label ?? sel.tier;
      const price = getPrice(sel.slug, sel.tier);
      const note =
        sel.tier === "premium"
          ? " (minimum — final after consultation)"
          : "";
      lines.push(
        `${i + 1}. ${service.title} — ${tierLabel}: ${price}${note}`
      );
    });
    lines.push("");
    lines.push(`Estimated Total: ₹${formatINR(totals.total)}`);
    return lines.join("\n");
  })();

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const servicesLabel = selections
    .map((sel) => getService(sel.slug).title)
    .join(", ");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
      {/* Service selection */}
      <div className="lg:col-span-2 space-y-4">
        {SERVICES.map((service, index) => {
          const selected = isSelected(service.slug);
          const selection = selections.find((s) => s.slug === service.slug);
          const colors =
            serviceColors[service.slug] ||
            serviceColors["website-development"];
          const Icon = iconMap[service.icon] || Sparkles;

          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`rounded-2xl border-2 paper-card overflow-hidden transition-all duration-200 ${
                selected
                  ? "border-primary/50 shadow-lg"
                  : "border-dashed border-border bg-card"
              }`}
              style={{ filter: "url(#sketchy)" }}
            >
              {/* Header row — click to toggle */}
              <button
                onClick={() => toggleService(service.slug)}
                className="w-full flex items-center gap-4 px-5 sm:px-6 py-4 text-left cursor-pointer hover:bg-primary/5 transition-colors"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all ${
                    selected
                      ? `bg-gradient-to-br ${colors.gradient} text-white shadow-lg border-2 border-white/20`
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-caveat text-xl font-bold">
                    {service.title}
                  </span>
                  <span className="block font-kalam text-xs text-muted-foreground mt-0.5">
                    {service.shortDescription}
                  </span>
                </span>
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                    selected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-transparent"
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                </span>
              </button>

              {/* Controls */}
              <AnimatePresence initial={false}>
                {selected && selection && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 pt-1 border-t-2 border-dashed border-border">
                      <div className="flex flex-wrap items-center justify-between gap-4 mt-3">
                        {/* Tier */}
                        <div>
                          <p className="font-patrick text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                            Choose Plan
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {TIERS.map((tier) => {
                              const active = selection.tier === tier.key;
                              return (
                                <button
                                  key={tier.key}
                                  onClick={() =>
                                    updateSelection(service.slug, {
                                      tier: tier.key,
                                    })
                                  }
                                  className={`inline-flex flex-col items-start rounded-xl border-2 px-3 py-1.5 transition-all cursor-pointer ${
                                    active
                                      ? `border-transparent bg-gradient-to-br ${colors.gradient} text-white shadow-md`
                                      : "border-dashed border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                                  }`}
                                >
                                  <span className="font-patrick text-xs font-bold">
                                    {tier.label}
                                  </span>
                                  <span
                                    className={`font-kalam text-[10px] ${
                                      active ? "text-white/80" : "text-muted-foreground/70"
                                    }`}
                                  >
                                    {tier.desc}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2 flex-wrap">
                        <p className="font-patrick text-xs text-muted-foreground">
                          Price:
                        </p>
                        <p className="font-caveat text-xl font-bold text-primary">
                          {selection.tier === "premium"
                            ? `From ${getPrice(service.slug, selection.tier)}`
                            : getPrice(service.slug, selection.tier)}
                        </p>
                        {selection.tier === "premium" && (
                          <p className="w-full font-kalam text-[11px] text-muted-foreground">
                            Minimum price — final quote shared after a free consultation.
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="lg:sticky lg:top-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border-2 border-border bg-card p-6 paper-card hand-shadow"
          style={{ filter: "url(#sketchy)" }}
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-caveat text-2xl font-bold">Your Quote</h3>
            <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 font-patrick text-[11px] font-bold">
              {selections.length} service{selections.length === 1 ? "" : "s"}
            </span>
          </div>

          {selections.length === 0 ? (
            <div className="text-center py-8">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted border-2 border-dashed border-border">
                <Sparkles className="h-5 w-5 text-muted-foreground/50" />
              </div>
              <p className="font-kalam text-sm text-muted-foreground">
                Select services on the left to build your custom quote.
              </p>
            </div>
          ) : (
            <>
              <ul className="space-y-3 mb-5 max-h-64 overflow-y-auto pr-1">
                {selections.map((sel) => {
                  const service = getService(sel.slug);
                  return (
                    <li
                      key={sel.slug}
                      className="flex items-center gap-3 rounded-xl border-2 border-dashed border-border bg-muted/30 px-3 py-2.5"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-caveat text-sm font-bold truncate">
                          {service.title}
                        </p>
                        <p className="font-patrick text-[10px] text-muted-foreground uppercase tracking-wide">
                          {TIERS.find((t) => t.key === sel.tier)?.label ?? sel.tier}
                        </p>
                      </div>
                      <p className="font-caveat text-base font-bold text-primary shrink-0">
                        {getPrice(sel.slug, sel.tier)}
                      </p>
                      <button
                        onClick={() => removeService(sel.slug)}
                        className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-muted hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                        aria-label="Remove"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="space-y-2.5 border-t-2 border-dashed border-border pt-4 mb-5">
                <div className="flex items-center justify-between">
                  <span className="font-patrick text-sm font-bold">
                    Estimated Total
                  </span>
                  <span className="font-caveat text-3xl font-bold text-primary">
                    ₹{formatINR(totals.total)}
                  </span>
                </div>
                <p className="font-kalam text-[11px] text-muted-foreground">
                  Minimum estimate. Final quote confirmed after a free consultation.
                </p>
              </div>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full">
                  <Link
                    href={`/contact?service=${encodeURIComponent(
                      servicesLabel
                    )}&message=${encodeURIComponent(whatsappMessage)}`}
                  >
                    Get This Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send Quote on WhatsApp
                  </a>
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
