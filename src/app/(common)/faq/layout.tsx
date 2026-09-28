import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | GrowthZone",
  description:
    "Answers to common questions about GrowthZone digital services — pricing, timelines, support, processes and more for website, app, SEO and digital marketing projects in India.",
  keywords: ["faq digital agency", "website pricing faq", "digital services questions india"],
  alternates: { canonical: "/faq" },
};

export default function FaqLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}