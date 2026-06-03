import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Users, Sparkles } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig, canonicalUrl } from "@/lib/site-config";
import { services } from "@/data/services";
import { personnages } from "@/data/personnages";
import { faq } from "@/data/faq";

import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";
import { SectionHeading } from "@/components/public/section-heading";
import { VideoShowcase } from "@/components/public/video-showcase";
import { ServiceCard } from "@/components/public/service-card";
import { BeneficesGrid } from "@/components/public/benefices-grid";
import { PersonnageCard } from "@/components/public/personnage-card";
import { FaqAccordion } from "@/components/public/faq-accordion";
import { CtaBandeau } from "@/components/public/cta-bandeau";
import { Button } from "@/components/ui/button";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

import { JsonLd } from "@/components/seo/json-ld";
import type { TheaterEvent, WithContext } from "schema-dts";

export const metadata: Metadata = buildMetadata({
  title: "Le spectacle",
  description:
    "Le seul-en-scène de Maxxou : humour, improvisation et thérapie des parties. Chaque personnage intérieur monte sur scène — à Lyon, Paris et en tournée.",
  path: "/spectacle",
});

const spectacleSchema: WithContext<TheaterEvent> = {
  "@context": "https://schema.org",
  "@type": "TheaterEvent",
  name: `${siteConfig.name} — ${siteConfig.baseline}`,
  description: siteConfig.description,
  url: canonicalUrl("/spectacle"),
  inLanguage: "fr-FR",
  performer: { "@type": "Person", name: siteConfig.name },
  typicalAgeRange: "14-",
  location: {
    "@type": "Place",
    name: siteConfig.contact.serviceAreaLabel,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.contact.countryName,
      addressRegion: siteConfig.contact.region,
    },
  },
};

const faitsCles = [
  {
    icon: Clock,
    label: "Durée",
    value: "Environ 1h15",
    detail: "Une heure et quart, sans temps mort.",
  },
  {
    icon: Users,
    label: "Public",
    value: "Tout public, dès 14 ans",
    detail: "Sans vulgarité gratuite, pensé pour venir en famille ou entre amis.",
  },
  {
    icon: Sparkles,
    label: "Improvisation",
    value: "Une part d'impro à chaque date",
    detail: "Aucune représentation n'est tout à fait identique à la précédente.",
  },
] as const;

export default function SpectaclePage() {
  const teaserPersonnages = personnages.slice(0, 3);

  return (
    <>
      <JsonLd schema={spectacleSchema} />
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Le seul-en-scène"
          title={
            <>
              Un spectacle où vos{" "}
              <span className="italic-display gradient-ink">personnages</span> montent
              sur scène.
            </>
          }
          intro="Humour, improvisation et thérapie des parties : Maxxou donne corps aux voix qui nous habitent. Le Critique, l'Anxieux, le Perfectionniste, l'Enfant… on les reconnaît, on en rit — et on les regarde, enfin, avec tendresse."
        />

        {/* ───────── Intro éditoriale + faits clés */}
        <section className="relative bg-paper py-24 lg:py-32">
          <div className="container-narrow">
            <ScrollReveal>
              <p className="eyebrow">Le concept</p>
              <h2 className="fluid-h2 mt-4 text-ink">
                Tous les personnages dans votre tête,{" "}
                <span className="italic-display gradient-navy">réunis pour une soirée</span>.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.05} className="mt-8 space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                On a tous une petite assemblée intérieure. Une part qui juge, une part
                qui s&apos;inquiète, une part qui rêve, une part qui sabote au dernier
                moment. La <strong className="font-medium text-ink">thérapie des parties</strong>{" "}
                — inspirée de l&apos;Internal Family Systems — propose une idée simple et
                réconfortante&nbsp;: aucune de ces voix n&apos;est notre ennemie. Chacune,
                à sa manière maladroite, essaie de nous protéger.
              </p>
              <p>
                Maxxou s&apos;empare de cette matière avec humour. Il incarne tour à tour
                ces personnages, les fait dialoguer, les pousse dans leurs retranchements
                — et nous fait rire de nos mécanismes les plus intimes. Pas de jargon, pas
                de prérequis&nbsp;: tout passe par le rire et l&apos;émotion.
              </p>
              <p>
                À cela s&apos;ajoute une <strong className="font-medium text-ink">part
                d&apos;improvisation</strong> à chaque représentation. La salle réagit,
                propose, embarque — et le spectacle se réinvente sous nos yeux. On vient
                pour rire. On repart plus léger, et avec un autre regard sur soi.
              </p>
            </ScrollReveal>

            <StaggerReveal className="mt-14 grid gap-5 sm:grid-cols-3">
              {faitsCles.map((fait) => (
                <StaggerItem key={fait.label} className="h-full">
                  <div className="hover-lift flex h-full flex-col rounded-2xl border border-noir-900/10 bg-bone/60 p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-noir-900/[0.04] text-gold-700 ring-1 ring-noir-900/10">
                      <fait.icon size={20} aria-hidden />
                    </span>
                    <p className="eyebrow mt-5">{fait.label}</p>
                    <p className="mt-2 font-display text-xl leading-snug text-ink">
                      {fait.value}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-stone-500">
                      {fait.detail}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ───────── Bande-annonce */}
        <VideoShowcase />

        {/* ───────── Ce que propose Maxxou */}
        <section className="relative bg-bone py-24 lg:py-32">
          <div className="container-soft">
            <ScrollReveal className="mb-14 max-w-2xl">
              <SectionHeading
                eyebrow="Ce que propose Maxxou"
                title="Réserver, inviter, collaborer."
                intro="Le seul-en-scène en salle, des interventions sur-mesure pour entreprises et écoles, et des partenariats pour aller plus loin."
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

        {/* ───────── Pourquoi ça fait du bien */}
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

        {/* ───────── Teaser personnages (dark) */}
        <section className="section-noir grain relative overflow-hidden py-24 lg:py-32">
          <div aria-hidden className="aurora opacity-30" />
          <div
            aria-hidden
            className="fil-grid pointer-events-none absolute inset-0 opacity-40"
          />
          <div className="container-soft relative">
            <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
              <ScrollReveal className="lg:col-span-8">
                <SectionHeading
                  light
                  eyebrow="La troupe intérieure"
                  title={
                    <>
                      Faites connaissance avec{" "}
                      <span className="italic-display text-gold-300">vos parts</span>.
                    </>
                  }
                  intro="Le Critique, l'Anxieux, le Perfectionniste et les autres : chaque personnage incarne une facette de nous-mêmes. Ils ont chacun leur réplique, leur humeur — et, derrière, une intention bien plus douce qu'il n'y paraît."
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

        {/* ───────── FAQ */}
        <section className="relative bg-paper py-24 lg:py-32">
          <div className="container-soft grid gap-12 lg:grid-cols-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Questions fréquentes"
                title="Tout ce qu'il faut savoir."
                intro="Spectacle ou séance de thérapie, durée, âge, réservation… Une autre question ? Écrivez-moi, je réponds rapidement."
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
    </>
  );
}
