import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // CTA principal — champagne
        accent: "bg-gold-500 text-noir-900 hover:bg-gold-400 shadow-soft",
        // sombre → or au survol
        primary: "bg-noir-900 text-ivory hover:bg-gold-500 hover:text-noir-900 shadow-soft",
        // contour discret sur fond clair
        outline: "bg-transparent text-noir-900 ring-1 ring-noir-900/20 hover:bg-noir-900/[0.04]",
        // contour clair sur fond sombre
        outlineLight:
          "bg-transparent text-ivory ring-1 ring-ivory/35 hover:bg-ivory/10 focus-visible:ring-offset-navy-900",
        ghost: "text-noir-900 hover:bg-noir-900/[0.05]",
        link: "text-gold-700 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-[0.95rem]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "accent", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
