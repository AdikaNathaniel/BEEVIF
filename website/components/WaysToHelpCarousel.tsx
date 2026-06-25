"use client";

import SectionHeading from "@/components/SectionHeading";

const ways = [
  {
    img: "/images/Sponsor-A-Child(Get-Involved-Page).jpg",
    title: "Sponsor a Child",
    desc: "Your sponsorship provides education, school supplies, medical care, and nutritious meals — helping break the cycle of poverty and empowering a child to achieve their dreams.",
    cta: "SPONSOR A CHILD",
    href: "https://forms.google.com",
  },
  {
    img: "/images/Sponsor-A-Family(Get-Involved-Page).jpg",
    title: "Sponsor a Family",
    desc: "Every family deserves a chance at a better life — food on the table, access to education, and a safe place to call home. Your support provides nutritious food, clean water, education for children, medical care, and livelihood training.",
    cta: "SPONSOR A FAMILY",
    href: "https://forms.google.com",
  },
  {
    img: null,
    icon: "❤️",
    title: "Donate",
    desc: "A one-time or recurring donation goes directly towards our programmes in education, health, and food security. Every amount makes a difference in the lives of families across rural Ghana.",
    cta: "DONATE NOW",
    href: "/contact",
  },
  {
    img: "/images/Volunteer.jpg",
    title: "Volunteer",
    desc: "Your time and skills can lead to lasting improvements in the well-being of communities. Whether you are a teacher, doctor, builder, or organiser — we welcome your involvement.",
    cta: "SIGN UP",
    href: "https://forms.google.com",
  },
];

// Duplicate for seamless loop
const track = [...ways, ...ways];

export default function WaysToHelpCarousel() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="How You Can Help"
          heading="There Are Millions Who Need Your Help"
          className="mb-14"
        >
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            There are millions of children around the world who lack basic necessities of life such as
            food, education, healthcare and shelter. You can make a difference.
          </p>
        </SectionHeading>

        {/* Marquee viewport */}
        <div className="overflow-hidden" style={{ cursor: "default" }}>
          <div className="marquee-track flex gap-6" style={{ width: "max-content" }}>
            {track.map((w, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow"
                style={{ width: "300px", flexShrink: 0 }}
                onMouseEnter={(e) => {
                  (e.currentTarget.closest(".marquee-track") as HTMLElement).style.animationPlayState = "paused";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.closest(".marquee-track") as HTMLElement).style.animationPlayState = "running";
                }}
              >
                {w.img ? (
                  <div
                    className="w-full h-48"
                    style={{
                      backgroundImage:    `url('${w.img}')`,
                      backgroundSize:     "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ) : (
                  <div
                    className="w-full h-48 flex items-center justify-center text-5xl"
                    style={{ backgroundColor: "var(--muted)" }}
                  >
                    {w.icon}
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1 items-center text-center">
                  <h3 className="text-lg font-bold font-sans mb-3" style={{ color: "var(--navy)" }}>
                    {w.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{w.desc}</p>
                  <a
                    href={w.href}
                    target={w.href.startsWith("http") ? "_blank" : undefined}
                    rel={w.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ backgroundColor: "var(--coral)" }}
                    className="w-full py-3 rounded text-white font-bold font-sans text-sm tracking-wide hover:opacity-90 transition-opacity"
                  >
                    {w.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marqueeScroll 18s linear infinite;
        }
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
