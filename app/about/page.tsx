"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartIndexRef = useRef(0);
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  // Distance between dots in pixels (used for drag calculations)
  const DOT_SPACING = 120;

  // Navigate to a specific year index with bounds checking
  const goToYear = useCallback(
    (index: number) => {
      const clampedIndex = Math.max(
        0,
        Math.min(index, timelineItems.length - 1)
      );
      setActiveTimelineIndex(clampedIndex);
    },
    [timelineItems.length]
  );

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse wheel handler - discrete year-by-year scrolling
  useEffect(() => {
    const container = timelineContainerRef.current;
    if (!container) return;

    let wheelTimeout: NodeJS.Timeout | null = null;
    let isWheelLocked = false;

    const handleWheel = (e: WheelEvent) => {
      // Only handle horizontal-like scroll or vertical scroll on the timeline
      e.preventDefault();

      if (isWheelLocked) return;

      // Lock to prevent rapid-fire scrolling
      isWheelLocked = true;

      // Determine direction: positive deltaY = scroll down = next year
      if (e.deltaY > 0 || e.deltaX > 0) {
        goToYear(activeTimelineIndex + 1);
      } else if (e.deltaY < 0 || e.deltaX < 0) {
        goToYear(activeTimelineIndex - 1);
      }

      // Unlock after a short delay to allow next discrete step
      wheelTimeout = setTimeout(() => {
        isWheelLocked = false;
      }, 300);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [activeTimelineIndex, goToYear]);

  // Mouse drag handler - snap to years while dragging
  useEffect(() => {
    const track = timelineTrackRef.current;
    if (!track) return;

    const handleMouseDown = (e: MouseEvent) => {
      // Prevent default to avoid text selection
      e.preventDefault();

      isDraggingRef.current = true;
      dragStartXRef.current = e.clientX;
      dragStartIndexRef.current = activeTimelineIndex;

      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const deltaX = dragStartXRef.current - e.clientX;

      // Calculate how many "steps" the user has dragged
      // Using midpoint logic: snap when past half the distance to next year
      const stepsFromDrag = Math.round(deltaX / (DOT_SPACING / 2)) / 2;
      const newIndex = Math.round(dragStartIndexRef.current + stepsFromDrag);

      // Clamp and update
      const clampedIndex = Math.max(
        0,
        Math.min(newIndex, timelineItems.length - 1)
      );

      if (clampedIndex !== activeTimelineIndex) {
        setActiveTimelineIndex(clampedIndex);
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      isDraggingRef.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";

      // On release, if between years, snap forward to the next year
      const deltaX = dragStartXRef.current - e.clientX;
      const rawSteps = deltaX / DOT_SPACING;

      // If there's any forward movement at all, go to next year
      let targetIndex: number;
      if (deltaX > 10) {
        // Moving forward (dragging left) - snap to ceiling
        targetIndex = Math.ceil(dragStartIndexRef.current + rawSteps);
      } else if (deltaX < -10) {
        // Moving backward (dragging right) - snap to floor
        targetIndex = Math.floor(dragStartIndexRef.current + rawSteps);
      } else {
        // Minimal movement - stay at current
        targetIndex = activeTimelineIndex;
      }

      goToYear(targetIndex);
    };

    const handleMouseLeave = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      }
    };

    track.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      track.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeTimelineIndex, goToYear, timelineItems.length]);

  // Touch drag handler for mobile
  useEffect(() => {
    const track = timelineTrackRef.current;
    if (!track) return;

    let touchStartX = 0;
    let touchStartIndex = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartIndex = activeTimelineIndex;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const deltaX = touchStartX - e.touches[0].clientX;
      const stepsFromDrag = Math.round(deltaX / (DOT_SPACING / 2)) / 2;
      const newIndex = Math.round(touchStartIndex + stepsFromDrag);
      const clampedIndex = Math.max(
        0,
        Math.min(newIndex, timelineItems.length - 1)
      );

      if (clampedIndex !== activeTimelineIndex) {
        setActiveTimelineIndex(clampedIndex);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const deltaX = touchStartX - touch.clientX;
      const rawSteps = deltaX / DOT_SPACING;

      let targetIndex: number;
      if (deltaX > 20) {
        targetIndex = Math.ceil(touchStartIndex + rawSteps);
      } else if (deltaX < -20) {
        targetIndex = Math.floor(touchStartIndex + rawSteps);
      } else {
        targetIndex = activeTimelineIndex;
      }

      goToYear(targetIndex);
    };

    track.addEventListener("touchstart", handleTouchStart, { passive: true });
    track.addEventListener("touchmove", handleTouchMove, { passive: true });
    track.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      track.removeEventListener("touchstart", handleTouchStart);
      track.removeEventListener("touchmove", handleTouchMove);
      track.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeTimelineIndex, goToYear, timelineItems.length]);

  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar toggleMenu={() => {}} isMenuOpen={false} scrolled={scrolled} />

      <main>
        {/* About Hero */}
        <section className="min-h-screen flex flex-col bg-white pt-28 w-full">
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

        {/* TIMELINE SECTION */}
        {/* ===== TIMELINE SECTION (replace your existing section) ===== */}
        <section className="py-24 bg-white w-full">
          {/* Keep the outer 72px padding for the whole section */}
          <div className="w-full px-4 sm:px-6 md:px-[72px]">
            <div className="relative grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 xl:gap-20">
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
              {/* NOTE: added pr-[72px] so all content inside remains 72px away from right edge */}
              <div className="relative pr-[72px]" ref={timelineContainerRef}>
                {/* Static rail: positioned to align with the 72px dot column.
            left: 36px centers the 2px rail inside the 72px dot column */}
                <div
                  className="hidden lg:block absolute top-8 bottom-24 w-[2px] bg-gray-100 pointer-events-none"
                  style={{ left: "36px" }}
                ></div>

                {/* Dynamic black bar (the ear) — left tuned to sit centered in the 72px column */}
                <div
                  className="hidden lg:block absolute w-[18px] bg-black rounded-full z-10 transition-all duration-200"
                  style={{
                    top: `${
                      timelineItemRefs.current[activeTimelineIndex]
                        ?.offsetTop ?? 0
                    }px`,
                    height: "12px",
                    left: "27px",
                  }}
                ></div>

                {/* Make timeline items stretch: removed max-w-lg so text uses available width */}
                <div className="space-y-24">
                  {timelineItems.map((item, i) => {
                    const isActiveDot =
                      i === activeTimelineIndex ||
                      i === activeTimelineIndex + 1;

                    return (
                      <div
                        key={item.year}
                        ref={(el) => {
                          if (el) timelineItemRefs.current[i] = el;
                        }}
                        className="relative pt-2 lg:pt-0 lg:grid lg:grid-cols-[72px_minmax(0,1fr)] lg:gap-10 group"
                      >
                        {/* Dot Column */}
                        <div className="hidden lg:flex flex-col items-center justify-start pt-8">
                          <div
                            className={`relative z-20 w-3 h-3 rounded-full transition-colors duration-300 ${
                              isActiveDot ? "bg-white" : "bg-black"
                            }`}
                          ></div>
                        </div>

                        {/* Content Column - fill width (no max width), so right side stretches */}
                        <div className="pl-2 lg:pl-0 w-full">
                          {/* Mobile Dot + Year */}
                          <div className="flex items-center gap-2 mb-2 lg:hidden">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                isActiveDot ? "bg-black" : "bg-gray-300"
                              }`}
                            ></div>
                            <span className="text-xs text-gray-500 font-bold">
                              {item.year}
                            </span>
                          </div>

                          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                            <span className="hidden lg:block text-sm font-bold text-gray-900 tracking-wide w-12">
                              {item.year}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-gray-900">
                              {item.title}
                            </h3>
                          </div>

                          {/* IMPORTANT: removed max-w-lg so text stretches to available width */}
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
            className="flex items-center w-full"
            style={{ paddingLeft: "72px", paddingRight: "72px" }}
          >
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-serif mb-6">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="text-gray-500 text-lg">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-16">
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
                  className="flex flex-col justify-center border-l border-gray-300 pl-8"
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
        <section className="bg-white py-24 w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
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
