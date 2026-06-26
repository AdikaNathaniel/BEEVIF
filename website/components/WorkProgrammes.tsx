"use client";

import { useEffect, useRef, useState } from "react";

const programmes = [
  {
    tag: "Education",
    title: "Basic School at Kasoa",
    body: "Our basic school initiative at Kasoa, which was originally established as a non-fee school to provide free quality education to children in the community. As enrollment grew and the need for sustainable operations became more pressing, we introduced a modest fee structure to help support staff salaries and maintain the quality of education.\n\nThis step ensures that we can continue to serve more children effectively while staying true to our mission of making education accessible to all. We remain committed to supporting families in need and will continue to explore ways to provide scholarships and assistance where possible.",
    img: "/images/Basic-School-Kasoa.jpeg",
  },
  {
    tag: "Education",
    title: "Project Management for Digital Creators",
    body: "This innovative programme equips learners with essential project planning, scheduling, and execution skills — using web design projects as a hands-on learning tool. Students who have completed the programme have applied their skills in internships and professional roles across Ghana.",
    img: "/images/Project-Management.jpeg",
  },
  {
    tag: "Health",
    title: "Medical Outreach Programmes",
    body: "BEEVIF organises regular medical outreach events across rural Ghanaian communities, bringing free health screenings, medications, and medical advice directly to people who would otherwise have no access to healthcare. These events have saved and improved countless lives.",
    img: "/images/Background-2.jpeg",
  },
  {
    tag: "Relief",
    title: "Secondhand Clothing & Relief Drive — Asamankese",
    body: "BEEVIF's clothing distribution drive in Asamankese (Eastern Region) reached over 600 individuals of all ages and sizes. The event fostered a spirit of unity and mutual support, while providing practical help to families facing hardship.",
    img: "/images/Distribution-Asamankese.jpeg",
  },
  {
    tag: "Leadership",
    title: "Christian Leadership Training",
    body: "At Baiden Etsiakoh Eagle Vision Foundation (BEEVIF), we are dedicated to nurturing leaders who embody Christ-like values and are equipped to drive positive change within their communities. Our Christian Leadership Training program is designed to develop individuals who lead with integrity, compassion, and a deep commitment to service.\n\nGraduates of our Christian Leadership Training have gone on to lead church ministries, spearhead community development projects, and mentor others in their spiritual and personal growth journeys.\n\nIf you feel called to develop your leadership abilities within a Christian framework and make a meaningful difference, we invite you to be part of our training program. Together, we can work towards transforming lives and communities through Christ-centered leadership.\n\nFor more information on enrollment and program details, please contact us.",
    img: "/images/Central-Leadership-Programme.jpg",
    video: "https://www.youtube.com/embed/mkEjU4YeEd8",
  },
  {
    tag: "Education",
    title: "Infrastructure — School Washrooms at Kasoa",
    body: "BEEVIF constructed 5 washroom facilities at the Kasoa school, providing children with safe and dignified sanitation. Access to proper sanitation is essential for school attendance, especially for girls, and this project has directly improved school retention rates.",
    img: "/images/After.jpeg",
  },
];

const tagColours: Record<string, string> = {
  Education:      "#1B3A6B",
  Health:         "#2e7d32",
  "Food Security": "#e65100",
  Leadership:     "#6a1b9a",
  Relief:         "#b45309",
};

export default function WorkProgrammes() {
  const [visible, setVisible] = useState<boolean[]>(
    Array(programmes.length).fill(false)
  );
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = rowRefs.current.map((el, i) => {
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
        { threshold: 0.18 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-20">
      {programmes.map((p, i) => {
        const isIn = visible[i];
        const flip = i % 2 === 1;

        return (
          <div
            key={p.title}
            ref={(el) => { rowRefs.current[i] = el; }}
            className="grid md:grid-cols-2 gap-10 items-stretch"
          >
            {/* Text — always slides in from the left */}
            <div
              className={flip ? "md:order-2" : ""}
              style={{
                transform:      isIn ? "translateX(0)"    : "translateX(-90px)",
                opacity:        isIn ? 1                  : 0,
                transition:     "transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.85s ease",
                transitionDelay: "0s",
              }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold font-sans mb-4"
                style={{ backgroundColor: tagColours[p.tag] || "var(--navy)" }}
              >
                {p.tag}
              </span>
              <h3 className="text-2xl font-bold font-sans mb-4" style={{ color: "var(--navy)" }}>
                {p.title}
              </h3>
              <div className="space-y-3">
                {p.body.split("\n\n").map((para, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>

            {/* Image — always slides in from the right */}
            <div
              className={`rounded-2xl overflow-hidden shadow-lg ${flip ? "md:order-1" : ""}`}
              style={{
                transform:      isIn ? "translateX(0)"   : "translateX(90px)",
                opacity:        isIn ? 1                 : 0,
                transition:     "transform 0.85s cubic-bezier(0.22,1,0.36,1), opacity 0.85s ease",
                transitionDelay: "0.1s",
              }}
            >
              <div
                role="img"
                aria-label={p.title}
                className="w-full h-full min-h-72"
                style={{
                  backgroundImage:    `url('${p.img}')`,
                  backgroundSize:     "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        );
      })}

      {/* YouTube video — below all programme cards */}
      {programmes.filter(p => "video" in p).map(p => (
        <div
          key={"video" in p ? p.video : ""}
          className="rounded-xl overflow-hidden shadow-md mt-8"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            src={"video" in p ? p.video : ""}
            title={p.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
