import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
  className?: string;
  titleClassName?: string;
};

/**
 * Bloc de titre de section réutilisable : eyebrow + titre display + intro.
 * `light` pour les sections sombres.
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
    <div
      className={cn(
        centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow",
            light && "eyebrow--light",
            centered && "eyebrow--center",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          as === "h1" ? "fluid-h1" : "fluid-h2",
          eyebrow ? "mt-4" : "",
          light ? "text-ivory" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {intro ? (
        <p
          className={cn(
            "fluid-lead mt-5",
            light ? "text-cream-100/80" : "text-stone-500",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
