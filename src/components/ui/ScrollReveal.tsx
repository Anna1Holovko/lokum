"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

const animationStyles: Record<
  AnimationType,
  { initial: string; visible: string }
> = {
  "fade-up": {
    initial: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  scale: {
    initial: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  fade: {
    initial: "opacity-0",
    visible: "opacity-100",
  },
};

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.1,
  as: Component = "div",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const styles = animationStyles[animation];

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all ${className} ${
        isVisible ? styles.visible : styles.initial
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      {children}
    </Component>
  );
}

// Staggered children wrapper
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 100,
  className = "",
}: StaggerContainerProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * staggerDelay}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
