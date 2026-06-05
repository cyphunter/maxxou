import type { Metadata } from "next";
import { Clock, Users, Sparkles } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig, canonicalUrl } from "@/lib/site-config";
import { services } from "@/data/services";
import { personnages } from "@/data/personnages";
import { faq } from "@/data/faq";

import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";
import { VideoShowcase } from "@/components/public/video-showcase";
import { BeneficesGrid } from "@/components/public/benefices-grid";
import { PersonnagesGrid } from "@/components/public/personnages-grid";
import { FaqAccordion } from "@/components/public/faq-accordion";
import { CtaBandeau } from "@/components/public/cta-bandeau";
import { UnderlineLink } from "@/components/ui/gallery";

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
  const teaserPersonnages = personnages.slice(0, 4);

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
              <span className="italic-display text-gold-700">personnages</span> montent sur scène.
            </>
          }
          intro="Humour, improvisation et thérapie des parties : Maxxou donne corps aux voix qui nous habitent. Le Critique, l'Anxieux, le Perfectionniste, l'Enfant… on les reconnaît, on en rit — et on les regarde, enfin, avec tendresse."
        />

        {/* ───────── Intro éditoriale + faits clés */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery py-24 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-12">
              <ScrollReveal className="lg:col-span-5">
                <p className="eyebrow">
                  Le concept
                </p>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,3.5vw,3rem)] font-normal leading-tight text-ink">
                  Tous les personnages dans votre tête,{" "}
                  <span className="italic-display text-gold-700">réunis pour une soirée</span>.
                </h2>
              </ScrollReveal>

              <ScrollReveal
                delay={0.05}
                className="space-y-6 text-base leading-relaxed text-stone-600 lg:col-span-7"
              >
                <p>
                  On a tous une petite assemblée intérieure. Une part qui juge, une part qui
                  s&apos;inquiète, une part qui rêve, une part qui sabote au dernier moment. La{" "}
                  <strong className="font-medium text-ink">thérapie des parties</strong> — inspirée
                  de l&apos;Internal Family Systems — propose une idée simple et réconfortante :
                  aucune de ces voix n&apos;est notre ennemie. Chacune, à sa manière maladroite,
                  essaie de nous protéger.
                </p>
                <p>
                  Maxxou s&apos;empare de cette matière avec humour. Il incarne tour à tour ces
                  personnages, les fait dialoguer, les pousse dans leurs retranchements — et nous
                  fait rire de nos mécanismes les plus intimes. Pas de jargon, pas de prérequis :
                  tout passe par le rire et l&apos;émotion.
                </p>
                <p>
                  À cela s&apos;ajoute une{" "}
                  <strong className="font-medium text-ink">part d&apos;improvisation</strong> à
                  chaque représentation. La salle réagit, propose, embarque — et le spectacle se
                  réinvente sous nos yeux. On vient pour rire. On repart plus léger, et avec un
                  autre regard sur soi.
                </p>
              </ScrollReveal>
            </div>

            <StaggerReveal className="mt-16 grid grid-cols-1 border-t border-ink/10 sm:grid-cols-3">
              {faitsCles.map((fait, i) => (
                <StaggerItem
                  key={fait.label}
                  as="article"
                  className="border-b border-ink/10 py-10 sm:px-6 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-l-ink/10"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm tabular-nums text-gold-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <fait.icon size={20} aria-hidden className="text-stone-500" />
                      <p className="mt-3 text-[0.74rem] font-medium uppercase tracking-[0.2em] text-stone-500">
                        {fait.label}
                      </p>
                      <p className="mt-2 font-display text-xl leading-snug text-ink">
                        {fait.value}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-stone-600">{fait.detail}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ───────── Bande-annonce */}
        <VideoShowcase />

        {/* ───────── Ce que propose Maxxou */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery py-24 lg:py-32">
            <ScrollReveal className="mb-16 max-w-2xl">
              <p className="eyebrow">
                Ce que propose Maxxou
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                Réserver, inviter, collaborer.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Le seul-en-scène en salle, des interventions sur-mesure pour entreprises et écoles,
                et des partenariats pour aller plus loin.
              </p>
            </ScrollReveal>

            <StaggerReveal className="grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-3">
              {services.map((s, i) => (
                <StaggerItem
                  key={s.slug}
                  as="article"
                  className="group flex flex-col bg-ivory p-8 transition-colors duration-300 hover:bg-paper"
                >
                  <span className="font-display text-sm tabular-nums text-gold-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-ink transition-colors group-hover:text-gold-800">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{s.summary}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-ink/10 pt-6">
                    {s.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-snug text-stone-600"
                      >
                        <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-gold-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <UnderlineLink href={`/contact?sujet=${s.slug}`} withArrow className="text-ink">
                      {s.cta}
                    </UnderlineLink>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ───────── Pourquoi ça fait du bien */}
        <section className="border-b border-ink/10 bg-paper">
          <div className="container-gallery py-24 lg:py-32">
            <ScrollReveal className="mb-16 max-w-2xl">
              <p className="eyebrow">
                Pourquoi ça fait du bien
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                Du rire, et un peu de soi en plus.
              </h2>
            </ScrollReveal>
            <BeneficesGrid />
          </div>
        </section>

        {/* ───────── Teaser personnages */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery py-24 lg:py-32">
            <div className="mb-16 grid gap-10 lg:grid-cols-12 lg:items-end">
              <ScrollReveal className="lg:col-span-8">
                <p className="eyebrow">
                  La troupe intérieure
                </p>
                <h2 className="mt-5 max-w-xl font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                  Faites connaissance avec{" "}
                  <span className="italic-display text-gold-700">vos parts</span>.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.05} className="lg:col-span-4 lg:text-right">
                <UnderlineLink href="/personnages" withArrow className="text-stone-600">
                  Toute la troupe
                </UnderlineLink>
              </ScrollReveal>
            </div>
            <PersonnagesGrid personnages={teaserPersonnages} />
          </div>
        </section>

        {/* ───────── FAQ */}
        <section className="border-b border-ink/10 bg-paper">
          <div className="container-gallery grid grid-cols-1 gap-12 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
            <ScrollReveal className="lg:col-span-4">
              <p className="eyebrow">
                Questions fréquentes
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.5vw,3rem)] font-normal leading-tight text-ink">
                Tout ce qu&apos;il faut savoir.
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone-600">
                Spectacle ou séance de thérapie, durée, âge, réservation… Une autre question ?
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
    </>
  );
}
