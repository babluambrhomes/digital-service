import type { Metadata } from "next";
import { Caveat, Kalam, Patrick_Hand } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "GrowthZone | Your Complete Digital Services Partner",
    template: "%s | GrowthZone",
  },
  description:
    "Complete digital services — branding, web development, mobile apps, software, AI, automation, SEO, cloud, and maintenance. Everything your business needs under one roof.",
  keywords: [
    "digital services agency",
    "website development",
    "mobile app development",
    "software development",
    "AI development",
    "cloud services",
    "DevOps",
    "SEO",
    "digital marketing",
    "branding",
    "automation",
  ],
  openGraph: {
    title: "GrowthZone | Your Complete Digital Services Partner",
    description:
      "Branding, web development, mobile apps, software, AI, automation, SEO, cloud, and maintenance — all under one roof.",
    url: "https://growthzone.in",
    siteName: "GrowthZone",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthZone | Your Complete Digital Services Partner",
    description:
      "Branding, web development, mobile apps, software, AI, automation, SEO, cloud, and maintenance — all under one roof.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${kalam.variable} ${patrickHand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col paper-bg">
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <filter id="sketchy">
              <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="3" result="noise" seed="2" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="sketchy-strong">
              <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="4" result="noise" seed="5" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
