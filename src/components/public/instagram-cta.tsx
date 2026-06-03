import { Instagram, ArrowUpRight } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { siteConfig } from "@/lib/site-config";

const tiles = [
  { src: "/images/scene/scene-01.jpg", alt: "Maxou au micro sous les projecteurs" },
  { src: "/images/scene/scene-02.jpg", alt: "Maxou en pied sur scène" },
  { src: "/images/scene/scene-03.jpg", alt: "Maxou en pleine improvisation" },
  { src: "/images/scene/scene-04.jpg", alt: "Maxou en fin de spectacle" },
];

export function InstagramCta() {
  const url = siteConfig.social.instagram;

  return (
    <section className="section-wine grain relative overflow-hidden py-20 lg:py-28">
      <div aria-hidden className="spotlight spotlight--wine" />
      <div className="container-soft relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <ScrollReveal>
          <p className="eyebrow eyebrow--light">Sur Instagram</p>
          <h2 className="fluid-h2 mt-4 text-ivory">
            Rejoignez la{" "}
            <span className="italic-display text-gold-300">communauté</span>.
          </h2>
          <p className="fluid-lead mt-5 max-w-md text-cream-100/85">
            Coulisses, extraits, nouveaux personnages et annonces de dates : tout se passe
            d&apos;abord sur Instagram. Suivez {siteConfig.instagramHandle} et ne ratez rien.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-medium text-noir-900 transition-colors hover:bg-gold-400"
            >
              <Instagram size={18} aria-hidden />
              Suivre {siteConfig.instagramUsername}
              <ArrowUpRight
                size={15}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </ScrollReveal>

        {/* Aperçu (placeholder — remplacer par un vrai feed si souhaité) */}
        <ScrollReveal delay={0.1}>
          <a
            href={url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le compte Instagram ${siteConfig.instagramHandle}`}
            className="group/grid grid grid-cols-2 gap-2.5"
          >
            {tiles.map((t, i) => (
              <span
                key={i}
                className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-ivory/15"
              >
                <SmartImage
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover/grid:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-wine-950/20 opacity-0 transition-opacity duration-300 group-hover/grid:opacity-100" />
              </span>
            ))}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
