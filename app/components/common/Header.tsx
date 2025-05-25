"use client";
import React, { FC, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 backdrop-blur-md border-white/10 ${
        scrolled ? "bg-primary/80 border-b" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-90 transition"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/logo.svg"
              alt="Visionlyft"
              width={32}
              height={32}
              priority
            />
          </motion.div>
          <span className="text-xl font-bold text-white tracking-wide">
            Visionlyft
          </span>
        </Link>

        {/* Centered Nav */}
        <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <motion.ul
            className="flex space-x-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {NAV_ITEMS.map(({ label, href }) => {
              const active =
                pathname === href || pathname.startsWith(href + "/");
              return (
                <motion.li
                  key={href}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link href={href} className="relative">
                    <span
                      className={`px-3 py-1 text-sm font-medium transition-opacity ${
                        active ? "text-white" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {label}
                    </span>
                    {active && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              aria-label="Search"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FiSearch className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              aria-label="Profile"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FiUser className="w-5 h-5 text-white" />
            </motion.button>
            <Link href="/demo">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button className="text-xs uppercase bg-accent text-white py-2 px-4 shadow hover:shadow-lg transition">
                  Get Started
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition lg:hidden"
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
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-primary/95 backdrop-blur-md flex flex-col pt-20 px-6"
          >
            {NAV_ITEMS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-white text-lg font-medium hover:text-accent transition"
              >
                {label}
              </Link>
            ))}
            <div className="mt-auto mb-6">
              <Link href="/login">
                <button className="w-full py-2 text-white text-center border border-white rounded hover:bg-white/10 transition">
                  Login
                </button>
              </Link>
              <Link href="/demo">
                <button className="mt-3 w-full py-2 bg-accent text-white rounded shadow hover:shadow-lg transition">
                  Get Started
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
