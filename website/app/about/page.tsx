import Image from "next/image";
import Link from "next/link";

const HERO_BG = "https://picsum.photos/seed/beevif-about/1280/720";

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
    role: "Partner & Advisor",
    img: "/images/Apostle-Fred-Hamilton.jpg",
    bio: "Apostle Fred Hamilton brings spiritual leadership and strategic guidance to BEEVIF, supporting the foundation's Christian values-driven approach to community transformation.",
  },
];

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
          <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
            Our Story
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-8" style={{ color: "var(--navy)" }}>
            A Foundation Built on Hope
          </h2>
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
          <div className="text-center mb-12">
            <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
              What Guides Us
            </p>
            <h2 className="text-3xl font-bold font-sans" style={{ color: "var(--navy)" }}>
              Our Core Values
            </h2>
          </div>
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
              The Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-sans" style={{ color: "var(--navy)" }}>
              Our Leadership Team
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
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
