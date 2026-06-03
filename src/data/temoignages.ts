/**
 * Témoignages de spectateurs / partenaires.
 *
 * ⚠️ PLACEHOLDERS — à remplacer par de vrais avis (avec accord des personnes).
 * Garder des retours courts, sincères et variés (public, programmateur, presse).
 */

export type Temoignage = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const temoignages: readonly Temoignage[] = [
  {
    id: "t1",
    quote:
      "On vient pour rigoler, on repart en s'étant un peu compris soi-même. C'est malin, tendre et drôle de bout en bout.",
    author: "Camille R.",
    role: "Spectatrice, Lyon",
  },
  {
    id: "t2",
    quote:
      "J'ai reconnu mon « critique intérieur » dès la deuxième minute. J'ai ri… et un peu rougi. Bluffant de justesse.",
    author: "Thomas D.",
    role: "Spectateur, Paris",
  },
  {
    id: "t3",
    quote:
      "Une salle conquise et un artiste d'une rare générosité. Le genre de seul-en-scène qu'on reprogramme sans hésiter.",
    author: "Programmateur",
    role: "Café-théâtre (placeholder)",
  },
  {
    id: "t4",
    quote:
      "Du développement personnel sans la mièvrerie : on n'avait jamais autant ri en parlant de nos angoisses.",
    author: "Léa M.",
    role: "Spectatrice, Villeurbanne",
  },
  {
    id: "t5",
    quote:
      "Intervention en entreprise mémorable. Mes équipes en parlent encore — et l'atelier d'impro a fait tomber les masques.",
    author: "Responsable RH",
    role: "Séminaire d'entreprise (placeholder)",
  },
];
