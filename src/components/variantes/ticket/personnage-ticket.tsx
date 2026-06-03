"use client";

import {
  Gavel,
  CloudRain,
  Ruler,
  Sparkles,
  Shield,
  Hourglass,
  Cloud,
  Compass,
  type LucideIcon,
} from "lucide-react";

import { SmartImage } from "@/components/ui/smart-image";
import { cn } from "@/lib/utils";
import type { Personnage } from "@/data/personnages";
import { serial } from "./format";

/** Mappe la clé `icon` du data vers une icône lucide (les fichiers data n'importent rien). */
const ICONS: Record<string, LucideIcon> = {
  gavel: Gavel,
  "cloud-rain": CloudRain,
  ruler: Ruler,
  sparkles: Sparkles,
  shield: Shield,
  hourglass: Hourglass,
  cloud: Cloud,
  compass: Compass,
};

/** Couleur d'encre du tampon selon l'accent du personnage. */
const ACCENT_INK: Record<Personnage["accent"], string> = {
  gold: "text-gold-700",
  navy: "text-navy-700",
  wine: "text-wine-700",
};

type Props = {
  personnage: Personnage;
  index: number;
};

/**
 * Carte « billet » d'un personnage — variante Ticket.
 * Corps (visuel + nom + réplique) à gauche, talon perforé à droite
 * (N° de série + la « part » en monospace vertical). Angles francs.
 */
export function PersonnageTicket({ personnage, index }: Props) {
  const Icon = ICONS[personnage.icon] ?? Sparkles;

  return (
    <article
      className={cn(
        "group relative flex h-full overflow-hidden rounded-[2px] border border-ink/15 bg-ivory",
        "transition-colors duration-300 hover:border-ink/40",
      )}
    >
      {/* ── Corps du billet ─────────────────────────────────── */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Bandeau d'en-tête mono */}
        <div className="flex items-center justify-between border-b border-dashed border-ink/20 px-4 py-2.5">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-stone-500">
            Admission · 1
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.18em]",
              ACCENT_INK[personnage.accent],
            )}
          >
            <Icon size={13} aria-hidden />
            Part
          </span>
        </div>

        {/* Visuel carré */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-bone">
          <SmartImage
            src={personnage.image}
            alt={`Portrait du personnage ${personnage.name}`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover grayscale-[0.25] transition duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent"
          />
        </div>

        {/* Texte */}
        <div className="flex flex-1 flex-col gap-2 px-4 py-4">
          <h3 className="font-display text-xl leading-tight text-ink">{personnage.name}</h3>
          <p className="text-sm leading-snug text-stone-600">{personnage.part}</p>
          <p className="mt-auto border-l-2 border-gold-500 pl-3 pt-1 text-sm italic leading-snug text-stone-700">
            {personnage.replique}
          </p>
        </div>
      </div>

      {/* ── Perforation verticale ───────────────────────────── */}
      <span
        aria-hidden
        className="relative w-px shrink-0 self-stretch"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgb(32 32 31 / 0.35) 0 4px, transparent 4px 9px)",
        }}
      />

      {/* ── Talon (stub) ────────────────────────────────────── */}
      <div className="flex w-12 shrink-0 flex-col items-center justify-between bg-paper py-4 sm:w-14">
        <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-ink">
          {serial(index)}
        </span>
        <span
          className="font-mono text-[0.58rem] uppercase tracking-[0.32em] text-stone-500"
          style={{ writingMode: "vertical-rl" }}
        >
          Maxou Officiel
        </span>
        <span
          aria-hidden
          className={cn("h-7 w-7 rounded-full border", {
            "border-gold-600": personnage.accent === "gold",
            "border-navy-600": personnage.accent === "navy",
            "border-wine-600": personnage.accent === "wine",
          })}
        />
      </div>
    </article>
  );
}
