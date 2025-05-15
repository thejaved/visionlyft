"use client";
import React, { FC, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion"; // keep AnimatePresence & motion if needed for menu animation

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Templates", href: "/templates" },
  { label: "Analytics", href: "/analytics" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Support", href: "/support" },
];

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed w-full top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/60 backdrop-blur-md shadow-xl py-2"
            : "bg-transparent py-4"
        }
      `}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Visionlyft Logo"
              width={36}
              height={36}
              priority
            />
            {/* Static text without animation */}
            <span className="text-lg font-extrabold text-white tracking-tight">
              Visionlyft
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center space-x-8">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={
                "relative group text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 px-2 py-1 rounded-sm hover:bg-white/20"
              }
            >
              {label}
              {/* underline scales from left */}
              <span
                className={
                  "absolute bottom-0 left-0 w-full h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                }
              />
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center justify-end gap-2 md:gap-3">
          <button
            type="button"
            aria-label="Search"
            className="hidden md:flex p-2 rounded-full hover:bg-white/10 transition"
          >
            <FiSearch className="w-5 h-5 text-gray-300 hover:text-white" />
          </button>
          <button
            type="button"
            aria-label="Profile"
            className="hidden md:flex p-2 rounded-full hover:bg-white/10 transition"
          >
            <FiUser className="w-5 h-5 text-gray-300 hover:text-white" />
          </button>
          <Link
            href="/signup"
            className={
              "hidden md:inline-flex items-center px-5 py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-semibold tracking-wide shadow-lg hover:from-blue-700 hover:to-blue-900 hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all duration-200"
            }
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
          >
            {menuOpen ? (
              <FiX className="w-6 h-6 text-white" />
            ) : (
              <FiMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col px-6 py-5 space-y-4">
              {NAV_ITEMS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    "text-gray-200 hover:text-white text-base font-medium transition-colors duration-200"
                  }
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="text-white text-base font-medium hover:underline"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className={
                  "inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold shadow-md hover:from-blue-700 hover:to-blue-900 hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all duration-200"
                }
              >
                Get Started
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
