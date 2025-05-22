"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiEdit3, FiUploadCloud, FiLink } from "react-icons/fi";

const steps = [
  {
    icon: <FiEdit3 size={22} />,
    title: "Define Your Schema",
    description: "Start by modeling your data structure or collections.",
  },
  {
    icon: <FiUploadCloud size={22} />,
    title: "Deploy Instantly",
    description: "Click once to publish and get your API live.",
  },
  {
    icon: <FiLink size={22} />,
    title: "Access Endpoints & Docs",
    description: "Use Swagger/OpenAPI docs and shareable endpoints.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-zinc-950 text-white px-6 py-28">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-16"
        >
          How Visionlyft Works
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:shadow-xl transition"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400">
                {step.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {step.description}
              </p>

              {/* Optional Step number pill */}
              <div className="absolute -top-3 left-3 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                Step {idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
