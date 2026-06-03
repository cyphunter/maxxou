/**
 * Variante de page d'accueil « Minimal galerie » (key="galerie").
 *
 * Maquette ALTERNATIVE — route /variantes/galerie, en NOINDEX.
 * Ne modifie aucun fichier existant : tout est inline ou co-localisé sous
 * src/components/variantes/galerie/.
 *
 * Direction artistique : musée / galerie d'art contemporain. Ultra épuré,
 * immense quantité de blanc, images carrées plein cadre traitées en grayscale
 * (couleur au survol), légendes minuscules façon cartel, quasi monochrome
 * (anthracite sur papier), l'or seulement en touche infime. Angles francs
 * partout (rounded-none), filets 1px plutôt qu'ombres, rythme lent et calme.
 */

import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { personnages } from "@/data/personnages";
import { benefices } from "@/data/benefices";
import { representations, type Representation } from "@/data/dates";
import { temoignages } from "@/data/temoignages";
import { faq } from "@/data/faq";
import { media } from "@/data/media";

import { SmartImage } from "@/components/ui/smart-image";
import { NewsletterSignup } from "@/components/public/newsletter-signup";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { FadeUp, TextReveal } from "@/components/motion/text-reveal";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";
import { Magnetic } from "@/components/motion/magnetic";

import { Instagram, Plus } from "lucide-react";

import { UnderlineLink, FrameButton } from "@/components/variantes/galerie/primitives";
import { PersonnagesGrid } from "@/components/variantes/galerie/personnages-grid";

export const metadata = buildMetadata({
  title: "Maquette — Minimal galerie",
  description:
    "Proposition de page d'accueil alternative pour Maxou Officiel, dans un style minimal galerie : épuré, carré, monochrome.",
  path: "/variantes/galerie",
  noindex: true,
});

/* ─── Liens d'en-tête (routes réelles existantes) ─────────────────────── */
const headerNav = [
  { label: "Spectacle", href: "/spectacle" },
  { label: "Personnages", href: "/personnages" },
  { label: "Dates", href: "/dates" },
  { label: "Contact", href: "/contact" },
];

/* ─── Formatage de date FR (sans dépendance, déterministe) ────────────── */
const MOIS = [
  "janv.",
  "févr.",
  "mars",
  "avril",
  "mai",
  "juin",
  "juil.",
  "août",
  "sept.",
  "oct.",
  "nov.",
  "déc.",
];

function formatDate(iso: string): { day: string; month: string; year: string } {
  const [y, m, d] = iso.split("-");
  return {
    day: d ?? "",
    month: MOIS[Number(m) - 1] ?? "",
    year: y ?? "",
  };
}

const STATUS_LABEL: Record<Representation["status"], string> = {
  open: "Réserver",
  soon: "Bientôt",
  soldout: "Complet",
  past: "Passé",
};

