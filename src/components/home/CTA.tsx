"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, Headphones } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/shared/ContactForm";

export function CTA() {
  return (
    <section id="contact" className="section-padding kraft-bg">
      <div className="container-custom">
        <SectionHeading
          title="Get Your Free Consultation"
          subtitle="Tell us about your project and we'll create a custom plan for the digital solutions your business needs. Free — no obligations."
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="font-caveat text-xl font-bold mb-3">Why Choose GrowthZone?</h3>
              <p className="font-kalam text-sm text-muted-foreground leading-relaxed">
                Every day you delay, you fall further behind your competitors.
                Let our experts design a complete digital strategy for your
                business — for free.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: Clock, text: "Get response within 2 hours" },
                { icon: Headphones, text: "Talk to a technical expert, not a salesperson" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 border-2 border-dashed border-primary/20">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="font-kalam text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-3 rounded-xl border-2 border-dashed border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/20 paper-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary border-2 border-dashed border-primary/20">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-patrick text-sm font-semibold">Prefer to call?</p>
                  <p className="font-kalam text-xs text-muted-foreground">{SITE_CONFIG.phone}</p>
                </div>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hi! I want to grow my business online.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border-2 border-dashed border-border bg-card p-4 transition-all hover:shadow-md hover:border-green-500/20 paper-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-500 border-2 border-dashed border-green-500/20">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-patrick text-sm font-semibold">WhatsApp Us</p>
                  <p className="font-kalam text-xs text-muted-foreground">Reply within 30 minutes</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border-2 border-dashed border-border bg-card p-6 md:p-8 shadow-lg paper-card" style={{ filter: "url(#sketchy)" }}>
              <h3 className="font-caveat text-lg font-bold mb-1">Send Us a Message</h3>
              <p className="font-kalam text-sm text-muted-foreground mb-6">
                We&apos;ll get back to you with a free consultation and tailored plan.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
