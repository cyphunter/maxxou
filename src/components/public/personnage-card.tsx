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
  type LucideIcon,
} from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import { TiltCard } from "@/components/motion/tilt-card";
import { cn } from "@/lib/utils";
import type { Personnage, PersonnageAccent } from "@/data/personnages";

const ICONS: Record<string, LucideIcon> = {
  gavel: Gavel,
  "cloud-rain": CloudRain,
  ruler: Ruler,
  sparkles: Sparkles,
  shield: Shield,
  hourglass: Hourglass,
  cloud: Cloud,
  compass: Compass,
};

const ACCENT: Record<
  PersonnageAccent,
  { badge: string; tagline: string; bar: string; overlay: string }
> = {
  gold: {
    badge: "bg-gold-500 text-noir-900",
    tagline: "text-gold-700",
    bar: "border-gold-500",
    overlay: "from-navy-950/85 via-navy-950/15",
  },
  navy: {
    badge: "bg-navy-700 text-ivory",
    tagline: "text-navy-700",
    bar: "border-navy-600",
    overlay: "from-navy-950/85 via-navy-950/15",
  },
  wine: {
    badge: "bg-wine-700 text-ivory",
    tagline: "text-wine-700",
    bar: "border-wine-600",
    overlay: "from-wine-950/85 via-wine-950/15",
  },
};

export function PersonnageCard({
  personnage,
  priority = false,
}: {
  personnage: Personnage;
  priority?: boolean;
}) {
  const Icon = ICONS[personnage.icon] ?? Drama;
  const a = ACCENT[personnage.accent];

  return (
    <div className="tilt-stage h-full">
      <TiltCard glow={false} max={7} className="h-full">
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-ivory shadow-soft ring-1 ring-noir-900/10 transition-shadow duration-500 hover:shadow-elevated">
          {/* Visuel */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <SmartImage
              src={personnage.image}
              alt={`${personnage.name} — ${personnage.part}`}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div className={cn("absolute inset-0 bg-gradient-to-t to-transparent", a.overlay)} />
            {/* Sheen lumineux au survol */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ivory/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <span
              className={cn(
                "absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full shadow-soft transition-transform duration-500 group-hover:scale-110",
                a.badge,
              )}
            >
              <Icon size={20} aria-hidden />
            </span>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-2xl leading-tight text-ivory">{personnage.name}</h3>
              <p className="mt-1 text-sm text-cream-100/85">{personnage.part}</p>
            </div>
          </div>

          {/* Contenu */}
          <div className="flex flex-1 flex-col p-6">
            <p className={cn("italic-display text-lg leading-snug", a.tagline)}>
              {personnage.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">{personnage.description}</p>
            <p
              className={cn(
                "mt-5 border-l-2 pl-4 text-sm italic leading-relaxed text-ink/75",
                a.bar,
              )}
            >
              {personnage.replique}
            </p>
          </div>
        </article>
      </TiltCard>
    </div>
  );
}
