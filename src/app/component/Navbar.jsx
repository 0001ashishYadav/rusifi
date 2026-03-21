
"use client";

import { Menu, X, Heart, User, Search, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const menuItems = [
    {
      name: "Carpets",
      dropdown: [
        {
          title: "Rooms",
          items: ["Living Room", "Dining Room", "Bed Room", "Puja Room", "Corridors"],
        },
        {
          title: "Size",
          items: ["5x3", "6x4", "8x5", "9x6", "10x8", "12x9", "Over Sized", "Round", "Runner", "Unshaped"],
        },
        {
          title: "Material",
          items: ["Wool", "Wool & Silk", "Wool & Viscose", "Wool & Jute", "Jute", "Polyester", "Bamboo Silk", "Wool & Bamboo Silk"],
        },
        {
          title: "Construction",
          items: ["Hand Knotted", "Hand Tufted", "Dhurrie", "Handloom"],
        },
        {
          title: "Lifestyle",
          items: ["Traditional", "Contemporary", "Transitional"],
        },
        {
          title: "Collections",
          items: ["Revisiting Classics", "Viraasat"],
        },
      ],
    },
    { name: "Cushions", dropdown: ["Cotton Cushions", "Designer Cushions", "Printed Cushions", "ram ram hre hre ","hre krishna ","jay bajrng bali","hre ram hre ram","mata janki","jay maa bhavani","her her mahadev dev",] },
    { name: "Bedding", dropdown: ["Bedsheets", "Quilts", "Blankets", "Dohars"] },
    { name: "Furniture", dropdown: ["Tables", "Chairs", "Sofas", "Benches"] },
    { name: "Proud To Be Indian", dropdown: ["Proud to Be Indian","Tarun Tahiliani","Shantanu & Nikhil","Raghavendra Rathore","Abraham & Thakore","JJ Valaya"] },
    { name: "Collaborations", dropdown: ["Designer Collabs", "Luxury Series"] },
    { name: "Bespoke & Custom", dropdown: ["Custom Rugs", "Design Your Own"] },
    { name: "Our Story", dropdown: ["About Us", "Craftsmanship", "Heritage"] },
    { name: "Stores & Connect", dropdown: ["Store Locator", "Contact Us"] },
    { name: "Sale", dropdown: ["Offers", "Discount", "Clearance"] },
  ];

  return (
    <nav className="w-full  h-25 bg-zinc-500/55  hover:text-black hover:bg-white  text-white fixed top-0 left-0 z-50">
      {/* TOP */}
      <div className="max-w-8xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="hidden md:flex gap-4 items-center">
          <span>📞</span>
          <span>📍</span>
        </div>

        <h1 className="text-lg md:text-xl font-serif tracking-widest text-center leading-tight">
          OBETEE
          <br />
          <span className="text-xs">carpet & home</span>
        </h1>

        <div className="hidden md:flex gap-6 items-center">
          <Heart size={18} />
          <User size={18} />
          <Search size={18} />
          <ShoppingCart size={18} />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MENU */}
      <div className="hidden md:flex justify-center gap-8 py-2 relative">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="relative"
          >
            <span className="cursor-pointer hover:underline text-sm whitespace-nowrap">
              {item.name}
            </span>

            {/* MEGA MENU */}
            {hovered === index && (
              <div className="absolute left-0 top-full w-screen bg-white text-black shadow-2xl p-10 flex justify-between gap-12">

                {/* LEFT */}
                <div className="grid grid-cols-3 gap-8">
                  {/* 👇 condition check */}
                  {typeof item.dropdown[0] === "object" ? (
                    item.dropdown.map((section, i) => (
                      <div key={i}>
                        <h3 className="font-semibold mb-2">{section.title}</h3>
                        {section.items.map((sub, j) => (
                          <div key={j} className="text-sm hover:text-red-600 cursor-pointer">
                            {sub}
                          </div>
                        ))}
                      </div>
                    ))
                  ) : (
                    item.dropdown.map((sub, i) => (
                      <div key={i} className="text-sm hover:text-red-600 cursor-pointer">
                        {sub}
                      </div>
                    ))
                  )}
                </div>

                {/* RIGHT IMAGES */}
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    className="w-20 h-36 object-cover rounded"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1582582429416-9c4c5b0f0c1b"
                    className="w-20 h-36 object-cover rounded"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MOBILE */}
      {isOpen && (
        <div className="md:hidden bg-red-700 px-4 pb-4 space-y-3">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div className="border-b border-white/20 pb-2 font-semibold">
                {item.name}
              </div>

              <div className="pl-4 text-sm">
                {typeof item.dropdown[0] === "object" ? (
                  item.dropdown.map((section, i) => (
                    <div key={i}>
                      <div className="font-semibold mt-2">{section.title}</div>
                      {section.items.map((sub, j) => (
                        <div key={j} className="py-1">{sub}</div>
                      ))}
                    </div>
                  ))
                ) : (
                  item.dropdown.map((sub, i) => (
                    <div key={i} className="py-1">{sub}</div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}