import type { Metadata } from "next";
import { Shuffle, Mic, Puzzle, Heart } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { atouts } from "@/data/atouts";
import { media } from "@/data/media";

import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";
import { CtaBandeau } from "@/components/public/cta-bandeau";
import { SmartImage } from "@/components/ui/smart-image";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

export const metadata: Metadata = buildMetadata({
  title: "À propos",
  description:
    "Maxxou : humoriste et improvisateur, formé à l'impro et passionné de thérapie des parties. Une approche pédagogique et bienveillante.",
  path: "/a-propos",
});

const reperes = [
  { icon: Shuffle, label: "Improvisation théâtrale" },
  { icon: Mic, label: "Scène & humour" },
  { icon: Puzzle, label: "Thérapie des parties (IFS)" },
  { icon: Heart, label: "Pédagogie & bienveillance" },
];

export default function AProposPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Qui est Maxxou ?"
          title={
            <>
              L&apos;humour comme{" "}
              <span className="italic-display text-gold-700">porte d&apos;entrée</span>.
            </>
          }
          intro="Derrière les personnages, une même conviction : on rit mieux des sujets profonds quand on les regarde avec tendresse. Voici le parcours et la philosophie de Maxxou."
        />

        {/* ───────── Bio éditoriale */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery grid gap-14 py-24 lg:grid-cols-12 lg:items-start lg:gap-20 lg:py-32">
            {/* Portrait */}
            <ScrollReveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="relative aspect-[4/5] overflow-hidden border border-ink/10 bg-bone">
                  <SmartImage
                    src={media.portrait}
                    alt="Portrait de Maxxou, humoriste et improvisateur"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover grayscale-[0.7] sepia-[0.15] transition duration-700 ease-out hover:grayscale-0 hover:sepia-0"
                  />
                  <span aria-hidden className="absolute bottom-5 right-5 h-2 w-2 bg-gold-500" />
                </div>

                {/* Repères */}
                <ul className="mt-8 border-t border-ink/10">
                  {reperes.map((r) => (
                    <li
                      key={r.label}
                      className="flex items-center gap-3 border-b border-ink/10 py-3 text-sm text-stone-600"
                    >
                      <r.icon size={15} aria-hidden className="text-gold-700" />
                      {r.label}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Texte de bio */}
            <ScrollReveal delay={0.1} className="lg:col-span-7">
              <p className="eyebrow">
                Le parcours
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.5vw,3rem)] font-normal leading-tight text-ink">
                D&apos;une scène d&apos;impro à un{" "}
                <span className="italic-display text-gold-700">seul-en-scène</span> pas comme les
                autres.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-relaxed text-stone-600">
                <p>
                  Tout a commencé sur les planches de l&apos;improvisation théâtrale. C&apos;est là
                  que Maxxou apprend l&apos;essentiel : écouter vraiment, accueillir
                  l&apos;imprévu, faire confiance à l&apos;instant. Aucun filet, aucun texte appris
                  par cœur — juste l&apos;énergie d&apos;une salle et l&apos;envie partagée de faire
                  rire. De cette discipline naît une présence vive, capable de rebondir sur tout, et
                  un goût profond pour le jeu.
                </p>
                <p>
                  Très vite, la scène devient une évidence. Représentation après représentation,
                  Maxxou affine son sens du rythme, du timing comique et de la complicité avec le
                  public. Mais au fil des spectacles, une question l&apos;habite : pourquoi rit-on
                  autant de nos propres travers ? Et s&apos;il y avait, derrière l&apos;éclat de
                  rire, quelque chose de plus profond à dire ?
                </p>
                <p>
                  La rencontre avec la{" "}
                  <strong className="font-medium text-ink">thérapie des parties</strong> (l&apos;IFS,{" "}
                  <em>Internal Family Systems</em>) est un déclic. L&apos;idée que nous sommes
                  peuplés de multiples voix intérieures — le perfectionniste, l&apos;anxieux, le
                  rebelle, l&apos;enfant joueur — résonne immédiatement avec son travail de
                  personnages. Chaque part de nous devient un rôle ; chaque rôle, une part de nous.
                  Nourri par cette approche et par sa curiosité pour la psychanalyse et le
                  développement personnel, Maxxou bâtit un spectacle où l&apos;humour sert de porte
                  d&apos;entrée vers l&apos;intime.
                </p>
                <p>
                  Sa philosophie tient en une ligne : <em>rire sans juger</em>. Pas de leçon, pas de
                  moquerie, pas de spectateur pris pour cible. Juste un miroir drôle et tendre, où
                  chacun reconnaît un bout de soi et repart un peu plus léger. Pédagogue dans
                  l&apos;âme, Maxxou rend accessibles des sujets que l&apos;on aborde rarement — et
                  prouve que l&apos;on peut parler sérieusement de soi… en pleurant de rire.
                </p>
              </div>

              {/* Citation incise */}
              <ScrollReveal delay={0.05} className="mt-12">
                <figure className="border-l border-gold-500 pl-6">
                  <blockquote className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                    « Mes personnages ne sont pas des inconnus : ce sont vos petites voix
                    intérieures. Je leur prête juste un corps, le temps d&apos;un spectacle. »
                  </blockquote>
                  <figcaption className="mt-5 text-[0.8rem] uppercase tracking-[0.16em] text-stone-500">
                    Maxxou
                  </figcaption>
                </figure>
              </ScrollReveal>
            </ScrollReveal>
          </div>
        </section>

        {/* ───────── Pourquoi faire confiance */}
        <section className="border-b border-ink/10 bg-paper">
          <div className="container-gallery py-24 lg:py-32">
            <ScrollReveal className="mb-16 max-w-2xl">
              <p className="eyebrow">
                La confiance, ça se mérite
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                Pourquoi faire confiance à{" "}
                <span className="italic-display text-gold-700">Maxxou</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-stone-600">
                Un spectacle léger en apparence, mais solidement ancré : l&apos;impro,
                l&apos;expérience de la scène et une vraie connaissance de la thérapie des parties.
              </p>
            </ScrollReveal>

            <StaggerReveal
              className="grid grid-cols-1 border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.06}
            >
              {atouts.map((a, i) => (
                <StaggerItem
                  key={a.title}
                  as="article"
                  className="border-b border-ink/10 px-1 py-10 sm:px-6 lg:[&:nth-child(3n+2)]:border-x lg:[&:nth-child(3n+2)]:border-x-ink/10"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm tabular-nums text-gold-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl leading-tight text-ink">{a.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone-600">{a.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ───────── Manifeste */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery py-24 text-center lg:py-32">
            <ScrollReveal className="mx-auto max-w-3xl">
              <p className="eyebrow">
                Le manifeste
              </p>
              <p className="mt-7 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-normal leading-tight text-ink">
                Transformer des sujets profonds en moments de rire —{" "}
                <span className="italic-display text-gold-700">et de réflexion qui restent</span>.
              </p>
              <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-stone-600">
                On vient pour rire. On repart plus léger, et avec un autre regard sur ses propres
                mécanismes. C&apos;est tout l&apos;objet du spectacle.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <CtaBandeau />
      </main>
      <Footer />
    </>
  );
}
