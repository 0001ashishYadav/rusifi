import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 px-6 md:px-18 py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 md:ml-10">
        {/* Newsletter */}
        <div className="space-y-5">
          <h2 className="text-white tracking-widest">NEWSLETTER</h2>

          <p className="text-sm text-gray-400">
            Sign up to our newsletter to receive exclusive offers.
          </p>

          <input
            type="email"
            placeholder="E-mail"
            className="w-full bg-transparent border border-gray-600 px-4 py-2 outline-none"
          />

          <button className="bg-gray-200 text-black px-6 py-2 tracking-widest hover:bg-black border transition duration-300 cursor-pointer hover:text-white">
            Subscribe
          </button>
        </div>

        {/* Shopping */}
        <div className="space-y-4">
          <h2 className="text-white tracking-widest">SHOPPING WITH US</h2>

          <div className="flex flex-col space-y-2">
            <Link href={"/shipping"}>
              <p>Shipping</p>
            </Link>
            <Link href={"/return"}>
              <p>Return/Exchange</p>
            </Link>
            <Link href={"/buy-back-programme"}>Buy Back Programme</Link>
            <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
            <Link href={"/sale"}>Shop Carpets</Link>
            <Link href={"/frequently-asked-questions"}>
              Frequently Asked Questions
            </Link>
            <Link href={"/privacy"}>Privacy</Link>
            <Link href={"/waranty"}>Warranty</Link>
          </div>
        </div>

        {/* About */}
        <div className="space-y-4">
          <h2 className="text-white tracking-widest">ABOUT US</h2>

          <ul className="text-sm flex flex-col space-y-2">
            <Link href={"/contactUs"}>Contact Us</Link>
            <Link href={"/legacy"}>Legacy</Link>
            <li>Sustainability</li>
            <li>Craftsmanship</li>
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Catalogues</li>
          </ul>
        </div>

        {/* Stores */}
        <div className="space-y-4">
          <h2 className="text-white tracking-widest">OUR STORES</h2>

          <ul className="space-y-3 text-sm">
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Hyderabad</li>
            <li>Bengaluru</li>
            <li>Kolkata</li>
            <li>Pune</li>
            <li>Ahmedabad</li>
            <li>London</li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h2 className="text-white tracking-widest">SERVICES</h2>

          <ul className="space-y-3 text-sm">
            <li>The White Glove Services</li>
            <li>Customization</li>
            <li>Hospitality</li>
          </ul>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex gap-6 mt-12 text-gray-400">
        <Facebook size={18} className="hover:" />
        <Instagram size={18} />
        <Youtube size={18} />
        <Linkedin size={18} />
      </div>

      {/* Copyright */}
      <div className="mt-8 text-sm text-gray-400">
        © 2026 - RugSifi Pvt. Ltd.
      </div>

      <div className="border-t border-gray-700 mt-6"></div>
    </footer>
  );
}
