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
      title: "Scope of This Policy",
      content:
        "This Privacy Policy applies to SCIVYT websites and mobile platforms, AI-driven academic tools, research and education services, medical research support systems, and all related digital and institutional services. It governs information collected both online and offline in connection with our services.",
    },
    {
      title: "Information We Collect",
      content:
        "We collect Personal Identification Information (full name, email, phone, organization, designation), Academic & Research Information (manuscripts, institutional affiliation, research metadata), Technical & Usage Data (IP address, device type, access timestamps, cookies), and Payment Information (transaction IDs, billing details, subscription history). SCIVYT does not store full card or sensitive banking credentials.",
    },
    {
      title: "Lawful Basis for Data Processing",
      content:
        "SCIVYT processes personal data only when legally permitted under user consent, contractual necessity, legal obligations, legitimate business interests, and academic and research integrity requirements.",
    },
    {
      title: "How We Use Your Information",
      content:
        "Your data is used exclusively to deliver and manage SCIVYT services, provide academic and research support, personalize user experience, process submissions and publications, manage subscriptions and transactions, communicate important updates, improve system performance and security, and comply with legal and regulatory requirements. SCIVYT does not sell or rent personal data to third parties.",
    },
    {
      title: "AI, Research & Medical Data Handling",
      content:
        "Where applicable, AI tools may process academic queries, research workflows, and published or submitted content. SCIVYT does not use identifiable personal data to train public AI models, applies strict anonymization and access control protocols, and complies with international research data ethics and integrity standards. SCIVYT is not a medical record storage platform and does not function as a hospital EMR/EHR system unless contractually specified.",
    },
    {
      title: "Cookies & Tracking Technologies",
      content:
        "We use cookies and similar technologies to improve platform performance, analyze traffic and user behavior, enhance user personalization, and maintain login and session security. You may disable cookies through your browser settings. However, doing so may limit certain features of the platform.",
    },
    {
      title: "Data Sharing & Disclosure",
      content:
        "We may share limited data only with trusted technology service providers (under strict confidentiality agreements), payment gateways and financial processors, legal or regulatory authorities when required by law, and institutional partners under defined contractual obligations. SCIVYT never shares personal data for advertising resale or unauthorized profiling.",
    },
    {
      title: "Cross-Border Data Transfers",
      content:
        "As a global platform, SCIVYT may process data across international servers. All international transfers follow GDPR-standard contractual safeguards, apply encryption and access restrictions, and maintain equivalent or higher levels of data protection.",
    },
    {
      title: "Data Retention Policy",
      content:
        "We retain personal data only for as long as required to fulfill service purposes, comply with legal or academic obligations, or resolve disputes and enforce agreements. Once no longer required, data is securely deleted or anonymized.",
    },
    {
      title: "Data Security Measures",
      content:
        "SCIVYT employs industry-grade security protocols, including end-to-end encryption, secure cloud infrastructure, role-based access controls, regular security audits, and breach detection and monitoring systems. Despite best efforts, no digital system can be 100% secure. Users are also responsible for safeguarding their login credentials.",
    },
    {
      title: "User Rights (GDPR & Global Compliance)",
      content:
        "You have the right to access your personal data, request correction of inaccurate data, request deletion (Right to Be Forgotten), restrict or object to processing, withdraw consent at any time, request data portability, and lodge complaints with applicable regulatory authorities. Requests may be sent to: privacy@scivyt.com",
    },
    {
      title: "Children's Privacy",
      content:
        "SCIVYT does not knowingly collect data from individuals under 18 years of age without verified parental or institutional consent. If such data is identified, it will be promptly deleted.",
    },
    {
      title: "Third-Party Links & Integrations",
      content:
        "SCIVYT platforms may contain links to external websites or partner platforms. We are not responsible for the privacy practices of third-party services. Users are advised to review their respective privacy policies.",
    },
    {
      title: "Policy Updates & Modifications",
      content:
        "SCIVYT reserves the right to modify this Privacy Policy at any time. Changes will be posted on this page with an updated Last Updated date. Continued use of the platform constitutes acceptance of the revised policy.",
    },
    {
      title: "Legal Compliance (India & Global)",
      content:
        "This Privacy Policy complies with the Information Technology Act, 2000 (India), IT Rules, 2011 (Reasonable Security Practices), GDPR (EU) where applicable, and global data protection best practices.",
    },
    {
      title: "Contact for Privacy Concerns",
      content:
        "For privacy, data protection, or compliance inquiries, email privacy@scivyt.com or legal@scivyt.com. Registered Office: [Insert Official Address]",
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
           Privacy Policy

          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
           At SCIVYT, your privacy, data security, and trust are fundamental to everything we build. This Privacy Policy explains how we collect, use, store, disclose, and protect your personal and institutional information when you access our website, platforms, tools, products, and services.
By using SCIVYT, you consent to the data practices described in this policy.

          </p>
          <div className="inline-block px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Last Updated: 24 November 2025
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

export default TermsPage;
