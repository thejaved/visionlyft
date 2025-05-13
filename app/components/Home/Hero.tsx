"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex-grow flex items-center justify-center px-6 relative overflow-hidden">
      {/* Floating blurred circles */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 rounded-full blur-[200px] top-[-200px] left-[-200px] animate-floating"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-[200px] bottom-[-200px] right-[-200px] animate-floating2"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-white">
          Power Up Your Links <br /> & Build Micro Experiences
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Visionlyft empowers creators, marketers, and brands to craft branded
          short links, design stunning link pages, and track real-time
          performance — all in one seamless platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-xl font-semibold shadow-lg transition duration-300"
          >
            Get Started Free
          </a>
          <a
            href="#"
            className="px-8 py-3 border border-gray-600 hover:border-white text-white rounded-xl font-semibold shadow-md transition duration-300"
          >
            Watch Demo
          </a>
        </div>
      </motion.div>
    </section>
  );
}
