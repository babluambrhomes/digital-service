import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GrowthZone",
  description:
    "How GrowthZone collects, uses and protects your personal information — our privacy practices for website visitors and clients across India.",
  keywords: ["growthzone privacy policy", "digital agency privacy india"],
  alternates: { canonical: "/privacy" },
};

export default function PrivacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}