"use client";
import React, { useEffect, useState } from "react";

const columns = [
  {
    direction: "up",
    speed: "25s",
    images: [
      {
        src: "https://www.obeetee.in/cdn/shop/files/14_db6c605f-9293-414e-8f11-1a407c9b27b0.jpg?v=1754998270",
        name: "Distressed Classic",
        origin: "Persian",
      },
      {
        src: "https://www.obeetee.in/cdn/shop/files/16_da6a6104-c661-4a1e-a342-ba9b3a1e7ff4.jpg?v=1754998269",
        name: "Kilim Flat",
        origin: "Afghan",
      },
      {
        src: "https://www.obeetee.in/cdn/shop/files/19_3be8c7cc-5f36-4021-b8b0-2558030bbc82.jpg?v=1754998269",
        name: "Heriz Garden",
        origin: "Iranian",
      },
      {
        src: "https://www.obeetee.in/cdn/shop/files/1_01385636-8ad7-4cf8-bf5d-1003a3c0ef50.jpg?v=1754998270",
        name: "Tabriz Floral",
        origin: "Persian",
      },
    ],
  },
  {
    direction: "down",
    speed: "22s",
    images: [
      {
        src: "https://www.obeetee.in/cdn/shop/files/12_d1fa9284-dafc-49d7-9e70-f63d741b8a20.jpg?v=1754998270",
        name: "Tribal Weave",
        origin: "Moroccan",
      },
      {
        src: "https://www.obeetee.in/cdn/shop/files/4_d4f96b6c-6b0f-4f84-9acd-d327163cd47a.jpg?v=1754998270",
        name: "Beni Ourain",
        origin: "Berber",
      },
      {
        src: "https://www.obeetee.in/cdn/shop/files/3_3b58ebef-bdc2-4fe6-968b-556de123d6c9.jpg?v=1754998270",
        name: "Azilal Pile",
        origin: "Moroccan",
      },
      {
        src: "https://www.obeetee.in/cdn/shop/files/6_e52193d8-69e7-4998-a021-c9581e1324ca.jpg?v=1754998270",
        name: "Zanafi Runner",
        origin: "Moroccan",
      },
    ],
  },
  {
    direction: "up",
    speed: "25s",
    images: [
      {
        src: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_pL0EtaJAxN9qpJNsVDLueogauwnOndXh-8WcTx5YOp5zmadX12ndoAE6Hzg4WiBdn-OHTRobT9WRRnoGsquNBXOsvGTqqQpRCBJS-Is",
        name: "Vintage Collection",
        origin: "Oriental",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9yRAjD4kVLb5V9PR-ahZm2x-GKEQsk-80aQ&s",
        name: "Oushak Antique",
        origin: "Turkish",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54gMLfjJtcQVY3jHVmhUDxpCdSj1rAxPKGQ&s",
        name: "Mughal Court",
        origin: "Indian",
      },
      {
        src: "https://www.carpetkingdom.in/wp-content/uploads/2025/09/From-Traditional-to-Contemporary.jpg",
        name: "Samarkand Silk",
        origin: "Central Asian",
      },
    ],
  },
  {
    direction: "down",
    speed: "22s",
    images: [
      {
        src: "https://assets.ajio.com/medias/sys_master/root/20230825/NXtV/64e804e1afa4cf41f58853a3/-473Wx593H-461447533-brown-MODEL.jpg",
        name: "Royal Knotted",
        origin: "Turkish",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycQfcf3LlFnZiPGuBmPGQmGPULv-7CJJZ6Q&s",
        name: "Caucasian Star",
        origin: "Azerbaijani",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiskAE2vHepzYzTL_EwQZDA5jOsuRqSv_m-Q&s",
        name: "Bidjar Iron",
        origin: "Kurdish",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLxyKeN0_m32IgJM67xImfscF-4MulXi9ldw&s",
        name: "Qashqai Nomad",
        origin: "Iranian",
      },
    ],
  },
];

const GAP = 15;

