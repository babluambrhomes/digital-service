import { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES } from "@/lib/industries";
import { IndustryDetailLayout } from "@/components/industries/IndustryDetailLayout";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};

  return {
    title: `${industry.title} | GrowthZone`,
    description: industry.description,
  };
}

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }));
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <IndustryDetailLayout
      title={industry.title}
      description={industry.description}
      image={industry.image}
      stats={industry.stats}
      focus={industry.focus}
      solutions={industry.solutions}
      color={industry.color}
    />
  );
}
