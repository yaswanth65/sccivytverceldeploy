"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function AboutPage() {
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
        {/* About Hero */}
        <section className="h-screen flex flex-col bg-white pt-20">
          <div className="flex-1 flex flex-col w-full px-4 md:px-6 py-6">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                About Us
              </div>
              <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-4 text-slate-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
              </h1>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis.
              </p>
            </div>

            {/* Two Large Images - Full Width, One Line */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full flex-1">
              <div className="bg-gray-100 overflow-hidden">
                <div className="w-full h-full bg-gray-200 hover:scale-105 transition-transform duration-700"></div>
              </div>
              <div className="bg-gray-100 overflow-hidden">
                <div className="w-full h-full bg-gray-200 hover:scale-105 transition-transform duration-700"></div>
              </div>
            </div>

            {/* Logos Strip - Image Section */}
            <div className="w-full py-4 border-t border-gray-100">
              <div className="text-center mb-4">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Our Affiliations
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
                <span className="font-serif text-lg md:text-2xl font-semibold">
                  luminous
                </span>
                <span className="font-serif text-lg md:text-2xl font-semibold">
                  Trace
                </span>
                <span className="font-serif text-lg md:text-2xl font-semibold">
                  ProNature
                </span>
                <span className="font-serif text-lg md:text-2xl font-semibold">
                  Nextmove
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Meet The Team */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Our People
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-16">
              Meet The Team
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
                <div key={member} className="group">
                  <div className="bg-gray-100 aspect-[3/4] mb-4 overflow-hidden rounded-sm">
                    <div className="w-full h-full bg-gray-200 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                  </div>
                  <h3 className="font-serif text-lg">Full Name</h3>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Position Title
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline / Progress */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                <div className="sticky top-32">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Our Journey
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                    Progress built year by year
                  </h2>
                  <p className="text-gray-500">
                    From humble beginnings to global impact, our path has been
                    defined by innovation and resilience.
                  </p>
                </div>
              </div>

              <div className="md:w-2/3 relative border-l border-gray-200 ml-4 md:ml-0 pl-8 md:pl-12 space-y-16">
                {[
                  {
                    year: "2023",
                    title: "Global Expansion",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.",
                  },
                  {
                    year: "2021",
                    title: "New Headquarters",
                    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  },
                  {
                    year: "2019",
                    title: "Series B Funding",
                    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  },
                  {
                    year: "2017",
                    title: "First Major Client",
                    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                  },
                  {
                    year: "2015",
                    title: "Founded",
                    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-black border-4 border-white shadow-sm"></div>
                    <span className="text-sm font-mono font-bold text-gray-400 block mb-2">
                      {item.year} - {item.title}
                    </span>
                    <p className="text-xl font-serif text-slate-800 max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-32 bg-white text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight text-slate-900 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
            </h2>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden"></div>
              <div>
                <div className="font-bold text-sm">Jonathan Smith</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest">
                  Founder & CEO
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-serif mb-6">
                  Lorem ipsum dolor sit amet
                </h2>
                <p className="text-gray-500 text-lg">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12">
                {[
                  { label: "Projects Completed", val: "1500+" },
                  { label: "Happy Clients", val: "1500+" },
                  { label: "Awards Won", val: "1500+" },
                  { label: "Team Members", val: "1500+" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl md:text-5xl font-serif font-bold mb-2">
                      {stat.val}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide max-w-[100px] leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 text-slate-900">
                  Let's work together
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
