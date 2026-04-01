"use client";

import React, { useState, useMemo, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Search,
  ShoppingBag,
  MapPin,
  ArrowRight,
  X,
  Star,
  ChevronDown,
} from "lucide-react";
import carpetData from "./data.json";

const SORT_OPTIONS = [
  "Featured",
  "Price: Low–High",
  "Price: High–Low",
  "Newest",
];

/* ═══════════════════════════ PAGE ══════════════════════════════ */
export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [selectedCarpet, setSelectedCarpet] = useState(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const filteredCarpets = useMemo(() => {
    if (!carpetData?.carpets) return [];
    let list = carpetData.carpets;

    if (activeCategory !== "All")
      list = list.filter(
        (c) => c.category?.toLowerCase() === activeCategory.toLowerCase(),
      );

    if (searchQuery.trim())
      list = list.filter(
        (c) =>
          c.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.origin?.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    if (sortBy === "Price: Low–High")
      list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "Price: High–Low")
      list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [activeCategory, sortBy, searchQuery]);

  return (
    <div
      style={{
        background: "#080806",
        color: "#EDE8DF",
        minHeight: "100vh",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C5A059; }
        html { scroll-behavior: smooth; }
        .sans { font-family: 'DM Sans', sans-serif; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        @keyframes shimmer { 0%,100% { opacity: 0.3 } 50% { opacity: 1 } }
        select option { background: #0A0A08; color: #EDE8DF; }
      `}</style>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 50 }}>
        <div
          className="sans"
          style={{
            padding: "20px 64px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background:
              "linear-gradient(to bottom, rgba(8,8,6,0.95), rgba(8,8,6,0))",
            backdropFilter: "blur(12px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#7A7568",
              }}
            >
              Est. 1987
            </span>
            <span
              style={{
                color: "#C5A059",
                fontSize: 24,
                fontWeight: 300,
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: "0.08em",
              }}
            >
              Rugsifi
            </span>
          </motion.div>

          <div style={{ display: "flex", gap: 40 }} className="sans">
            {["Collection", "Heritage", "Bespoke", "Atelier"].map((l) => (
              <span
                key={l}
                style={{
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#4A4840",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#C5A059")}
                onMouseLeave={(e) => (e.target.style.color = "#4A4840")}
              >
                {l}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <AnimatePresence>
              {searchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  autoFocus
                  placeholder="Search carpets…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="sans"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid #C5A059",
                    color: "#EDE8DF",
                    fontSize: 13,
                    outline: "none",
                    padding: "4px 4px",
                  }}
                />
              )}
            </AnimatePresence>

            <button
              onClick={() => {
                setSearchOpen((v) => !v);
                if (searchOpen) setSearchQuery("");
              }}
              style={{
                background: "none",
                border: "none",
                color: "#7A7568",
                cursor: "pointer",
                transition: "color 0.3s",
                display: "flex",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A059")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7A7568")}
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>

            <div
              style={{
                position: "relative",
                cursor: "pointer",
                color: "#7A7568",
              }}
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="sans"
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    background: "#C5A059",
                    color: "#000",
                    fontSize: 9,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 500,
                  }}
                >
                  {cartCount}
                </motion.span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <header
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          borderBottom: "1px solid rgba(197,160,89,0.12)",
        }}
      >
        <motion.div
          style={{ y: heroY, position: "absolute", inset: 0, zIndex: 0 }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(197,160,89,0.06) 0%, transparent 70%)",
            }}
          />
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: 0.04,
            }}
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="geo"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0 L80 40 L40 80 L0 40Z"
                  fill="none"
                  stroke="#C5A059"
                  strokeWidth="0.5"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="15"
                  fill="none"
                  stroke="#C5A059"
                  strokeWidth="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geo)" />
          </svg>
        </motion.div>

        <motion.div
          style={{
            opacity: heroOpacity,
            position: "relative",
            zIndex: 10,
            padding: "160px 64px 80px",
            maxWidth: 900,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="sans"
            style={{
              fontSize: 11,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#C5A059",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                width: 40,
                height: 1,
                background: "#C5A059",
                display: "inline-block",
              }}
            />
            New Collection 2025
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
            }}
          >
            Woven
            <br />
            <em style={{ color: "#C5A059", fontStyle: "italic" }}>Heirlooms</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="sans"
            style={{
              color: "#7A7568",
              marginTop: 32,
              fontSize: 14,
              lineHeight: 1.7,
              maxWidth: 420,
              fontWeight: 300,
            }}
          >
            Timeless handcrafted carpets from the great weaving traditions of
            Persia, Anatolia, and the Silk Road — each piece a singular work of
            art.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              gap: 32,
            }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("collection")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="sans"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "#C5A059",
              }}
            >
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1px solid #C5A059",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ChevronDown size={14} color="#C5A059" />
              </span>
              Explore
            </button>
            <span className="sans" style={{ fontSize: 12, color: "#4A4840" }}>
              {carpetData?.carpets?.length ?? 0} Pieces Available
            </span>
          </motion.div>
        </motion.div>

        <div
          style={{
            position: "absolute",
            right: 32,
            bottom: 32,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: 0.3,
          }}
        >
          <div
            style={{
              width: 1,
              height: 64,
              background: "#C5A059",
              animation: "shimmer 2s infinite",
            }}
          />
        </div>
      </header>

      {/* ── FILTER BAR ──────────────────────────────────────── */}
      <div
        id="collection"
        className="sans"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          padding: "16px 64px",
          background: "rgba(8,8,6,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <div style={{ display: "flex", gap: 4, overflowX: "auto" }}>
          {carpetData?.categories?.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                position: "relative",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "8px 16px",
                color: activeCategory === cat ? "#C5A059" : "#4A4840",
                transition: "color 0.3s",
              }}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="activePill"
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: "1px solid rgba(197,160,89,0.4)",
                    borderRadius: 2,
                  }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: "#4A4840",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Sort
          </span>
          <div style={{ position: "relative" }}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: "transparent",
                color: "#C5A059",
                border: "1px solid rgba(197,160,89,0.25)",
                borderRadius: 2,
                padding: "6px 28px 6px 12px",
                fontSize: 11,
                letterSpacing: "0.1em",
                outline: "none",
                cursor: "pointer",
                appearance: "none",
              }}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <ChevronDown
              size={10}
              color="#C5A059"
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            />
          </div>
          <span style={{ fontSize: 10, color: "#4A4840" }}>
            {filteredCarpets.length} pieces
          </span>
        </div>
      </div>

      {/* ── GRID ────────────────────────────────────────────── */}
      <main style={{ padding: "64px 64px" }}>
        {filteredCarpets.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "128px 0",
              gap: 16,
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36,
                fontWeight: 300,
                color: "#4A4840",
              }}
            >
              No pieces found
            </p>
            <button
              className="sans"
              style={{
                background: "none",
                border: "none",
                fontSize: 12,
                color: "#C5A059",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "underline",
                textUnderlineOffset: 4,
                cursor: "pointer",
              }}
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "64px 32px",
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredCarpets.map((carpet, i) => (
                <ProductCard
                  key={carpet.id}
                  carpet={carpet}
                  index={i}
                  onSelect={setSelectedCarpet}
                  onAddToCart={() => setCartCount((c) => c + 1)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer
        className="sans"
        style={{
          padding: "48px 64px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20,
              color: "#C5A059",
              fontWeight: 300,
            }}
          >
            Rugsifi
          </p>
          <p style={{ fontSize: 12, color: "#4A4840", marginTop: 4 }}>
            Handcrafted since 1987
          </p>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          {["Provenance", "Care Guide", "Shipping", "Contact"].map((l) => (
            <span
              key={l}
              style={{
                fontSize: 12,
                color: "#4A4840",
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#C5A059")}
              onMouseLeave={(e) => (e.target.style.color = "#4A4840")}
            >
              {l}
            </span>
          ))}
        </div>
      </footer>

      {/* ── DETAIL MODAL ────────────────────────────────────── */}
      <AnimatePresence>
        {selectedCarpet && (
          <DetailModal
            carpet={selectedCarpet}
            onClose={() => setSelectedCarpet(null)}
            onAddToCart={() => {
              setCartCount((c) => c + 1);
              setSelectedCarpet(null);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════ PRODUCT CARD ══════════════════════ */
function ProductCard({ carpet, index, onSelect, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        delay: Math.min(index * 0.07, 0.4),
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          aspectRatio: "3/4",
          overflow: "hidden",
          background: "#111110",
        }}
      >
        <motion.img
          src={carpet.image || "/fallback.jpg"}
          alt={carpet.name}
          onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.88,
            display: "block",
          }}
        />

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 24,
          }}
        >
          <p
            className="sans"
            style={{
              fontSize: 12,
              color: "#B8B2A8",
              lineHeight: 1.6,
              marginBottom: 16,
              fontWeight: 300,
            }}
          >
            {carpet.description}
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(carpet);
              }}
              className="sans"
              style={{
                flex: 1,
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "10px 0",
                background: "transparent",
                border: "1px solid rgba(197,160,89,0.5)",
                color: "#C5A059",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C5A059";
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#C5A059";
              }}
            >
              View Details
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart();
              }}
              style={{
                width: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "1px solid rgba(197,160,89,0.5)",
                color: "#C5A059",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C5A059";
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#C5A059";
              }}
            >
              <ShoppingBag size={13} />
            </button>
          </div>
        </motion.div>

        {/* Year badge */}
        {carpet.year && (
          <div
            className="sans"
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "4px 8px",
              background: "rgba(8,8,6,0.7)",
              color: "#7A7568",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {carpet.year}
          </div>
        )}

        {/* Origin badge */}
        {carpet.origin && (
          <div
            className="sans"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 9,
              letterSpacing: "0.15em",
              padding: "4px 8px",
              background: "rgba(8,8,6,0.7)",
              color: "#C5A059",
              border: "1px solid rgba(197,160,89,0.2)",
            }}
          >
            <MapPin size={9} />
            {carpet.origin}
          </div>
        )}
      </div>

      {/* Text */}
      <div
        onClick={() => onSelect(carpet)}
        style={{
          paddingTop: 20,
          paddingBottom: 24,
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ flex: 1, minWidth: 0, paddingRight: 16 }}>
            <p
              className="sans"
              style={{
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C5A059",
                marginBottom: 4,
              }}
            >
              {carpet.category}
            </p>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontWeight: 300,
                lineHeight: 1.3,
                color: hovered ? "#C5A059" : "#EDE8DF",
                transition: "color 0.3s",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {carpet.name}
            </h3>
            {carpet.material && (
              <p
                className="sans"
                style={{ fontSize: 11, color: "#4A4840", marginTop: 4 }}
              >
                {carpet.material}
              </p>
            )}
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontWeight: 300,
              }}
            >
              ${carpet.price?.toLocaleString()}
            </p>
            {carpet.dimensions && (
              <p
                className="sans"
                style={{ fontSize: 10, color: "#4A4840", marginTop: 2 }}
              >
                {carpet.dimensions}
              </p>
            )}
          </div>
        </div>

        {carpet.rating && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginTop: 12,
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={10}
                fill={i < Math.round(carpet.rating) ? "#C5A059" : "transparent"}
                stroke={i < Math.round(carpet.rating) ? "#C5A059" : "#3A3830"}
              />
            ))}
            <span
              className="sans"
              style={{ fontSize: 10, color: "#4A4840", marginLeft: 4 }}
            >
              {carpet.rating?.toFixed(1)}
            </span>
          </div>
        )}

        <div
          className="sans"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 16,
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C5A059",
            overflow: "hidden",
            maxHeight: hovered ? 20 : 0,
            opacity: hovered ? 1 : 0,
            transition: "all 0.3s ease",
          }}
        >
          <span>Enquire</span>
          <ArrowRight size={10} />
        </div>
      </div>
    </motion.article>
  );
}

/* ═══════════════════════════ DETAIL MODAL ══════════════════════ */
function DetailModal({ carpet, onClose, onAddToCart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        background: "rgba(5,5,4,0.92)",
        backdropFilter: "blur(20px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 760,
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#0C0C0A",
          border: "1px solid rgba(197,160,89,0.15)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 10,
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.05)",
            border: "none",
            color: "#7A7568",
            cursor: "pointer",
          }}
        >
          <X size={15} />
        </button>

        {/* Image side */}
        <div style={{ position: "relative", minHeight: 400 }}>
          <img
            src={carpet.image || "/fallback.jpg"}
            alt={carpet.name}
            onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.9,
              display: "block",
            }}
          />
          {carpet.origin && (
            <div
              className="sans"
              style={{
                position: "absolute",
                bottom: 16,
                left: 16,
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 10,
                letterSpacing: "0.15em",
                padding: "6px 12px",
                background: "rgba(8,8,6,0.8)",
                color: "#C5A059",
              }}
            >
              <MapPin size={10} />
              {carpet.origin}
            </div>
          )}
        </div>

        {/* Info side */}
        <div
          style={{
            padding: 32,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              className="sans"
              style={{
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#C5A059",
                marginBottom: 12,
              }}
            >
              {carpet.category}
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 28,
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              {carpet.name}
            </h2>

            {carpet.rating && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 12,
                }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    fill={
                      i < Math.round(carpet.rating) ? "#C5A059" : "transparent"
                    }
                    stroke={
                      i < Math.round(carpet.rating) ? "#C5A059" : "#3A3830"
                    }
                  />
                ))}
                <span
                  className="sans"
                  style={{ fontSize: 10, color: "#4A4840", marginLeft: 4 }}
                >
                  {carpet.rating}
                </span>
              </div>
            )}

            <p
              className="sans"
              style={{
                fontSize: 13,
                color: "#8A8478",
                lineHeight: 1.7,
                marginTop: 20,
                fontWeight: 300,
              }}
            >
              {carpet.description}
            </p>

            <div
              style={{
                marginTop: 24,
                borderTop: "1px solid rgba(255,255,255,0.05)",
                paddingTop: 20,
              }}
            >
              {[
                ["Material", carpet.material],
                ["Dimensions", carpet.dimensions],
                ["Origin", carpet.origin],
                ["Year", carpet.year],
              ]
                .filter(([, v]) => v)
                .map(([label, value]) => (
                  <div
                    key={label}
                    className="sans"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 12,
                      marginBottom: 12,
                    }}
                  >
                    <span
                      style={{
                        color: "#4A4840",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </span>
                    <span style={{ color: "#B8B2A8" }}>{value}</span>
                  </div>
                ))}
            </div>
          </div>

          <div style={{ marginTop: 32 }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 12,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 30,
                  fontWeight: 300,
                }}
              >
                ${carpet.price?.toLocaleString()}
              </span>
              <span className="sans" style={{ fontSize: 12, color: "#4A4840" }}>
                USD
              </span>
            </div>

            <button
              onClick={onAddToCart}
              className="sans"
              style={{
                width: "100%",
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "16px 0",
                background: "#C5A059",
                color: "#000",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#D4B56A")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#C5A059")
              }
            >
              <ShoppingBag size={13} />
              Add to Collection
            </button>

            <button
              className="sans"
              style={{
                width: "100%",
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "12px 0",
                marginTop: 12,
                background: "transparent",
                border: "1px solid rgba(197,160,89,0.3)",
                color: "#C5A059",
                cursor: "pointer",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#C5A059")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(197,160,89,0.3)")
              }
            >
              Request Consultation
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
