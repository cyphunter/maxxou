"use client";

import { useRef, type CSSProperties, type MouseEvent } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowUpRight, Ticket, MapPin } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import { WordRotate } from "@/components/motion/word-rotate";
import { Magnetic } from "@/components/motion/magnetic";
import { siteConfig } from "@/lib/site-config";
import { media } from "@/data/media";
import { personnages } from "@/data/personnages";

const EASE = [0.16, 1, 0.3, 1] as const;

const names = personnages.map((p) => p.name);

const voices = [
  { name: "Le Critique", line: "« Tu peux mieux faire. »", color: "text-wine-700", pos: "left-[-7%] top-[10%]" },
  { name: "L'Anxieux", line: "« Et si ça rate ? »", color: "text-navy-700", pos: "right-[-9%] top-[44%]" },
  { name: "L'Enfant", line: "« On joue ? »", color: "text-gold-700", pos: "left-[-3%] bottom-[8%]" },
];

// Masques « rideau » : on élargit le clip pour ne pas couper descenders / italique.
const mask: CSSProperties = {
  display: "block",
  overflow: "hidden",
  paddingBottom: "0.2em",
  marginBottom: "-0.2em",
  paddingTop: "0.05em",
  marginTop: "-0.05em",
};
const maskWide: CSSProperties = {
  ...mask,
  paddingRight: "0.4em",
  marginRight: "-0.4em",
};

