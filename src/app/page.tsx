import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { personnages } from "@/data/personnages";
import { services } from "@/data/services";
import { faq } from "@/data/faq";

import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { HeroHome } from "@/components/public/hero-home";
import { Button } from "@/components/ui/button";
import { VideoShowcase } from "@/components/public/video-showcase";
import { SectionHeading } from "@/components/public/section-heading";
import { PersonnageCard } from "@/components/public/personnage-card";
import { BeneficesGrid } from "@/components/public/benefices-grid";
import { StatsEditorial } from "@/components/public/stats-editorial";
import { ServiceCard } from "@/components/public/service-card";
import { AboutSection } from "@/components/public/about-section";
import { DatesList } from "@/components/public/dates-list";
import { BentoGallery } from "@/components/public/bento-gallery";
import { TemoignagesSection } from "@/components/public/temoignages-section";
import { InstagramCta } from "@/components/public/instagram-cta";
import { NewsletterSignup } from "@/components/public/newsletter-signup";
import { FaqAccordion } from "@/components/public/faq-accordion";
import { CtaBandeau } from "@/components/public/cta-bandeau";
import { StickyMobileCTA } from "@/components/public/sticky-mobile-cta";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

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
  const teaserPersonnages = personnages.slice(0, 6);

  return (
    <>
      <JsonLd schema={faqSchema} />
      <Header />
      <main id="main-content">
        <HeroHome />

        {/* ───────── Bande-annonce (emplacement vidéo) */}
        <VideoShowcase />

        {/* ───────── Les personnages (scène de nuit) */}
        <section className="section-noir grain relative overflow-hidden py-24 lg:py-32">
          <div aria-hidden className="aurora opacity-30" />
          <div aria-hidden className="fil-grid pointer-events-none absolute inset-0 opacity-40" />
          <div aria-hidden className="spotlight" />
          <div className="container-soft relative">
            <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
              <ScrollReveal className="lg:col-span-8">
                <SectionHeading
                  light
                  eyebrow="La troupe intérieure"
                  title={
                    <>
                      Quand l&apos;humour rencontre la{" "}
                      <span className="italic-display text-gold-300">thérapie des parties</span>.
                    </>
                  }
                  intro="Chaque personnage incarne une facette de nous-mêmes. On les reconnaît, on en rit — et on les regarde, enfin, avec tendresse."
                />
              </ScrollReveal>
              <ScrollReveal delay={0.05} className="lg:col-span-4 lg:text-right">
                <Button asChild variant="outlineLight" size="md">
                  <Link href="/personnages">
                    Rencontrer toute la troupe
                    <ArrowUpRight size={16} aria-hidden />
                  </Link>
                </Button>
              </ScrollReveal>
            </div>
            <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teaserPersonnages.map((p) => (
                <StaggerItem key={p.slug} className="h-full">
                  <PersonnageCard personnage={p} />
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ───────── Bénéfices / problématique */}
        <section className="relative overflow-hidden bg-paper py-24 lg:py-32">
          <div aria-hidden className="aurora opacity-50" />
          <div className="container-soft relative">
            <ScrollReveal className="mb-14 max-w-2xl">
              <SectionHeading
                eyebrow="Pourquoi ça fait du bien"
                title="Du rire, et un peu de soi en plus."
                intro="On vient pour rire. On repart plus léger — et avec un autre regard sur ses propres mécanismes."
              />
            </ScrollReveal>
            <BeneficesGrid />
          </div>
        </section>

        {/* ───────── Chiffres (dark) */}
        <section className="section-noir grain relative overflow-hidden py-20 lg:py-24">
          <div aria-hidden className="fil-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="container-soft relative">
            <ScrollReveal className="mb-12 max-w-2xl">
              <p className="eyebrow eyebrow--light">En quelques chiffres</p>
              <h2 className="fluid-h2 mt-4 text-ivory">
                Un spectacle, et toute une{" "}
                <span className="italic-display text-gold-300">distribution</span>.
              </h2>
            </ScrollReveal>
            <StatsEditorial tone="dark" />
          </div>
        </section>

        {/* ───────── Services */}
        <section className="relative bg-bone py-24 lg:py-32">
          <div className="container-soft">
            <ScrollReveal className="mb-14 max-w-2xl">
              <SectionHeading
                eyebrow="Ce que propose Maxxou"
                title="Réserver, inviter, collaborer."
                intro="Le seul-en-scène en salle, des interventions sur-mesure, et des partenariats pour aller plus loin."
              />
            </ScrollReveal>
            <StaggerReveal className="grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <StaggerItem key={s.slug} className="h-full">
                  <ServiceCard service={s} />
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ───────── À propos (dark) */}
        <AboutSection />

        {/* ───────── Prochaines dates */}
        <section className="relative bg-paper py-24 lg:py-32">
          <div className="container-soft">
            <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
              <ScrollReveal className="lg:col-span-8">
                <SectionHeading
                  eyebrow="Agenda"
                  title="Les prochaines dates."
                  intro="Lyon, Paris et en tournée. Réservez votre soirée — la salle se remplit vite."
                />
              </ScrollReveal>
              <ScrollReveal delay={0.05} className="lg:col-span-4 lg:text-right">
                <Link
                  href="/dates"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-gold-700 transition-colors hover:text-gold-800"
                >
                  Tout le calendrier
                  <ArrowUpRight
                    size={15}
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <DatesList limit={3} />
            </ScrollReveal>
          </div>
        </section>

        {/* ───────── Galerie */}
        <section className="relative bg-bone py-24 lg:py-32">
          <div className="container-soft">
            <ScrollReveal className="mb-14">
              <SectionHeading
                eyebrow="En images"
                title="Quelques instants de scène."
                intro="L'ambiance d'une représentation : les personnages, le public, le rire."
              />
            </ScrollReveal>
            <BentoGallery />
          </div>
        </section>

        {/* ───────── Témoignages */}
        <section className="relative bg-paper py-24 lg:py-32">
          <div className="container-soft">
            <ScrollReveal className="mb-14">
              <SectionHeading
                eyebrow="Ils en parlent"
                title="Ce qu'en dit le public."
                intro="Quelques retours de spectateurs et de partenaires (témoignages d'exemple à remplacer)."
              />
            </ScrollReveal>
            <TemoignagesSection />
          </div>
        </section>

        {/* ───────── Instagram */}
        <InstagramCta />

        {/* ───────── Newsletter (dark) */}
        <section className="section-noir grain relative overflow-hidden py-20 lg:py-28">
          <div aria-hidden className="aurora opacity-30" />
          <div className="container-narrow relative">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <ScrollReveal className="lg:col-span-6">
                <p className="eyebrow eyebrow--light">Newsletter</p>
                <h2 className="fluid-h2 mt-4 text-ivory">{siteConfig.newsletter.title}</h2>
                <p className="fluid-lead mt-4 text-cream-100/80">
                  {siteConfig.newsletter.subtitle}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1} className="lg:col-span-6">
                <NewsletterSignup tone="dark" />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ───────── FAQ */}
        <section className="relative bg-paper py-24 lg:py-32">
          <div className="container-soft grid gap-12 lg:grid-cols-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Questions fréquentes"
                title="Tout ce qu'il faut savoir."
                intro="Une autre question ? Écrivez-moi, je réponds rapidement."
              />
              <Link
                href="/contact"
                className="mt-8 hidden items-center gap-2 text-sm font-medium text-gold-700 hover:text-gold-800 lg:inline-flex"
              >
                Poser une question
                <ArrowUpRight size={15} aria-hidden />
              </Link>
            </ScrollReveal>
            <div className="lg:col-span-7">
              <FaqAccordion entries={faq} />
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
