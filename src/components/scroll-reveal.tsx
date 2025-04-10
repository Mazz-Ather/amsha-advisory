"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "bottom" | "left" | "right";
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className,
  direction = "bottom",
  delay = 0,
  once = true,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("appear");
            }, delay);

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("appear");
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Starts animation slightly before element enters viewport
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, once, threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case "left":
        return "fade-in-left";
      case "right":
        return "fade-in-right";
      case "bottom":
      default:
        return "fade-in-bottom";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getDirectionClass(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
