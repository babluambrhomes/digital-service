"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "@/components/shared/ContactForm";
import { PageBanner } from "@/components/shared/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Headphones,
} from "lucide-react";

function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const businessType = searchParams.get("businessType") ?? undefined;
  const service = searchParams.get("service") ?? undefined;
  const message = searchParams.get("message") ?? undefined;

  return (
    <ContactForm service={service} businessType={businessType} message={message} />
  );
}

const responseGuarantees = [
  {
    icon: Clock,
    title: "2-Hour Response",
    description:
      "We respond to all enquiries within 2 hours during business hours.",
  },
  {
    icon: Shield,
    title: "No Hidden Fees",
    description: "Transparent pricing from the start. No hidden add-ons, no surprises — ever.",
  },
  {
    icon: Headphones,
    title: "Real Experts",
    description: "Talk to a digital growth expert, not a salesperson.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        badge="Contact Us"
        title="Let's Start Growing"
        titleHighlight="Your Business"
        description="Get a free consultation. Tell us about your business and goals, and we'll create a customized growth strategy — completely free."
        imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=600&fit=crop"
        imageAlt="Contact Us"
      />

      <section className="py-8 border-y-2 border-dashed border-border kraft-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {responseGuarantees.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 justify-center"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border-2 border-dashed border-primary/20">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-patrick text-sm font-bold">{item.title}</p>
                  <p className="font-kalam text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding kraft-bg">
        <div className="container-custom">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Card className="border-2 border-dashed border-border shadow-lg paper-card" style={{ filter: "url(#sketchy)" }}>
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-caveat text-xl font-bold mb-2">
                    Send Us a Message
                  </h2>
                  <p className="font-kalam text-sm text-muted-foreground mb-6">
                    Fill out the form below and we&apos;ll get back to you
                    within 2 hours.
                  </p>
                  <Suspense
                    fallback={
                      <div className="flex h-64 items-center justify-center">
                        <p className="font-kalam text-sm text-muted-foreground">
                          Loading form...
                        </p>
                      </div>
                    }
                  >
                    <ContactFormWithParams />
                  </Suspense>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <Card className="border-2 border-dashed border-border paper-card" style={{ filter: "url(#sketchy)" }}>
                <CardContent className="p-6">
                  <h3 className="font-caveat font-bold mb-5 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Contact Info
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-2 border-dashed border-primary/20">
                          <Phone className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-patrick font-medium">Phone</p>
                          <p className="font-kalam text-muted-foreground">
                            {SITE_CONFIG.phone}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-2 border-dashed border-primary/20">
                          <Mail className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-patrick font-medium">Email</p>
                          <p className="font-kalam text-muted-foreground">
                            {SITE_CONFIG.email}
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary border-2 border-dashed border-primary/20">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-patrick font-medium">Address</p>
                          <p className="font-kalam text-muted-foreground">
                            {SITE_CONFIG.address}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>




              <Card className="border-2 border-dashed border-green-500/20 bg-green-500/5 paper-card" style={{ filter: "url(#sketchy)" }}>
                <CardContent className="p-6">
                  <h3 className="font-caveat font-bold mb-2 flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    Quick Response
                  </h3>
                  <p className="font-kalam text-sm text-muted-foreground mb-4">
                    Need a faster response? Message us on WhatsApp — we usually
                    reply within 30 minutes!
                  </p>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
                      "Hi! I'm interested in growing my business online. Can you share more details?"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-patrick text-sm font-medium text-white transition-all hover:bg-green-600 hover:shadow-lg border-2 border-green-600"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>



      <section className="h-96 bg-muted relative">
        <iframe
          title="GrowthZone Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
