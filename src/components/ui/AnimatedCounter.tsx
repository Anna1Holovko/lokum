"use client";

import { useCountUp } from "@/hooks/useScrollReveal";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const { ref, count } = useCountUp(value, { duration, decimals });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
