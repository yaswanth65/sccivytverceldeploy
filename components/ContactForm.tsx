"use client";

import React from 'react';
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="w-full bg-white py-12 md:py-24 px-4 md:px-[72px]">
      <div className="w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Text Content */}
        <div className="pt-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Let's Talk</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif text-black mb-8 leading-tight">
            Connect With SCIVYT
          </h1>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-md">
            Reach out to our global team for partnerships, product inquiries, or academic 
            collaboration opportunities. We are here to support your journey in education and 
            research.
          </p>
          
          <button className="group flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 hover:border-gray-900 transition-colors">
            <span className="text-sm font-semibold tracking-wide uppercase">Learn More About SCIVYT</span>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition">
                                 <ArrowRight className="w-4 h-4 text-gray-600" />
                               </div>
          </button>
        </div>

        {/* Right Column: Form */}
        <div className="bg-[#EBECE6] rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-medium text-black mb-8">
            Let's Build the Future of<br />Knowledge Together
          </h3>

          <form className="space-y-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                Full Name
              </label>
              <input 
                type="text" 
                placeholder="FULL NAME"
                className="w-full bg-[#F5F5F0] border-none rounded-lg px-4 py-3 placeholder:text-gray-400 focus:ring-1 focus:ring-black outline-none"
              />
            </div>

            {/* Email & Price Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="w-full bg-[#F5F5F0] border-none rounded-lg px-4 py-3 placeholder:text-gray-400 focus:ring-1 focus:ring-black outline-none"
                />
              </div>
            
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Message
              </label>
              <textarea 
                rows={6} 
                placeholder="Describe your project vision"
                className="w-full bg-[#F5F5F0] border-none rounded-lg px-4 py-3 placeholder:text-gray-400 focus:ring-1 focus:ring-black outline-none resize-none"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  id="privacy"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-400 checked:bg-black checked:border-black transition-all"
                />
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <label htmlFor="privacy" className="text-sm text-gray-800 cursor-pointer select-none">
                I allow SCIVYT™ to store all my details for communication
              </label>
            </div>

            {/* Footer Row */}
            <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-4 pt-6 mt-2">
              <p className="text-xs text-gray-800 max-w-[200px] leading-tight">
                We'll reply within 24-48h.<br/>
                By sending, you accept our Privacy Policy.
              </p>
              
              <button className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full hover:bg-black transition-colors text-sm font-medium">
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}