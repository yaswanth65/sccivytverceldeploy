import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const campaigns = [
  {
    id: 1,
    company: "COMPANY NAME",
    founder: "Ratan Tata",
    role: "Founder of TATA Services",
    title:
      "Driving Academic Impact Through Innovation, Clarity & Collaboration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit labore ut amet sir",
    outcome: "82%",
    image:
      "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    company: "INNOVATE CORP",
    founder: "Sarah Chen",
    role: "CEO of Innovate",
    title: "Revolutionizing Digital Payments Securely",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    outcome: "94%",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    company: "ECO SYSTEMS",
    founder: "James Wilson",
    role: "Director of Sustainability",
    title: "Green Energy for Tomorrow's World",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    outcome: "76%",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    company: "FUTURE LABS",
    founder: "Elena Rodriguez",
    role: "Head of Research",
    title: "AI in Modern Healthcare Solutions",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    outcome: "88%",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
  },
];

export default function CampaignSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % campaigns.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + campaigns.length) % campaigns.length);
  };

  const currentCampaign = campaigns[currentIndex];

  return (
    <section className="relative py-20 bg-[#1a1a1a] overflow-hidden w-full min-h-screen flex flex-col justify-center">
      {/* Background with blur */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-30 blur-md scale-110"
          alt="Background"
        />
        {/* Gradient overlay to match the dark aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-[#1a1a1a]/90" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-4 pl-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            Successful Campaigns
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#e8e8e8] font-serif leading-tight max-w-4xl tracking-tight">
              {currentCampaign.title}
            </h2>

            {/* Navigation Arrows - Aligned to right */}
            <div className="flex items-center gap-3 shrink-0 mb-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group"
              >
                <ArrowLeft
                  size={20}
                  className="opacity-70 group-hover:opacity-100"
                />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group"
              >
                <ArrowRight
                  size={20}
                  className="opacity-70 group-hover:opacity-100"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Wide Card Container */}
        <div className="relative w-full">
          <div className="bg-[#111111] rounded-lg overflow-hidden shadow-2xl transition-all duration-500">
            {/* Grid: Fixed width image (approx 400px), Flexible content */}
            <div className="grid lg:grid-cols-[400px_1fr] min-h-[500px]">
              {/* Left: Image Side */}
              <div className="relative h-[400px] lg:h-auto p-4 lg:p-6">
                {/* Image Container with rounded corners inside the card */}
                <div className="relative w-full h-full rounded-lg overflow-hidden group">
                  <img
                    key={currentCampaign.image}
                    src={currentCampaign.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-fadeIn"
                    alt="Campaign detail"
                  />

                  {/* Dark gradient overlay on image for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                  {/* Top Left Overlay */}
                  <div className="absolute top-6 left-6 text-white font-bold tracking-widest text-xs uppercase shadow-sm">
                    {currentCampaign.company}®
                  </div>

                  {/* Bottom Left Overlay */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-medium text-lg leading-tight mb-0.5">
                      - {currentCampaign.founder}
                    </p>
                    <p className="text-[10px] text-white/80 font-light tracking-wide">
                      {currentCampaign.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Content Side - Stretched and Spacious */}
              <div className="relative p-8 lg:p-12 flex flex-col justify-between bg-[#111111] text-white">
                {/* Top Content */}
                <div>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-white/40 mb-8 font-medium">
                    <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                    Campaign Name
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif leading-snug text-[#e0e0e0] max-w-2xl">
                    "{currentCampaign.description}"
                  </h3>
                </div>

                {/* Bottom Content Row */}
                <div className="flex items-end justify-between mt-16 md:mt-0">
                  {/* Bottom Left: Outcome */}
                  <div className="flex flex-col">
                    <div className="text-6xl font-serif text-white leading-none mb-2">
                      {currentCampaign.outcome}
                    </div>
                    <p className="text-[10px] text-white/40 uppercase tracking-wide font-light">
                      Outcome of the campaign
                    </p>
                  </div>

                  {/* Bottom Right: Button */}
                  <button className="flex items-center gap-4 text-xs text-white/90 hover:text-white transition-colors group mb-2">
                    Read Case Study
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight size={14} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.02);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
