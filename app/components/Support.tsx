"use client";
import React from "react";
import {
  FiHelpCircle,
  FiBookOpen,
  FiMessageSquare,
  FiMail,
} from "react-icons/fi";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Documentation",
    description: "Explore detailed guides and tutorials to master Visionlyft.",
    icon: <FiBookOpen className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "FAQs",
    description: "Get answers to common questions quickly and easily.",
    icon: <FiMessageSquare className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Contact Support",
    description: "Reach our team for personalized assistance and help.",
    icon: <FiMail className="w-6 h-6 text-green-400" />,
  },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white flex flex-col items-center px-4 py-32">
      {/* Animated Icon */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-24 h-24 bg-purple-700 opacity-20 rounded-full blur-2xl animate-ping" />
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FiHelpCircle className="w-16 h-16 text-purple-500 relative z-10" />
        </motion.div>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-center drop-shadow-md">
        Support Center
      </h1>
      <p className="text-gray-400 text-center max-w-md text-base font-medium mb-10">
        Need help? Our team is here to assist you. Explore resources or contact
        us directly.
      </p>

      {/* Help Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full mb-12">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-md hover:ring-2 hover:ring-purple-500/30 hover:scale-105 transform transition"
          >
            <div className="mb-4">{category.icon}</div>
            <h2 className="text-lg font-bold tracking-tight mb-2">
              {category.title}
            </h2>
            <p className="text-sm text-gray-300 text-center">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
