/**
 * Variante « Éditorial sobre » — mapping des clés d'icônes (stockées dans les
 * fichiers `src/data/*.ts`) vers des composants lucide. Les fichiers data
 * n'importent pas de composants : on résout ici, côté présentation.
 *
 * Co-localisé à la variante : ne touche à aucun composant partagé existant.
 */

import {
  Gavel,
  CloudRain,
  Ruler,
  Sparkles,
  Shield,
  Hourglass,
  Cloud,
  Compass,
  Drama,
  Users,
  Handshake,
  Telescope,
  Brain,
  Feather,
  Smile,
  Puzzle,
  type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  gavel: Gavel,
  "cloud-rain": CloudRain,
  ruler: Ruler,
  sparkles: Sparkles,
  shield: Shield,
  hourglass: Hourglass,
  cloud: Cloud,
  compass: Compass,
  drama: Drama,
  users: Users,
  handshake: Handshake,
  telescope: Telescope,
  brain: Brain,
  feather: Feather,
  smile: Smile,
  puzzle: Puzzle,
};

export function resolveIcon(key: string): LucideIcon {
  return ICONS[key] ?? Drama;
}
