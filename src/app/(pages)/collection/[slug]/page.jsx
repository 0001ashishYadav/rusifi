"use client";
import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

const RUGS = [
  {
    id: 1,
    name: "Rive Hand Tufted Woollen And Viscose Rug",
    size: "6 x 4 ft - 12 x 9 ft",
    price: "From ₹ 27,800.00",
    image: "https://picsum.photos/seed/rug1/600/800",
  },
  {
    id: 2,
    name: "Inklet Hand Tufted Woollen And Viscose Rug",
    size: "6 x 4 ft - 12 x 9 ft",
    price: "From ₹ 27,800.00",
    image: "https://picsum.photos/seed/rug2/600/800",
  },
  {
    id: 3,
    name: "Petale Hand Tufted Woollen And Viscose Rug",
    size: "5 x 3 ft - 10 x 8 ft",
    price: "From ₹ 12,510.00",
    image: "https://picsum.photos/seed/rug3/600/800",
    discount: "10% OFF",
  },
  {
    id: 4,
    name: "Skein Hand Tufted Woollen And Viscose Rug",
    size: "5 x 3 ft - 10 x 8 ft",
    price: "From ₹ 12,510.00",
    image: "https://picsum.photos/seed/rug4/600/800",
    discount: "10% OFF",
  },
  {
    id: 5,
    name: "Wavy Hand Tufted Woollen And Viscose Rug",
    size: "5 x 3 ft - 10 x 8 ft",
    price: "From ₹ 12,510.00",
    image: "https://picsum.photos/seed/rug5/600/800",
    discount: "10% OFF",
  },
  {
    id: 6,
    name: "Celeste Hand Tufted Woollen And Viscose Rug",
    size: "5 x 3 ft - 10 x 8 ft",
    price: "From ₹ 7,100.00",
    image: "https://picsum.photos/seed/rug6/600/800",
  },
  {
    id: 7,
    name: "Wineyard Hand Tufted Woollen And Viscose Rug",
    size: "5 x 3 ft - 12 x 9 ft",
    price: "From ₹ 15,800.00",
    image: "https://picsum.photos/seed/rug7/600/800",
    discount: "10% OFF",
  },
  {
    id: 8,
    name: "Harvest Hand Tufted Woollen And Viscose Rug",
    size: "5 x 3 ft - 12 x 9 ft",
    price: "From ₹ 15,800.00",
    image: "https://picsum.photos/seed/rug8/600/800",
  },
  {
    id: 9,
    name: "Deep Coral Hand Tufted Woollen Rug",
    size: "5 x 3 ft - 12 x 9 ft",
    price: "From ₹ 15,800.00",
    image: "https://picsum.photos/seed/rug9/600/800",
  },
  {
    id: 10,
    name: "Verdant Hand Tufted Woollen Rug",
    size: "5 x 3 ft - 12 x 9 ft",
    price: "From ₹ 15,800.00",
    image: "https://picsum.photos/seed/rug10/600/800",
  },
  {
    id: 11,
    name: "Curvature Hand Tufted Woollen Rug",
    size: "5 x 3 ft - 12 x 9 ft",
    price: "From ₹ 15,800.00",
    image: "https://picsum.photos/seed/rug11/600/800",
  },
  {
    id: 12,
    name: "Nyrae Hand Tufted Woollen And Viscose Rug",
    size: "5 x 3 ft - 10 x 8 ft",
    price: "From ₹ 12,510.00",
    image: "https://picsum.photos/seed/rug12/600/800",
    discount: "10% OFF",
  },
  {
    id: 13,
    name: "Zinar Hand Tufted Woollen Rug",
    size: "6 x 4 ft",
    price: "From ₹ 19,500.00",
    image: "https://picsum.photos/seed/rug13/600/800",
  },
  {
    id: 14,
    name: "Negin Hand Tufted Woollen And Viscose Rug",
    size: "10 x 8 ft - 12 x 9 ft",
    price: "From ₹ 1,23,400.00",
    image: "https://picsum.photos/seed/rug14/600/800",
  },
  {
    id: 15,
    name: "Vesso Hand Tufted Woollen And Viscose Rug",
    size: "5 x 3 ft",
    price: "From ₹ 12,510.00",
    image: "https://picsum.photos/seed/rug15/600/800",
    discount: "10% OFF",
  },
  {
    id: 16,
    name: "Sarai Hand Tufted Woollen Rug",
    size: "5 x 3 ft - 8 x 5 ft",
    price: "From ₹ 8,550.00",
    image: "https://picsum.photos/seed/rug16/600/800",
    discount: "10% OFF",
  },
  {
    id: 17,
    name: "Pentagon Hand Tufted Woollen Rug",
    size: "8 x 5 ft",
    price: "₹ 20,850.00",
    image: "https://picsum.photos/seed/rug17/600/800",
    discount: "25% OFF",
  },
  {
    id: 18,
    name: "Stair-wave Hand Tufted Woollen Rug By Eeshaan Kashyap",
    size: "5 x 3 ft - 12 x 9 ft",
    price: "From ₹ 15,800.00",
    image: "https://picsum.photos/seed/rug18/600/800",
  },
  {
    id: 19,
    name: "Chakra Hand Tufted Woollen Rug By Eeshaan Kashyap",
    size: "5 x 3 ft - 12 x 9 ft",
    price: "From ₹ 15,800.00",
    image: "https://picsum.photos/seed/rug19/600/800",
  },
  {
    id: 20,
    name: "Roux Hand Tufted Woollen And Viscose Rug",
    size: "5 x 3 ft - 9 x 6 ft",
    price: "From ₹ 10,710.00",
    image: "https://picsum.photos/seed/rug20/600/800",
    discount: "10% OFF",
  },
];

