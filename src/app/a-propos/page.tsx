import type { Metadata } from "next";
import { Sparkles, Shuffle, Mic, Puzzle, Heart } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { media } from "@/data/media";

import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";
import { SectionHeading } from "@/components/public/section-heading";
import { AtoutsGrid } from "@/components/public/atouts-grid";
import { CtaBandeau } from "@/components/public/cta-bandeau";
import { SmartImage } from "@/components/ui/smart-image";

import { ScrollReveal } from "@/components/motion/scroll-reveal";

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
              <span className="italic-display gradient-ink">porte d&apos;entrée</span>.
            </>
          }
          intro="Derrière les personnages, une même conviction : on rit mieux des sujets profonds quand on les regarde avec tendresse. Voici le parcours et la philosophie de Maxxou."
        />

        {/* ───────── Bio éditoriale (clair) */}
        <section className="relative overflow-hidden bg-paper py-24 lg:py-32">
          <div aria-hidden className="aurora opacity-40" />
          <div className="container-soft relative grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-20">
            {/* Portrait */}
            <ScrollReveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="frame-premium relative aspect-[4/5]">
                  <SmartImage
                    src={media.portrait}
                    alt="Portrait de Maxxou, humoriste et improvisateur"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-navy-950/70 px-4 py-1.5 text-xs font-medium text-ivory ring-1 ring-ivory/15 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
                    Maxxou · Humoriste &amp; improvisateur
                  </div>
                </div>

                {/* Repères */}
                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {reperes.map((r) => (
                    <li
                      key={r.label}
                      className="inline-flex items-center gap-2 rounded-full bg-ivory px-4 py-2 text-sm text-stone-600 shadow-soft ring-1 ring-noir-900/10"
                    >
                      <r.icon size={14} aria-hidden className="text-gold-700" />
                      {r.label}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Texte de bio */}
            <ScrollReveal delay={0.1} className="lg:col-span-7">
              <p className="eyebrow">Le parcours</p>
              <h2 className="fluid-h2 mt-4 text-ink">
                D&apos;une scène d&apos;impro à un{" "}
                <span className="italic-display gradient-navy">seul-en-scène</span> pas comme
                les autres.
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-stone-600">
                <p>
                  Tout a commencé sur les planches de l&apos;improvisation théâtrale. C&apos;est
                  là que Maxxou apprend l&apos;essentiel : écouter vraiment, accueillir
                  l&apos;imprévu, faire confiance à l&apos;instant. Aucun filet, aucun texte
                  appris par cœur — juste l&apos;énergie d&apos;une salle et l&apos;envie
                  partagée de faire rire. De cette discipline naît une présence vive, capable de
                  rebondir sur tout, et un goût profond pour le jeu.
                </p>
                <p>
                  Très vite, la scène devient une évidence. Représentation après
                  représentation, Maxxou affine son sens du rythme, du timing comique et de la
                  complicité avec le public. Mais au fil des spectacles, une question
                  l&apos;habite&nbsp;: pourquoi rit-on autant de nos propres travers&nbsp;? Et
                  s&apos;il y avait, derrière l&apos;éclat de rire, quelque chose de plus
                  profond à dire&nbsp;?
                </p>
                <p>
                  La rencontre avec la <strong className="font-medium text-ink">thérapie des
                  parties</strong> (l&apos;IFS, <em>Internal Family Systems</em>) est un
                  déclic. L&apos;idée que nous sommes peuplés de multiples voix intérieures — le
                  perfectionniste, l&apos;anxieux, le rebelle, l&apos;enfant joueur — résonne
                  immédiatement avec son travail de personnages. Chaque part de nous devient un
                  rôle&nbsp;; chaque rôle, une part de nous. Nourri par cette approche et par sa
                  curiosité pour la psychanalyse et le développement personnel, Maxxou bâtit un
                  spectacle où l&apos;humour sert de porte d&apos;entrée vers l&apos;intime.
                </p>
                <p>
                  Sa philosophie tient en une ligne&nbsp;: <em>rire sans juger</em>. Pas de
                  leçon, pas de moquerie, pas de spectateur pris pour cible. Juste un miroir
                  drôle et tendre, où chacun reconnaît un bout de soi et repart un peu plus
                  léger. Pédagogue dans l&apos;âme, Maxxou rend accessibles des sujets que
                  l&apos;on aborde rarement — et prouve que l&apos;on peut parler sérieusement
                  de soi… en pleurant de rire.
                </p>
              </div>

              {/* Citation incise */}
              <ScrollReveal delay={0.05} className="mt-10">
                <figure className="relative rounded-2xl bg-bone p-8 ring-1 ring-noir-900/10">
                  <Sparkles
                    size={22}
                    aria-hidden
                    className="text-gold-600"
                  />
                  <blockquote className="mt-4">
                    <p className="font-display text-xl leading-snug text-ink lg:text-2xl">
                      «&nbsp;Mes personnages ne sont pas des inconnus&nbsp;: ce sont vos petites
                      voix intérieures. Je leur prête juste un corps, le temps d&apos;un
                      spectacle.&nbsp;»
                    </p>
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-medium text-stone-500">
                    Maxxou
                  </figcaption>
                </figure>
              </ScrollReveal>
            </ScrollReveal>
          </div>
        </section>

        {/* ───────── Pourquoi faire confiance (clair, plus foncé) */}
        <section className="relative bg-bone py-24 lg:py-32">
          <div className="container-soft">
            <ScrollReveal className="mb-14 max-w-2xl">
              <SectionHeading
                eyebrow="La confiance, ça se mérite"
                title={
                  <>
                    Pourquoi faire confiance à{" "}
                    <span className="italic-display gradient-ink">Maxxou</span>.
                  </>
                }
                intro="Un spectacle léger en apparence, mais solidement ancré : l'impro, l'expérience de la scène et une vraie connaissance de la thérapie des parties."
              />
            </ScrollReveal>
            <AtoutsGrid tone="light" />
          </div>
        </section>

        {/* ───────── Manifeste (sombre) */}
        <section className="section-wine grain relative overflow-hidden py-24 lg:py-32">
          <div aria-hidden className="aurora opacity-30" />
          <div aria-hidden className="fil-grid pointer-events-none absolute inset-0 opacity-40" />
          <div aria-hidden className="spotlight" />
          <div className="container-narrow relative text-center">
            <ScrollReveal>
              <p className="eyebrow eyebrow--center eyebrow--light">Le manifeste</p>
              <p className="fluid-h2 mx-auto mt-6 max-w-3xl text-balance text-ivory">
                Transformer des sujets profonds en moments de rire —{" "}
                <span className="italic-display text-gold-300">
                  et de réflexion qui restent
                </span>
                .
              </p>
              <p className="fluid-lead mx-auto mt-8 max-w-xl text-cream-100/80">
                On vient pour rire. On repart plus léger, et avec un autre regard sur ses
                propres mécanismes. C&apos;est tout l&apos;objet du spectacle.
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
