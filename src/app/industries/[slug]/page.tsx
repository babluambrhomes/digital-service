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

  const title = `${industry.title} Services`;
  return {
    title,
    description: industry.description,
    keywords: [
      industry.title.toLowerCase(),
      "digital solutions india",
      "business software india",
      "digital transformation india",
    ],
    openGraph: {
      title,
      description: industry.description,
      url: `https://growthzone.in/industries/${industry.slug}`,
      siteName: "GrowthZone",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop",
          width: 1200,
          height: 630,
          alt: industry.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: industry.description,
    },
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
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
