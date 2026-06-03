import Link from "next/link";
import { ArrowRight, ArrowUpRight, Instagram, MapPin } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

import { personnages } from "@/data/personnages";
import { services } from "@/data/services";
import { benefices } from "@/data/benefices";
import { faq } from "@/data/faq";
import { temoignages } from "@/data/temoignages";
import { stats } from "@/data/stats";
import { representations } from "@/data/dates";
import { galerie } from "@/data/media";

import { SmartImage } from "@/components/ui/smart-image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";
import { TextReveal, FadeUp } from "@/components/motion/text-reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { WordRotate } from "@/components/motion/word-rotate";
import { AnimatedCounter } from "@/components/motion/animated-counter";

import { NewsletterSignup } from "@/components/public/newsletter-signup";

import { EditorialHeader } from "@/components/variantes/editorial/editorial-header";
import { EditorialVideo } from "@/components/variantes/editorial/editorial-video";
import { EditorialFaq } from "@/components/variantes/editorial/editorial-faq";
import { EditorialFooter } from "@/components/variantes/editorial/editorial-footer";
import { resolveIcon } from "@/components/variantes/editorial/icons";

export const metadata = buildMetadata({
  title: "Variante — Éditorial sobre",
  description:
    "Maquette alternative de la page d'accueil de Maxxou Officiel, style éditorial sobre (Swiss / magazine premium).",
  path: "/variantes/editorial",
  noindex: true,
});

/* Libellés d'état pour le tableau des dates */
const STATUS_LABEL: Record<string, string> = {
  open: "Billetterie ouverte",
  soon: "Bientôt",
  soldout: "Complet",
  past: "Passée",
};

function formatDate(iso: string): { day: string; month: string; weekday: string } {
  const d = new Date(`${iso}T12:00:00`);
  return {
    day: d.toLocaleDateString("fr-FR", { day: "2-digit" }),
    month: d.toLocaleDateString("fr-FR", { month: "short" }).replace(".", ""),
    weekday: d.toLocaleDateString("fr-FR", { weekday: "long" }),
  };
}

/* Petit libellé méta réutilisé (MAJUSCULES espacées). */
function Meta({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-stone-500">
      {children}
    </span>
  );
}

/* Numéro de section géant, outline doré discret. */
function SectionNumber({ n }: { n: string }) {
  return (
    <span
      aria-hidden
      className="block font-display text-5xl font-medium leading-none tracking-tight text-gold-600/90 lg:text-6xl"
    >
      {n}
    </span>
  );
}

