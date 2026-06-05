import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  invalid?: boolean;
};

/**
 * Select natif stylé — angles francs, filet 1px. UI native confortable en mobile.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, invalid, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          aria-invalid={invalid || undefined}
          className={cn(
            "flex h-12 w-full appearance-none rounded-none border border-ink/20 bg-ivory py-2 pl-4 pr-10 text-sm text-ink transition-colors duration-300 hover:border-ink/40 focus-visible:border-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink disabled:cursor-not-allowed disabled:opacity-50",
            invalid && "border-error focus-visible:border-error focus-visible:ring-error",
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
