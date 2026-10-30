"use client";

import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2.5 font-medium tracking-wide transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed select-none";

    const variants = {
      // Primary - Terracotta accent
      primary:
        "bg-[#C4663E] text-white hover:bg-[#A8522F] shadow-[0_4px_12px_rgba(196,102,62,0.25)] hover:shadow-[0_6px_20px_rgba(196,102,62,0.35)] hover:translate-y-[-1px] active:translate-y-0 focus-visible:ring-[#C4663E]",

      // Dark navy - Secondary CTA
      secondary:
        "bg-[#0D1B2A] text-white hover:bg-[#1B2838] focus-visible:ring-[#0D1B2A]",

      // Dark variant (alias)
      dark:
        "bg-[#0D1B2A] text-white hover:bg-[#1B2838] focus-visible:ring-[#0D1B2A]",

      // Ghost - Minimal
      ghost:
        "bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] focus-visible:ring-[var(--color-accent)]",

      // Outline - Subtle border
      outline:
        "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-strong)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:ring-[var(--color-accent)]",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-[13px] rounded-[2px]",
      md: "px-6 py-3 text-[14px] rounded-[2px]",
      lg: "px-8 py-4 text-[15px] rounded-[3px]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {isLoading && <span className="sr-only">Ładowanie...</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