const RugCard = ({ rug }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center group cursor-pointer"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
        <img
          src={rug.image}
          alt={rug.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {rug.discount && (
          <div className="absolute top-0 left-0 bg-white/90 px-2 py-1 text-[10px] font-medium tracking-wider text-gray-600">
            {rug.discount}
          </div>
        )}
      </div>
      <h3 className="text-center text-[15px] leading-tight serif mb-1 px-4 group-hover:text-gray-600 transition-colors">
        {rug.name}
      </h3>
      <p className="text-center text-[11px] text-gray-500 font-sans mb-1">
        {rug.size}
      </p>
      <p className="text-center text-[13px] font-medium font-sans">
        {rug.price}
      </p>
      {rug.rating && (
        <div className="flex items-center gap-1 mt-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={
                  i < Math.floor(rug.rating) ? "fill-black" : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400">({rug.reviews})</span>
        </div>
      )}
    </motion.div>
  );
};

const CollectionPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 max-w-3xl"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl serif uppercase tracking-widest mb-6">
          Handmade Rugs Online Store
        </h1>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
          Discover the epitome of artisan craftsmanship with our exquisite
          collection of handmade rugs. Meticulously crafted from a rich tapestry
          of materials, including wool, silk, jute, cotton, hemp, and recycled
          polyester, these rugs offer a harmonious blend of sustainability and
          luxury. Each piece is a testament to timeless elegance and
          environmental responsibility.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 w-full mb-20">
        {RUGS.map((rug) => (
          <RugCard key={rug.id} rug={rug} />
        ))}
      </div>

      <div className="flex items-center gap-6 text-sm font-light text-gray-500 mb-20">
        <span className="text-black border-b border-black pb-1 cursor-pointer">
          1
        </span>
        <span className="hover:text-black transition-colors cursor-pointer">
          2
        </span>
        <span className="hover:text-black transition-colors cursor-pointer">
          3
        </span>
        <span className="hover:text-black transition-colors cursor-pointer">
          24
        </span>
        <span className="cursor-pointer">›</span>
      </div>

      <section className="w-full border-t border-gray-100 pt-16 pb-24">
        <div className="max-w-4xl mx-auto space-y-10 text-sm text-gray-700 leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl serif uppercase tracking-wider text-black">
              Buy Rugs Online
            </h2>
            <p>
              If you plan to buy rugs online, it may be a fun experience,
              especially if you enjoy furnishing your house with lovely,
              high-quality decor items. Handmade rugs production is booming in
              India, where talented artisans create exquisite and distinctive
              patterns that highlight the nation's rich cultural past. One of
              the top handmade rugs online store is Obeetee Carpets, which sells
              a variety of carpets and rugs that are ideal for any home. It is
              crucial to take both the carpet's functionality and visual appeal
              into account when selecting the best handmade rug for your home.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-black">
              Why should you choose Obeetee Carpets to buy handmade rugs online?
            </h3>
            <p>
              If you are looking to buy handmade rugs online, Obeetee Carpets
              should be at the top of your list. Obeetee Carpets is one of the
              leading rug manufacturers in India, known for producing
              high-quality, handcrafted rugs that are both luxurious and
              durable. Here are some reasons why you should choose Obeetee
              Carpets to buy handmade rugs online:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Wide Selection:</strong> Obeetee Carpets offers a wide
                selection of rugs online, ranging from traditional to modern
                designs, in a variety of colors, shapes, and sizes. You can
                easily find a rug that suits your taste and decor.
              </li>
              <li>
                <strong>Handmade Craftsmanship:</strong> Obeetee Carpets is
                committed to preserving the ancient art of rug-making by
                employing skilled craftsmen who use traditional techniques to
                create each rug by hand. This ensures that each rug is unique,
                with its own character and story.
              </li>
              <li>
                <strong>Quality Materials:</strong> Obeetee Carpets only uses
                the highest quality materials, such as wool, silk, and cotton,
                to make their rugs. This ensures that the rugs are not only
                beautiful, but also durable and long-lasting.
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <p className="text-xs text-gray-400">
              © 2026 Handmade Rugs Store. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionPage;
