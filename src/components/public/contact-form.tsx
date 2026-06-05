"use client";

import { useId, useState, useTransition } from "react";
import { Check, Loader2 } from "lucide-react";
import { sendContactMessage } from "@/lib/actions/contact";
import { REQUEST_TYPES, type ContactInput, type RequestType } from "@/lib/schemas/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { siteConfig } from "@/lib/site-config";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string; fieldErrors?: Record<string, string> };

export function ContactForm({ defaultRequestType }: { defaultRequestType?: RequestType }) {
  const formId = useId();
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function handleSubmit(formData: FormData) {
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      requestType: String(formData.get("requestType") ?? ""),
      organisation: String(formData.get("organisation") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      maxxou_hp: String(formData.get("maxxou_hp") ?? ""),
    } as unknown as ContactInput;

    setStatus({ kind: "submitting" });
    startTransition(async () => {
      const result = await sendContactMessage(payload);
      if (result.ok) {
        setStatus({ kind: "success" });
      } else {
        setStatus({ kind: "error", message: result.error, fieldErrors: result.fieldErrors });
      }
    });
  }

  if (status.kind === "success") {
    return (
      <div className="border border-ink/15 bg-paper p-8 sm:p-10">
        <div className="inline-flex h-12 w-12 items-center justify-center bg-ink text-ivory">
          <Check size={22} aria-hidden />
        </div>
        <h2 className="mt-6 font-display text-2xl font-normal text-ink">
          Message bien reçu, merci !
        </h2>
        <p className="mt-3 leading-relaxed text-stone-600">
          Je reviens vers vous très rapidement. En attendant, suivez les coulisses sur Instagram
          ({siteConfig.instagramHandle}) — c&apos;est là que tout se passe.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-6 inline-flex items-center gap-2 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-ink underline-offset-4 hover:underline"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  const isSubmitting = status.kind === "submitting" || pending;
  const errors = status.kind === "error" ? status.fieldErrors ?? {} : {};

  return (
    <form action={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot anti-spam (caché) */}
      <input type="hidden" name="maxxou_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          name="name"
          label="Nom et prénom"
          required
          autoComplete="name"
          error={errors.name}
        />
        <Field
          id={`${formId}-email`}
          name="email"
          type="email"
          label="Email"
          required
          autoComplete="email"
          error={errors.email}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          label="Téléphone (facultatif)"
          autoComplete="tel"
          error={errors.phone}
        />
        <div>
          <FieldLabel htmlFor={`${formId}-requestType`} required>
            Votre demande
          </FieldLabel>
          <Select
            id={`${formId}-requestType`}
            name="requestType"
            required
            defaultValue={defaultRequestType ?? ""}
            invalid={Boolean(errors.requestType)}
            className="mt-1.5"
            aria-describedby={errors.requestType ? `${formId}-requestType-error` : undefined}
          >
            <option value="" disabled>
              Choisissez…
            </option>
            {REQUEST_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
          <FieldError id={`${formId}-requestType-error`} error={errors.requestType} />
        </div>
      </div>

      <Field
        id={`${formId}-organisation`}
        name="organisation"
        label="Structure / organisation (facultatif)"
        placeholder="Salle, festival, entreprise, école, média…"
        autoComplete="organization"
        error={errors.organisation}
      />

      <div>
        <FieldLabel htmlFor={`${formId}-message`} required>
          Votre message
        </FieldLabel>
        <Textarea
          id={`${formId}-message`}
          name="message"
          rows={6}
          required
          minLength={20}
          maxLength={5000}
          className="mt-1.5"
          placeholder="Date envisagée, ville, jauge de la salle, contexte de l'intervention, idée de partenariat… Dites-moi tout !"
          invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
        />
        <FieldError id={`${formId}-message-error`} error={errors.message} />
      </div>

      <label className="flex items-start gap-3 text-sm text-stone-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded-none border-ink/30 text-ink focus:ring-ink"
        />
        <span>
          J&apos;accepte que mes données soient utilisées pour être recontacté(e) au sujet de ma
          demande. Voir la{" "}
          <a href="/confidentialite" className="text-gold-700 underline-offset-4 hover:underline">
            politique de confidentialité
          </a>
          .
        </span>
      </label>
      {errors.consent ? <p className="text-xs text-error">{errors.consent}</p> : null}

      {status.kind === "error" ? (
        <div role="alert" className="border border-error/40 bg-error/5 p-4 text-sm text-error">
          {status.message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-none bg-ink px-7 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-noir-700 disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} aria-hidden className="animate-spin" />
            Envoi en cours…
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </button>
    </form>
  );
}

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[0.78rem] font-medium uppercase tracking-[0.12em] text-stone-600"
    >
      {children} {required ? <span className="text-gold-700">*</span> : null}
    </label>
  );
}

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-1.5 text-xs text-error">
      {error}
    </p>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <Input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-1.5"
        invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}
