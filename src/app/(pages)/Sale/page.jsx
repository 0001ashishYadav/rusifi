"use client";
import { useState } from "react";

const rugBase = [
  { id: 1, name: "Turquoise and Tufted Woollen Anti Vacuum Rug", size: "5x7ft", originalPrice: "₹80,000", salePrice: "₹64,000", badge: "SALE", stars: 4, reviews: 12, img: "https://images.woodenstreet.de/image/cache/data/home-decors/rugs/white-wave-cotton-flat-weave-rug/updated/C-1-750x650.jpg" },
  { id: 2, name: "Terisoft and Tufted Woollen Rug", size: "4x6ft", originalPrice: "₹55,000", salePrice: "₹44,000", badge: "SALE", stars: 5, reviews: 8, img: "https://www.obeetee.in/cdn/shop/products/4_1_a74cc703-e1b0-4386-a8c0-2c3149c707f1.jpg?v=1756802004&width=800" },
  { id: 3, name: "Cuba Beige Two-toned Tufted Hooked Rug", size: "6x9ft", originalPrice: "₹70,000", salePrice: "₹56,000", badge: "SALE", stars: 4, reviews: 5, img: "https://www.obeetee.in/cdn/shop/products/2004680001-8x5_106698058.jpg?v=1756802972&width=500" },
  { id: 4, name: "Palton and Tufted Woollen Anti Vacuum Rug", size: "5x8ft", originalPrice: "₹65,000", salePrice: "₹48,750", badge: "SALE", stars: 0, reviews: 0, img: "https://www.obeetee.in/cdn/shop/files/14_a853c33c-ea83-4fcc-9311-4b69804f3944.jpg?v=1756801718&width=800" },
  { id: 5, name: "Dhruvan Hand Crafted Woollen Rug", size: "4x6ft", originalPrice: "₹42,000", salePrice: "₹31,500", badge: "SALE", stars: 4, reviews: 15, img: "https://www.obeetee.in/cdn/shop/files/2008190005.jpg?v=1756801107&width=800" },
  { id: 6, name: "Billie 5 Handtuft Rug", size: "3x5ft", originalPrice: "₹28,000", salePrice: "₹22,400", badge: "SALE", stars: 0, reviews: 0, img: "https://www.obeetee.in/cdn/shop/products/2E_da0f04e6-0ae0-4f1a-9fdd-44061a9f7d0b.jpg?v=1756801862&width=500" },
  { id: 7, name: "Quitman Hand Crafted Woollen Loom Rug", size: "5x7ft", originalPrice: "₹60,000", salePrice: "₹45,000", badge: "SALE", stars: 5, reviews: 3, img: "https://www.obeetee.in/cdn/shop/files/2005610001_cdf1bcd7-3225-460c-8ba9-62b6bd186445.jpg?v=1756801342&width=500" },
  { id: 8, name: "Turquoise Tufted Woollen Anti Vacuum Rug", size: "6x8ft", originalPrice: "₹72,000", salePrice: "₹54,000", badge: "SALE", stars: 0, reviews: 0, img: "https://www.obeetee.in/cdn/shop/files/2s_1553dec2-3589-4bc0-a6e0-a4df0700cefc.jpg?v=1756801652&width=500" },
  { id: 9, name: "Bravewood Effect Tufted Woollen Rug", size: "4x6ft", originalPrice: "₹50,000", salePrice: "₹37,500", badge: "SALE", stars: 0, reviews: 0, img: "https://www.obeetee.in/cdn/shop/files/111_61ca5929-99b9-4cf8-85c5-297b522fbfc3.jpg?v=1770025799&width=500" },
  { id: 10, name: "Olive Hand Tufted Woollen Vacuum Rug", size: "5x7ft", originalPrice: "₹58,000", salePrice: "₹43,500", badge: "SALE", stars: 4, reviews: 7, img: "https://www.obeetee.in/cdn/shop/files/4_4b854281-df71-46c6-84e4-38078f57232e.jpg?v=1756801662&width=500" },
  { id: 11, name: "Banaras Effect Tufted Flat Woven Rug", size: "3x5ft", originalPrice: "₹35,000", salePrice: "₹26,250", badge: "NEW", stars: 5, reviews: 4, img: "https://luxeweavers.com/cdn/shop/articles/Luxe_Weavers_Abstract_area_Rug.jpg?v=1620609787&width=940" },
  { id: 12, name: "Upholstered Moroccan Woollen Vacuum Rug", size: "6x9ft", originalPrice: "₹85,000", salePrice: "₹63,750", badge: "SALE", stars: 5, reviews: 11, img: "https://www.obeetee.in/cdn/shop/files/1_6b20d97d-8fc5-497c-8ffc-d5a60b91bdc1.jpg?v=1756800853&width=500" },
  { id: 13, name: "Paletton Tufted Woollen Flat Vacuum Rug", size: "4x6ft", originalPrice: "₹48,000", salePrice: "₹36,000", badge: "SALE", stars: 0, reviews: 0, img: "https://www.obeetee.in/cdn/shop/products/0083230563-3x2.6_9838716.jpg?v=1756802767&width=800" },
  { id: 14, name: "Quitman 5 Tufted Woollen Vacuum Rug", size: "5x7ft", originalPrice: "₹55,000", salePrice: "₹41,250", badge: "SALE", stars: 5, reviews: 6, img: "https://www.obeetee.in/cdn/shop/files/0300050002_e0452bcc-fcce-4e2e-9f43-2b6bd4bbc678.jpg?v=1756802882&width=800" },
  { id: 15, name: "Paletton Tufted Woollen Flat House Rug", size: "6x8ft", originalPrice: "₹68,000", salePrice: "₹51,000", badge: "SALE", stars: 0, reviews: 0, img: "https://www.obeetee.in/cdn/shop/files/2008200004.jpg?v=1756801102&width=800" },
  { id: 16, name: "Static and Tufted Woollen Anti Vacuum Rug", size: "4x6ft", originalPrice: "₹52,000", salePrice: "₹39,000", badge: "SALE", stars: 5, reviews: 9, img: "https://static.vecteezy.com/system/resources/previews/026/623/069/original/carpet-design-texture-persian-and-tebriz-rugs-design-print-fabric-design-mandala-vector.jpg" },
  { id: 17, name: "Undercraft Tufted Woollen Drawe Rug", size: "5x7ft", originalPrice: "₹62,000", salePrice: "₹46,500", badge: "SALE", stars: 0, reviews: 0, img: "https://i5.walmartimages.com/asr/bd19e4b7-68b3-499c-9b74-9fafda13897f.e38e2d6cf07b92190a7694c7f07a3dde.jpeg" },
  { id: 18, name: "Vimy World Tufted Woollen Explosion Rug", size: "4x6ft", originalPrice: "₹45,000", salePrice: "₹33,750", badge: "SALE", stars: 0, reviews: 0, img: "https://www.obeetee.in/cdn/shop/files/s1_c6d45c5c-cdba-477b-8d33-fbfe94dd360a.jpg?v=1756801636&width=800" },
  { id: 19, name: "Undercraft Tufted Woollen Charoe Rug", size: "5x7ft", originalPrice: "₹55,000", salePrice: "₹41,250", badge: "SALE", stars: 0, reviews: 0, img: "https://www.obeetee.in/cdn/shop/files/2008190005.jpg?v=1756801107&width=800" },
  { id: 20, name: "Lighted Tufted Woollen Drawe Rug", size: "6x8ft", originalPrice: "₹72,000", salePrice: "₹54,000", badge: "SALE", stars: 0, reviews: 0, img: "https://www.obeetee.in/cdn/shop/files/2008200004.jpg?v=1756801102&width=800" },
];

