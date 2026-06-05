import type { Metadata } from "next";
import type { ItemList, WithContext } from "schema-dts";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { representations } from "@/data/dates";

import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";
import { DatesList } from "@/components/public/dates-list";
import { NewsletterSignup } from "@/components/public/newsletter-signup";
import { CtaBandeau } from "@/components/public/cta-bandeau";
import { UnderlineLink } from "@/components/ui/gallery";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "Dates & réservation",
  description:
    "Toutes les dates du spectacle de Maxxou Officiel à Lyon, Paris et en tournée. Réservez votre place.",
  path: "/dates",
});

const eventsSchema: WithContext<ItemList> = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: representations
    .filter((r) => r.status !== "past")
    .map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TheaterEvent",
        name: `${siteConfig.name} — seul-en-scène`,
        startDate: r.date,
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: r.venue,
          address: r.address ?? `${r.city}, France`,
        },
        performer: { "@type": "Person", name: siteConfig.name },
        ...(r.ticketUrl
          ? {
              offers: {
                "@type": "Offer",
                url: r.ticketUrl,
                availability:
                  r.status === "soldout"
                    ? "https://schema.org/SoldOut"
                    : "https://schema.org/InStock",
              },
            }
          : {}),
      },
    })),
};

export default function DatesPage() {
  return (
    <>
      <JsonLd schema={eventsSchema} />
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Agenda"
          title={
            <>
              Prochaines{" "}
              <span className="italic-display text-gold-700">représentations</span>.
            </>
          }
          intro="Lyon, Paris et en tournée. Réservez votre soirée — la salle se remplit vite."
        />

        {/* ───────── Calendrier complet */}
        <section className="border-b border-ink/10 bg-ivory">
          <div className="container-gallery py-24 lg:py-32">
            <DatesList />

            <ScrollReveal delay={0.05}>
              <p className="mt-12 text-sm leading-relaxed text-stone-600">
                Une date complète ? Une envie de nous faire venir dans votre ville ?{" "}
                <UnderlineLink href="/contact" className="ml-1 text-ink">
                  Contactez-nous
                </UnderlineLink>
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ───────── Newsletter */}
        <section className="border-b border-ink/10 bg-paper">
          <div className="container-gallery grid grid-cols-1 gap-12 py-24 lg:grid-cols-12 lg:items-center lg:py-32">
            <ScrollReveal className="lg:col-span-5">
              <p className="eyebrow">
                Newsletter
              </p>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-normal leading-tight text-ink">
                {siteConfig.newsletter.title}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-stone-600">
                {siteConfig.newsletter.subtitle}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <NewsletterSignup tone="light" />
            </ScrollReveal>
          </div>
        </section>

        <CtaBandeau />
      </main>
      <Footer />
    </>
  );
}
