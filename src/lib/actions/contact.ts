"use server";

import { Resend } from "resend";
import { contactSchema, type ContactInput } from "@/lib/schemas/contact";
import { stripHtml } from "@/lib/sanitize";
import { siteConfig } from "@/lib/site-config";
import ContactNotification from "@/emails/contact-notification";

type ActionResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

/**
 * Server Action — envoi du formulaire de contact via Resend.
 *
 * Pipeline :
 *  1. Parse Zod (input)
 *  2. Honeypot : si `maxou_hp` rempli → 200 OK silencieux (bot)
 *  3. Sanitize des champs texte (strip HTML)
 *  4. Envoi Resend avec replyTo = email du visiteur
 */
export async function sendContactMessage(input: ContactInput): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      ok: false,
      error: "Quelques informations sont manquantes ou incorrectes.",
      fieldErrors,
    };
  }

  const data = parsed.data;

  // ─── Honeypot ────────────────────────────────────────────────
  if (data.maxou_hp && data.maxou_hp.trim().length > 0) {
    return { ok: true };
  }

  // ─── Resend ─────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "contact@maxou-officiel.fr";
  const toEmail = process.env.CONTACT_RECIPIENT_EMAIL ?? siteConfig.contact.email;

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY manquante");
    return {
      ok: false,
      error: `Le serveur de messagerie n'est pas encore configuré. Écrivez-moi directement à ${siteConfig.contact.email}.`,
    };
  }

  const cleanName = stripHtml(data.name);
  const cleanMessage = stripHtml(data.message);
  const cleanOrg = data.organisation ? stripHtml(data.organisation) : "";

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: `${siteConfig.name} <${fromEmail}>`,
      to: [toEmail],
      replyTo: `${cleanName} <${data.email}>`,
      subject: `[Contact] ${data.requestType} — ${cleanName}`,
      react: ContactNotification({
        name: cleanName,
        email: data.email,
        phone: data.phone,
        requestType: data.requestType,
        organisation: cleanOrg,
        message: cleanMessage,
      }),
    });

    if (result.error) {
      console.error("[contact] Resend error", result.error);
      return {
        ok: false,
        error:
          "Un problème est survenu lors de l'envoi. Réessayez dans quelques instants ou écrivez-moi directement.",
      };
    }
    return { ok: true };
  } catch (err) {
    console.error("[contact] send failed", err);
    return {
      ok: false,
      error:
        "Un problème est survenu lors de l'envoi. Réessayez dans quelques instants ou écrivez-moi directement.",
    };
  }
}
