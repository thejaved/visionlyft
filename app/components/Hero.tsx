"use client";
import React, { FC, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPause, FiPlay } from "react-icons/fi";

interface Slide {
  title: string;
  subtitle: string;
  gradient: string;
}

const SLIDES: Slide[] = [
  {
    title: "Build a Digital Identity That Stands Out",
    subtitle:
      "Craft personalized branded links, micro-sites, and landing pages that command attention and drive engagement at scale.",
    gradient: "from-sky-900 via-blue-800 to-blue-950",
  },
  {
    title: "Design Without Limits, Code-Free",
    subtitle:
      "Our intuitive drag-and-drop builder lets you create stunning pages, launch faster, and focus purely on growing your brand.",
    gradient: "from-purple-900 via-violet-800 to-indigo-950",
  },
  {
    title: "Turn Data Into Growth",
    subtitle:
      "Access powerful real-time analytics and conversion insights to track visitors, optimize campaigns, and scale smarter.",
    gradient: "from-teal-900 via-emerald-800 to-green-950",
  },
  {
    title: "AI-Powered Personalization",
    subtitle:
      "Leverage our intelligent assistant to auto-optimize your content, suggest layouts, and help maximize conversions instantly.",
    gradient: "from-orange-900 via-amber-800 to-yellow-900",
  },
  {
    title: "Connect With 200+ Tools Seamlessly",
    subtitle:
      "Easily integrate your favorite apps and workflows—from Stripe, Zapier, Google, and Slack to CRMs and marketing platforms.",
    gradient: "from-pink-900 via-rose-800 to-red-950",
  },
  {
    title: "Automate and Simplify Your Workflow",
    subtitle:
      "From scheduling launches to automatic audience segmenting, Visionlyft helps you save hours and grow effortlessly.",
    gradient: "from-gray-900 via-zinc-800 to-neutral-950",
  },
  {
    title: "Launch in Minutes, Scale for Life",
    subtitle:
      "Go from idea to live project in minutes. Whether it’s a product launch, portfolio, or lead gen page—Visionlyft grows with you.",
    gradient: "from-indigo-900 via-blue-800 to-indigo-950",
  },
  {
    title: "Built for Creators, Agencies & Brands",
    subtitle:
      "Whether you’re a freelancer, startup, or global team—Visionlyft gives you the tools to stand out and scale your presence.",
    gradient: "from-lime-900 via-green-800 to-emerald-950",
  },
];

const HeroSlider: FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const togglePause = useCallback(() => setIsPaused((prev) => !prev), []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
      }, 4000);
    }
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [isPaused]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Background Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-tr ${SLIDES[current].gradient}`}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
            {SLIDES[current].title}
          </h1>
          <p className="text-md md:text-lg text-gray-300 mb-10 max-w-xl font-medium">
            {SLIDES[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-semibold shadow-xl hover:scale-105 hover:ring-2 hover:ring-blue-500/40 transition"
            >
              Get Started Free
            </button>
            <button
              type="button"
              className="px-8 py-3 border border-gray-400 text-white rounded-xl font-semibold shadow-md hover:border-white hover:scale-105 hover:ring-2 hover:ring-blue-500/20 transition"
            >
              Watch Demo
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Play/Pause Toggle */}
      <button
        type="button"
        aria-label={isPaused ? "Play Auto Scroll" : "Pause Auto Scroll"}
        onClick={togglePause}
        className="absolute bottom-6 right-6 p-3 bg-black/60 rounded-full text-white shadow-xl ring-1 ring-white/10 hover:ring-2 hover:ring-blue-500/30 hover:bg-black/80 transition"
      >
        <motion.div
          key={isPaused ? "play" : "pause"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isPaused ? <FiPlay size={22} /> : <FiPause size={22} />}
        </motion.div>
      </button>
    </motion.section>
  );
};

export default HeroSlider;
