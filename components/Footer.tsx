import React from "react";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden w-full">
      <div className="container mx-auto px-6 w-full">
        <div className="relative mb-24">
          <h1 className="text-[15vw] font-bold leading-none tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 select-none">
            SCIVYT
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[25vw] hidden md:block">
            <div className="w-full h-full bg-gray-700 rounded-sm border-4 border-black"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          <div className="col-span-1">
            <div className="text-2xl font-serif font-bold mb-6">BRAND.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
              Sitemap
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Strategy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
              Office
            </h4>
            <p className="text-gray-300 mb-4">
              123 Innovation Drive
              <br />
              Tech City, TC 90210
              <br />
              United States
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 BrandName Inc.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
