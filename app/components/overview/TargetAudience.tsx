"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiBriefcase, FiUsers, FiZap } from "react-icons/fi";

const targets = [
  {
    icon: <FiUser size={24} />,
    label: "Solo Developers",
  },
  {
    icon: <FiBriefcase size={24} />,
    label: "SaaS Founders",
  },
  {
    icon: <FiUsers size={24} />,
    label: "Startup Teams",
  },
  {
    icon: <FiZap size={24} />,
    label: "No-Code Makers",
  },
];

const TargetAudience = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-28">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-12"
        >
          Who It's For
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {targets.map((target, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:shadow-lg transition"
            >
              <div className="mb-3 w-10 h-10 flex items-center justify-center bg-indigo-500/10 text-indigo-400 rounded-full">
                {target.icon}
              </div>
              <p className="text-sm font-medium text-gray-200">
                {target.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
