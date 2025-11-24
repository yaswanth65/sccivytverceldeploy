"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductDetailsPage() {
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
        {/* Product Detail Header */}
        <section className="pt-32 pb-16 md:pt-48 bg-white text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6 text-slate-900">
              Venus Education Platform
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Comprehensive solution for modern educational institutions
            </p>
          </div>
        </section>

        {/* Main Hero Image */}
        <section className="pb-16 px-4 md:px-0">
          <div className="w-full h-[50vh] md:h-[80vh] overflow-hidden">
            <div className="w-full h-full bg-gray-600"></div>
          </div>
        </section>

        {/* Info Strip */}
        <section className="py-12 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Client
                </div>
                <div className="font-serif text-lg">Venus University</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Timeline
                </div>
                <div className="font-serif text-lg">8 Weeks</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Services
                </div>
                <div className="font-serif text-lg">UI/UX, Branding</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Website
                </div>
                <div className="font-serif text-lg underline">venusedu.com</div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Hero/Content */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">
                Lorem Ipsum Lorem Ipsum
              </h2>
              <p className="text-gray-500">
                A deep dive into the creative process behind the design.
              </p>
            </div>
            <div className="w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden mb-24">
              <div className="w-full h-full bg-gray-200"></div>
            </div>

            {/* Text Content Blocks */}
            <div className="grid md:grid-cols-12 gap-12 mb-24">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-serif mb-4">Project Overview</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>

                <h3 className="text-2xl font-serif mb-4">Our Solution</h3>
                <p className="text-gray-500 leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </p>
              </div>
              <div className="md:col-span-1"></div>
              <div className="md:col-span-7">
                <h3 className="text-2xl font-serif mb-4">
                  Defining the Process
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet.
                </p>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="bg-gray-100 h-[400px] rounded overflow-hidden">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
              <div className="bg-gray-100 h-[400px] rounded overflow-hidden">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
              <div className="bg-gray-100 h-[400px] rounded overflow-hidden">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
              <div className="bg-gray-100 h-[400px] rounded overflow-hidden">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
            </div>

            {/* Text Repeat Block */}
            <div className="max-w-3xl mx-auto space-y-12">
              <div>
                <h3 className="text-2xl font-serif mb-4">Project Elements</h3>
                <p className="text-gray-500 leading-relaxed">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-4">Core Services</h3>
                <p className="text-gray-500 leading-relaxed">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-24 bg-[#fffcf7]">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-serif mb-12">Our Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Link key={i} href="/products" className="group cursor-pointer">
                  <div className="h-64 bg-white mb-4 overflow-hidden rounded">
                    <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                  </div>
                  <h4 className="font-serif text-lg">Product Name {i}</h4>
                  <p className="text-xs text-gray-500 uppercase">Category</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#F5F5F0] py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 text-slate-900">
                  Let&apos;s work together
                </h2>
                <p className="text-slate-500 text-lg mb-12 max-w-md">
                  Start a conversation about your next project.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-800">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span>hello@brandname.com</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
                <form className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold text-gray-500">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full bg-white border border-gray-200 p-3 rounded focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-sm font-bold w-full">
                    Get in Touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
