import Link from "next/link";

const HERO_BG = "/images/Our-Work.jpg";

const programmes = [
  {
    tag: "Education",
    title: "Special Grace Academy — Basic School at Kasoa",
    body: "Originally established as a fee-free school, Special Grace Academy at Kasoa provides quality primary education to children from low-income families. As enrolment grew, a modest fee structure was introduced to help support staff salaries. BEEVIF remains committed to supporting families in need through scholarships and bursaries.",
    img: "/images/Our-Work.jpg",
  },
  {
    tag: "Education",
    title: "Project Management for Digital Creators",
    body: "This innovative programme equips learners with essential project planning, scheduling, and execution skills — using web design projects as a hands-on learning tool. Students who have completed the programme have applied their skills in internships and professional roles across Ghana.",
    img: "/images/Background-1.jpeg",
  },
  {
    tag: "Health",
    title: "Medical Outreach Programmes",
    body: "BEEVIF organises regular medical outreach events across rural Ghanaian communities, bringing free health screenings, medications, and medical advice directly to people who would otherwise have no access to healthcare. These events have saved and improved countless lives.",
    img: "/images/Background-2.jpeg",
  },
  {
    tag: "Food Security",
    title: "Secondhand Clothing & Relief Drive — Asamankese",
    body: "BEEVIF's clothing distribution drive in Asamankese (Eastern Region) reached over 600 individuals of all ages and sizes. The event fostered a spirit of unity and mutual support, while providing practical help to families facing hardship.",
    img: "/images/Our-Work.jpg",
  },
  {
    tag: "Education",
    title: "Infrastructure — School Washrooms at Kasoa",
    body: "BEEVIF constructed 5 washroom facilities at the Kasoa school, providing children with safe and dignified sanitation. Access to proper sanitation is essential for school attendance, especially for girls, and this project has directly improved school retention rates.",
    img: "/images/Background-1.jpeg",
  },
  {
    tag: "Leadership",
    title: "Christian Leadership Training",
    body: "BEEVIF is dedicated to nurturing leaders who embody Christ-like values and are equipped to drive positive change within their communities. Graduates of this programme have gone on to lead church ministries, spearhead community development projects, and mentor others in their spiritual and personal growth journeys.",
    img: "/images/Background-2.jpeg",
  },
];

const tagColours: Record<string, string> = {
  Education: "#1B3A6B",
  Health: "#2e7d32",
  "Food Security": "#e65100",
  Leadership: "#6a1b9a",
};

export default function OurWork() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-32 px-4 text-center"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative z-10 max-w-3xl mx-auto rounded-2xl px-8 py-12"
          style={{ backgroundColor: "rgba(27,58,107,0.55)" }}
        >
          <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
            Impact
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-sans mb-6 text-white">Our Work</h1>
          <p className="text-white/85 text-lg leading-relaxed">
            We are proud to share the impactful strides BEEVIF has made in the sectors of education,
            health, and food security.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-sans mb-4" style={{ color: "var(--navy)" }}>
            Holistic Community Development
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our commitment to holistic community development has led to significant achievements across
            rural Ghana. Every programme is designed to address immediate needs while building
            long-term resilience in the communities we serve.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {programmes.map((p, i) => (
            <div
              key={p.title}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <span
                  className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold font-sans mb-4"
                  style={{ backgroundColor: tagColours[p.tag] || "var(--navy)" }}
                >
                  {p.tag}
                </span>
                <h3 className="text-2xl font-bold font-sans mb-4" style={{ color: "var(--navy)" }}>
                  {p.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{p.body}</p>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div
                  role="img"
                  aria-label={p.title}
                  className="w-full h-72"
                  style={{
                    backgroundImage: `url('${p.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--coral)" }} className="py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-sans mb-4">Join the Next Cohort</h2>
          <p className="text-white/90 leading-relaxed mb-8">
            Interested in our digital creator programme, volunteer opportunities, or sponsoring a child?
            Get involved today and help us reach more communities.
          </p>
          <Link
            href="/get-involved"
            style={{ backgroundColor: "var(--navy)" }}
            className="inline-block px-8 py-4 rounded font-bold font-sans text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            GET INVOLVED
          </Link>
        </div>
      </section>
    </>
  );
}
