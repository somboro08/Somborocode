import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,border-color,color,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-lime",
  {
    variants: {
      variant: {
        lime: "bg-lime text-lime-ink hover:bg-lime/90",
        paper: "bg-paper text-ink hover:bg-paper/90",
        outline:
          "border border-current/20 bg-transparent text-current hover:border-current/40 hover:bg-current/5",
        ghost: "bg-transparent text-current hover:bg-current/8",
        ink: "bg-ink text-paper hover:bg-ink-soft",
      },
      size: {
        md: "h-11 min-h-11 rounded-full px-5 text-[0.9375rem]",
        lg: "h-12 min-h-12 rounded-full px-6 text-base",
        sm: "h-10 min-h-10 rounded-full px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "lime",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
