"use client";

import { PageBanner } from "@/components/shared/PageBanner";
import { DarkCTA } from "@/components/shared/DarkCTA";
import { SITE_CONFIG } from "@/lib/constants";

const sections = [
  {
    title: "Introduction",
    body: [
      `At ${SITE_CONFIG.name}, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains what data we collect, why we collect it, and how we use and safeguard it.`,
      "By using our website or contacting us, you agree to the practices described in this policy. We may update this page from time to time, so please review it periodically.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "When you fill out our contact or quote request form, we collect the information you choose to provide, which may include your name, phone number, email address, business type, and a message describing your requirements.",
      "We also collect basic usage data automatically, such as your browser type, device, pages visited, and approximate location. This helps us understand how visitors use our website and improve your experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use the information you provide to respond to your enquiries, prepare proposals, deliver the services you request, and keep you updated on your project.",
      "We may occasionally send you useful tips and offers related to growing your business online. You can opt out of these communications at any time.",
    ],
  },
  {
    title: "Cookies and Analytics",
    body: [
      "Our website uses cookies and similar technologies to remember your preferences, understand traffic, and measure the performance of our pages.",
      "We use analytics tools to collect anonymous usage statistics. You can disable cookies in your browser settings at any time — the site will still work, though some features may behave differently.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We take reasonable technical and organisational measures to protect your data against unauthorised access, loss, or misuse. Access to your information is limited to our team members who need it to serve you.",
      "However, no method of transmission over the internet is completely secure. While we strive to protect your data, we cannot guarantee its absolute security.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "We work with trusted third-party services to run our business, including website hosting, email, analytics, and messaging platforms like WhatsApp. These providers may process your data on our behalf, strictly for the services they provide.",
      "We never sell your personal information to anyone.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You have the right to access, correct, or delete the personal information we hold about you. You may also withdraw your consent for us to contact you at any time.",
      `To exercise any of these rights, simply email us at ${SITE_CONFIG.email} and we will respond within 7 working days.`,
    ],
  },
  {
    title: "Contact Us",
    body: [
      `If you have any questions about this Privacy Policy or how we handle your data, reach out to us at ${SITE_CONFIG.email} or call ${SITE_CONFIG.phone}.`,
      `Our registered address is: ${SITE_CONFIG.address}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageBanner
        badge="Privacy Policy"
        title="Your Privacy Is"
        titleHighlight="Important to Us"
        description="We collect only what we need to serve you better — and we never share or sell your information. Here's exactly how we handle your data."
        imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=600&fit=crop"
        imageAlt="Privacy Policy"
      />

      <section className="section-padding kraft-bg">
        <div className="container-custom max-w-4xl">
          <p className="font-patrick text-sm text-muted-foreground mb-10">
            Last updated: 1 August 2026
          </p>
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="rounded-2xl border-2 border-dashed border-border bg-card p-6 md:p-8 paper-card hand-shadow"
                style={{ filter: "url(#sketchy)" }}
              >
                <h2 className="font-caveat text-2xl md:text-3xl font-bold mb-4">
                  <span className="gradient-text">{index + 1}.</span>{" "}
                  {section.title}
                </h2>
                {section.body.map((para, i) => (
                  <p
                    key={i}
                    className="font-kalam text-sm md:text-base text-muted-foreground leading-relaxed mb-3 last:mb-0"
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        title="Still Have Questions About Your Data?"
        subtitle="We're happy to explain how we collect, store, and protect your information. Get in touch — we respond within 2 hours."
        buttonText="Contact Us"
      />
    </>
  );
}
