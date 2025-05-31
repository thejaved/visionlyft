"use client";
import React from "react";
import Link from "next/link";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white px-6 py-20 border-t border-white/10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Overview */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold mb-4 text-white">
              Visionlyft
            </h2>
            <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
              Simplifying tech with smart, scalable solutions. We help startups,
              teams, and enterprises build better software—faster.
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition"
            >
              Start Your Project
            </Link>
          </div>

          {/* Link Columns */}
          {[
            {
              title: "Platform",
              items: ["Solutions", "Services", "Resources", "Pricing"],
            },
            {
              title: "Resources",
              items: ["Documentation", "Blog", "Support", "Privacy Policy"],
            },
            {
              title: "Company",
              items: ["About", "Careers", "Contact", "Terms of Service"],
            },
          ].map((col, idx) => (
            <div key={idx}>
              <h4 className="text-base font-semibold text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {col.items.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                      className="hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-6 text-xs text-gray-400 gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Visionlyft. Built with precision &
            passion.
          </p>
          <div className="flex space-x-5">
            {[
              {
                Icon: FiGithub,
                link: "https://github.com",
              },
              {
                Icon: FiTwitter,
                link: "https://twitter.com",
              },
              {
                Icon: FiLinkedin,
                link: "https://linkedin.com",
              },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
