"use client";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Visionlyft Logo" width={32} height={32} />
          <span className="text-xl font-semibold text-white">Visionlyft</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white">
            Solutions
          </a>
          <a href="#" className="hover:text-white">
            Pricing
          </a>
          <a href="#" className="hover:text-white">
            Resources
          </a>
          <a href="#" className="hover:text-white">
            Features
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="ml-4 inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold shadow hover:opacity-90"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
