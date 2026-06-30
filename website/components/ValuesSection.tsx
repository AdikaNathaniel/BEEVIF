"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { img: "/images/compassion.jpg",  title: "Compassion",  desc: "We serve with empathy and deep care for every individual." },
  { img: "/images/empowerment.jpg", title: "Empowerment", desc: "We equip communities with tools to create their own futures." },
  { img: "/images/faith.jpg",       title: "Faith",       desc: "Our work is grounded in Christ-like values of love and service." },
  { img: "/images/integrity.jpg",   title: "Integrity",   desc: "We operate with transparency and accountability to our communities." },
];

export default function ValuesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "var(--muted)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="What Guides Us" heading="Our Core Values" headingSize="text-3xl" className="mb-12" />
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
              style={{
                transform:       visible ? "translateY(0)"    : "translateY(-70px)",
                opacity:         visible ? 1                  : 0,
                transition:      "transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease",
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <div
                className="h-40 overflow-hidden rounded-t-2xl"
                style={{ width: "calc(100% + 4rem)", marginLeft: "-2rem", marginTop: "-2rem", marginBottom: "1.25rem" }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('${v.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <h3 className="font-bold font-sans mb-2" style={{ color: "var(--navy)" }}>
                {v.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
