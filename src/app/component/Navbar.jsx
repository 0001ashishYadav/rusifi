"use client";

import {
  Menu,
  X,
  Heart,
  User,
  Search,
  ShoppingCart,
  ChevronDown,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkSize();
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile && !isTablet) setIsOpen(false);
  }, [isMobile, isTablet]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const menuItems = [
    {
      name: "Carpets",
      dropdown: [
        {
          title: "Rooms",
          items: [
            "Living Room",
            "Dining Room",
            "Bed Room",
            "Puja Room",
            "Corridors",
          ],
        },
        {
          title: "Size",
          items: [
            "5x3",
            "6x4",
            "8x5",
            "9x6",
            "10x8",
            "12x9",
            "Over Sized",
            "Round",
            "Runner",
          ],
        },
        {
          title: "Material",
          items: [
            "Wool",
            "Wool & Silk",
            "Wool & Viscose",
            "Wool & Jute",
            "Jute",
            "Polyester",
            "Bamboo Silk",
          ],
        },
        {
          title: "Construction",
          items: ["Hand Knotted", "Hand Tufted", "Dhurrie", "Handloom"],
        },
        {
          title: "Lifestyle",
          items: ["Traditional", "Contemporary", "Transitional"],
        },
        { title: "Collections", items: ["Revisiting Classics", "Viraasat"] },
      ],
    },
    {
      name: "Cushions",
      dropdown: [
        "Cotton Cushions",
        "Designer Cushions",
        "Printed Cushions",
        "Ethnic Weaves",
        "Block Printed",
        "Embroidered",
      ],
    },
    {
      name: "Bedding",
      dropdown: ["Bedsheets", "Quilts", "Blankets", "Dohars"],
    },
    { name: "Furniture", dropdown: ["Tables", "Chairs", "Sofas", "Benches"] },
    {
      name: "Proud To Be Indian",
      dropdown: [
        "Proud to Be Indian",
        "Tarun Tahiliani",
        "Shantanu & Nikhil",
        "Raghavendra Rathore",
        "Abraham & Thakore",
        "JJ Valaya",
      ],
    },
    { name: "Collaborations", dropdown: ["Designer Collabs", "Luxury Series"] },
    { name: "Bespoke & Custom", dropdown: ["Custom Rugs", "Design Your Own"] },
    { name: "Our Story", dropdown: ["About Us", "Craftsmanship", "Heritage"] },
    { name: "Stores & Connect", dropdown: ["Store Locator", "Contact Us"] },
    {
      name: "Sale",
      dropdown: ["Offers", "Discount", "Clearance"],
      isSale: true,
    },
  ];

  // Tablet: only show first 6 items in strip, rest in drawer
  const stripItems = isTablet ? menuItems.slice(0, 6) : menuItems;

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setHovered(index);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(null), 150);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        :root {
          --cream:      #f7f4ef;
          --charcoal:   #1c1c1c;
          --gold:       #b89c6e;
          --gold-light: #d4b98a;
          --muted:      #888;
          --red:        #c0392b;
        }

        /* ─── ROOT ─── */
        .nb {
          font-family: 'Jost', sans-serif;
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 1000;
          transition: box-shadow 0.4s ease;
        }
        .nb.scrolled { box-shadow: 0 6px 40px rgba(0,0,0,0.13); }

        /* ─── ANNOUNCE BAR ─── */
        .nb-announce {
          background: var(--charcoal);
          color: var(--gold-light);
          text-align: center;
          font-size: 10px;
          letter-spacing: 2px;
          padding: 7px 12px;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 38px;
          opacity: 1;
          transition: max-height 0.4s ease, padding 0.4s ease, opacity 0.35s ease;
        }
        .nb.scrolled .nb-announce {
          max-height: 0;
          padding-top: 0; padding-bottom: 0;
          opacity: 0;
        }

        /* ─── MAIN BAR ─── */
        .nb-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          padding: 0 48px;
          background: rgba(247,244,239,0.97);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(184,156,110,0.18);
          position: relative;
          transition: height 0.35s ease;
        }
        .nb.scrolled .nb-main { height: 60px; }

        /* ─── LEFT INFO ─── */
        .nb-left {
          display: flex;
          align-items: center;
          gap: 20px;
          color: var(--muted);
          min-width: 0;
          flex: 1;
        }
        .nb-left-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10.5px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nb-left-item:hover { color: var(--charcoal); }
        .nb-left-text { /* hidden on tablet */ }

        /* ─── LOGO ─── */
        .nb-logo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          user-select: none;
        }
        .nb-logo-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 500;
          letter-spacing: 7px;
          color: var(--charcoal);
          line-height: 1;
          display: block;
          transition: letter-spacing 0.4s ease;
        }
        .nb-logo:hover .nb-logo-main { letter-spacing: 11px; }
        .nb-logo-sub {
          font-size: 8px;
          letter-spacing: 3px;
          color: var(--gold);
          text-transform: uppercase;
          display: block;
          margin-top: 3px;
        }

        /* ─── RIGHT ICONS ─── */
        .nb-right {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: flex-end;
        }
        .nb-icon {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--charcoal);
          opacity: 0.72;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 50%;
          position: relative;
          flex-shrink: 0;
        }
        .nb-icon:hover {
          opacity: 1;
          background: rgba(184,156,110,0.12);
          color: var(--gold);
          transform: translateY(-1px);
        }
        .nb-badge {
          position: absolute;
          top: 2px; right: 2px;
          background: var(--red);
          color: #fff;
          font-size: 8px;
          width: 14px; height: 14px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700;
        }

        /* ─── SEARCH OVERLAY ─── */
        .nb-search-overlay {
          position: absolute;
          inset: 0;
          background: var(--cream);
          display: flex;
          align-items: center;
          padding: 0 20px;
          gap: 12px;
          animation: fadeSlide 0.22s ease;
          z-index: 20;
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nb-search-input {
          flex: 1;
          border: none;
          background: none;
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          color: var(--charcoal);
          outline: none;
          border-bottom: 1.5px solid var(--gold);
          padding-bottom: 3px;
        }
        .nb-search-input::placeholder { color: var(--muted); }

        /* ─── DESKTOP MENU STRIP ─── */
        .nb-strip {
          background: #fff;
          border-bottom: 1px solid rgba(184,156,110,0.13);
          display: flex;
          justify-content: center;
          flex-wrap: nowrap;
          overflow: hidden;
        }
        .nb-strip-item {
          padding: 13px 14px;
          font-size: 10.5px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          font-weight: 500;
          color: var(--charcoal);
          cursor: pointer;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 3px;
          white-space: nowrap;
          position: relative;
          user-select: none;
        }
        .nb-strip-item.sale { color: var(--red); }
        .nb-strip-item:hover,
        .nb-strip-item.active { color: var(--gold); }
        .nb-strip-item::after {
          content: '';
          position: absolute;
          bottom: 0; left: 14px; right: 14px;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nb-strip-item:hover::after,
        .nb-strip-item.active::after { transform: scaleX(1); }
        .nb-strip-chevron { transition: transform 0.25s ease; opacity: 0.4; }
        .nb-strip-item.active .nb-strip-chevron { transform: rotate(180deg); opacity: 1; }

        /* ─── MEGA PANEL ─── */
        .nb-mega {
          position: fixed;
          left: 0; right: 0;
          background: #fff;
          border-top: 2px solid var(--gold);
          box-shadow: 0 24px 60px rgba(0,0,0,0.1);
          display: flex;
          gap: 48px;
          padding: 40px 80px;
          animation: megaIn 0.2s cubic-bezier(0.4,0,0.2,1);
          z-index: 999;
        }
        @keyframes megaIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nb-mega-left { flex: 1; min-width: 0; }
        .nb-mega-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px 40px;
        }
        .nb-mega-simple {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px 40px;
        }
        .nb-mega-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--charcoal);
          margin-bottom: 10px;
          padding-bottom: 7px;
          border-bottom: 1px solid rgba(184,156,110,0.25);
        }
        .nb-mega-heading-lg {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 500;
          color: var(--charcoal);
          margin-bottom: 6px;
        }
        .nb-gold-bar { width: 28px; height: 1.5px; background: var(--gold); margin-bottom: 20px; }
        .nb-mega-link {
          display: block;
          font-size: 11.5px;
          color: #666;
          padding: 3.5px 0;
          cursor: pointer;
          transition: color 0.16s, padding-left 0.16s;
          text-decoration: none;
          position: relative;
        }
        .nb-mega-link::before {
          content: '';
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 3px; height: 3px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0;
          transition: opacity 0.16s;
        }
        .nb-mega-link:hover { color: var(--gold); padding-left: 10px; }
        .nb-mega-link:hover::before { opacity: 1; }
        .nb-mega-imgs {
          display: flex;
          gap: 14px;
          flex-shrink: 0;
          align-items: flex-start;
        }
        .nb-mega-img-wrap {
          overflow: hidden;
          border-radius: 4px;
          position: relative;
        }
        .nb-mega-img-wrap img {
          width: 110px;
          height: 170px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .nb-mega-img-wrap:hover img { transform: scale(1.06); }
        .nb-mega-img-label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.55));
          color: #fff;
          font-size: 8.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 18px 6px 7px;
          text-align: center;
        }

        /* ─── MOBILE DRAWER ─── */
        .nb-drawer {
          position: fixed;
          inset: 0;
          z-index: 1100;
          display: flex;
        }
        .nb-drawer-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.48);
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        .nb-drawer-panel {
          position: relative;
          width: min(340px, 88vw);
          height: 100%;
          background: var(--charcoal);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.32s cubic-bezier(0.4,0,0.2,1);
          z-index: 1;
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0); }
        }
        .nb-drawer-header {
          padding: 18px 18px 14px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }
        .nb-drawer-logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 5px;
          color: var(--cream);
        }
        .nb-drawer-logo-sub {
          display: block;
          font-family: 'Jost', sans-serif;
          font-size: 8px;
          letter-spacing: 3px;
          color: var(--gold);
          text-transform: uppercase;
          margin-top: 2px;
        }
        .nb-drawer-search {
          margin: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(184,156,110,0.28);
          border-radius: 4px;
          padding: 9px 12px;
          flex-shrink: 0;
        }
        .nb-drawer-search input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--cream);
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          min-width: 0;
        }
        .nb-drawer-search input::placeholder { color: rgba(255,255,255,0.32); }
        .nb-drawer-body {
          flex: 1;
          overflow-y: auto;
          overscroll-behavior: contain;
        }
        .nb-drawer-item { border-bottom: 1px solid rgba(255,255,255,0.05); }
        .nb-drawer-item-hdr {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 18px;
          cursor: pointer;
          font-size: 10.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(247,244,239,0.85);
          transition: color 0.2s, background 0.2s;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        .nb-drawer-item-hdr:hover { color: var(--gold-light); background: rgba(255,255,255,0.03); }
        .nb-drawer-item-hdr.sale { color: #e07070; }
        .nb-drawer-chevron { transition: transform 0.3s ease; opacity: 0.42; flex-shrink: 0; }
        .nb-drawer-chevron.open { transform: rotate(180deg); opacity: 1; }
        .nb-drawer-sub {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.38s ease;
          background: rgba(0,0,0,0.15);
        }
        .nb-drawer-sub.open { max-height: 800px; }
        .nb-drawer-sub-inner { padding: 10px 18px 16px 26px; }
        .nb-drawer-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-style: italic;
          color: var(--gold-light);
          margin: 10px 0 6px;
        }
        .nb-drawer-link {
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255,255,255,0.52);
          font-size: 11.5px;
          padding: 5px 0;
          letter-spacing: 0.3px;
          transition: color 0.18s;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .nb-drawer-link:hover, .nb-drawer-link:active { color: rgba(255,255,255,0.9); }
        .nb-drawer-footer {
          padding: 16px 18px;
          border-top: 1px solid rgba(255,255,255,0.07);
          display: flex;
          gap: 20px;
          flex-shrink: 0;
        }
        .nb-drawer-footer-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          letter-spacing: 0.8px;
          color: rgba(255,255,255,0.42);
          cursor: pointer;
          transition: color 0.2s;
          white-space: nowrap;
          -webkit-tap-highlight-color: transparent;
        }
        .nb-drawer-footer-btn:hover { color: var(--gold-light); }

        /* ─── RESPONSIVE BREAKPOINTS ─── */

        /* Tablet 768–1023px */
        @media (max-width: 1023px) {
          .nb-main { padding: 0 20px; }
          .nb-left-text { display: none; }
          .nb-left-item { gap: 3px; }
          .nb-strip-item { padding: 12px 9px; font-size: 9.5px; letter-spacing: 1px; }
          .nb-mega { padding: 28px 36px; gap: 28px; }
          .nb-mega-grid { grid-template-columns: repeat(2, 1fr); gap: 20px 28px; }
          .nb-mega-img-wrap img { width: 90px; height: 140px; }
          .nb-icon { padding: 7px; }
        }

        /* Mobile <768px: hide strip & left info */
        @media (max-width: 767px) {
          .nb-main { height: 60px; padding: 0 14px; }
          .nb.scrolled .nb-main { height: 56px; }
          .nb-strip { display: none !important; }
          .nb-left { display: none !important; }
          .nb-announce { font-size: 9px; letter-spacing: 1.2px; padding: 5px 10px; }
          .nb-logo-main { font-size: 21px; letter-spacing: 5px; }
          .nb-logo-sub { font-size: 7px; letter-spacing: 2.5px; }
          .nb-icon { padding: 6px; }
          .nb-hide-sm { display: none !important; }
        }

        /* Small mobile <380px */
        @media (max-width: 380px) {
          .nb-logo-main { font-size: 18px; letter-spacing: 4px; }
          .nb-drawer-panel { width: 92vw; }
        }

        /* Large desktop 1280px+ */
        @media (min-width: 1280px) {
          .nb-main { padding: 0 64px; }
          .nb-strip-item { padding: 14px 16px; font-size: 11px; letter-spacing: 1.8px; }
          .nb-mega { padding: 48px 100px; gap: 60px; }
          .nb-logo-main { font-size: 28px; letter-spacing: 8px; }
        }

        /* XL 1536px+ */
        @media (min-width: 1536px) {
          .nb-main { padding: 0 88px; }
          .nb-mega { padding: 52px 140px; }
        }
      `}</style>

      <nav className={`nb${scrolled ? " scrolled" : ""}`}>
        {/* Announcement Bar */}
        <div className="nb-announce">
          Free shipping above ₹15,000 &nbsp;·&nbsp; Handcrafted in India since
          1960 &nbsp;·&nbsp; New: Viraasat Collection
        </div>

        {/* Main Bar */}
        <div className="nb-main">
          {searchOpen ? (
            <div className="nb-search-overlay">
              <Search size={16} color="var(--gold)" style={{ flexShrink: 0 }} />
              <input
                autoFocus
                className="nb-search-input"
                placeholder="Search carpets, cushions, collections…"
              />
              <button className="nb-icon" onClick={() => setSearchOpen(false)}>
                <X size={18} />
              </button>
            </div>
          ) : (
            <>
              {/* Left — hidden on mobile via CSS */}
              <div className="nb-left">
                <span className="nb-left-item">
                  <Phone size={12} />
                  <span className="nb-left-text">+91-98100-12345</span>
                </span>
                <span className="nb-left-item">
                  <MapPin size={12} />
                  <span className="nb-left-text">Find a Store</span>
                </span>
              </div>

              {/* Logo — absolutely centered */}
              <a className="nb-logo" href="#">
                <span className="nb-logo-main">OBEETEE</span>
                <span className="nb-logo-sub">carpet &amp; home</span>
              </a>

              {/* Right icons */}
              <div className="nb-right">
                <button className="nb-icon nb-hide-sm">
                  <Heart size={17} />
                </button>
                <button className="nb-icon nb-hide-sm">
                  <User size={17} />
                </button>
                <button
                  className="nb-icon"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                >
                  <Search size={17} />
                </button>
                <button
                  className="nb-icon"
                  aria-label="Cart"
                  style={{ position: "relative" }}
                >
                  <ShoppingCart size={17} />
                  <span className="nb-badge">2</span>
                </button>
                {/* Hamburger — only on mobile/tablet */}
                {(isMobile || isTablet) && (
                  <button
                    className="nb-icon"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                    style={{ marginLeft: 2 }}
                  >
                    <Menu size={20} />
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* Desktop / Tablet Menu Strip */}
        {!isMobile && (
          <div className="nb-strip">
            {stripItems.map((item, index) => (
              <div
                key={index}
                className={`nb-strip-item${item.isSale ? " sale" : ""}${hovered === index ? " active" : ""}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.name}
                <ChevronDown size={9} className="nb-strip-chevron" />
              </div>
            ))}
            {/* Tablet "More" button */}
            {isTablet && (
              <div
                className="nb-strip-item"
                style={{ color: "var(--gold)" }}
                onClick={() => setIsOpen(true)}
              >
                More <ChevronRight size={11} style={{ marginLeft: 2 }} />
              </div>
            )}
          </div>
        )}

        {/* Mega Dropdown — desktop + tablet */}
        {hovered !== null && !isMobile && (
          <div
            className="nb-mega"
            onMouseEnter={() => clearTimeout(timeoutRef.current)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="nb-mega-left">
              {typeof menuItems[hovered].dropdown[0] === "object" ? (
                <div className="nb-mega-grid">
                  {menuItems[hovered].dropdown.map((section, i) => (
                    <div key={i}>
                      <div className="nb-mega-heading">{section.title}</div>
                      {section.items.map((sub, j) => (
                        <a key={j} className="nb-mega-link">
                          {sub}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="nb-mega-heading-lg">
                    {menuItems[hovered].name}
                  </div>
                  <div className="nb-gold-bar" />
                  <div className="nb-mega-simple">
                    {menuItems[hovered].dropdown.map((sub, i) => (
                      <a key={i} className="nb-mega-link">
                        {sub}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Promo images — hide on tablet to save space */}
            {!isTablet && (
              <div className="nb-mega-imgs">
                <div className="nb-mega-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
                    alt="New Arrivals"
                  />
                  <div className="nb-mega-img-label">New Arrivals</div>
                </div>
                <div className="nb-mega-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400"
                    alt="Bestsellers"
                  />
                  <div className="nb-mega-img-label">Bestsellers</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mobile / Tablet Drawer */}
        {isOpen && (
          <div className="nb-drawer" role="dialog" aria-modal="true">
            <div
              className="nb-drawer-backdrop"
              onClick={() => setIsOpen(false)}
            />
            <div className="nb-drawer-panel">
              {/* Header */}
              <div className="nb-drawer-header">
                <div>
                  <div className="nb-drawer-logo-text">OBEETEE</div>
                  <span className="nb-drawer-logo-sub">carpet &amp; home</span>
                </div>
                <button
                  className="nb-icon"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search */}
              <div className="nb-drawer-search">
                <Search size={13} color="var(--gold)" />
                <input placeholder="Search products…" />
              </div>

              {/* Menu Items */}
              <div className="nb-drawer-body">
                {menuItems.map((item, index) => (
                  <div key={index} className="nb-drawer-item">
                    <div
                      className={`nb-drawer-item-hdr${item.isSale ? " sale" : ""}`}
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === index ? null : index,
                        )
                      }
                    >
                      {item.name}
                      <ChevronDown
                        size={13}
                        className={`nb-drawer-chevron${mobileExpanded === index ? " open" : ""}`}
                      />
                    </div>

                    <div
                      className={`nb-drawer-sub${mobileExpanded === index ? " open" : ""}`}
                    >
                      <div className="nb-drawer-sub-inner">
                        {typeof item.dropdown[0] === "object"
                          ? item.dropdown.map((section, i) => (
                              <div key={i} style={{ marginBottom: 12 }}>
                                <div className="nb-drawer-section-title">
                                  {section.title}
                                </div>
                                {section.items.map((sub, j) => (
                                  <div key={j} className="nb-drawer-link">
                                    <ChevronRight
                                      size={9}
                                      color="var(--gold)"
                                      style={{ flexShrink: 0 }}
                                    />
                                    {sub}
                                  </div>
                                ))}
                              </div>
                            ))
                          : item.dropdown.map((sub, i) => (
                              <div key={i} className="nb-drawer-link">
                                <ChevronRight
                                  size={9}
                                  color="var(--gold)"
                                  style={{ flexShrink: 0 }}
                                />
                                {sub}
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="nb-drawer-footer">
                <div className="nb-drawer-footer-btn">
                  <Heart size={13} /> Wishlist
                </div>
                <div className="nb-drawer-footer-btn">
                  <User size={13} /> Account
                </div>
                <div className="nb-drawer-footer-btn">
                  <Phone size={13} /> Contact
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
