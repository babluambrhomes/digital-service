import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | GrowthZone",
  description:
    "GrowthZone's refund and cancellation policy for digital services in India — what's refundable, project milestones and the claims process.",
  keywords: ["growthzone refund policy", "digital agency refund india"],
  alternates: { canonical: "/refund" },
};

export default function RefundLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}