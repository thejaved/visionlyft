"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  description: string;
  buttons?: React.ReactNode;
  size?: "default" | "large";
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttons,
  size = "default",
}) => {
  const words = title.split(" ");

  return (
    <section
      className={`relative w-full ${
        size === "large" ? "min-h-[85vh]" : "min-h-[60vh]"
      } px-4 sm:px-6 py-24 md:py-36 bg-gradient-to-br from-[#0e0e11] via-black to-[#0b0b0f] border-b border-white/10 overflow-hidden flex items-center justify-center`}
    >
      {/* Glows */}
      <motion.div
        className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-indigo-500/25 rounded-full blur-[100px] z-0"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[120px] z-0"
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 0.95] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      {/* Floating Code Block */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden lg:block z-10 bg-white/5 text-white text-xs font-mono rounded-xl px-6 py-4 border border-white/10 shadow-xl backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.85, y: [20, 10, 20] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <code>{`{ "model": "User", "fields": ["name", "email", "role"] }`}</code>
      </motion.div>

      {/* Particle Glow */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white/10 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/10 rounded-full animate-ping" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 text-center max-w-4xl space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.p
          className="text-xs uppercase tracking-widest text-indigo-400 font-semibold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          zero backend, full control
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight flex flex-wrap justify-center gap-x-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06 },
            },
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              <span
                className={`${
                  word.toLowerCase() === "effortlessly"
                    ? "bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                    : ""
                }`}
              >
                {word}
              </span>
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          {description}
        </motion.p>

        {buttons && (
          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {buttons}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Prompt */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 text-center z-10"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ↓ Scroll to Explore
      </motion.div>
    </section>
  );
};

export default HeroSection;
