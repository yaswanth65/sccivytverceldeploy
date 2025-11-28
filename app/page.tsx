"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import CampaignSlider from "@/components/CampaignSlider";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Brand Strategy",
    description:
      "We build brands that stand for something. Our strategic approach combines market research, consumer insights, and creative vision to position your brand for long-term success in a crowded marketplace.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Digital Experience",
    description:
      "Creating seamless digital journeys that convert. We design and develop websites, applications, and digital products that are not only visually stunning but also intuitive and performance-driven.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Content Creation",
    description:
      "Stories that resonate and engage. From video production to copywriting, our content team crafts compelling narratives that connect with your audience across all channels and touchpoints.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Social Media",
    description:
      "Building communities, not just followers. We develop social strategies that foster genuine engagement, amplify your brand voice, and drive measurable growth across all major platforms.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
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
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
              alt="Background"
              className="w-full h-full object-cover opacity-70"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* 3. Main Content */}
          <div className="relative z-10 h-full flex flex-col justify-center w-full px-6 md:px-8 mt-16">
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                      Scivyt Introduction
                    </p>
                  </div>

                  <h1
                    className="font-serif text-6xl md:text-7xl lg:text-8xl leading-tight"
                    style={{
                      width: "100%",
                      maxWidth: "847px",
                      flexShrink: 0,
                      color: "var(--SCI-White, #F4F3EA)",
                      fontFamily: "Libre Baskerville, serif",
                      fontSize: "clamp(3rem, 5vw, 56px)",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "110%",
                    }}
                  >
                    Lorem Ipsum <br />
                    Lorem <br />
                    Lorem Ipsum
                  </h1>
                </div>

                {/* Right Column */}
                <div className="space-y-8 lg:pl-16 lg:flex lg:flex-col lg:items-end lg:text-right">
                  {/* Text */}
                  <p className="text-[15px] md:text-base text-white/85 leading-relaxed max-w-sm">
                    SCIVYT empowers learners, educators, and researchers with
                    advanced digital platforms that bridge academic knowledge
                    with real-world impact.
                  </p>

                  {/* CTAs */}
                  <div className="flex items-center gap-4">
                    {/* View Products */}
                    <button
                      className="inline-flex items-center justify-center bg-white text-black 
                 px-9 py-3 rounded-full font-medium text-sm
                 shadow-lg shadow-black/40
                 hover:bg-white/90 transition"
                    >
                      View Products
                    </button>

                    {/* Book a call */}
                    <button
                      className="group inline-flex items-center gap-3 
                 bg-black/70 backdrop-blur-sm
                 border border-white/15
                 pl-2.5 pr-7 py-2.5
                 rounded-full
                 shadow-lg shadow-black/50
                 hover:bg-black/90 transition cursor-pointer"
                    >
                      <div className="relative flex-shrink-0">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="Agent"
                          className="w-9 h-9 rounded-full border-2 border-white/80"
                        />
                        <span
                          className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 
                     border-2 border-black rounded-full"
                        />
                      </div>
                      <span className="text-sm text-white font-medium">
                        Book a call
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

        {/* Dark Services Section */}
        <section className="bg-[#0a0a0a] text-white py-24 md:py-32 relative w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sticky Sidebar (Desktop Only) */}
              <div className="lg:w-1/4 hidden lg:block">
                <div className="sticky top-32 space-y-8 h-fit">
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                    Our Services
                  </div>
                  <ul className="space-y-6 text-2xl font-light text-gray-600">
                    {services.map((service) => (
                      <li
                        key={service.id}
                        onClick={() => scrollToService(service.id)}
                        className={`cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                          activeService === service.id
                            ? "text-white scale-105 origin-left"
                            : "hover:text-gray-400"
                        }`}
                      >
                        <span
                          className={`text-sm font-mono transition-opacity duration-300 ${
                            activeService === service.id
                              ? "text-blue-500 opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          0{service.id}
                        </span>
                        {service.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Vertical Stack (Mobile & Desktop Content) */}
              <div className="lg:w-3/4 space-y-32">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    ref={(el) => {
                      if (el) serviceRefs.current[service.id] = el;
                    }}
                    data-id={service.id}
                    className="group scroll-mt-20"
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-full md:w-1/2 overflow-hidden rounded-sm">
                        <img
                          src={service.image}
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
        <section className="py-24 bg-white text-slate-900 w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-12">
                  <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8">
                    Measuring success by results, not just effort.
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8">
                    We believe in transparency and measurable outcomes. Our
                    track record speaks for itself, delivering consistent value
                    across industries and borders.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-black font-semibold border-b-2 border-black pb-1 hover:opacity-70 transition"
                  >
                    Read our impact report <ArrowRight size={16} />
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-12">
                  <div className="border-l-2 border-slate-200 pl-6">
                    <div className="text-5xl md:text-6xl font-serif mb-2">
                      50+
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Global Clients
                    </div>
                  </div>
                  <div className="border-l-2 border-slate-200 pl-6">
                    <div className="text-5xl md:text-6xl font-serif mb-2">
                      1.5k+
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Projects Delivered
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Visual/Image */}
              <div className="h-[500px] md:h-[600px] bg-gray-100 rounded-2xl overflow-hidden relative shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                  alt="Stats Graph"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax/Quote Section */}
        <CampaignSlider />

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
