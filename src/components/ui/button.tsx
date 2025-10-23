import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "button-feedback inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cta:
          "bg-gradient-to-r from-highlight via-accent to-primary text-white shadow-button transition-transform duration-300 ease-out font-bold hover:shadow-elegant",
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant font-semibold transition-smooth",
        ctaYellow:
          "bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-button font-semibold transition-smooth hover:scale-105 focus-visible:ring-amber-200",
        ctaGreen:
          "bg-emerald-500 text-white hover:bg-emerald-400 shadow-button font-semibold transition-smooth hover:scale-105 focus-visible:ring-emerald-200",
        ctaBlue:
          "bg-sky-500 text-white hover:bg-sky-400 shadow-button font-semibold transition-smooth hover:scale-105 focus-visible:ring-sky-200",
        ctaPersonal:
          "bg-fuchsia-500 text-white hover:bg-fuchsia-400 shadow-button font-semibold transition-smooth hover:scale-105 focus-visible:ring-fuchsia-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