const rugs = [
  ...rugBase,
  ...rugBase.map((r) => ({ ...r, id: r.id + 20, name: r.name + " II" })),
  ...rugBase.map((r) => ({ ...r, id: r.id + 40, name: r.name + " III" })),
];

const ITEMS_PER_PAGE = 20;
const TOTAL_PAGES = Math.ceil(rugs.length / ITEMS_PER_PAGE);

function StarRating({ stars, reviews }) {
  if (!reviews) return null;
  return (
    <div className="flex items-center gap-0.5 mt-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-3 h-3 ${s <= stars ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-[10px] text-gray-400 ml-0.5">({reviews})</span>
    </div>
  );
}

function RugCard({ rug }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="group relative bg-white border border-gray-100 rounded overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {rug.badge && (
          <span
            className={`absolute top-2 left-2 z-10 text-[9px] font-bold px-1.5 py-0.5 tracking-widest ${
              rug.badge === "NEW" ? "bg-blue-600 text-white" : "bg-green-600 text-white"
            }`}
          >
            {rug.badge}
          </span>
        )}

        <button
          onClick={() => setWishlisted((w) => !w)}
          className="absolute top-2 right-2 z-10 w-7 h-7 bg-white rounded-full shadow flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg
            className={`w-3.5 h-3.5 transition-colors ${wishlisted ? "fill-red-500 text-red-500" : "fill-none text-gray-400"}`}
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={rug.img}
          alt={rug.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full py-2.5 bg-black text-white text-[10px] font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors">
            Quick Add
          </button>
        </div>
      </div>

      <div className="p-2.5">
        <p className="text-[11px] text-gray-700 font-medium leading-tight line-clamp-2 cursor-pointer hover:text-black">
          {rug.name}
        </p>
        <p className="text-[10px] text-gray-400 mt-0.5">{rug.size}</p>
        <StarRating stars={rug.stars} reviews={rug.reviews} />
        <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
          <span className="text-[10px] text-gray-400 line-through">{rug.originalPrice}</span>
          <span className="text-[11px] font-bold text-red-600">{rug.salePrice}</span>
        </div>
      </div>
    </div>
  );
}

