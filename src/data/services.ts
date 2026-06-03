/**
 * Ce que propose Maxxou : le spectacle, les interventions, les partenariats.
 * `icon` = clé mappée vers une icône lucide dans `service-card.tsx`.
 */

export type Service = {
  slug: string;
  title: string;
  /** Résumé court (carte). */
  summary: string;
  /** Description développée (page Le spectacle). */
  description: string;
  icon: string;
  /** Points clés / formats proposés. */
  points: readonly string[];
  /** Intitulé du bouton d'action. */
  cta: string;
};

export const services: readonly Service[] = [
  {
    slug: "spectacle",
    title: "Le seul-en-scène",
    summary:
      "Le spectacle original de Maxxou : une heure et quart où vos personnages intérieurs montent enfin sur scène.",
    description:
      "Un seul-en-scène mêlant humour, improvisation et thérapie des parties. Maxxou incarne tour à tour le Critique, l'Anxieux, le Perfectionniste… et nous fait rire de nos mécanismes les plus intimes. Idéal pour les salles, théâtres, cafés-théâtres et festivals.",
    icon: "drama",
    points: [
      "Format ~75 min, tout public (dès 14 ans)",
      "Adaptable du café-théâtre à la grande salle",
      "Une part d'improvisation à chaque représentation",
      "Fiche technique légère, autonomie possible",
    ],
    cta: "Programmer le spectacle",
  },
  {
    slug: "interventions",
    title: "Interventions & ateliers",
    summary:
      "Entreprises, écoles, associations : l'humour comme porte d'entrée vers le développement personnel.",
    description:
      "Conférences gesticulées, ateliers d'improvisation et formats sur-mesure autour de la connaissance de soi, de la gestion du stress et de la cohésion d'équipe. La thérapie des parties rendue accessible, vivante et drôle.",
    icon: "users",
    points: [
      "Conférence gesticulée (45–90 min)",
      "Ateliers d'impro & de connaissance de soi",
      "Séminaires d'entreprise, cohésion d'équipe",
      "Interventions en milieu scolaire et associatif",
    ],
    cta: "Demander une intervention",
  },
  {
    slug: "partenariats",
    title: "Partenariats & médias",
    summary:
      "Programmateurs, salles, festivals, presse et marques : construisons quelque chose ensemble.",
    description:
      "Vous programmez une saison, montez un festival, préparez un sujet ou cherchez une collaboration alignée avec un univers bienveillant et drôle ? Parlons-en. Dossier de présentation, captations et visuels disponibles sur demande.",
    icon: "handshake",
    points: [
      "Programmation de saison & festivals",
      "Dossier de présentation & captation sur demande",
      "Interviews, podcasts, presse",
      "Collaborations de marque alignées",
    ],
    cta: "Proposer un partenariat",
  },
] as const;
