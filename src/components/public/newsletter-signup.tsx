"use client";

import { useId, useState, useTransition } from "react";
import { Check, Loader2 } from "lucide-react";
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
 * Inscription newsletter, style galerie : champ à filet 1px + bouton anthracite
 * en capitales. Honeypot dédié `maxxou_news_hp`. `tone` conservé pour
 * compatibilité (la DA galerie est toujours claire).
 */
export function NewsletterSignup({ tone = "light" }: { tone?: "light" | "dark" }) {
  const id = useId();
  const dark = tone === "dark";
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function handleSubmit(formData: FormData) {
    const payload = {
      email: String(formData.get("email") ?? ""),
      consent: formData.get("consent") === "on",
      maxxou_news_hp: String(formData.get("maxxou_news_hp") ?? ""),
    } as unknown as NewsletterInput;

    setStatus({ kind: "submitting" });
    startTransition(async () => {
      const result = await subscribeNewsletter(payload);
      setStatus(result.ok ? { kind: "success" } : { kind: "error", message: result.error });
    });
  }

  if (status.kind === "success") {
    return (
      <div className="flex items-center gap-3 border border-ink/15 bg-ivory p-5 text-sm text-stone-600">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center bg-ink text-ivory">
          <Check size={18} aria-hidden />
        </span>
        <p>
          C&apos;est noté, merci ! Vous recevrez les prochaines dates et nouveautés en
          avant-première.
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
        name="maxxou_news_hp"
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
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-none bg-ink px-7 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-noir-700 disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} aria-hidden className="animate-spin" />
              Envoi…
            </>
          ) : (
            "S'inscrire"
          )}
        </button>
      </div>

      <label
        className={cn(
          "mt-3 flex items-start gap-2.5 text-xs",
          dark ? "text-ivory/70" : "text-stone-500",
        )}
      >
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 rounded-none border-ink/30 text-ink focus:ring-ink"
        />
        <span>
          J&apos;accepte de recevoir les actualités de Maxxou Officiel par email. Désinscription
          en un clic à tout moment. Voir la{" "}
          <a href="/confidentialite" className="text-gold-700 underline-offset-4 hover:underline">
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
