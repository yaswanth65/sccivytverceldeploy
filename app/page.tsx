"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import CampaignSlider from "@/components/CampaignSlider";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    slug: "yetzu",
    title: "YETZU",
    category: "Education & Research",
    tagline: "Academic & Research Mentorship Platform",
    description:
      "A unified digital ecosystem combining curriculum-based learning, live mentorship, and research training to produce ethical, independent, and publication-ready scholars.",
    image: "/home/dark sections/Yetzu.png",
  },
  {
    id: 2,
    slug: "submit-right",
    title: "SUBMITRIGHT",
    category: "Research & Publishing",
    tagline: "Academic Services Platform",
    description:
      "End-to-end academic publication support including editing, translation, and journal submission management for global researchers and institutions.",
    image: "",
  },
  {
    id: 3,
    slug: "vituor",
    title: "VITUOR",
    category: "Healthcare & Medical Research",
    tagline: "Peer-Reviewed Medical Journal",
    description:
      "An international open-access medical journal dedicated to publishing high-impact, ethically reviewed healthcare research.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=60&w=675&h=900",
  },
  {
    id: 4,
    slug: "beentu-ai",
    title: "BEENTU AI",
    category: "Artificial Intelligence & Education",
    tagline: "AI Academic Writing Assistant",
    description:
      "An intelligent academic writing and review system that enhances clarity, structure, citation accuracy, and publication readiness.",
    image: "/home/dark sections/Beentu AI.png",
  },
  {
    id: 5,
    slug: "nationcite",
    title: "NATIONCITE",
    category: "Research Analytics",
    tagline: "India's Research Impact Portal",
    description:
      "India's national research visibility and analytics platform providing verified rankings, researcher profiles, and institutional performance insights.",
    image: "/home/dark sections/NATIONCITE.png",
  },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(1);
  const serviceRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Service Scroll Spy Logic
  useEffect(() => {
    const currentRefs = serviceRefs.current;

    // Trigger when the element is near the center of the viewport
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute("data-id"));
          if (!isNaN(id)) {
            setActiveService(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all service sections
    Object.values(currentRefs).forEach((ref: any) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const scrollToService = (id: number) => {
    const element = serviceRefs.current[id];
    if (element) {
      // Offset for sticky header
      const yOffset = -150;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar toggleMenu={() => {}} isMenuOpen={false} scrolled={scrolled} />

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden bg-gray-900 text-white font-sans">
          {/* 1. Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=60&w=2071&auto=format&fit=crop"
              alt="Background"
              fill
              className="object-cover opacity-70"
              quality={60}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* 3. Main Content */}
          {/* Note: lg:px-[130px] ensures 130px from left & right edges at large screens */}
          <div className="relative z-10 h-full flex flex-col justify-center w-full px-6 md:px-8 lg:px-[130px] mt-16">
            {/* remove mx-auto so padding is always measured from viewport edges */}
            <div className="w-full">
              {/* use lg:flex-row + lg:gap-24 to increase horizontal gap on large screens */}
              <div className="flex flex-col lg:flex-row items-start lg:pt-20 lg:gap-24">
                {/* Left Column */}
                <div className="space-y-4 self-start w-full lg:w-[45%]">
                  <h1
                    className="font-serif text-[#F4F3EA] leading-tight 
                       text-3xl md:text-5xl lg:text-[64px]
                       text-center lg:text-left"
                  >
                    <span className="block whitespace-nowrap">
                      Shaping the Future of
                    </span>
                    <span className="block whitespace-nowrap">
                      Education &amp; Research
                    </span>
                    <span className="block whitespace-nowrap">
                      Through Technology
                    </span>
                  </h1>
                </div>

                {/* Right Column */}
                <div className="space-y-8 mt-8 lg:mt-0 lg:flex lg:flex-col lg:items-end lg:text-right self-start w-full lg:w-[45%]">
                  <p className="text-lead text-white/85 max-w-sm mx-auto lg:mx-0">
                    SCIVYT builds advanced digital ecosystems that empower
                    learners, educators, and researchers with scalable,
                    AI-driven tools for real-world academic and scientific
                    impact.
                  </p>

                  <div className="flex items-center gap-4 justify-center lg:justify-end">
                    <button className="inline-flex items-center justify-center bg-white text-black px-5 py-3 rounded-full font-medium text-sm shadow-lg shadow-black/40 hover:bg-white/90 transition">
                      Explore Our Solutions
                    </button>

                    <button className="group inline-flex items-center gap-3 bg-black/70 backdrop-blur-sm border border-white/15 pl-2.5 pr-3 py-2 rounded-full shadow-lg shadow-black/50 hover:bg-black/90 transition cursor-pointer">
                      <div className="relative flex-shrink-0 overflow-hidden">
                        <Image
                          src="/team/Dr. Yethindra Vityala 2.JPG"
                          alt="Agent"
                          width={28}
                          height={28}
                          className="rounded-full border-2 border-white/80 object-cover object-center"
                          quality={60}
                        />
                        <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border-2 border-black rounded-full" />
                      </div>
                      <span className="text-sm text-white font-medium">
                        Partner With Us
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction / As Seen In */}
        <section className="py-24 bg-white w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-section font-serif mb-8 text-slate-900">
                Where Knowledge Meets Intelligent Systems
              </h2>
              <p className="text-slate-500 text-body">
                SCIVYT is a global education and research technology
                organization dedicated to transforming how knowledge is created,
                shared, and applied. We bridge the gap between learning,
                research, and real-world outcomes through intelligent platforms
                built for scale, precision, and accessibility.
              </p>

              <div className="flex justify-center items-center mt-10 -space-x-4">
                {[
                  "/team/Dr. Yethindra Vityala 2.JPG",
                  "/team/Dr. Tugolbai Tagaev.JPG",
                  "/team/Srilaxmi Vityala.JPG",
                  "/team/Dr. Altynai Zhumbekova.JPG",
                  "/team/Dr. Krishna Priya Kanteti.jpg",
                  "/team/Dr. Ujwala Damineni.jpg",
                  "/team/Sravya Gatta.jpg",
                  "/team/Vinay Devarakonda.jpg",
                ].map((img, i) => (
                  <div
                    key={i}
                    className={`w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden ${
                      i === 3 ? "z-20" : "z-10"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Team member ${i + 1}`}
                      width={48}
                      height={48}
                      className={`object-cover w-full h-full ${
                        i === 3 ? "scale-150  translate-y-2" : "object-center"
                      }`}
                      quality={60}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-12">
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

        {/* Dark Services Section */}
        <section className="bg-[#0a0a0a] text-white py-24 md:py-32 relative w-full">
          <div className="mb-12 px-4 sm:px-6 md:px-[72px] w-full pb-1">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/4 hidden lg:block"></div>
              <div className="lg:w-3/4">
                <h2 className="text-section font-serif">
                  Integrated Platforms for <br /> Academic Research Excellence
                </h2>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sticky Sidebar (Desktop Only) */}
              <div className="lg:w-1/4 hidden lg:block">
                <div className="sticky top-32 space-y-8 h-fit">
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                    Our Products
                  </div>
                  <ul className="space-y-6 text-2xl font-light text-gray-600">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        onClick={() => scrollToService(product.id)}
                        className={`cursor-pointer transition-all duration-300 ${
                          activeService === product.id
                            ? "text-white scale-105 origin-left"
                            : "hover:text-gray-400"
                        }`}
                      >
                        {product.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Vertical Stack (Mobile & Desktop Content) */}
              <div className="lg:w-3/4 space-y-32">
                {products.map((product) => (
                  <div
                    key={product.id}
                    ref={(el) => {
                      if (el) serviceRefs.current[product.id] = el;
                    }}
                    data-id={product.id}
                    className="group scroll-mt-20 cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="relative w-full md:w-1/2 overflow-hidden rounded-sm">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={675}
                          height={900}
                          className="w-full aspect-[3/4] object-cover object-right  transform group-hover:scale-10 transition-transform duration-700"
                          quality={60}
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                          {product.category}
                        </div>
                        <div className="mb-6">
                          <h3 className="text-card font-light font-serif inline max-w-lg">
                            {product.title}
                          </h3>
                          <span className="text-gray-400 ml-3 text-base font-serif font-light inline">
                            {product.tagline}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-8 max-w-[330px] text-body">
                          {product.description}
                        </p>
                        <Link
                          href={`/products/${product.slug}`}
                          className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition group"
                        >
                          <span className="text-sm font-medium">
                            Learn More
                          </span>
                          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-24 bg-white text-slate-900 w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-16">
                  {/* About Label */}
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    ABOUT US
                  </div>

                  {/* Heading */}
                  <h2 className="text-4xl md:text-5xl font-serif leading-[1.15] mb-10">
                    Building the Future of <br />
                    Learning, Research & <br />
                    Innovation
                  </h2>

                  {/* Note: Description paragraph removed to match screenshot */}

                  {/* Pill Button */}
                  <a
                    href="#"
                    className="inline-flex items-center justify-between gap-3 border border-gray-200 rounded-full pl-6 pr-2 py-2 hover:border-gray-400 transition group"
                  >
                    <span className="text-sm font-semibold text-black">
                      Learn More About SCIVYT
                    </span>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition">
                      <ArrowRight className="w-4 h-4 text-gray-600" />
                    </div>
                  </a>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-12">
                  <div className="">
                    <div className="text-4xl md:text-5xl font-serif mb-3">
                      120+
                    </div>
                    <div className="text-sm font-medium leading-relaxed text-slate-800 max-w-[180px]">
                      Global Academic & Institutional Collaborations
                    </div>
                  </div>
                  <div className="">
                    <div className="text-4xl md:text-5xl font-serif mb-3">
                      50,000+
                    </div>
                    <div className="text-sm font-medium leading-relaxed text-slate-800 max-w-[180px]">
                      Learners & Researchers Supported
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual/Image */}
              {/* Using bg-gray-200 to match the screenshot placeholder, or keep the image if preferred */}
              <div className="h-[500px] md:h-[600px] bg-gray-200 rounded-lg overflow-hidden relative">
                {/* If you want the actual image back, uncomment below: */}
                {/* <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              alt="About SCIVYT"
              className="w-full h-full object-cover grayscale opacity-50"
            /> 
            */}
              </div>
            </div>
          </div>
        </section>

        {/* Parallax/Quote Section */}
        <CampaignSlider />

        {/* Contact Section */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
