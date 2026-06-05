import type { Metadata } from "next";
import { Mail, MapPin, Instagram, Ticket, Users, Handshake } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { type RequestType } from "@/lib/schemas/contact";
import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";
import { ContactForm } from "@/components/public/contact-form";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactez Maxxou Officiel : réservation et programmation du spectacle, interventions et ateliers, partenariats et presse. Lyon, Paris et en tournée.",
  path: "/contact",
});

const SUJET_MAP: Record<string, RequestType> = {
  spectacle: "Réserver / programmer le spectacle",
  interventions: "Intervention ou atelier",
  partenariats: "Partenariat / presse / médias",
};

const cards = [
  { icon: Ticket, title: "Réservations", text: "Programmer le spectacle dans votre salle ou votre festival." },
  { icon: Users, title: "Interventions", text: "Entreprises, écoles, associations : ateliers et conférences gesticulées." },
  { icon: Handshake, title: "Partenariats", text: "Programmateurs, presse, médias et collaborations de marque." },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sujet?: string }>;
}) {
  const sp = await searchParams;
  const defaultRequestType = sp?.sujet ? SUJET_MAP[sp.sujet] : undefined;

  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Contact"
          title={
            <>
              Parlons de votre <span className="italic-display text-gold-700">projet</span>.
            </>
          }
          intro="Une date à programmer, une intervention à imaginer, un partenariat à construire ? Écrivez-moi : je réponds rapidement."
        />

        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery grid gap-12 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
            {/* Coordonnées */}
            <ScrollReveal className="lg:col-span-5">
              <div className="border-t border-ink/10">
                {cards.map((c) => (
                  <div key={c.title} className="flex items-start gap-4 border-b border-ink/10 py-6">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ink/20 text-ink">
                      <c.icon size={19} aria-hidden />
                    </span>
                    <div>
                      <h2 className="font-display text-lg text-ink">{c.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-stone-600">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4 text-sm">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-stone-600 transition-colors hover:text-ink"
                >
                  <Mail size={17} aria-hidden className="text-gold-700" />
                  {siteConfig.contact.email}
                </a>
                {siteConfig.social.instagram ? (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-stone-600 transition-colors hover:text-ink"
                  >
                    <Instagram size={17} aria-hidden className="text-gold-700" />
                    {siteConfig.instagramHandle}
                  </a>
                ) : null}
                <p className="flex items-center gap-3 text-stone-600">
                  <MapPin size={17} aria-hidden className="text-gold-700" />
                  {siteConfig.contact.serviceAreaLabel}
                </p>
              </div>
            </ScrollReveal>

            {/* Formulaire */}
            <ScrollReveal delay={0.1} className="lg:col-span-7">
              <div className="border border-ink/10 bg-paper p-6 sm:p-8">
                <ContactForm defaultRequestType={defaultRequestType} />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
