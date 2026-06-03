"use client";

import Link from "next/link";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Representation } from "@/data/dates";
import { parseTicketDate } from "./format";

type Props = {
  representation: Representation;
  /** Lien de repli quand aucune billetterie n'est renseignée. */
  fallbackHref: string;
};

/**
 * Un talon de billet par représentation — variante Ticket.
 * Date à gauche (gros), salle/ville au centre, statut à droite (coupon
 * « RÉSERVER » / tampon « COMPLET » bordeaux / « BIENTÔT »). Perforation
 * verticale entre le corps et le talon de statut.
 */
export function DateStub({ representation, fallbackHref }: Props) {
  const { jour, mois, annee, semaine } = parseTicketDate(representation.date);
  const href = representation.ticketUrl ? representation.ticketUrl : fallbackHref;
  const external = Boolean(representation.ticketUrl);

  return (
    <article
      className={cn(
        "group relative grid grid-cols-[auto_1fr_auto] items-stretch overflow-hidden rounded-[2px] border border-ink/15 bg-ivory",
        "transition-colors duration-300 hover:border-ink/40",
      )}
    >
      {/* ── Bloc date (gros) ────────────────────────────────── */}
      <div className="flex flex-col items-center justify-center border-r border-dashed border-ink/20 bg-paper px-4 py-5 sm:px-6">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-stone-500">
          {semaine}
        </span>
        <span className="font-display text-4xl leading-none text-ink sm:text-5xl">{jour}</span>
        <span className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-gold-700">
          {mois} {annee}
        </span>
      </div>

      {/* ── Corps : salle, ville, horaire ───────────────────── */}
      <div className="flex min-w-0 flex-col justify-center gap-1.5 px-4 py-5 sm:px-6">
        <h3 className="truncate font-display text-lg leading-tight text-ink sm:text-xl">
          {representation.venue}
        </h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-stone-600">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} aria-hidden />
            {representation.city}
          </span>
          {representation.time ? (
            <span className="inline-flex items-center gap-1.5">
              <Clock size={12} aria-hidden />
              {representation.time}
            </span>
          ) : null}
        </div>
        {representation.note ? (
          <p className="text-xs italic leading-snug text-stone-500">{representation.note}</p>
        ) : null}
      </div>

      {/* ── Perforation verticale ───────────────────────────── */}
      <span
        aria-hidden
        className="hidden w-px self-stretch sm:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgb(32 32 31 / 0.35) 0 4px, transparent 4px 9px)",
        }}
      />

      {/* ── Talon de statut ─────────────────────────────────── */}
      <div className="flex shrink-0 items-center justify-center bg-paper px-3 py-5 sm:px-5">
        {representation.status === "open" ? (
          <Link
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-1.5 rounded-[2px] bg-ink px-4 py-2.5 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-paper transition-colors duration-200 hover:bg-gold-600 hover:text-ink"
          >
            Réserver
            <ArrowUpRight
              size={14}
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        ) : representation.status === "soldout" ? (
          <span
            className="inline-flex -rotate-6 select-none items-center justify-center rounded-[2px] border-2 border-wine-600 px-3 py-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.22em] text-wine-700"
            aria-label="Représentation complète"
          >
            Complet
          </span>
        ) : (
          <span className="inline-flex items-center justify-center rounded-[2px] border border-dashed border-ink/40 px-3 py-2.5 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-stone-600">
            Bientôt
          </span>
        )}
      </div>
    </article>
  );
}
