"use client";

import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "success" | "warning" | "error" | "neutral";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  size = "sm",
  className,
}: BadgeProps) {
  const variants = {
    primary: "bg-[var(--color-primary)]/12 text-[var(--color-primary)]",
    accent: "bg-[var(--color-accent)]/12 text-[#CC7700]",
    success: "bg-[var(--color-success)]/12 text-[#248A3D]",
    warning: "bg-[var(--color-warning)]/12 text-[#9A6700]",
    error: "bg-[var(--color-error)]/12 text-[#D70015]",
    neutral: "bg-black/5 text-black/50",
  };

  const sizes = {
    sm: "px-2.5 py-1 text-[11px]",
    md: "px-3 py-1.5 text-[13px]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-semibold rounded-full tracking-wide uppercase",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
