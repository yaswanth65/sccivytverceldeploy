"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  scrolled: boolean;
}

export default function Navbar({
  toggleMenu,
  isMenuOpen,
  scrolled,
}: NavbarProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between items-center px-4 md:px-8 py-2 gap-4 md:gap-[330px]"
      style={{
        height: "67px",
        background: "rgba(230, 232, 221, 0.38)",
        backdropFilter: "blur(32px)",
        borderRadius: "13px",
        margin: "8px 16px 0 16px",
        boxSizing: "border-box",
      }}
    >
      {/* Logo Container */}
      <div className="flex flex-row items-center gap-2.5 flex-none">
        {/* Logo Image */}
        <div
          className="flex-none"
          style={{
            width: "24px",
            height: "24px",
            background: "#1A1A17",
          }}
        />
        {/* Logo Text */}
        <span
          className="font-inter font-normal text-2xl leading-150 tracking-tighter flex-none"
          style={{
            width: "56px",
            height: "36px",
            color: "#1A1A17",
            letterSpacing: "-0.02em",
          }}
        >
          BRAND
        </span>
      </div>

      {/* Desktop Menu */}
      <div
        className="hidden md:flex flex-row items-center gap-6 flex-none"
        style={{
          width: "454px",
          height: "51px",
        }}
      >
        {/* Menu 01 */}
        <Link
          href="/"
          className="flex flex-row justify-center items-center px-4 py-3 gap-2.5 flex-none hover:opacity-70 transition-opacity"
          style={{
            width: "95.5px",
            height: "51px",
            fontSize: "18px",
            color: "#1A1A17",
            fontFamily: "Inter",
            letterSpacing: "-0.02em",
          }}
        >
          Home
        </Link>

        {/* Menu 02 */}
        <Link
          href="/products"
          className="flex flex-row justify-center items-center px-4 py-3 gap-2.5 flex-none hover:opacity-70 transition-opacity"
          style={{
            width: "95.5px",
            height: "51px",
            fontSize: "18px",
            color: "#1A1A17",
            fontFamily: "Inter",
            letterSpacing: "-0.02em",
          }}
        >
          Products
        </Link>

        {/* Menu 03 */}
        <Link
          href="/about"
          className="flex flex-row justify-center items-center px-4 py-3 gap-2.5 flex-none hover:opacity-70 transition-opacity"
          style={{
            width: "95.5px",
            height: "51px",
            fontSize: "18px",
            color: "#1A1A17",
            fontFamily: "Inter",
            letterSpacing: "-0.02em",
          }}
        >
          About
        </Link>

        {/* Menu 04 */}
        <button
          className="flex flex-row justify-center items-center px-4 py-3 gap-2.5 flex-none hover:opacity-70 transition-opacity"
          style={{
            width: "95.5px",
            height: "51px",
            fontSize: "18px",
            color: "#1A1A17",
            fontFamily: "Inter",
            letterSpacing: "-0.02em",
          }}
        >
          Insights
        </button>
      </div>

      {/* CTA Button */}
      <Link
        href="/contact"
        className="hidden md:flex flex-row justify-end items-center px-4 py-2 flex-none hover:opacity-90 transition-opacity"
        style={{
          width: "125px",
          height: "43px",
          background: "#1A1A17",
          borderRadius: "56px",
          color: "#F4F3EA",
          fontFamily: "Inter",
          fontWeight: "400",
          fontSize: "18px",
          letterSpacing: "-0.02em",
        }}
      >
        Contact Us
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-900"
        style={{ color: "#1A1A17" }}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-[67px] right-0 p-6 md:hidden flex flex-col space-y-4 z-40 max-h-[calc(100vh-67px)] overflow-y-auto"
          style={{
            background: "#1A1A17",
            backdropFilter: "blur(32px)",
            borderTop: "1px solid rgba(26, 26, 23, 0.1)",
            color: "#F4F3EA",
            width: "70%",
            maxWidth: "250px",
            boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Link
            href="/"
            className="block py-3 text-left hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block py-3 text-left hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="block py-3 text-left hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block py-3 text-left hover:text-gray-300 transition-colors"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
