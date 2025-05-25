"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaPaintBrush,
  FaTools,
} from "react-icons/fa";

const solutions = [
  {
    title: "Tailored Development",
    icon: <FaCode size={20} className="text-indigo-500" />,
    description:
      "From backend logic to frontend finesse, we develop software that's custom-fit, cleanly architected, and built to outperform.",
  },
  {
    title: "Smart Cloud Systems",
    icon: <FaCloud size={20} className="text-pink-500" />,
    description:
      "Harness the full power of cloud-native architecture — optimized for speed, security, and limitless scalability.",
  },
  {
    title: "Design with Impact",
    icon: <FaPaintBrush size={20} className="text-purple-500" />,
    description:
      "Pixel-perfect, purpose-driven UI/UX that’s built to resonate with users and convert at every touchpoint.",
  },
  {
    title: "Built-In Security",
    icon: <FaShieldAlt size={20} className="text-yellow-500" />,
    description:
      "We bake in compliance, encryption, and proactive defense — so your systems are battle-tested and breach-resistant.",
  },
  {
    title: "End-to-End Support",
    icon: <FaTools size={20} className="text-teal-500" />,
    description:
      "We don’t just launch and leave — we monitor, maintain, and iterate to ensure your tech evolves with your business.",
  },
];

const headingWords = ["Powerful", "Solutions", "Engineered", "for", "Growth"];

const SolutionsOverview = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="text-center text-4xl md:text-5xl font-extrabold text-white flex flex-wrap justify-center gap-x-2"
        >
          {headingWords.map((word, i) => (
            <motion.span
              key={word + i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-base max-w-3xl mx-auto text-gray-400 mt-4 mb-12"
        >
          Explore our core services built to scale with your business. We help
          teams design, ship, and support systems that drive measurable results.
        </motion.p>

        {/* Subtle Pulse Line */}
        <div className="w-20 h-0.5 mx-auto bg-white/10 mb-16 rounded-full animate-pulse" />

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} glareEnable={false}>
                <div className="group p-6 border border-white/10 rounded-xl bg-[#111] hover:border-white/20 hover:shadow-md transition-all duration-300">
                  <div className="mb-5 w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg">
                    {solution.icon}
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
