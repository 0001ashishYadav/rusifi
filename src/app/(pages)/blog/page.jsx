"use client"; // <-- Ye Next.js / SSR ke liye zaruri hai

import React from "react";
import { motion } from "motion/react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

const CATEGORIES = [
  "All posts",
  "bohemian carpets",
  "bohemian style",
  "carpet",
  "carpet care",
  "carpet for home",
  "contemporary living",
  "contemporary style",
  "craftmanship",
  "Gypsy Oasis",
  "kids room rugs",
  "Living room rugs",
  "playroom rugs",
  "rug",
  "Rug size",
  "rug store",
  "silk sugs",
  "weaver",
];

const POSTS = [
  {
    id: 1,
    title: "GET YOUR HOME READY FOR THE WARMER SEASON",
    excerpt:
      "The light breeze still feels cold, but the sun's warmth balances it out. With every day passing, the days have started to feel longer while the nights still ask you to use a Duvet. The pleasant atm...",
    image:
      "https://inhouse.sa/media/catalog/product/cache/374449341643a9dc7b1eb5634b01a040/1/0/102010201204.jpg",
  },
  {
    id: 2,
    title: "THE ART OF BALANCED INTERIORS: BOLD VS. NEUTRAL",
    excerpt:
      "There are spaces that you keep thinking about even after youve left. These spaces don't stand out due to flashy colours or overwhelming decor. Instead, every element there feels thoughtfully chosen...",
    image:
      "https://onlymat.com/cdn/shop/products/image_fa47798b-0bf6-4771-b7af-ae629e85b6f4.jpg?v=1626346894",
  },
  {
    id: 3,
    title: "COZY MINIMALISM: SUBTLE BEDDING LOOKS THAT STILL FEEL LUXE",
    excerpt:
      "Minimalism in interiors has changed significantly from stark white rooms and strict simplicity. Today, a softer style is gaining popularity. This approach blends restraint with warmth and clarity w...",
    image:
      "https://sg-test-11.slatic.net/p/a01cb194f5b0d2fd0344c728f3afbf87.jpg",
  },
  {
    id: 4,
    title: "INTRODUCING DOMUS - WHERE HOME BECOMES ART",
    excerpt:
      "It's not just the people who make a house into a home. Along with the emotions, it's the elements that you use to put it together. Practically, you'd be sitting in a concrete tent if not for decora...",
    image:
      "https://www.giffywalls.in/cdn/shop/files/persian-carpet-wallpaper-mural-5763835.jpg?v=1773400674&width=1946",
  },
  {
    id: 5,
    title: "WHEN HOMES BECOME A CELEBRATION",
    excerpt:
      "India, as a country, is known for its diversity. There is hardly a month in the calendar when there is no major festival or celebration here. As we approach the peak of spring, the festival of Holi...",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/AUGUST/22/uDSVaTpz_af931ce0b8084c158b302c6b76942d7f.jpg",
  },
  {
    id: 6,
    title: "RUGS DESIGNED FOR MODERN SPACES: MORPHOLOGY AND PRAKRITI",
    excerpt:
      "There are times when you may just run out of creativity. As a writer, you'll have no words, as a designer, you won't be able to pull off an art piece, etc. However, these situations will only throw...",
    image:
      "https://microless.com/cdn/products/ee1e15e389a09abe77da256251bb1a3e-hi.jpg",
  },
  {
    id: 7,
    title: "MUST-HAVE ACCENT FURNITURE ITEMS FOR 2026 INTERIOR TRENDS IN INDIA",
    excerpt:
      "Luxury interiors in India are entering a time of quiet confidence. The focus has moved from overt opulence to thoughtful curation. Homes now feel layered, personal, and lasting. In 2026, luxury is ...",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/the-bhadohi-mirzapur-region--indias-largest-carpet-manufacturing-hub--is-known-for-producing-at-lea-033845111-16x9_0.png?VersionId=R0dP1o51u__Jgfk25lz7RFTAb4erjF0.&size=690:388",
  },
  {
    id: 8,
    title: "FOR MOMENTS THAT LINGER",
    excerpt:
      "Beyond Product. Into Life. We often discuss our products. We focus on craftsmanship, heritage, materials, and design. We talk about knots per inch and the hands that create each piece. But today, ...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YkO7tER1FcbA4pMPkMmx5XjP0GDOPf-gyg&s",
  },
  {
    id: 9,
    title:
      "FROM CONCEPT TO CREATION: INSIDE OBEETEE'S FIRST COLLABORATION WITH AN ARCHITECT",
    excerpt:
      "Obeetee has been in the retail segment for around 6 years. In this time, we have collaborated with many designers. Just as designer wearables have emerged, so too have designer rugs. We teamed up ...",
    image:
      "https://euronics.co.in/wp-content/uploads/2022/06/Montreo-Carpet-Mat-Madein-Holland-3015.jpg",
  },
];

const PostCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="flex flex-col space-y-6 group cursor-pointer"
    >
      <div className="overflow-hidden aspect-[16/10] bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-[17px] md:text-[19px] font-light tracking-[0.1em] uppercase leading-tight text-[#1A1A1A] serif">
          {post.title}
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed font-light line-clamp-4">
          {post.excerpt}
        </p>
        <button className="text-[12px] tracking-widest uppercase underline underline-offset-8 hover:opacity-60 transition-opacity">
          Read more
        </button>
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white">
      {/* Header Area */}
      <header className="py-12 px-4 flex flex-col items-center border-b border-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] uppercase mb-10 text-center"
        >
          KNOW YOUR CARPET
        </motion.h1>

        {/* Category Navigation */}
        <nav className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] tracking-widest uppercase text-gray-500">
          {CATEGORIES.map((cat, idx) => (
            <span
              key={cat}
              className={`cursor-pointer hover:text-black transition-colors ${idx === 0 ? "text-black font-medium" : ""}`}
            >
              {cat}
            </span>
          ))}
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Featured Hero Card */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-[21/9] md:aspect-[21/7] overflow-hidden mb-20 group cursor-pointer"
        >
          <img
            src="https://woolsnz.imgix.net/uploads/2025/03/Rolling-Downs-2-masthead.png?auto=format%2Ccompress&fit=max&ixlib=php-3.3.0&q=70&w=1900&s=a4263f9fb7beef7adb38d4ac0a68e481"
            alt="Featured Post"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/5 flex flex-col justify-center px-8 md:px-16">
            <div className="max-w-lg space-y-6">
              <h2 className="text-3xl md:text-5xl font-light tracking-[0.15em] uppercase leading-tight text-white serif">
                A SMALL CUSHION EDIT FOR NEUTRAL HOMES
              </h2>
              <button className="bg-white text-black px-8 py-3 text-[11px] tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300">
                Read more
              </button>
            </div>
          </div>
        </motion.section>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 mb-24">
          {POSTS.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Footer Area with Icons */}
        <div className="border-t border-gray-100 pt-12 pb-8 flex flex-col items-center space-y-10">
          <div className="flex items-center gap-12 text-[#1A1A1A]">
            <Phone size={18} className="cursor-pointer hover:opacity-60" />
            <MapPin size={18} className="cursor-pointer hover:opacity-60" />
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl serif tracking-[0.3em] uppercase font-bold">
                OBEETEE
              </span>
              <span className="text-[8px] tracking-[0.4em] uppercase text-gray-400">
                Carpets & Home
              </span>
            </div>
            <Heart size={18} className="cursor-pointer hover:opacity-60" />
            <User size={18} className="cursor-pointer hover:opacity-60" />
            <Search size={18} className="cursor-pointer hover:opacity-60" />
            <ShoppingBag
              size={18}
              className="cursor-pointer hover:opacity-60"
            />
          </div>

          {/* Footer Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] tracking-[0.2em] uppercase font-medium text-gray-500">
            {[
              "Carpets",
              "Cushions",
              "Bedding",
              "Furniture",
              "Proud to Be Indian",
              "Collaborations",
              "Bespoke & Custom",
              "Our Story",
              "Stores & Connect",
              "Sale",
            ].map((link) => (
              <span
                key={link}
                className="cursor-pointer hover:text-black transition-colors"
              >
                {link}
              </span>
            ))}
          </nav>

          {/* Pagination */}
          <div className="pt-12 flex items-center gap-6 text-[13px] tracking-widest text-gray-400">
            <span className="text-black border-b border-black pb-1 cursor-pointer font-medium">
              1
            </span>
            <span className="cursor-pointer hover:text-black transition-colors">
              2
            </span>
            <span className="cursor-pointer hover:text-black transition-colors">
              3
            </span>
            <span>...</span>
            <span className="cursor-pointer hover:text-black transition-colors">
              48
            </span>
            <ChevronRight
              size={16}
              className="cursor-pointer hover:text-black transition-colors"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
