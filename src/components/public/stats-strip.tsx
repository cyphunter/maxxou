import { stats } from "@/data/stats";
import { AnimatedCounter } from "@/components/motion/animated-counter";

/**
 * Bandeau de chiffres animés (décompte au scroll). Ton volontairement léger.
 * Filets 1px, grands numéraux display, l'or sur le numéral.
 */
export function StatsStrip() {
  return (
    <div className="grid grid-cols-2 border-t border-ink/10 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="border-b border-ink/10 px-1 py-10 sm:px-6 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-r-ink/10"
        >
          <p className="font-display text-[clamp(2.5rem,5vw,4rem)] font-normal leading-none text-gold-700">
            <AnimatedCounter
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              decimals={s.decimals}
            />
          </p>
          <p className="mt-4 text-sm leading-snug text-stone-600">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
