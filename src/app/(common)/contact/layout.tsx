import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | GrowthZone — Get a Free Digital Growth Consultation",
  description:
    "Get a free consultation with GrowthZone, a full-service digital agency in India. Website, apps, SEO, digital marketing, WhatsApp & AI automation — tell us your goals and get a customized plan.",
  keywords: ["contact digital agency india", "free website consultation", "digital marketing help india"],
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}