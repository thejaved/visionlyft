"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaSync,
  FaUsers,
  FaRocket,
  FaLock,
  FaMobileAlt,
} from "react-icons/fa";

const features = [
  {
    title: "Scalability",
    icon: <FaRocket size={24} className="text-pink-500" />,
    description:
      "Scale seamlessly with solutions that evolve alongside your growing business.",
  },
  {
    title: "Integration",
    icon: <FaCogs size={24} className="text-indigo-500" />,
    description:
      "Connect effortlessly with the platforms, tools, and APIs you already use.",
  },
  {
    title: "Security",
    icon: <FaLock size={24} className="text-yellow-400" />,
    description:
      "End-to-end protection with encrypted data, RBAC, and compliance built-in.",
  },
  {
    title: "Custom Workflows",
    icon: <FaSync size={24} className="text-teal-400" />,
    description:
      "Adaptable modules tailored to your team’s real-world operations.",
  },
  {
    title: "Mobile Ready",
    icon: <FaMobileAlt size={24} className="text-purple-400" />,
    description:
      "Access and operate from anywhere, on any device — natively optimized.",
  },
  {
    title: "Collaboration",
    icon: <FaUsers size={24} className="text-cyan-400" />,
    description:
      "Foster real-time teamwork across departments, locations, and time zones.",
  },
];

const WhyVisionlyft = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-white mb-4"
        >
          Why Visionlyft?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base mb-14"
        >
          Discover the principles that power everything we build — crafted for
          speed, security, and adaptability across real-world teams.
        </motion.p>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-white/10 hover:border-white/20 rounded-xl p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-white/5 border border-white/10 rounded-xl mb-5">
                {feature.icon}
              </div>
              <h3 className="text-white text-base font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVisionlyft;
