import Link from "next/link";
import LeadershipSection from "@/components/LeadershipSection";
import ValuesSection from "@/components/ValuesSection";
import PartnersSection from "@/components/PartnersSection";
import SectionHeading from "@/components/SectionHeading";

const HERO_BG = "https://picsum.photos/seed/beevif-about/1280/720";

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
      <ValuesSection />

      {/* Leadership */}
      <LeadershipSection />

      {/* Partners */}
      <PartnersSection />

      {/* Partner With Us */}
      <section style={{ backgroundColor: "var(--navy)" }} className="py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase text-xs tracking-widest mb-3 font-sans text-center" style={{ color: "var(--coral)" }}>
            Partner with Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6 text-center">
            Support the Vision — Partner with BEEVIF
          </h2>
          <p className="text-white/80 leading-relaxed text-center mb-12 max-w-2xl mx-auto">
            Join Baiden Etsiakoh Eagle Vision Foundation (BEEVIF) in transforming lives across rural
            Ghana. Through medical outreach, relief aid, and education, we are breaking cycles of
            poverty and empowering communities. Your sponsorship or partnership can help us reach more
            people with hope, healing, and opportunity.
          </p>

          <h3 className="text-xl font-bold font-sans mb-8 text-center" style={{ color: "var(--coral)" }}>
            Bank Details for Support
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cedi Account */}
            <div className="rounded-2xl p-8 border border-white/20" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
              <p className="uppercase text-xs tracking-widest mb-5 font-sans font-bold" style={{ color: "var(--coral)" }}>
                Cedi (GH¢) Account
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Bank Name</p>
                  <p className="font-semibold font-sans text-white">Fidelity Bank</p>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Branch Name</p>
                  <p className="font-semibold font-sans text-white">Ridge Towers</p>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Account Number</p>
                  <p className="font-bold font-sans text-lg tracking-widest" style={{ color: "var(--coral)" }}>
                    1060000278154
                  </p>
                </div>
              </div>
            </div>

            {/* Dollar Account */}
            <div className="rounded-2xl p-8 border border-white/20" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
              <p className="uppercase text-xs tracking-widest mb-5 font-sans font-bold" style={{ color: "var(--coral)" }}>
                Dollar Account
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Bank Name</p>
                  <p className="font-semibold font-sans text-white">Fidelity Bank</p>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Branch Name</p>
                  <p className="font-semibold font-sans text-white">Ridge Towers</p>
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Account Number</p>
                  <p className="font-bold font-sans text-lg tracking-widest" style={{ color: "var(--coral)" }}>
                    1961000278116
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/get-involved"
              style={{ backgroundColor: "var(--coral)" }}
              className="inline-block px-8 py-4 rounded font-bold font-sans text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              GET INVOLVED
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
