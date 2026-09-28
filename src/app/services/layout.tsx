import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Services for Your Business | GrowthZone",
  description:
    "Explore GrowthZone's full range of digital services for Indian businesses — website development, mobile apps, SEO, digital marketing, WhatsApp Business, AI automation, branding, cloud & more.",
  keywords: [
    "digital services india",
    "digital marketing agency",
    "website development company",
    "mobile app development",
    "seo services india",
    "whatsapp business api",
  ],
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}