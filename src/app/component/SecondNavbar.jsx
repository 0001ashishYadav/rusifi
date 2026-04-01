"use client";
import React, { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "CARPETS", href: "/carpets" },
  { label: "CUSHIONS", href: "/cushions" },
  { label: "BEDDING", href: "/bedding" },
  { label: "FURNITURE", href: "/furniture" },
  { label: "PROUD TO BE INDIAN", href: "/indian" },
  { label: "COLLABORATIONS", href: "/collab" },
  { label: "BESPOKE & CUSTOM", href: "/custom" },
  { label: "OUR STORY", href: "/story" },
  { label: "STORES & CONNECT", href: "/stores" },
  { label: "SALE", href: "/sale", isRed: true },
];

const SecondNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-montserrat w-full sticky top-0 z-50 bg-[#f5f1eb] shadow-sm">
      {/* Announcement Bar */}
      <div className="bg-[#1a1a1a] text-center py-2 px-4 overflow-hidden">
        <span className="text-[10px] tracking-[0.15em] text-[#e8d5b7] whitespace-nowrap">
          FREE SHIPPING ABOVE ₹15,000
          <span className="text-[#c9a96e] mx-2">·</span>
          HANDCRAFTED IN INDIA SINCE 1960
          <span className="text-[#c9a96e] mx-2">·</span>
          NEW: VIRAASAT COLLECTION
        </span>
      </div>

      {/* Identity Row */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3 border-b border-[#e0d8ce]">
        {/* Left */}
        <div className="hidden md:flex items-center gap-6 text-[#666] text-[11px]">
          <a href="tel:+919810012345">+91-98100-12345</a>
          <a href="#">FIND A STORE</a>
        </div>

        {/* Logo */}
        <div className="text-center leading-none">
          <h1 className="font-cormorant text-[26px] md:text-[30px] tracking-[0.08em] text-[#1a1a1a]">
            RugSifi
          </h1>
          <p className="text-[8px] tracking-[0.35em] text-[#c9a96e]">
            CARPET & HOME
          </p>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-[#333]">
          <span className="cursor-pointer hover:text-black">♡</span>
          <span className="cursor-pointer hover:text-black">👤</span>
          <span className="cursor-pointer hover:text-black">🔍</span>
          <div className="relative cursor-pointer hover:text-black">
            🛒
            <span className="absolute -top-2 -right-2 bg-[#c9a96e] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2 text-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-center border-b border-[#e0d8ce]">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`relative px-4 py-3 text-[11px] tracking-[0.1em] group ${
              item.isRed ? "text-[#c0392b]" : "text-[#1a1a1a]"
            }`}
          >
            {item.label}

            {/* Hover underline */}
            <span
              className={`absolute left-1/2 bottom-0 h-[2px] w-0 group-hover:w-[80%] -translate-x-1/2 transition-all duration-300 ${
                item.isRed ? "bg-[#c0392b]" : "bg-[#c9a96e]"
              }`}
            ></span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f1eb] border-b border-[#e0d8ce]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block px-6 py-3 text-sm border-b ${
                item.isRed ? "text-[#c0392b]" : "text-[#1a1a1a]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SecondNavbar;
