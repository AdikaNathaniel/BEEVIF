import Link from "next/link";

const HERO_BG = "/images/Background-1.jpeg";
const SECTION_IMG_1 = "/images/Background-2.jpeg";
const SECTION_IMG_2 = "/images/Our-Work.jpg";

const pillars = [
  {
    icon: "📚",
    title: "Education",
    desc: "Supporting schools, scholarships, and training programmes to give every child access to quality learning.",
  },
  {
    icon: "🏥",
    title: "Health",
    desc: "Running medical outreach campaigns and healthcare services to advance community well-being.",
  },
  {
    icon: "🌾",
    title: "Food Security",
    desc: "Distributing relief goods and implementing nutrition programmes to fight hunger across rural Ghana.",
  },
];

const stats = [
  { value: "600+", label: "People clothed" },
  { value: "5", label: "Washrooms built" },
  { value: "10+", label: "Years of service" },
  { value: "1000s", label: "Lives impacted" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[92vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative z-10 max-w-4xl mx-auto rounded-2xl px-8 py-14"
          style={{ backgroundColor: "rgba(27,58,107,0.55)" }}
        >
          <p className="uppercase tracking-widest text-sm mb-4 font-sans" style={{ color: "var(--coral)" }}>
            Baiden Etsiakoh Eagle Vision Foundation
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-sans text-white">
            Bringing Hope,<br />Changing Lives
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            We thrive to fight poverty, poor health, and ignorance among rural dwellers while
            spreading the gospel of hope across Ghana.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-involved"
              style={{ backgroundColor: "var(--coral)" }}
              className="px-8 py-4 rounded font-bold font-sans tracking-wide text-white hover:opacity-90 transition-opacity text-sm"
            >
              DONATE NOW
            </Link>
            <Link
              href="/get-involved"
              className="px-8 py-4 rounded font-bold font-sans tracking-wide text-white border border-white hover:bg-white hover:text-[#1B3A6B] transition-colors text-sm"
            >
              SPONSOR A CHILD
            </Link>
            <Link
              href="/our-work"
              className="px-8 py-4 rounded font-bold font-sans tracking-wide text-white border border-white/60 hover:border-white transition-colors text-sm"
            >
              OUR WORK
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "var(--coral)" }} className="py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold font-sans">{s.value}</div>
              <div className="text-sm mt-1 opacity-90 font-sans">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6" style={{ color: "var(--navy)" }}>
              From promoting equality to serving humanity
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              BEEVIF is dedicated to empowering individuals and families by providing access to
              quality education, promoting health and well-being, and ensuring food security. Our
              holistic approach to community development has led to significant achievements across
              rural Ghana.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe that formal education is the most powerful tool for breaking the cycle of
              poverty. Through schools, scholarships, medical outreach, and relief programmes, we
              are transforming communities one family at a time.
            </p>
            <Link
              href="/about"
              style={{ color: "var(--coral)", borderColor: "var(--coral)" }}
              className="inline-block border-2 px-6 py-3 rounded font-bold font-sans text-sm hover:opacity-80 transition-opacity"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div
              role="img"
              aria-label="BEEVIF community work"
              className="w-full h-80"
              style={{
                backgroundImage: `url('${SECTION_IMG_1}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-sans" style={{ color: "var(--navy)" }}>
              Our Three Core Focus Areas
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-8 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-5">{p.icon}</div>
                <h3 className="text-xl font-bold font-sans mb-3" style={{ color: "var(--navy)" }}>
                  {p.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="relative py-24 px-4 text-center"
        style={{
          backgroundImage: `url('${SECTION_IMG_2}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="relative z-10 max-w-3xl mx-auto rounded-2xl px-8 py-12"
          style={{ backgroundColor: "rgba(27,58,107,0.55)" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-6 text-white">
            Your Generosity Can Change a Life Forever
          </h2>
          <p className="text-white/85 text-lg mb-10 leading-relaxed">
            There are millions of children around the world who lack basic necessities. By donating
            or sponsoring a child, you give them hope for a brighter future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-involved"
              style={{ backgroundColor: "var(--coral)" }}
              className="px-8 py-4 rounded font-bold font-sans text-sm tracking-wide text-white hover:opacity-90 transition-opacity"
            >
              DONATE
            </Link>
            <Link
              href="/get-involved"
              className="px-8 py-4 rounded font-bold font-sans text-sm tracking-wide text-white border border-white hover:bg-white hover:text-[#1B3A6B] transition-colors"
            >
              VOLUNTEER
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
              Testimonials
            </p>
            <h2 className="text-3xl font-bold font-sans" style={{ color: "var(--navy)" }}>
              What People Are Saying
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Before BEEVIF, I struggled to afford school fees and supplies. Now, I have access to quality education, and my dream of becoming a doctor feels possible.",
                name: "Ama Oforiwaa",
                role: "Sponsored Student",
                photo: "/images/Ama-Oforiwaa-(Sponsored-Student).jpg",
              },
              {
                quote:
                  "BEEVIF's medical outreach programs have saved many lives in our village. Their dedication to providing healthcare and education is truly transforming our community.",
                name: "Mr. Kwame Opong-Kwateng",
                role: "Community Leader",
                photo: "/images/Mr.Kwame-Oppong-Community-Leader.jpg",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <p className="text-gray-600 italic leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <div className="font-bold font-sans text-sm" style={{ color: "var(--navy)" }}>
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
