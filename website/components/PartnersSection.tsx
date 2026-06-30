"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const partners = [
  { name: "Bertha Ghartey",        phone: "+233208174554",       email: "btghartey@gmail.com" },
  { name: "Samuel Etsiakoh",       phone: "+233503377231",       email: "samueletsiakoh@beevif.org" },
  { name: "Hannah Etsiakoh",       phone: "+233244822288",       email: "etsiakoh1658@yahoo.com" },
  { name: "Lola Kusi Amoah",       phone: "+233243677913",       email: null },
  { name: "Emmanuel Nii Okai",     phone: "+233243930113",       email: null },
  { name: "Angela Etsiakoh",       phone: "USA – 0019177021528",     email: null },
  { name: "Rev. Emmanuel Inkoom",  phone: "Canada – 0016132950503",  email: null },
];

export default function PartnersSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Partners"
          heading="Clarion Call for Caring Vision Partners and Sponsors"
          headingSize="text-3xl md:text-4xl"
          className="mb-14"
        />
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className="rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
              style={{
                transform:       visible ? "translateY(0)"    : "translateY(-70px)",
                opacity:         visible ? 1                  : 0,
                transition:      "transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-white font-sans text-sm"
                style={{ backgroundColor: "var(--navy)" }}
              >
                {p.name.charAt(0)}
              </div>
              <h3 className="font-bold font-sans text-base mb-3" style={{ color: "var(--navy)" }}>
                {p.name}
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>{p.phone}</p>
                {p.email && (
                  <a
                    href={`mailto:${p.email}`}
                    className="block hover:underline"
                    style={{ color: "var(--coral)" }}
                  >
                    {p.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
