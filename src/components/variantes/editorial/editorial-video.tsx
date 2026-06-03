"use client";

import { Play } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { SmartImage } from "@/components/ui/smart-image";

/**
 * Emplacement vidéo de la variante « Éditorial sobre ».
 * Cadre rectangulaire bordé d'un filet (border border-ink/15), angles francs.
 * - Si `siteConfig.video.src` est renseigné → vrai lecteur <video controls>.
 * - Sinon → poster dans le cadre + pastille « bande-annonce à venir ».
 */
export function EditorialVideo() {
  const { src, poster, title, caption } = siteConfig.video;
  const hasVideo = src.trim().length > 0;

  return (
    <figure className="relative">
      {/* Méta de cadre, alignée éditorial */}
      <figcaption className="mb-3 flex items-center justify-between gap-4 border-b border-ink/10 pb-2">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-stone-500">
          Bande-annonce
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-stone-400">
          {hasVideo ? "Lecture" : "À venir"}
        </span>
      </figcaption>

      <div className="relative aspect-video w-full overflow-hidden border border-ink/15 bg-noir-950">
        {hasVideo ? (
          <video
            controls
            preload="none"
            poster={poster}
            className="h-full w-full object-cover"
            title={title}
          >
            <source src={src} type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        ) : (
          <>
            <SmartImage
              src={poster}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-90"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-noir-950/20 to-transparent"
            />
            {/* Bouton lecture décoratif (carré) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-16 w-16 items-center justify-center border border-ivory/40 bg-noir-950/40 text-ivory backdrop-blur-sm transition-transform duration-500">
                <Play size={22} aria-hidden className="translate-x-0.5" />
              </span>
            </div>
            {/* Pastille « à venir » (rectangulaire) */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
              <p className="max-w-[18rem] text-xs leading-relaxed text-cream-100/85">{caption}</p>
              <span className="shrink-0 border border-gold-400/50 bg-noir-950/50 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold-300">
                Teaser à venir
              </span>
            </div>
          </>
        )}
      </div>
    </figure>
  );
}
