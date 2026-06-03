import type { ReactNode } from "react";
import { SectionHeading } from "./section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

/**
 * En-tête de page interne : padding haut pour dégager le header fixe,
 * fond clair dégradé + halo. Le titre est rendu en <h1>.
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
    <section className="hero-gradient relative overflow-hidden pb-16 pt-36 lg:pb-20 lg:pt-44">
      <div aria-hidden className="aurora opacity-50" />
      <div className="container-soft relative">
        <ScrollReveal>
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
}
