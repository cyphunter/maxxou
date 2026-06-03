"use client";

/**
 * Primitives de la variante « Minimal galerie » (key="galerie").
 *
 * Esprit musée / galerie d'art contemporain : ultra épuré, angles francs
 * (rounded-none), quasi monochrome (anthracite sur papier), l'or seulement
 * en touche infime. Les boutons sont des liens texte avec filet inférieur
 * (underline animé) — pas de pastilles, pas d'ombres.
 *
 * Ces primitives sont co-localisées : elles ne sont utilisées que par la
 * maquette alternative et ne modifient rien du design system existant.
 */

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────
   Lien « cartel » : texte + filet inférieur qui se révèle au survol.
   Le plus discret possible — c'est l'écriture qui fait le bouton.
   ──────────────────────────────────────────────────────────────────── */
type UnderlineLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Affiche la petite flèche diagonale (lien sortant / mise en avant). */
  withArrow?: boolean;
  /** Variante claire pour fond sombre. */
  light?: boolean;
  /** Lien externe (ouvre dans un nouvel onglet). */
  external?: boolean;
};

export function UnderlineLink({
  href,
  children,
  className,
  withArrow = false,
  light = false,
  external = false,
}: UnderlineLinkProps) {
  const inner = (
    <>
      <span className="relative">
        {children}
        <span
          aria-hidden
          className={cn(
            "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100",
            light ? "bg-ivory" : "bg-ink",
          )}
        />
      </span>
      {withArrow ? (
        <ArrowUpRight
          size={15}
          aria-hidden
          className="shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
    </>
  );

  const classes = cn(
    "group inline-flex items-center gap-2 text-[0.82rem] font-medium uppercase tracking-[0.18em]",
    light ? "text-ivory/90 hover:text-ivory" : "text-ink hover:text-ink",
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Bouton « contour » : rectangle, filet 1px, pas d'ombre. Pour les CTA
   principaux discrets (Réserver, etc.). Variante pleine anthracite dispo.
   ──────────────────────────────────────────────────────────────────── */
type FrameButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** "outline" (défaut) = filet ; "solid" = aplat anthracite ; "light" = filet clair sur fond sombre. */
  variant?: "outline" | "solid" | "light";
  external?: boolean;
};

export function FrameButton({
  href,
  children,
  className,
  variant = "outline",
  external = false,
}: FrameButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-none px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300";

  const variantClasses =
    variant === "solid"
      ? "bg-ink text-ivory hover:bg-noir-700"
      : variant === "light"
        ? "border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory/5"
        : "border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.03]";

  const inner = (
    <>
      {children}
      <ArrowUpRight
        size={15}
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variantClasses, className)}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variantClasses, className)}>
      {inner}
    </Link>
  );
}
