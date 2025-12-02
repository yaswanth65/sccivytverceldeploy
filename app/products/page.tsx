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
        <section className="pb-16 bg-white pt-[150px] w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full text-center">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8 text-slate-900">
              Our Products
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-3xl text-center mx-auto mb-6">
              <strong className="block text-slate-900 text-xl mb-2">
                An Integrated Ecosystem for Education, Research & Publication
              </strong>
              SCIVYT brings together powerful platforms designed to support
              every stage of the academic and research lifecycle — learning,
              mentorship, writing, publishing, analytics, and global visibility.
              Each product is built to work independently or as part of one
              unified academic infrastructure.
            </p>
          </div>
        </section>

        {/* Product List */}
        <section className="pb-24 bg-white w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full flex flex-col items-center gap-4">
            {[
              {
                title: "YETZU",
                slug: "yetzu",
                description:
                  "A comprehensive academic and research mentorship platform that blends curriculum-based learning, live expert mentorship, and publication-ready research training into one interactive ecosystem for students and professionals.",
                cta: "Explore Platform",
              },
              {
                title: "Submit Right",
                slug: "submit-right",
                description:
                  "A professional academic services platform that supports researchers with manuscript preparation, formatting, journal selection, compliance checks, and end-to-end submission guidance for higher acceptance success.",
                cta: "Get Publication Support",
              },
              {
                title: "VITUOR",
                slug: "vituor",
                description:
                  "A peer-reviewed international medical journal providing a trusted stage for high-impact healthcare research with rigorous review, expert editorial support, and global open-access visibility.",
                cta: "View Journal",
              },
              {
                title: "BEENTU AI",
                slug: "beentu-ai",
                description:
                  "An AI-powered academic writing and research intelligence assistant that enhances clarity, structure, citations, and journal readiness making scientific writing faster, smarter, and publication-focused.",
                cta: "Try BEENTU AI",
              },
              {
                title: "NationCite",
                slug: "nationcite",
                description:
                  "India’s national research impact portal delivering verified rankings, authenticated researcher profiles, and institutional analytics using real-time bibliometric intelligence and transparent data systems.",
                cta: "View Research Impact",
              },
            ].map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="relative w-full h-[60vh] rounded-2xl overflow-hidden group cursor-pointer block rotate-0 opacity-100"
              >
                <div className="w-full h-full bg-gray-600 transition-transform duration-700 group-hover:scale-105"></div>
                {/* Overlay */}
                <div className="absolute pt-11 inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex flex-col  pl-8 md:pl-16">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full w-fit text-xs uppercase tracking-wider mb-4">
                    New Arrival
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                    {product.title}
                  </h2>
                  <p className="text-gray-200 max-w-md mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <span className="border border-white/40 hover:bg-white hover:text-black text-white px-8 py-3 rounded-full w-fit transition-all duration-300 inline-block">
                    {product.cta}
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
       <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
