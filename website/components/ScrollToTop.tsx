"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        position:        "fixed",
        bottom:          "2rem",
        right:           "2rem",
        zIndex:          50,
        width:           "48px",
        height:          "48px",
        borderRadius:    "50%",
        backgroundColor: "var(--navy)",
        color:           "#fff",
        border:          "none",
        cursor:          "pointer",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        boxShadow:       "0 4px 14px rgba(0,0,0,0.25)",
        opacity:         visible ? 1 : 0,
        transform:       visible ? "translateY(0)" : "translateY(16px)",
        transition:      "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents:   visible ? "auto" : "none",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
