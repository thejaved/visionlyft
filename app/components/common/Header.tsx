"use client";
import React, { FC, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/ui/Button";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Overview", href: "/overview" },
  { label: "Models", href: "/models" },
  { label: "Endpoints", href: "/endpoints" },
  { label: "Blogs", href: "/blogs" },
  { label: "Support", href: "/support" },
];

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-sm py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Visionlyft logo"
            width={32}
            height={32}
            priority
          />
          <span className="text-xl font-bold text-white">Visionlyft</span>
        </Link>

        {/* Centered Nav */}
        <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = pathname?.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-1 mx-2 text-sm font-medium transition-colors duration-200 ${
                  active ? "text-white" : "text-gray-300 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {label}
                <motion.span
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 origin-left"
                  initial={{ scaleX: active ? 1 : 0 }}
                  animate={{ scaleX: active ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <button
              aria-label="Search"
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              <FiSearch className="w-5 h-5 text-gray-300 hover:text-white" />
            </button>
            <button
              aria-label="Profile"
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              <FiUser className="w-5 h-5 text-gray-300 hover:text-white" />
            </button>
            <Link href="/signup">
              <Button className="text-xs">Create Workspace</Button>
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="p-2 rounded-md hover:bg-white/10 transition lg:hidden"
          >
            {menuOpen ? (
              <FiX className="w-6 h-6 text-white" />
            ) : (
              <FiMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm flex flex-col pt-6 px-6"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Visionlyft logo"
                  width={28}
                  height={28}
                  priority
                />
                <span className="text-lg font-bold text-white">Visionlyft</span>
              </Link>
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-white/10 transition"
              >
                <FiX className="w-6 h-6 text-white" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col items-center space-y-4">
              {NAV_ITEMS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-lg font-medium hover:text-blue-400 transition"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto mb-6 flex flex-col space-y-3">
              <Link href="/login">
                <button className="w-full text-left text-white text-base font-medium hover:underline">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="w-full px-4 py-2 text-center rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                  Create Workspace
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
