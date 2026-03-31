"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingBag,
  SlidersHorizontal,
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
  Eye,
  ShoppingCart,
} from "lucide-react";
import carpets from "../../data"; // Ensure path is correct

// --- Sub-Component: Animated Product Card ---
const ProductCard = ({ p }) => {
  const [isHovered, setIsHovered] = useState(false);
  const onSale = p.originalPrice > p.price;

  // Real rug textures from Unsplash
  const carpetImg = `https://images.unsplash.com/photo-${
    [
      "1594904351111-a072f80b1a71",
      "1615873968403-89e068629275",
      "1600169562231-70e301232c5a",
      "1534349762230-e09ff0548c76",
      "1562582664-8a8803c031ca",
      "1575409943440-c3d59630c1a7",
    ][p.id % 6]
  }?auto=format&fit=crop&w=600&q=80`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F6F5]">
        {onSale && (
          <span className="absolute top-3 left-3 z-20 bg-amber-600 text-white text-[8px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Special Offer
          </span>
        )}

        <motion.img
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.8 }}
          src={carpetImg}
          className="w-full h-full object-cover"
          alt={p.name}
        />

        {/* Hover Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/10 backdrop-blur-[2px] z-10 flex items-center justify-center gap-2"
            >
              <button className="bg-white p-3 rounded-full hover:bg-black hover:text-white transition-all shadow-xl">
                <ShoppingCart size={16} />
              </button>
              <button className="bg-white p-3 rounded-full hover:bg-black hover:text-white transition-all shadow-xl">
                <Eye size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-sm font-serif italic text-gray-900">
              {p.name}
            </h3>
            <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">
              {p.technique} • {p.size}
            </p>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold block">
              ₹{p.price.toLocaleString()}
            </span>
            {onSale && (
              <span className="text-[9px] line-through text-gray-300">
                ₹{p.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Footer of card */}
        <div className="pt-3 border-t border-gray-50 flex justify-between items-center">
          <div className="flex gap-1">
            {p.color.slice(0, 3).map((c, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gray-200 border border-white"
                title={c}
              />
            ))}
          </div>
          <ArrowUpRight
            size={12}
            className="text-gray-300 group-hover:text-amber-700 transition-colors"
          />
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Page ---
export default function RugSifiShop() {
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

  // Filter Options
  const options = useMemo(
    () => ({
      techniques: [...new Set(carpets.map((c) => c.technique))],
      sizes: [...new Set(carpets.map((c) => c.size))].sort(),
      colors: [...new Set(carpets.flatMap((c) => c.color))],
    }),
    [],
  );

  // Filter Logic
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
        return (
          tMatch &&
          sMatch &&
          cMatch &&
          p.price <= activeFilters.maxPrice &&
          p.name.toLowerCase().includes(search.toLowerCase())
        );
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
            <a href="#" className="hover:text-black">
              Heritage
            </a>
            <a href="#" className="hover:text-black">
              Bespoke
            </a>
          </div>

          <div className="text-center">
            <h1 className="text-2xl md:text-4xl tracking-tighter font-serif italic font-light">
              RugSifi
            </h1>
            <p className="text-[7px] uppercase tracking-[0.6em] opacity-40 -mt-1">
              Modern Indian Heritage
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <div className="hidden md:flex items-center bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
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
        {/* Sidebar Filters */}
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

        {/* Product Section */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {carpets.map((p) => (
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
                className={`w-10 h-10 rounded-full border text-[10px] font-bold transition-all ${currentPage === i + 1 ? "bg-black text-white" : "text-gray-300 hover:border-black"}`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* --- LUXURY FOOTER --- */}
      <footer className="bg-gray-50 border-t border-gray-100 pt-24 pb-12 mt-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif italic">RugSifi</h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Ethically crafted Indian rugs, bridging ancient heritage with
              contemporary spaces.
            </p>
            <div className="flex gap-4 opacity-30">
              <Instagram size={18} />
              <Facebook size={18} />
              <Linkedin size={18} />
            </div>
          </div>
          <div className="space-y-6 text-[10px] uppercase tracking-widest font-bold">
            <h4 className="text-gray-900 underline underline-offset-8 decoration-amber-600">
              Explore
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-black cursor-pointer">Collections</li>
              <li className="hover:text-black cursor-pointer">Bespoke Loom</li>
              <li className="hover:text-black cursor-pointer">
                Artisan Stories
              </li>
            </ul>
          </div>
          <div className="space-y-6 text-[10px] uppercase tracking-widest font-bold">
            <h4 className="text-gray-900 underline underline-offset-8 decoration-amber-600">
              Assistance
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-black cursor-pointer">Care Guide</li>
              <li className="hover:text-black cursor-pointer">Shipping</li>
              <li className="hover:text-black cursor-pointer">Returns</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-900 underline underline-offset-8 decoration-amber-600">
              Atelier
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Industrial Estate, Bhadohi,
              <br />
              Uttar Pradesh, 221401
            </p>
            <p className="text-xs font-bold text-amber-900">+91 9559140222</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Helper Components ---

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
              className={`w-3.5 h-3.5 border rounded-sm transition-all duration-300 flex items-center justify-center ${isChecked ? "bg-amber-800 border-amber-800" : "border-gray-200 group-hover:border-amber-700"}`}
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
