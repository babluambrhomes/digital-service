import type { Metadata } from "next";
import { EstimateContent } from "@/components/estimate/EstimateContent";

export const metadata: Metadata = {
  title: "Project Cost Estimate | GrowthZone",
  description:
    "Estimate your website, app or software project cost in minutes. Transparent ₹ pricing for branding, web development, mobile apps, software, AI, cloud, SEO and digital marketing in India.",
  keywords: ["website cost estimate india", "app development cost calculator", "project estimate digital agency"],
  alternates: { canonical: "/estimate" },
};

export default function EstimatePage() {
  return <EstimateContent />;
}
