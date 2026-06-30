"use client";

import SectionHeading from "@/components/SectionHeading";

const participants = [
  {
    name: "Michelle Akyeama Boadu",
    school: "Mfantsiman Girls' Senior High School",
    photo: "/images/michelle-boadu.jpg",
    bio: "I am a student at Mfantsiman Girls' Senior High School, recently completed Junior High School at Special Grace Academy. I joined the Project Management for Digital Creators by BEEVIF. This program has equipped me with Entry-level Responsive Web Designer and many internship programs. Through these experiences, I have honed critical skills in Data Analytics (Tableau, Excel), Client Service, Project Management (Gantt Charts, KPIs), and Software Development (React, Bug Fixing). I am highly skilled in Client Focus and Communication, able to distill complex data insights into clear, actionable recommendations for stakeholders.",
    linkedin: "https://www.linkedin.com/in/michelle-boadu",
    certs: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
      src: `/images/michelle-boadu/${n}.${n === 5 ? "png" : "jpg"}`,
      alt: `Michelle Boadu Certificate ${n}`,
    })),
  },
  {
    name: "Jaydon Nsiah Baafi",
    school: "Special Grace Academy Graduate",
    photo: "",
    bio: "Hi, I am Jadon, an Entry-level Responsive Web Designer and a recent junior high school graduate from Special Grace Academy. I have gained practical experience in client service and product management through two internship programs, building hands-on skills in project execution and creative problem-solving. I acquired these skills by participating in BEEVIF Project Management for Digital Creators, which helped me develop both digital creation and project management expertise. Now, I am proud to have completed multiple internships that prepare me for future opportunities in the tech and creative industry.",
    linkedin: "",
    certs: [
      { src: "/images/jaydon-baafi/1.jpg", alt: "Jaydon Nsiah Baafi Certificate 1" },
      { src: "/images/jaydon-baafi/2.jpg", alt: "Jaydon Nsiah Baafi Certificate 2" },
    ],
  },
  {
    name: "Lauren Patterson Hill",
    school: "Special Grace Academy Graduate",
    photo: "",
    bio: "Hi I am Lauren an Entry-level Responsive Web Designer and a recent junior high school graduate from Special Grace Academy with hands-on exposure to strategy consulting and legal research through global virtual experiences with Boston Consulting Group (BCG) and City Century. I gained all these expertise by joining BEEVIF Project Management for Digital Creators. Now I can boast of many internship programs.",
    linkedin: "https://www.linkedin.com/in/lauren-angel-hill-patterson",
    certs: [
      { src: "/images/angel-petterson/1.jpg", alt: "Lauren Patterson Hill Certificate 1" },
      { src: "/images/angel-petterson/2.png", alt: "Lauren Patterson Hill Certificate 2" },
      { src: "/images/angel-petterson/3.jpg", alt: "Lauren Patterson Hill Certificate 3" },
    ],
  },
  {
    name: "Mirabel Jingles",
    school: "Achimota School",
    photo: "/images/mirable-jingles/mirable-jingles.jpg",
    bio: "Since completing my junior high education at Special Grace Academy, I have built a diverse, hands-on skill set through virtual job simulations with global industry leaders. I acquired these skills by participating in BEEVIF Project Management for Digital Creators, which helped me develop both digital creation and project management expertise. Now, I am proud to have completed multiple internships that prepare me for future opportunities in the tech and creative industry.",
    linkedin: "https://www.linkedin.com/in/mirabel-jingles",
    certs: [1, 2, 3, 4].map((n) => ({
      src: `/images/mirable-jingles/${n}.jpg`,
      alt: `Mirabel Jingles Certificate ${n}`,
    })),
  },
];

function ParticipantCard({ p }: { p: typeof participants[0] }) {
  const track = [...p.certs, ...p.certs];

  return (
    <div className="mb-20">
      {/* Profile — centered */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        {p.photo ? (
          <img
            src={p.photo}
            alt={p.name}
            className="w-32 h-32 rounded-full object-cover shadow-md mb-6 border-4 border-white"
            style={{ outline: "3px solid var(--navy)" }}
          />
        ) : (
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center shadow-md mb-6 border-4 border-white"
            style={{ outline: "3px solid var(--navy)", backgroundColor: "var(--navy)" }}
          >
            <svg width="56" height="56" viewBox="0 0 24 24" fill="white">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
        )}
        <h3 className="text-2xl font-bold font-sans mb-1" style={{ color: "var(--navy)" }}>
          {p.name}
        </h3>
        {p.school && (
          <p className="text-sm font-semibold mb-5" style={{ color: "var(--coral)" }}>
            {p.school}
          </p>
        )}
        {p.bio && <p className="text-gray-600 leading-relaxed mb-6">{p.bio}</p>}
        {p.linkedin && (
          <a
            href={p.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold font-sans text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#0A66C2" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.101v1.561h.043c.431-.815 1.484-1.674 3.053-1.674 3.266 0 3.867 2.149 3.867 4.944v6.621zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.556 13.019H3.78V9h3.113v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn Profile
          </a>
        )}
      </div>

      {/* Certificate marquee */}
      <div className="overflow-hidden">
        <div
          className="cert-track flex gap-6"
          style={{ width: "max-content" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "paused"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "running"; }}
        >
          {track.map((cert, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md border border-gray-100 shrink-0"
              style={{ width: "520px", height: "380px" }}
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-full object-contain bg-gray-50"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Certification of Participation"
          heading="Programme Graduates"
          headingSize="text-3xl"
          className="mb-14"
        />
        {participants.map((p) => (
          <ParticipantCard key={p.name} p={p} />
        ))}
      </div>

      <style>{`
        .cert-track {
          animation: certScroll 30s linear infinite;
        }
        @keyframes certScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
