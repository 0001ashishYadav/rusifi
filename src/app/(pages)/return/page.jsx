"use client"; // Remove this line if using the old 'pages' directory

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  ShieldCheck,
  AlertTriangle,
  CreditCard,
  ChevronDown,
  Mail,
  MessageSquare,
  PackageCheck,
  Truck,
  FileText,
} from "lucide-react";

// --- Data Structure ---
const returnSteps = [
  {
    title: "Initiate Request",
    desc: "Email us at customercare@RugSifi.com within 7 days of delivery with your Order ID and photos of the product.",
    icon: <Mail className="w-6 h-6" />,
  },
  {
    title: "Quality Review",
    desc: "Our team will review the request. If approved, we will arrange a reverse pickup from your address.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Product Pickup",
    desc: "Ensure the item is in original packaging with all tags intact. Our partner will collect the parcel.",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    title: "Refund Process",
    desc: "Once received and inspected at our warehouse, your refund will be processed within 7-10 working days.",
    icon: <CreditCard className="w-6 h-6" />,
  },
];

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-amber-700 transition-colors group"
      >
        <span className="text-lg font-medium text-gray-800 group-hover:pl-2 transition-all duration-300">
          {title}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ReturnsPage() {
  const containerVars = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Hero Header */}
      <section className="bg-[#FAF9F6] py-20 px-6 text-center border-b border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
            RETURNS & EXCHANGES
          </h1>
          <p className="text-amber-700 uppercase tracking-[0.2em] text-xs font-bold mb-8">
            Your satisfaction is our commitment
          </p>
          <div className="w-16 h-1 bg-amber-600 mx-auto" />
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Quick Policy Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-gray-50 rounded-2xl border border-gray-100"
          >
            <RotateCcw className="w-10 h-10 text-amber-600 mb-6" />
            <h3 className="text-xl font-semibold mb-2">7-Day Window</h3>
            <p className="text-gray-500 text-sm">
              Initiate a return or exchange within 7 days of receiving your
              order.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-gray-50 rounded-2xl border border-gray-100"
          >
            <PackageCheck className="w-10 h-10 text-amber-600 mb-6" />
            <h3 className="text-xl font-semibold mb-2">Easy Pickup</h3>
            <p className="text-gray-500 text-sm">
              We provide complimentary reverse pickups for all domestic orders.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-gray-50 rounded-2xl border border-gray-100"
          >
            <ShieldCheck className="w-10 h-10 text-amber-600 mb-6" />
            <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
            <p className="text-gray-500 text-sm">
              Every piece is inspected to ensure it meets our heritage
              standards.
            </p>
          </motion.div>
        </div>

        {/* Process Steps */}
        <section className="mb-32">
          <h2 className="text-2xl font-light tracking-widest text-center uppercase mb-16 italic">
            How it works
          </h2>
          <motion.div
            variants={containerVars}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-12 relative"
          >
            {returnSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVars}
                className="relative text-center group"
              >
                <div className="w-16 h-16 bg-white border-2 border-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-amber-600 transition-colors duration-500">
                  <span className="text-amber-600">{step.icon}</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-3 uppercase text-xs tracking-widest">
                  Step {idx + 1}
                </h4>
                <p className="font-semibold mb-2">{step.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Important Notice / Non-Returnable */}
        <div className="bg-amber-50 rounded-3xl p-8 md:p-12 mb-24 flex flex-col md:flex-row gap-8 items-center border border-amber-100">
          <div className="bg-amber-600 p-4 rounded-2xl text-white">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-900 mb-2 uppercase tracking-wide">
              Important Note
            </h3>
            <p className="text-amber-800/80 max-w-2xl text-sm md:text-base leading-relaxed">
              Custom-sized rugs, bespoke orders, and items purchased during
              clearance sales are <strong>not eligible</strong> for returns or
              exchanges. Minor variations in color and weave are natural
              characteristics of handcrafted rugs and are not considered
              defects.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-2xl font-light tracking-widest uppercase mb-10">
            Frequently Asked Questions
          </h2>
          <AccordionItem title="What items can be returned?">
            <p>
              Standard size carpets, cushions, and throws can be returned if
              they are unused, unwashed, and in their original packaging with
              tags intact. Please ensure the product is in the same condition as
              received.
            </p>
          </AccordionItem>

          <AccordionItem title="Can I exchange for a different size?">
            <p>
              Yes, we offer one-time exchanges for size or different designs of
              equal or higher value. If the new item is of higher value, the
              difference must be paid before dispatch.
            </p>
          </AccordionItem>

          <AccordionItem title="International Returns Policy">
            <p>
              Currently, we do not accept returns or exchanges for international
              orders due to the high costs of shipping and import duties. We
              recommend reaching out to our team for detailed photos/videos
              before placing a global order.
            </p>
          </AccordionItem>

          <AccordionItem title="How long does the refund take?">
            <p>
              Once your return reaches our warehouse and passes the quality
              check, we initiate the refund within 48 hours. The amount will
              reflect in your original payment method within 7-10 business days.
            </p>
          </AccordionItem>
        </div>

        {/* Contact Footer */}
        <div className="bg-black text-white rounded-3xl p-12 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-amber-600" />
          <h3 className="text-3xl font-light mb-4">Need further assistance?</h3>
          <p className="text-gray-400 mb-10 max-w-md mx-auto">
            Our dedicated care team is available Monday to Saturday, 10 AM to 6
            PM IST.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="flex items-center justify-center gap-3 border border-gray-700 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all">
              <Mail className="w-5 h-5" />
              <span>Email Support</span>
            </button>
            <button className="flex items-center justify-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-full hover:bg-amber-700 transition-all">
              <MessageSquare className="w-5 h-5" />
              <span>Chat with Us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
