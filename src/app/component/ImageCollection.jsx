"use client";

import React from "react";

// Install karo: npm install swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    images: [
      "https://www.obeetee.in/cdn/shop/files/a2_6e27ad8a-f860-4122-85cd-6a3012b7f862.jpg?v=1756800680&width=600",
      "https://www.obeetee.in/cdn/shop/files/1_0c0f6431-9b8e-4e78-b3be-f31228d54cb1.jpg?v=1756800680&width=600",
      "https://www.obeetee.in/cdn/shop/files/a1_2818defc-d81f-4bb8-96be-cb2bd0933bfd.jpg?v=1756800680&width=600",
    ],
    name: "Sepia Hand Knotted Woollen Viscose And Silk Rug By Tarun Tahiliani",
    size: "9 x 6 ft",
    price: "From ₹ 7,79,700.00",
  },
  {
    id: 2,
    images: [
      "https://www.obeetee.in/cdn/shop/files/1_9050cd9c-0c05-4df4-8559-877f5911703f.jpg?v=1756800684&width=1200",
      "https://www.obeetee.in/cdn/shop/files/4_a2ba507c-ac4a-4f2e-b80e-8fb289b05795.jpg?v=1756800684&width=1200",
      "https://www.obeetee.in/cdn/shop/files/4_a2ba507c-ac4a-4f2e-b80e-8fb289b05795.jpg?v=1756800684&width=1200",
    ],
    name: "Sindoori Hand Knotted Woollen And Viscose Rug By Tarun Tahiliani",
    size: "9 x 6 ft – 10 x 8 ft",
    price: "From ₹ 3,05,700.00",
  },
  {
    id: 3,
    images: [
      "https://www.obeetee.in/cdn/shop/files/1_91e9bcd1-e224-44b5-8fbe-281fe2b28dfc.jpg?v=1756800681&width=600",
      "https://www.obeetee.in/cdn/shop/files/6_c49e6e05-8cf9-493a-a1e9-2f988c3ac9dc.jpg?v=1756800681&width=600",
      "https://www.obeetee.in/cdn/shop/files/4_9d85d4e0-5945-4a10-8083-746124a39080.jpg?v=1756800681&width=600",
    ],
    name: "Tahira-X Hand Knotted Woollen And Silk Rug By Tarun Tahiliani",
    size: "10 x 8 ft",
    price: "From ₹ 9,24,000.00",
  },
  {
    id: 4,
    images: [
      "https://www.obeetee.in/cdn/shop/products/MPA0520.jpg?v=1756802789&width=600",
      "https://www.obeetee.in/cdn/shop/products/0708001-Brocade-Garden_-Antique-Frames-6X9.jpg?v=1756802789&width=600",
      "https://www.obeetee.in/cdn/shop/files/3_921566cb-0243-48bb-a9b3-a1c1b857bb57.jpg?v=1756800681&width=600",
    ],
    name: "Alvin Hand Knotted Woollen and Silk Runner By Tarun Tahiliani",
    size: "8 x 2.06 ft",
    price: "₹ 2,77,200.00",
  },
  {
    id: 5,
    images: [
      "https://www.obeetee.in/cdn/shop/files/a2_6e27ad8a-f860-4122-85cd-6a3012b7f862.jpg?v=1756800680&width=600",
      "https://www.obeetee.in/cdn/shop/files/1_0c0f6431-9b8e-4e78-b3be-f31228d54cb1.jpg?v=1756800680&width=600",
      "https://www.obeetee.in/cdn/shop/files/a1_2818defc-d81f-4bb8-96be-cb2bd0933bfd.jpg?v=1756800680&width=600",
    ],
    name: "Sepia Hand Knotted Woollen Viscose And Silk Rug By Tarun Tahiliani",
    size: "9 x 6 ft",
    price: "From ₹ 7,79,700.00",
  },
  {
    id: 6,
    images: [
      "https://www.obeetee.in/cdn/shop/files/1_9050cd9c-0c05-4df4-8559-877f5911703f.jpg?v=1756800684&width=1200",
      "https://www.obeetee.in/cdn/shop/files/4_a2ba507c-ac4a-4f2e-b80e-8fb289b05795.jpg?v=1756800684&width=1200",
      "https://www.obeetee.in/cdn/shop/files/4_a2ba507c-ac4a-4f2e-b80e-8fb289b05795.jpg?v=1756800684&width=1200",
    ],
    name: "Sindoori Hand Knotted Woollen And Viscose Rug By Tarun Tahiliani",
    size: "9 x 6 ft – 10 x 8 ft",
    price: "From ₹ 3,05,700.00",
  },
  {
    id: 7,
    images: [
      "https://www.obeetee.in/cdn/shop/files/1_91e9bcd1-e224-44b5-8fbe-281fe2b28dfc.jpg?v=1756800681&width=600",
      "https://www.obeetee.in/cdn/shop/files/6_c49e6e05-8cf9-493a-a1e9-2f988c3ac9dc.jpg?v=1756800681&width=600",
      "https://www.obeetee.in/cdn/shop/files/4_9d85d4e0-5945-4a10-8083-746124a39080.jpg?v=1756800681&width=600",
    ],
    name: "Tahira-X Hand Knotted Woollen And Silk Rug By Tarun Tahiliani",
    size: "10 x 8 ft",
    price: "From ₹ 9,24,000.00",
  },
  {
    id: 8,
    images: [
      "https://www.obeetee.in/cdn/shop/products/MPA0520.jpg?v=1756802789&width=600",
      "https://www.obeetee.in/cdn/shop/products/0708001-Brocade-Garden_-Antique-Frames-6X9.jpg?v=1756802789&width=600",
      "https://www.obeetee.in/cdn/shop/files/3_921566cb-0243-48bb-a9b3-a1c1b857bb57.jpg?v=1756800681&width=600",
    ],
    name: "Alvin Hand Knotted Woollen and Silk Runner By Tarun Tahiliani",
    size: "8 x 2.06 ft",
    price: "₹ 2,77,200.00",
  },
  {
    id: 9,
    images: [
      "https://www.obeetee.in/cdn/shop/products/0007050009.jpg?v=1756802781&width=600",
      "https://www.obeetee.in/cdn/shop/files/1_0c0f6431-9b8e-4e78-b3be-f31228d54cb1.jpg?v=1756800680&width=600",
      "https://www.obeetee.in/cdn/shop/files/a1_2818defc-d81f-4bb8-96be-cb2bd0933bfd.jpg?v=1756800680&width=600",
    ],
    name: "Sepia Hand Knotted Woollen Viscose And Silk Rug By Tarun Tahiliani",
    size: "9 x 6 ft",
    price: "From ₹ 7,79,700.00",
  },
  {
    id: 10,
    images: [
      "https://www.obeetee.in/cdn/shop/files/1_9050cd9c-0c05-4df4-8559-877f5911703f.jpg?v=1756800684&width=1200",
      "https://www.obeetee.in/cdn/shop/files/4_a2ba507c-ac4a-4f2e-b80e-8fb289b05795.jpg?v=1756800684&width=1200",
      "https://www.obeetee.in/cdn/shop/files/4_a2ba507c-ac4a-4f2e-b80e-8fb289b05795.jpg?v=1756800684&width=1200",
    ],
    name: "Sindoori Hand Knotted Woollen And Viscose Rug By Tarun Tahiliani",
    size: "9 x 6 ft – 10 x 8 ft",
    price: "From ₹ 3,05,700.00",
  },
  {
    id: 11,
    images: [
      "https://www.obeetee.in/cdn/shop/products/MPA0655.jpg?v=1756802799&width=600",
      "https://www.obeetee.in/cdn/shop/files/6_c49e6e05-8cf9-493a-a1e9-2f988c3ac9dc.jpg?v=1756800681&width=600",
      "https://www.obeetee.in/cdn/shop/files/4_9d85d4e0-5945-4a10-8083-746124a39080.jpg?v=1756800681&width=600",
    ],
    name: "Tahira-X Hand Knotted Woollen And Silk Rug By Tarun Tahiliani",
    size: "10 x 8 ft",
    price: "From ₹ 9,24,000.00",
  },
  {
    id: 12,
    images: [
      "https://www.obeetee.in/cdn/shop/products/MPA0520.jpg?v=1756802789&width=600",
      "https://www.obeetee.in/cdn/shop/products/0708001-Brocade-Garden_-Antique-Frames-6X9.jpg?v=1756802789&width=600",
      "https://www.obeetee.in/cdn/shop/files/3_921566cb-0243-48bb-a9b3-a1c1b857bb57.jpg?v=1756800681&width=600",
    ],
    name: "Alvin Hand Knotted Woollen and Silk Runner By Tarun Tahiliani",
    size: "8 x 2.06 ft",
    price: "₹ 2,77,200.00",
  },
  {
    id: 13,
    images: [
      "https://www.obeetee.in/cdn/shop/files/a2_6e27ad8a-f860-4122-85cd-6a3012b7f862.jpg?v=1756800680&width=600",
      "https://www.obeetee.in/cdn/shop/files/1_0c0f6431-9b8e-4e78-b3be-f31228d54cb1.jpg?v=1756800680&width=600",
      "https://www.obeetee.in/cdn/shop/files/a1_2818defc-d81f-4bb8-96be-cb2bd0933bfd.jpg?v=1756800680&width=600",
    ],
    name: "Sepia Hand Knotted Woollen Viscose And Silk Rug By Tarun Tahiliani",
    size: "9 x 6 ft",
    price: "From ₹ 7,79,700.00",
  },
  {
    id: 14,
    images: [
      "https://www.obeetee.in/cdn/shop/files/1_9050cd9c-0c05-4df4-8559-877f5911703f.jpg?v=1756800684&width=1200",
      "https://www.obeetee.in/cdn/shop/files/4_a2ba507c-ac4a-4f2e-b80e-8fb289b05795.jpg?v=1756800684&width=1200",
      "https://www.obeetee.in/cdn/shop/files/4_a2ba507c-ac4a-4f2e-b80e-8fb289b05795.jpg?v=1756800684&width=1200",
    ],
    name: "Sindoori Hand Knotted Woollen And Viscose Rug By Tarun Tahiliani",
    size: "9 x 6 ft – 10 x 8 ft",
    price: "From ₹ 3,05,700.00",
  },
  {
    id: 15,
    images: [
      "https://www.obeetee.in/cdn/shop/files/1_91e9bcd1-e224-44b5-8fbe-281fe2b28dfc.jpg?v=1756800681&width=600",
      "https://www.obeetee.in/cdn/shop/files/6_c49e6e05-8cf9-493a-a1e9-2f988c3ac9dc.jpg?v=1756800681&width=600",
      "https://www.obeetee.in/cdn/shop/files/4_9d85d4e0-5945-4a10-8083-746124a39080.jpg?v=1756800681&width=600",
    ],
    name: "Tahira-X Hand Knotted Woollen And Silk Rug By Tarun Tahiliani",
    size: "10 x 8 ft",
    price: "From ₹ 9,24,000.00",
  },
  {
    id: 16,
    images: [
      "https://www.obeetee.in/cdn/shop/products/MPA0520.jpg?v=1756802789&width=600",
      "https://www.obeetee.in/cdn/shop/products/0708001-Brocade-Garden_-Antique-Frames-6X9.jpg?v=1756802789&width=600",
      "https://www.obeetee.in/cdn/shop/files/3_921566cb-0243-48bb-a9b3-a1c1b857bb57.jpg?v=1756800681&width=600",
    ],
    name: "Alvin Hand Knotted Woollen and Silk Runner By Tarun Tahiliani",
    size: "8 x 2.06 ft",
    price: "₹ 2,77,200.00",
  },
];

