import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | GrowthZone",
  description:
    "Read the terms and conditions for GrowthZone digital services — project scope, payments, timelines, client responsibilities and delivery terms for Indian businesses.",
  keywords: ["growthzone terms", "digital agency terms and conditions"],
  alternates: { canonical: "/terms" },
};

export default function TermsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}