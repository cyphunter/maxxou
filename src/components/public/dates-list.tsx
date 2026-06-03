import Link from "next/link";
import { MapPin, Ticket, Clock } from "lucide-react";
import { representations, type Representation } from "@/data/dates";
import { cn } from "@/lib/utils";

const MOIS = [
  "janv.", "févr.", "mars", "avr.", "mai", "juin",
  "juil.", "août", "sept.", "oct.", "nov.", "déc.",
];
const JOURS = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  return {
    weekday: JOURS[date.getUTCDay()],
    day: String(d).padStart(2, "0"),
    month: MOIS[(m ?? 1) - 1],
    year: y,
  };
}

function StatusAction({ r }: { r: Representation }) {
  if (r.status === "open") {
    const href = r.ticketUrl && r.ticketUrl.length > 0 ? r.ticketUrl : "/contact?sujet=spectacle";
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group/btn inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-medium text-noir-900 transition-colors hover:bg-gold-400"
      >
        <Ticket size={15} aria-hidden />
        Réserver
      </Link>
    );
  }
  if (r.status === "soon") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-gold-700 ring-1 ring-gold-600/40">
        <Clock size={15} aria-hidden />
        Bientôt
      </span>
    );
  }
  if (r.status === "soldout") {
    return (
      <span className="inline-flex items-center rounded-full bg-noir-900/[0.06] px-5 py-2.5 text-sm font-medium text-stone-500 ring-1 ring-noir-900/10">
        Complet
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full px-5 py-2.5 text-sm text-stone-400">
      Terminé
    </span>
  );
}

/**
 * Liste des représentations. `limit` pour un aperçu (home). `showPast` pour
 * inclure les dates passées (archives).
 */
export function DatesList({
  limit,
  showPast = false,
}: {
  limit?: number;
  showPast?: boolean;
}) {
  const upcoming = representations
    .filter((r) => (showPast ? true : r.status !== "past"))
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date));

  const list = typeof limit === "number" ? upcoming.slice(0, limit) : upcoming;

  if (list.length === 0) {
    return (
      <p className="rounded-2xl bg-ivory p-8 text-center text-stone-500 ring-1 ring-noir-900/10">
        Les prochaines dates seront annoncées très bientôt. Inscrivez-vous à la newsletter pour
        être prévenu·e en premier.
      </p>
    );
  }

  return (
    <ol className="overflow-hidden rounded-2xl bg-ivory ring-1 ring-noir-900/10">
      {list.map((r, i) => {
        const f = formatDate(r.date);
        const dim = r.status === "past";
        return (
          <li
            key={r.id}
            className={cn(
              "flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6",
              i > 0 && "border-t border-noir-900/10",
              dim && "opacity-60",
            )}
          >
            {/* Date */}
            <div className="flex shrink-0 items-baseline gap-2 sm:w-28 sm:flex-col sm:items-center sm:gap-0 sm:text-center">
              <span className="hidden text-xs uppercase tracking-[0.18em] text-stone-400 sm:block">
                {f.weekday}
              </span>
              <span className="font-display text-4xl leading-none text-ink">{f.day}</span>
              <span className="text-sm uppercase tracking-[0.16em] text-gold-700">
                {f.month} {f.year}
              </span>
            </div>

            {/* Filet vertical */}
            <span aria-hidden className="hidden h-12 w-px bg-noir-900/10 sm:block" />

            {/* Infos */}
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-xl text-ink">{r.venue}</h3>
              <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-stone-600">
                <MapPin size={14} aria-hidden className="text-gold-700" />
                <span className="font-medium text-ink">{r.city}</span>
                {r.address ? <span className="text-stone-500">· {r.address}</span> : null}
                {r.time ? <span className="text-stone-500">· {r.time}</span> : null}
              </p>
              {r.note ? <p className="mt-1 text-xs italic text-stone-500">{r.note}</p> : null}
            </div>

            {/* Action */}
            <div className="shrink-0 sm:ml-auto">
              <StatusAction r={r} />
            </div>
          </li>
        );
      })}
    </ol>
  );
}
