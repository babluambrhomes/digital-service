import React from "react";
import Link from "next/link";
import { SITE_CONFIG, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

function SocialIcon({ icon, className }: { icon: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    Instagram: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
    Facebook: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    Linkedin: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    Twitter: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
      </svg>
    ),
  };

  return icons[icon] || null;
}

export function Footer() {
  return (
    <footer className="kraft-bg relative">
      {/* Wavy top border */}
      <div className="wavy-divider" />

      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-caveat font-bold text-lg hand-shadow"
                style={{ filter: "url(#sketchy)" }}
              >
                GZ
              </div>
              <span className="font-caveat font-bold text-xl">{SITE_CONFIG.name}</span>
            </Link>
            <p className="font-kalam text-sm text-muted-foreground max-w-xs">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background border-2 border-dashed border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <SocialIcon icon={social.icon} className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-caveat text-lg font-bold">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-kalam text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-caveat text-lg font-bold">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-kalam text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-caveat text-lg font-bold">Contact</h3>
            <ul className="space-y-3 font-kalam text-sm text-muted-foreground">
              <li>
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-foreground transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-foreground transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        {/* Wavy divider */}
        <div className="wavy-divider my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-kalam text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-kalam text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
