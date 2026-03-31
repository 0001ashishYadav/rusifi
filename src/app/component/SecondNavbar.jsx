"use client";
import React from "react";

const navItems = [
  { label: "CARPETS" },
  { label: "CUSHIONS" },
  { label: "BEDDING" },
  { label: "FURNITURE" },
  { label: "PROUD TO BE INDIAN" },
  { label: "COLLABORATIONS" },
  { label: "BESPOKE & CUSTOM" },
  { label: "OUR STORY" },
  { label: "STORES & CONNECT" },
  { label: "SALE", isRed: true },
];

const SecondNavbar = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Montserrat:wght@300;400;500;600&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }

        .nav-item-border {
          position: relative;
        }
        .nav-item-border::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: calc(100% - 12px);
          height: 2px;
          background-color: #c9a96e;
          transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center;
        }
        .nav-item-border:hover::after {
          transform: translateX(-50%) scaleX(1);
        }
        .nav-item-border.is-red::after {
          background-color: #c0392b;
        }
      `}</style>

      <div className="font-montserrat w-full">
        {/* ── Announcement Bar ── */}
        <div className="bg-[#1a1a1a] text-center py-2 px-4 overflow-hidden">
          <span className="text-[10.5px] tracking-[0.13em] font-medium text-[#e8d5b7] whitespace-nowrap">
            FREE SHIPPING ABOVE ₹15,000
            <span className="text-[#c9a96e] mx-3">·</span>
            HANDCRAFTED IN INDIA SINCE 1960
            <span className="text-[#c9a96e] mx-3">·</span>
            NEW: VIRAASAT COLLECTION
          </span>
        </div>

        {/* ── Identity Row ── */}
        <div className="bg-[#f5f1eb] flex items-center justify-between px-8 py-3 border-b border-[#e0d8ce]">
          {/* Left */}
          <div className="flex items-center gap-6 text-[#666]">
            <a
              href="tel:+919810012345"
              className="flex items-center gap-1.5 text-[11px] tracking-[0.04em] hover:text-[#1a1a1a] transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5 19.79 19.79 0 0 1 1 2.93 2 2 0 0 1 2.92 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16l.92.92z" />
              </svg>
              +91-98100-12345
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 text-[11px] tracking-[0.04em] hover:text-[#1a1a1a] transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              FIND A STORE
            </a>
          </div>

          {/* Center — Brand */}
          <div className="text-center leading-none select-none">
            <div className="font-cormorant text-[30px] font-normal tracking-[0.08em] text-[#1a1a1a]">
              RugSifi
            </div>
            <div className="text-[8.5px] tracking-[0.35em] text-[#c9a96e] mt-1 font-medium">
              CARPET &amp; HOME
            </div>
          </div>

          {/* Right — Icons */}
          <div className="flex items-center gap-5 text-[#666]">
            <svg
              className="w-[19px] h-[19px] cursor-pointer hover:text-[#1a1a1a] transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <svg
              className="w-[19px] h-[19px] cursor-pointer hover:text-[#1a1a1a] transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <svg
              className="w-[19px] h-[19px] cursor-pointer hover:text-[#1a1a1a] transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <div className="relative cursor-pointer hover:text-[#1a1a1a] transition-colors duration-200">
              <svg
                className="w-[19px] h-[19px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -top-[6px] -right-[7px] bg-[#c9a96e] text-white text-[8px] font-semibold w-3.5 h-3.5 rounded-full flex items-center justify-center leading-none">
                2
              </span>
            </div>
          </div>
        </div>

        {/* ── Nav Row ── */}
        <nav className="bg-[#f5f1eb] border-b border-[#e0d8ce] flex justify-center items-stretch px-4">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={`nav-item-border flex items-center px-3.5 cursor-pointer ${item.isRed ? "is-red" : ""}`}>
              <span
                className={`text-[10px] font-medium tracking-[0.1em] whitespace-nowrap py-[14px] ${
                  item.isRed ? "text-[#c0392b]" : "text-[#1a1a1a]"
                }`}>
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SecondNavbar;
