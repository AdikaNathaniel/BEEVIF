"use client";

import SectionHeading from "@/components/SectionHeading";

const testimonials = [
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
  {
    quote:
      "We used to walk miles to school without proper books or meals. Thanks to BEEVIF, we now have school supplies, daily meals, and the support we need to focus on our education. We am forever grateful for this opportunity!",
    name: "Sponsored Student",
    role: "BEEVIF Beneficiary",
    photo: "/images/Sponsored-Student-Testimony.jpg",
  },
];

// Duplicate for seamless loop
const track = [...testimonials, ...testimonials];

export default function TestimonialsCarousel() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "var(--muted)" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Testimonials"
          heading="What People Are Saying"
          headingSize="text-3xl"
          className="mb-14"
        />
      </div>

      {/* Marquee viewport — full bleed so cards flow edge to edge */}
      <div className="overflow-hidden">
        <div className="testimonial-track flex gap-6" style={{ width: "max-content" }}>
          {track.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col"
              style={{ width: "560px", flexShrink: 0 }}
              onMouseEnter={(e) => {
                (e.currentTarget.closest(".testimonial-track") as HTMLElement).style.animationPlayState = "paused";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.closest(".testimonial-track") as HTMLElement).style.animationPlayState = "running";
              }}
            >
              <p className="text-gray-600 italic leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
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

      <style>{`
        .testimonial-track {
          animation: testimonialScroll 20s linear infinite;
        }
        @keyframes testimonialScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
