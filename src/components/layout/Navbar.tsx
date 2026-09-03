"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, SERVICES, SITE_CONFIG } from "@/lib/constants";
import { iconMap, serviceColors } from "@/lib/service-utils";
import { ServicesMegaMenu } from "@/components/layout/ServicesMegaMenu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "paper-bg/95 backdrop-blur-md border-b-2 border-dashed border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-xl font-caveat font-bold text-lg transition-all ${
              scrolled
                ? "bg-primary text-primary-foreground hand-shadow"
                : "bg-white text-black hand-shadow"
            }`}
            style={{ filter: "url(#sketchy)" }}
          >
            GZ
          </div>
          <span
            className={`hidden font-caveat font-bold text-xl sm:inline-block transition-colors ${
              scrolled ? "text-foreground" : "text-black"
            }`}
          >
            {SITE_CONFIG.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) =>
            link.href === "/services" ? (
              <ServicesMegaMenu key={link.href} scrolled={scrolled} />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`font-patrick text-sm font-semibold transition-colors relative group ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all group-hover:w-full" />
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className={`font-patrick transition-colors ${
              scrolled
                ? ""
                : "border-black/20 text-black hover:bg-black/5"
            }`}
          >
            <a href={`tel:${SITE_CONFIG.phone}`}>Call Us</a>
          </Button>
          <Button size="sm" asChild className="font-patrick">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={`inline-flex items-center justify-center rounded-xl p-2 md:hidden transition-colors ${
              scrolled ? "text-muted-foreground hover:text-foreground" : "text-black"
            }`}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] paper-bg border-l-2 border-dashed border-border">
            <div className="flex flex-col gap-6 mt-6">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-caveat font-bold text-lg hand-shadow"
                  style={{ filter: "url(#sketchy)" }}
                >
                  GZ
                </div>
                <span className="font-caveat font-bold text-xl">{SITE_CONFIG.name}</span>
              </Link>

              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-patrick text-lg font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>

              <div className="border-t-2 border-dashed border-border pt-4">
                <p className="font-patrick text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  All Services
                </p>
                <div className="flex flex-col gap-1">
                  {SERVICES.map((service) => {
                    const Icon = iconMap[service.icon];
                    const colors = serviceColors[service.slug];
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-2 py-2 font-patrick text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${colors.gradient} text-white`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        {service.title}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button variant="outline" asChild className="font-patrick">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    onClick={() => setOpen(false)}
                  >
                    Call Us
                  </a>
                </Button>
                <Button asChild className="font-patrick">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
