import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | GrowthZone — Digital Growth Partner for Indian Businesses",
  description:
    "GrowthZone helps Indian small and medium businesses grow online with web development, mobile apps, SEO, digital marketing, WhatsApp automation, AI and branding. Read our story.",
  keywords: ["about growthzone", "digital agency india", "digital growth partner india"],
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}