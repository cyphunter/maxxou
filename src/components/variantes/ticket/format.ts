/**
 * Helpers de formatage — variante « Ticket de spectacle ».
 * Format de date façon talon de billet (jour / mois / numéro de série).
 */

const MOIS_COURT = [
  "JANV",
  "FÉVR",
  "MARS",
  "AVR",
  "MAI",
  "JUIN",
  "JUIL",
  "AOÛT",
  "SEPT",
  "OCT",
  "NOV",
  "DÉC",
] as const;

const JOUR_COURT = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"] as const;

export type TicketDate = {
  /** Numéro du jour, ex: "26" */
  jour: string;
  /** Mois abrégé en majuscules, ex: "SEPT" */
  mois: string;
  /** Année sur 4 chiffres, ex: "2026" */
  annee: string;
  /** Jour de semaine abrégé, ex: "SAM" */
  semaine: string;
};

/** Parse une date ISO "YYYY-MM-DD" en segments billet (sans dépendance Intl lourde). */
export function parseTicketDate(iso: string): TicketDate {
  const [y, m, d] = iso.split("-").map((n) => Number.parseInt(n, 10));
  const safeY = Number.isFinite(y) ? y : 2026;
  const safeM = Number.isFinite(m) ? m : 1;
  const safeD = Number.isFinite(d) ? d : 1;
  const date = new Date(Date.UTC(safeY, safeM - 1, safeD));

  return {
    jour: String(safeD).padStart(2, "0"),
    mois: MOIS_COURT[safeM - 1] ?? "—",
    annee: String(safeY),
    semaine: JOUR_COURT[date.getUTCDay()] ?? "—",
  };
}

/** Numéro de série stylé billet : "N° 01" à partir d'un index 0. */
export function serial(index: number): string {
  return `N° ${String(index + 1).padStart(2, "0")}`;
}
