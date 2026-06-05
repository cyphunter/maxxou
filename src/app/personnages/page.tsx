import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { canonicalUrl } from "@/lib/site-config";
import { personnages } from "@/data/personnages";

import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";
import { PersonnagesGrid } from "@/components/public/personnages-grid";
import { CtaBandeau } from "@/components/public/cta-bandeau";
import { UnderlineLink } from "@/components/ui/gallery";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

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
  name: "Les personnages du spectacle de Maxxou Officiel",
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
              <span className="italic-display text-gold-700">enfin réunis</span>.
            </>
          }
          intro="Inspirés de la thérapie des parties : chacun incarne une facette de nous-mêmes."
        />

        {/* ───────── Qu'est-ce que la « thérapie des parties » */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery py-24 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-12">
              <ScrollReveal className="lg:col-span-5">
                <p className="eyebrow">
                  En deux mots
                </p>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,3.5vw,3rem)] font-normal leading-tight text-ink">
                  C&apos;est quoi, la{" "}
                  <span className="italic-display text-gold-700">thérapie des parties</span> ?
                </h2>
              </ScrollReveal>
              <ScrollReveal
                delay={0.05}
                className="space-y-6 text-base leading-relaxed text-stone-600 lg:col-span-7"
              >
                <p>
                  L&apos;idée est aussi simple que rassurante : on n&apos;est jamais une seule
                  personne, mais une petite troupe. Une part qui juge, une part qui s&apos;inquiète,
                  une part qui rêve, une part qui veut tout contrôler… Toutes vivent dans la même
                  tête, parlent souvent en même temps, et croient bien faire — même quand elles nous
                  compliquent la vie.
                </p>
                <p>
                  La « thérapie des parties » propose d&apos;arrêter de les faire taire pour
                  apprendre, doucement, à les écouter. Sur scène, Maxxou leur donne enfin un corps,
                  une voix et un costume. On rit de les reconnaître — parce qu&apos;au fond, on les
                  connaît tous très bien.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ───────── Galerie complète des personnages */}
        <section className="border-b border-ink/10 bg-paper">
          <div className="container-gallery py-24 lg:py-32">
            <ScrollReveal className="mb-16 max-w-2xl">
              <p className="eyebrow">
                La distribution au complet
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                Faites connaissance avec{" "}
                <span className="italic-display text-gold-700">toute la bande</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Du Critique au Chef d&apos;orchestre : chacun a son rôle, sa réplique et sa façon
                bien à lui de prendre toute la place.
              </p>
            </ScrollReveal>
            <PersonnagesGrid personnages={personnages} priorityFirst />
          </div>
        </section>

        {/* ───────── La promesse du spectacle */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery py-24 text-center lg:py-32">
            <ScrollReveal className="mx-auto max-w-3xl">
              <p className="eyebrow">
                La promesse du spectacle
              </p>
              <p className="mt-7 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-normal leading-tight text-ink">
                Le but n&apos;est pas de faire taire ces voix, mais d&apos;apprendre à les{" "}
                <span className="italic-display text-gold-700">écouter</span> — en riant.
              </p>
              <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-stone-600">
                Un peu plus d&apos;une heure pour réunir toute la troupe sur scène, leur rendre leur
                dignité… et repartir un peu plus réconcilié avec soi-même.
              </p>
              <div className="mt-10 flex justify-center">
                <UnderlineLink href="/spectacle" withArrow className="text-ink">
                  Découvrir le spectacle
                </UnderlineLink>
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
