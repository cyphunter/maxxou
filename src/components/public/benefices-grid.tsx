import { Telescope, Brain, Feather, Smile, Puzzle, Sparkles, type LucideIcon } from "lucide-react";
import { benefices } from "@/data/benefices";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

const ICONS: Record<string, LucideIcon> = {
  telescope: Telescope,
  brain: Brain,
  feather: Feather,
  smile: Smile,
  puzzle: Puzzle,
};

export function BeneficesGrid() {
  return (
    <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {benefices.map((b) => {
        const Icon = ICONS[b.icon] ?? Sparkles;
        return (
          <StaggerItem
            key={b.title}
            as="article"
            className="hover-lift flex h-full flex-col rounded-2xl bg-ivory p-6 shadow-soft ring-1 ring-noir-900/10"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/25">
              <Icon size={20} aria-hidden />
            </span>
            <h3 className="mt-4 font-display text-xl text-ink">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{b.description}</p>
          </StaggerItem>
        );
      })}
    </StaggerReveal>
  );
}
