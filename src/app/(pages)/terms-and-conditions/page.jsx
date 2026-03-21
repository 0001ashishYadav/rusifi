"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  Search,
  ChevronRight,
  Printer,
  Download,
  Clock,
  ShieldCheck,
  ArrowUp,
} from "lucide-react";

// --- Legal Content Data ---
const termsData = [
  {
    id: "introduction",
    title: "1. Introduction",
    content:
      "Welcome to Rusifi. These Terms and Conditions govern your use of our website and the purchase of our handcrafted carpets and home decor products. By accessing this site, you agree to be bound by these terms in full.",
  },
  {
    id: "intellectual-property",
    title: "2. Intellectual Property",
    content:
      "All content included on this site, such as text, graphics, logos, button icons, images, and audio clips, is the property of Obeetee Private Limited. The compilation of all content on this site is the exclusive property of Obeetee and protected by international copyright laws.",
  },
  {
    id: "user-account",
    title: "3. User Account & Security",
    content:
      "If you use this site, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. Obeetee reserves the right to refuse service or terminate accounts at its sole discretion.",
  },
  {
    id: "pricing-payments",
    title: "4. Pricing & Payments",
    content:
      "Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the products.",
  },
  {
    id: "shipping-delivery",
    title: "5. Shipping & Delivery",
    content:
      "Delivery times are estimates and start from the date of shipping, rather than the date of order. Delivery times are to be used as a guide only and are subject to the acceptance and approval of your order. We make every effort to fulfill your order within the estimated timelines.",
  },
  {
    id: "limitations",
    title: "6. Limitation of Liability",
    content:
      "Obeetee shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if Obeetee has been advised of the possibility of such damages.",
  },
  {
    id: "governing-law",
    title: "7. Governing Law",
    content:
      "These terms and conditions are governed by and construed in accordance with the laws of India. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location.",
  },
];

export default function TermsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("introduction");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle Scroll to highlight active section in sidebar
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sections = termsData.map((d) => document.getElementById(d.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredTerms = termsData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans selection:bg-amber-100">
      {/* --- HEADER --- */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-amber-600 p-2 rounded-lg text-white">
              <Scale size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Terms & Conditions
              </h1>
              <div className="flex items-center gap-2 text-xs text-gray-400 mt-1 uppercase tracking-widest">
                <Clock size={12} /> Last Updated: March 2024
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search legal terms..."
              className="w-full bg-gray-50 border border-gray-200 py-3 pl-12 pr-4 rounded-full text-sm outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row gap-16">
        {/* --- SIDEBAR NAVIGATION --- */}
        <aside className="lg:w-1/4 hidden lg:block sticky top-32 h-fit">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
            Navigation
          </h4>
          <nav className="space-y-1">
            {termsData.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${
                  activeSection === item.id
                    ? "bg-amber-50 text-amber-800"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {item.title}
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${activeSection === item.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`}
                />
              </button>
            ))}
          </nav>

          <div className="mt-12 p-6 bg-gray-900 rounded-3xl text-white">
            <ShieldCheck className="text-amber-500 mb-4" size={24} />
            <p className="text-sm font-medium mb-2">Need a PDF copy?</p>
            <p className="text-xs text-gray-400 mb-6">
              Download our full terms for offline reading.
            </p>
            <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-3 rounded-full text-xs font-bold transition-all">
              <Download size={14} /> DOWNLOAD PDF
            </button>
          </div>
        </aside>

        {/* --- CONTENT AREA --- */}
        <div className="lg:w-3/4">
          <AnimatePresence mode="wait">
            {filteredTerms.length > 0 ? (
              <div className="space-y-20">
                {filteredTerms.map((section) => (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="scroll-mt-32"
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <span className="w-8 h-px bg-amber-600 hidden md:block" />
                      {section.title}
                    </h2>
                    <div className="prose prose-amber max-w-none">
                      <p className="text-gray-600 leading-relaxed text-lg font-light">
                        {section.content}
                      </p>
                      {/* Placeholder for more sub-text if needed */}
                      <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </motion.section>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">No results found</h3>
                <p className="text-gray-500">
                  We couldn't find any terms matching "{searchTerm}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* --- FOOTER NOTICE --- */}
          <footer className="mt-32 pt-12 border-t border-gray-100 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm text-gray-400 leading-relaxed max-w-md">
              By using our website, you agree to these terms. Obeetee Private
              Limited reserves the right to update these policies at any time
              without prior notice.
            </div>
            <div className="flex gap-4">
              <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-600">
                <Printer size={18} />
              </button>
              <button className="px-8 py-3 bg-[#1A1A1A] text-white rounded-full text-sm font-bold hover:bg-black transition-all">
                I Understand
              </button>
            </div>
          </footer>
        </div>
      </main>

      {/* --- BACK TO TOP BUTTON --- */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-10 right-10 z-50 bg-amber-600 text-white p-4 rounded-full shadow-2xl hover:bg-amber-700 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
