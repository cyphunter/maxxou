"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import { Lightbox, type LightboxItem } from "@/components/ui/lightbox";
import { galerie, type GalerieItem } from "@/data/media";
import { cn } from "@/lib/utils";

/**
 * Galerie de photos de scène. Grille portrait (4:5) homogène, sans recadrage —
 * adaptée aux vraies photos verticales de Maxou. Clic → lightbox.
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
            className={cn(
              "group relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-noir-900/10 transition-shadow duration-500 hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
            )}
          >
            <SmartImage
              src={g.src}
              alt={g.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-950/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-noir-950/50 text-ivory opacity-0 ring-1 ring-ivory/20 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <Expand size={15} aria-hidden />
            </span>
          </button>
        ))}
      </div>
      <Lightbox items={lbItems} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </>
  );
}
