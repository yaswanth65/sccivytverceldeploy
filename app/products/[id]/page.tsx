"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ProductDetailsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const params = useParams();
  const slug = params?.id || "";

  const products = [
    {
      title: "YETZU",
      slug: "yetzu",
      tagline: "Academic & Research Mentorship Platform",
      oneLiner:
        "Where structured learning, expert mentorship, and real-world research come together in one intelligent ecosystem.",
      description:
        "A comprehensive academic and research mentorship platform that blends curriculum-based learning, live expert mentorship, and publication-ready research training into one interactive ecosystem for students and professionals.",
      client: "SCIVYT",
      tags: [
        { title: "Learning Model", value: "Curriculum-Aligned" },
        { title: "Mentorship", value: "Expert-Led" },
        { title: "Research", value: "Publication-Ready" },
        { title: "Experience", value: "Interactive Learning" },
      ],
      heroTagline: "Built to Shape Thinkers, Not Just Learners",
      platformOverview:
        "YETZU is SCIVYT's flagship academic platform designed to transform how students, educators, and researchers engage with education. By combining structured curriculum learning with live mentorship, research training, and digital tools, YETZU creates an outcome-driven academic journey from classroom to publication.",
      features: [
        "Curriculum-aligned digital learning paths for school, university, and competitive exam preparation",
        "Live mentor-led cohorts and 1:1 academic guidance",
        "Research methodology and manuscript development training",
        "Multimedia-based learning with videos, case studies, and evaluations",
        "Performance tracking with progress analytics and outcome measurement",
      ],
      projectOverview:
        "YETZU was created to solve a fundamental gap in education: the disconnect between theoretical learning and real-world academic application. Traditional systems often fail to prepare students for research, publication, and professional excellence. YETZU unifies learning, mentorship, and research into a single, structured academic environment designed for long-term success.",
      solution:
        "YETZU delivers an integrated academic framework where students don't just consume information — they apply it, validate it, and publish it. Through expert mentorship, curriculum-based learning, and research-driven training, YETZU prepares learners to operate at global academic standards with confidence and clarity.",
      process:
        "Every learner on YETZU follows a structured journey: Learn through guided curriculum → Apply with mentor supervision → Validate with assessments → Publish through research training → Advance with career-aligned outcomes. This process ensures that education is not just completed but converted into measurable academic and professional growth.",
      supportingSections: [
        {
          title: "Who YETZU Is Built For",
          description:
            "Students, educators, early researchers, and institutions seeking structured learning, ethical research training, and publication readiness.",
        },
        {
          title: "Academic Integrity at the Core",
          description:
            "All content, mentorship, and assessments follow strict ethical and academic quality standards.",
        },
        {
          title: "From Classroom to Global Publication",
          description:
            "YETZU bridges the complete academic lifecycle — from fundamentals to high-impact research output.",
        },
        {
          title: "Technology That Serves Education",
          description:
            "AI-driven analytics, secure dashboards, and seamless digital delivery power every learning experience.",
        },
        {
          title: "Outcome-Driven Education",
          description:
            "Every module, mentorship session, and assessment is aligned with real academic and career outcomes.",
        },
      ],
    },
    {
      title: "Submit Right",
      slug: "submit-right",
      tagline: "Academic Submission & Publication Support Platform",
      oneLiner:
        "From manuscript to successful submission — every step guided, verified, and publication-ready.",
      description:
        "A professional academic services platform that supports researchers with manuscript preparation, formatting, journal selection, compliance checks, and end-to-end submission guidance for higher acceptance success.",
      client: "SCIVYT",
      tags: [
        { title: "Submission", value: "Journal-Ready" },
        { title: "Compliance", value: "Guideline Perfect" },
        { title: "Support", value: "Expert-Led" },
        { title: "Workflow", value: "End-to-End" },
      ],
      heroTagline: "Because Great Research Deserves a Perfect Submission",
      platformOverview:
        "Submit Right is SCIVYT's dedicated academic submission platform designed to eliminate rejection caused by technical, formatting, and compliance errors. It streamlines the entire publication process by combining expert human review with structured digital workflows that ensure every manuscript meets journal and publisher standards.",
      features: [
        "Journal targeting and scope-matching assistance",
        "Manuscript formatting and compliance checks",
        "End-to-end submission handling and tracking",
        "Reviewer revision support and resubmission guidance",
        "Institutional and bulk submission management",
      ],
      projectOverview:
        "Submit Right was built to solve one of the most common causes of manuscript rejection — avoidable submission mistakes. Despite strong research, many papers fail due to incorrect formatting, scope mismatch, missing compliance elements, or poor submission handling. Submit Right standardizes and professionalizes the entire submission pipeline.",
      solution:
        "Submit Right delivers a structured, error-proof publication workflow where every manuscript is verified against journal standards before submission. With expert oversight, digital validation, and compliance-first design, researchers and institutions gain higher acceptance confidence and reduced publication delays.",
      process:
        "Every submission through Submit Right follows a rigorous process: Journal identification → Scope & compliance screening → Technical formatting → Submission handling → Reviewer feedback coordination → Resubmission support. This ensures accuracy, accountability, and a significantly higher publication success rate.",
      supportingSections: [
        {
          title: "Designed for High-Stakes Publishing",
          description:
            "Ideal for medical, scientific, and institutional research submissions.",
        },
        {
          title: "Human Expertise + Digital Precision",
          description:
            "Every submission is validated by publication experts, not just software.",
        },
        {
          title: "Reduced Rejection. Faster Turnaround.",
          description:
            "Eliminates common technical errors before they reach the journal.",
        },
        {
          title: "Institution-Grade Compliance",
          description:
            "Built for universities, research labs, and hospitals with strict publishing standards.",
        },
        {
          title: "Transparent Submission Tracking",
          description:
            "Researchers can monitor submission status at every stage.",
        },
      ],
    },
    {
      title: "VITUOR",
      slug: "vituor",
      tagline: "Peer-Reviewed International Medical Journal",
      oneLiner:
        "A global stage for credible, high-impact medical and healthcare research.",
      description:
        "A peer-reviewed international medical journal providing a trusted stage for high-impact healthcare research with rigorous review, expert editorial support, and global open-access visibility.",
      client: "SCIVYT",
      tags: [
        { title: "Publishing", value: "Peer-Reviewed" },
        { title: "Access", value: "Open Science" },
        { title: "Quality", value: "Editorial Rigor" },
        { title: "Reach", value: "Global Visibility" },
      ],
      heroTagline: "Where Medical Research Meets Global Credibility",
      platformOverview:
        "VITUOR is SCIVYT's peer-reviewed international medical journal dedicated to advancing healthcare science through rigorous editorial standards, ethical publishing, and open access dissemination. It provides researchers with a trusted platform to publish, showcase, and amplify clinically relevant and innovation-driven medical research.",
      features: [
        "Double-blind, expert-led peer review process",
        "End-to-end author submission and editorial support",
        "Open-access publishing for maximum global reach",
        "Research integrity, ethics, and plagiarism validation",
        "Author training through webinars and publication workshops",
      ],
      projectOverview:
        "VITUOR was created to address the growing need for transparent, ethical, and globally accessible medical publishing. Many high-quality clinical and biomedical studies fail to reach international audiences due to limited access or weak editorial processes. VITUOR bridges this gap by providing a credible, technology-enabled medical publishing ecosystem.",
      solution:
        "VITUOR delivers a structured, author-friendly, and ethics-driven publishing framework. By combining experienced medical editors, rigorous peer review, and digital-first open access distribution, the journal ensures that every accepted manuscript meets international scientific and publication standards while reaching the widest possible audience.",
      process:
        "Every manuscript on VITUOR follows a strict validation workflow: Submission → Editorial screening → Double-blind peer review → Author revision → Final acceptance → Open-access publication → Global indexing & dissemination. This ensures scientific credibility, transparency, and long-term research impact.",
      supportingSections: [
        {
          title: "Built for Clinicians & Researchers",
          description:
            "Designed for doctors, medical faculty, researchers, and healthcare institutions worldwide.",
        },
        {
          title: "Ethics at the Core of Publishing",
          description:
            "Every article follows international medical ethics and research integrity guidelines.",
        },
        {
          title: "From Local Research to Global Impact",
          description:
            "VITUOR transforms regional clinical findings into globally accessible medical knowledge.",
        },
        {
          title: "Author-First Publication Support",
          description:
            "Guided submission, reviewer coordination, and post-acceptance support at every stage.",
        },
        {
          title: "Advancing Evidence-Based Medicine",
          description:
            "Committed to strengthening healthcare through validated scientific evidence.",
        },
      ],
    },
    {
      title: "BEENTU AI",
      slug: "beentu-ai",
      tagline: "AI-Powered Academic Writing Intelligence",
      oneLiner:
        "Write, refine, analyze, and validate research faster — with publication-grade intelligence built in.",
      description:
        "An AI-powered academic writing and research intelligence assistant that enhances clarity, structure, citations, and journal readiness — making scientific writing faster, smarter, and publication-focused.",
      client: "SCIVYT",
      tags: [
        { title: "Writing Engine", value: "AI-Driven" },
        { title: "Accuracy", value: "Publication-Ready" },
        { title: "Analysis", value: "Real-Time Feedback" },
        { title: "Workflow", value: "End-to-End" },
      ],
      heroTagline: "Where Artificial Intelligence Meets Academic Rigor",
      platformOverview:
        "BEENTU AI is SCIVYT's intelligent academic writing assistant designed to elevate research communication to global publication standards. It supports researchers, students, and institutions through every stage of writing — from idea refinement to final journal-ready manuscripts — using advanced AI combined with academic validation logic.",
      features: [
        "Intelligent grammar, tone, and structural optimization",
        "Automated citation formatting and reference validation",
        "Readability, coherence, and journal-compatibility analysis",
        "PDF research summarization and knowledge extraction",
        "AI-powered academic Q&A for rapid understanding",
      ],
      projectOverview:
        "BEENTU AI was built to solve the growing complexity of modern academic writing. Researchers today face strict publication standards, time pressure, language barriers, and formatting challenges. BEENTU AI transforms this process into an intelligent, guided workflow that reduces friction while improving quality and acceptance readiness.",
      solution:
        "BEENTU AI delivers an integrated writing and evaluation system that acts as both an editor and an academic reviewer. It ensures that every manuscript is not only linguistically refined but also structurally sound, ethically compliant, and aligned with journal expectations — before it reaches human review or submission.",
      process:
        "Every document on BEENTU AI passes through a smart validation pipeline: Draft upload → Language & structure optimization → Citation & formatting validation → Readability & logic analysis → Journal compatibility scoring → Final refinement. This process guarantees speed, accuracy, and confidence at every stage of academic writing.",
      supportingSections: [
        {
          title: "Built for Researchers, Trusted by Institutions",
          description:
            "Adopted for individual authors, universities, medical colleges, and research labs.",
        },
        {
          title: "More Than a Writing Tool",
          description:
            "Functions as an AI reviewer, editor, validator, and research assistant in one platform.",
        },
        {
          title: "From Draft to Submission-Ready",
          description:
            "Transforms early drafts into globally acceptable academic manuscripts.",
        },
        {
          title: "Language Is No Longer a Barrier",
          description:
            "Supports multilingual academic translation with subject-specific accuracy.",
        },
        {
          title: "Intelligence with Academic Ethics",
          description:
            "Designed with citation integrity, plagiarism sensitivity, and compliance at its core.",
        },
      ],
    },
    {
      title: "NationCite",
      slug: "nationcite",
      tagline: "India's Research Impact Portal",
      oneLiner:
        "The national standard for measuring, verifying, and amplifying India's academic and research excellence.",
      description:
        "India's national research impact portal delivering verified rankings, authenticated researcher profiles, and institutional analytics using real-time bibliometric intelligence and transparent data systems.",
      client: "SCIVYT",
      tags: [
        { title: "Visibility", value: "Global Exposure" },
        { title: "Analytics", value: "Real-Time Metrics" },
        { title: "Verification", value: "Authenticated Profiles" },
        { title: "Governance", value: "Anti-Gaming System" },
      ],
      heroTagline: "Where India's Research Speaks with Data",
      platformOverview:
        "NationCite is SCIVYT's national research intelligence platform built to showcase India's academic output with transparency, accuracy, and global credibility. It consolidates researcher profiles, institutional performance, and disciplinary rankings into one unified, data-driven ecosystem — powered by verified bibliometric sources.",
      features: [
        "National research rankings by institution, state, and academic discipline",
        "ORCID-based authenticated researcher profiles with ownership control",
        "Institutional analytics dashboards with citation and performance tracking",
        "Profile optimization and visibility enhancement tools for researchers",
        "Built-in moderation, audit trails, and anti-gaming mechanisms for data integrity",
      ],
      projectOverview:
        "NationCite was developed to solve the growing challenge of fragmented, unverified, and inaccessible research impact data in India. With global research visibility becoming critical for funding, collaboration, and reputation, NationCite establishes a single trusted digital infrastructure for Indian academic recognition on the world stage.",
      solution:
        "NationCite delivers a transparent, verifiable, and analytics-driven national research framework. By integrating global bibliometric databases with strict validation systems and open-access insights, it enables researchers, institutions, and policymakers to measure real impact — with confidence and credibility.",
      process:
        "NationCite follows a strict accuracy-first workflow: Data ingestion from verified sources → Researcher authentication → Institutional mapping → Automated analytics → Human moderation → Public visibility. This ensures every metric published is evidence-based, traceable, and resistant to manipulation.",
      supportingSections: [
        {
          title: "Built for Researchers, Trusted by Institutions",
          description:
            "Designed for individual authors, universities, funding bodies, and policy institutions.",
        },
        {
          title: "Verified by Design",
          description:
            "ORCID authentication, audit trails, and manual validation ensure unmatched data credibility.",
        },
        {
          title: "Transparency at a National Scale",
          description:
            "Open metrics empower accountability and performance benchmarking across India.",
        },
        {
          title: "From Data to Policy Decisions",
          description:
            "NationCite enables governments and institutions to make informed, evidence-backed academic decisions.",
        },
        {
          title: "Global Recognition for Indian Research",
          description:
            "Transforming India's academic output into globally visible, measurable impact.",
        },
      ],
    },
  ];

  const product = products.find((p) => p.slug === slug) || products[0];

  // Get other products for related section (4 products)
  const otherProducts = products.filter((p) => p.slug !== slug).slice(0, 4);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        scrolled={scrolled}
      />

      <main>
        {/* Product Detail Header */}
        <section className="pt-32 pb-16 md:pt-48 bg-white text-center w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-4 text-slate-900">
              {product.title}
            </h1>
            <p className=" text-lg mb-6">{product.tagline}</p>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
              {product.oneLiner}
            </p>
          </div>
        </section>

        {/* Main Hero Image */}
        <section className="pb-16 px-4 md:px-0">
          <div className="w-full h-[50vh] md:h-[80vh] overflow-hidden">
            <div className="w-full h-full bg-gray-600"></div>
          </div>
        </section>

        {/* Info Strip - Product Tags (Left aligned with equal columns, 72px padding on desktop) */}
        <section className="py-12 border-b border-gray-100 w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 w-full items-start md:flex md:flex-row md:justify-between md:gap-x-20">
              {product.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start w-full md:w-auto h-full"
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    {tag.title}
                  </div>
                  <div className="font-serif text-lg">{tag.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Overview Section */}
        <section className="py-24 bg-white w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif mb-6">
                {product.heroTagline}
              </h2>
              <p className="text-gray-500">{product.platformOverview}</p>
            </div>
            <div className="w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden mb-24">
              <div className="w-full h-full bg-gray-200"></div>
            </div>

            {/* Row 1: Two-column layout — Left: Key Features | Right: Project Overview */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Left column: Key Features */}
              <div>
                <h3 className="text-2xl font-serif mb-4">Key Features</h3>
                <ul className="text-gray-500 leading-relaxed space-y-2 list-disc pl-6">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Right column: Project Overview */}
              <div className="text-left">
                <h3 className="text-2xl font-serif mb-4">Project Overview</h3>
                <p className="text-gray-500 leading-relaxed">
                  {product.projectOverview}
                </p>
              </div>
            </div>

            {/* Row 2: Our Solution & Row 3: Defining the Process — both left-aligned and occupying left column */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8 text-left">
                <div>
                  <h3 className="text-2xl font-serif mb-4 text-left">
                    Our Solution
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-left">
                    {product.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-serif mb-4 text-left">
                    Defining the Process
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-left">
                    {product.process}
                  </p>
                </div>
              </div>

              {/* Right column intentionally left blank on desktop to align left column content to the left side of the screen */}
              <div></div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="bg-gray-100 h-[400px] rounded overflow-hidden">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
              <div className="bg-gray-100 h-[400px] rounded overflow-hidden">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
              <div className="bg-gray-100 h-[400px] rounded overflow-hidden">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
              <div className="bg-gray-100 h-[400px] rounded overflow-hidden">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
            </div>

            {/* Supporting Sections - left-aligned, two-column layout on desktop */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
              {product.supportingSections.map((section, index) => (
                <div key={index} className="text-left">
                  <h3 className="text-2xl font-serif mb-4">{section.title}</h3>
                  <p className="text-gray-500 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products - 4 Big Cards, 2 per row */}
        <section className="py-24 bg-[#fffcf7] w-full">
          <div className="px-4 sm:px-6 md:px-[72px] w-full">
            <h3 className="text-3xl font-serif mb-12">Our Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.slug}
                  href={`/products/${relatedProduct.slug}`}
                  className="group cursor-pointer"
                >
                  <div className="h-80 bg-white mb-4 overflow-hidden rounded">
                    <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
                  </div>
                  <h4 className="font-serif text-xl mb-1">
                    {relatedProduct.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {relatedProduct.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
