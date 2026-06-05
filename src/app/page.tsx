import { Instagram } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { personnages } from "@/data/personnages";
import { temoignages } from "@/data/temoignages";
import { faq } from "@/data/faq";
import { media } from "@/data/media";

import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { VideoShowcase } from "@/components/public/video-showcase";
import { PersonnagesGrid } from "@/components/public/personnages-grid";
import { BeneficesGrid } from "@/components/public/benefices-grid";
import { BentoGallery } from "@/components/public/bento-gallery";
import { DatesList } from "@/components/public/dates-list";
import { NewsletterSignup } from "@/components/public/newsletter-signup";
import { FaqAccordion } from "@/components/public/faq-accordion";
import { CtaBandeau } from "@/components/public/cta-bandeau";
import { StickyMobileCTA } from "@/components/public/sticky-mobile-cta";
import { StatsStrip } from "@/components/public/stats-strip";
import { SectionMark } from "@/components/public/section-mark";

import { SmartImage } from "@/components/ui/smart-image";
import { UnderlineLink, FrameButton } from "@/components/ui/gallery";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { FadeUp, TextReveal } from "@/components/motion/text-reveal";
import { WordRotate } from "@/components/motion/word-rotate";
import { Magnetic } from "@/components/motion/magnetic";

import { JsonLd } from "@/components/seo/json-ld";
import type { FAQPage, WithContext } from "schema-dts";

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function HomePage() {
  const featuredTemoignages = temoignages.slice(0, 2);
  const personnageNames = personnages.map((p) => p.name);

  return (
    <>
      <JsonLd schema={faqSchema} />
      <Header />
      <main id="main-content">
        {/* ════════════════════════ HERO ════════════════════════ */}
        <section className="relative overflow-hidden border-b border-ink/10 bg-ivory">
          <div aria-hidden className="hero-glow" />
          <div className="relative z-10 mx-auto grid w-full max-w-[88rem] grid-cols-1 lg:grid-cols-12">
            {/* Colonne texte */}
            <div className="flex flex-col justify-center px-6 py-20 lg:col-span-6 lg:px-12 lg:py-32">
              <FadeUp>
                <p className="eyebrow">
                  {siteConfig.role}
                </p>
              </FadeUp>

              <TextReveal
                as="h1"
                className="mt-8 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-tight text-ink"
                delay={0.1}
              >
                {siteConfig.name}
              </TextReveal>

              <FadeUp delay={0.3} className="mt-8 max-w-md">
                <p className="text-balance text-lg leading-relaxed text-stone-600">
                  {siteConfig.baseline}. {siteConfig.tagline}
                </p>
              </FadeUp>

              <FadeUp delay={0.42} className="mt-6">
                <p className="font-display text-lg text-stone-600">
                  Ce soir sur scène :{" "}
                  <WordRotate
                    words={personnageNames}
                    interval={2200}
                    className="italic-display text-gold-700"
                  />
                </p>
              </FadeUp>

              <FadeUp delay={0.52} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
                <Magnetic>
                  <FrameButton href="/dates" variant="gold">
                    Réserver une date
                  </FrameButton>
                </Magnetic>
                <UnderlineLink href="/spectacle" withArrow className="text-stone-600">
                  Découvrir le spectacle
                </UnderlineLink>
              </FadeUp>

              <FadeUp delay={0.62} className="mt-16 border-t border-ink/10 pt-6">
                <p className="text-[0.78rem] uppercase tracking-[0.18em] text-stone-500">
                  {siteConfig.contact.serviceAreaLabel}
                </p>
              </FadeUp>
            </div>

            {/* Colonne image carrée (portrait) */}
            <div className="relative lg:col-span-6">
              <ScrollReveal className="h-full">
                <div className="relative aspect-square w-full overflow-hidden border-t border-ink/10 bg-bone lg:aspect-auto lg:h-full lg:border-l lg:border-t-0">
                  <SmartImage
                    src={media.portrait}
                    alt={`Portrait de ${siteConfig.name}, ${siteConfig.role}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover grayscale-[0.7] sepia-[0.15] transition duration-700 ease-out hover:grayscale-0 hover:sepia-0"
                  />
                  <span aria-hidden className="absolute bottom-6 right-6 h-2 w-2 bg-gold-500" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ════════════════════ BANDE-ANNONCE ════════════════════ */}
        <VideoShowcase />

        {/* ════════════════════════ PERSONNAGES ════════════════════════ */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery py-24 lg:py-32">
            <div className="mb-16 grid gap-10 lg:grid-cols-12 lg:items-end">
              <ScrollReveal className="lg:col-span-8">
                <SectionMark n="01" />
                <p className="eyebrow mt-4">
                  La collection
                </p>
                <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                  Huit parts de nous, <span className="italic-display text-gold-700">exposées</span>{" "}
                  une à une.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-600">
                  Chaque personnage incarne une facette intérieure. On les reconnaît, on en rit —
                  et on les regarde, enfin, avec tendresse.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.05} className="lg:col-span-4 lg:text-right">
                <UnderlineLink href="/personnages" withArrow className="text-stone-600">
                  Toute la troupe
                </UnderlineLink>
              </ScrollReveal>
            </div>

            <PersonnagesGrid personnages={personnages} />
          </div>
        </section>

        {/* ════════════════════════ BÉNÉFICES ════════════════════════ */}
        <section className="border-b border-ink/10 bg-paper">
          <div className="container-gallery py-24 lg:py-32">
            <ScrollReveal className="mb-16 max-w-2xl">
              <SectionMark n="02" />
              <p className="eyebrow mt-4">
                Pourquoi ça fait du bien
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                Du rire, et un peu de soi en plus.
              </h2>
            </ScrollReveal>
            <BeneficesGrid />
          </div>
        </section>

        {/* ════════════════════════ CHIFFRES ════════════════════════ */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery py-24 lg:py-32">
            <ScrollReveal className="mb-12 max-w-2xl">
              <SectionMark n="03" />
              <p className="eyebrow mt-4">En quelques chiffres</p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                Un spectacle, et toute une{" "}
                <span className="italic-display text-gold-700">distribution</span>.
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <StatsStrip />
            </ScrollReveal>
          </div>
        </section>

        {/* ════════════════════════ GALERIE PHOTOS ════════════════════════ */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery py-24 lg:py-32">
            <div className="mb-16 grid gap-10 lg:grid-cols-12 lg:items-end">
              <ScrollReveal className="lg:col-span-8">
                <SectionMark n="04" />
                <p className="eyebrow mt-4">
                  En images
                </p>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                  Quelques instants de scène.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.05} className="lg:col-span-4 lg:text-right">
                <p className="text-sm leading-relaxed text-stone-500">
                  L&apos;ambiance d&apos;une représentation : les personnages, le public, le rire.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <BentoGallery />
            </ScrollReveal>
          </div>
        </section>

        {/* ════════════════════════ DATES ════════════════════════ */}
        <section className="border-b border-ink/10 bg-paper">
          <div className="container-gallery py-24 lg:py-32">
            <div className="mb-14 grid gap-10 lg:grid-cols-12 lg:items-end">
              <ScrollReveal className="lg:col-span-8">
                <SectionMark n="05" />
                <p className="eyebrow mt-4">
                  Agenda
                </p>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                  Les prochaines dates.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.05} className="lg:col-span-4 lg:text-right">
                <UnderlineLink href="/dates" withArrow className="text-stone-600">
                  Tout le calendrier
                </UnderlineLink>
              </ScrollReveal>
            </div>
            <DatesList limit={3} />
          </div>
        </section>

        {/* ════════════════ TÉMOIGNAGES + INSTAGRAM ════════════════ */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="mx-auto grid w-full max-w-[88rem] grid-cols-1 lg:grid-cols-12">
            {/* Témoignages */}
            <div className="px-6 py-24 lg:col-span-7 lg:border-r lg:border-ink/10 lg:px-12 lg:py-32">
              <ScrollReveal className="mb-12">
                <SectionMark n="06" />
                <p className="eyebrow mt-4">
                  Ils en parlent
                </p>
                <h2 className="mt-5 font-display text-[clamp(1.7rem,3.2vw,2.8rem)] font-normal leading-tight text-ink">
                  Ce qu&apos;en dit le public.
                </h2>
              </ScrollReveal>

              <div className="space-y-12">
                {featuredTemoignages.map((t, i) => (
                  <ScrollReveal key={t.id} delay={i * 0.08}>
                    <figure className="border-l border-gold-500 pl-6">
                      <blockquote className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                        « {t.quote} »
                      </blockquote>
                      <figcaption className="mt-5 text-[0.8rem] uppercase tracking-[0.16em] text-stone-500">
                        {t.author}
                        <span className="mx-2 text-stone-300">·</span>
                        {t.role}
                      </figcaption>
                    </figure>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Instagram */}
            <div className="flex flex-col justify-center border-t border-ink/10 px-6 py-24 lg:col-span-5 lg:border-t-0 lg:px-12 lg:py-32">
              <ScrollReveal>
                <Instagram size={28} strokeWidth={1.25} aria-hidden className="text-ink" />
                <h2 className="mt-8 font-display text-[clamp(1.7rem,3vw,2.6rem)] font-normal leading-tight text-ink">
                  Suivez les coulisses.
                </h2>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-stone-600">
                  Extraits de scène, nouvelles dates et fragments d&apos;univers : tout commence sur
                  Instagram.
                </p>
                <div className="mt-10">
                  <UnderlineLink
                    href={siteConfig.social.instagram}
                    external
                    withArrow
                    className="text-ink"
                  >
                    {siteConfig.instagramUsername}
                  </UnderlineLink>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ════════════════════════ NEWSLETTER ════════════════════════ */}
        <section className="border-b border-ink/10 bg-paper">
          <div className="container-gallery grid grid-cols-1 gap-12 py-24 lg:grid-cols-12 lg:items-center lg:py-32">
            <ScrollReveal className="lg:col-span-5">
              <SectionMark n="07" />
              <p className="eyebrow mt-4">
                Newsletter
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-normal leading-tight text-ink">
                {siteConfig.newsletter.title}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-stone-600">
                {siteConfig.newsletter.subtitle}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <NewsletterSignup tone="light" />
            </ScrollReveal>
          </div>
        </section>

        {/* ════════════════════════ FAQ ════════════════════════ */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery grid grid-cols-1 gap-12 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
            <ScrollReveal className="lg:col-span-4">
              <SectionMark n="08" />
              <p className="eyebrow mt-4">
                Questions fréquentes
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.5vw,3rem)] font-normal leading-tight text-ink">
                Tout ce qu&apos;il faut savoir.
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone-600">
                Une autre question ? Écrivez-moi, je réponds rapidement.
              </p>
              <div className="mt-8">
                <UnderlineLink href="/contact" withArrow className="text-ink">
                  Poser une question
                </UnderlineLink>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-7 lg:col-start-6">
              <ScrollReveal>
                <FaqAccordion entries={faq} />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CtaBandeau />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
