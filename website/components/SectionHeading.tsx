"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface Props {
  label?: string;
  heading: string;
  headingSize?: string;
  className?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  label,
  heading,
  headingSize = "text-3xl md:text-4xl",
  className = "",
  children,
}: Props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`text-center overflow-hidden ${className}`}>
      {label && (
        <p
          className="uppercase text-xs tracking-widest mb-3 font-sans block"
          style={{
            color:           "var(--coral)",
            transform:       visible ? "translateX(0)"   : "translateX(-120px)",
            opacity:         visible ? 1                 : 0,
            transition:      "transform 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease",
            transitionDelay: "0s",
          }}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-bold font-sans ${headingSize}`}
        style={{
          color:           "var(--navy)",
          transform:       visible ? "translateX(0)"  : "translateX(120px)",
          opacity:         visible ? 1                : 0,
          transition:      "transform 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease",
          transitionDelay: label ? "0.08s" : "0s",
        }}
      >
        {heading}
      </h2>
      {children && (
        <div
          style={{
            opacity:         visible ? 1  : 0,
            transition:      "opacity 0.8s ease",
            transitionDelay: "0.18s",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
