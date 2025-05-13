"use client";
import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Templates", href: "/templates" },
  { label: "Analytics", href: "/analytics" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Support", href: "/support" },
];

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Visionlyft Logo"
              width={36}
              height={36}
              priority
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-lg font-bold text-white tracking-tight"
            >
              Visionlyft
            </motion.span>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center space-x-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="group text-gray-300 hover:text-white text-sm font-medium transition"
            >
              {label}
              <motion.span
                layoutId="underline"
                className="block h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300 mt-1"
              />
            </Link>
          ))}
        </nav>

        {/* Right: Actions + Mobile Menu Button */}
        <div className="flex items-center justify-end gap-3">
          <button
            aria-label="Search"
            className="hidden md:flex p-2 rounded-full hover:bg-white/10 transition"
          >
            <FiSearch className="w-5 h-5 text-gray-300 hover:text-white" />
          </button>
          <button
            aria-label="Profile"
            className="hidden md:flex p-2 rounded-full hover:bg-white/10 transition"
          >
            <FiUser className="w-5 h-5 text-gray-300 hover:text-white" />
          </button>
          <Link
            href="/signup"
            className="hidden md:inline-flex items-center px-4 py-2.5 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-semibold shadow-md hover:opacity-90 transition"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
            type="button"
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col px-5 py-4 space-y-4">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-base font-medium hover:text-gray-300 transition"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-block text-white text-base font-medium hover:underline"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold shadow-md hover:opacity-90 transition"
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
