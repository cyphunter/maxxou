import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site de Maxxou Officiel.",
  path: "/mentions-legales",
  noindex: true,
});

export default function MentionsLegalesPage() {
  const { legal, contact } = siteConfig;
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero eyebrow="Informations légales" title="Mentions légales" />
        <section className="bg-paper pb-24 pt-4 lg:pb-32">
          <div className="container-narrow space-y-10 text-stone-600">
            <p className="text-sm text-stone-400">Dernière mise à jour : juin 2026.</p>

            <div>
              <h2 className="font-display text-2xl text-ink">Éditeur du site</h2>
              <p className="mt-3 leading-relaxed">
                Le présent site est édité par <strong>{legal.publisher}</strong>,{" "}
                {siteConfig.role}, exerçant sous le statut {legal.structure}.
                <br />
                SIRET : {legal.siret} <span className="text-stone-400">(à confirmer)</span>
                <br />
                {contact.city} &amp; {contact.secondaryCity}, {contact.countryName}
                <br />
                Email :{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium text-gold-700 underline-offset-4 hover:underline"
                >
                  {contact.email}
                </a>
                <br />
                Directeur de la publication : {legal.publisher}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Hébergement</h2>
              <p className="mt-3 leading-relaxed">
                Le site est hébergé par <strong>{legal.host.name}</strong>
                <br />
                {legal.host.address}
                <br />
                <a
                  href={legal.host.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold-700 underline-offset-4 hover:underline"
                >
                  {legal.host.url}
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Propriété intellectuelle</h2>
              <p className="mt-3 leading-relaxed">
                L&apos;ensemble des contenus de ce site (textes, mise en page, identité
                visuelle, noms et descriptions des personnages, structure du spectacle et
                éléments graphiques) est protégé par le droit de la propriété
                intellectuelle. Sauf mention contraire, ces contenus sont la propriété
                exclusive de {legal.publisher}. Toute reproduction, représentation,
                modification ou diffusion, totale ou partielle, sans autorisation écrite
                préalable, est interdite.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Crédits</h2>
              <p className="mt-3 leading-relaxed">
                Visuels d&apos;illustration : placeholders SVG générés, destinés à être
                remplacés par les vrais visuels et photos de scène de Maxxou. Conception
                &amp; développement : agence web.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Données personnelles</h2>
              <p className="mt-3 leading-relaxed">
                Le traitement des données collectées (notamment via le formulaire de
                contact et l&apos;inscription à la newsletter) est détaillé dans notre{" "}
                <Link
                  href="/confidentialite"
                  className="font-medium text-gold-700 underline-offset-4 hover:underline"
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Responsabilité</h2>
              <p className="mt-3 leading-relaxed">
                {legal.publisher} s&apos;efforce d&apos;assurer l&apos;exactitude des
                informations diffusées sur ce site (dates de représentation, lieux,
                tarifs, contenus éditoriaux) mais ne saurait être tenu responsable des
                omissions, inexactitudes ou carences de mise à jour, qu&apos;elles soient
                de son fait ou du fait de tiers. L&apos;éditeur décline également toute
                responsabilité quant au contenu des sites tiers accessibles via des liens
                (plateformes de billetterie, réseaux sociaux).
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
