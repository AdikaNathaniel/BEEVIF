"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoImg from "../public/images/Logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav style={{ backgroundColor: "var(--navy)" }} className="sticky top-0 z-50 shadow-lg">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="bg-white rounded-full p-1 shrink-0" style={{ width: 56, height: 56 }}>
              <Image
                src={LogoImg}
                alt="BEEVIF Logo"
                width={48}
                height={48}
                className="rounded-full object-contain w-full h-full"
              />
            </div>
            <span className="text-white font-bold text-lg leading-tight hidden sm:block">
              BEEVIF
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded text-sm font-semibold tracking-wide transition-colors ${
                  pathname === l.href
                    ? "text-white bg-white/20"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label.toUpperCase()}
              </Link>
            ))}
            <Link
              href="/get-involved"
              style={{ backgroundColor: "var(--coral)" }}
              className="ml-4 px-5 py-2 rounded text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
            >
              DONATE
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${open ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "var(--navy-dark)" }} className="md:hidden px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/90 hover:text-white font-semibold border-b border-white/10 text-sm tracking-wide"
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
          <Link
            href="/get-involved"
            onClick={() => setOpen(false)}
            style={{ backgroundColor: "var(--coral)" }}
            className="mt-4 block text-center py-3 rounded text-white font-bold text-sm tracking-wide"
          >
            DONATE
          </Link>
        </div>
      )}
    </nav>
  );
}
