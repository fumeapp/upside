import { z } from "zod";

export const CONTACT_METHODS = [
  "Phone Call",
  "Text Message",
  "Email",
  "Irvine Showroom Appointment",
] as const;

export const LIFT_INTERESTS = [
  "Stiltz Duo Alta (Compact 2-Person)",
  "Stiltz Trio Alta (Wheelchair Accessible)",
  "Not Sure Yet — Help Me Choose",
] as const;

export const consultationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(30)
    .regex(/^[0-9+().\-\s]+$/, "Please enter a valid phone number"),
  zipCode: z
    .string()
    .trim()
    .regex(/^\d{5}(-\d{4})?$/, "Please enter a valid 5-digit ZIP code"),
  email: z.email("Please enter a valid email address").max(160),
  contactMethod: z.enum(CONTACT_METHODS),
  productInterest: z.enum(LIFT_INTERESTS),
  comments: z.string().trim().max(2000).optional().default(""),
  veteranSpecial: z.boolean().optional().default(false),
  smsOptIn: z.boolean().optional().default(false),
  website: z.string().max(200).optional().default(""),
});

export type ConsultationInput = z.input<typeof consultationSchema>;
export type ConsultationPayload = z.output<typeof consultationSchema>;
