import { z } from "zod";

/**
 * Inscription newsletter — un seul champ email + consentement RGPD.
 * Honeypot dédié `maxxou_news_hp`.
 */
export const newsletterSchema = z.object({
  email: z.string().email("Email invalide").max(254),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Cochez la case pour confirmer votre inscription" }),
  }),
  maxxou_news_hp: z.string().max(0).optional().or(z.literal("")),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