export function HeroHome() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallaxe à la souris
  const mvx = useMotionValue(0);
  const mvy = useMotionValue(0);
  const sx = useSpring(mvx, { stiffness: 90, damping: 18, mass: 0.5 });
  const sy = useSpring(mvy, { stiffness: 90, damping: 18, mass: 0.5 });

  const portraitX = useTransform(sx, (v) => v * 16);
  const portraitY = useTransform(sy, (v) => v * 16);
  const portraitRotX = useTransform(sy, (v) => v * -4);
  const portraitRotY = useTransform(sx, (v) => v * 4);

  const c0x = useTransform(sx, (v) => v * 28);
  const c0y = useTransform(sy, (v) => v * 28);
  const c1x = useTransform(sx, (v) => v * -32);
  const c1y = useTransform(sy, (v) => v * -32);
  const c2x = useTransform(sx, (v) => v * 22);
  const c2y = useTransform(sy, (v) => v * 22);
  const chipMV = [
    { x: c0x, y: c0y },
    { x: c1x, y: c1y },
    { x: c2x, y: c2y },
  ];

  function onMove(e: MouseEvent<HTMLElement>) {
    if (reduce) return;
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    const px = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const py = ((e.clientY - r.top) / r.height - 0.5) * 2;
    mvx.set(Math.max(-1, Math.min(1, px)));
    mvy.set(Math.max(-1, Math.min(1, py)));
  }
  function onLeave() {
    mvx.set(0);
    mvy.set(0);
  }

  const titleContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.18 } },
  };
  const lineRise: Variants = {
    hidden: { y: "120%" },
    show: { y: "0%", transition: { duration: 0.95, ease: EASE } },
  };

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="hero-stage relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40"
    >
      <div aria-hidden className="aurora opacity-60" />
      <div aria-hidden className="dot-pattern pointer-events-none absolute inset-0 opacity-[0.5]" />
      {/* Faisceaux de projecteur */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "conic-gradient(from 180deg at 72% -10%, transparent 0deg, rgb(227 175 59 / 0.10) 12deg, transparent 26deg, transparent 360deg)",
        }}
      />

      <div className="container-soft relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Texte */}
          <div className="lg:col-span-7">
            <motion.span
              {...enter(0.05)}
              className="inline-flex items-center gap-2.5 rounded-full bg-ivory px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-stone-600 shadow-sm ring-1 ring-noir-900/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
              </span>
              <MapPin size={13} aria-hidden className="text-gold-700" />
              {siteConfig.contact.serviceAreaLabel}
            </motion.span>

            <motion.p {...enter(0.12)} className="eyebrow mt-6">
              Humoriste · Improvisateur · Thérapie des parties
            </motion.p>

            {reduce ? (
              <h1 className="fluid-display mt-4 text-ink">
                Rire de ses parts{" "}
                <span className="italic-display gradient-ink">pour mieux vivre avec elles.</span>
              </h1>
            ) : (
              <motion.h1
                variants={titleContainer}
                initial="hidden"
                animate="show"
                className="fluid-display mt-4 text-ink"
              >
                <span style={mask}>
                  <motion.span variants={lineRise} className="block">
                    Rire de ses parts
                  </motion.span>
                </span>
                <span style={maskWide}>
                  <motion.span variants={lineRise} className="block italic-display gradient-ink">
                    pour mieux vivre avec elles.
                  </motion.span>
                </span>
              </motion.h1>
            )}

            <motion.p
              {...enter(0.8)}
              className="mt-5 font-display text-xl text-stone-600 sm:text-2xl"
            >
              Ce soir sur scène&nbsp;:{" "}
              <WordRotate words={names} interval={2200} className="italic-display text-gold-700" />
            </motion.p>

            <motion.p {...enter(0.9)} className="fluid-lead mt-6 max-w-xl text-stone-600">
              {siteConfig.name} — un seul-en-scène où l&apos;humour, l&apos;improvisation et la
              thérapie des parties font monter sur scène les personnages qui nous habitent.
            </motion.p>

            <motion.div {...enter(1)} className="mt-9 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Link
                  href="/dates"
                  className="pulse-ring group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-medium text-noir-900 transition-colors duration-300 hover:bg-gold-400"
                >
                  <Ticket size={17} aria-hidden />
                  Voir les dates
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </Magnetic>
              <Link
                href="/spectacle"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-ink ring-1 ring-noir-900/20 transition-colors duration-300 hover:bg-noir-900/[0.04]"
              >
                Découvrir le spectacle
              </Link>
            </motion.div>
          </div>

          {/* Portrait + voix flottantes */}
          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.96, y: 20 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  transition: { duration: 1, ease: EASE, delay: 0.25 },
                })}
            className="tilt-stage relative lg:col-span-5"
          >
            <motion.div
              style={
                reduce
                  ? undefined
                  : {
                      x: portraitX,
                      y: portraitY,
                      rotateX: portraitRotX,
                      rotateY: portraitRotY,
                      transformStyle: "preserve-3d",
                    }
              }
              className="relative mx-auto max-w-sm lg:max-w-none"
            >
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gold-400/25 blur-3xl"
              />
              <div className="frame-premium relative aspect-[4/5] bg-navy-900">
                <SmartImage
                  src={media.portrait}
                  alt="Maxou, humoriste et improvisateur, en scène"
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover"
                />
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-noir-950/55 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ivory ring-1 ring-ivory/20 backdrop-blur-md">
                  À l&apos;affiche
                </span>
              </div>
            </motion.div>

            {/* Voix intérieures flottantes */}
            {!reduce
              ? voices.map((v, i) => (
                  <motion.div
                    key={v.name}
                    style={{ x: chipMV[i].x, y: chipMV[i].y }}
                    className={`absolute z-10 hidden sm:block ${v.pos}`}
                  >
                    <span
                      className="float-soft block rounded-2xl bg-ivory px-4 py-2.5 shadow-elevated ring-1 ring-noir-900/10"
                      style={{ animationDelay: `${i * 0.7}s` }}
                    >
                      <span className={`block text-[0.7rem] font-semibold uppercase tracking-[0.14em] ${v.color}`}>
                        {v.name}
                      </span>
                      <span className="mt-0.5 block font-display text-sm text-ink">{v.line}</span>
                    </span>
                  </motion.div>
                ))
              : null}
          </motion.div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
        <span className="scroll-cue" aria-hidden />
        <span className="text-[0.62rem] uppercase tracking-[0.25em] text-stone-400">Défiler</span>
      </div>
    </section>
  );
}
