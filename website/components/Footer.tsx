import Link from "next/link";
import Image from "next/image";
import LogoImg from "../public/images/Logo.png";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn } from "react-icons/fa6";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy-dark)" }} className="text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-full p-1 shrink-0" style={{ width: 52, height: 52 }}>
                <Image
                  src={LogoImg}
                  alt="BEEVIF Logo"
                  width={44}
                  height={44}
                  className="rounded-full object-contain w-full h-full"
                />
              </div>
              <span className="font-bold text-xl">BEEVIF</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Bringing Hope, Changing Lives. Supporting children and families facing poverty, health
              challenges, and more — because everyone deserves a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-4" style={{ color: "var(--coral)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-4" style={{ color: "var(--coral)" }}>
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <span>📍</span>
                <span>P.O Box AN15698 Accra-North, Ghana — West Africa</span>
              </li>
              <li>📞 +233 50 337 7231</li>
              <li>📞 +233 24 482 2288</li>
              <li>📞 +233 50 554 8804</li>
              <li>
                <a href="mailto:info@beevif.org" className="hover:text-white transition-colors">
                  ✉ info@beevif.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-4" style={{ color: "var(--coral)" }}>
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Facebook", icon: <FaFacebookF size={16} />, href: "#", bg: "#1877F2" },
                { label: "Instagram", icon: <FaInstagram size={16} />, href: "#", bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" },
                { label: "YouTube", icon: <FaYoutube size={16} />, href: "#", bg: "#FF0000" },
                { label: "TikTok", icon: <FaTiktok size={16} />, href: "#", bg: "#010101" },
                { label: "LinkedIn", icon: <FaLinkedinIn size={16} />, href: "#", bg: "#0A66C2" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  style={{ background: s.bg }}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="text-white/50 text-xs mt-6">
              ©2026 Baiden Etsiakoh Eagle Vision Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
