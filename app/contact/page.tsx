"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function ContactPage() {
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
        {/* Contact Hero */}
        <section className="pt-32 pb-16 md:pt-48 bg-white w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                About Us
              </div>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-16 text-slate-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
              </h1>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email Card 1 */}
                <div className="bg-[#EFEFEA] p-8 rounded-lg text-left relative aspect-[4/3] flex flex-col justify-between group cursor-pointer hover:bg-[#e5e5e0] transition-colors">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      General Enquiries
                    </span>
                    <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center text-white">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      SCIVYT@EMAIL.COM
                    </h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                      Questions, thoughts, or just want to connect?
                    </p>
                  </div>
                </div>

                {/* Email Card 2 */}
                <div className="bg-[#EFEFEA] p-8 rounded-lg text-left relative aspect-[4/3] flex flex-col justify-between group cursor-pointer hover:bg-[#e5e5e0] transition-colors">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      General Enquiries
                    </span>
                    <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center text-white">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      SCIVYT@EMAIL.COM
                    </h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                      Questions, thoughts, or just want to connect?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location Image */}
        <section className="pb-24 bg-white">
          <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
            <div className="w-full h-full bg-gray-600"></div>
            {/* Overlay Card */}
            <div className="absolute bottom-8 left-6 md:bottom-16 md:left-16 bg-[#EFEFEA]/90 backdrop-blur-md p-8 rounded-lg max-w-md w-[calc(100%-3rem)] md:w-auto shadow-xl">
              <p className="text-gray-600 mb-8 text-sm">
                Questions, thoughts, or just want to connect?
                <br />
                We&apos;d love to hear from you.
              </p>

              <h3 className="text-xl font-bold mb-6">
                Lorem Ipsum Kompally
                <br />
                Ramnagar Hyderabad
              </h3>

              <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider group">
                Show on map
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={14} />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 bg-white w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Text */}
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                  Contact
                </div>
                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-slate-900">
                  Lorem ipsum dolor self amet consectetur
                </h2>
                <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>

                <button className="border border-gray-300 px-8 py-3 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-colors uppercase text-xs tracking-widest font-bold">
                  CTA Button{" "}
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </button>
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
