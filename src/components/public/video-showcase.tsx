import { PlayCircle } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import { SectionHeading } from "@/components/public/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { siteConfig } from "@/lib/site-config";

/**
 * Section « bande-annonce ».
 *
 * - Si `siteConfig.video.src` est renseigné → lecteur <video> natif (mp4
 *   self-hosté, accessible, sans JS) avec le poster.
 * - Sinon → emplacement élégant « bande-annonce à venir » avec le poster.
 *
 * Pour activer : déposez la vidéo dans public/videos/ et renseignez
 * `video.src` dans src/lib/site-config.ts.
 */
export function VideoShowcase() {
  const { src, poster, title, caption } = siteConfig.video;
  const hasVideo = Boolean(src);

  return (
    <section id="video" className="relative overflow-hidden bg-paper py-24 lg:py-32">
      <div aria-hidden className="aurora opacity-50" />
      <div className="container-soft relative">
        <ScrollReveal className="mb-12 text-center">
          <SectionHeading
            align="center"
            eyebrow="La bande-annonce"
            title={
              <>
                Voir, c&apos;est déjà{" "}
                <span className="italic-display gradient-ink">sourire</span>.
              </>
            }
            intro="Un avant-goût du spectacle, à découvrir en vidéo."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto max-w-4xl">
          <figure className="frame-premium relative aspect-video bg-navy-950">
            {hasVideo ? (
              <video
                className="h-full w-full object-cover"
                controls
                preload="none"
                poster={poster}
                playsInline
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
                  sizes="(min-width: 1024px) 56rem, 100vw"
                  className="object-cover opacity-90"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
                  <PlayCircle size={72} aria-hidden className="text-gold-400/90" strokeWidth={1.2} />
                  <span className="inline-flex items-center gap-2 rounded-full bg-navy-950/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cream-100 ring-1 ring-ivory/20 backdrop-blur-md">
                    {caption}
                  </span>
                </div>
              </>
            )}
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
