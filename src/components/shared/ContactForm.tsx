"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SITE_CONFIG } from "@/lib/constants";

interface ContactFormProps {
  service?: string;
  businessType?: string;
  message?: string;
}

export function ContactForm({ service, businessType, message }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: service || "",
      businessType: businessType || "",
      message: message || "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const lines = [
        "New Enquiry from GrowthZone Website",
        "----------------------------------",
        `Name: ${data.name}`,
        `Phone: ${data.phone}`,
      ];
      if (data.email) lines.push(`Email: ${data.email}`);
      if (data.businessType) lines.push(`Business Type: ${data.businessType}`);
      if (data.service) lines.push(`Service Interested In: ${data.service}`);
      if (data.message) lines.push(`Message: ${data.message}`);

      const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
        lines.join("\n")
      )}`;
      window.open(url, "_blank");
      setIsSubmitted(true);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" stroke="oklch(0.55 0.15 150)" strokeWidth="2.5" strokeDasharray="4 3" />
            <path d="M20 32 L28 40 L44 24" stroke="oklch(0.55 0.15 150)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-caveat text-2xl font-bold mb-2">Thank You!</h3>
        <p className="font-kalam text-muted-foreground">
          WhatsApp khul chuka hai — bas send dabaiye aur hum 24 hours mein contact karenge.
        </p>
        <Button
          variant="link"
          className="mt-4 font-patrick"
          onClick={() => setIsSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-patrick text-sm font-semibold">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && (
            <p className="font-kalam text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="font-patrick text-sm font-semibold">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            placeholder="+91 99999 99999"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="font-kalam text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="font-patrick text-sm font-semibold">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="font-kalam text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="businessType" className="font-patrick text-sm font-semibold">
            Business Type
          </Label>
          <Input
            id="businessType"
            placeholder="e.g., Restaurant, Clinic, Salon"
            {...register("businessType")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service" className="font-patrick text-sm font-semibold">
          Service Interested In
        </Label>
        <Input
          id="service"
          placeholder="e.g., Website Design, Google Ads"
          {...register("service")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="font-patrick text-sm font-semibold">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your business and requirements..."
          rows={4}
          {...register("message")}
        />
        {errors.message && (
          <p className="font-kalam text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full font-patrick" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send via WhatsApp
          </>
        )}
      </Button>
    </form>
  );
}
