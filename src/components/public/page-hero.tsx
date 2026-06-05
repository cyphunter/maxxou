import type { ReactNode } from "react";
import { SectionHeading } from "./section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

/**
 * En-tête de page interne, style galerie : beaucoup de blanc, filet de
 * séparation en bas, titre rendu en <h1>. Le header étant `sticky`, aucun
 * padding de compensation n'est nécessaire.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-ink/10 bg-ivory">
      <div className="container-gallery py-20 lg:py-28">
        <ScrollReveal>
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
}
