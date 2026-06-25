import VolunteerSection from "@/components/VolunteerSection";
import LivesTouched from "@/components/LivesTouched";
import WaysToHelpCarousel from "@/components/WaysToHelpCarousel";

const HERO_BG = "/images/Get-Involved-Background.jpeg";


export default function GetInvolved() {
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
            Take Action
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-sans mb-6 text-white">Get Involved</h1>
          <p className="text-white/85 text-lg leading-relaxed">
            Your generosity can change a life forever. Join us today in creating a world where every
            child has the opportunity to thrive.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <WaysToHelpCarousel />

      {/* Volunteer CTA */}
      <VolunteerSection />

      {/* Lives Touched */}
      <LivesTouched />
    </>
  );
}
