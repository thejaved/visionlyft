"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPause, FiPlay } from "react-icons/fi";

interface Slide {
  title: string;
  subtitle: string;
  gradient: string;
}

const slides: Slide[] = [
  {
    title: "Supercharge Your Links",
    subtitle: "Transform every click into a powerful micro-experience",
    gradient: "from-blue-900 via-indigo-900 to-black",
  },
  {
    title: "Effortless Page Builder",
    subtitle: "Design on-brand landing pages in minutes—no code needed",
    gradient: "from-purple-900 via-pink-700 to-black",
  },
  {
    title: "In-Depth Analytics",
    subtitle: "Track performance in real time and optimize instantly",
    gradient: "from-green-900 via-teal-700 to-black",
  },
  {
    title: "AI-Powered Insights",
    subtitle: "Leverage artificial intelligence to gain deeper understanding",
    gradient: "from-yellow-800 via-orange-700 to-black",
  },
  {
    title: "Seamless Integrations",
    subtitle: "Connect with your favorite tools effortlessly",
    gradient: "from-red-800 via-pink-700 to-black",
  },
];

const HeroSlider: FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Accents */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 rounded-full blur-[150px] -top-40 -left-40 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-[150px] -bottom-40 -right-40 animate-pulse" />

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-12 md:px-6 md:py-16 bg-gradient-to-tr ${slides[current].gradient}`}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white leading-tight drop-shadow-xl">
            {slides[current].title}
          </h1>
          <p className="text-md md:text-lg text-gray-300 mb-8 max-w-xl">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-semibold shadow-xl hover:scale-105 transition-transform">
              Get Started Free
            </button>
            <button className="px-6 py-2.5 border border-gray-300 text-white rounded-xl font-semibold shadow-md hover:border-white hover:scale-105 transition-transform">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Play/Pause Button */}
      <button
        aria-label="Toggle Auto Scroll"
        onClick={() => setIsPaused(!isPaused)}
        className="absolute bottom-6 right-6 p-3 bg-black/60 rounded-full text-white shadow-xl hover:bg-black/80 transition"
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
    </section>
  );
};

export default HeroSlider;
