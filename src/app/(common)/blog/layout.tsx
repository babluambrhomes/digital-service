import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | GrowthZone — Digital Marketing & Tech Guides for India",
  description:
    "Practical guides on website development cost, local SEO, WhatsApp Business, digital marketing, AI automation and more — written for Indian small and medium businesses.",
  keywords: [
    "digital marketing blog india",
    "website development guide",
    "local seo tips india",
    "whatsapp business guide",
    "seo blog india",
  ],
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}