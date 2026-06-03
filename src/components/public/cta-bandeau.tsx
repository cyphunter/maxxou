import Link from "next/link";
import { ArrowUpRight, Ticket } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Magnetic } from "@/components/motion/magnetic";

export function CtaBandeau() {
  return (
    <section className="section-noir grain relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden className="aurora opacity-40" />
      <div aria-hidden className="fil-grid pointer-events-none absolute inset-0 opacity-40" />
      <div aria-hidden className="spotlight" />
      <div className="container-narrow relative text-center">
        <ScrollReveal>
          <p className="eyebrow eyebrow--center eyebrow--light">Le rideau se lève bientôt</p>
          <h2 className="fluid-h2 mt-5 text-ivory">
            Venez rire de vos petites voix{" "}
            <span className="italic-display text-gold-300">intérieures</span>.
          </h2>
          <p className="fluid-lead mx-auto mt-6 max-w-xl text-cream-100/80">
            Réservez votre place pour une prochaine représentation à Lyon, Paris ou ailleurs —
            ou contactez-nous pour une intervention, un atelier ou un partenariat.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link
                href="/dates"
                className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-medium text-noir-900 transition-colors duration-300 hover:bg-gold-400"
              >
                <Ticket size={16} aria-hidden />
                Voir les dates
                <ArrowUpRight
                  size={16}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Magnetic>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-ivory ring-1 ring-ivory/35 transition-colors duration-300 hover:bg-ivory/10"
            >
              Nous écrire
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
