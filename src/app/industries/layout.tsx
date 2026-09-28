import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Digital Solutions for Indian Businesses",
  description:
    "GrowthZone delivers industry-specific digital solutions for startups, healthcare, e-commerce, education, real estate, finance, hospitality, logistics, fitness, beauty and more across India.",
  keywords: [
    "digital solutions india",
    "industry specific software",
    "business software india",
    "digital transformation india",
    "sms agencies india",
  ],
  alternates: { canonical: "/industries" },
};

export default function IndustriesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}