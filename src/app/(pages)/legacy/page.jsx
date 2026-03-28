"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  History,
  Users,
  Globe2,
  Palmtree,
  Award,
  Anchor,
  Compass,
  Heart,
  MoveDown,
} from "lucide-react";

const LegacyPage = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 400]);

  // Animation Variants
  const textReveal = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const imageReveal = {
    initial: { scale: 1.1, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: "circOut" },
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] overflow-x-hidden">
      {/* --- HERO: THE SOUL OF RUGSIFI --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        <motion.div
          style={{ y: yRange }}
          className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1615873968403-89e068629275?auto=format&fit=crop&q=80')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0A0A0A] z-10" />

        <div className="relative z-20 text-center px-6">
          <motion.p
            initial={{ opacity: 0, tracking: "0.5em" }}
            animate={{ opacity: 1, tracking: "0.2em" }}
            className="text-amber-500 uppercase font-bold text-xs mb-6"
          >
            Since 1984
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-none"
          >
            A THREAD <br /> THROUGH{" "}
            <span className="italic font-light">TIME</span>
          </motion.h1>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-20 flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-[10px] uppercase tracking-widest">
              The Journey
            </span>
            <MoveDown size={20} />
          </motion.div>
        </div>
      </section>

      {/* --- STATS: LEGACY IN NUMBERS --- */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Generations", value: "3+", icon: <Users size={20} /> },
            { label: "Artisans", value: "12k", icon: <Heart size={20} /> },
            { label: "Countries", value: "45+", icon: <Globe2 size={20} /> },
            { label: "Awards", value: "18", icon: <Award size={20} /> },
          ].map((stat, i) => (
            <motion.div key={i} {...textReveal} transition={{ delay: i * 0.1 }}>
              <div className="text-amber-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-serif mb-1">{stat.value}</h4>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- NARRATIVE: THE CRAFT --- */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            {...imageReveal}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80"
              className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
              alt="Craftsmanship"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
          </motion.div>

          <motion.div {...textReveal} className="space-y-8">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs italic">
              Our Philosophy
            </span>
            <h2 className="text-5xl font-serif leading-tight">
              Weaving the <br /> Impossible.
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              At Rugsifi, a carpet is never just a floor covering. It is a
              canvas of cultural history, a mathematical marvel of thousands of
              knots, and a testament to the endurance of the human hand.
            </p>
            <p className="text-gray-500 font-light leading-relaxed">
              Founded on the principles of fair trade and sustainable artistry,
              we bridge the gap between rural master-weavers and global luxury
              spaces. Every thread is sourced ethically, and every knot is tied
              with intention.
            </p>
            <div className="pt-6">
              <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest group">
                Explore the Process{" "}
                <div className="w-12 h-px bg-amber-600 group-hover:w-20 transition-all" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TIMELINE: MILESTONES --- */}
      <section className="bg-[#121212] text-white py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <h3 className="text-center text-3xl font-serif mb-24 tracking-tight">
            Our Evolution
          </h3>

          <div className="space-y-32">
            {[
              {
                year: "1984",
                title: "The First Loom",
                desc: "A humble beginning in the heart of Bhadohi with just two master weavers and a dream of quality.",
                icon: <Anchor size={20} />,
              },
              {
                year: "1998",
                title: "Global Horizons",
                desc: "Opening our first international gallery in Paris, bringing Indian craftsmanship to the world stage.",
                icon: <Compass size={20} />,
              },
              {
                year: "2012",
                title: "Sustainable Shift",
                desc: "Achieved 100% natural dye certification and launched our artisan wellness program.",
                icon: <Palmtree size={20} />,
              },
              {
                year: "2024",
                title: "Digital Heritage",
                desc: "Introducing Rugsifi: A new digital-first era for the world's finest hand-knotted legacies.",
                icon: <History size={20} />,
              },
            ].map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 text-center md:text-right">
                  <div
                    className={`flex flex-col ${idx % 2 !== 0 ? "md:items-start md:text-left" : "md:items-end"}`}
                  >
                    <span className="text-4xl font-serif text-amber-500 mb-2">
                      {milestone.year}
                    </span>
                    <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center border-4 border-[#121212] shadow-2xl">
                  {milestone.icon}
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ARTISAN QUOTE --- */}
      <section className="py-40 text-center px-6">
        <motion.div {...textReveal} className="max-w-3xl mx-auto">
          <span className="text-5xl text-amber-300 font-serif leading-none opacity-50 block mb-8">
            “
          </span>
          <p className="text-3xl md:text-5xl font-serif italic text-gray-800 leading-snug mb-10">
            The machine makes products, <br />
            but the hand makes <span className="text-amber-700">legacies</span>.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-px bg-gray-200" />
            <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-gray-400">
              Master Weaver, Mirzapur
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="bg-amber-50 py-24 px-6 border-t border-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">
            Become part of the story.
          </h2>
          <p className="text-gray-500 mb-12 font-light">
            Join us in preserving the finest craftsmanship for the generations
            to come.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="px-12 py-5 bg-[#1A1A1A] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-black transition-all">
              The Collections
            </button>
            <button className="px-12 py-5 border border-gray-200 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
              Visit Our Loom
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegacyPage;
