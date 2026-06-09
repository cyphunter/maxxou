import type { Metadata } from "next";
import { Banana, Mic, MapPin, Users, Instagram, Globe } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig, canonicalUrl } from "@/lib/site-config";
import { banane } from "@/data/banane";

import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";
import { UnderlineLink, FrameButton } from "@/components/ui/gallery";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

import { JsonLd } from "@/components/seo/json-ld";
import type { Organization, WithContext } from "schema-dts";

export const metadata: Metadata = buildMetadata({
  title: "Banane Comedy Club",
  description:
    "Le Banane Comedy Club : des scènes ouvertes de stand-up dans les quartiers de Lyon, où chaque humoriste a 5 minutes pour tester ses idées devant un vrai public. Un projet porté par Maxxou.",
  path: "/banane-comedy-club",
});

const sameAs = [banane.links.website, banane.links.instagram].filter(Boolean);

const bananeSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: banane.name,
  description: banane.intro,
  url: canonicalUrl("/banane-comedy-club"),
  areaServed: "Lyon, France",
  founder: { "@type": "Person", name: siteConfig.name },
  ...(sameAs.length ? { sameAs } : {}),
};

const faitIcons = [Mic, MapPin, Users] as const;

export default function BananeComedyClubPage() {
  const hasLinks = sameAs.length > 0;

  return (
    <>
      <JsonLd schema={bananeSchema} />
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Scènes ouvertes · Lyon"
          title={
            <>
              Le <span className="italic-display text-gold-700">Banane</span> Comedy Club.
            </>
          }
          intro={banane.intro}
        >
          <ScrollReveal delay={0.1} className="mt-10 flex items-center gap-4">
            <span
              aria-hidden
              className="inline-flex h-11 w-11 items-center justify-center border border-ink/20 text-gold-700"
            >
              <Banana size={20} />
            </span>
            <p className="max-w-md text-sm leading-relaxed text-stone-600">{banane.tagline}</p>
          </ScrollReveal>
        </PageHero>

        {/* ───────── Le format + faits clés */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery py-24 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-12">
              <ScrollReveal className="lg:col-span-5">
                <p className="eyebrow">Le concept</p>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,3.5vw,3rem)] font-normal leading-tight text-ink">
                  Cinq minutes, un micro,{" "}
                  <span className="italic-display text-gold-700">un vrai public</span>.
                </h2>
              </ScrollReveal>

              <ScrollReveal
                delay={0.05}
                className="space-y-6 text-base leading-relaxed text-stone-600 lg:col-span-7"
              >
                <p>{banane.format}</p>
                <p>{banane.mission}</p>
              </ScrollReveal>
            </div>

            <StaggerReveal className="mt-16 grid grid-cols-1 border-t border-ink/10 sm:grid-cols-3">
              {banane.faits.map((fait, i) => {
                const Icon = faitIcons[i] ?? Mic;
                return (
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
                        <Icon size={20} aria-hidden className="text-stone-500" />
                        <p className="mt-3 font-display text-xl leading-snug text-ink">
                          {fait.value}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-stone-600">{fait.label}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerReveal>
          </div>
        </section>

        {/* ───────── Une scène ouverte à tous */}
        <section className="border-b border-ink/10 bg-paper">
          <div className="container-gallery py-24 lg:py-32">
            <ScrollReveal className="mb-16 max-w-2xl">
              <p className="eyebrow">La démarche</p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                {banane.objectifsTitle}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-stone-600">
                {banane.objectifsIntro}
              </p>
            </ScrollReveal>

            <StaggerReveal
              className="grid grid-cols-1 border-t border-ink/10 sm:grid-cols-2"
              stagger={0.06}
            >
              {banane.objectifs.map((objectif, i) => (
                <StaggerItem
                  key={objectif}
                  as="article"
                  className="flex items-baseline gap-4 border-b border-ink/10 py-8 sm:px-6 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:border-l-ink/10"
                >
                  <span className="font-display text-sm tabular-nums text-gold-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-lg leading-snug text-ink">{objectif}</p>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ───────── Suivre le projet */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery py-24 text-center lg:py-32">
            <ScrollReveal className="mx-auto max-w-2xl">
              <p className="eyebrow">Suivre le projet</p>
              <h2 className="mt-7 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-normal leading-tight text-ink">
                Suivez toute l&apos;actualité du{" "}
                <span className="italic-display text-gold-700">Banane Comedy Club</span>.
              </h2>

              {hasLinks ? (
                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
                  {banane.links.website ? (
                    <FrameButton href={banane.links.website} variant="gold" external>
                      Site officiel
                    </FrameButton>
                  ) : null}
                  {banane.links.instagram ? (
                    <UnderlineLink
                      href={banane.links.instagram}
                      external
                      withArrow
                      className="text-ink"
                    >
                      <Instagram size={16} aria-hidden className="mr-2 inline" />
                      Instagram
                    </UnderlineLink>
                  ) : null}
                </div>
              ) : (
                <p className="mx-auto mt-7 flex max-w-md items-center justify-center gap-3 text-sm leading-relaxed text-stone-600">
                  <Globe size={17} aria-hidden className="text-gold-700" />
                  Le site officiel et le compte Instagram arrivent très bientôt.
                </p>
              )}

              <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-stone-500">
                Une salle, un bar, un lieu à Lyon pour accueillir une soirée ? Envie de monter sur
                scène ?{" "}
                <UnderlineLink href="/contact" className="ml-1 text-ink">
                  Écrivez à Maxxou
                </UnderlineLink>
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
