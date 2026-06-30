"use client";

import { useEffect, useRef, useState } from "react";

export default function VolunteerSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "var(--muted)" }}>
      <div ref={ref} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text — slides from left */}
        <div
          style={{
            transform:       visible ? "translateX(0)"  : "translateX(-90px)",
            opacity:         visible ? 1                : 0,
            transition:      "transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.85s ease",
            transitionDelay: "0s",
          }}
        >
          <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
            Volunteer
          </p>
          <h2 className="text-3xl font-bold font-sans mb-5" style={{ color: "var(--navy)" }}>
            Become a Volunteer
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Your involvement can lead to lasting improvements in the well-being of communities. We
            welcome educators, healthcare workers, builders, organisers, and anyone with a heart to
            serve.
          </p>
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "var(--navy)" }}
            className="inline-block px-8 py-4 rounded font-bold font-sans text-white text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            SIGN UP NOW
          </a>
        </div>

        {/* Image — slides from right */}
        <div
          className="rounded-2xl overflow-hidden shadow-lg"
          style={{
            transform:       visible ? "translateX(0)"  : "translateX(90px)",
            opacity:         visible ? 1                : 0,
            transition:      "transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.85s ease",
            transitionDelay: "0.1s",
          }}
        >
          <div
            role="img"
            aria-label="Volunteers at work"
            className="w-full h-80"
            style={{
              backgroundImage:    "url('/images/Volunteer.jpg')",
              backgroundSize:     "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

      </div>
    </section>
  );
}
