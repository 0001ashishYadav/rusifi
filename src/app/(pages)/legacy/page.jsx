"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  History,
  Users,
  Globe2,
  Palmtree,
  Award,
  Anchor,
  Compass,
  Heart,
  ArrowDown,
} from "lucide-react";

/* ── Parallax section component ───────────────────────────── */
function ParallaxSection({
  image,
  children,
  overlay = "rgba(0,0,0,0.55)",
  minH = "100vh",
  className = "",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-22%", "22%"]);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ minHeight: minH }}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[144%] top-[-22%]"
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
      </motion.div>
      <div className="absolute inset-0 z-10" style={{ background: overlay }} />
      <div className="relative z-20 w-full">{children}</div>
    </section>
  );
}

/* ── Animated counter ──────────────────────────────────────── */
function Counter({ value }) {
  const [v, setV] = useState(0);
  const num = parseInt(value.replace(/\D/g, ""));
  const suf = value.replace(/\d/g, "");
  useEffect(() => {
    let cur = 0;
    const step = Math.max(1, Math.ceil(num / 50));
    const t = setInterval(() => {
      cur = Math.min(cur + step, num);
      setV(cur);
      if (cur >= num) clearInterval(t);
    }, 25);
    return () => clearInterval(t);
  }, [num]);
  return (
    <>
      {v}
      {suf}
    </>
  );
}

