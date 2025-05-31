"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-24 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5"
        >
          Scale with Confidence.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-10"
        >
          Whether you&apos;re launching your first product or growing your
          platform, Visionlyft gives you the tools to build fast, stay secure,
          and scale without limits.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="#get-started"
            className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
          >
            Start Your Project
          </Link>
          <Link
            href="#book-demo"
            className="px-6 py-3 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition"
          >
            Book a Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
