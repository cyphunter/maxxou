import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { UnderlineLink } from "@/components/ui/gallery";

const year = new Date().getFullYear();

/**
 * Pied de page « galerie » : fond ivoire, filets 1px, trois colonnes
 * (marque / explorer / contact) puis bandeau légal. Aucune ombre, aucun aplat
 * sombre — la sobriété jusqu'au bas de page.
 */
export function Footer() {
  const { contact, social } = siteConfig;

  return (
    <footer className="border-t border-ink/10 bg-ivory">
      <div className="container-gallery py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 border-b border-ink/10 pb-12 md:grid-cols-12">
          {/* Marque */}
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-2xl tracking-tight text-ink">
              {siteConfig.name}
              <span className="ml-0.5 text-gold-600">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
              {siteConfig.baseline}.
            </p>
            {social.instagram ? (
              <div className="mt-6">
                <UnderlineLink
                  href={social.instagram}
                  external
                  withArrow
                  className="text-stone-600"
                >
                  Instagram {siteConfig.instagramUsername}
                </UnderlineLink>
              </div>
            ) : null}
          </div>

          {/* Navigation */}
          <nav aria-label="Pied de page — navigation" className="md:col-span-4">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-stone-400">
              Explorer
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <UnderlineLink href="/" className="tracking-[0.12em] text-stone-600">
                  Accueil
                </UnderlineLink>
              </li>
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <UnderlineLink href={item.href} className="tracking-[0.12em] text-stone-600">
                    {item.label}
                  </UnderlineLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-stone-400">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-stone-600">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-ink"
                >
                  {contact.email}
                </a>
              </li>
              <li>{contact.serviceAreaLabel}</li>
            </ul>
          </div>
        </div>

        {/* Bandeau légal */}
        <div className="flex flex-col gap-4 pt-8 text-[0.78rem] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName} — {siteConfig.role}, {contact.city} et sa région.
          </p>
          <nav aria-label="Liens légaux" className="flex flex-wrap gap-x-6 gap-y-2">
            {siteConfig.footerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="uppercase tracking-[0.12em] transition-colors hover:text-ink"
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
