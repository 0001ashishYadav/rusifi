"use client";
import React from "react";
import { motion } from "motion/react";
import { Search, User, Heart, ShoppingBag, Phone, MapPin } from "lucide-react";

const App = () => {
  return (
    <div className="min-h-screen bg-[#E8E6E1] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://suryaliving.com/cdn/shop/collections/Traditional_collection_Banner.webp?v=1760594827&width=3840"
          alt="Luxury Rug"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] uppercase mb-8"
          >
            A Home In
            <br />
            Full Expression
          </motion.h1>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="border border-white px-8 py-2 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
          >
            Explore Now
          </motion.button>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase mb-4 opacity-70"
        >
          Shop By Category
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light tracking-widest uppercase mb-16"
        >
          Collections That Shape A Home
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Carpets",
              img: "https://therugorient.com/public/uploads/blogs/VBeKxKklWfwTkX4OsbrunzACwGTuPoDdhOlnxJvO.jpeg",
            },
            {
              title: "Cushions",
              img: "https://suryaliving.com/cdn/shop/collections/Cushion_collection_banner_webp_1_c7019cf6-764d-42a5-8471-83a320068d12.webp?v=1760595008&width=3840",
            },
            {
              title: "Bedding",
              img: "https://cdn.shopify.com/s/files/1/0487/2971/8936/files/723_dfl_blog_1_banner_900x.jpg?v=1689343053",
            },
            {
              title: "Furniture",
              img: "https://www.shutterstock.com/image-photo/young-housewife-cleaning-carpet-living-600nw-2645265997.jpg",
            },
          ].map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden aspect-[4/5]"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <h3 className="text-white text-2xl tracking-[0.2em] uppercase font-light">
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Collection: Now-Stalgia */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          src="https://c0.wallpaperflare.com/preview/437/943/691/carpets-showroom-rugs-showroom-showroom-kashmir-carpets.jpg"
          alt="Now-Stalgia Collection"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-[0.2em] uppercase">
              Now - Stalgia
            </h2>
            <p className="text-sm tracking-[0.3em] uppercase opacity-80">
              By Eeshaan Kashyap
            </p>
            <button className="mt-8 bg-white text-black px-10 py-3 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300">
              Explore Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Style Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Traditional",
              desc: "Rooted. Detailed. Enduring.",
              img: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/22866576/2025/3/12/f1f38c08-9c0a-4611-b1a5-7199a8e52c201741778724008-Storyhome-Blue--Yellow-Anti-skid-Floor-Carpet-57174177872334-1.jpg",
            },
            {
              title: "Contemporary",
              desc: "Clean. Calm. Relevant.",
              img: "https://m.media-amazon.com/images/I/81oXJ6yxUhL._AC_UF894,1000_QL80_.jpg",
            },
            {
              title: "Transitional",
              desc: "Balanced. Versatile. Lived-in.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EyLL6Rjvd3jBN7lgUQqXrnKOXgONZlfeCw&s",
            },
          ].map((style, idx) => (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img
                  src={style.img}
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <h3 className="text-white text-xl tracking-[0.2em] uppercase font-light">
                    {style.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm opacity-70 font-light">{style.desc}</p>
              <button className="border border-black/20 px-8 py-2 text-[10px] tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300">
                Shop Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Legacy Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          src="https://lifencolors.in/cdn/shop/files/aalishan-wallpaper-3.webp?v=1757153825"
          alt="Legacy"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-[0.2em] uppercase">
              A Legacy That
              <br />
              Lives On
            </h2>
            <button className="bg-white text-black px-10 py-3 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300">
              Discover
            </button>
          </motion.div>
        </div>
      </section>

      {/* Proud To Be Indian */}
      <section className="py-24 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://lifencolors.in/cdn/shop/products/81d868_9c94d41a0d914adeb66a543faeb158a5_mv2.jpg?v=1753624153"
            alt="Indian Heritage"
            className="w-full aspect-[3/4] object-cover shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.15em] uppercase leading-tight">
            Proud To Be Indian
          </h2>
          <p className="text-sm leading-relaxed opacity-80 font-light max-w-md mx-auto md:mx-0">
            PTBI brings the vision of India leading designers into the language
            of fine rugs. Each piece reflects a distinct design sensibility,
            translated through Obeetee making. The result is a collection where
            couture meets interior form — rugs defined by proportion, material,
            and presence, created for homes that choose with intent.
          </p>
          <button className="bg-[#1A1A1A] text-white px-12 py-4 text-xs tracking-widest uppercase hover:bg-opacity-80 transition-all">
            Discover
          </button>
        </motion.div>
      </section>

      {/* Designer Grid */}
      <section className="py-20 bg-[#E0DDD8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Tarun Tahiliani",
                img: "https://api.joka.de/fileadmin/_processed_/8/1/csm_JOKA_Fu%C3%9Fboden_Gut_zu_wissen_Teppiche_Komfort_Waerme_gemuetlich_Farbakzente_Einrichtung_1f632c9920.jpg",
              },
              {
                name: "Abraham & Thakore",
                img: "https://m.media-amazon.com/images/I/71C+Uexn-8L.jpg",
              },
              {
                name: "JJ Valaya",
                img: "https://ishrohome.in/cdn/shop/files/Beige5.jpg?v=1702828683&width=1946",
              },
              {
                name: "Shantanu Nikhil",
                img: "https://www.southernliving.com/thmb/GW7Vj04JOmn2g6NL6C97-zyQUhg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1053597008-286e3a741c66498ca5611c6c7df4f12c.jpg",
              },
            ].map((designer, idx) => (
              <motion.div
                key={designer.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden aspect-[3/4]"
              >
                <img
                  src={designer.img}
                  alt={designer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-xs md:text-sm tracking-wider uppercase font-medium">
                    {designer.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation / Footer Info */}
      <footer className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Icons Bar */}
          <div className="flex justify-center items-center gap-12 text-[#1A1A1A]/60">
            <Phone size={20} className="cursor-pointer hover:text-black" />
            <MapPin size={20} className="cursor-pointer hover:text-black" />
            <div className="text-2xl font-serif tracking-[0.3em] font-bold text-black px-8">
              OBEETEE
            </div>
            <Heart size={20} className="cursor-pointer hover:text-black" />
            <User size={20} className="cursor-pointer hover:text-black" />
            <Search size={20} className="cursor-pointer hover:text-black" />
            <ShoppingBag
              size={20}
              className="cursor-pointer hover:text-black"
            />
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] tracking-[0.2em] uppercase font-medium text-black/70">
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
              <a
                key={link}
                href="#"
                className="hover:text-black transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Description Text */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h4 className="text-sm tracking-widest uppercase font-semibold">
              The Art and Craft of Handmade Rugs
            </h4>
            <p className="text-[11px] leading-relaxed text-black/60 font-light">
              For centuries, handmade rugs have been more than decorative
              objects. They are expressions of craft, culture and design that
              have evolved across regions and generations. The traditions of
              carpet weaving travelled from Persia to India during the Mughal
              era, where artisans refined the craft into one of the most
              sophisticated textile traditions in the world. Today, handmade
              rugs...
            </p>
            <button className="text-[10px] tracking-widest uppercase underline underline-offset-4 hover:opacity-60">
              Read More
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
