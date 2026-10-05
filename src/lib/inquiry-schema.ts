import { z } from "zod";
import {
  APPOINTMENT_MOTIFS,
  BUDGET_OPTIONS,
  CONTACT_PREFERENCES,
  NEED_TYPES,
} from "@/lib/site";

const needValues = NEED_TYPES.map((item) => item.value) as [
  (typeof NEED_TYPES)[number]["value"],
  ...(typeof NEED_TYPES)[number]["value"][],
];
const budgetValues = BUDGET_OPTIONS.map((item) => item.value) as [
  (typeof BUDGET_OPTIONS)[number]["value"],
  ...(typeof BUDGET_OPTIONS)[number]["value"][],
];
const contactValues = CONTACT_PREFERENCES.map((item) => item.value) as [
  (typeof CONTACT_PREFERENCES)[number]["value"],
  ...(typeof CONTACT_PREFERENCES)[number]["value"][],
];
const motifValues = APPOINTMENT_MOTIFS.map((item) => item.value) as [
  (typeof APPOINTMENT_MOTIFS)[number]["value"],
  ...(typeof APPOINTMENT_MOTIFS)[number]["value"][],
];

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((value) => (value ? value : undefined));

export const DESCRIPTION_MAX = 4000;

export const projectInquirySchema = z.object({
  name: z.string().trim().min(1, "Indiquez votre nom.").max(120),
  email: z
    .string()
    .trim()
    .min(1, "Indiquez une adresse e-mail.")
    .email("Indiquez une adresse e-mail valide.")
    .max(254)
    .transform((value) => value.toLowerCase()),
  phone: optionalText(40),
  organization: optionalText(160),
  needType: z.enum(needValues, { error: "Choisissez un type de besoin." }),
  description: z
    .string()
    .trim()
    .min(20, "Décrivez un peu plus le projet (au moins 20 caractères).")
    .max(DESCRIPTION_MAX, `La description est limitée à ${DESCRIPTION_MAX} caractères.`),
  objective: optionalText(1000),
  timeline: optionalText(200),
  budget: z.enum(budgetValues).optional(),
  contactPreference: z.enum(contactValues).optional(),
  consent: z.literal(true, {
    error: "Le consentement est nécessaire pour envoyer la demande.",
  }),
  faxNumber: z.string().max(120).optional(),
});

export const appointmentInquirySchema = z.object({
  name: z.string().trim().min(1, "Indiquez votre nom.").max(120),
  email: z
    .string()
    .trim()
    .min(1, "Indiquez une adresse e-mail.")
    .email("Indiquez une adresse e-mail valide.")
    .max(254)
    .transform((value) => value.toLowerCase()),
  phone: optionalText(40),
  organization: optionalText(160),
  motif: z.enum(motifValues, { error: "Choisissez un motif." }),
  availability: z
    .string()
    .trim()
    .min(8, "Proposez au moins une disponibilité.")
    .max(1000),
  timezone: z.string().trim().min(1, "Indiquez un fuseau horaire.").max(80),
  notes: optionalText(1000),
  contactPreference: z.enum(contactValues).optional(),
  consent: z.literal(true, {
    error: "Le consentement est nécessaire pour envoyer la demande.",
  }),
  faxNumber: z.string().max(120).optional(),
});

export type ProjectInquiryInput = z.input<typeof projectInquirySchema>;
export type AppointmentInquiryInput = z.input<typeof appointmentInquirySchema>;

export const inquiryStatusSchema = z.enum(["new", "in_review", "replied", "closed"]);
export type InquiryStatus = z.infer<typeof inquiryStatusSchema>;

export const INQUIRY_STATUS_LABELS: Record<InquiryStatus, string> = {
  new: "Nouvelle",
  in_review: "En examen",
  replied: "Réponse envoyée",
  closed: "Clôturée",
};
