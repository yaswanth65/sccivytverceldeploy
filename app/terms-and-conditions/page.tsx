"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const TermsAndConditionsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const termsContent = [
    {
      title: "About SCIVYT",
      content:
        "SCIVYT operates as a global education, innovation, and research support platform providing AI-driven academic tools, customized learning experiences, medical research assistance, and educational and institutional technology services. SCIVYT reserves the right to modify, expand, or discontinue any part of its offerings at any time without prior notice.",
    },
    {
      title: "Eligibility to Use",
      content:
        "You must be at least 18 years of age, or have valid parental or institutional consent if under 18. By using SCIVYT, you confirm that you are legally capable of entering into a binding agreement.",
    },
    {
      title: "User Responsibilities",
      content:
        "You agree to provide accurate, current, and complete information; use services strictly for lawful and ethical purposes; not misuse, copy, reverse-engineer, or exploit SCIVYT's tools, systems, or content; and not engage in data scraping, hacking, plagiarism, or intellectual property infringement. Any violation may result in immediate suspension or permanent termination of access without notice.",
    },
    {
      title: "Intellectual Property Rights",
      content:
        "All content on SCIVYT including but not limited to software, algorithms, research tools, logos, designs, written content, and training materials is the exclusive intellectual property of SCIVYT and is protected under international copyright, trademark, and intellectual property laws. No content may be copied, reproduced, distributed, sublicensed, or repurposed without prior written consent from SCIVYT.",
    },
    {
      title: "Research, AI & Academic Tools Disclaimer",
      content:
        "SCIVYT provides AI-powered and research-support tools strictly for educational assistance, academic analysis, and knowledge enhancement. SCIVYT does not replace licensed medical, clinical, legal, or professional judgment. Users bear full responsibility for interpretation of outputs, clinical or academic decisions, and research implementation. SCIVYT shall not be liable for outcomes arising from independent reliance on platform-generated insights.",
    },
    {
      title: "Data Protection & Privacy Compliance",
      content:
        "SCIVYT is committed to strict data protection standards in accordance with applicable laws, including Information Technology Act, 2000 (India), GDPR, and global data protection best practices. Personal data is processed lawfully, stored securely, never sold to third parties, and used only for stated service objectives. Full data practices are governed by our Privacy Policy, which forms an integral part of these Terms.",
    },
    {
      title: "Payment, Subscriptions & Refunds",
      content:
        "All fees, subscriptions, and service charges are clearly disclosed prior to payment. Payments once processed are non-refundable, unless explicitly stated. SCIVYT reserves the right to revise pricing, service structures, and payment models at its discretion. Any attempt at chargeback or fraudulent dispute will be treated as a serious breach of these Terms.",
    },
    {
      title: "Third-Party Integrations",
      content:
        "SCIVYT may integrate with or link to third-party platforms, services, or tools. SCIVYT does not control third-party content, is not responsible for external privacy or security practices, and shall not be liable for losses arising from third-party interactions. Use of external platforms is strictly at the user's own discretion and risk.",
    },
    {
      title: "Limitation of Liability",
      content:
        "To the fullest extent permitted by law, SCIVYT shall not be liable for indirect, incidental, or consequential damages; research or academic outcomes; business loss, reputational damage, or data loss; or unauthorized access due to user negligence. All services are provided on an 'as is' and 'as available' basis.",
    },
    {
      title: "Service Availability & Modifications",
      content:
        "SCIVYT reserves the right to modify or discontinue any portion of services at any time, impose usage limitations without prior notice, and suspend services for maintenance, upgrades, or security reasons. Service continuity is not contractually guaranteed.",
    },
    {
      title: "Suspension & Termination",
      content:
        "SCIVYT may suspend or terminate access immediately if a user violates these Terms, engages in unethical research practices, compromises system security, or misuses academic or institutional tools. Termination does not waive any legal remedies available to SCIVYT.",
    },
    {
      title: "Indemnification",
      content:
        "You agree to fully indemnify and hold harmless SCIVYT, its directors, partners, employees, and affiliates against any claims, losses, damages, or legal expenses arising from your misuse of the platform, violation of these Terms, or infringement of any third-party rights.",
    },
    {
      title: "Governing Law & Jurisdiction",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of India. All disputes shall be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.",
    },
    {
      title: "Amendments to Terms",
      content:
        "SCIVYT reserves the right to update or revise these Terms at any time. Continued use of the platform after changes implies full acceptance of the revised Terms.",
    },
    {
      title: "Contact for Legal Queries",
      content:
        "For all legal, compliance, or policy-related communications: Email: legal@scivyt.com",
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
      <header className="pt-20 pb-12 px-6 md:px-8 text-center w-full">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Welcome to SCIVYT. These Terms & Conditions ("Terms") govern your
            access to and use of the SCIVYT website, platforms, products, and
            services. By accessing or using our services, you acknowledge that
            you have read, understood, and agree to be legally bound by these
            Terms.
            <br />
            <br />
            If you do not agree with any part of these Terms, you must
            discontinue use of our services immediately.
          </p>
          <div className="inline-block px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Effective Date: 1 December 2025 | Last Updated: 1 December 2025
            </p>
          </div>
        </div>
      </header>

      {/* --- Main Terms Content --- */}
      <main className="max-w-3xl mx-auto px-6 md:px-8 pb-24 w-full">
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
      <ContactForm />
      {/* --- Footer --- */}
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
