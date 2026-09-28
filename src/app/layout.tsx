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

const OG_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop";

export const metadata: Metadata = {
  metadataBase: new URL("https://growthzone.in"),
  title: {
    default:
      "Digital Marketing, Web & Mobile App Development Company in India | GrowthZone",
    template: "%s | GrowthZone",
  },
  description:
    "GrowthZone is a full-service digital agency in India offering web development, mobile app development, SEO, digital marketing, WhatsApp Business API, AI automation, branding, cloud & DevOps. Trusted partner for 200+ Indian businesses.",
  keywords: [
    "digital marketing agency india",
    "digital marketing company mumbai",
    "website development company india",
    "web design services india",
    "ecommerce website development india",
    "mobile app development company india",
    "software development company india",
    "seo services india",
    "local seo for small business",
    "ppc google ads management india",
    "social media marketing agency india",
    "whatsapp business api india",
    "branding agency india",
    "logo design services india",
    "ai software development",
    "business automation india",
    "cloud computing and devops services",
    "website cost in india",
    "mobile app development cost india",
    "digital growth partner smb",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Digital Marketing, Web & Mobile App Development Company in India | GrowthZone",
    description:
      "Web development, mobile apps, SEO, digital marketing, WhatsApp Business API, AI automation & branding for Indian businesses. 200+ clients. One trusted digital growth partner.",
    url: "https://growthzone.in",
    siteName: "GrowthZone",
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "GrowthZone digital agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Digital Marketing, Web & Mobile App Development Company in India | GrowthZone",
    description:
      "Web development, mobile apps, SEO, digital marketing, WhatsApp Business API, AI automation & branding for Indian businesses.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              name: "GrowthZone",
              url: "https://growthzone.in",
              description:
                "Full-service digital agency in India — web development, mobile apps, SEO, digital marketing, WhatsApp Business API, AI automation and branding.",
              email: "hello@growthzone.in",
              telephone: "+91 99999 99999",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Business Hub",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400001",
                addressCountry: "IN",
              },
              areaServed: "India",
              priceRange: "₹₹",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
              },
              sameAs: [
                "https://instagram.com/growthzone",
                "https://facebook.com/growthzone",
                "https://linkedin.com/company/growthzone",
                "https://twitter.com/growthzone",
              ],
              makesOffer: [
                { "@type": "Offer", name: "Website Development Services in India" },
                { "@type": "Offer", name: "Mobile App Development Services India" },
                { "@type": "Offer", name: "SEO & Digital Marketing Services India" },
                { "@type": "Offer", name: "Software Development & CRM Solutions" },
                { "@type": "Offer", name: "WhatsApp Business API Integration" },
                { "@type": "Offer", name: "AI Automation & Cloud/DevOps Services" },
              ],
            }),
          }}
        />
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
