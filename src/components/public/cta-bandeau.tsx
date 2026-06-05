import { TextReveal } from "@/components/motion/text-reveal";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { UnderlineLink, FrameButton } from "@/components/ui/gallery";

/**
 * Bandeau d'appel à l'action final, style galerie : centré, immense titre
 * display, deux actions discrètes. Aucun aplat sombre.
 */
export function CtaBandeau() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-ivory">
      <div aria-hidden className="hero-glow hero-glow--center" />
      <div className="container-gallery relative z-10 py-28 text-center lg:py-40">
        <ScrollReveal>
          <p className="eyebrow">
            Le rideau se lève bientôt
          </p>
        </ScrollReveal>
        <TextReveal
          as="h2"
          className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-normal leading-[1.02] text-ink"
          delay={0.05}
        >
          Venez rire de vos petites voix intérieures.
        </TextReveal>
        <ScrollReveal
          delay={0.2}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
        >
          <Magnetic>
            <FrameButton href="/dates" variant="gold">
              Voir les dates
            </FrameButton>
          </Magnetic>
          <UnderlineLink href="/contact" withArrow className="text-stone-600">
            Nous écrire
          </UnderlineLink>
        </ScrollReveal>
      </div>
    </section>
  );
}
