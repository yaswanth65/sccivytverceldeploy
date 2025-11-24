"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const TermsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const termsContent = [
    {
      title: "Acceptance of Terms",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Use Of Services",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      title: "Privacy & Data Protection",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    },
    {
      title: "Appointments & Cancellations",
      content:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-200">
      {/* --- Navigation --- */}
      <div className="pt-24">
        <Navbar
          isMenuOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          scrolled={scrolled}
        />
      </div>

      {/* --- Header Section --- */}
      <header className="pt-20 pb-12 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 tracking-tight">
          Terms and Conditions
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Please read these terms and conditions carefully before using our
          service. They outline the rules and regulations for the use of
          Scavyt's Website.
        </p>
        <div className="inline-block px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Last Updated: 24 November 2025
          </p>
        </div>
      </header>

      {/* --- Main Terms Content --- */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
        <div className="space-y-12">
          {termsContent.map((section, index) => (
            <section
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="text-2xl font-serif text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </main>

      {/* --- Contact Section --- */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Contact Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                Have Questions About Our Terms?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our terms or need further clarification?
                Our team is here to help you understand our policies and how
                they apply to you.
              </p>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default TermsPage;
