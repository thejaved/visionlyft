"use client";
import React, { FC, useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FiPause, FiPlay } from "react-icons/fi";
import Button from "@/ui/Button";

interface Slide {
  title: string;
  subtitle: string;
  gradient: string;
}

const SLIDES: Slide[] = [
  {
    title: "Instant API Generation",
    subtitle: "Get production-ready endpoints in seconds—no code required.",
    gradient: "from-indigo-900 via-purple-800 to-indigo-950",
  },
  {
    title: "Full-Featured Dashboard",
    subtitle: "Manage API keys, track usage, and view insights in real time.",
    gradient: "from-blue-900 via-sky-800 to-blue-950",
  },
  {
    title: "Secure & Scalable",
    subtitle: "Backed by serverless architecture and MongoDB Atlas for scale.",
    gradient: "from-green-900 via-teal-800 to-green-950",
  },
  {
    title: "Auto-Generated Docs",
    subtitle: "Swagger/OpenAPI docs built-in for testing and development.",
    gradient: "from-yellow-900 via-amber-800 to-yellow-950",
  },
  {
    title: "Multi-Tenant & Isolated",
    subtitle:
      "Workspaces with access control, API key isolation, and visibility.",
    gradient: "from-red-900 via-pink-800 to-red-950",
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

const HeroSlider: FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orb1X = useTransform(mouseX, (x) => x / 30);
  const orb1Y = useTransform(mouseY, (y) => y / 30);
  const orb2X = useTransform(mouseX, (x) => -x / 30);
  const orb2Y = useTransform(mouseY, (y) => -y / 30);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const togglePause = useCallback(() => setIsPaused((p) => !p), []);

  const handleDotClick = (index: number) => setCurrent(index);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(handleNext, AUTO_SLIDE_INTERVAL);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, handleNext]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Orbs */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full animate-pulse"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 bg-teal-500/20 blur-3xl rounded-full animate-pulse"
      />

      {/* Floating Particles */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] w-10 h-10 bg-white/10 rounded-full blur-md"
      />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-[12%] right-[8%] w-6 h-6 bg-white/10 rounded-full blur-lg"
      />

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-br ${SLIDES[current].gradient} backdrop-blur-sm`}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 flex flex-wrap justify-center gap-2 drop-shadow-md"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {SLIDES[current].title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-medium leading-relaxed"
          >
            {SLIDES[current].subtitle}
          </motion.p>

          <div className="relative flex flex-col sm:flex-row gap-4">
            <Button variant="primary">Get Started Free</Button>
            <Button variant="secondary">Explore Docs</Button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-2.5 h-2.5 rounded-full border-2 transition-transform duration-300 ${
              idx === current
                ? "bg-white border-white scale-110"
                : "border-white/40 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <AnimatePresence>
        <motion.div
          key={`progress-${current}`}
          className="absolute bottom-0 left-0 h-[2px] bg-white"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: AUTO_SLIDE_INTERVAL / 1000,
            ease: "linear",
          }}
        />
      </AnimatePresence>

      {/* Pause/Play Button */}
      <button
        onClick={togglePause}
        className="absolute bottom-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur transition"
      >
        {isPaused ? <FiPlay size={18} /> : <FiPause size={18} />}
      </button>
    </section>
  );
};

export default HeroSlider;
