import type { Metadata } from "next";
import { EstimateContent } from "@/components/estimate/EstimateContent";

export const metadata: Metadata = {
  title: "Estimate",
  description:
    "Estimate your project cost — pick a Starter plan or a Custom quote. Transparent estimates for branding, web, apps, software, AI, cloud, SEO, and more.",
};

export default function EstimatePage() {
  return <EstimateContent />;
}
