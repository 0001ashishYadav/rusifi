"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowDown, Globe, Award, Users, Heart, Instagram } from "lucide-react";
import Image from "next/image";

export default function LegacyPage() {
  const [counts, setCounts] = useState({
    artisans: 0,
    countries: 0,
    years: 0,
  });

  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const frames = 60;
          const step = duration / frames;
          let currentFrame = 0;

          const timer = setInterval(() => {
            currentFrame++;
            const progress = currentFrame / frames;

            setCounts({
              artisans: Math.floor(progress * 12000),
              countries: Math.floor(progress * 45),
              years: Math.floor(progress * 40),
            });

            if (currentFrame === frames) clearInterval(timer);
          }, step);

          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#050505] text-[#fafafa] selection:bg-amber-200 selection:text-black antialiased">
      {/* Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@200;300;400;500&display=swap");

        .font-serif {
          font-family: "Cormorant Garamond", serif;
        }
        .font-sans {
          font-family: "Inter", sans-serif;
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* ✅ LOCAL IMAGE (place inside /public/legacy/) */}
          <Image
            src="/legacy/12345678.jpg"
            alt="Hero"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="font-sans text-[10px] uppercase tracking-[0.6em] text-amber-500 mb-6">
            Est. 1984
          </p>

          <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-light mb-10">
            The Soul of <br />
            <span className="italic">Hand-Knotted</span> <br />
            History
          </h1>

          <p className="font-sans text-white/50 max-w-sm mx-auto text-sm">
            Weaving heritage with modern interiors. A legacy built one knot at a
            time.
          </p>

          <div className="mt-10 animate-bounce opacity-40">
            <ArrowDown size={20} />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="py-20 border-y border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center px-6 max-w-6xl mx-auto">
          {[
            {
              label: "Master Artisans",
              value: counts.artisans + "+",
              icon: <Users size={16} />,
            },
            {
              label: "Global Galleries",
              value: counts.countries,
              icon: <Globe size={16} />,
            },
            {
              label: "Design Awards",
              value: "18",
              icon: <Award size={16} />,
            },
            {
              label: "Years of Craft",
              value: counts.years,
              icon: <Heart size={16} />,
            },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-amber-500 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="font-serif text-4xl">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px]">
          {/* ✅ UNSPLASH (NO CONFIG NEEDED) */}
          <Image
            src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=90&w=1400"
            alt="Weaving"
            fill
            unoptimized
            className="object-cover rounded"
          />
        </div>

        <div>
          <h2 className="font-serif text-5xl mb-6">
            Patience is our <span className="italic text-amber-500">tool</span>
          </h2>

          <p className="text-white/60 mb-6">
            While the world accelerates, Rugsifi slows down. Each carpet is a
            dialogue between artisan and loom.
          </p>

          <p className="text-white/60">
            We use highland wool and natural dyes to ensure beauty that lasts
            generations.
          </p>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-24 text-center border-y border-white/10">
        <p className="font-serif text-3xl italic max-w-3xl mx-auto">
          “A rug shouldn't just cover the floor; it should ground the soul.”
        </p>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          { year: "1984", title: "Genesis" },
          { year: "1998", title: "Expansion" },
          { year: "2012", title: "Artisan Welfare" },
          { year: "2024", title: "Digital Era" },
        ].map((item, i) => (
          <div key={i} className="border p-6 border-white/10">
            <div className="text-amber-500 text-xl mb-2">{item.year}</div>
            <div className="text-sm uppercase">{item.title}</div>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="py-32 text-center px-6">
        <h2 className="font-serif text-5xl mb-10">Invite Heritage Home</h2>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-amber-500 text-black px-10 py-4 uppercase text-xs tracking-widest">
            Collections
          </button>

          <button className="border border-white/30 px-10 py-4 uppercase text-xs tracking-widest">
            Inquiry
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-16 text-center border-t border-white/10">
        <p className="text-white/40 text-sm mb-6">© 2024 Rugsifi — Bhadohi</p>

        <div className="flex justify-center gap-6">
          <Instagram size={18} />
          <Globe size={18} />
        </div>
      </footer>
    </div>
  );
}
