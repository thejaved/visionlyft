"use client";
import React from "react";
import Link from "next/link";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 py-20 border-t border-white/10 overflow-hidden">
      {/* Blurred Background Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-700 opacity-20 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-700 opacity-20 blur-3xl rounded-full" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">
              Visionlyft
            </h2>
            <p className="text-sm md:text-base text-gray-400 mb-6">
              Design, deploy, and manage scalable APIs instantly—without writing
              backend code. Built for founders, developers, and product teams.
            </p>
            <Link
              href="/signup"
              className="inline-block px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-semibold rounded-xl shadow hover:scale-105 transition-transform"
            >
              Get Started Free
            </Link>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: "Models", href: "/models" },
                { label: "Endpoints", href: "/endpoints" },
                { label: "Insights", href: "/insights" },
                { label: "Overview", href: "/overview" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: "Documentation", href: "/docs" },
                { label: "Help Center", href: "/support" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-6 text-xs text-gray-400 gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Visionlyft. All rights reserved.
          </p>
          <div className="flex space-x-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