/* ── Marquee ───────────────────────────────────────────────── */
function Marquee() {
  const items = [
    "Hand-Knotted",
    "Fair Trade",
    "Sustainable",
    "Since 1984",
    "Bhadohi",
    "Mirzapur",
    "Heritage",
    "45 Countries",
    "12,000 Artisans",
  ];
  return (
    <div className="overflow-hidden bg-amber-900/80 backdrop-blur-sm py-3 border-y border-amber-600/25">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[10px] uppercase tracking-[0.35em] text-amber-100 font-semibold flex items-center gap-4"
          >
            {item}
            <span className="text-amber-300/40">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function LegacyPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  /* Split craft section parallax */
  const craftRef = useRef(null);
  const { scrollYProgress: craftScroll } = useScroll({
    target: craftRef,
    offset: ["start end", "end start"],
  });
  const craftImgY = useTransform(craftScroll, [0, 1], ["-18%", "18%"]);

  return (
    <div className="bg-[#0a0906] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; }
        .cg { font-family: 'Cormorant Garamond', serif; }
        .jost { font-family: 'Jost', sans-serif; }
        ::selection { background: #C8922A44; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8922A; }
      `}</style>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[999]"
        style={{
          scaleX,
          background: "linear-gradient(90deg,#92400e,#fbbf24,#92400e)",
        }}
      />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <ParallaxSection
        image="https://images.unsplash.com/photo-1615873968403-89e068629275?auto=format&fit=crop&q=85&w=2000"
        overlay="linear-gradient(to bottom, rgba(5,4,2,0.35) 0%, rgba(5,4,2,0.25) 45%, rgba(5,4,2,0.9) 100%)"
        minH="100vh"
      >
        <div className="text-center px-6 py-40">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="jost text-[10px] uppercase tracking-[0.55em] text-amber-300 mb-10 flex items-center justify-center gap-4"
          >
            <span className="inline-block w-10 h-px bg-amber-400/50" />
            Est. 1984 · Bhadohi, India
            <span className="inline-block w-10 h-px bg-amber-400/50" />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="cg font-light leading-[0.9] tracking-[-0.01em] text-white"
            style={{
              fontSize: "clamp(64px,13vw,148px)",
              textShadow:
                "0 4px 60px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.9)",
            }}
          >
            A Thread
            <br />
            <em style={{ color: "#E8B84B", fontStyle: "italic" }}>Through</em>
            <br />
            Time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="jost font-light text-white/75 mt-8 text-[15px] tracking-wide max-w-sm mx-auto"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}
          >
            Four decades of craft. One unbroken thread.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16 flex flex-col items-center gap-2 text-white/40"
          >
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.4,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              <span className="jost text-[9px] tracking-[0.45em] uppercase">
                Scroll
              </span>
              <ArrowDown size={14} />
            </motion.div>
          </motion.div>
        </div>
      </ParallaxSection>

      <Marquee />

      {/* ══ STATS ═════════════════════════════════════════════ */}
      <ParallaxSection
        image="https://images.unsplash.com/photo-1558171813-2f5e1e7e4ec0?auto=format&fit=crop&q=85&w=2000"
        overlay="linear-gradient(135deg,rgba(12,8,4,0.88) 0%,rgba(20,12,4,0.82) 100%)"
        minH="auto"
      >
        <div
          ref={statsRef}
          className="max-w-6xl mx-auto px-8 py-28 grid grid-cols-2 md:grid-cols-4"
        >
          {[
            {
              label: "Generations",
              value: "3+",
              icon: <Users size={18} />,
              sub: "of family craft",
            },
            {
              label: "Artisans",
              value: "12k",
              icon: <Heart size={18} />,
              sub: "skilled hands",
            },
            {
              label: "Countries",
              value: "45+",
              icon: <Globe2 size={18} />,
              sub: "worldwide",
            },
            {
              label: "Awards",
              value: "18",
              icon: <Award size={18} />,
              sub: "of excellence",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="flex flex-col items-center py-10 border-r border-white/10 last:border-r-0 group cursor-default"
            >
              <span className="text-amber-400/60 mb-5 group-hover:text-amber-400 transition-colors duration-300">
                {s.icon}
              </span>
              <span
                className="cg font-light text-white leading-none mb-2"
                style={{ fontSize: "clamp(40px,5vw,64px)" }}
              >
                {statsVisible ? <Counter value={s.value} /> : "0"}
              </span>
              <span className="jost text-[10px] tracking-[0.38em] uppercase text-amber-300/80 mt-1">
                {s.label}
              </span>
              <span className="jost text-[10px] text-white/30 mt-1">
                {s.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </ParallaxSection>

      {/* ══ CRAFT ═════════════════════════════════════════════ */}
      <section ref={craftRef} className="relative bg-[#0d0b08]">
        <div className="max-w-7xl mx-auto px-8 py-28 grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Left — parallax image */}
          <div className="relative overflow-hidden rounded-sm min-h-[520px] lg:min-h-[680px] mb-12 lg:mb-0 lg:mr-14">
            <motion.img
              style={{ y: craftImgY }}
              src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=85&w=900"
              className="absolute w-[140%] h-[140%] object-cover object-center"
              style={{ top: "-20%", left: "-20%", y: craftImgY }}
              alt="Craftsman"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/20" />
            {/* Badge */}
            <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md border border-amber-700/40 px-6 py-4 rounded-sm">
              <p className="jost text-[9px] text-amber-200/50 tracking-widest uppercase mb-1">
                Founded
              </p>
              <p className="cg text-4xl text-amber-300 font-light">1984</p>
            </div>
          </div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:pl-6"
          >
            <span className="jost text-[9px] text-amber-400 tracking-[0.5em] uppercase flex items-center gap-3 mb-8">
              <span className="w-6 h-px bg-amber-600/60" /> Our Philosophy
            </span>
            <h2
              className="cg font-light text-white leading-[0.92] mb-8"
              style={{
                fontSize: "clamp(40px,5vw,72px)",
                textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              }}
            >
              Weaving the
              <br />
              <em style={{ color: "#E8B84B", fontStyle: "italic" }}>
                Impossible.
              </em>
            </h2>
            <div className="w-10 h-px bg-amber-600/40 mb-8" />
            <p className="jost text-white/65 font-light leading-[1.9] text-[15px] mb-5">
              At Rugsifi, a carpet is never just a floor covering. It is a
              canvas of cultural history, a mathematical marvel of thousands of
              knots, and a testament to the endurance of the human hand.
            </p>
            <p className="jost text-white/45 font-light leading-[1.9] text-[14px] mb-10">
              Founded on the principles of fair trade and sustainable artistry,
              we bridge the gap between rural master-weavers and global luxury
              spaces. Every thread is sourced ethically.
            </p>
            <div className="flex gap-10 py-7 border-y border-white/8 mb-10">
              {[
                ["200k+", "Knots per sqm"],
                ["6–18mo", "Per rug"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="cg text-3xl text-amber-300 font-light">{n}</p>
                  <p className="jost text-[9px] tracking-widest uppercase text-white/30 mt-1">
                    {l}
                  </p>
                </div>
              ))}
            </div>
            <button className="group flex items-center gap-5 jost text-[10px] uppercase tracking-[0.35em] text-white/45 hover:text-amber-300 transition-colors duration-300 w-fit">
              Explore the Process
              <span className="block h-px bg-white/20 w-12 group-hover:w-20 group-hover:bg-amber-500/60 transition-all duration-500" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ══ TIMELINE ══════════════════════════════════════════ */}
      <ParallaxSection
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=85&w=2000"
        overlay="linear-gradient(to right,rgba(6,5,3,0.96) 0%,rgba(6,5,3,0.90) 55%,rgba(6,5,3,0.55) 100%)"
        minH="auto"
      >
        <div className="max-w-5xl mx-auto px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="jost text-[9px] text-amber-400 tracking-[0.5em] uppercase flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-amber-600/60" /> Our Evolution
            </span>
            <h3 className="cg text-5xl font-light text-white leading-tight">
              Four decades.
              <br />
              <em style={{ color: "#E8B84B", fontStyle: "italic" }}>
                One thread.
              </em>
            </h3>
          </motion.div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-amber-600/70 via-amber-600/20 to-transparent hidden md:block" />
            <div className="space-y-16">
              {[
                {
                  year: "1984",
                  title: "The First Loom",
                  desc: "A humble beginning in the heart of Bhadohi with just two master weavers and a dream of quality.",
                  icon: <Anchor size={14} />,
                },
                {
                  year: "1998",
                  title: "Global Horizons",
                  desc: "Opening our first international gallery in Paris, bringing Indian craftsmanship to the world stage.",
                  icon: <Compass size={14} />,
                },
                {
                  year: "2012",
                  title: "Sustainable Shift",
                  desc: "Achieved 100% natural dye certification and launched our artisan wellness program.",
                  icon: <Palmtree size={14} />,
                },
                {
                  year: "2024",
                  title: "Digital Heritage",
                  desc: "Introducing Rugsifi: A new digital-first era for the world's finest hand-knotted legacies.",
                  icon: <History size={14} />,
                },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                  className="flex gap-8 items-start group"
                >
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full border border-amber-600/50 bg-black/70 backdrop-blur flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-900/40 transition-all duration-500 z-10">
                    <span className="text-amber-400">{m.icon}</span>
                  </div>
                  <div className="flex gap-8 flex-wrap md:flex-nowrap pt-1">
                    <p className="cg text-4xl text-amber-500/60 font-light w-24 flex-shrink-0 group-hover:text-amber-400 transition-colors duration-500">
                      {m.year}
                    </p>
                    <div>
                      <h4 className="jost text-[11px] uppercase tracking-[0.3em] text-white font-medium mb-3">
                        {m.title}
                      </h4>
                      <p className="jost text-white/55 text-sm font-light leading-relaxed max-w-sm">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* ══ QUOTE ═════════════════════════════════════════════ */}
      <ParallaxSection
        image="https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=85&w=2000"
        overlay="linear-gradient(to bottom,rgba(4,3,2,0.75) 0%,rgba(4,3,2,0.68) 100%)"
        minH="65vh"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-8 py-32 text-center"
        >
          <span
            className="cg block text-[110px] leading-none select-none -mb-8"
            style={{ color: "rgba(232,184,75,0.2)" }}
          >
            "
          </span>
          <p
            className="cg italic font-light text-white leading-[1.25]"
            style={{
              fontSize: "clamp(28px,4.5vw,58px)",
              textShadow:
                "0 4px 40px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)",
            }}
          >
            The machine makes products,
            <br />
            but the hand makes{" "}
            <em style={{ fontStyle: "normal", color: "#E8B84B" }}>legacies</em>.
          </p>
          <div className="mt-14 flex flex-col items-center gap-4">
            <div className="w-14 h-px bg-amber-500/40" />
            <p className="jost text-[9px] tracking-[0.5em] text-white/40 uppercase">
              Master Weaver — Mirzapur
            </p>
          </div>
        </motion.div>
      </ParallaxSection>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <ParallaxSection
        image="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=85&w=2000"
        overlay="linear-gradient(to bottom,rgba(5,4,2,0.82) 0%,rgba(5,4,2,0.90) 100%)"
        minH="auto"
      >
        <div className="max-w-4xl mx-auto px-8 py-36 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span className="jost text-[9px] text-amber-400 tracking-[0.5em] uppercase flex items-center justify-center gap-3 mb-8">
              <span className="w-6 h-px bg-amber-600/50" /> Join the Legacy{" "}
              <span className="w-6 h-px bg-amber-600/50" />
            </span>
            <h2
              className="cg font-light text-white leading-tight mb-6"
              style={{
                fontSize: "clamp(38px,6vw,80px)",
                textShadow: "0 4px 40px rgba(0,0,0,0.7)",
              }}
            >
              Become part of
              <br />
              <em style={{ color: "#E8B84B", fontStyle: "italic" }}>
                the story.
              </em>
            </h2>
            <p className="jost text-white/55 font-light mb-16 max-w-md mx-auto text-sm leading-relaxed">
              Join us in preserving the finest craftsmanship for the generations
              to come.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-12 py-5 jost text-[10px] uppercase tracking-[0.4em] text-black font-semibold"
                style={{ background: "#C8922A" }}
                onMouseEnter={(e) => (e.target.style.background = "#d4a042")}
                onMouseLeave={(e) => (e.target.style.background = "#C8922A")}
              >
                The Collections
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-12 py-5 border border-white/20 jost text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-white hover:border-amber-500/50 transition-all duration-300"
              >
                Visit Our Loom
              </motion.button>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Footer */}
      <div className="bg-[#060503] border-t border-white/5 py-8 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="cg text-2xl font-light"
          style={{ color: "rgba(200,146,42,0.55)" }}
        >
          Rugsifi
        </p>
        <p className="jost text-[9px] text-white/20 tracking-widest uppercase">
          © 2024 · Preserving Heritage · Bhadohi, India
        </p>
        <div className="flex gap-6">
          {["Heritage", "Artisans", "Collections"].map((l) => (
            <button
              key={l}
              className="jost text-[9px] text-white/25 hover:text-amber-400 uppercase tracking-widest transition-colors duration-200"
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
