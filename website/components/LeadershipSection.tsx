"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const leadership = [
  {
    name: "Thomas Etsiakoh",
    role: "Chief Executive Officer",
    img: "/images/Thomas Etsiakoh.jpg",
    bio: "Thomas founded BEEVIF with a passionate vision to fight poverty, poor health, and ignorance in rural Ghanaian communities. Under his leadership, the foundation has grown into a beacon of hope for thousands of families.",
  },
  {
    name: "Hannah Etsiakoh",
    role: "Vice President",
    img: "/images/Hannah Etsiakoh.jpg",
    bio: "Hannah drives the foundation's strategic direction and programme oversight, ensuring every initiative delivers lasting impact to the communities BEEVIF serves.",
  },
  {
    name: "Samuel Gracious Etsiakoh",
    role: "International Liaison Officer",
    img: "/images/Samuel-Gracious-Etsiakoh.jpg",
    bio: "Samuel bridges BEEVIF's local work with international partners and sponsors, expanding the foundation's reach and securing the resources needed to scale its impact.",
  },
  {
    name: "Bertha Ghartey",
    role: "Administrator",
    img: "/images/Bertha-Ghartey.jpg",
    bio: "Bertha keeps the organisation running smoothly, managing operations, communications, and administrative functions that underpin every programme BEEVIF delivers.",
  },
  {
    name: "Apostle Fred Hamilton",
    role: "USA Representative",
    img: "/images/Apostle-Fred-Hamilton.jpg",
    bio: "Apostle Fred Hamilton brings spiritual leadership and strategic guidance to BEEVIF, supporting the foundation's Christian values-driven approach to community transformation.",
  },
];

export default function LeadershipSection() {
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setCardsVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <SectionHeading label="The Team" heading="Our Leadership Team" className="mb-14" />

        {/* Cards — drop from above, staggered */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {leadership.map((person, i) => (
            <div
              key={person.name}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              style={{
                transform:       cardsVisible ? "translateY(0)"   : "translateY(-70px)",
                opacity:         cardsVisible ? 1                 : 0,
                transition:      "transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease",
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <div className="relative h-72 bg-gray-100">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold font-sans text-lg" style={{ color: "var(--navy)" }}>
                  {person.name}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: "var(--coral)" }}>
                  {person.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
