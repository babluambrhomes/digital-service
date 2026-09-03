"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DarkCTAProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "center" | "split";
  children?: React.ReactNode;
}

export function DarkCTA({
  title,
  subtitle,
  buttonText = "Get in Touch",
  buttonHref = "/contact",
  variant = "center",
  children,
}: DarkCTAProps) {
  return (
    <section className="section-padding relative overflow-hidden dark-kraft-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {variant === "center" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-caveat text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-4 font-kalam text-lg text-white/60 max-w-xl mx-auto">
              {subtitle}
            </p>
            {children || (
              <Button
                size="lg"
                asChild
                className="mt-8 text-base px-8 py-6 font-patrick"
              >
                <Link href={buttonHref}>
                  {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-caveat text-4xl sm:text-5xl font-bold tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-4 font-kalam text-lg text-white/60">
                {subtitle}
              </p>
              <Button
                size="lg"
                asChild
                className="mt-8 text-base px-8 font-patrick"
              >
                <Link href={buttonHref}>
                  {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            {children && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {children}
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
