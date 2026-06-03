"use client";

/**
 * Grille « galerie de musée » des personnages (variante key="galerie").
 *
 * Chaque personnage = une œuvre : image carrée plein cadre en grayscale,
 * passant en couleur au survol. Sous l'image, un cartel minimaliste
 * (numéro, nom, part). Au survol, la réplique signature se révèle en bas
 * de l'image, comme une légende dévoilée.
 *
 * Angles francs (rounded-none), pas d'ombre, le blanc structure.
 */

import Link from "next/link";

import { SmartImage } from "@/components/ui/smart-image";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";
import type { Personnage } from "@/data/personnages";

type PersonnagesGridProps = {
  personnages: readonly Personnage[];
};

export function PersonnagesGrid({ personnages }: PersonnagesGridProps) {
  return (
    <StaggerReveal
      className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
      stagger={0.07}
    >
      {personnages.map((p, i) => (
        <StaggerItem key={p.slug} as="article" className="group">
          <Link href="/personnages" className="block focus:outline-none">
            {/* Cadre image carré, plein cadre, filet 1px très discret */}
            <div className="relative aspect-square overflow-hidden border border-ink/10 bg-bone">
              <SmartImage
                src={p.image}
                alt={`Portrait du personnage ${p.name}`}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
                className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0 group-focus-visible:grayscale-0"
              />

              {/* Réplique révélée au survol (légende dévoilée) */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-noir-950/85 via-noir-950/35 to-transparent p-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
              >
                <p className="text-[0.82rem] italic leading-snug text-ivory">{p.replique}</p>
              </div>

              {/* Point doré infime, en haut à droite (touche d'accent unique) */}
              <span
                aria-hidden
                className="absolute right-3 top-3 h-1.5 w-1.5 rounded-none bg-gold-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>

            {/* Cartel sous l'image */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-display text-xs tabular-nums text-stone-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg leading-tight text-ink transition-colors group-hover:text-gold-800">
                  {p.name}
                </h3>
                <p className="mt-1 text-[0.78rem] leading-snug text-stone-500">{p.part}</p>
              </div>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}
