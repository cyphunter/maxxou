import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { canonicalUrl } from "@/lib/site-config";
import { personnages } from "@/data/personnages";

import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";
import { PersonnageCard } from "@/components/public/personnage-card";
import { CtaBandeau } from "@/components/public/cta-bandeau";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

import { JsonLd } from "@/components/seo/json-ld";
import type { ItemList, WithContext } from "schema-dts";

export const metadata: Metadata = buildMetadata({
  title: "Les personnages",
  description:
    "Le Critique, l'Anxieux, le Perfectionniste, le Rêveur… La thérapie des parties incarnée sur scène : chaque personnage est une facette de nous-mêmes, à reconnaître et à regarder avec tendresse.",
  path: "/personnages",
});

const itemListSchema: WithContext<ItemList> = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Les personnages du spectacle de Maxou Officiel",
  description:
    "La troupe intérieure : chaque personnage incarne une part de nous-mêmes, inspirée de la thérapie des parties.",
  numberOfItems: personnages.length,
  itemListElement: personnages.map((p, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: p.name,
    description: p.part,
    url: canonicalUrl("/personnages"),
  })),
};

export default function PersonnagesPage() {
  return (
    <>
      <JsonLd schema={itemListSchema} />
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="La troupe intérieure"
          title={
            <>
              Tous les personnages dans votre tête,{" "}
              <span className="italic-display gradient-ink">enfin réunis</span>.
            </>
          }
          intro="Inspirés de la thérapie des parties : chacun incarne une facette de nous-mêmes."
        />

        {/* ───────── Qu'est-ce que la « thérapie des parties » */}
        <section className="relative bg-paper py-24 lg:py-32">
          <div className="container-narrow">
            <ScrollReveal>
              <p className="eyebrow">En deux mots</p>
              <h2 className="fluid-h2 mt-4 text-ink">
                C&apos;est quoi, la{" "}
                <span className="italic-display gradient-ink">thérapie des parties</span> ?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  L&apos;idée est aussi simple que rassurante : on n&apos;est jamais une seule
                  personne, mais une petite troupe. Une part qui juge, une part qui s&apos;inquiète,
                  une part qui rêve, une part qui veut tout contrôler… Toutes vivent dans la même
                  tête, parlent souvent en même temps, et croient bien faire — même quand elles nous
                  compliquent la vie.
                </p>
                <p>
                  La «&nbsp;thérapie des parties&nbsp;» propose d&apos;arrêter de les faire taire
                  pour apprendre, doucement, à les écouter. Sur scène, Maxou leur donne enfin un
                  corps, une voix et un costume. On rit de les reconnaître — parce qu&apos;au fond,
                  on les connaît tous très bien.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ───────── Galerie complète des personnages */}
        <section className="relative bg-bone py-24 lg:py-32">
          <div className="container-soft">
            <ScrollReveal className="mb-14 max-w-2xl">
              <p className="eyebrow">La distribution au complet</p>
              <h2 className="fluid-h2 mt-4 text-ink">
                Faites connaissance avec{" "}
                <span className="italic-display gradient-navy">toute la bande</span>.
              </h2>
              <p className="fluid-lead mt-5 text-stone-500">
                Du Critique au Chef d&apos;orchestre : chacun a son rôle, sa réplique et sa façon
                bien à lui de prendre toute la place.
              </p>
            </ScrollReveal>
            <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {personnages.map((p, index) => (
                <StaggerItem key={p.slug} className="h-full">
                  <PersonnageCard personnage={p} priority={index === 0} />
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ───────── Bandeau d'accent (bordeaux) */}
        <section className="section-wine grain relative overflow-hidden py-24 lg:py-32">
          <div aria-hidden className="aurora opacity-40" />
          <div aria-hidden className="spotlight" />
          <div className="container-narrow relative text-center">
            <ScrollReveal>
              <p className="eyebrow eyebrow--center eyebrow--light">La promesse du spectacle</p>
              <h2 className="fluid-h2 mt-5 text-ivory">
                Le but n&apos;est pas de faire taire ces voix, mais d&apos;apprendre à les{" "}
                <span className="italic-display text-gold-300">écouter</span> — en riant.
              </h2>
              <p className="fluid-lead mx-auto mt-6 max-w-xl text-cream-100/80">
                Un peu plus d&apos;une heure pour réunir toute la troupe sur scène, leur rendre
                leur dignité… et repartir un peu plus réconcilié avec soi-même.
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/spectacle"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-medium text-noir-900 transition-colors duration-300 hover:bg-gold-400"
                >
                  Découvrir le spectacle
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CtaBandeau />
      </main>
      <Footer />
    </>
  );
}
