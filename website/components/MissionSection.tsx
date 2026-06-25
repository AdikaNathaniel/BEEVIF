"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SECTION_IMG = "/images/Background-2.jpeg";

export default function MissionSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "var(--muted)" }}>
      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Text — slides in from the left */}
        <div
          style={{
            transform:       visible ? "translateX(0)"   : "translateX(-90px)",
            opacity:         visible ? 1                 : 0,
            transition:      "transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.85s ease",
            transitionDelay: "0s",
          }}
        >
          <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
            Our Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6" style={{ color: "var(--navy)" }}>
            From promoting equality to serving humanity
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            BEEVIF is dedicated to empowering individuals and families by providing access to
            quality education, promoting health and well-being, and ensuring food security. Our
            holistic approach to community development has led to significant achievements across
            rural Ghana.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We believe that formal education is the most powerful tool for breaking the cycle of
            poverty. Through schools, scholarships, medical outreach, and relief programmes, we
            are transforming communities one family at a time.
          </p>
          <Link
            href="/about"
            style={{ color: "var(--coral)", borderColor: "var(--coral)" }}
            className="inline-block border-2 px-6 py-3 rounded font-bold font-sans text-sm hover:opacity-80 transition-opacity"
          >
            LEARN MORE ABOUT US
          </Link>
        </div>

        {/* Image — slides in from the right */}
        <div
          className="rounded-2xl overflow-hidden shadow-xl"
          style={{
            transform:       visible ? "translateX(0)"  : "translateX(90px)",
            opacity:         visible ? 1                : 0,
            transition:      "transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.85s ease",
            transitionDelay: "0.1s",
          }}
        >
          <div
            role="img"
            aria-label="BEEVIF community work"
            className="w-full h-80"
            style={{
              backgroundImage:    `url('${SECTION_IMG}')`,
              backgroundSize:     "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

      </div>
    </section>
  );
}
