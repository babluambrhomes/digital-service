"use client";

import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function WhatsAppButton() {
  const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Hi! I'm interested in your services. Can you share more details?"
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110 hover:rotate-[5deg]"
      style={{ filter: "url(#sketchy)" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      {/* Hand-drawn ring */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 56 56"
        fill="none"
        style={{ overflow: "visible" }}
      >
        <circle
          cx="28"
          cy="28"
          r="26"
          stroke="oklch(0.55 0.22 150 / 0.3)"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-ping"
          style={{ animationDuration: "2s" }}
        />
      </svg>
    </a>
  );
}