function VerticalScrollCol({ images, direction, speed, cardH }) {
  const doubled = [...images, ...images];
  const animName = direction === "up" ? "scrollUp" : "scrollDown";

  return (
    <div
      style={{
        overflow: "hidden",
        flex: 1,
        minWidth: 0,
        height: `${cardH}px`,
        // borderRadius: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: `${GAP}px`,
          animation: `${animName} ${speed} linear infinite`,
        }}
      >
        {doubled.map((rug, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: "100%",
              height: `${cardH}px`,
              borderRadius: "12px",
              overflow: "hidden",
              flexShrink: 0,
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <img
              src={rug.src}
              alt={rug.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(4px)",
                padding: "6px 10px",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: 300,
                  margin: 0,
                  letterSpacing: "0.05em",
                }}
              >
                {rug.name}
              </p>
              <p
                style={{
                  color: "#a8a29e",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  margin: "2px 0 0",
                }}
              >
                {rug.origin}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [visibleCols, setVisibleCols] = useState(4);
  const [cardH, setCardH] = useState(420);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Responsive: screen size ke hisaab se columns aur card height
  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w < 480) {
        setVisibleCols(2);
        setCardH(220);
      } else if (w < 768) {
        setVisibleCols(2);
        setCardH(260);
      } else if (w < 1024) {
        setVisibleCols(3);
        setCardH(320);
      } else {
        setVisibleCols(4);
        setCardH(420);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleColumns = columns.slice(0, visibleCols);

  return (
    <>
      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div
        className="relative w-full bg-black  flex items-center justify-center overflow-hidden"
        style={{ height: "140px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 50%, transparent 60%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <h1
          className={`relative z-10 text-white uppercase transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{
            fontFamily:
              "'Cormorant Garamond', 'Garamond', 'Times New Roman', serif",
            fontSize: "clamp(1.2rem, 4vw, 2.4rem)",
            fontWeight: 300,
            letterSpacing: "0.38em",
          }}
        >
          Tarun Tahiliani
        </h1>
      </div>

      {/* Scroll Columns */}
      <section
        style={{
          background: "#0e0d0b",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: `${GAP}px`,
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {visibleColumns.map((col, idx) => (
          <VerticalScrollCol
            key={idx}
            images={col.images}
            direction={col.direction}
            speed={col.speed}
            cardH={cardH}
          />
        ))}
      </section>

      {/* Quote */}
      <div
        className="w-full flex items-center justify-center px-5 py-16"
        style={{ backgroundColor: "#5C1A0A" }}
      >
        <p
          className="text-center max-w-2xl leading-relaxed"
          style={{
            fontFamily: "sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
            fontWeight: 400,
            color: "#F5ECD7",
            letterSpacing: "0.08em",
            fontStyle: "italic",
            textTransform: "capitalize",
          }}
        >
          The starting point on my mood-board, the colours and techniques, are
          always totally Indian. There is no other way to describe this.
        </p>
      </div>
      {/* view collection */}
      <section className="w-full bg-white px-6 py-16 md:px-16 lg:px-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          {/* Left — 2 Images side by side */}
          <div className="flex flex-row gap-3 w-full md:w-1/2 shrink-0">
            <div className="w-1/2 aspect-3/4 overflow-hidden">
              <img
                src="https://www.obeetee.in/cdn/shop/files/B1094471.png?v=1681815556&width=300"
                alt="Tarun Tahiliani portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 aspect-3/4 overflow-hidden">
              <img
                src="https://www.obeetee.in/cdn/shop/files/Tarun-Tahiliani-Chikankari-collection-for-Obeetee.png?v=1754384929&width=300"
                alt="Tarun Tahiliani rug"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — Text */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 md:pl-8">
            <h2
              className="text-stone-900 leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              Tarun <br /> Tahiliani
            </h2>

            <p
              className="text-stone-600 leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                fontWeight: 400,
              }}
            >
              Renowned for his aesthetic of inspired reinvention, Tarun
              Tahiliani helms the first series of this campaign with his
              quintessential aesthetic of understated opulence. The three
              collections that span his series reflect the distinct nuances of
              Lucknavi chikankari, Indian miniature paintings and his original
              abstract art. Each creation unravelling a hand-woven work that
              pays tribute to indigenous India, as it tells its own story.
            </p>

            {/* View Collection link */}
            <a
              href="#"
              className="inline-block text-stone-800 text-sm tracking-widest uppercase border-b border-stone-800 pb-0.5 w-fit hover:text-stone-500 hover:border-stone-500 transition-colors duration-300"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
              }}
            >
              View Collection
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
