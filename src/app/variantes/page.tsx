import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

export const metadata: Metadata = buildMetadata({
  title: "Variantes de design",
  description: "Comparaison des directions visuelles proposées pour la page d'accueil.",
  path: "/variantes",
  noindex: true,
});

type Variante = {
  href: string;
  tag: string;
  title: string;
  desc: string;
  traits: readonly string[];
  preview: React.ReactNode;
};

const variantes: readonly Variante[] = [
  {
    href: "/",
    tag: "En ligne",
    title: "Version actuelle",
    desc: "Chaleureuse et premium : coins arrondis, ombres douces, hero cinétique, cartes en relief.",
    traits: ["Arrondi", "Ombres douces", "Chaleureux"],
    preview: (
      <div className="flex h-full flex-col gap-2 p-5">
        <div className="h-3 w-1/2 rounded-full bg-gold-400/80" />
        <div className="mt-1 h-8 w-4/5 rounded-2xl bg-ink/80" />
        <div className="mt-auto flex gap-2">
          <div className="h-6 w-20 rounded-full bg-gold-500" />
          <div className="h-6 w-16 rounded-full ring-1 ring-ink/20" />
        </div>
      </div>
    ),
  },
  {
    href: "/variantes/editorial",
    tag: "Proposition 1",
    title: "Éditorial sobre",
    desc: "Style magazine / Swiss : grille stricte, très grands titres, numéros de section, filets fins, beaucoup de blanc.",
    traits: ["Carré", "Filets 1px", "Magazine"],
    preview: (
      <div className="flex h-full flex-col gap-2 p-5">
        <div className="flex items-center justify-between border-b border-ink/20 pb-2">
          <div className="h-2 w-16 bg-stone-400" />
          <div className="h-2 w-8 bg-gold-600" />
        </div>
        <div className="mt-1 h-7 w-11/12 bg-ink/85" />
        <div className="h-7 w-3/5 bg-ink/85" />
        <div className="mt-auto h-7 w-28 bg-ink" />
      </div>
    ),
  },
  {
    href: "/variantes/ticket",
    tag: "Proposition 2",
    title: "Ticket de spectacle",
    desc: "Motif billet de théâtre : blocs rectangulaires à talons perforés, codes en monospace, accents bordeaux. Très thématique.",
    traits: ["Carré", "Perforations", "Codes mono"],
    preview: (
      <div className="flex h-full items-stretch gap-0 p-5">
        <div className="flex flex-1 flex-col justify-between border border-dashed border-ink/40 p-3">
          <div className="h-2 w-12 bg-wine-600" />
          <div className="h-5 w-4/5 bg-ink/85" />
          <div className="h-4 w-20 bg-gold-500" />
        </div>
        <div className="flex w-14 flex-col items-center justify-center gap-1 border border-l-0 border-dashed border-ink/40">
          <span className="font-mono text-[0.55rem] tracking-widest text-stone-500">N°01</span>
          <div className="h-2 w-2 rounded-full bg-ink/30" />
          <div className="h-2 w-2 rounded-full bg-ink/30" />
        </div>
      </div>
    ),
  },
  {
    href: "/variantes/galerie",
    tag: "Proposition 3",
    title: "Minimal galerie",
    desc: "Épuré façon musée : images carrées plein cadre, légendes discrètes, immense quantité de blanc, presque monochrome.",
    traits: ["Carré", "Images plein cadre", "Ultra sobre"],
    preview: (
      <div className="grid h-full grid-cols-3 gap-2 p-5">
        <div className="col-span-2 row-span-2 bg-ink/15" />
        <div className="bg-ink/10" />
        <div className="bg-ink/10" />
        <div className="col-span-3 mt-1 h-2 w-1/3 bg-stone-400" />
      </div>
    ),
  },
];

export default function VariantesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Espace de décision"
          title={
            <>
              Trois directions pour la{" "}
              <span className="italic-display gradient-ink">page d&apos;accueil</span>.
            </>
          }
          intro="Comparez les propositions et choisissez votre préférée. La version actuelle reste accessible. Une fois la direction validée, je l'applique à l'ensemble du site."
        />

        <section className="bg-paper pb-24 pt-4 lg:pb-32">
          <div className="container-soft">
            <StaggerReveal className="grid gap-6 md:grid-cols-2">
              {variantes.map((v) => (
                <StaggerItem key={v.href} className="h-full">
                  <Link
                    href={v.href}
                    className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl bg-ivory ring-1 ring-noir-900/10 transition-shadow hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-noir-900/10 bg-bone">
                      {v.preview}
                      <span className="absolute right-3 top-3 rounded-full bg-navy-900/90 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ivory">
                        {v.tag}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-2xl text-ink">{v.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{v.desc}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {v.traits.map((t) => (
                          <li
                            key={t}
                            className="rounded-full bg-noir-900/[0.04] px-3 py-1 text-xs text-stone-600 ring-1 ring-noir-900/10"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-700 transition-colors group-hover:text-gold-800">
                        Voir cette version
                        <ArrowUpRight
                          size={15}
                          aria-hidden
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <ScrollReveal className="mt-12 text-center">
              <p className="text-sm text-stone-500">
                Astuce : ouvrez chaque version dans un onglet séparé pour comparer plus vite.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
