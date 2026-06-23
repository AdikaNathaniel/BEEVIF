
const HERO_BG = "/images/Get-Involved-Background.jpeg";

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
      "We used to walk miles to school without proper books or meals. Thanks to BEEVIF, we now have school supplies, daily meals, and the support we need.",
    name: "Emmanuel Taiwiah & Daniel Safoh",
    role: "Sponsored Students",
    photo: null,
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
      "Sponsoring a child through BEEVIF has been one of the most fulfilling experiences of my life.",
    name: "Lisa Milly",
    role: "Donor & Sponsor",
    photo: null,
  },
];

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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
              How You Can Help
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-sans" style={{ color: "var(--navy)" }}>
              There Are Millions Who Need Your Help
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              There are millions of children around the world who lack basic necessities of life such as
              food, education, healthcare and shelter. You can make a difference.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ways.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-gray-100 shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                {w.img ? (
                  <div
                    className="w-full h-48"
                    style={{
                      backgroundImage: `url('${w.img}')`,
                      backgroundSize: "cover",
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
      </section>

      {/* Volunteer CTA */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
              Volunteer
            </p>
            <h2 className="text-3xl font-bold font-sans mb-5" style={{ color: "var(--navy)" }}>
              Become a Volunteer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your involvement can lead to lasting improvements in the well-being of communities. We
              welcome educators, healthcare workers, builders, organisers, and anyone with a heart to
              serve.
            </p>
            <div className="space-y-3 text-sm text-gray-600 mb-8">
              <div className="flex gap-3 items-start">
                <span style={{ color: "var(--coral)" }}>✉</span>
                <a href="mailto:specialgrace.academy.edu@gmail.com" className="hover:underline">
                  specialgrace.academy.edu@gmail.com
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <span style={{ color: "var(--coral)" }}>📞</span>
                <span>+233 30242 3348</span>
              </div>
            </div>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "var(--navy)" }}
              className="inline-block px-8 py-4 rounded font-bold font-sans text-white text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              SIGN UP NOW
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div
              role="img"
              aria-label="Volunteers at work"
              className="w-full h-80"
              style={{
                backgroundImage: `url('/images/Volunteer.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
              Stories of Change
            </p>
            <h2 className="text-3xl font-bold font-sans" style={{ color: "var(--navy)" }}>
              Lives We Have Touched
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col"
              >
                <div
                  className="text-3xl mb-4"
                  style={{ color: "var(--coral)" }}
                >
                  &ldquo;
                </div>
                <p className="text-gray-600 italic leading-relaxed flex-1 mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div
                      style={{ backgroundColor: "var(--navy)" }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-sans text-sm shrink-0"
                    >
                      {t.name[0]}
                    </div>
                  )}
                  <div>
                    <div className="font-bold font-sans text-sm" style={{ color: "var(--navy)" }}>
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-400">{t.role}</div>
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
