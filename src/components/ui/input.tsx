import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          "flex h-12 w-full rounded-md bg-ivory px-4 py-2 text-sm text-ink shadow-sm ring-1 ring-noir-900/15 transition-all duration-300 placeholder:text-stone-400 hover:ring-noir-900/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:shadow-[0_0_0_5px_rgb(200_164_95_/_0.12)] disabled:cursor-not-allowed disabled:opacity-50",
          invalid &&
            "ring-error focus-visible:ring-error focus-visible:shadow-[0_0_0_5px_rgb(178_59_59_/_0.12)]",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
