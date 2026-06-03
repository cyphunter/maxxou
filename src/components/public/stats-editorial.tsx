import { AnimatedCounter } from "@/components/motion/animated-counter";
import { stats } from "@/data/stats";
import { cn } from "@/lib/utils";

export function StatsEditorial({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="relative">
          <AnimatedCounter
            className={cn("editorial-num block", !dark && "editorial-num--ink")}
            to={s.value}
            prefix={s.prefix}
            suffix={s.suffix}
            decimals={s.decimals}
          />
          <p
            className={cn(
              "mt-3 font-display text-base leading-snug",
              dark ? "text-ivory" : "text-ink",
            )}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
