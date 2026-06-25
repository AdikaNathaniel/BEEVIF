import Link from "next/link";
import LeadershipSection from "@/components/LeadershipSection";
import SectionHeading from "@/components/SectionHeading";

const HERO_BG = "https://picsum.photos/seed/beevif-about/1280/720";

const values = [
  { icon: "🤝", title: "Compassion", desc: "We serve with empathy and deep care for every individual." },
  { icon: "💡", title: "Empowerment", desc: "We equip communities with tools to create their own futures." },
  { icon: "✝️", title: "Faith", desc: "Our work is grounded in Christ-like values of love and service." },
  { icon: "🌍", title: "Integrity", desc: "We operate with transparency and accountability to our communities." },
];

export default function About() {
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
            Who We Are
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-sans mb-6 text-white">About BEEVIF</h1>
          <p className="text-white/85 text-lg leading-relaxed">
            Over a decade of transforming lives across rural Ghana through education, health, and food security.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading label="Our Story" heading="A Foundation Built on Hope" className="mb-8" />
          <div className="space-y-5 text-gray-600 leading-relaxed text-left md:text-center">
            <p>
              The Baiden Etsiakoh Eagle Vision Foundation (BEEVIF) was established with one driving
              purpose: to fight poverty, poor health, and ignorance among rural dwellers in Ghana while
              spreading the gospel of hope. What began as a small community initiative has grown into a
              recognised NGO touching thousands of lives across the nation.
            </p>
            <p>
              Over more than a decade of service, BEEVIF has built schools, run medical outreach
              programmes, distributed food and clothing to hundreds of families, and trained a new
              generation of leaders grounded in integrity and compassion. Our work spans education,
              healthcare, food security, and Christian leadership development.
            </p>
            <p>
              We believe that sustainable community development requires a holistic approach — one that
              addresses the physical, intellectual, and spiritual needs of individuals and families. This
              belief shapes every programme we design and every community we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="What Guides Us" heading="Our Core Values" headingSize="text-3xl" className="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold font-sans mb-2" style={{ color: "var(--navy)" }}>
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <LeadershipSection />

      {/* CTA */}
      <section style={{ backgroundColor: "var(--navy)" }} className="py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-sans mb-4">Partner With Us</h2>
          <p className="text-white/80 leading-relaxed mb-8">
            BEEVIF actively seeks sponsors, donors, and partners to expand its reach and deepen its
            impact within underprivileged communities across Ghana.
          </p>
          <Link
            href="/get-involved"
            style={{ backgroundColor: "var(--coral)" }}
            className="inline-block px-8 py-4 rounded font-bold font-sans text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            GET INVOLVED
          </Link>
        </div>
      </section>
    </>
  );
}
