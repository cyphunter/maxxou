"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Instagram, Menu, X } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * En-tête de la variante « Éditorial sobre ».
 * Style carré : filet 1px sous le bandeau, logo wordmark, nav minimale en
 * majuscules espacées, CTA rectangulaire plein. Aucune ombre.
 */

const NAV = [
  { label: "Le spectacle", href: "/spectacle" },
  { label: "Les personnages", href: "/personnages" },
  { label: "Dates", href: "/dates" },
  { label: "Contact", href: "/contact" },
] as const;

export function EditorialHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-ink/10 bg-paper/95 supports-[backdrop-filter]:bg-paper/80 supports-[backdrop-filter]:backdrop-blur-sm"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-soft flex h-16 items-center justify-between gap-6 lg:h-20">
        {/* Wordmark */}
        <Link
          href="/"
          className="group flex items-baseline gap-2"
          aria-label={`${siteConfig.name} — accueil`}
        >
          <span className="font-display text-xl font-medium tracking-tight text-ink lg:text-2xl">
            {siteConfig.shortName}
          </span>
          <span className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-stone-500 sm:inline">
            Officiel
          </span>
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone-600 transition-colors hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${siteConfig.instagramUsername}`}
            className="hidden h-10 w-10 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-ivory sm:inline-flex"
          >
            <Instagram size={17} aria-hidden />
          </a>
          <Link
            href="/dates"
            className="group hidden items-center gap-2 bg-ink px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-gold-600 hover:text-noir-950 sm:inline-flex"
          >
            Réserver
            <ArrowRight
              size={15}
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          {/* Burger mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-10 w-10 items-center justify-center border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-ivory lg:hidden"
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>

      {/* Panneau mobile */}
      {open ? (
        <div className="border-t border-ink/10 bg-paper lg:hidden">
          <nav aria-label="Navigation mobile" className="container-soft flex flex-col py-2">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink",
                  i > 0 && "border-t border-ink/10",
                )}
              >
                {item.label}
                <ArrowRight size={16} aria-hidden className="text-stone-400" />
              </Link>
            ))}
            <div className="mt-2 flex gap-3 border-t border-ink/10 pb-4 pt-4">
              <Link
                href="/dates"
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ivory"
              >
                Réserver une date
              </Link>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center border border-ink/20 text-ink"
              >
                <Instagram size={18} aria-hidden />
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
