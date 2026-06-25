"use client";

import { useEffect, useState } from "react";

const IMAGES = [
  "/images/Background-1.jpeg",
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
  "/images/7.jpeg",
  "/images/8.jpeg",
];

const KEN_BURNS = [
  { start: "scale(1.08) translate(0%, 0%)",   end: "scale(1.18) translate(-3%, -2%)" },
  { start: "scale(1.12) translate(2%, 1%)",    end: "scale(1.05) translate(-2%, 1%)" },
  { start: "scale(1.06) translate(-2%, 2%)",   end: "scale(1.15) translate(3%, -1%)" },
  { start: "scale(1.10) translate(1%, -2%)",   end: "scale(1.04) translate(-1%, 2%)" },
  { start: "scale(1.08) translate(-1%, 1%)",   end: "scale(1.16) translate(2%, -2%)" },
  { start: "scale(1.14) translate(2%, -1%)",   end: "scale(1.06) translate(-3%, 1%)" },
  { start: "scale(1.07) translate(-2%, -1%)",  end: "scale(1.13) translate(1%, 3%)"  },
  { start: "scale(1.11) translate(0%, 2%)",    end: "scale(1.05) translate(3%, -1%)" },
  { start: "scale(1.09) translate(1%, 1%)",    end: "scale(1.17) translate(-2%, -3%)" },
];

export default function HeroSlideshow({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        setAnimKey((k) => k + 1);
        return (c + 1) % IMAGES.length;
      });
    }, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center text-center px-4 overflow-hidden">

      {/* Previous image fades out */}
      {prev !== null && (
        <div
          key={`prev-${animKey}`}
          className="absolute inset-0"
          style={{
            backgroundImage:    `url('${IMAGES[prev]}')`,
            backgroundSize:     "cover",
            backgroundPosition: "center",
            animation:          "slideFadeOut 1.8s ease-in-out forwards",
            transform:          KEN_BURNS[prev].end,
          }}
        />
      )}

      {/* Current image fades in with Ken Burns */}
      <div
        key={`curr-${animKey}`}
        className="absolute inset-0"
        style={{
          backgroundImage:    `url('${IMAGES[current]}')`,
          backgroundSize:     "cover",
          backgroundPosition: "center",
          animation:          `slideFadeIn 1.8s ease-in-out forwards, kenBurns${animKey % 2} 17s ease-in-out forwards`,
          transform:          KEN_BURNS[current].start,
        }}
      />

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i); setAnimKey((k) => k + 1); }}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-500"
            style={{
              width:           i === current ? "24px" : "8px",
              height:          "8px",
              backgroundColor: i === current ? "var(--coral)" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full">{children}</div>

      <style>{`
        @keyframes slideFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideFadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes kenBurns0 {
          from { transform: ${KEN_BURNS[0].start}; }
          to   { transform: ${KEN_BURNS[0].end};   }
        }
        @keyframes kenBurns1 {
          from { transform: ${KEN_BURNS[1].start}; }
          to   { transform: ${KEN_BURNS[1].end};   }
        }
      `}</style>
    </section>
  );
}
