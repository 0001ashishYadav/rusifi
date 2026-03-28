"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  XCircle,
  FileText,
  History,
  Search,
  ArrowRight,
  HandIcon,
  HelpCircle,
  Mail,
  Phone,
} from "lucide-react";

// --- Warranty Data ---
const coverageItems = [
  {
    title: "Manufacturing Defects",
    desc: "Covers structural integrity, weaving flaws, and fringe issues occurring during production.",
    covered: true,
  },
  {
    title: "Color Fastness",
    desc: "Guaranteed against premature fading under normal indoor lighting conditions.",
    covered: true,
  },
  {
    title: "Material Purity",
    desc: "Certification that the wool, silk, or cotton used is 100% authentic as per your invoice.",
    covered: true,
  },
  {
    title: "Normal Wear & Tear",
    desc: "Flattening of pile in high-traffic areas or natural fiber shedding over time.",
    covered: false,
  },
  {
    title: "Accidental Damage",
    desc: "Spills, pet stains, burns, or cuts caused by sharp objects or furniture movement.",
    covered: false,
  },
  {
    title: "Improper Cleaning",
    desc: "Damage resulting from harsh chemicals or non-professional cleaning methods.",
    covered: false,
  },
];

export default function WarrantyPage() {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-amber-100">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 px-6 bg-[#121212] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-widest mb-8">
            <ShieldCheck size={14} /> The RugSifi Promise
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">
            WARRANTY & <br /> GUARANTEE
          </h1>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Every RugSifi piece is an heirloom in the making. Our warranty
            ensures your investment is protected by generations of
            craftsmanship.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* --- AUTHENTICITY SECTION --- */}
        <motion.div
          {...fadeIn}
          className="bg-white border border-amber-100 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 -mt-32 relative z-20 shadow-2xl shadow-amber-900/5"
        >
          <div className="lg:w-1/2">
            <Award className="w-16 h-16 text-amber-600 mb-8" />
            <h2 className="text-3xl font-light mb-6">
              Certificate of Authenticity
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Upon purchase of an Eligible RugSifi Carpet, you receive a
              Certificate of Authenticity. This document is not just a proof of
              origin—it is your guarantee of quality, knot count accuracy, and
              brand originality.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-amber-600 shrink-0 mt-1"
                  size={18}
                />
                <span className="text-sm font-medium">Valid for 25 Years</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-amber-600 shrink-0 mt-1"
                  size={18}
                />
                <span className="text-sm font-medium">Verified Knot Count</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center italic text-gray-400 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-amber-600/5 group-hover:bg-amber-600/10 transition-colors" />
            <FileText
              size={120}
              strokeWidth={0.5}
              className="text-amber-600 opacity-20"
            />
            <p className="absolute bottom-8 text-xs uppercase tracking-widest font-bold text-amber-900/40">
              Visual Proof of Heritage
            </p>
          </div>
        </motion.div>

        {/* --- COVERAGE COMPARISON --- */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4 uppercase">
              What is Covered?
            </h2>
            <div className="w-12 h-1 bg-amber-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 rounded-2xl border transition-all duration-300 ${item.covered ? "bg-white border-gray-100 hover:border-emerald-200" : "bg-gray-50/50 border-transparent opacity-70"}`}
              >
                <div className="mb-6 flex justify-between items-start">
                  {item.covered ? (
                    <CheckCircle2 className="text-emerald-600" size={28} />
                  ) : (
                    <XCircle className="text-gray-300" size={28} />
                  )}
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${item.covered ? "bg-emerald-50 text-emerald-700" : "bg-gray-200 text-gray-500"}`}
                  >
                    {item.covered ? "In Warranty" : "Exclusion"}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- WARRANTY REGISTRATION FORM --- */}
        <section className="py-24 max-w-5xl mx-auto">
          <div className="bg-[#1A1A1A] text-white rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/3 bg-amber-600 p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Register Your Warranty
                </h3>
                <p className="text-amber-100 text-sm leading-relaxed opacity-80">
                  Ensure your rug is protected. Register within 30 days of
                  purchase to activate your heritage coverage.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-amber-950">
                  <div className="w-8 h-8 rounded-full bg-amber-950 text-amber-600 flex items-center justify-center">
                    1
                  </div>{" "}
                  Personal Info
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-amber-200">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-amber-900 flex items-center justify-center">
                    2
                  </div>{" "}
                  Purchase Details
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 p-12 bg-white text-gray-900">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="w-full border-b border-gray-200 py-3 outline-none focus:border-amber-600 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="w-full border-b border-gray-200 py-3 outline-none focus:border-amber-600 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          Invoice Number
                        </label>
                        <input
                          type="text"
                          className="w-full border-b border-gray-200 py-3 outline-none focus:border-amber-600 transition-colors"
                          placeholder="OB-2024-XXXX"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          Date of Purchase
                        </label>
                        <input
                          type="date"
                          className="w-full border-b border-gray-200 py-3 outline-none focus:border-amber-600 transition-colors"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(true)}
                      className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-amber-700 transition-all flex items-center justify-center gap-3"
                    >
                      Activate Warranty <ArrowRight size={16} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">
                      Registration Successful!
                    </h4>
                    <p className="text-gray-500 text-sm mb-8">
                      A confirmation email has been sent to your inbox.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-amber-600 text-xs font-bold uppercase tracking-widest hover:underline"
                    >
                      Register another product
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* --- HELP & CLAIMS --- */}
        <section className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-white border border-gray-100 rounded-3xl">
            <HelpCircle className="w-10 h-10 text-amber-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">How to file a claim?</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              If you believe your product has a manufacturing defect, please
              email us with clear photos of the issue, your invoice copy, and a
              photo of the Certificate of Authenticity. Our experts will respond
              within 48 hours.
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:customercare@RugSifi.com"
                className="text-sm font-bold flex items-center gap-2 hover:text-amber-600 transition-colors"
              >
                <Mail size={16} /> customercare@RugSifi.com
              </a>
              <a
                href="tel:+919559140222"
                className="text-sm font-bold flex items-center gap-2 hover:text-amber-600 transition-colors"
              >
                <Phone size={16} /> +91 9559140222
              </a>
            </div>
          </div>

          <div className="p-10 bg-amber-50 rounded-3xl flex flex-col justify-center border border-amber-100">
            <h4 className="text-lg font-bold text-amber-900 mb-2">
              Pro-Tip for Longevity
            </h4>
            <p className="text-amber-800/70 text-sm leading-relaxed italic mb-6">
              "Regular vacuuming and professional cleaning every 2 years are the
              best ways to ensure your carpet stays within warranty guidelines."
            </p>
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-900 hover:gap-4 transition-all">
              View Care Guide <ArrowRight size={14} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
