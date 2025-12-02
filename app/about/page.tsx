"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const timelineItems = [
    {
      year: "2020",
      title: "Scivyt Full Project",
      desc: "We established our core foundation, launching the initial platform with a focus on seamless user experience and robust architecture, setting the stage for future scalability.",
    },
    {
      year: "2023",
      title: "Design System Launch",
      desc: "Introduced a comprehensive design system that unified our visual language across all touchpoints, significantly speeding up development cycles and ensuring consistency.",
    },
    {
      year: "2024",
      title: "Global Expansion",
      desc: "Expanded our operations into key international markets, adapting our solutions to meet diverse regional needs while maintaining our core brand identity and quality standards.",
    },
    {
      year: "2025",
      title: "AI Integration",
      desc: "Pioneering the next phase of growth by deeply integrating generative AI capabilities, allowing for smarter automation and personalized user journeys at an unprecedented scale.",
    },
  ];

  // Scroll effect for navbar
  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active timeline item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveYear(entry.target.getAttribute("data-year"));
          }
        });
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: 0.1 }
    );

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [isClient]);

  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar toggleMenu={() => {}} isMenuOpen={false} scrolled={scrolled} />

      <main>
        {/* About Hero */}
        <section className="min-h-screen flex flex-col bg-white pt-32 w-full">
          <div className="flex-1 flex flex-col w-full px-6 md:px-8 py-6">
            <div className="max-w-4xl mx-auto w-full text-center mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                About Us
              </div>

              <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-4 text-slate-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
              </h1>

              <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full flex-1">
              <div className="bg-gray-100 overflow-hidden min-h-[260px] md:min-h-[340px]">
                <div className="w-full h-full bg-gray-200 hover:scale-105 transition-transform duration-700"></div>
              </div>
              <div className="bg-gray-100 overflow-hidden min-h-[260px] md:min-h-[340px]">
                <div className="w-full h-full bg-gray-200 hover:scale-105 transition-transform duration-700"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Logos */}
        <section className="py-10 bg-white w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center mt-10 -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <div className="w-full h-full bg-gray-300"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 ">
              <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-8">
                Trusted by Global Leaders
              </p>
              <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="h-8 w-32 bg-gray-300 rounded"></div>
                <div className="h-8 w-32 bg-gray-300 rounded"></div>
                <div className="h-8 w-32 bg-gray-300 rounded"></div>
                <div className="h-8 w-32 bg-gray-300 rounded"></div>
                <div className="h-8 w-32 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet The Team */}
        <section className="py-24 bg-white w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
              Our People
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-16">
              Meet The Team
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  image: "/team/Dr. Yethindra Vityala 2.JPG",
                  name: "Dr. Yethindra",
                  title: "Founder and Chief Executive Officer",
                },
                {
                  image: "/team/Dr. Tugolbai Tagaev.JPG",
                  name: "Dr. Tugolbai Tagaev",
                  title: "Chairman and Director of Kyrgyzstan Operations",
                },
                {
                  image: "/team/Srilaxmi Vityala.JPG",
                  name: "Srilaxmi Vityala",
                  title:
                    "Co-Founder and Director of Academic and Research Partnerships",
                },
                {
                  image: "/team/Dr. Altynai Zhumbekova.JPG",
                  name: "Dr. Altynai Zhumbekova",
                  title: "President and Director of United States Operations",
                },
                {
                  image: "/team/Dr. Krishna Priya Kanteti.jpg",
                  name: "Dr. Krishna Priya Kanteti",
                  title:
                    "Co-Founder, Director, Academic and Research Relations",
                },
                {
                  image: "/team/Dr. Ujwala Damineni.jpg",
                  name: "Dr. Ujwala Damineni",
                  title:
                    "President, Director of Academic and Publisher Partnerships",
                },
                {
                  image: "/team/Sravya Gatta.jpg",
                  name: "Sravya Gatta",
                  title: "President, Technical and Product Head",
                },
                {
                  image: "/team/Vinay Devarakonda.jpg",
                  name: "Vinay Deverakonda",
                  title: "President of Global Sales and Partnerships",
                },
              ].map((member, idx) => (
                <div key={idx} className="group">
                  <div className="relative bg-gray-100 aspect-[3/4] mb-4 overflow-hidden rounded-sm">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      quality={60}
                    />
                  </div>
                  <h3 className="font-serif text-lg">{member.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="py-24 bg-white w-full">
          <div className="w-full px-4 sm:px-6 md:px-[72px]">
            <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-12 xl:gap-20">
              {/* Left Column: Sticky Title */}
              <div className="lg:pr-12 self-start lg:sticky lg:top-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Selling Points
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight text-gray-900">
                  Progress built <br /> year by year
                </h2>
              </div>

              {/* Right Column: Timeline Items */}
              <div className="relative pr-[72px]">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-2 bottom-0 w-[2px] bg-gray-200 hidden lg:block"></div>

                <div className="space-y-24">
                  {timelineItems.map((item) => {
                    const isActive = activeYear === item.year;
                    return (
                      <div
                        key={item.year}
                        data-year={item.year}
                        className="timeline-item relative pt-2 lg:pt-0 lg:grid lg:grid-cols-[40px_auto_1fr] lg:gap-x-8 group"
                      >
                        {/* Dot Column */}
                        <div className="hidden lg:flex flex-col items-center justify-start pt-2">
                          <div
                            className={`relative z-10 w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                              isActive ? "bg-black scale-125" : "bg-gray-300"
                            }`}
                          ></div>
                        </div>

                        {/* Year Column */}
                        <div className="hidden lg:block pt-1">
                          <span
                            className={`text-sm font-bold tracking-wide transition-colors duration-300 ${
                              isActive ? "text-black" : "text-gray-400"
                            }`}
                          >
                            {item.year}
                          </span>
                        </div>

                        {/* Content Column */}
                        <div className="pl-2 lg:pl-0 w-full pt-1">
                          {/* Mobile Dot + Year */}
                          <div className="flex items-center gap-2 mb-2 lg:hidden">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                isActive ? "bg-black" : "bg-gray-300"
                              }`}
                            ></div>
                            <span className="text-xs text-gray-500 font-bold">
                              {item.year}
                            </span>
                          </div>

                          <h3
                            className={`text-xl md:text-2xl font-bold uppercase tracking-wide mb-4 transition-colors duration-300 ${
                              isActive ? "text-black" : "text-gray-400"
                            }`}
                          >
                            {item.title}
                          </h3>

                          <p className="text-gray-500 leading-relaxed text-lg w-full">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-32 bg-white text-center w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full flex justify-center items-center flex-col">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-serif leading-tight text-slate-900 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
              </h2>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden"></div>
                <div>
                  <div className="font-bold text-sm">Jonathan Smith</div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">
                    Founder & CEO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-24 bg-white border-t border-gray-100 w-full">
          <div
            className="flex items-start w-full"
            style={{ paddingLeft: "72px", paddingRight: "72px" }}
          >
            {/* Left */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-serif mb-6">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-lg">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>

            {/* Right */}
            <div className="flex-1 grid grid-cols-2 gap-16 self-start">
              {[
                {
                  label: "Happy Students after taking session with us",
                  val: "1500+",
                },
                {
                  label: "Happy Students after taking session with us",
                  val: "1500+",
                },
                {
                  label: "Happy Students after taking session with us",
                  val: "1500+",
                },
                {
                  label: "Happy Students after taking session with us",
                  val: "1500+",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-start border-l border-gray-300 pl-8"
                >
                  <div className="text-4xl md:text-5xl font-serif font-bold mb-2">
                    {stat.val}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
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
