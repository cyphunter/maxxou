/**
 * Primitives du design system « galerie minimaliste » (DA validée).
 *
 * Esprit musée / galerie d'art contemporain : ultra épuré, angles francs
 * (rounded-none), quasi monochrome (anthracite sur ivoire), l'or seulement
 * en touche infime. Les boutons sont des liens texte à filet inférieur
 * (underline animé) ou des rectangles à filet 1px — jamais de pastilles
 * arrondies ni d'ombres.
 *
 * Composants serveur (aucun hook) : utilisables dans les pages et les
 * composants serveur comme client.
 */

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────
   Lien « cartel » : texte + filet inférieur révélé au survol.
   Le plus discret possible — c'est l'écriture qui fait le bouton.
   ──────────────────────────────────────────────────────────────────── */
type UnderlineLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Petite flèche diagonale (lien sortant / mise en avant). */
  withArrow?: boolean;
  /** Variante claire pour fond sombre. */
  light?: boolean;
  /** Lien externe (nouvel onglet). */
  external?: boolean;
  /** Page courante : le filet reste affiché en permanence. */
  active?: boolean;
};

export function UnderlineLink({
  href,
  children,
  className,
  withArrow = false,
  light = false,
  external = false,
  active = false,
}: UnderlineLinkProps) {
  const inner = (
    <>
      <span className="relative">
        {children}
        <span
          aria-hidden
          className={cn(
            "absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-500 ease-out",
            active
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100",
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
    <Link href={href} aria-current={active ? "page" : undefined} className={classes}>
      {inner}
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Bouton « contour » : rectangle, filet 1px, pas d'ombre. Pour les CTA
   principaux discrets. Variante pleine anthracite et variante claire.
   ──────────────────────────────────────────────────────────────────── */
type FrameButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** "outline" (défaut) = filet ; "solid" = aplat anthracite ; "gold" = aplat doré (CTA chaud) ; "light" = filet clair sur fond sombre. */
  variant?: "outline" | "solid" | "gold" | "light";
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
      : variant === "gold"
        ? "bg-gold-500 text-noir-950 hover:bg-gold-400"
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
