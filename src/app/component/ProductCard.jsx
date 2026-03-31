"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowUpRight, ShoppingBag, Eye } from "lucide-react";

const ProductCard = ({ p }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isOnSale = p.originalPrice > p.price;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
    >
      {/* --- IMAGE SECTION --- */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F6F5]">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {isOnSale && (
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="bg-amber-600 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg"
            >
              Offer
            </motion.span>
          )}
        </div>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-all shadow-sm">
          <Heart
            size={15}
            className={p.id % 4 === 0 ? "fill-red-500 text-red-500" : ""}
          />
        </button>

        {/* Image: Now uses 'p.image' from your data.js */}
        <motion.img
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover"
        />

        {/* Hover Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/10 backdrop-blur-[2px] z-10 flex flex-col justify-end p-6"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex gap-2"
              >
                <button className="flex-1 bg-white text-black py-3 rounded-lg text-[9px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all shadow-xl">
                  <ShoppingBag size={14} /> Add to Cart
                </button>
                <button className="p-3 bg-white text-black rounded-lg hover:bg-black hover:text-white transition-all shadow-xl">
                  <Eye size={16} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="p-5 space-y-2">
        <div className="flex justify-between items-start">
          <div className="space-y-0.5">
            <h3 className="text-sm font-serif italic text-gray-900 group-hover:text-amber-700 transition-colors">
              {p.name}
            </h3>
            <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">
              {p.technique} • {p.size}
            </p>
          </div>
          <div className="text-right">
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold text-gray-900">
                ₹{p.price.toLocaleString()}
              </span>
              {isOnSale && (
                <span className="text-[9px] line-through text-gray-300">
                  ₹{p.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Color Dots */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex gap-1">
            {p.color.slice(0, 3).map((c, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full border border-gray-100 shadow-sm"
                title={c}
                style={{
                  backgroundColor: c.toLowerCase().includes("blue")
                    ? "#1e3a8a"
                    : c.toLowerCase().includes("beige")
                      ? "#f5f5dc"
                      : "#888",
                }}
              />
            ))}
          </div>
          <button className="text-[8px] font-bold uppercase tracking-widest text-gray-400 hover:text-black flex items-center gap-1">
            View Details <ArrowUpRight size={10} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
