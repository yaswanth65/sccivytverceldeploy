"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ProductsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        scrolled={scrolled}
      />

      <main>
        {/* Products Header */}
        <section className="pb-16 bg-white pt-20 w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-slate-900">
              Our Products
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </section>

        {/* Product List */}
        <section className="pb-24 bg-white w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full flex flex-col items-center gap-4">
            {[1, 2, 3, 4].map((product) => (
              <Link
                key={product}
                href={`/products/${product}`}
                className="relative w-full h-[60vh] rounded-2xl overflow-hidden group cursor-pointer block rotate-0 opacity-100"
              >
                <div className="w-full h-full bg-gray-600 transition-transform duration-700 group-hover:scale-105"></div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex flex-col justify-center pl-8 md:pl-16">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full w-fit text-xs uppercase tracking-wider mb-4">
                    New Arrival
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                    Modern Lorem Ipsum
                  </h2>
                  <p className="text-gray-200 max-w-md mb-8 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <span className="border border-white/40 hover:bg-white hover:text-black text-white px-8 py-3 rounded-full w-fit transition-all duration-300 inline-block">
                    Learn More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Simple Stats Strip */}
        <section className="py-20 bg-white border-t border-gray-100 w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-3xl font-serif mb-2">1500+</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Installations
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-serif mb-2">1500+</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Happy Clients
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-serif mb-2">1500+</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Support Team
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-serif mb-2">1500+</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Awards Won
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-24 w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 text-slate-900">
                  Lorem ipsum dolor sit amet consectetur
                </h2>
                <p className="text-slate-500 text-lg mb-12 max-w-md">
                  We are always looking for new challenges and interesting
                  partners. Also, we love good coffee.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-800">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>hello@brandname.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-800">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
