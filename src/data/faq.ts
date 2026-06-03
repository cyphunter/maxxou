/**
 * Questions fréquentes. Affichées dans l'accordéon FAQ + balisées en JSON-LD
 * FAQPage pour le SEO. Garder des réponses claires et honnêtes.
 */

export type FaqEntry = {
  question: string;
  answer: string;
};

export const faq: readonly FaqEntry[] = [
  {
    question: "C'est quoi, la « thérapie des parties » ?",
    answer:
      "C'est une approche de la connaissance de soi selon laquelle nous sommes habités par plusieurs « parts » — le critique, l'anxieux, l'enfant, le protecteur… Plutôt que de les combattre, on apprend à les écouter. Maxxou s'en empare avec humour : aucun prérequis pour comprendre, tout passe par le rire.",
  },
  {
    question: "C'est un spectacle ou une séance de thérapie ?",
    answer:
      "Un spectacle d'humour, avant tout. On vient pour rire. La thérapie des parties est la matière première, pas un soin : Maxxou est humoriste et improvisateur, pas thérapeute. Beaucoup repartent simplement plus légers — et avec un autre regard sur eux-mêmes.",
  },
  {
    question: "Faut-il s'y connaître en développement personnel ?",
    answer:
      "Pas du tout. Le spectacle est pensé pour tout le monde. Que vous soyez fan de psycho ou totalement néophyte, vous reconnaîtrez forcément l'un des personnages — il vit probablement dans votre tête.",
  },
  {
    question: "Combien de temps dure le spectacle ?",
    answer:
      "Environ 1h15, avec une part d'improvisation à chaque représentation : aucune date n'est tout à fait identique à la précédente.",
  },
  {
    question: "À partir de quel âge ?",
    answer:
      "Tout public, à partir de 14 ans environ. C'est bienveillant et sans vulgarité gratuite — pensé pour qu'on puisse y venir en famille ou entre amis.",
  },
  {
    question: "Comment réserver ?",
    answer:
      "Rendez-vous sur la page Dates : chaque représentation renvoie vers sa billetterie. Pour une date complète, une salle privatisée ou une demande de groupe, écrivez via le formulaire de contact.",
  },
  {
    question: "Intervenez-vous en entreprise, en école ou en festival ?",
    answer:
      "Oui : conférences gesticulées, ateliers d'improvisation et formats sur-mesure. Détaillez votre projet via le formulaire de contact, on construit la formule adaptée.",
  },
  {
    question: "Jouez-vous ailleurs qu'à Lyon et Paris ?",
    answer:
      "Lyon et Paris sont les villes d'attache, mais le spectacle se déplace partout en France et au-delà. Une salle, un festival, une envie ? Contactez-nous pour une date dans votre ville.",
  },
];
