import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { ServiceDetailLayout } from "@/components/services/ServiceDetailLayout";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.title} Services in India`;
  const images = [
    {
      url: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop`,
      width: 1200,
      height: 630,
      alt: service.title,
    },
  ];

  return {
    title,
    description: service.shortDescription,
    keywords: [
      service.title.toLowerCase(),
      "digital services india",
      "digital agency",
      "business growth online",
      "affordable digital services",
    ],
    openGraph: {
      title,
      description: service.shortDescription,
      url: `https://growthzone.in/services/${service.slug}`,
      siteName: "GrowthZone",
      locale: "en_IN",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.shortDescription,
      images,
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailLayout service={service} />;
}
