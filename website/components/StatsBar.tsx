"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 600, suffix: "+", label: "People clothed" },
  { target: 5,   suffix: "",  label: "Washrooms built" },
  { target: 10,  suffix: "+", label: "Years of service" },
  { target: 1000, suffix: "s", label: "Lives impacted" },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

function StatItem({ target, suffix, label, active }: typeof stats[0] & { active: boolean }) {
  const count = useCountUp(target, active);
  return (
    <div>
      <div className="text-3xl font-bold font-sans tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-sm mt-1 opacity-90 font-sans">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "var(--coral)" }}
      className="py-8"
    >
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} active={active} />
        ))}
      </div>
    </section>
  );
}
