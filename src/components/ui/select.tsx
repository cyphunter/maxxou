import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
};

/**
 * Select natif stylé — pas de dépendance Radix, UI native confortable en mobile.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, invalid, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          aria-invalid={invalid || undefined}
          className={cn(
            "flex h-12 w-full appearance-none rounded-md bg-ivory py-2 pl-4 pr-10 text-sm text-ink shadow-sm ring-1 ring-noir-900/15 transition-all duration-300 hover:ring-noir-900/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:shadow-[0_0_0_5px_rgb(200_164_95_/_0.12)] disabled:cursor-not-allowed disabled:opacity-50",
            invalid &&
              "ring-error focus-visible:ring-error focus-visible:shadow-[0_0_0_5px_rgb(178_59_59_/_0.12)]",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          size={18}
          aria-hidden
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-500"
        />
      </div>
    );
  },
);
Select.displayName = "Select";
