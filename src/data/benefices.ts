/**
 * La problématique traitée par le spectacle — ce qu'il permet au public.
 * `icon` = clé mappée vers une icône lucide dans `benefices-grid.tsx`.
 */

export type Benefice = {
  title: string;
  description: string;
  icon: string;
};

export const benefices: readonly Benefice[] = [
  {
    title: "Prendre du recul",
    description:
      "Mettre ses difficultés quotidiennes à distance le temps d'un éclat de rire — et les revoir, ensuite, sous un autre angle.",
    icon: "telescope",
  },
  {
    title: "Comprendre ses mécanismes",
    description:
      "Reconnaître les voix qui s'agitent en nous : le critique, l'anxieux, le perfectionniste… et saisir ce qu'elles cherchent vraiment à faire.",
    icon: "brain",
  },
  {
    title: "Dédramatiser ses blocages",
    description:
      "Rire de ses contradictions, c'est déjà les desserrer. L'humour transforme le poids en légèreté.",
    icon: "feather",
  },
  {
    title: "Retrouver de la légèreté",
    description:
      "Repartir avec le sourire et un regard plus doux sur soi — parce qu'on se prend tous, parfois, un peu trop au sérieux.",
    icon: "smile",
  },
  {
    title: "Découvrir la thérapie des parties",
    description:
      "Une approche puissante de la connaissance de soi, rendue accessible et ludique. Aucun prérequis : on apprend en riant.",
    icon: "puzzle",
  },
];
