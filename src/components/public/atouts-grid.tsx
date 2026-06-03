import {
  Shuffle,
  Mic,
  Puzzle,
  BookOpen,
  HeartHandshake,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { atouts } from "@/data/atouts";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

const ICONS: Record<string, LucideIcon> = {
  shuffle: Shuffle,
  mic: Mic,
  puzzle: Puzzle,
  "book-open": BookOpen,
  "heart-handshake": HeartHandshake,
  sparkles: Sparkles,
};

/**
 * Grille « pourquoi faire confiance à Maxxou ».
 * `tone="dark"` pour un fond sombre (bleu nuit / bordeaux).
 */
export function AtoutsGrid({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  return (
    <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {atouts.map((a) => {
        const Icon = ICONS[a.icon] ?? Sparkles;
        return (
          <StaggerItem
            key={a.title}
            as="article"
            className={
              dark
                ? "hover-lift flex h-full flex-col rounded-2xl bg-ivory/[0.04] p-6 ring-1 ring-ivory/10"
                : "hover-lift flex h-full flex-col rounded-2xl bg-ivory p-6 shadow-soft ring-1 ring-noir-900/10"
            }
          >
            <span
              className={
                dark
                  ? "inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/15 text-gold-300 ring-1 ring-gold-400/25"
                  : "inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25"
              }
            >
              <Icon size={20} aria-hidden />
            </span>
            <h3
              className={
                dark ? "mt-4 font-display text-xl text-ivory" : "mt-4 font-display text-xl text-ink"
              }
            >
              {a.title}
            </h3>
            <p
              className={
                dark
                  ? "mt-2 text-sm leading-relaxed text-cream-100/75"
                  : "mt-2 text-sm leading-relaxed text-stone-600"
              }
            >
              {a.description}
            </p>
          </StaggerItem>
        );
      })}
    </StaggerReveal>
  );
}
