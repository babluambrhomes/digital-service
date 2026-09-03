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

  return {
    title: `${service.title} Services`,
    description: service.shortDescription,
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
