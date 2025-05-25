"use client";

import React, { FC, useState, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FiPause, FiPlay } from "react-icons/fi";
import Button from "../common/Button";
import useInterval from "@/app/hooks/useInterval";

interface Slide {
  title: string;
  subtitle: string;
}

const SLIDES: Slide[] = [
  {
    title: "Custom Software Development",
    subtitle:
      "Tailored web & mobile applications built with modern frameworks for seamless, scalable experiences.",
  },
  {
    title: "Cloud Solutions & Integration",
    subtitle: "Secure AWS & Azure platforms with effortless API connectivity.",
  },
  {
    title: "UX/UI Design Excellence",
    subtitle: "User-centered designs that drive engagement and clarity.",
  },
  {
    title: "Enterprise Security & Compliance",
    subtitle: "Built-in OAuth2 & encryption for industry-standard protection.",
  },
  {
    title: "Ongoing Support & Maintenance",
    subtitle: "24/7 monitoring and rapid response to keep systems online.",
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

const container = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};
const text = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
  }),
};
const buttons = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 200 },
  },
};

const HeroSlider: FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const shapeX = useTransform(mx, (x) => x / 50);
  const shapeY = useTransform(my, (y) => y / 50);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const toggle = useCallback(() => setPaused((p) => !p), []);
  useInterval(next, paused ? null : AUTO_SLIDE_INTERVAL);

  const { title, subtitle } = SLIDES[index];
  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      mx.set(e.clientX - window.innerWidth / 2);
      my.set(e.clientY - window.innerHeight / 2);
    },
    [mx, my]
  );

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-br from-indigo-900 to-black"
    >
      {/* Glow Effects */}
      <motion.div
        style={{ x: shapeX, y: shapeY }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ x: shapeX, y: shapeY }}
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={container}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center space-y-6"
        >
          <motion.h2
            variants={text}
            custom={0}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={text}
            custom={1}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-32"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <motion.div
            variants={buttons}
            initial="hidden"
            animate="visible"
            className="flex gap-4"
          >
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">View Docs</Button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Controls */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
        <button
          onClick={toggle}
          aria-label={paused ? "Play" : "Pause"}
          className="p-2 bg-white/10 hover:bg-white/30 rounded-full transition"
        >
          {paused ? (
            <FiPlay size={20} className="text-white" />
          ) : (
            <FiPause size={20} className="text-white" />
          )}
        </button>
        <div className="flex space-x-2">
          {SLIDES.map((_, i) => (
            <motion.span
              key={i}
              onClick={() => setIndex(i)}
              className="w-2.5 h-2.5 rounded-full cursor-pointer"
              animate={{
                backgroundColor: i === index ? "#fff" : "#ffffff80",
                scale: i === index ? 1.2 : 1,
              }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400"
        key={index}
        initial={{ width: 0 }}
        animate={{ width: paused ? 0 : "100%" }}
        transition={{ duration: AUTO_SLIDE_INTERVAL / 1000, ease: "linear" }}
      />
    </section>
  );
};

export default HeroSlider;