export default function RugSalePage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedRugs = rugs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (p) => {
    if (p < 1 || p > TOTAL_PAGES) return;
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* ── BREADCRUMB ── */}
      <div className="bg-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[11px] tracking-widest uppercase text-gray-400 font-light">
          <a href="#" className="hover:text-black transition-colors">Home</a>
          <span>·</span>
          <a href="#" className="hover:text-black transition-colors">Shop</a>
          <span>·</span>
          <span className="text-gray-500">Sale</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="bg-white text-center pt-6 pb-12 px-4 border-b border-gray-100">
        <h1
          className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 mb-6"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", letterSpacing: "0.15em" }}
        >
          Sale
        </h1>
        <p
          className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed font-light"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Transform your living space with our exquisite collection of handmade carpets, now on sale!
          Immerse yourself in a world of timeless craftsmanship and vibrant designs. From intricate
          patterns to luxurious textures, these carpets add a touch of elegance to any room. Don&apos;t miss
          this chance to buy carpets online and transform your home today!
        </p>
      </section>

      {/* ── FILTER / SORT BAR ── */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-700 border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-50 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="21" y1="4" x2="14" y2="4" />
                <line x1="10" y1="4" x2="3" y2="4" />
                <line x1="21" y1="12" x2="12" y2="12" />
                <line x1="8" y1="12" x2="3" y2="12" />
                <line x1="21" y1="20" x2="16" y2="20" />
                <line x1="12" y1="20" x2="3" y2="20" />
                <circle cx="12" cy="4" r="2" />
                <circle cx="10" cy="12" r="2" />
                <circle cx="14" cy="20" r="2" />
              </svg>
              Filter
            </button>
            <span className="text-[11px] text-gray-400">{rugs.length} products</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-gray-500 whitespace-nowrap hidden sm:block">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-[11px] border border-gray-200 rounded px-2 py-1.5 text-gray-700 bg-white focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="rating">Best Rated</option>
            </select>
          </div>
        </div>

        {filterOpen && (
          <div className="bg-gray-50 border-t border-gray-100 px-4 py-5">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {["Size", "Color", "Material", "Style", "Price"].map((f) => (
                <div key={f}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-2">{f}</p>
                  <div className="flex flex-col gap-1.5">
                    {["Option 1", "Option 2", "Option 3"].map((o) => (
                      <label key={o} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-3 h-3 accent-black rounded" />
                        <span className="text-[11px] text-gray-600">{o}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── PRODUCT GRID ── */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {paginatedRugs.map((rug) => (
            <RugCard key={rug.id} rug={rug} />
          ))}
        </div>

        {/* ── PAGINATION ── */}
        <div className="flex flex-col items-center gap-3 mt-12">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-8 h-8 border border-gray-200 rounded text-xs hover:bg-gray-50 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ‹
            </button>

            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`w-8 h-8 rounded text-xs font-medium flex items-center justify-center transition-colors ${
                  p === currentPage ? "bg-black text-white" : "border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === TOTAL_PAGES}
              className="w-8 h-8 border border-gray-200 rounded text-xs hover:bg-gray-50 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              ›
            </button>
          </div>
          <p className="text-[11px] text-gray-400">
            Page {currentPage} of {TOTAL_PAGES} — {rugs.length} products
          </p>
        </div>
      </main>
    </div>
  );
}