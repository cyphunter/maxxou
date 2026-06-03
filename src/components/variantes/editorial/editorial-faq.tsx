import { Plus } from "lucide-react";

import type { FaqEntry } from "@/data/faq";

/**
 * FAQ de la variante « Éditorial sobre ».
 * Accordéon NATIF <details>/<summary>, numéroté, séparé par des filets 1px.
 * Carré (rounded-none), sans ombre. L'icône pivote à l'ouverture.
 */
export function EditorialFaq({ entries }: { entries: readonly FaqEntry[] }) {
  return (
    <div className="border-t border-ink/15">
      {entries.map((item, i) => (
        <details
          key={item.question}
          className="group border-b border-ink/15 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-start gap-5 py-5 transition-colors hover:bg-ivory/60">
            <span className="mt-0.5 w-8 shrink-0 font-display text-sm text-gold-700 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="flex-1 font-display text-lg leading-snug text-ink lg:text-xl">
              {item.question}
            </h3>
            <span className="mt-0.5 shrink-0 text-stone-500 transition-transform duration-300 group-open:rotate-45">
              <Plus size={20} aria-hidden />
            </span>
          </summary>
          <div className="grid grid-cols-[2rem_1fr] gap-5 pb-6 pr-0 lg:pr-12">
            <span aria-hidden />
            <p className="text-sm leading-relaxed text-stone-600">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
