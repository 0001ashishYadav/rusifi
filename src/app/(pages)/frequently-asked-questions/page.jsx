"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  MessageCircle,
  Truck,
  CreditCard,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Mail,
  Phone,
  X,
} from "lucide-react";

// --- FAQ Data Structure ---
const faqData = [
  {
    category: "Orders",
    icon: <CreditCard className="w-5 h-5" />,
    questions: [
      {
        q: "How do I track my order status?",
        a: "Once your order is shipped, you will receive an email and a WhatsApp message containing your unique Tracking ID. You can use this ID on our courier partner's website to see real-time updates.",
      },
      {
        q: "Can I modify my order after placing it?",
        a: "Modifications are possible within 24 hours of placing the order. Please contact our support team immediately at customercare@RugSifi.com with your Order ID.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major Credit/Debit cards, Net Banking, UPI, and leading mobile wallets. For international orders, we support PayPal and Razorpay.",
      },
    ],
  },
  {
    category: "Shipping",
    icon: <Truck className="w-5 h-5" />,
    questions: [
      {
        q: "Do you offer free shipping?",
        a: "Yes, we offer free domestic shipping on every item purchased through our website within India. For international orders, shipping charges are calculated at checkout.",
      },
      {
        q: "How long does domestic delivery take?",
        a: "Carpet orders are usually delivered within 10-12 working days, while cushions and throws arrive within 7-9 working days from the date of shipping.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to over 50 countries. International delivery typically takes 15-20 working days, depending on customs clearance in your country.",
      },
    ],
  },
  {
    category: "Product Care",
    icon: <Sparkles className="w-5 h-5" />,
    questions: [
      {
        q: "How should I clean my hand-knotted rug?",
        a: "We recommend regular vacuuming with a low-power setting. For spills, blot immediately with a clean white cloth. Professional cleaning is recommended every 1-2 years.",
      },
      {
        q: "Are the colors in the photos accurate?",
        a: "We strive for 100% accuracy, but colors may vary slightly due to screen settings and the natural dyes used in our handcrafted processes.",
      },
      {
        q: "Do the rugs shed?",
        a: "New wool rugs may experience minor shedding for the first few weeks. This is normal and will subside with regular vacuuming.",
      },
    ],
  },
  {
    category: "Returns",
    icon: <RotateCcw className="w-5 h-5" />,
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 7-day return policy for standard items. Products must be unused, in original packaging, and with all tags intact. Custom orders are not eligible for returns.",
      },
      {
        q: "How do I initiate a return?",
        a: "Email us at customercare@RugSifi.com within 7 days of delivery. Include your order number and photos of the product you wish to return.",
      },
    ],
  },
];

// --- Sub-Components ---

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span
          className={`text-lg transition-colors duration-300 ${isOpen ? "text-amber-700 font-medium" : "text-gray-800 hover:text-amber-600"}`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`p-1 rounded-full ${isOpen ? "bg-amber-50 text-amber-600" : "text-gray-400"}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Page Component ---

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  // Filtering Logic
  const filteredData = useMemo(() => {
    return faqData
      .map((cat) => ({
        ...cat,
        questions: cat.questions.filter(
          (q) =>
            (activeCategory === "All" || cat.category === activeCategory) &&
            (q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
              q.a.toLowerCase().includes(searchTerm.toLowerCase())),
        ),
      }))
      .filter((cat) => cat.questions.length > 0);
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans">
      {/* --- HERO SECTION --- */}
      <section className="bg-white pt-24 pb-16 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-600 text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            Support Center
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light tracking-tight mb-10"
          >
            How can we help you?
          </motion.h1>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for questions (e.g. shipping, cleaning...)"
              className="w-full bg-gray-50 border border-gray-200 py-5 pl-14 pr-12 rounded-2xl outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all text-lg shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">
        {/* Sidebar Categories */}
        <aside className="lg:w-1/4 h-fit sticky top-32">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Categories
          </h3>
          <div className="flex flex-wrap lg:flex-col gap-2">
            {["All", ...faqData.map((d) => d.category)].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20"
                    : "bg-white text-gray-500 hover:bg-gray-100"
                }`}
              >
                {cat === "All" ? (
                  <MessageCircle size={18} />
                ) : (
                  faqData.find((f) => f.category === cat).icon
                )}
                {cat}
              </button>
            ))}
          </div>
        </aside>

        {/* FAQ List */}
        <div className="lg:w-3/4">
          <AnimatePresence mode="wait">
            {filteredData.length > 0 ? (
              <motion.div
                key={activeCategory + searchTerm}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-16"
              >
                {filteredData.map((section, sIdx) => (
                  <div key={section.category}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl font-light tracking-tight">
                        {section.category}
                      </h2>
                    </div>
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                      {section.questions.map((item, qIdx) => {
                        const uniqueKey = `${sIdx}-${qIdx}`;
                        return (
                          <AccordionItem
                            key={uniqueKey}
                            question={item.q}
                            answer={item.a}
                            isOpen={openIndex === uniqueKey}
                            onClick={() =>
                              setOpenIndex(
                                openIndex === uniqueKey ? null : uniqueKey,
                              )
                            }
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-medium mb-2">
                  No matching questions
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or category filter.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* --- FOOTER CTA --- */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-amber-900 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20" />

          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Still have questions?
          </h2>
          <p className="text-amber-100/70 mb-12 max-w-xl mx-auto leading-relaxed">
            Our luxury concierge team is available Monday through Saturday,
            10:00 AM to 6:00 PM IST to assist you.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:customercare@RugSifi.com"
              className="flex items-center justify-center gap-3 bg-white text-amber-900 px-10 py-4 rounded-full font-bold text-sm hover:bg-amber-50 transition-all"
            >
              <Mail size={18} /> Email Support
            </a>
            <a
              href="tel:+919559140222"
              className="flex items-center justify-center gap-3 border border-amber-700 bg-amber-800/50 text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-amber-800 transition-all"
            >
              <Phone size={18} /> Call +91 9559140222
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
