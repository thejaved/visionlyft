"use client";
import React from "react";
import { motion } from "framer-motion";

interface TopSectionProps {
  title: string;
  description: string;
  buttons?: React.ReactNode;
  size?: "default" | "large";
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const animatedWords = ["solutions", "insights", "scale", "something"];

const TopSection: React.FC<TopSectionProps> = ({
  title,
  description,
  buttons,
  size = "default",
}) => {
  const words = title.split(" ");

  return (
    <section
      className={`relative w-full ${
        size === "large" ? "min-h-screen" : "min-h-[60vh]"
      } px-4 sm:px-6 py-24 md:py-36 bg-gradient-to-br from-[#0e0e11] via-black to-[#0b0b0f] border-b border-white/10 overflow-hidden flex items-center justify-center`}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-10 pointer-events-none z-0" />

      {/* Glow Orbs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] bg-indigo-500/25 rounded-full blur-[100px] z-0"
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] bg-pink-600/20 rounded-full blur-[120px] z-0"
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.1, 0.95] }}
        transition={{ repeat: Infinity, duration: 16 }}
      />

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white/10 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/10 rounded-full animate-ping" />
      </div>

      {/* Main Text Content */}
      <motion.div
        className="relative z-20 text-center max-w-4xl space-y-6 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-widest text-indigo-400 font-semibold"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          simplified tech, amplified impact
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight flex flex-wrap justify-center gap-x-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {words.map((word, i) => {
            const isAnimated = animatedWords.includes(word.toLowerCase());
            return (
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
                    isAnimated
                      ? "relative inline-block bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-text-flicker"
                      : ""
                  }`}
                >
                  {word}
                </span>
              </motion.span>
            );
          })}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          {description}
        </motion.p>

        {buttons && (
          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-2"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {buttons}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Prompt */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 animate-pulse font-medium z-10"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ↓ Scroll to Explore
      </motion.div>
    </section>
  );
};

export default TopSection;
