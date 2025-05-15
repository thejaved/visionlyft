"use client";
import React from "react";
import Link from "next/link";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white border-t border-white/10 backdrop-blur-md overflow-hidden"
    >
      {/* Particles + Blurred Orbs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-700 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-700 opacity-20 blur-3xl rounded-full"></div>

      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-md opacity-30"></div>

      <div className="max-w-[1200px] mx-auto px-6 py-16 relative z-10">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand + CTA */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Visionlyft
            </h2>
            <p className="text-gray-400 max-w-xs mb-6 text-sm">
              Elevate your brand with smart links, micro-sites, and data-driven
              insights. Build. Track. Grow.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              Get Started Free
            </Link>
          </div>

          {/* Product + Company */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-10 border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-10">
            <div>
              <h4 className="text-gray-300 font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Templates", "Analytics", "Integrations", "Pricing"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="animated-link"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-300 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["About", "Support", "Careers", "Blog"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="animated-link"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources + Community */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-10 border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-10">
            <div>
              <h4 className="text-gray-300 font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Documentation", "Privacy", "Terms"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="animated-link"
                    >
                      {item === "Privacy"
                        ? "Privacy Policy"
                        : item === "Terms"
                        ? "Terms of Service"
                        : item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-300 font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-link"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-link"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-link"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between border-t border-white/10 pt-6 text-xs text-gray-400">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            © {new Date().getFullYear()} Visionlyft. All rights reserved.
          </p>
          <div className="flex space-x-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FiTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Animated link underline style */}
      <style jsx>{`
        .animated-link {
          position: relative;
          display: inline-block;
        }
        .animated-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          left: 0;
          bottom: -2px;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }
        .animated-link:hover::after {
          width: 100%;
        }
      `}</style>
    </motion.footer>
  );
}
