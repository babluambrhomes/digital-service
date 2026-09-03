"use client";

import { useState, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, MessageCircle, ArrowRight } from "lucide-react";
import { ALL_FAQS, FAQ_CATEGORIES } from "@/lib/constants";
import { PageBanner } from "@/components/shared/PageBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
  return (
    <Suspense fallback={<div className="min-h-screen kraft-bg" />}>
      <FAQContent />
    </Suspense>
  );
}

function FAQContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(() => {
    const category = searchParams.get("category");
    return category && (FAQ_CATEGORIES as readonly string[]).includes(category)
      ? category
      : "All";
  });

  const filteredFaqs = useMemo(() => {
    return ALL_FAQS.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;
      const matchesSearch =
        search === "" ||
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: ALL_FAQS.length };
    ALL_FAQS.forEach((faq) => {
      if (faq.category) {
        counts[faq.category] = (counts[faq.category] || 0) + 1;
      }
    });
    return counts;
  }, []);

  return (
    <>
      <PageBanner
        badge="Help Center"
        title="Frequently Asked"
        titleHighlight="Questions"
        description="Find answers to everything. Use the search or browse by category."
        imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop"
        imageAlt="FAQ"
      />

      <section className="py-20 sm:py-28 kraft-bg min-h-screen">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search your question..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="w-full h-14 pl-12 pr-12 rounded-xl border-2 border-dashed border-border bg-card text-foreground font-kalam text-sm font-medium placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all shadow-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-7 w-7 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors cursor-pointer"
                >
                  <X className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="max-w-4xl mx-auto mb-10"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    router.replace(
                      cat === "All"
                        ? "/faq"
                        : `/faq?category=${encodeURIComponent(cat)}`,
                      { scroll: false }
                    );
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-patrick text-xs font-semibold transition-all duration-200 cursor-pointer border-2 border-dashed ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                      : "bg-card text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {cat}
                  <span
                    className={`font-patrick text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-dashed ${
                      activeCategory === cat
                        ? "bg-white/20 text-primary-foreground border-white/30"
                        : "bg-muted text-muted-foreground border-border"
                    }`}
                  >
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto mb-4">
            <p className="font-kalam text-xs text-muted-foreground font-medium">
              Showing {filteredFaqs.length} of {ALL_FAQS.length} questions
              {search && (
                <span>
                  {" "}
                  for &ldquo;
                  <span className="text-primary font-semibold">{search}</span>
                  &rdquo;
                </span>
              )}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredFaqs.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Accordion key={activeCategory + search}>
                    {filteredFaqs.map((faq, index) => {
                      const globalIndex = ALL_FAQS.findIndex(
                        (f) => f.question === faq.question
                      );
                      return (
                        <AccordionItem
                          key={globalIndex}
                          value={`faq-${globalIndex}`}
                          className="mb-3 border-2 border-dashed border-border rounded-xl bg-card overflow-hidden hover:border-primary/20 transition-colors paper-card"
                        >
                          <AccordionTrigger className="px-5 sm:px-6 py-4 sm:py-5 text-left hover:no-underline group">
                            <div className="flex items-start gap-3 pr-2">
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-caveat text-xs font-bold mt-0.5 border-2 border-dashed border-primary/20">
                                {index + 1}
                              </span>
                              <div>
                                <span className="font-kalam text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                                  {faq.question}
                                </span>
                                {faq.category && (
                                  <span className="block mt-1 font-patrick text-[11px] text-muted-foreground font-medium">
                                    {faq.category}
                                  </span>
                                )}
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-5 sm:px-6 pb-5">
                            <div className="ml-10 pl-3 border-l-2 border-dashed border-primary/20">
                              <p className="font-kalam text-sm text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-16"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mx-auto mb-4 border-2 border-dashed border-border">
                    <Search className="h-7 w-7 text-muted-foreground/50" />
                  </div>
                  <h3 className="font-caveat text-lg font-bold text-foreground mb-1">
                    No results found
                  </h3>
                  <p className="font-kalam text-sm text-muted-foreground mb-4">
                    Try a different search term or browse all categories.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All");
                      router.replace("/faq", { scroll: false });
                    }}
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="max-w-lg mx-auto rounded-2xl border-2 border-dashed border-border bg-card p-8 paper-card" style={{ filter: "url(#sketchy)" }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4 border-2 border-dashed border-primary/20">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-caveat text-lg font-bold text-foreground mb-2">
                Still have questions?
              </h3>
              <p className="font-kalam text-sm text-muted-foreground mb-5">
                Can&apos;t find what you&apos;re looking for? Our team is happy
                to help.
              </p>
              <Button asChild className="px-6">
                <Link href="/contact">
                  Contact with Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
