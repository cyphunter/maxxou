"use server";

import { Resend } from "resend";
import { newsletterSchema, type NewsletterInput } from "@/lib/schemas/newsletter";
import { siteConfig } from "@/lib/site-config";
import NewsletterNotification from "@/emails/newsletter-notification";

type ActionResult = { ok: true } | { ok: false; error: string };

/**
 * Server Action — inscription à la newsletter.
 *
 * Site showcase sans base de données : on notifie Maxou par email (Resend) de
 * chaque nouvelle inscription. Pour brancher un vrai service (Brevo, Mailchimp,
 * Resend Audiences…), remplacer l'envoi par un appel à l'API du provider ici.
 */
export async function subscribeNewsletter(input: NewsletterInput): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse(input);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Email invalide.";
    return { ok: false, error: first };
  }

  const data = parsed.data;

  // Honeypot → faux succès silencieux
  if (data.maxou_news_hp && data.maxou_news_hp.trim().length > 0) {
    return { ok: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "contact@maxou-officiel.fr";
  const toEmail = process.env.NEWSLETTER_RECIPIENT_EMAIL ?? siteConfig.contact.email;

  if (!apiKey) {
    console.error("[newsletter] RESEND_API_KEY manquante");
    return {
      ok: false,
      error: "L'inscription n'est pas encore active. Réessayez bientôt.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: `${siteConfig.name} <${fromEmail}>`,
      to: [toEmail],
      replyTo: data.email,
      subject: `[Newsletter] Nouvelle inscription — ${data.email}`,
      react: NewsletterNotification({ email: data.email }),
    });

    if (result.error) {
      console.error("[newsletter] Resend error", result.error);
      return { ok: false, error: "Un problème est survenu. Réessayez dans un instant." };
    }
    return { ok: true };
  } catch (err) {
    console.error("[newsletter] send failed", err);
    return { ok: false, error: "Un problème est survenu. Réessayez dans un instant." };
  }
}
