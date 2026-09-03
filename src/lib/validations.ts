import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(/^\+?[\d\s-]+$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  businessType: z.string().optional(),
  service: z.string().optional(),
  message: z
    .string()
    .max(1000, "Message must be less than 1000 characters")
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
