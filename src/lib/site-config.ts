/**
 * Source unique de vérité pour les informations du site de Maxxou Officiel.
 *
 * Maxxou (ou l'agence) peut éditer ce fichier pour mettre à jour coordonnées,
 * slogans, navigation, réseaux sociaux et mentions légales — sans toucher au
 * reste du code. Structure plate, commentée, typée `as const`.
 *
 * Le contenu plus volumineux (personnages, dates, services, FAQ, témoignages…)
 * est dans `src/data/*.ts` — un fichier par sujet.
 *
 * ⚠️ Les valeurs marquées « PLACEHOLDER » sont à confirmer/remplacer par les
 * vraies informations avant mise en ligne.
 */

export const siteConfig = {
  // ─── Identité ─────────────────────────────────────────────────────
  name: "Maxxou Officiel",
  shortName: "Maxxou",
  legalName: "Maxxou Officiel", // PLACEHOLDER — nom/raison sociale réel à renseigner
  role: "Humoriste & improvisateur",
  baseline: "Seul-en-scène — humour & thérapie des parties",
  tagline: "Rire de ses parts pour mieux vivre avec elles.",
  description:
    "Maxxou Officiel, seul-en-scène original mêlant humour, improvisation, psychanalyse et thérapie des parties. Chaque personnage incarne une facette de nous-mêmes — pour rire de ses mécanismes intérieurs avec bienveillance. À Lyon et dans sa région.",

  // ─── Slogans (rotation possible dans le hero) ─────────────────────
  slogans: [
    "Rire de ses parts pour mieux vivre avec elles.",
    "Quand l'humour rencontre la thérapie des parties.",
    "Tous les personnages dans votre tête montent enfin sur scène.",
  ] as readonly string[],

  // ─── URL & locale ────────────────────────────────────────────────
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://maxxou-officiel.fr", // PLACEHOLDER domaine
  locale: "fr-FR",
  language: "fr",

  // ─── Contact ─────────────────────────────────────────────────────
  contact: {
    phone: "+33600000000", // PLACEHOLDER — numéro réel (ou laisser vide si non public)
    phoneDisplay: "06 00 00 00 00", // PLACEHOLDER
    email: "contact@maxxou-officiel.fr", // PLACEHOLDER
    city: "Lyon",
    postalCode: "69000",
    region: "Auvergne-Rhône-Alpes",
    department: "Rhône",
    country: "FR",
    countryName: "France",
    geo: { latitude: 45.764, longitude: 4.8357 },
    primaryServiceArea: "Lyon & sa région",
    serviceAreaLabel: "Lyon · Auvergne-Rhône-Alpes · en tournée",
    availabilityLabel: "Prochaines dates ouvertes à la réservation",
  },

  // ─── Réseaux sociaux (laisser vide si non utilisé) ───────────────
  // Instagram est le réseau principal — objectif : générer des abonnés.
  social: {
    instagram: "https://www.instagram.com/maxxou_officiel/",
    tiktok: "", // PLACEHOLDER (optionnel)
    youtube: "", // PLACEHOLDER (optionnel)
    facebook: "",
    billetterie: "", // PLACEHOLDER — lien billetterie global (HelloAsso / BilletWeb / etc.)
  },
  instagramHandle: "Maxxou Officiel",
  instagramUsername: "@maxxou_officiel",

  // ─── Mentions légales ────────────────────────────────────────────
  legal: {
    structure: "Entrepreneur individuel / artiste (statut à confirmer)", // PLACEHOLDER
    siret: "000 000 000 00000", // PLACEHOLDER — SIRET réel à renseigner
    publisher: "Maxxou Officiel", // PLACEHOLDER — nom du directeur de publication
    foundedYear: 2023,
    host: {
      name: "Cloudflare Inc.",
      address: "101 Townsend Street, San Francisco, CA 94107, USA",
      url: "https://www.cloudflare.com",
    },
    dpoEmail: "contact@maxxou-officiel.fr",
  },

  // ─── Navigation principale ───────────────────────────────────────
  // « Accueil » n'est pas listé : le logo en haut à gauche y ramène déjà.
  navigation: [
    { label: "Le spectacle", href: "/spectacle" },
    { label: "Les personnages", href: "/personnages" },
    { label: "Dates", href: "/dates" },
    { label: "Comedy Club", href: "/banane-comedy-club" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],

  // ─── Navigation footer (légal) ───────────────────────────────────
  footerNavigation: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
  ],

  // ─── Vidéo de présentation (home) ────────────────────────────────
  // Quand la vidéo est prête : déposer le fichier dans public/videos/ et
  // renseigner `src` (mp4 self-hosté = best perf + CSP propre). Tant que
  // `src` est vide, un emplacement élégant « bande-annonce à venir » s'affiche.
  video: {
    src: "", // ex: "/videos/maxxou-teaser.mp4"
    poster: "/images/video/poster.svg",
    title: "Bande-annonce du spectacle",
    caption: "La vidéo officielle arrive très bientôt.",
  },

  // ─── Newsletter ──────────────────────────────────────────────────
  newsletter: {
    title: "Ne ratez aucune date",
    subtitle:
      "Nouvelles représentations, coulisses et avant-premières : recevez les annonces directement par email. Pas de spam, juste l'essentiel.",
  },

  // ─── SEO / branding ──────────────────────────────────────────────
  seo: {
    globalKeywords: [
      "Maxxou",
      "Maxxou Officiel",
      "humoriste",
      "seul-en-scène",
      "one-man-show",
      "spectacle d'humour Lyon",
      "humoriste Lyon",
      "stand-up Lyon",
      "improvisation théâtrale",
      "humour et développement personnel",
      "thérapie des parties",
      "humour thérapeutique",
      "psychanalyse humour",
      "spectacle humour bienveillant",
      "Banane Comedy Club",
      "Lyon",
      "Auvergne-Rhône-Alpes",
    ] as readonly string[],
    brandColors: {
      primary: "#10182f",
      accent: "#e3af3b",
      paper: "#f6f1e9",
    },
    twitterHandle: "" as string,
    googleSiteVerification: "" as string,
    bingSiteVerification: "" as string,
  },
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Construit une URL absolue canonique à partir d'un chemin.
 * Ex: canonicalUrl("/personnages") → "https://maxxou-officiel.fr/personnages"
 */
export function canonicalUrl(path: string): string {
  const base = siteConfig.url.replace(/\/+$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean === "/" ? "" : clean}`;
}
