import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { siteConfig, canonicalUrl } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { ReducedMotionProvider } from "@/components/motion/reduced-motion";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { BackToTop } from "@/components/public/back-to-top";
import type { Person, WebSite, WithContext } from "schema-dts";
import "./globals.css";

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fontDisplay = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
});

const twitterHandle = siteConfig.seo.twitterHandle
  ? `@${siteConfig.seo.twitterHandle.replace(/^@/, "")}`
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legal.publisher }],
  creator: siteConfig.legal.publisher,
  publisher: siteConfig.legalName,
  category: "Arts du spectacle",
  keywords: siteConfig.seo.globalKeywords.join(", "),
  formatDetection: { email: false, address: false, telephone: false },
  manifest: "/manifest.webmanifest",
  alternates: { canonical: canonicalUrl("/") },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    url: canonicalUrl("/"),
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    ...(twitterHandle ? { creator: twitterHandle, site: twitterHandle } : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  ...(siteConfig.seo.googleSiteVerification || siteConfig.seo.bingSiteVerification
    ? {
        verification: {
          ...(siteConfig.seo.googleSiteVerification
            ? { google: siteConfig.seo.googleSiteVerification }
            : {}),
          ...(siteConfig.seo.bingSiteVerification
            ? { other: { "msvalidate.01": siteConfig.seo.bingSiteVerification } }
            : {}),
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#fcfaf5",
  width: "device-width",
  initialScale: 1,
};

const personId = `${siteConfig.url}#person`;
const websiteId = `${siteConfig.url}#website`;

const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  image: `${siteConfig.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.contact.city,
    addressRegion: siteConfig.contact.region,
    addressCountry: siteConfig.contact.country,
  },
  knowsLanguage: "fr-FR",
  knowsAbout: [
    "Humour",
    "Stand-up / seul-en-scène",
    "Improvisation théâtrale",
    "Thérapie des parties",
    "Internal Family Systems (IFS)",
    "Développement personnel",
    "Psychanalyse",
    "Spectacle vivant",
    "Interventions et conférences gesticulées",
  ],
  sameAs: Object.values(siteConfig.social).filter(Boolean),
};

const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: siteConfig.locale,
  description: siteConfig.description,
  publisher: { "@id": personId },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteConfig.language}
      className={`${fontBody.variable} ${fontDisplay.variable}`}
    >
      <body className="min-h-screen bg-ivory text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
        >
          Aller au contenu principal
        </a>
        <div aria-hidden className="paper-grain" />
        <span
          aria-hidden
          className="pointer-events-none fixed right-3 top-1/2 z-10 hidden -translate-y-1/2 rotate-180 text-[0.6rem] uppercase tracking-[0.34em] text-stone-400 [writing-mode:vertical-rl] xl:block"
        >
          {siteConfig.name} — {siteConfig.contact.city} · {siteConfig.contact.secondaryCity}
        </span>
        <JsonLd schema={personSchema} />
        <JsonLd schema={websiteSchema} />
        <ReducedMotionProvider>
          <ScrollProgress />
          {children}
          <BackToTop />
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
