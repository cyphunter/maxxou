import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ItemList, WithContext } from "schema-dts";

import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { representations } from "@/data/dates";

import { Header } from "@/components/public/header";
import { Footer } from "@/components/public/footer";
import { PageHero } from "@/components/public/page-hero";
import { SectionHeading } from "@/components/public/section-heading";
import { DatesList } from "@/components/public/dates-list";
import { NewsletterSignup } from "@/components/public/newsletter-signup";
import { CtaBandeau } from "@/components/public/cta-bandeau";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "Dates & réservation",
  description:
    "Toutes les dates du spectacle de Maxou Officiel à Lyon, Paris et en tournée. Réservez votre place.",
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
              <span className="italic-display gradient-ink">représentations</span>.
            </>
          }
          intro="Lyon, Paris et en tournée. Réservez votre soirée — la salle se remplit vite."
        />

        {/* ───────── Calendrier complet */}
        <section className="relative bg-paper py-24 lg:py-32">
          <div className="container-narrow">
            <ScrollReveal>
              <DatesList />
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <p className="mt-10 text-center text-sm text-stone-600">
                Une date complète ? Une envie de nous faire venir dans votre ville ?{" "}
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1 font-medium text-gold-700 transition-colors hover:text-gold-800"
                >
                  Contactez-nous
                  <ArrowUpRight
                    size={14}
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ───────── Newsletter (dark) */}
        <section className="section-noir grain relative overflow-hidden py-20 lg:py-28">
          <div aria-hidden className="aurora opacity-30" />
          <div className="container-narrow relative">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <ScrollReveal className="lg:col-span-6">
                <SectionHeading
                  light
                  eyebrow="Newsletter"
                  title={siteConfig.newsletter.title}
                  intro={siteConfig.newsletter.subtitle}
                />
              </ScrollReveal>
              <ScrollReveal delay={0.1} className="lg:col-span-6">
                <NewsletterSignup tone="dark" />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CtaBandeau />
      </main>
      <Footer />
    </>
  );
}
