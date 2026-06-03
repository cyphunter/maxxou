"use client";

import { useId, useState, useTransition } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { subscribeNewsletter } from "@/lib/actions/newsletter";
import { type NewsletterInput } from "@/lib/schemas/newsletter";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

/**
 * Inscription newsletter. `tone="dark"` pour fond sombre (bleu nuit / bordeaux).
 * Honeypot dédié `maxou_news_hp`.
 */
export function NewsletterSignup({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const id = useId();
  const dark = tone === "dark";
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function handleSubmit(formData: FormData) {
    const payload = {
      email: String(formData.get("email") ?? ""),
      consent: formData.get("consent") === "on",
      maxou_news_hp: String(formData.get("maxou_news_hp") ?? ""),
    } as unknown as NewsletterInput;

    setStatus({ kind: "submitting" });
    startTransition(async () => {
      const result = await subscribeNewsletter(payload);
      setStatus(result.ok ? { kind: "success" } : { kind: "error", message: result.error });
    });
  }

  if (status.kind === "success") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-2xl p-5 text-sm",
          dark ? "bg-ivory/10 text-cream-100 ring-1 ring-gold-400/30" : "bg-success/10 text-success",
        )}
      >
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500 text-noir-900">
          <Check size={18} aria-hidden />
        </span>
        <p>
          C&apos;est noté, merci ! Vous recevrez les prochaines dates et nouveautés en avant-première.
        </p>
      </div>
    );
  }

  const isSubmitting = status.kind === "submitting" || pending;

  return (
    <form action={handleSubmit} className="w-full" noValidate>
      {/* Honeypot */}
      <input
        type="hidden"
        name="maxou_news_hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor={`${id}-email`} className="sr-only">
            Votre adresse email
          </label>
          <Input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="votre@email.fr"
            invalid={status.kind === "error"}
            className={dark ? "bg-ivory/95" : undefined}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-gold-500 px-6 py-3 text-sm font-medium text-noir-900 transition-colors hover:bg-gold-400 disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} aria-hidden className="animate-spin" />
              Envoi…
            </>
          ) : (
            <>
              <Send size={16} aria-hidden />
              S&apos;inscrire
            </>
          )}
        </button>
      </div>

      <label
        className={cn(
          "mt-3 flex items-start gap-2.5 text-xs",
          dark ? "text-cream-100/70" : "text-stone-500",
        )}
      >
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 rounded border-noir-900/30 text-gold-600 focus:ring-gold-500"
        />
        <span>
          J&apos;accepte de recevoir les actualités de Maxou Officiel par email. Désinscription
          en un clic à tout moment. Voir la{" "}
          <a
            href="/confidentialite"
            className={cn(
              "underline-offset-4 hover:underline",
              dark ? "text-gold-300" : "text-gold-700",
            )}
          >
            politique de confidentialité
          </a>
          .
        </span>
      </label>

      {status.kind === "error" ? (
        <p role="alert" className="mt-2 text-xs text-error">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
