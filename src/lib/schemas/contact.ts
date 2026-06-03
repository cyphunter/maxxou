import { z } from "zod";

/** Nature de la demande proposée dans le formulaire de contact. */
export const REQUEST_TYPES = [
  "Réserver / programmer le spectacle",
  "Intervention ou atelier",
  "Partenariat / presse / médias",
  "Autre demande",
] as const;
export type RequestType = (typeof REQUEST_TYPES)[number];

export const contactSchema = z.object({
  name: z.string().min(2, "Nom trop court").max(120, "Nom trop long"),
  email: z.string().email("Email invalide").max(254),
  phone: z
    .string()
    .max(20, "Numéro trop long")
    .regex(/^[\d\s+()-]*$/, "Numéro invalide")
    .optional()
    .or(z.literal("")),
  requestType: z.enum(REQUEST_TYPES, {
    errorMap: () => ({ message: "Choisissez le motif de votre demande" }),
  }),
  organisation: z
    .string()
    .max(160, "Nom trop long")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(20, "Message trop court (20 caractères min)")
    .max(5000, "Message trop long"),
  // Consentement RGPD (case non pré-cochée, obligatoire)
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Vous devez accepter la politique de confidentialité",
    }),
  }),
  // Honeypot anti-spam (champ caché — doit rester vide)
  maxou_hp: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
