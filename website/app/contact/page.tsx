import SectionHeading from "@/components/SectionHeading";

const contacts = [
  { img: "/images/phone.jpg", label: "Phone", lines: ["+233 50 337 7231", "+233 24 482 2288", "+233 50 554 8804"] },
  { img: "/images/email.jpg", label: "Email", lines: ["info@beevif.org"] },
  { img: "/images/map.jpg",   label: "Address", lines: ["P.O Box AN15698", "Accra-North, Ghana"] },
];


export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--navy)" }}
        className="py-32 px-4 text-white text-center"
      >
        <div className="max-w-2xl mx-auto">
          <p className="uppercase text-xs tracking-widest mb-3 font-sans" style={{ color: "var(--coral)" }}>
            Reach Out
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-sans mb-6">Contact Us</h1>
          <p className="text-white/80 text-lg leading-relaxed">
            We would love to hear from you — whether you want to donate, partner, volunteer, or simply
            learn more about our work.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4" style={{ backgroundColor: "var(--muted)" }}>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">
          {contacts.map((c) => (
            <div
              key={c.label}
              className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <img src={c.img} alt={c.label} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-bold font-sans mb-3" style={{ color: "var(--navy)" }}>
                {c.label}
              </h3>
              {c.lines.map((line, i) => (
                <p key={i} className="text-gray-600 text-sm leading-relaxed">
                  {c.label === "Email" ? (
                    <a href={`mailto:${line}`} className="hover:underline" style={{ color: "var(--coral)" }}>
                      {line}
                    </a>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Message Form */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading label="Send a Message" heading="Get in Touch" headingSize="text-3xl" className="mb-12" />
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold font-sans mb-2" style={{ color: "var(--navy)" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold font-sans mb-2" style={{ color: "var(--navy)" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold font-sans mb-2" style={{ color: "var(--navy)" }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold font-sans mb-2" style={{ color: "var(--navy)" }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us about yourself and how you would like to get involved..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              style={{ backgroundColor: "var(--coral)" }}
              className="w-full py-4 rounded-lg text-white font-bold font-sans tracking-wide hover:opacity-90 transition-opacity"
            >
              SEND MESSAGE
            </button>
            <p className="text-center text-xs text-gray-400">
              Or email us directly at{" "}
              <a href="mailto:info@beevif.org" className="underline" style={{ color: "var(--coral)" }}>
                info@beevif.org
              </a>
            </p>
          </form>
        </div>
      </section>

    </>
  );
}
