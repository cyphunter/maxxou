import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

/**
 * Pied de page de la variante « Éditorial sobre ».
 * Respiration sombre (bleu nuit), grille stricte, filets 1px, angles francs.
 */
export function EditorialFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ivory/10 bg-navy-950 text-cream-100">
      <div className="container-soft py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Identité */}
          <div className="lg:col-span-5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold-300">
              {siteConfig.role}
            </p>
            <p className="mt-4 font-display text-3xl leading-tight text-ivory">
              {siteConfig.name}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/70">
              {siteConfig.baseline}. {siteConfig.contact.serviceAreaLabel}.
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-3 border border-ivory/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-gold-400 hover:bg-gold-500 hover:text-noir-950"
            >
              <Instagram size={16} aria-hidden />
              {siteConfig.instagramUsername}
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation du pied de page" className="lg:col-span-4">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-cream-100/50">
              Explorer
            </p>
            <ul className="mt-5 space-y-px">
              {siteConfig.navigation.map((item) => (
                <li key={item.href} className="border-t border-ivory/10 first:border-t-0">
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between py-3 text-sm text-cream-100/80 transition-colors hover:text-ivory"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={15}
                      aria-hidden
                      className="text-cream-100/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + légal */}
          <div className="lg:col-span-3">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-cream-100/50">
              Contact
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-5 block text-sm text-cream-100/80 underline-offset-4 transition-colors hover:text-gold-300 hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            <p className="mt-2 text-sm text-cream-100/60">{siteConfig.contact.serviceAreaLabel}</p>

            <p className="mt-7 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-cream-100/50">
              Légal
            </p>
            <ul className="mt-4 space-y-2">
              {siteConfig.footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream-100/70 underline-offset-4 transition-colors hover:text-ivory hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Filet bas */}
        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/10 pt-7 text-xs text-cream-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <p className="uppercase tracking-[0.16em]">
            {siteConfig.contact.city} &middot; {siteConfig.contact.secondaryCity} &middot; En tournée
          </p>
        </div>
      </div>
    </footer>
  );
}