function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-3">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Mousewheel, Pagination]}
        mousewheel={{
          forceToAxis: true,
          thresholdDelta: 15,
          sensitivity: 1,
        }}
        pagination={{
          clickable: false,

          renderBullet: (index, className) =>
            `<span class="${className} custom-dot"></span>`,
        }}
        loop={true}
        slidesPerView={1}
        speed={400}
        className="w-full aspect-[3/4] rounded-none"
        style={{ "--swiper-pagination-bottom": "8px" }}>
        {product.images.map((src, i) => (
          <SwiperSlide key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${product.name} ${i + 1}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text */}
      <div className="flex flex-col gap-1 px-1">
        <p
          className="text-stone-800 text-center leading-snug"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
            fontWeight: 400,
          }}>
          {product.name}
        </p>
        <p
          className="text-stone-400 text-center"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.85rem",
          }}>
          {product.size}
        </p>
        <p
          className="text-stone-400 text-center"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.85rem",
          }}>
          {product.price}
        </p>
      </div>
    </div>
  );
}
const ImageCollection = () => {
  return (
    <>
      {/* Swiper dot custom style */}
      <style>{`
        .custom-dot {
          width: 18px !important;
          height: 5px !important;
          border-radius: 3px !important;
          background: rgba(255,255,255,0.5) !important;
          opacity: 1 !important;
          transition: all 0.3s !important;
        }
        .swiper-pagination-bullet-active.custom-dot {
          background: #fff !important;
          width: 24px !important;
        }
      `}</style>

      <section
        className="w-full px-6 py-16 md:px-12 lg:px-20"
        style={{ backgroundColor: "#F5F0E8" }}>
        {/* Heading */}
        <h2
          className="text-center text-stone-900 mb-12 leading-tight max-w-4xl mx-auto"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
            fontWeight: 400,
            letterSpacing: "0.02em",
            textTransform: "capitalize",
          }}>
          Dive Into Our Collection That Share The Same Beauty And Quality
        </h2>

        {/* 4 column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ImageCollection;
