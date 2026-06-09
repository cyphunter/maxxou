/**
 * Calendrier des représentations.
 *
 * `date` au format ISO (YYYY-MM-DD), utilisé pour le tri chronologique et le
 * balisage JSON-LD. Pour une date encore imprécise (« Été 2026 », « à venir »),
 * renseigner `dateLabel` : il remplace l'affichage jour/mois et la `date` ISO
 * ne sert alors qu'au classement (mettre une date approchée du créneau).
 *
 * `status` :
 *   - "open"    : réservation ouverte (bouton Réserver → billetterie ou contact)
 *   - "soon"    : date en préparation, billetterie bientôt ouverte
 *   - "soldout" : complet
 *   - "past"    : représentation passée (archives)
 *
 * `ticketUrl` : lien billetterie (HelloAsso, BilletWeb, salle…). Vide → le
 * bouton renvoie vers la page Contact.
 */

export type DateStatus = "open" | "soon" | "soldout" | "past";

export type Representation = {
  id: string;
  /** Date ISO : "2026-10-04". Sert au tri et au JSON-LD. */
  date: string;
  /** Libellé libre quand la date est imprécise (ex: "Été 2026", "Date à venir"). */
  dateLabel?: string;
  /** Horaire affiché, ex: "20h30". */
  time?: string;
  city: string;
  venue: string;
  address?: string;
  status: DateStatus;
  ticketUrl?: string;
  note?: string;
};

export const representations: readonly Representation[] = [
  // ─── Dates confirmées ──────────────────────────────────────────────
  {
    id: "d1",
    date: "2026-06-28",
    time: "17h00",
    city: "Lyon",
    venue: "Le Bichon",
    address: "9 rue Neuve, 69001 Lyon",
    status: "open",
    ticketUrl: "",
  },
  {
    id: "d2",
    date: "2026-07-05",
    time: "17h00",
    city: "Lyon",
    venue: "Le Bichon",
    address: "9 rue Neuve, 69001 Lyon",
    status: "open",
    ticketUrl: "",
  },
  {
    id: "d3",
    date: "2026-08-30",
    time: "17h00",
    city: "Lyon",
    venue: "Le Bichon",
    address: "9 rue Neuve, 69001 Lyon",
    status: "open",
    ticketUrl: "",
  },
  {
    id: "d4",
    date: "2026-10-01",
    time: "19h30",
    city: "Lyon",
    venue: "Wojo Hôtel-Dieu",
    address: "4 place Amédée Bonnet, 69002 Lyon",
    status: "open",
    ticketUrl: "",
  },

  // ─── Dates en préparation (créneaux à confirmer) ───────────────────
  {
    id: "d5",
    date: "2026-07-01",
    dateLabel: "Été 2026",
    city: "Annecy",
    venue: "Date à venir",
    status: "soon",
    ticketUrl: "",
  },
  {
    id: "d6",
    date: "2026-07-02",
    dateLabel: "Été 2026",
    city: "Annecy",
    venue: "Date à venir",
    status: "soon",
    ticketUrl: "",
  },
  {
    id: "d7",
    date: "2026-09-15",
    dateLabel: "Septembre 2026",
    city: "Tassin-la-Demi-Lune",
    venue: "Antonio & Marco",
    address: "76 avenue Charles de Gaulle, 69160 Tassin-la-Demi-Lune",
    status: "soon",
    ticketUrl: "",
  },
  {
    id: "d8",
    date: "2026-12-31",
    dateLabel: "Date à venir",
    city: "Lyon",
    venue: "Le FeuDoux",
    address: "180 rue de Créqui, 69003 Lyon",
    status: "soon",
    ticketUrl: "",
  },
];
