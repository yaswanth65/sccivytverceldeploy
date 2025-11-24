"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(1);
  const sectionRef = React.useRef<HTMLElement>(null);
  const serviceRefs: { [key: number]: React.RefObject<HTMLDivElement> } = {
    1: React.useRef(null),
    2: React.useRef(null),
    3: React.useRef(null),
    4: React.useRef(null),
    5: React.useRef(null),
  };

  const services = [
    {
      id: 1,
      title: "YETZU",
      description:
        "Modern fashion bringing the lorem support the people, of the people, by the people for the people - Democratic Country- the people - Democratic Country",
    },
    {
      id: 2,
      title: "NationCite",
      description:
        "Modern Lorem ipsum bringing the lorem support the people, of the people, by the people for the people - Democratic Country",
    },
    {
      id: 3,
      title: "Digital Strategy",
      description:
        "Modern Lorem ipsum bringing the lorem support the people, of the people, by the people for the people - Democratic Country",
    },
    {
      id: 4,
      title: "Brand Identity",
      description:
        "Modern Lorem ipsum bringing the lorem support the people, of the people, by the people for the people - Democratic Country",
    },
    {
      id: 5,
      title: "Web Development",
      description:
        "Modern Lorem ipsum bringing the lorem support the people, of the people, by the people for the people - Democratic Country",
    },
  ];

  const serviceImages = [
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active service based on scroll position
      for (let i = 1; i <= 5; i++) {
        const ref = serviceRefs[i];
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (
            rect.top < window.innerHeight / 2 &&
            rect.bottom > window.innerHeight / 2
          ) {
            setActiveService(i);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToService = (serviceId: number) => {
    setActiveService(serviceId);
    const ref = serviceRefs[serviceId];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        scrolled={scrolled}
      />

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden bg-gray-900 text-white font-sans">
          {/* 1. Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
              alt="Background"
              className="w-full h-full object-cover opacity-70"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* 3. Main Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-[1600px] mx-auto mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                    Scivyt Introduction
                  </p>
                </div>

                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-tight">
                  Lorem Ipsum Lorem <br />
                  Lorem Ipsum
                </h1>
              </div>

              {/* Right Column */}
              <div className="space-y-8 lg:pl-12">
                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-md">
                  Scivyt is a platform where you can benefit Lorem ipsum dolor
                  sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  {/* View Products */}
                  <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition">
                    View Products
                  </button>

                  {/* Book a Call */}
                  <button className="group flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/10 pl-2 pr-6 py-2 rounded-full hover:bg-black/60 transition cursor-pointer">
                    <div className="relative">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Agent"
                        className="w-8 h-8 rounded-full border border-white/20"
                      />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></span>
                    </div>
                    <span className="text-sm text-white font-medium">
                      Book a call
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction / As Seen In */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8 text-slate-900">
                Bring the capabilities of your large scale enterprise to the
                next level.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes.
              </p>

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

        {/* Dark Vertical Showcase Section */}
        <section
          ref={sectionRef}
          className="bg-[#0a0a0a] text-white py-32 relative"
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/4 hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                    Our Services
                  </div>
                  <ul className="space-y-4 text-lg font-light text-gray-500">
                    {services.map((service) => (
                      <li
                        key={service.id}
                        onClick={() => scrollToService(service.id)}
                        className={`cursor-pointer pl-4 border-l-2 transition-all duration-300 ${
                          activeService === service.id
                            ? "text-white font-medium border-l-white"
                            : "hover:text-white border-l-transparent"
                        }`}
                      >
                        0{service.id}. {service.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-3/4 space-y-32">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    ref={serviceRefs[service.id]}
                    className="group scroll-mt-20"
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-full md:w-1/2 overflow-hidden rounded-sm">
                        <img
                          src={serviceImages[index]}
                          alt={service.title}
                          className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-sm font-mono text-gray-500">
                            0{service.id}
                          </span>
                          <div className="h-[1px] w-12 bg-gray-700"></div>
                        </div>
                        <h3 className="text-3xl font-serif mb-6">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-8">
                          {service.description}
                        </p>
                        <button className="flex items-center text-sm uppercase tracking-widest hover:text-gray-300 transition-colors gap-2">
                          Explore Case <ArrowUpRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                    Measuring success by results, not just effort.
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-6 text-black underline decoration-1 underline-offset-4 hover:text-gray-600"
                  >
                    Read our impact report
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-5xl font-serif mb-2">50+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">
                      Global Clients
                    </div>
                    <div className="text-xs text-gray-400 mt-2">
                      Across 12 countries
                    </div>
                  </div>
                  <div>
                    <div className="text-5xl font-serif mb-2">1500+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">
                      Projects Delivered
                    </div>
                    <div className="text-xs text-gray-400 mt-2">
                      On time & budget
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[600px] bg-gray-100 rounded-lg overflow-hidden relative">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax/Quote Section */}
        <section className="relative py-32 bg-[#1a1a1a] overflow-hidden">
          {/* Background with blur */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover opacity-30 blur-sm"
              alt="Children background"
            />
          </div>

          <div className="container relative z-10 mx-auto px-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/80 mb-6">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>{" "}
              Successful Campaigns
            </div>

            <h2 className="text-5xl md:text-6xl text-white font-serif mb-16 max-w-2xl">
              From Idea to <br />
              Sustainable Success
            </h2>

            {/* Dark Card */}
            <div className="bg-[#151515] p-8 md:p-0 max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="relative h-[400px] md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-full object-cover"
                    alt="Campaign detail"
                  />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold text-lg">- Ratan Tata</p>
                    <p className="text-xs text-white/60">
                      Founder of TATA Services
                    </p>
                  </div>
                  <div className="absolute top-6 left-6 text-white font-bold tracking-widest">
                    COMPANY NAME®
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-between bg-[#151515] text-white">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 mb-6">
                      <span className="w-1 h-1 bg-white rounded-full"></span>{" "}
                      Campaign Name
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif leading-snug mb-4">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      labore ut amet sir”
                    </h3>
                  </div>

                  <div className="flex items-end justify-between mt-12">
                    <div>
                      <div className="text-5xl md:text-6xl font-serif mb-2">
                        82%
                      </div>
                      <p className="text-xs text-gray-500 uppercase">
                        Outcome of the campaign
                      </p>
                    </div>
                    <button className="flex items-center gap-3 text-sm hover:text-gray-300 transition-colors">
                      Read Case Study{" "}
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                        <ArrowRight size={14} />
                      </div>
                    </button>
                  </div>
                </div>
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
