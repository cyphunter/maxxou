import { representations, type Representation } from "@/data/dates";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";
import { UnderlineLink } from "@/components/ui/gallery";

const MOIS = [
  "janv.", "févr.", "mars", "avr.", "mai", "juin",
  "juil.", "août", "sept.", "oct.", "nov.", "déc.",
];

function formatDate(iso: string): { day: string; month: string; year: string } {
  const [y, m, d] = iso.split("-");
  return {
    day: d ?? "",
    month: MOIS[Number(m) - 1] ?? "",
    year: y ?? "",
  };
}

const STATUS_LABEL: Record<Representation["status"], string> = {
  open: "Réserver",
  soon: "Bientôt",
  soldout: "Complet",
  past: "Passé",
};

/**
 * Liste des représentations, style galerie : rangées séparées par des filets,
 * date en gros chiffres, lieu, et action en lien-cartel. `limit` pour un aperçu
 * (home) ; `showPast` pour inclure les archives.
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
      <p className="border border-ink/15 bg-ivory p-8 text-center text-sm leading-relaxed text-stone-500">
        Les prochaines dates seront annoncées très bientôt. Inscrivez-vous à la newsletter pour
        être prévenu·e en premier.
      </p>
    );
  }

  return (
    <StaggerReveal className="border-t border-ink/15" stagger={0.07}>
      {list.map((r) => {
        const { day, month, year } = formatDate(r.date);
        const reservable = r.status === "open";
        const dim = r.status === "past";
        const href =
          r.ticketUrl && r.ticketUrl.length > 0 ? r.ticketUrl : "/contact?sujet=spectacle";
        return (
          <StaggerItem
            key={r.id}
            as="article"
            className={`group grid grid-cols-1 items-center gap-4 border-b border-ink/15 py-7 sm:grid-cols-12 sm:gap-6 ${
              dim ? "opacity-55" : ""
            }`}
          >
            {/* Date */}
            <div className="flex items-baseline gap-3 sm:col-span-3">
              <span className="font-display text-3xl leading-none tabular-nums text-ink">
                {day}
              </span>
              <span className="text-sm uppercase tracking-[0.14em] text-stone-500">
                {month} {year}
                {r.time ? ` · ${r.time}` : ""}
              </span>
            </div>

            {/* Lieu */}
            <div className="sm:col-span-6">
              <p className="font-display text-lg leading-tight text-ink">
                {r.city}
                <span className="mx-2 text-stone-300">—</span>
                <span className="text-stone-600">{r.venue}</span>
              </p>
              {r.address ? (
                <p className="mt-1 text-[0.82rem] text-stone-500">{r.address}</p>
              ) : null}
              {r.note ? (
                <p className="mt-1 text-[0.78rem] uppercase tracking-[0.12em] text-gold-700">
                  {r.note}
                </p>
              ) : null}
            </div>

            {/* Action */}
            <div className="sm:col-span-3 sm:text-right">
              {reservable ? (
                <UnderlineLink
                  href={href}
                  withArrow
                  external={Boolean(r.ticketUrl && r.ticketUrl.length > 0)}
                  className="text-ink"
                >
                  {STATUS_LABEL[r.status]}
                </UnderlineLink>
              ) : (
                <span className="inline-flex text-[0.82rem] font-medium uppercase tracking-[0.18em] text-stone-400">
                  {STATUS_LABEL[r.status]}
                </span>
              )}
            </div>
          </StaggerItem>
        );
      })}
    </StaggerReveal>
  );
}