export default function VarianteGaleriePage() {
  const upcoming = representations.filter((r) => r.status !== "past").slice(0, 3);
  const featuredTemoignages = temoignages.slice(0, 2);
  const hasVideo = siteConfig.video.src.length > 0;
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-ivory text-ink antialiased">
      {/* ════════════════════════ EN-TÊTE ════════════════════════ */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/90 backdrop-blur-[2px]">
        <div className="mx-auto flex max-w-[88rem] items-center justify-between px-6 py-5 lg:px-12">
          <Link
            href="/variantes/galerie"
            className="font-display text-lg tracking-tight text-ink"
          >
            {siteConfig.shortName}
            <span className="ml-0.5 text-gold-600">.</span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-9 md:flex">
            {headerNav.map((item) => (
              <UnderlineLink
                key={item.href}
                href={item.href}
                className="tracking-[0.16em] text-stone-600 hover:text-ink"
              >
                {item.label}
              </UnderlineLink>
            ))}
          </nav>

          <FrameButton href="/dates" variant="outline" className="px-5 py-2.5 text-[0.72rem]">
            Voir les dates
          </FrameButton>
        </div>
      </header>

      <main id="main-content">
        {/* ════════════════════════ HERO ════════════════════════ */}
        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-[88rem] grid-cols-1 lg:grid-cols-12">
            {/* Colonne texte */}
            <div className="flex flex-col justify-center px-6 py-20 lg:col-span-6 lg:px-12 lg:py-32">
              <FadeUp>
                <p className="text-[0.74rem] font-medium uppercase tracking-[0.26em] text-stone-500">
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

              <FadeUp delay={0.4} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
                <Magnetic>
                  <FrameButton href="/dates" variant="solid">
                    Réserver une date
                  </FrameButton>
                </Magnetic>
                <UnderlineLink href="/spectacle" withArrow className="text-stone-600">
                  Découvrir le spectacle
                </UnderlineLink>
              </FadeUp>

              <FadeUp delay={0.5} className="mt-16 border-t border-ink/10 pt-6">
                <p className="text-[0.78rem] uppercase tracking-[0.18em] text-stone-500">
                  {siteConfig.contact.serviceAreaLabel}
                </p>
              </FadeUp>
            </div>

            {/* Colonne image carrée (portrait) */}
            <div className="relative lg:col-span-6">
              <ScrollReveal className="h-full">
                <div className="relative aspect-square w-full overflow-hidden border-l border-ink/10 bg-bone lg:aspect-auto lg:h-full">
                  <SmartImage
                    src={media.portrait}
                    alt={`Portrait de ${siteConfig.name}, ${siteConfig.role}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover grayscale transition duration-700 ease-out hover:grayscale-0"
                  />
                  {/* Point doré infime, signature discrète */}
                  <span
                    aria-hidden
                    className="absolute bottom-6 right-6 h-2 w-2 bg-gold-500"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ════════════════════ BANDE-ANNONCE (VIDÉO) ════════════════════ */}
        <section className="border-b border-ink/10 bg-paper">
          <div className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12 lg:py-32">
            <ScrollReveal className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.74rem] font-medium uppercase tracking-[0.26em] text-stone-500">
                  Projection
                </p>
                <h2 className="mt-4 max-w-xl font-display text-[clamp(1.9rem,3.5vw,3rem)] font-normal leading-tight text-ink">
                  {siteConfig.video.title}
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-stone-500">
                {siteConfig.video.caption}
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative aspect-video w-full overflow-hidden border border-ink/15 bg-bone">
                {hasVideo ? (
                  <video
                    controls
                    preload="none"
                    poster={siteConfig.video.poster}
                    className="h-full w-full object-cover"
                  >
                    <source src={siteConfig.video.src} type="video/mp4" />
                    Votre navigateur ne prend pas en charge la lecture vidéo.
                  </video>
                ) : (
                  <>
                    <SmartImage
                      src={siteConfig.video.poster}
                      alt={siteConfig.video.title}
                      fill
                      sizes="(min-width: 1024px) 88rem, 100vw"
                      className="object-cover grayscale transition duration-700 ease-out hover:grayscale-0"
                    />
                    {/* Pastille rectangulaire « bande-annonce à venir » */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="border border-ink/30 bg-ivory/85 px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-ink backdrop-blur-[1px]">
                        Bande-annonce à venir
                      </span>
                    </div>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ════════════════════════ PERSONNAGES ════════════════════════ */}
        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12 lg:py-32">
            <div className="mb-16 grid gap-10 lg:grid-cols-12 lg:items-end">
              <ScrollReveal className="lg:col-span-8">
                <p className="text-[0.74rem] font-medium uppercase tracking-[0.26em] text-stone-500">
                  La collection
                </p>
                <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                  Huit parts de nous,{" "}
                  <span className="italic-display text-gold-700">exposées</span> une à une.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-600">
                  Chaque personnage incarne une facette intérieure. On les
                  reconnaît, on en rit — et on les regarde, enfin, avec tendresse.
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
          <div className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12 lg:py-32">
            <ScrollReveal className="mb-16 max-w-2xl">
              <p className="text-[0.74rem] font-medium uppercase tracking-[0.26em] text-stone-500">
                Pourquoi ça fait du bien
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.4rem)] font-normal leading-tight text-ink">
                Du rire, et un peu de soi en plus.
              </h2>
            </ScrollReveal>

            <StaggerReveal
              className="grid grid-cols-1 border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.06}
            >
              {benefices.map((b, i) => (
                <StaggerItem
                  key={b.title}
                  as="article"
                  className="group border-b border-ink/10 px-1 py-10 transition-colors hover:bg-ivory sm:px-6 lg:[&:nth-child(3n+2)]:border-x lg:[&:nth-child(3n+2)]:border-x-ink/10"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm tabular-nums text-gold-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl leading-tight text-ink">{b.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone-600">
                        {b.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ════════════════════════ DATES ════════════════════════ */}
        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-[88rem] px-6 py-24 lg:px-12 lg:py-32">
            <div className="mb-14 grid gap-10 lg:grid-cols-12 lg:items-end">
              <ScrollReveal className="lg:col-span-8">
                <p className="text-[0.74rem] font-medium uppercase tracking-[0.26em] text-stone-500">
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

            <StaggerReveal className="border-t border-ink/15" stagger={0.08}>
              {upcoming.map((r) => {
                const { day, month, year: dy } = formatDate(r.date);
                const reservable = r.status === "open";
                return (
                  <StaggerItem
                    key={r.id}
                    as="article"
                    className="group grid grid-cols-1 items-center gap-4 border-b border-ink/15 py-7 sm:grid-cols-12 sm:gap-6"
                  >
                    {/* Date */}
                    <div className="flex items-baseline gap-3 sm:col-span-3">
                      <span className="font-display text-3xl leading-none text-ink tabular-nums">
                        {day}
                      </span>
                      <span className="text-sm uppercase tracking-[0.14em] text-stone-500">
                        {month} {dy}
                        {r.time ? ` · ${r.time}` : ""}
                      </span>
                    </div>

                    {/* Lieu */}
                    <div className="sm:col-span-6">
                      <p className="font-display text-lg leading-tight text-ink">
                        {r.city}
                        <span className="mx-2 text-stone-300">—</span>
                        <span className="text-stone-600">{r.venue}</span>
                      </p>
                      {r.note ? (
                        <p className="mt-1 text-[0.78rem] uppercase tracking-[0.12em] text-gold-700">
                          {r.note}
                        </p>
                      ) : null}
                    </div>

                    {/* Action */}
                    <div className="sm:col-span-3 sm:text-right">
                      {reservable ? (
                        <UnderlineLink
                          href={r.ticketUrl && r.ticketUrl.length > 0 ? r.ticketUrl : "/contact"}
                          withArrow
                          external={Boolean(r.ticketUrl && r.ticketUrl.length > 0)}
                          className="text-ink"
                        >
                          {STATUS_LABEL[r.status]}
                        </UnderlineLink>
                      ) : (
                        <span className="inline-flex text-[0.82rem] font-medium uppercase tracking-[0.18em] text-stone-400">
                          {STATUS_LABEL[r.status]}
                        </span>
                      )}
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerReveal>
          </div>
        </section>

        {/* ════════════════════ TÉMOIGNAGES + INSTAGRAM ════════════════════ */}
        <section className="border-b border-ink/10 bg-paper">
          <div className="mx-auto grid max-w-[88rem] grid-cols-1 lg:grid-cols-12">
            {/* Témoignages */}
            <div className="px-6 py-24 lg:col-span-7 lg:border-r lg:border-ink/10 lg:px-12 lg:py-32">
              <ScrollReveal className="mb-12">
                <p className="text-[0.74rem] font-medium uppercase tracking-[0.26em] text-stone-500">
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
                  Extraits de scène, nouvelles dates et fragments d&apos;univers :
                  tout commence sur Instagram.
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
        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:items-center lg:px-12 lg:py-32">
            <ScrollReveal className="lg:col-span-5">
              <p className="text-[0.74rem] font-medium uppercase tracking-[0.26em] text-stone-500">
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
        <section className="border-b border-ink/10 bg-paper">
          <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-32">
            <ScrollReveal className="lg:col-span-4">
              <p className="text-[0.74rem] font-medium uppercase tracking-[0.26em] text-stone-500">
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
                <ul className="border-t border-ink/15">
                  {faq.map((entry) => (
                    <li key={entry.question} className="border-b border-ink/15">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                          <span className="font-display text-lg leading-snug text-ink transition-colors group-hover:text-gold-800">
                            {entry.question}
                          </span>
                          <Plus
                            size={18}
                            aria-hidden
                            className="shrink-0 text-stone-500 transition-transform duration-300 group-open:rotate-45"
                          />
                        </summary>
                        <div className="overflow-hidden pb-6 pr-10">
                          <p className="text-sm leading-relaxed text-stone-600">{entry.answer}</p>
                        </div>
                      </details>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ════════════════════════ CTA FINAL ════════════════════════ */}
        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-[88rem] px-6 py-28 text-center lg:px-12 lg:py-40">
            <ScrollReveal>
              <p className="text-[0.74rem] font-medium uppercase tracking-[0.26em] text-stone-500">
                Le rideau se lève bientôt
              </p>
            </ScrollReveal>
            <TextReveal
              as="h2"
              className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-normal leading-[1.02] text-ink"
              delay={0.05}
            >
              Réservez votre place pour le prochain spectacle.
            </TextReveal>
            <ScrollReveal delay={0.2} className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              <Magnetic>
                <FrameButton href="/dates" variant="solid">
                  Voir toutes les dates
                </FrameButton>
              </Magnetic>
              <UnderlineLink href="/contact" withArrow className="text-stone-600">
                Nous contacter
              </UnderlineLink>
            </ScrollReveal>
          </div>
        </section>

        {/* ════════════════════════ FOOTER ════════════════════════ */}
        <footer className="bg-ivory">
          <div className="mx-auto max-w-[88rem] px-6 py-16 lg:px-12 lg:py-20">
            <div className="grid grid-cols-1 gap-12 border-b border-ink/10 pb-12 md:grid-cols-12">
              {/* Marque */}
              <div className="md:col-span-5">
                <Link href="/variantes/galerie" className="font-display text-2xl tracking-tight text-ink">
                  {siteConfig.name}
                  <span className="ml-0.5 text-gold-600">.</span>
                </Link>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
                  {siteConfig.baseline}.
                </p>
                <div className="mt-6">
                  <UnderlineLink
                    href={siteConfig.social.instagram}
                    external
                    withArrow
                    className="text-stone-600"
                  >
                    Instagram {siteConfig.instagramUsername}
                  </UnderlineLink>
                </div>
              </div>

              {/* Navigation */}
              <nav aria-label="Pied de page" className="md:col-span-4">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-stone-400">
                  Explorer
                </p>
                <ul className="mt-5 space-y-3">
                  {siteConfig.navigation.map((item) => (
                    <li key={item.href}>
                      <UnderlineLink href={item.href} className="tracking-[0.12em] text-stone-600">
                        {item.label}
                      </UnderlineLink>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact */}
              <div className="md:col-span-3">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-stone-400">
                  Contact
                </p>
                <ul className="mt-5 space-y-3 text-sm text-stone-600">
                  <li>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="transition-colors hover:text-ink"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li>{siteConfig.contact.serviceAreaLabel}</li>
                </ul>
              </div>
            </div>

            {/* Bas de footer */}
            <div className="flex flex-col gap-4 pt-8 text-[0.78rem] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {year} {siteConfig.name}. Tous droits réservés.
              </p>
              <nav aria-label="Liens légaux" className="flex flex-wrap gap-x-6 gap-y-2">
                {siteConfig.footerNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="uppercase tracking-[0.12em] transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
