import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Instagram, Ticket } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const year = new Date().getFullYear();

export function Footer() {
  const { contact, social } = siteConfig;

  return (
    <footer className="section-noir grain relative overflow-hidden">
      <div aria-hidden className="aurora opacity-30" />
      <div className="container-soft relative">
        {/* Bloc haut : signature + CTA */}
        <div className="grid gap-12 border-b border-ivory/10 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-6">
            <p className="eyebrow eyebrow--light">Maxxou Officiel</p>
            <p className="fluid-h3 mt-5 max-w-md font-display text-ivory">
              Tous les personnages dans votre tête montent enfin{" "}
              <span className="italic-display text-gold-300">sur scène</span>.
            </p>
            <Link
              href="/dates"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-medium text-noir-900 transition hover:bg-gold-400"
            >
              <Ticket size={16} aria-hidden />
              Voir les prochaines dates
              <ArrowUpRight
                size={16}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-6 lg:grid-cols-3">
            {/* Navigation */}
            <nav aria-label="Pied de page — navigation">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-300/80">Explorer</p>
              <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
                <li>
                  <Link href="/" className="transition-colors hover:text-gold-300">
                    Accueil
                  </Link>
                </li>
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-gold-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold-300/80">Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-gold-300"
                  >
                    <Mail size={14} aria-hidden className="text-gold-400" />
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={14} aria-hidden className="mt-1 text-gold-400" />
                  <span>{contact.serviceAreaLabel}</span>
                </li>
              </ul>
            </div>

            {/* Réseaux */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold-300/80">Réseaux</p>
              <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
                {social.instagram ? (
                  <li>
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-gold-300"
                    >
                      <Instagram size={14} aria-hidden className="text-gold-400" />
                      {siteConfig.instagramHandle}
                    </a>
                  </li>
                ) : null}
                {social.tiktok ? (
                  <li>
                    <a
                      href={social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-gold-300"
                    >
                      TikTok
                    </a>
                  </li>
                ) : null}
                {social.youtube ? (
                  <li>
                    <a
                      href={social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-gold-300"
                    >
                      YouTube
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>

        {/* Bas : légal */}
        <div className="flex flex-col gap-4 py-8 text-xs text-cream-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName} — {siteConfig.role}, {contact.city} &amp;{" "}
            {contact.secondaryCity}.
          </p>
          <nav aria-label="Liens légaux" className="flex flex-wrap gap-x-6 gap-y-2">
            {siteConfig.footerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-gold-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
