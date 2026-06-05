import { Plus } from "lucide-react";
import type { FaqEntry } from "@/data/faq";

/**
 * FAQ « galerie » : liste de <details>/<summary> natifs (aucun JS requis),
 * filets 1px, croix qui pivote à l'ouverture. Sobre et accessible.
 */
export function FaqAccordion({ entries }: { entries: readonly FaqEntry[] }) {
  return (
    <ul className="border-t border-ink/15">
      {entries.map((entry) => (
        <li key={entry.question} className="border-b border-ink/15">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
              <span className="font-display text-lg leading-snug text-ink transition-colors group-hover:text-gold-800">
                {entry.question}
              </span>
              <Plus
                size={18}
                aria-hidden
                className="shrink-0 text-stone-500 transition-transform duration-300 group-open:rotate-45"
              />
            </summary>
            <div className="overflow-hidden pb-6 pr-10">
              <p className="max-w-2xl text-sm leading-relaxed text-stone-600">{entry.answer}</p>
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}
