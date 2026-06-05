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
          "flex h-12 w-full rounded-none border border-ink/20 bg-ivory px-4 py-2 text-sm text-ink transition-colors duration-300 placeholder:text-stone-400 hover:border-ink/40 focus-visible:border-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink disabled:cursor-not-allowed disabled:opacity-50",
          invalid && "border-error focus-visible:border-error focus-visible:ring-error",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
