import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  /** Variante claire pour fond sombre (rare dans la DA galerie). */
  light?: boolean;
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
};

/**
 * Bloc de titre « galerie » : sur-titre en capitales espacées (cartel),
 * grand titre display en graisse normale, intro discrète. Angles francs,
 * aucun ornement — c'est la typographie et le blanc qui structurent.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  as = "h2",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const Tag = as;
  const centered = align === "center";

  return (
    <div className={cn(centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow", light && "eyebrow--light")}>{eyebrow}</p>
      ) : null}
      <Tag
        className={cn(
          "font-display font-normal leading-tight",
          as === "h1"
            ? "text-[clamp(2.4rem,5vw,4.25rem)]"
            : "text-[clamp(1.9rem,4vw,3.4rem)]",
          eyebrow ? "mt-5" : "",
          light ? "text-ivory" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {intro ? (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            light ? "text-ivory/70" : "text-stone-600",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
