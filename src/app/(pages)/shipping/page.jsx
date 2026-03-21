"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Globe,
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
  Mail,
  Phone,
  ChevronDown,
} from "lucide-react";

// --- Data Structure ---
const shippingData = {
  domestic: [
    {
      title: "Carpet Orders",
      dispatch: "4-5 working days",
      delivery: "10-12 working days",
      icon: <Package className="w-6 h-6" />,
    },
    {
      title: "Cushion Orders",
      dispatch: "2-3 working days",
      delivery: "7-9 working days",
      icon: <Package className="w-6 h-6" />,
    },
    {
      title: "Throw Orders",
      dispatch: "2-3 working days",
      delivery: "7-9 working days",
      icon: <Package className="w-6 h-6" />,
    },
    {
      title: "Furniture Orders",
      dispatch: "N/A",
      delivery: "15 days from date of order",
      icon: <Package className="w-6 h-6" />,
    },
  ],
  international: [
    { label: "Dispatch Time", value: "5-6 working days from the order date." },
    {
      label: "Delivery Time",
      value: "15-20 working days. May vary based on customs processing.",
    },
    {
      label: "Import Duties",
      value: "Responsibility of the customer, settled with local customs.",
    },
    {
      label: "Payment",
      value: "Choose Razorpay/PayPal. Payments made in your selected currency.",
    },
  ],
};

// --- Sub-Components ---

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-10 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-light tracking-widest uppercase text-gray-800"
    >
      {title}
    </motion.h2>
    <div className="w-12 h-1 bg-amber-600 mx-auto mt-4" />
    {subtitle && (
      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-amber-700 transition-colors"
      >
        <span className="text-lg font-medium">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-5 h-5" />
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
            <div className="pb-6 text-gray-600 leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Page Component ---

export default function ShippingPage() {
  const [activeTab, setActiveTab] = useState("domestic");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-[#F9F8F6]">
        <motion.div {...fadeIn} className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4 text-gray-800">
            SHIPPING
          </h1>
          <p className="text-amber-700 font-medium tracking-widest uppercase text-sm">
            Reliable Delivery Worldwide
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-16">
        {/* Free Shipping Alert */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="bg-amber-50 border border-amber-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 mb-20"
        >
          <div className="bg-amber-600 p-4 rounded-full text-white">
            <Truck className="w-8 h-8" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-amber-900">
              Free Domestic Shipping
            </h3>
            <p className="text-amber-800/80">
              We offer complimentary shipping on every item purchased through
              our website within India.
            </p>
          </div>
        </motion.div>

        {/* Timeline Tabs */}
        <SectionHeader
          title="Delivery Timelines"
          subtitle="Choose your region to see estimated arrival times for your orders."
        />

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full flex">
            <button
              onClick={() => setActiveTab("domestic")}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "domestic" ? "bg-white shadow-md text-gray-900" : "text-gray-500"}`}
            >
              Domestic (India)
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "international" ? "bg-white shadow-md text-gray-900" : "text-gray-500"}`}
            >
              International
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <AnimatePresence mode="wait">
            {activeTab === "domestic" ? (
              shippingData.domestic.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-t-amber-600"
                >
                  <div className="text-amber-600 mb-4">{item.icon}</div>
                  <h4 className="font-bold text-lg mb-4">{item.title}</h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>Dispatch: {item.dispatch}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-gray-400" />
                      <span>Delivery: {item.delivery}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full bg-gray-900 text-white rounded-2xl p-10 grid md:grid-cols-2 gap-10"
              >
                <div className="space-y-8">
                  {shippingData.international.map((item) => (
                    <div key={item.label}>
                      <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="text-lg font-light">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10">
                  <Globe className="w-12 h-12 text-amber-400 mb-4" />
                  <h4 className="text-xl font-medium mb-4">Global Reach</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We ship to over 50 countries. Please note that global
                    transactions are processed via Razorpay and PayPal. While
                    cart totals show in INR, you can complete the payment in
                    your local currency.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Detailed Info Accordion */}
        <div className="max-w-3xl mx-auto space-y-2">
          <AccordionItem title="Custom Orders">
            <p>
              For custom rugs, delivery depends on the production timeline. The
              greater the intricacy of the rug, the longer the delivery
              timeline. For ease of calculation, we estimate that it takes 1
              week per 2 inches of a rug for a 156 knot rug.
            </p>
          </AccordionItem>

          <AccordionItem title="Order Confirmation & Tracking">
            <p className="mb-4 text-gray-900 font-medium">
              Once successfully placed, you will receive notifications via:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-500" /> Email
                Confirmation
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-500" /> WhatsApp
                Update
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-500" /> Tracking ID
                (sent once shipped)
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Taxes & Additional Fees">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold mb-2">India</h5>
                <p className="text-sm">
                  Final price at checkout includes all taxes. Express shipping
                  is available and will be charged at actuals.
                </p>
              </div>
              <div>
                <h5 className="font-bold mb-2">International</h5>
                <p className="text-sm">
                  Shipping fees, import duties, and local taxes are applicable
                  based on your country's laws. These are paid directly to our
                  shipping partners at the time of delivery.
                </p>
              </div>
            </div>
          </AccordionItem>
        </div>

        {/* Help / Contact Footer */}
        <div className="mt-24 bg-[#1a1a1a] text-white rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-amber-200 via-amber-600 to-amber-200" />
          <h3 className="text-2xl font-light mb-8">Still have questions?</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
            <a
              href="tel:+919559140222"
              className="flex items-center gap-3 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-5 h-5 text-amber-600" />
              <span>+91 9559140222</span>
            </a>
            <div className="hidden md:block w-px h-6 bg-gray-700" />
            <a
              href="mailto:customercare@obeetee.com"
              className="flex items-center gap-3 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-5 h-5 text-amber-600" />
              <span>customercare@obeetee.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
