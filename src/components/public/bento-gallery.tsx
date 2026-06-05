"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import { Lightbox, type LightboxItem } from "@/components/ui/lightbox";
import { galerie, type GalerieItem } from "@/data/media";

/**
 * Galerie de photos de scène, style « accrochage de musée » : grille portrait
 * homogène, images en grayscale qui passent en couleur au survol, filets 1px,
 * angles francs. Clic → lightbox plein écran.
 */
export function BentoGallery({ items = galerie }: { items?: readonly GalerieItem[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const lbItems: LightboxItem[] = items.map((g) => ({
    id: g.id,
    src: g.src,
    alt: g.alt,
    caption: g.alt,
    width: g.width,
    height: g.height,
  }));

  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map((g, i) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Agrandir : ${g.alt}`}
            className="group relative aspect-[4/5] overflow-hidden border border-ink/10 bg-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            <SmartImage
              src={g.src}
              alt={g.alt}
              fill
              sizes="(min-width: 1024px) 22vw, 46vw"
              className="object-cover grayscale-[0.7] sepia-[0.15] transition duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0 group-hover:sepia-0"
            />
            <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center border border-ivory/40 bg-noir-950/40 text-ivory opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <Expand size={15} aria-hidden />
            </span>
          </button>
        ))}
      </div>
      <Lightbox items={lbItems} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </>
  );
}
