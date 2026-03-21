"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  RefreshCcw,
  ShieldCheck,
  FileText,
  AlertCircle,
  CheckCircle2,
  Info,
  ChevronRight,
  Phone,
  Mail,
} from "lucide-react";

const BuyBackPage = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-[#FCFBFA] text-[#1A1A1A] font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#0F2A1F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center px-6"
        >
          <span className="text-amber-400 uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            Sustainable Heritage
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">
            THE BUY-BACK <br /> GUARANTEE
          </h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* --- KEY HIGHLIGHTS GRID --- */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-3 gap-8 -mt-32 relative z-20"
        >
          {[
            {
              icon: <Award />,
              title: "UP TO 100% VALUE",
              desc: "Get up to 100% of your invoice price (minus GST) back as store credit.",
            },
            {
              icon: <Calendar />,
              title: "25 YEAR COVERAGE",
              desc: "A promise that lasts a generation. Valid from 3 to 25 years after purchase.",
            },
            {
              icon: <ShieldCheck />,
              title: "CERTIFIED ORIGINAL",
              desc: "Exclusive to Eligible Carpets with greater than 190 knots per square inch.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className="bg-white p-10 shadow-xl rounded-sm border-t-4 border-amber-600 group hover:bg-amber-600 transition-colors duration-500"
            >
              <div className="text-amber-600 mb-6 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-4 group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-amber-50">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- DETAILED SCHEME OVERVIEW --- */}
        <section className="py-24 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-light mb-8 tracking-tight">
              The Certificate of Authenticity
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Obeetee provides a <strong>Certificate of Authenticity</strong>{" "}
              with every Eligible Carpet. This document attests to the design
              and brand's originality, serving as your gateway to the Buy-Back
              Scheme.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 mt-1" />
                <div>
                  <p className="font-bold text-emerald-900 text-sm">
                    ELIGIBILITY CRITERIA
                  </p>
                  <p className="text-emerald-800 text-sm">
                    Applies to Obeetee carpets with {">"}190 knots per square
                    inch purchased on or after 21st August, 2023.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            {...fadeIn}
            className="bg-gray-100 p-8 rounded-2xl relative"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <RefreshCcw size={120} />
            </div>
            <h3 className="text-xl font-bold mb-6">Valuation Terms</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="font-serif text-2xl text-amber-600">01</span>
                <p className="text-sm text-gray-600">
                  Buy-back amount is calculated at up to 100% of invoice price
                  minus GST, subject to carpet health.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="font-serif text-2xl text-amber-600">02</span>
                <p className="text-sm text-gray-600">
                  Scheme activation window: After 3 years up to 25 years from
                  the invoice date.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="font-serif text-2xl text-amber-600">03</span>
                <p className="text-sm text-gray-600">
                  Obeetee holds absolute discretion on determining the final
                  Buy-back Amount.
                </p>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* --- CONDITION & REDEMPTION SECTION --- */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            {...fadeIn}
            className="bg-white border border-gray-200 p-10 rounded-xl"
          >
            <div className="flex items-center gap-3 mb-6 text-red-700">
              <AlertCircle size={24} />
              <h3 className="font-bold uppercase tracking-widest text-sm">
                Health & Inspection
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              The transaction is finalized only after a physical inspection.
              Carpets must be returned without structural or aesthetic damages,
              including:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "No Cut Marks",
                "No Pet Scratches",
                "No Stains",
                "No Burn Marks",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium bg-gray-50 p-3 rounded border border-gray-100"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="bg-[#1A1A1A] text-white p-10 rounded-xl relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 opacity-5">
              <FileText size={200} />
            </div>
            <h3 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-6">
              Redemption Policy
            </h3>
            <div className="space-y-6 text-sm text-gray-300">
              <p>
                Approved buy-backs result in a <strong>Credit Note</strong>{" "}
                issued to the original customer or legal heir.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ChevronRight size={16} className="text-amber-500" /> 1-year
                  validity from issuance.
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight size={16} className="text-amber-500" /> Must be
                  used in a single purchase (no partial balance).
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight size={16} className="text-amber-500" /> Applied
                  to selling price only (cannot adjust GST).
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* --- LEGAL FINE PRINT (ACCORDION STYLE) --- */}
        <motion.div
          {...fadeIn}
          className="max-w-4xl mx-auto border-t border-gray-200 pt-16"
        >
          <h4 className="text-center font-bold text-xs tracking-[0.3em] uppercase mb-12 opacity-50">
            Additional Terms & Conditions
          </h4>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <Info className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
              <div className="text-sm text-gray-500 leading-relaxed space-y-4">
                <p>
                  • The benefits being offered under this Scheme cannot be
                  clubbed with any other offer, discount code, or promotion that
                  Obeetee may be promoting at a given time.
                </p>
                <p>
                  • In the event that the entire value of the Credit Note is not
                  utilised in a single purchase, the balance amount shall be
                  forfeited with no further recourse to the Eligible Customer.
                </p>
                <p>
                  • These terms apply to the certificate of authenticity offer
                  made by Obeetee Private Limited.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- CONTACT CTA --- */}
        <div className="mt-32 text-center bg-emerald-950 text-white rounded-4xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-light mb-8">
              Initiate your Buy-Back process
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
              <a
                href="tel:+919559140222"
                className="flex items-center gap-3 hover:text-amber-400 transition-colors"
              >
                <Phone size={20} className="text-amber-500" />
                <span className="font-medium">+91 9559140222</span>
              </a>
              <div className="hidden md:block w-px h-6 bg-emerald-800" />
              <a
                href="mailto:customercare@obeetee.com"
                className="flex items-center gap-3 hover:text-amber-400 transition-colors"
              >
                <Mail size={20} className="text-amber-500" />
                <span className="font-medium">customercare@obeetee.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyBackPage;
