"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingBag,
  SlidersHorizontal,
  Instagram,
  Facebook,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import carpets from "../../data";
import ProductCard from "./ProductCard"; // Ensure the path to your component is correct

export default function RugSifiShop() {
  // --- States ---
  const [activeFilters, setActiveFilters] = useState({
    techniques: [],
    sizes: [],
    colors: [],
    maxPrice: 200000,
  });
  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // --- Filter Options (Derived from data) ---
  const options = useMemo(
    () => ({
      techniques: [...new Set(carpets.map((c) => c.technique))],
      sizes: [...new Set(carpets.map((c) => c.size))].sort(),
      colors: [...new Set(carpets.flatMap((c) => c.color))],
    }),
    [],
  );

  // --- Filtering & Sorting Engine ---
  const filtered = useMemo(() => {
    return carpets
      .filter((p) => {
        const tMatch =
          activeFilters.techniques.length === 0 ||
          activeFilters.techniques.includes(p.technique);
        const sMatch =
          activeFilters.sizes.length === 0 ||
          activeFilters.sizes.includes(p.size);
        const cMatch =
          activeFilters.colors.length === 0 ||
          p.color.some((c) => activeFilters.colors.includes(c));
        const pMatch = p.price <= activeFilters.maxPrice;
        const searchMatch = p.name.toLowerCase().includes(search.toLowerCase());

        return tMatch && sMatch && cMatch && pMatch && searchMatch;
      })
      .sort((a, b) => {
        if (sortBy === "low") return a.price - b.price;
        if (sortBy === "high") return b.price - a.price;
        return 0;
      });
  }, [activeFilters, sortBy, search]);

  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const toggleFilter = (key, val) => {
    setActiveFilters((prev) => {
      const curr = prev[key];
      const next = curr.includes(val)
        ? curr.filter((i) => i !== val)
        : [...curr, val];
      return { ...prev, [key]: next };
    });
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#121212] font-sans selection:bg-amber-100">
      {/* --- STICKY NAVIGATION --- */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-6 md:px-12 py-4">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
            <a href="#" className="text-black border-b border-black pb-1">
              Shop All
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Heritage
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Bespoke
            </a>
          </div>

          <div className="text-center">
            <h1 className="text-2xl md:text-3xl tracking-tighter font-serif italic font-light">
              RugSifi
            </h1>
            <p className="text-[7px] uppercase tracking-[0.6em] opacity-40 -mt-1">
              Modern Indian Heritage
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <div className="hidden md:flex items-center bg-gray-100/50 px-4 py-2 rounded-full border border-gray-200">
              <Search size={14} className="text-gray-300" />
              <input
                type="text"
                placeholder="Find your weave..."
                className="bg-transparent text-[11px] outline-none px-3 w-32 focus:w-48 transition-all"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Heart
              size={18}
              className="text-gray-400 cursor-pointer hover:text-black"
            />
            <ShoppingBag
              size={18}
              className="text-gray-400 cursor-pointer hover:text-black"
            />
          </div>
        </div>
      </header>

      {/* --- CONTENT AREA --- */}
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row gap-20">
        {/* SIDEBAR */}
        <aside className="lg:w-64 shrink-0 space-y-12">
          <div className="flex justify-between items-end border-b pb-4">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Refine
            </h2>
            <button
              onClick={() =>
                setActiveFilters({
                  techniques: [],
                  sizes: [],
                  colors: [],
                  maxPrice: 200000,
                })
              }
              className="text-[10px] font-bold text-amber-900 underline underline-offset-4"
            >
              Reset
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
              <span>Budget</span>
              <span className="text-amber-900">
                ₹{activeFilters.maxPrice.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="15000"
              max="200000"
              step="5000"
              className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-amber-900"
              value={activeFilters.maxPrice}
              onChange={(e) =>
                setActiveFilters((p) => ({
                  ...p,
                  maxPrice: parseInt(e.target.value),
                }))
              }
            />
          </div>

          <FilterGroup
            title="Technique"
            items={options.techniques}
            active={activeFilters.techniques}
            onToggle={(v) => toggleFilter("techniques", v)}
          />
          <FilterGroup
            title="Size"
            items={options.sizes}
            active={activeFilters.sizes}
            onToggle={(v) => toggleFilter("sizes", v)}
          />
          <FilterGroup
            title="Palette"
            items={options.colors}
            active={activeFilters.colors}
            onToggle={(v) => toggleFilter("colors", v)}
          />
        </aside>

        {/* MAIN PRODUCT GRID */}
        <section className="flex-grow">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-serif italic mb-2 tracking-tighter">
                The Gallery
              </h2>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                {filtered.length} Artisan Creations Available
              </p>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-100 pb-2">
              <SlidersHorizontal size={14} className="text-gray-300" />
              <select
                className="bg-transparent text-[10px] uppercase tracking-widest font-bold outline-none cursor-pointer"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort By</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* GRID: Now mapping over the filtered 'paginated' array */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {paginated.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          <div className="mt-24 flex justify-center items-center gap-3">
            {Array.from({
              length: Math.ceil(filtered.length / itemsPerPage),
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentPage(i + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`w-10 h-10 rounded-full border text-[10px] font-bold transition-all ${currentPage === i + 1 ? "bg-black text-white shadow-xl" : "text-gray-300 hover:border-black"}`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 pt-24 pb-12 mt-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif italic">RugSifi</h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Ethically crafted Indian rugs, bridging heritage with contemporary
              spaces.
            </p>
            <div className="flex gap-4 opacity-30">
              <Instagram size={18} />
              <Facebook size={18} />
              <Linkedin size={18} />
            </div>
          </div>
          <FooterCol
            title="Explore"
            links={["Heritage", "Contemporary", "Runners", "Bespoke"]}
          />
          <FooterCol
            title="Support"
            links={["Care Guide", "Shipping", "Returns", "Concierge"]}
          />
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold">
              Atelier
            </h4>
            <p className="text-xs text-gray-400">
              Industrial Estate, Bhadohi,
              <br />
              Uttar Pradesh, 221401
            </p>
            <p className="text-xs font-bold text-amber-900">+91 9559 140222</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Internal Helper Components ---

const FilterGroup = ({ title, items, active, onToggle }) => (
  <div className="space-y-5">
    <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
      {title}
    </h3>
    <div className="space-y-3">
      {items.map((item) => {
        const isChecked = active.includes(item);
        return (
          <label
            key={item}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div
              className={`w-3.5 h-3.5 border rounded-sm flex items-center justify-center transition-all ${isChecked ? "bg-amber-800 border-amber-800" : "border-gray-200 group-hover:border-amber-700"}`}
            >
              {isChecked && (
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              )}
            </div>
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={() => onToggle(item)}
            />
            <span
              className={`text-[11px] uppercase tracking-widest transition-colors ${isChecked ? "text-black font-bold" : "text-gray-400 group-hover:text-black"}`}
            >
              {item}
            </span>
          </label>
        );
      })}
    </div>
  </div>
);

const FooterCol = ({ title, links }) => (
  <div className="space-y-6">
    <h4 className="text-[10px] uppercase tracking-widest font-bold">{title}</h4>
    <ul className="space-y-4 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
      {links.map((l) => (
        <li key={l} className="hover:text-black cursor-pointer">
          {l}
        </li>
      ))}
    </ul>
  </div>
);
