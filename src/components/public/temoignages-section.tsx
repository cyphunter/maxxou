import { Quote } from "lucide-react";
import { temoignages } from "@/data/temoignages";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

export function TemoignagesSection() {
  return (
    <StaggerReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {temoignages.slice(0, 6).map((t) => (
        <StaggerItem key={t.id} className="h-full">
          <figure className="hover-lift flex h-full flex-col rounded-2xl bg-ivory p-7 shadow-soft ring-1 ring-noir-900/10">
            <Quote size={28} aria-hidden className="text-gold-500" />
            <blockquote className="mt-4 flex-1 leading-relaxed text-stone-700">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-noir-900/10 pt-4">
              <p className="font-display text-lg text-ink">{t.author}</p>
              <p className="text-sm text-stone-500">{t.role}</p>
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}
