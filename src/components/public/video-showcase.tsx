import { SmartImage } from "@/components/ui/smart-image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { siteConfig } from "@/lib/site-config";

/**
 * Section « projection » (bande-annonce), style galerie.
 *
 * - Si `siteConfig.video.src` est renseigné → lecteur <video> natif (mp4
 *   self-hosté, accessible, sans JS) avec le poster.
 * - Sinon → emplacement « bande-annonce à venir » sur le poster en grayscale.
 *
 * Pour activer : déposez la vidéo dans public/videos/ et renseignez
 * `video.src` dans src/lib/site-config.ts.
 */
export function VideoShowcase() {
  const { src, poster, title, caption } = siteConfig.video;
  const hasVideo = Boolean(src);

  return (
    <section id="video" className="border-b border-ink/10 bg-paper">
      <div className="container-gallery py-24 lg:py-32">
        <ScrollReveal className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">
              Projection
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(1.9rem,3.5vw,3rem)] font-normal leading-tight text-ink">
              {title}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-stone-500">{caption}</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative aspect-video w-full overflow-hidden border border-ink/15 bg-bone">
            {hasVideo ? (
              <video
                controls
                preload="none"
                poster={poster}
                playsInline
                className="h-full w-full object-cover"
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
                  sizes="(min-width: 1024px) 82rem, 100vw"
                  className="object-cover grayscale-[0.7] sepia-[0.15] transition duration-700 ease-out hover:grayscale-0 hover:sepia-0"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="border border-ink/30 bg-ivory/85 px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-ink backdrop-blur-[1px]">
                    Bande-annonce à venir
                  </span>
                </div>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
