/**
 * Le Banane Comedy Club — projet de scènes ouvertes de stand-up à Lyon porté
 * par Maxxou. Contenu client-éditable (page /banane-comedy-club).
 *
 * ⚠️ `links` = PLACEHOLDERS : renseigner l'URL du site officiel et le compte
 * Instagram dès qu'ils sont prêts. Tant qu'ils sont vides, la page affiche un
 * message « liens à venir » au lieu de boutons morts.
 */

export const banane = {
  name: "Banane Comedy Club",
  /** Sur-titre / accroche. */
  tagline: "Les scènes ouvertes de stand-up qui font vivre l'humour dans tout Lyon.",

  /** Introduction (hero). */
  intro:
    "Le Banane Comedy Club est un projet de scènes ouvertes de stand-up à Lyon, pensé pour rendre l'humour accessible dans différents quartiers de la ville.",

  /** Le format, en une phrase. */
  format:
    "L'objectif est simple : créer des soirées de stand-up courtes et dynamiques, où chaque humoriste dispose de 5 minutes sur scène pour tester ses idées devant un public réel.",

  /** La raison d'être. */
  mission:
    "Ce format permet de favoriser l'émergence de nouveaux talents, de développer la scène locale et de proposer des événements conviviaux et proches des habitants.",

  /** Faits clés (3 colonnes). */
  faits: [
    { value: "5 min", label: "par humoriste sur scène" },
    { value: "Plusieurs quartiers", label: "de Lyon, au plus près des habitants" },
    { value: "Scène ouverte", label: "à tous les talents, débutants compris" },
  ] as readonly { value: string; label: string }[],

  /** Section « Une scène ouverte à tous ». */
  objectifsTitle: "Une scène ouverte à tous",
  objectifsIntro:
    "Le Banane Comedy Club souhaite installer des soirées dans plusieurs quartiers de Lyon afin de :",
  objectifs: [
    "Rendre le stand-up accessible partout en ville",
    "Permettre aux humoristes débutants de se lancer",
    "Créer une vraie dynamique locale autour de l'humour",
    "Rapprocher le public des artistes",
  ] as readonly string[],

  /** Liens externes — à intégrer. */
  links: {
    website: "", // PLACEHOLDER — URL du site officiel du Banane Comedy Club
    instagram: "", // PLACEHOLDER — URL Instagram du Banane Comedy Club
  },
} as const;
