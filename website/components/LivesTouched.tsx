"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote:
      "Before BEEVIF, I struggled to afford school fees and supplies. Now, I have access to quality education, and my dream of becoming a doctor feels possible.",
    name: "Ama Oforiwaa",
    role: "Sponsored Student",
    photo: "/images/Ama-Oforiwaa-(Sponsored-Student).jpg",
  },
  {
    quote:
      "We used to walk miles to school without proper books or meals. Thanks to BEEVIF, we now have school supplies, daily meals, and the support we need.",
    name: "Emmanuel Taiwiah & Daniel Safoh",
    role: "Sponsored Students",
    photo: null,
  },
  {
    quote:
      "BEEVIF's medical outreach programs have saved many lives in our village. Their dedication to providing healthcare and education is truly transforming our community.",
    name: "Mr. Kwame Opong-Kwateng",
    role: "Community Leader",
    photo: "/images/Mr.Kwame-Oppong-Community-Leader.jpg",
  },
  {
    quote:
      "Sponsoring a child through BEEVIF has been one of the most fulfilling experiences of my life.",
    name: "Lisa Milly",
    role: "Donor & Sponsor",
    photo: null,
  },
];

export default function LivesTouched() {
  const [visible, setVisible] = useState<boolean[]>(Array(testimonials.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="Stories of Change" heading="Lives We Have Touched" headingSize="text-3xl" className="mb-14" />

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => {
            const isIn = visible[i];
            // left column (even) slides from left, right column (odd) from right
            const fromLeft = i % 2 === 0;

            return (
              <div
                key={t.name}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col"
                style={{
                  transform:       isIn ? "translateX(0)"              : `translateX(${fromLeft ? "-90px" : "90px"})`,
                  opacity:         isIn ? 1                            : 0,
                  transition:      "transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.85s ease",
                  transitionDelay: `${(i % 2) * 0.1}s`,
                }}
              >
                <div className="text-3xl mb-4" style={{ color: "var(--coral)" }}>&ldquo;</div>
                <p className="text-gray-600 italic leading-relaxed flex-1 mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div
                      style={{ backgroundColor: "var(--navy)" }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-sans text-sm shrink-0"
                    >
                      {t.name[0]}
                    </div>
                  )}
                  <div>
                    <div className="font-bold font-sans text-sm" style={{ color: "var(--navy)" }}>{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
