import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description: "Données collectées, finalités, conservation et vos droits (RGPD).",
  path: "/confidentialite",
  noindex: true,
});

export default function ConfidentialitePage() {
  const { legal } = siteConfig;
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Vos données"
          title="Politique de confidentialité"
          intro="Le respect de votre vie privée est essentiel."
        />
        <section className="bg-ivory">
          <div className="container-narrow space-y-10 py-20 text-stone-600 lg:py-28">
            <p className="text-sm text-stone-400">Dernière mise à jour : juin 2026.</p>

            <div>
              <h2 className="font-display text-2xl text-ink">Responsable du traitement</h2>
              <p className="mt-3 leading-relaxed">
                Le responsable du traitement des données collectées sur ce site est{" "}
                <strong>{legal.publisher}</strong>. Pour toute question relative à vos données
                personnelles, vous pouvez écrire à{" "}
                <a
                  href={`mailto:${legal.dpoEmail}`}
                  className="font-medium text-gold-700 underline-offset-4 hover:underline"
                >
                  {legal.dpoEmail}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Données collectées</h2>
              <p className="mt-3 leading-relaxed">
                Nous ne collectons que les données que vous nous transmettez volontairement.
                Aucune donnée n&apos;est collectée à votre insu.
              </p>
              <ul className="mt-4 space-y-2 leading-relaxed">
                <li>
                  <strong>Via le formulaire de contact :</strong> nom et prénom, adresse email,
                  numéro de téléphone (facultatif), motif de la demande, nom de votre structure
                  ou organisation (facultatif) et le contenu de votre message.
                </li>
                <li>
                  <strong>Via l&apos;inscription à la newsletter :</strong> votre adresse email
                  uniquement.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Finalités &amp; base légale</h2>
              <p className="mt-3 leading-relaxed">
                Les données du formulaire de contact sont utilisées pour répondre à votre
                demande. L&apos;adresse email transmise lors de l&apos;inscription à la
                newsletter sert exclusivement à vous envoyer les actualités du spectacle
                (nouvelles dates, coulisses, avant-premières). Dans les deux cas, la base légale
                du traitement est votre <strong>consentement</strong>, que vous donnez en
                soumettant volontairement le formulaire concerné.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Destinataires</h2>
              <p className="mt-3 leading-relaxed">
                Vos données sont destinées à <strong>{legal.publisher}</strong> uniquement et ne
                sont jamais vendues ni cédées à des tiers à des fins commerciales.
                L&apos;acheminement des emails est assuré par notre sous-traitant technique{" "}
                <strong>Resend</strong>, qui agit pour notre compte et conformément à nos
                instructions.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Durée de conservation</h2>
              <p className="mt-3 leading-relaxed">
                Les données issues d&apos;une demande de contact sont conservées le temps de
                traiter votre demande, puis archivées pendant une durée maximale d&apos;environ
                trois ans à des fins de suivi. Les adresses email inscrites à la newsletter sont
                conservées jusqu&apos;à votre désinscription, possible à tout moment.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Vos droits</h2>
              <p className="mt-3 leading-relaxed">
                Conformément au Règlement général sur la protection des données (RGPD), vous
                disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
                d&apos;opposition, de limitation et de portabilité de vos données. Vous pouvez
                exercer ces droits en écrivant à{" "}
                <a
                  href={`mailto:${legal.dpoEmail}`}
                  className="font-medium text-gold-700 underline-offset-4 hover:underline"
                >
                  {legal.dpoEmail}
                </a>
                . Vous disposez également du droit d&apos;introduire une réclamation auprès de la
                CNIL (Commission nationale de l&apos;informatique et des libertés, www.cnil.fr).
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Cookies</h2>
              <p className="mt-3 leading-relaxed">
                Ce site n&apos;utilise aucun cookie de suivi ni de publicité. Aucune donnée de
                navigation n&apos;est exploitée à des fins de traçage ou de profilage. Aucun
                bandeau de consentement aux cookies n&apos;est donc nécessaire.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Sécurité &amp; hébergement</h2>
              <p className="mt-3 leading-relaxed">
                Les échanges avec ce site sont chiffrés via le protocole HTTPS et protégés par
                des en-têtes de sécurité (CSP, HSTS, etc.). Le site est hébergé par{" "}
                <strong>{legal.host.name}</strong>, qui met en œuvre des mesures techniques et
                organisationnelles destinées à préserver la confidentialité et l&apos;intégrité
                de vos données.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
