"use client";

import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageBanner } from "@/components/shared/PageBanner";
import { StatsBar } from "@/components/shared/StatsBar";
import { DarkCTA } from "@/components/shared/DarkCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { iconMap, serviceImages } from "@/lib/service-utils";
import { FeaturedServiceCard } from "@/components/services/ServiceCards";

const roiStats = [
  { value: "300%", label: "More Operational Efficiency" },
  { value: "5x", label: "More Customer Enquiries" },
  { value: "10+", label: "Service Categories" },
  { value: "24/7", label: "Automated & Always On" },
];

function ServiceListCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const Icon = iconMap[service.icon] || iconMap["Globe"];

  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/services/${service.slug}`} className="group block h-full">
        <Card className="h-full overflow-hidden border-2 border-dashed border-border transition-all hover:shadow-xl hover:-translate-y-1 paper-card" style={{ filter: "url(#sketchy)" }}>
          <div className="relative h-56 overflow-hidden">
            <img
              src={serviceImages[service.slug] || serviceImages["website-development"]}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-500/90 text-white border-2 border-dashed border-green-400/50 font-patrick">
                From {service.pricing.starter}
              </Badge>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white border-2 border-dashed border-white/30">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-caveat text-xl font-bold text-white group-hover:text-primary-foreground transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="font-kalam text-sm text-muted-foreground mb-4 leading-relaxed">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {service.features.map((feature) => (
                <Badge
                  key={feature}
                  variant="secondary"
                  className="font-patrick text-xs border border-dashed border-border"
                >
                  {feature}
                </Badge>
              ))}
            </div>
            <div className="flex items-center font-patrick text-sm font-medium text-primary group-hover:gap-2 transition-all">
              View Details{" "}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        badge="Our Services"
        title="Complete Digital Services"
        titleHighlight="for Your Business"
        description="From branding and web development to AI, cloud, and automation — a complete suite of digital services under one roof."
        imageSrc="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&h=600&fit=crop"
        imageAlt="Our Services"
      />

      <StatsBar stats={roiStats} variant="bordered" />

      <section className="section-padding kraft-bg">
        <div className="container-custom">
          <SectionHeading
            title="Our Core Services"
            subtitle="Each service is built to solve specific business challenges. Choose one standalone or combine them for a complete digital transformation."
          />

          <div className="space-y-8">
            <FeaturedServiceCard service={SERVICES[0]} />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {SERVICES.slice(1).map((service, i) => (
                <ServiceListCard key={service.id} service={service} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <DarkCTA
        title="Not Sure Which Service You Need?"
        subtitle="No problem! Book a free consultation and we'll analyze your business and recommend the best services for your growth."
        buttonText="Get Free Consultation"
      />
    </>
  );
}
