import { benefices } from "@/data/benefices";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

/**
 * Bénéfices du spectacle, style galerie : grille numérotée, filets 1px,
 * aucun aplat ni icône — la typographie et le blanc structurent.
 */
export function BeneficesGrid() {
  return (
    <StaggerReveal
      className="grid grid-cols-1 border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3"
      stagger={0.06}
    >
      {benefices.map((b, i) => (
        <StaggerItem
          key={b.title}
          as="article"
          className="group border-b border-ink/10 px-1 py-10 transition-colors hover:bg-ivory sm:px-6 lg:[&:nth-child(3n+2)]:border-x lg:[&:nth-child(3n+2)]:border-x-ink/10"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-display text-sm tabular-nums text-gold-700">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-xl leading-tight text-ink">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{b.description}</p>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}