export default function EditorialVariantPage() {
  const teaserPersonnages = personnages.slice(0, 6);
  const upcoming = representations.filter((r) => r.status !== "past").slice(0, 4);
  const featuredGalerie = galerie.slice(0, 3);

  return (
    <>
      <EditorialHeader />

      <main id="main-content" className="bg-paper text-ink">
        {/* ═══════════════════════════════════════════════════════════
            01 — HERO
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border-b border-ink/10 bg-paper pt-28 lg:pt-32">
          <div className="container-soft">
            {/* Filet méta de saison, pleine largeur */}
            <ScrollReveal>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4">
                <Meta>Saison 2026 — Seul-en-scène</Meta>
                <Meta>{siteConfig.contact.serviceAreaLabel}</Meta>
              </div>
            </ScrollReveal>

            <div className="grid gap-12 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
              {/* Colonne titre */}
              <div className="lg:col-span-7">
                <FadeUp>
                  <p className="eyebrow">{siteConfig.role}</p>
                </FadeUp>

                <h1 className="mt-6">
                  <TextReveal
                    as="span"
                    mode="line"
                    className="fluid-display block font-display font-medium text-ink"
                  >
                    {"Tous vos\npersonnages"}
                  </TextReveal>
                  <FadeUp delay={0.25}>
                    <span className="fluid-display mt-1 block font-display font-medium">
                      <span className="italic-display gradient-ink">intérieurs</span>{" "}
                      <span className="text-ink">sur scène.</span>
                    </span>
                  </FadeUp>
                </h1>

                <FadeUp delay={0.35}>
                  <p className="fluid-lead mt-8 max-w-xl text-stone-600">{siteConfig.description}</p>
                </FadeUp>

                {/* CTA carrés */}
                <FadeUp delay={0.45}>
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Magnetic>
                      <Link
                        href="/dates"
                        className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-ivory transition-colors duration-300 hover:bg-gold-600 hover:text-noir-950"
                      >
                        Voir les dates
                        <ArrowRight
                          size={16}
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </Magnetic>
                    <Link
                      href="/spectacle"
                      className="group inline-flex items-center gap-3 border border-ink px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
                    >
                      Découvrir le spectacle
                      <ArrowUpRight
                        size={16}
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </FadeUp>

                {/* Bandeau « Ce soir sur scène » */}
                <FadeUp delay={0.55}>
                  <p className="mt-12 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t border-ink/10 pt-6 text-sm text-stone-600">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-stone-500">
                      Ce soir sur scène :
                    </span>
                    <WordRotate
                      words={personnages.map((p) => p.name)}
                      className="font-display text-lg italic text-wine-700"
                    />
                  </p>
                </FadeUp>
              </div>

              {/* Colonne éditoriale (infos + vidéo) */}
              <div className="lg:col-span-5">
                <ScrollReveal delay={0.15}>
                  {/* Bloc d'infos séparé par filets */}
                  <dl className="border-y border-ink/15">
                    <div className="flex items-center justify-between gap-4 border-b border-ink/10 py-3.5">
                      <dt>
                        <Meta>Format</Meta>
                      </dt>
                      <dd className="font-display text-base text-ink">Seul-en-scène · ~75 min</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-b border-ink/10 py-3.5">
                      <dt>
                        <Meta>Villes</Meta>
                      </dt>
                      <dd className="font-display text-base text-ink">
                        {siteConfig.contact.city} &amp; {siteConfig.contact.secondaryCity}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-4 py-3.5">
                      <dt>
                        <Meta>Saison</Meta>
                      </dt>
                      <dd className="font-display text-base text-ink">N&deg; 01 — 2026</dd>
                    </div>
                  </dl>
                </ScrollReveal>

                <ScrollReveal delay={0.25} className="mt-8">
                  <EditorialVideo />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            Bandeau défilant (sobre, filets)
        ═══════════════════════════════════════════════════════════ */}
        <div className="border-b border-ink/10 bg-ivory">
          <div className="marquee py-4">
            <div className="marquee__track">
              {[...siteConfig.slogans, ...siteConfig.slogans].map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500"
                >
                  {s}
                  <span aria-hidden className="text-gold-600">
                    &mdash;
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            02 — LES PERSONNAGES (liste / tableau éditorial)
        ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-ink/10 bg-paper py-20 lg:py-28">
          <div className="container-soft">
            <ScrollReveal>
              <div className="grid gap-6 border-b border-ink/15 pb-8 lg:grid-cols-12 lg:items-end lg:gap-10">
                <div className="lg:col-span-1">
                  <SectionNumber n="02" />
                </div>
                <div className="lg:col-span-7">
                  <Meta>La troupe intérieure</Meta>
                  <h2 className="fluid-h2 mt-4 font-display font-medium text-ink">
                    Huit parts de vous,{" "}
                    <span className="italic-display gradient-ink">une seule scène</span>.
                  </h2>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <p className="text-sm leading-relaxed text-stone-600">
                    Chaque personnage incarne une facette de nous-mêmes. On les reconnaît, on en
                    rit — et on les regarde, enfin, avec tendresse.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Liste numérotée, filets entre lignes */}
            <StaggerReveal className="border-t border-ink/15">
              {teaserPersonnages.map((p, i) => {
                const Icon = resolveIcon(p.icon);
                return (
                  <StaggerItem key={p.slug}>
                    <Link
                      href="/personnages"
                      className="group grid grid-cols-1 items-center gap-4 border-b border-ink/15 py-6 transition-colors duration-300 hover:bg-ivory/70 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-6"
                    >
                      <span className="font-display text-xl text-gold-700 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <Icon size={18} aria-hidden className="text-stone-400" />
                          <h3 className="font-display text-xl text-ink lg:text-2xl">{p.name}</h3>
                        </div>
                        <p className="mt-1 text-sm text-stone-600">{p.part}</p>
                      </div>
                      <p className="hidden max-w-xs text-right text-sm italic text-wine-700 sm:block">
                        {p.tagline}
                      </p>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerReveal>

            <ScrollReveal delay={0.1} className="mt-10">
              <Link
                href="/personnages"
                className="group inline-flex items-center gap-3 border border-ink px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
              >
                Rencontrer toute la troupe
                <ArrowRight
                  size={16}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            03 — BÉNÉFICES (grille de cartes bordées)
        ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-ink/10 bg-ivory py-20 lg:py-28">
          <div className="container-soft">
            <ScrollReveal>
              <div className="grid gap-6 border-b border-ink/15 pb-8 lg:grid-cols-12 lg:items-end lg:gap-10">
                <div className="lg:col-span-1">
                  <SectionNumber n="03" />
                </div>
                <div className="lg:col-span-8">
                  <Meta>Pourquoi ça fait du bien</Meta>
                  <h2 className="fluid-h2 mt-4 font-display font-medium text-ink">
                    Du rire, et un peu de soi{" "}
                    <span className="italic-display gradient-ink">en plus</span>.
                  </h2>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <p className="text-sm leading-relaxed text-stone-600">
                    On vient pour rire. On repart plus léger — et avec un autre regard sur ses
                    propres mécanismes.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {benefices.map((b, i) => {
                const Icon = resolveIcon(b.icon);
                return (
                  <StaggerItem key={b.title}>
                    <article className="group flex h-full flex-col border-b border-r border-ink/15 bg-ivory p-7 transition-colors duration-300 hover:bg-paper sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-11 w-11 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 group-hover:border-gold-600 group-hover:bg-gold-500 group-hover:text-noir-950">
                          <Icon size={20} aria-hidden />
                        </span>
                        <span className="font-display text-sm text-stone-300 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-6 font-display text-xl text-ink">{b.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone-600">{b.description}</p>
                    </article>
                  </StaggerItem>
                );
              })}
            </StaggerReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            04 — CHIFFRES (respiration sombre, bleu nuit)
        ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-ivory/10 bg-navy-950 py-20 text-cream-100 lg:py-24">
          <div className="container-soft">
            <ScrollReveal>
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ivory/15 pb-8">
                <div>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-300">
                    En quelques chiffres
                  </span>
                  <h2 className="fluid-h2 mt-4 font-display font-medium text-ivory">
                    Un spectacle, toute une{" "}
                    <span className="italic-display gradient-gold">distribution</span>.
                  </h2>
                </div>
                <SectionNumber n="04" />
              </div>
            </ScrollReveal>

            <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <StaggerItem key={s.label}>
                  <div className="border-b border-r border-ivory/10 p-7 [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0">
                    <span className="font-display text-xs text-cream-100/40 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3">
                      <AnimatedCounter
                        to={s.value}
                        prefix={s.prefix}
                        suffix={s.suffix}
                        decimals={s.decimals}
                        className="font-display text-4xl font-medium text-ivory lg:text-5xl"
                      />
                    </p>
                    <p className="mt-3 text-sm leading-snug text-cream-100/70">{s.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            05 — CE QUE PROPOSE MAXXOU (services)
        ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-ink/10 bg-paper py-20 lg:py-28">
          <div className="container-soft">
            <ScrollReveal>
              <div className="grid gap-6 border-b border-ink/15 pb-8 lg:grid-cols-12 lg:items-end lg:gap-10">
                <div className="lg:col-span-1">
                  <SectionNumber n="05" />
                </div>
                <div className="lg:col-span-8">
                  <Meta>Ce que propose Maxxou</Meta>
                  <h2 className="fluid-h2 mt-4 font-display font-medium text-ink">
                    Réserver, inviter,{" "}
                    <span className="italic-display gradient-ink">collaborer</span>.
                  </h2>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <p className="text-sm leading-relaxed text-stone-600">
                    Le seul-en-scène en salle, des interventions sur-mesure, et des partenariats
                    pour aller plus loin.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-3">
              {services.map((s, i) => {
                const Icon = resolveIcon(s.icon);
                return (
                  <StaggerItem key={s.slug} className="h-full">
                    <article className="group flex h-full flex-col border-b border-r border-ink/15 bg-paper p-8 transition-colors duration-300 hover:bg-ivory md:[&:nth-child(3n)]:border-r-0">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-12 w-12 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 group-hover:border-gold-600 group-hover:bg-gold-500 group-hover:text-noir-950">
                          <Icon size={22} aria-hidden />
                        </span>
                        <span className="font-display text-sm text-stone-300 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-7 font-display text-2xl text-ink">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone-600">{s.summary}</p>

                      <ul className="mt-6 space-y-2.5 border-t border-ink/10 pt-5">
                        {s.points.slice(0, 3).map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-sm text-stone-600">
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-1 shrink-0 bg-gold-600"
                            />
                            {pt}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/spectacle"
                        className="group/cta mt-7 inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-gold-700"
                      >
                        {s.cta}
                        <ArrowRight
                          size={15}
                          aria-hidden
                          className="transition-transform duration-300 group-hover/cta:translate-x-1"
                        />
                      </Link>
                    </article>
                  </StaggerItem>
                );
              })}
            </StaggerReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            06 — PROCHAINES DATES (tableau)
        ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-ink/10 bg-ivory py-20 lg:py-28">
          <div className="container-soft">
            <ScrollReveal>
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-8">
                <div>
                  <Meta>Agenda — Saison 2026</Meta>
                  <h2 className="fluid-h2 mt-4 font-display font-medium text-ink">
                    Les prochaines{" "}
                    <span className="italic-display gradient-ink">dates</span>.
                  </h2>
                </div>
                <SectionNumber n="06" />
              </div>
            </ScrollReveal>

            {/* En-tête de tableau (desktop) */}
            <ScrollReveal>
              <div className="hidden grid-cols-[7rem_minmax(0,1fr)_10rem_9rem] gap-6 border-b border-ink/15 py-3 lg:grid">
                <Meta>Date</Meta>
                <Meta>Ville &amp; salle</Meta>
                <Meta>Statut</Meta>
                <span className="text-right">
                  <Meta>Action</Meta>
                </span>
              </div>
            </ScrollReveal>

            <StaggerReveal className="border-t border-ink/15 lg:border-t-0">
              {upcoming.map((r) => {
                const d = formatDate(r.date);
                const soldout = r.status === "soldout";
                const soon = r.status === "soon";
                const ticketHref = r.ticketUrl && r.ticketUrl.length > 0 ? r.ticketUrl : "/dates";
                const external = ticketHref.startsWith("http");

                return (
                  <StaggerItem key={r.id}>
                    <div className="grid grid-cols-1 gap-4 border-b border-ink/15 py-6 lg:grid-cols-[7rem_minmax(0,1fr)_10rem_9rem] lg:items-center lg:gap-6">
                      {/* Date */}
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-3xl font-medium text-ink tabular-nums">
                          {d.day}
                        </span>
                        <div className="leading-tight">
                          <span className="block text-sm font-semibold uppercase tracking-[0.1em] text-gold-700">
                            {d.month}
                          </span>
                          {r.time ? (
                            <span className="block text-xs text-stone-500">{r.time}</span>
                          ) : null}
                        </div>
                      </div>

                      {/* Ville & salle */}
                      <div>
                        <h3 className="flex items-center gap-2 font-display text-lg text-ink">
                          <MapPin size={15} aria-hidden className="text-stone-400" />
                          {r.city}
                        </h3>
                        <p className="mt-0.5 text-sm text-stone-600">{r.venue}</p>
                        {r.note ? (
                          <p className="mt-1 text-xs italic text-wine-700">{r.note}</p>
                        ) : null}
                      </div>

                      {/* Statut */}
                      <div>
                        <span
                          className={
                            soldout
                              ? "inline-flex items-center gap-2 border border-wine-700/40 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-wine-700"
                              : soon
                                ? "inline-flex items-center gap-2 border border-navy-600/40 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-navy-700"
                                : "inline-flex items-center gap-2 border border-gold-700/40 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold-800"
                          }
                        >
                          <span
                            aria-hidden
                            className={
                              soldout
                                ? "h-1.5 w-1.5 bg-wine-600"
                                : soon
                                  ? "h-1.5 w-1.5 bg-navy-500"
                                  : "h-1.5 w-1.5 bg-gold-500"
                            }
                          />
                          {STATUS_LABEL[r.status]}
                        </span>
                      </div>

                      {/* Action */}
                      <div className="lg:text-right">
                        {soldout ? (
                          <span className="inline-flex cursor-not-allowed items-center gap-2 border border-ink/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
                            Complet
                          </span>
                        ) : (
                          <Link
                            href={ticketHref}
                            {...(external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="group inline-flex items-center gap-2 bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-ivory transition-colors duration-300 hover:bg-gold-600 hover:text-noir-950"
                          >
                            {soon ? "M'alerter" : "Réserver"}
                            <ArrowRight
                              size={14}
                              aria-hidden
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerReveal>

            <ScrollReveal delay={0.1} className="mt-10">
              <Link
                href="/dates"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-gold-700"
              >
                Tout le calendrier
                <ArrowUpRight
                  size={15}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            07 — EN IMAGES (galerie carrée)
        ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-ink/10 bg-paper py-20 lg:py-28">
          <div className="container-soft">
            <ScrollReveal>
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-8">
                <div>
                  <Meta>En images</Meta>
                  <h2 className="fluid-h2 mt-4 font-display font-medium text-ink">
                    Quelques instants de{" "}
                    <span className="italic-display gradient-ink">scène</span>.
                  </h2>
                </div>
                <SectionNumber n="07" />
              </div>
            </ScrollReveal>

            <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {featuredGalerie.map((g) => (
                <StaggerItem key={g.id} className="h-full">
                  <figure className="group relative aspect-square overflow-hidden border border-ink/15">
                    <SmartImage
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir-950/80 to-transparent p-4 text-xs text-cream-100/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {g.alt}
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            08 — TÉMOIGNAGES
        ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-ink/10 bg-ivory py-20 lg:py-28">
          <div className="container-soft">
            <ScrollReveal>
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-8">
                <div>
                  <Meta>Ils en parlent</Meta>
                  <h2 className="fluid-h2 mt-4 font-display font-medium text-ink">
                    Ce qu&apos;en dit le{" "}
                    <span className="italic-display gradient-ink">public</span>.
                  </h2>
                </div>
                <SectionNumber n="08" />
              </div>
            </ScrollReveal>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {temoignages.slice(0, 3).map((t, i) => (
                <StaggerItem key={t.id} className="h-full">
                  <figure className="flex h-full flex-col border-b border-r border-ink/15 bg-ivory p-8 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0">
                    <span className="font-display text-4xl leading-none text-gold-600/80">
                      &laquo;
                    </span>
                    <blockquote className="mt-3 flex-1 font-display text-lg leading-snug text-ink">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 border-t border-ink/10 pt-4">
                      <span className="block font-display text-base text-ink">{t.author}</span>
                      <span className="mt-0.5 block text-xs uppercase tracking-[0.14em] text-stone-500">
                        {t.role}
                      </span>
                    </figcaption>
                    <span className="sr-only">Témoignage {i + 1}</span>
                  </figure>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            09 — INSTAGRAM (respiration bordeaux)
        ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-ivory/10 bg-wine-950 py-20 text-cream-100 lg:py-24">
          <div className="container-soft">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
              <ScrollReveal className="lg:col-span-7">
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-300">
                  Suivre Maxxou
                </span>
                <h2 className="fluid-h2 mt-4 font-display font-medium text-ivory">
                  Les coulisses, en direct sur{" "}
                  <span className="italic-display gradient-gold">Instagram</span>.
                </h2>
                <p className="fluid-lead mt-5 max-w-xl text-cream-100/80">
                  Extraits de scène, nouvelles dates et instants de coulisses : c&apos;est sur
                  Instagram que tout se passe en premier.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1} className="lg:col-span-5 lg:justify-self-end">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 border border-ivory/25 bg-noir-950/30 p-6 transition-colors duration-300 hover:border-gold-400 hover:bg-noir-950/50"
                >
                  <div>
                    <span className="block font-display text-xl text-ivory">
                      {siteConfig.instagramHandle}
                    </span>
                    <span className="mt-1 block text-sm text-cream-100/70">
                      {siteConfig.instagramUsername}
                    </span>
                  </div>
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center border border-ivory/30 text-ivory transition-colors duration-300 group-hover:border-gold-400 group-hover:bg-gold-500 group-hover:text-noir-950">
                    <Instagram size={24} aria-hidden />
                  </span>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            10 — NEWSLETTER
        ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-ink/10 bg-paper py-20 lg:py-28">
          <div className="container-soft">
            <div className="grid gap-10 border border-ink/15 bg-ivory p-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-12">
              <ScrollReveal className="lg:col-span-6">
                <Meta>Newsletter</Meta>
                <h2 className="fluid-h2 mt-4 font-display font-medium text-ink">
                  {siteConfig.newsletter.title}
                </h2>
                <p className="fluid-lead mt-4 max-w-lg text-stone-600">
                  {siteConfig.newsletter.subtitle}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1} className="lg:col-span-6">
                <NewsletterSignup tone="light" />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            11 — FAQ
        ═══════════════════════════════════════════════════════════ */}
        <section className="border-b border-ink/10 bg-ivory py-20 lg:py-28">
          <div className="container-soft grid gap-12 lg:grid-cols-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <SectionNumber n="11" />
              <Meta>Questions fréquentes</Meta>
              <h2 className="fluid-h2 mt-4 font-display font-medium text-ink">
                Tout ce qu&apos;il{" "}
                <span className="italic-display gradient-ink">faut savoir</span>.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-600">
                Une autre question&nbsp;? Écrivez-moi, je réponds rapidement.
              </p>
              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 border border-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
              >
                Poser une question
                <ArrowUpRight
                  size={15}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="lg:col-span-7">
              <EditorialFaq entries={faq} />
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            12 — CTA FINAL (respiration sombre)
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-ink py-24 text-ivory lg:py-32">
          <div className="container-soft">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
              <div className="lg:col-span-8">
                <FadeUp>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-300">
                    Prêt à rire de vos parts&nbsp;?
                  </span>
                </FadeUp>
                <h2 className="mt-6">
                  <TextReveal
                    as="span"
                    mode="line"
                    className="fluid-h1 block font-display font-medium text-ivory"
                  >
                    {"Réservez votre\nsoirée."}
                  </TextReveal>
                </h2>
                <FadeUp delay={0.2}>
                  <p className="fluid-lead mt-6 max-w-xl text-cream-100/80">
                    {siteConfig.contact.serviceAreaLabel}. La salle se remplit vite — choisissez
                    votre date dès maintenant.
                  </p>
                </FadeUp>
              </div>
              <FadeUp delay={0.3} className="lg:col-span-4 lg:justify-self-end">
                <div className="flex flex-col gap-3">
                  <Magnetic>
                    <Link
                      href="/dates"
                      className="group inline-flex items-center justify-center gap-3 bg-gold-500 px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-noir-950 transition-colors duration-300 hover:bg-gold-400"
                    >
                      Voir les dates
                      <ArrowRight
                        size={16}
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </Magnetic>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 border border-ivory/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-ink"
                  >
                    Nous contacter
                    <ArrowUpRight
                      size={16}
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>

      <EditorialFooter />
    </>
  );
}
