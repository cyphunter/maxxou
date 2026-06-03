import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
  Play,
  Ticket,
  Scissors,
  Star,
  Quote,
  Plus,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

import { personnages } from "@/data/personnages";
import { services } from "@/data/services";
import { benefices } from "@/data/benefices";
import { representations } from "@/data/dates";
import { temoignages } from "@/data/temoignages";
import { stats } from "@/data/stats";
import { faq } from "@/data/faq";

import { SmartImage } from "@/components/ui/smart-image";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { WordRotate } from "@/components/motion/word-rotate";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { NewsletterSignup } from "@/components/public/newsletter-signup";

import { PersonnageTicket } from "@/components/variantes/ticket/personnage-ticket";
import { DateStub } from "@/components/variantes/ticket/date-stub";

export const metadata = buildMetadata({
  title: "Variante — Ticket de spectacle",
  description:
    "Maquette alternative de la page d'accueil de Maxou Officiel, déclinée façon billet de théâtre : carrée, sobre et thématique.",
  path: "/variantes/ticket",
  noindex: true,
});

/* ─── Motifs réutilisés (perforations / bord cranté) ──────────────────── */

const PERF_H =
  "repeating-linear-gradient(to right, rgb(32 32 31 / 0.32) 0 5px, transparent 5px 11px)";
const PERF_H_LIGHT =
  "repeating-linear-gradient(to right, rgb(252 250 245 / 0.45) 0 5px, transparent 5px 11px)";

/** Filet de perforation horizontal (séparateur de billet). */
function Perforation({ light = false }: { light?: boolean }) {
  return (
    <span
      aria-hidden
      className="block h-px w-full"
      style={{ backgroundImage: light ? PERF_H_LIGHT : PERF_H }}
    />
  );
}

/* ─── En-tête (header) ────────────────────────────────────────────────── */

function TicketHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/95 backdrop-blur-[2px]">
      <div className="container-soft flex h-16 items-center justify-between gap-4">
        <Link
          href="/variantes/ticket"
          className="group inline-flex items-center gap-2.5"
          aria-label={`${siteConfig.name} — accueil`}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-[2px] bg-ink text-paper">
            <Ticket size={16} aria-hidden />
          </span>
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-ink">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {[
            { label: "Spectacle", href: "/spectacle" },
            { label: "Personnages", href: "/personnages" },
            { label: "Dates", href: "/dates" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-stone-600 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Maxou"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-ink/20 text-ink transition-colors hover:border-ink/50"
          >
            <Instagram size={16} aria-hidden />
          </a>
          <Link
            href="/dates"
            className="inline-flex items-center gap-1.5 rounded-[2px] bg-ink px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-gold-600 hover:text-ink"
          >
            Réserver
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ─── Étiquette mono (coin de billet) ─────────────────────────────────── */

function CornerTag({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.26em]",
        light ? "text-gold-300" : "text-gold-700",
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-[1px]", light ? "bg-gold-400" : "bg-gold-600")} />
      {children}
    </span>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────── */

export default function VarianteTicketPage() {
  const teaserPersonnages = personnages.slice(0, 6);
  const prochaines = representations.filter((r) => r.status !== "past").slice(0, 3);
  const hasVideo = siteConfig.video.src !== "";

  return (
    <div className="min-h-screen bg-paper text-ink">
      <TicketHeader />

      <main id="main-content">
        {/* ════════════ HERO — grande affiche / billet géant ════════════ */}
        <section className="relative overflow-hidden border-b border-ink/15 bg-paper">
          <div
            aria-hidden
            className="dot-pattern pointer-events-none absolute inset-0 opacity-40"
          />
          <div className="container-soft relative py-14 lg:py-20">
            {/* Bandeau supérieur type en-tête de billet */}
            <ScrollReveal>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-ink/25 pb-4">
                <CornerTag>En tournée 2026</CornerTag>
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-stone-500">
                  {siteConfig.contact.serviceAreaLabel}
                </span>
              </div>
            </ScrollReveal>

            <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:gap-12">
              {/* Colonne titre */}
              <div className="lg:col-span-7">
                <ScrollReveal>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-stone-500">
                    {siteConfig.role}
                  </p>
                </ScrollReveal>

                <TextReveal
                  as="h1"
                  className="fluid-display mt-5 font-display text-ink"
                  delay={0.1}
                >
                  {siteConfig.name}
                </TextReveal>

                <ScrollReveal delay={0.2} className="mt-6 max-w-xl">
                  <p className="fluid-lead text-stone-700">{siteConfig.description}</p>
                </ScrollReveal>

                {/* Slogan rotatif en mono */}
                <ScrollReveal delay={0.3}>
                  <p className="mt-6 inline-flex max-w-full items-center gap-2 border-l-2 border-gold-500 pl-3 font-mono text-[0.78rem] uppercase leading-relaxed tracking-[0.08em] text-wine-700">
                    <span className="shrink-0 text-stone-500">{"// "}</span>
                    <WordRotate words={siteConfig.slogans} className="font-semibold" />
                  </p>
                </ScrollReveal>

                {/* Coupons CTA */}
                <ScrollReveal delay={0.4} className="mt-9 flex flex-wrap items-center gap-3">
                  <Magnetic>
                    <Link
                      href="/dates"
                      className="inline-flex items-center gap-2 rounded-[2px] bg-ink px-7 py-4 font-mono text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-paper transition-colors duration-200 hover:bg-gold-600 hover:text-ink"
                    >
                      <Ticket size={16} aria-hidden />
                      Réserver une date
                    </Link>
                  </Magnetic>
                  <Link
                    href="/spectacle"
                    className="inline-flex items-center gap-2 rounded-[2px] border border-ink/30 px-7 py-4 font-mono text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-200 hover:border-ink"
                  >
                    Le spectacle
                    <ArrowUpRight size={15} aria-hidden />
                  </Link>
                </ScrollReveal>
              </div>

              {/* Colonne vidéo / écran « SÉANCE » */}
              <ScrollReveal delay={0.25} className="lg:col-span-5">
                <figure className="rounded-[2px] border border-ink/20 bg-ivory p-3">
                  {/* En-tête de l'écran */}
                  <figcaption className="flex items-center justify-between px-1 pb-3">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-stone-500">
                      Séance · Bande-annonce
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gold-700">
                      Salle 01
                    </span>
                  </figcaption>

                  <div className="relative aspect-video w-full overflow-hidden rounded-[2px] border border-ink/15 bg-ink">
                    {hasVideo ? (
                      <video
                        controls
                        preload="none"
                        poster={siteConfig.video.poster}
                        className="h-full w-full object-cover"
                      >
                        <source src={siteConfig.video.src} type="video/mp4" />
                        {siteConfig.video.title}
                      </video>
                    ) : (
                      <>
                        <SmartImage
                          src={siteConfig.video.poster}
                          alt={siteConfig.video.title}
                          fill
                          sizes="(min-width: 1024px) 40vw, 90vw"
                          className="object-cover opacity-70"
                          priority
                        />
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
                          <span className="inline-flex h-14 w-14 items-center justify-center rounded-[2px] border border-paper/40 bg-paper/10 text-paper backdrop-blur-sm">
                            <Play size={22} aria-hidden className="ml-0.5" />
                          </span>
                          <span className="rounded-[2px] bg-gold-500 px-3 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink">
                            Bande-annonce à venir
                          </span>
                          <p className="max-w-[15rem] font-mono text-[0.66rem] uppercase leading-relaxed tracking-[0.1em] text-paper/80">
                            {siteConfig.video.caption}
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Pied de l'écran : faux infos de billet */}
                  <div className="mt-3 flex items-center justify-between border-t border-dashed border-ink/20 px-1 pt-3">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-stone-500">
                      Rang A · Place 12
                    </span>
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-stone-500">
                      Durée ~75 min
                    </span>
                  </div>
                </figure>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ════════════ BANDEAU MARQUEE (filet de billets) ════════════ */}
        <section aria-hidden className="border-b border-ink/15 bg-ink py-3">
          <div className="marquee">
            <div className="marquee__track font-mono text-[0.72rem] uppercase tracking-[0.28em] text-paper/80">
              {Array.from({ length: 2 }).map((_, block) => (
                <span key={block} className="flex items-center gap-8">
                  {siteConfig.slogans.map((s, i) => (
                    <span key={`${block}-${i}`} className="flex items-center gap-8">
                      <span className="text-gold-400">{s}</span>
                      <Scissors size={13} aria-hidden className="text-paper/40" />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ CHIFFRES (coupons) ════════════ */}
        <section className="border-b border-ink/15 bg-bone py-16 lg:py-20">
          <div className="container-soft">
            <ScrollReveal className="mb-10">
              <CornerTag>Sur le billet</CornerTag>
              <h2 className="fluid-h3 mt-4 max-w-2xl font-display text-ink">
                Un spectacle, et toute une{" "}
                <span className="italic-display text-wine-700">distribution</span>.
              </h2>
            </ScrollReveal>

            <StaggerReveal className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((s) => (
                <StaggerItem key={s.label}>
                  <div className="flex h-full flex-col justify-between rounded-[2px] border border-ink/15 bg-ivory p-5">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-stone-500">
                      Réf.
                    </span>
                    <AnimatedCounter
                      to={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals}
                      className="mt-3 font-display text-4xl leading-none text-ink lg:text-5xl"
                    />
                    <p className="mt-3 text-sm leading-snug text-stone-600">{s.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ════════════ PERSONNAGES (billets) ════════════ */}
        <section className="border-b border-ink/15 bg-paper py-20 lg:py-28">
          <div className="container-soft">
            <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
              <ScrollReveal className="lg:col-span-8">
                <CornerTag>La troupe intérieure</CornerTag>
                <h2 className="fluid-h2 mt-4 font-display text-ink">
                  Chaque part de vous a son{" "}
                  <span className="italic-display text-wine-700">billet</span>.
                </h2>
                <p className="fluid-lead mt-5 max-w-xl text-stone-700">
                  Le critique, l&apos;anxieux, le perfectionniste… On les reconnaît, on en rit
                  — et on les regarde, enfin, avec tendresse.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.05} className="lg:col-span-4 lg:text-right">
                <Link
                  href="/personnages"
                  className="group inline-flex items-center gap-2 rounded-[2px] border border-ink/30 px-5 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
                >
                  Toute la troupe
                  <ArrowUpRight
                    size={15}
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </ScrollReveal>
            </div>

            <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {teaserPersonnages.map((p, i) => (
                <StaggerItem key={p.slug} className="h-full">
                  <PersonnageTicket personnage={p} index={i} />
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ════════════ BÉNÉFICES ════════════ */}
        <section className="border-b border-ink/15 bg-bone py-20 lg:py-28">
          <div className="container-soft">
            <ScrollReveal className="mb-12 max-w-2xl">
              <CornerTag>Pourquoi ça fait du bien</CornerTag>
              <h2 className="fluid-h2 mt-4 font-display text-ink">
                Du rire, et un peu de soi en plus.
              </h2>
              <p className="fluid-lead mt-5 text-stone-700">
                On vient pour rire. On repart plus léger — et avec un autre regard sur ses
                propres mécanismes.
              </p>
            </ScrollReveal>

            <StaggerReveal className="grid gap-px overflow-hidden rounded-[2px] border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
              {benefices.map((b, i) => (
                <StaggerItem key={b.title} className="h-full">
                  <div className="flex h-full flex-col gap-3 bg-ivory p-6 transition-colors duration-300 hover:bg-paper">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-gold-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg leading-tight text-ink">{b.title}</h3>
                    <p className="text-sm leading-relaxed text-stone-600">{b.description}</p>
                  </div>
                </StaggerItem>
              ))}
              {/* Cellule d'équilibre : reste cohérent en grille */}
              <StaggerItem className="h-full">
                <div className="flex h-full flex-col justify-center gap-3 bg-ink p-6 text-paper">
                  <Star size={20} aria-hidden className="text-gold-400" />
                  <p className="font-display text-lg leading-tight">
                    La thérapie des parties, rendue accessible — en éclats de rire.
                  </p>
                  <Link
                    href="/spectacle"
                    className="mt-2 inline-flex w-fit items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-gold-300 transition-colors hover:text-gold-400"
                  >
                    En savoir plus
                    <ArrowUpRight size={14} aria-hidden />
                  </Link>
                </div>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </section>

        {/* ════════════ SERVICES (coupons détachables) ════════════ */}
        <section className="border-b border-ink/15 bg-paper py-20 lg:py-28">
          <div className="container-soft">
            <ScrollReveal className="mb-12 max-w-2xl">
              <CornerTag>Réserver, inviter, collaborer</CornerTag>
              <h2 className="fluid-h2 mt-4 font-display text-ink">
                Trois coupons, trois façons de jouer.
              </h2>
            </ScrollReveal>

            <StaggerReveal className="grid gap-5 md:grid-cols-3">
              {services.map((s, i) => (
                <StaggerItem key={s.slug} className="h-full">
                  <article className="group flex h-full flex-col rounded-[2px] border border-ink/15 bg-ivory transition-colors duration-300 hover:border-ink/40">
                    <div className="flex items-center justify-between border-b border-dashed border-ink/20 px-5 py-3">
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-stone-500">
                        Coupon {String(i + 1).padStart(2, "0")}
                      </span>
                      <Ticket size={14} aria-hidden className="text-gold-600" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 px-5 py-6">
                      <h3 className="font-display text-xl leading-tight text-ink">{s.title}</h3>
                      <p className="text-sm leading-relaxed text-stone-600">{s.summary}</p>
                      <ul className="mt-2 flex flex-col gap-2">
                        {s.points.slice(0, 3).map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-sm leading-snug text-stone-700"
                          >
                            <Plus
                              size={14}
                              aria-hidden
                              className="mt-0.5 shrink-0 text-gold-700"
                            />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Perforation />
                    <Link
                      href="/contact"
                      className="flex items-center justify-between px-5 py-4 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-paper"
                    >
                      {s.cta}
                      <ArrowUpRight size={15} aria-hidden />
                    </Link>
                  </article>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ════════════ DATES (talons de billet) ════════════ */}
        <section className="border-b border-ink/15 bg-bone py-20 lg:py-28">
          <div className="container-soft">
            <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
              <ScrollReveal className="lg:col-span-8">
                <CornerTag>Agenda · Tournée 2026</CornerTag>
                <h2 className="fluid-h2 mt-4 font-display text-ink">Les prochaines dates.</h2>
                <p className="fluid-lead mt-5 max-w-xl text-stone-700">
                  Lyon, Paris et en tournée. Réservez votre soirée — la salle se remplit vite.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.05} className="lg:col-span-4 lg:text-right">
                <Link
                  href="/dates"
                  className="group inline-flex items-center gap-2 rounded-[2px] border border-ink/30 px-5 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
                >
                  Tout le calendrier
                  <ArrowUpRight
                    size={15}
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </ScrollReveal>
            </div>

            <StaggerReveal className="flex flex-col gap-4">
              {prochaines.map((r) => (
                <StaggerItem key={r.id}>
                  <DateStub representation={r} fallbackHref="/contact" />
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ════════════ TÉMOIGNAGES (talons signés) ════════════ */}
        <section className="border-b border-ink/15 bg-paper py-20 lg:py-28">
          <div className="container-soft">
            <ScrollReveal className="mb-12 max-w-2xl">
              <CornerTag>Ils en parlent</CornerTag>
              <h2 className="fluid-h2 mt-4 font-display text-ink">Ce qu&apos;en dit le public.</h2>
              <p className="mt-4 max-w-xl text-sm italic text-stone-500">
                Témoignages d&apos;exemple à remplacer par de vrais avis.
              </p>
            </ScrollReveal>

            <StaggerReveal className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {temoignages.slice(0, 6).map((t) => (
                <StaggerItem key={t.id} className="h-full">
                  <figure className="flex h-full flex-col rounded-[2px] border border-ink/15 bg-ivory">
                    <div className="flex items-center justify-between border-b border-dashed border-ink/20 px-5 py-3">
                      <span className="flex items-center gap-1 text-gold-600" aria-hidden>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={12} fill="currentColor" />
                        ))}
                      </span>
                      <Quote size={16} aria-hidden className="text-stone-300" />
                    </div>
                    <blockquote className="flex-1 px-5 py-6 text-sm leading-relaxed text-stone-700">
                      {t.quote}
                    </blockquote>
                    <Perforation />
                    <figcaption className="flex items-baseline justify-between px-5 py-4">
                      <span className="font-display text-base text-ink">{t.author}</span>
                      <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-stone-500">
                        {t.role}
                      </span>
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>

        {/* ════════════ INSTAGRAM (coupon réseau) ════════════ */}
        <section className="border-b border-ink/15 bg-ink py-20 text-paper lg:py-24">
          <div className="container-soft">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <ScrollReveal className="lg:col-span-8">
                <CornerTag light>Réseau · Coulisses</CornerTag>
                <h2 className="fluid-h2 mt-4 font-display text-paper">
                  Rejoignez la troupe sur{" "}
                  <span className="italic-display text-gold-300">Instagram</span>.
                </h2>
                <p className="fluid-lead mt-5 max-w-xl text-cream-100/80">
                  Extraits, coulisses et avant-premières des nouvelles dates : c&apos;est là que
                  tout commence. Suivez {siteConfig.instagramUsername}.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1} className="lg:col-span-4 lg:text-right">
                <Magnetic className="lg:float-right">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-[2px] bg-gold-500 px-7 py-4 font-mono text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-200 hover:bg-gold-400"
                  >
                    <Instagram size={16} aria-hidden />
                    {siteConfig.instagramUsername}
                  </a>
                </Magnetic>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ════════════ NEWSLETTER (souche détachable) ════════════ */}
        <section className="border-b border-ink/15 bg-bone py-20 lg:py-28">
          <div className="container-narrow">
            <div className="rounded-[2px] border border-ink/20 bg-ivory">
              <div className="flex items-center justify-between border-b border-dashed border-ink/25 px-6 py-3">
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-stone-500">
                  Souche · Newsletter
                </span>
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-gold-700">
                  À détacher
                </span>
              </div>
              <div className="px-6 py-8 sm:px-10 sm:py-10">
                <ScrollReveal>
                  <CornerTag>Ne ratez aucune date</CornerTag>
                  <h2 className="fluid-h3 mt-4 font-display text-ink">
                    {siteConfig.newsletter.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-stone-700">{siteConfig.newsletter.subtitle}</p>
                </ScrollReveal>
                <ScrollReveal delay={0.1} className="mt-7">
                  <NewsletterSignup tone="light" />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ FAQ (accordéon carré natif) ════════════ */}
        <section className="border-b border-ink/15 bg-paper py-20 lg:py-28">
          <div className="container-soft grid gap-10 lg:grid-cols-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-5">
              <CornerTag>Questions fréquentes</CornerTag>
              <h2 className="fluid-h2 mt-4 font-display text-ink">Tout ce qu&apos;il faut savoir.</h2>
              <p className="fluid-lead mt-5 text-stone-700">
                Une autre question ? Écrivez-moi, je réponds rapidement.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-[2px] border border-ink/30 px-5 py-3 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
              >
                Poser une question
                <ArrowUpRight size={15} aria-hidden />
              </Link>
            </ScrollReveal>

            <div className="lg:col-span-7">
              <StaggerReveal className="flex flex-col">
                {faq.map((f, i) => (
                  <StaggerItem key={f.question}>
                    <details
                      className="group border-b border-ink/15 first:border-t [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer list-none items-center gap-4 py-5 transition-colors hover:text-gold-800">
                        <span className="font-mono text-[0.72rem] tabular-nums text-stone-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 font-display text-lg leading-snug text-ink">
                          {f.question}
                        </span>
                        <span
                          aria-hidden
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] border border-ink/25 text-ink transition-transform duration-300 group-open:rotate-45"
                        >
                          <Plus size={15} />
                        </span>
                      </summary>
                      <p className="pb-6 pl-[2.6rem] pr-2 text-sm leading-relaxed text-stone-600">
                        {f.answer}
                      </p>
                    </details>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </section>

        {/* ════════════ CTA FINAL — billet géant ════════════ */}
        <section className="bg-paper py-20 lg:py-28">
          <div className="container-soft">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[2px] border border-ink/20 bg-ink text-paper">
                <div
                  aria-hidden
                  className="dot-pattern--light pointer-events-none absolute inset-0 opacity-30"
                />
                <div className="relative flex flex-col gap-8 px-6 py-12 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:py-16">
                  <div className="max-w-2xl">
                    <CornerTag light>Admission · 1</CornerTag>
                    <h2 className="fluid-h2 mt-4 font-display text-paper">
                      Réservez votre place dans la{" "}
                      <span className="italic-display text-gold-300">salle</span>.
                    </h2>
                    <p className="fluid-lead mt-5 text-cream-100/80">
                      Une soirée pour rire de ses parts — et repartir un peu plus léger. Les
                      prochaines dates sont ouvertes.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                    <Magnetic>
                      <Link
                        href="/dates"
                        className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-gold-500 px-7 py-4 font-mono text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-200 hover:bg-gold-400"
                      >
                        <Ticket size={16} aria-hidden />
                        Voir les dates
                      </Link>
                    </Magnetic>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-paper/40 px-7 py-4 font-mono text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-paper transition-colors duration-200 hover:border-paper"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>
                {/* Perforation décorative basse */}
                <Perforation light />
                <div className="relative flex items-center justify-between px-6 py-3 sm:px-12">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-cream-100/60">
                    {siteConfig.name}
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-cream-100/60">
                    {siteConfig.contact.serviceAreaLabel}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* ════════════ FOOTER (talon final) ════════════ */}
      <footer className="border-t border-ink/15 bg-bone">
        <div className="container-soft py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-[2px] bg-ink text-paper">
                  <Ticket size={16} aria-hidden />
                </span>
                <span className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-ink">
                  {siteConfig.name}
                </span>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-600">
                {siteConfig.baseline}. {siteConfig.contact.serviceAreaLabel}.
              </p>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-[2px] border border-ink/25 px-4 py-2.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
              >
                <Instagram size={15} aria-hidden />
                {siteConfig.instagramUsername}
              </a>
            </div>

            <nav aria-label="Navigation pied de page" className="lg:col-span-4">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-stone-500">
                Plan
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-stone-600 transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Liens légaux" className="lg:col-span-3">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-stone-500">
                Légal
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {siteConfig.footerNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-stone-600 transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-stone-600 transition-colors hover:text-ink"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-12">
            <Perforation />
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-stone-500">
              © {new Date().getFullYear()} {siteConfig.name} — Tous droits réservés
            </p>
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-stone-400">
              Variante « Ticket de spectacle »
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
