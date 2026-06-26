import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import MissionSection from "@/components/MissionSection";
import SectionHeading from "@/components/SectionHeading";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
const SECTION_IMG_2 = "/images/Our-Work.jpg";

const pillars = [
  {
    img: "/images/education.jpg",
    title: "Education",
    desc: "Supporting schools, scholarships, and training programmes to give every child access to quality learning.",
  },
  {
    img: "/images/HealthCare.jpg",
    title: "Health",
    desc: "Running medical outreach campaigns and healthcare services to advance community well-being.",
  },
  {
    img: "/images/food-security.jpg",
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
      <HeroSlideshow>
        <div
          className="max-w-4xl mx-auto rounded-2xl px-8 py-14"
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
      </HeroSlideshow>

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

      {/* About Us */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Who We Are" heading="About Us" className="mb-10" />
          <p className="text-gray-600 leading-relaxed text-center mb-12">
            Baiden Etsiakoh Eagle Vision Foundation (BEEVIF) is a dedicated non-governmental
            organization based in Accra, Ghana, committed to uplifting underprivileged communities
            through initiatives in education, health, and food security. Co-founded by individuals
            including Hannah Etsiakoh, who also serves as Vice President, BEEVIF operates with a
            vision to create sustainable and positive change in society.
          </p>

          <div className="border-t border-gray-200 pt-12">
            <SectionHeading label="What Drives Us" heading="Our Mission" headingSize="text-2xl md:text-3xl" className="mb-8" />
            <p className="text-gray-600 leading-relaxed text-center">
              At BEEVIF, our mission is to empower individuals and families by providing access to
              quality education, promoting health and well-being, and ensuring food security. We
              believe that by addressing these fundamental areas, we can foster self-reliant and
              thriving communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <MissionSection />

      {/* Three Pillars */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="What We Do" heading="Our Three Core Focus Areas" className="mb-14" />
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-8 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div
                  className="h-44 overflow-hidden rounded-t-2xl"
                  style={{ width: "calc(100% + 4rem)", marginLeft: "-2rem", marginTop: "-2rem", marginBottom: "1.25rem" }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url('${p.img}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
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
      <TestimonialsCarousel />
    </>
  );
}
