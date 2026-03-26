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

/* ─── tiny helpers ─── */
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap');
:root{--gold:#b89c6e;--gold-light:#d4b98a;--charcoal:#1c1c1c;--cream:#f7f4ef;}
.font-cormorant{font-family:'Cormorant Garamond',serif;}
.font-jost{font-family:'Jost',sans-serif;}
/* underline sweep animation */
.sweep-line{position:relative;}
.sweep-line::after{content:'';position:absolute;bottom:0;left:14px;right:14px;height:2px;background:#b89c6e;transform:scaleX(0);transform-origin:left;transition:transform .25s ease;}
.sweep-line:hover::after,.sweep-line.active::after{transform:scaleX(1);}
/* mega fade */
@keyframes megaIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
.mega-anim{animation:megaIn .2s cubic-bezier(.4,0,.2,1);}
/* drawer slide */
@keyframes drawerIn{from{transform:translateX(-100%)}to{transform:translateX(0)}}
.drawer-anim{animation:drawerIn .32s cubic-bezier(.4,0,.2,1);}
/* backdrop fade */
@keyframes bdIn{from{opacity:0}to{opacity:1}}
.bd-anim{animation:bdIn .3s ease;}
/* search fade */
@keyframes srchIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
.srch-anim{animation:srchIn .22s ease;}
/* dot bullet on mega links */
.mega-link{position:relative;padding-left:0;transition:color .16s,padding-left .16s;}
.mega-link::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:3px;border-radius:50%;background:#b89c6e;opacity:0;transition:opacity .16s;}
.mega-link:hover{color:#b89c6e;padding-left:10px;}
.mega-link:hover::before{opacity:1;}
/* logo spacing hover */
.logo-wrap:hover .logo-main{letter-spacing:11px;}
`;

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    onResize();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile && !isTablet) setIsOpen(false);
  }, [isMobile, isTablet]);
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

  const stripItems = isTablet ? menuItems.slice(0, 6) : menuItems;

  const enter = (i) => {
    clearTimeout(timeoutRef.current);
    setHovered(i);
  };
  const leave = () => {
    timeoutRef.current = setTimeout(() => setHovered(null), 150);
  };

  /* ─── Icon button ─── */
  const IconBtn = ({ onClick, children, className = "" }) => (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center p-2 rounded-full opacity-70
        hover:opacity-100 hover:bg-amber-100/60 hover:text-amber-700
        transition-all duration-200 hover:-translate-y-px text-stone-800 ${className}`}
    >
      {children}
    </button>
  );

  return (
    <>
      {/* Font + tiny keyframe injection — kept minimal, only what Tailwind cannot express */}
      <style>{FONTS}</style>

      <nav
        className={`font-jost fixed inset-x-0 top-0 z-1000 transition-shadow duration-400
        ${scrolled ? "shadow-[0_6px_40px_rgba(0,0,0,0.13)]" : ""}`}
      >
        {/* ── Announcement Bar ── */}
        <div
          className={`bg-stone-900 text-amber-300 text-center text-[10px] tracking-[2px]
          uppercase overflow-hidden whitespace-nowrap text-ellipsis px-3
          transition-all duration-400 ease-in-out
          ${scrolled ? "max-h-0 py-0 opacity-0" : "max-h-10 py-1.75 opacity-100"}`}
        >
          Free shipping above ₹15,000 &nbsp;·&nbsp; Handcrafted in India since
          1960 &nbsp;·&nbsp; New: Viraasat Collection
        </div>

        {/* ── Main Bar ── */}
        <div
          className={`relative flex items-center justify-between bg-[#f7f4ef]/97
          backdrop-blur-[18px] border-b border-amber-800/20
          px-4 md:px-5 lg:px-12 xl:px-16 2xl:px-22
          transition-all duration-350
          ${scrolled ? "h-15" : "h-18 md:h-18 max-md:h-15"}`}
        >
          {searchOpen ? (
            /* Search overlay */
            <div className="srch-anim absolute inset-0 flex items-center gap-3 px-5 bg-[#f7f4ef] z-20">
              <Search size={16} className="text-amber-700 shrink-0" />
              <input
                autoFocus
                placeholder="Search carpets, cushions, collections…"
                className="flex-1 bg-transparent border-0 border-b border-amber-700 pb-1
                  text-[15px] text-stone-800 outline-none font-jost placeholder-stone-400"
              />
              <IconBtn onClick={() => setSearchOpen(false)}>
                <X size={18} />
              </IconBtn>
            </div>
          ) : (
            <>
              {/* Left info — hidden on mobile */}
              <div className="hidden md:flex items-center gap-5 text-stone-400 flex-1">
                <span className="flex items-center gap-1 text-[10.5px] tracking-wide uppercase cursor-pointer hover:text-stone-700 transition-colors whitespace-nowrap">
                  <Phone size={12} />
                  <span className="hidden lg:inline">+91-98100-12345</span>
                </span>
                <span className="flex items-center gap-1 text-[10.5px] tracking-wide uppercase cursor-pointer hover:text-stone-700 transition-colors whitespace-nowrap">
                  <MapPin size={12} />
                  <span className="hidden lg:inline">Find a Store</span>
                </span>
              </div>

              {/* Logo — absolutely centred */}
              <a
                href="#"
                className="logo-wrap absolute left-1/2 -translate-x-1/2 text-center no-underline cursor-pointer select-none"
              >
                <span
                  className="logo-main font-cormorant block font-medium text-stone-900
                    transition-all duration-400 ease-in-out
                    text-[21px] tracking-[5px]
                    md:text-[24px] md:tracking-[6px]
                    lg:text-[26px] lg:tracking-[7px]
                    xl:text-[28px] xl:tracking-[8px]"
                >
                  OBEETEE
                </span>
                <span className="block font-jost text-[8px] tracking-[3px] text-amber-700 uppercase mt-0.5">
                  carpet &amp; home
                </span>
              </a>

              {/* Right icons */}
              <div className="flex items-center gap-0.5 flex-1 justify-end">
                <IconBtn className="hidden sm:flex">
                  <Heart size={17} />
                </IconBtn>
                <IconBtn className="hidden sm:flex">
                  <User size={17} />
                </IconBtn>
                <IconBtn onClick={() => setSearchOpen(true)}>
                  <Search size={17} />
                </IconBtn>
                <IconBtn>
                  <ShoppingCart size={17} />
                  <span
                    className="absolute top-0.5 right-0.5 bg-red-600 text-white text-[8px]
                    w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold leading-none"
                  >
                    2
                  </span>
                </IconBtn>
                {/* Hamburger — mobile + tablet */}
                {(isMobile || isTablet) && (
                  <IconBtn onClick={() => setIsOpen(true)} className="ml-0.5">
                    <Menu size={20} />
                  </IconBtn>
                )}
              </div>
            </>
          )}
        </div>

        {/* ── Desktop / Tablet Menu Strip ── */}
        {!isMobile && (
          <div className="bg-white border-b border-amber-800/10 flex justify-center flex-nowrap overflow-hidden">
            {stripItems.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => enter(index)}
                onMouseLeave={leave}
                className={`sweep-line flex items-center gap-1 cursor-pointer select-none
                  whitespace-nowrap font-medium uppercase transition-colors duration-200
                  py-3 px-2.5 md:px-2 lg:px-3.5 xl:px-4
                  text-[9.5px] md:text-[9.5px] lg:text-[10.5px] xl:text-[11px]
                  tracking-[1px] lg:tracking-[1.6px] xl:tracking-[1.8px]
                  ${item.isSale ? "text-red-600" : "text-stone-800"}
                  ${hovered === index ? "active text-amber-700" : "hover:text-amber-700"}`}
              >
                {item.name}
                <ChevronDown
                  size={9}
                  className={`opacity-40 transition-transform duration-250
                    ${hovered === index ? "rotate-180 opacity-100" : ""}`}
                />
              </div>
            ))}
            {/* Tablet "More" button */}
            {isTablet && (
              <div
                onClick={() => setIsOpen(true)}
                className="sweep-line flex items-center gap-1 cursor-pointer select-none
                  whitespace-nowrap font-medium uppercase py-3 px-2.5
                  text-[9.5px] tracking-[1px] text-amber-700 hover:text-amber-600 transition-colors"
              >
                More <ChevronRight size={11} />
              </div>
            )}
          </div>
        )}

        {/* ── Mega Dropdown ── */}
        {hovered !== null && !isMobile && (
          <div
            className="mega-anim fixed inset-x-0 bg-white border-t-2 border-amber-700
              shadow-[0_24px_60px_rgba(0,0,0,0.1)] flex gap-8 lg:gap-12 xl:gap-16 z-999
              px-8 md:px-9 lg:px-16 xl:px-24 2xl:px-36
              py-7 md:py-8 lg:py-10 xl:py-12"
            onMouseEnter={() => clearTimeout(timeoutRef.current)}
            onMouseLeave={leave}
          >
            {/* Left content */}
            <div className="flex-1 min-w-0">
              {typeof menuItems[hovered].dropdown[0] === "object" ? (
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-6 lg:gap-y-7">
                  {menuItems[hovered].dropdown.map((section, i) => (
                    <div key={i}>
                      <div
                        className="font-cormorant font-semibold text-stone-900 text-[13.5px]
                        mb-2.5 pb-2 border-b border-amber-800/20 tracking-wide"
                      >
                        {section.title}
                      </div>
                      {section.items.map((sub, j) => (
                        <a
                          key={j}
                          className="mega-link block text-[11.5px] text-stone-500 py-1 cursor-pointer"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="font-cormorant text-[22px] font-medium text-stone-900 mb-1.5">
                    {menuItems[hovered].name}
                  </div>
                  <div className="w-7 h-[1.5px] bg-amber-700 mb-5" />
                  <div className="grid grid-cols-2 gap-x-10 gap-y-1.5">
                    {menuItems[hovered].dropdown.map((sub, i) => (
                      <a
                        key={i}
                        className="mega-link block text-[11.5px] text-stone-500 py-1 cursor-pointer"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Promo images — hide on tablet */}
            {!isTablet && (
              <div className="flex gap-3.5 shrink-0 items-start">
                {[
                  {
                    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",
                    label: "New Arrivals",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
                    label: "Bestsellers",
                  },
                ].map(({ src, label }) => (
                  <div
                    key={label}
                    className="relative overflow-hidden rounded group"
                  >
                    <img
                      src={src}
                      alt={label}
                      className="w-22.5 lg:w-27.5 h-35 lg:h-42.5 object-cover
                        transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent
                      pt-5 pb-1.5 text-center text-[8.5px] text-white uppercase tracking-[2px]"
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── Mobile / Tablet Drawer ── */}
        {isOpen && (
          <div
            className="fixed inset-0 z-1100 flex"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop */}
            <div
              className="bd-anim absolute inset-0 bg-black/48"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <div
              className="drawer-anim relative flex flex-col bg-stone-900 h-full
              w-[88vw] max-w-85 z-10 overflow-hidden"
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-4 pt-5 pb-3.5
                border-b border-white/[0.07] shrink-0"
              >
                <div>
                  <div className="font-cormorant text-[20px] font-medium tracking-[5px] text-[#f7f4ef]">
                    OBEETEE
                  </div>
                  <span className="font-jost block text-[8px] tracking-[3px] text-amber-400 uppercase mt-0.5">
                    carpet &amp; home
                  </span>
                </div>
                <IconBtn
                  onClick={() => setIsOpen(false)}
                  className="text-white/65 hover:text-white hover:bg-white/10"
                >
                  <X size={20} />
                </IconBtn>
              </div>

              {/* Drawer search */}
              <div
                className="mx-4 my-3 flex items-center gap-2.5 border border-amber-700/30
                rounded px-3 py-2.5 shrink-0"
              >
                <Search size={13} className="text-amber-600 shrink-0" />
                <input
                  placeholder="Search products…"
                  className="flex-1 bg-transparent border-0 outline-none text-[#f7f4ef]
                    font-jost text-[12px] placeholder-white/30 min-w-0"
                />
              </div>

              {/* Scrollable menu list */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                {menuItems.map((item, index) => (
                  <div key={index} className="border-b border-white/5">
                    {/* Item header */}
                    <div
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === index ? null : index,
                        )
                      }
                      className={`flex items-center justify-between px-4 py-4 cursor-pointer
                        select-none text-[10.5px] uppercase tracking-[2px]
                        transition-colors duration-200
                        ${item.isSale ? "text-red-400" : "text-[#f7f4ef]/85"}
                        hover:text-amber-300 hover:bg-white/3`}
                    >
                      {item.name}
                      <ChevronDown
                        size={13}
                        className={`shrink-0 opacity-40 transition-transform duration-300
                          ${mobileExpanded === index ? "rotate-180 opacity-100" : ""}`}
                      />
                    </div>

                    {/* Accordion sub */}
                    <div
                      className={`overflow-hidden transition-all duration-380 ease-in-out bg-black/15
                        ${mobileExpanded === index ? "max-h-200" : "max-h-0"}`}
                    >
                      <div className="px-4 pb-4 pt-2.5 pl-6">
                        {typeof item.dropdown[0] === "object"
                          ? item.dropdown.map((section, i) => (
                              <div key={i} className="mb-3">
                                <div className="font-cormorant italic text-[13px] text-amber-300 mb-1.5">
                                  {section.title}
                                </div>
                                {section.items.map((sub, j) => (
                                  <div
                                    key={j}
                                    className="flex items-center gap-1.5 text-white/52 text-[11.5px]
                                    py-1.25 cursor-pointer hover:text-white/90 transition-colors"
                                  >
                                    <ChevronRight
                                      size={9}
                                      className="text-amber-600 shrink-0"
                                    />
                                    {sub}
                                  </div>
                                ))}
                              </div>
                            ))
                          : item.dropdown.map((sub, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-1.5 text-white/52 text-[11.5px]
                                py-[5px] cursor-pointer hover:text-white/90 transition-colors"
                              >
                                <ChevronRight
                                  size={9}
                                  className="text-amber-600 shrink-0"
                                />
                                {sub}
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Drawer footer */}
              <div className="flex gap-5 px-4 py-4 border-t border-white/[0.07] shrink-0">
                {[
                  { icon: <Heart size={13} />, label: "Wishlist" },
                  { icon: <User size={13} />, label: "Account" },
                  { icon: <Phone size={13} />, label: "Contact" },
                ].map(({ icon, label }) => (
                  <button
                    key={label}
                    className="flex items-center gap-1.5 text-[10px] tracking-wide text-white/40
                      hover:text-amber-300 transition-colors cursor-pointer bg-transparent border-0 whitespace-nowrap"
                  >
                    {icon} {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
