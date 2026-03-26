"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Eye,
  Lock,
  UserCheck,
  Cookie,
  Mail,
  ArrowRight,
  Clock,
  ExternalLink,
} from "lucide-react";

// --- Privacy Policy Content ---
const policySections = [
  {
    id: "overview",
    title: "1. Overview",
    icon: <ShieldCheck className="w-5 h-5" />,
    content:
      "At RugSifi, your privacy is a priority. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.RugSifi.in. We are committed to maintaining the trust and confidence of our visitors.",
  },
  {
    id: "collection",
    title: "2. Information We Collect",
    icon: <Eye className="w-5 h-5" />,
    content:
      "When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, and time zone. Additionally, as you make a purchase, we collect your name, billing address, shipping address, and payment information (including credit card numbers).",
  },
  {
    id: "usage",
    title: "3. How We Use Your Data",
    icon: <UserCheck className="w-5 h-5" />,
    content:
      "We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this information to communicate with you and screen our orders for potential risk or fraud.",
  },
  {
    id: "sharing",
    title: "4. Sharing Information",
    icon: <ExternalLink className="w-5 h-5" />,
    content:
      "We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store. We also use Google Analytics to help us understand how our customers use the Site.",
  },
  {
    id: "cookies",
    title: "5. Cookies & Tracking",
    icon: <Cookie className="w-5 h-5" />,
    content:
      "Cookies are data files that are placed on your device or computer and often include an anonymous unique identifier. We use cookies to enhance your browsing experience, remember your preferences, and track the effectiveness of our marketing campaigns.",
  },
  {
    id: "security",
    title: "6. Data Security",
    icon: <Lock className="w-5 h-5" />,
    content:
      "We take reasonable precautions and follow industry best practices to make sure your personal information is not inappropriately lost, misused, accessed, disclosed, altered or destroyed. Your payment information is encrypted using secure socket layer technology (SSL).",
  },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("overview");

  // Scroll-Spy Logic: Highlights the sidebar based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      policySections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-amber-100">
      {/* --- HERO HEADER --- */}
      <section className="bg-white border-b border-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 text-amber-600 font-bold tracking-[0.3em] text-xs uppercase mb-4">
              <ShieldCheck size={16} /> Privacy & Trust
            </div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Your data belongs to you. We are committed to transparency
              regarding how we collect, use, and protect your personal
              information.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-full border border-gray-100"
          >
            <Clock size={14} /> Last Updated: March 21, 2024
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-20">
        {/* --- STICKY SIDEBAR --- */}
        <aside className="lg:w-1/4 hidden lg:block sticky top-32 h-fit">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-8 px-4">
            Sections
          </h3>
          <nav className="space-y-2">
            {policySections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`w-full text-left px-5 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 group ${
                  activeSection === section.id
                    ? "bg-amber-50 text-amber-800 shadow-sm border border-amber-100"
                    : "text-gray-400 hover:text-gray-800"
                }`}
              >
                <span
                  className={`transition-colors ${activeSection === section.id ? "text-amber-600" : "text-gray-300"}`}
                >
                  {section.icon}
                </span>
                {section.title}
                <ArrowRight
                  className={`ml-auto w-3 h-3 transition-transform ${activeSection === section.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-50"}`}
                />
              </button>
            ))}
          </nav>

          <div className="mt-12 p-8 bg-[#1A1A1A] rounded-4xl text-white relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <p className="text-xs text-amber-500 font-bold tracking-widest uppercase mb-4">
              Concierge Support
            </p>
            <p className="text-sm font-light leading-relaxed text-gray-300 mb-6">
              Have questions regarding your personal data or rights?
            </p>
            <a
              href="mailto:customercare@RugSifi.com"
              className="flex items-center gap-2 text-sm font-bold hover:text-amber-400 transition-colors"
            >
              <Mail size={16} /> Contact DPO <ArrowRight size={14} />
            </a>
          </div>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="lg:w-3/4">
          <div className="space-y-24">
            {policySections.map((section) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-amber-600">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-light tracking-tight">
                    {section.title}
                  </h2>
                </div>

                <div className="prose prose-amber max-w-none">
                  <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">
                    {section.content}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-gray-100 pl-6">
                    This section ensures compliance with the latest GDPR and IT
                    Act standards. RugSifi Private Limited reserves the right to
                    update this policy to reflect changes to our practices or
                    for other operational, legal, or regulatory reasons.
                  </p>
                </div>
              </motion.section>
            ))}
          </div>

          {/* --- FOOTER NOTICE --- */}
          <footer className="mt-32 pt-16 border-t border-gray-100">
            <div className="bg-gray-50 p-10 rounded-4xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h4 className="text-xl font-bold mb-2">Consent</h4>
                <p className="text-gray-500 text-sm max-w-md">
                  By continuing to use our website, you acknowledge that you
                  have read and understood our Privacy Policy and Cookie Policy.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-10 py-4 bg-black text-white rounded-full text-xs font-bold tracking-widest hover:bg-amber-700 transition-all uppercase">
                  I Accept
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
