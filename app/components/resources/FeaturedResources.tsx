"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaCodeBranch, FaVideo, FaToolbox } from "react-icons/fa";

const featuredResources = [
  {
    icon: <FaBookOpen size={20} className="text-indigo-400" />,
    title: "Developer Guides",
    description:
      "Step-by-step instructions to help you build and integrate faster.",
    link: "#",
  },
  {
    icon: <FaCodeBranch size={20} className="text-pink-400" />,
    title: "API Reference",
    description:
      "Explore detailed API endpoints, parameters, and usage examples.",
    link: "#",
  },
  {
    icon: <FaVideo size={20} className="text-purple-400" />,
    title: "Video Tutorials",
    description:
      "Watch and learn with quick videos that walk you through features.",
    link: "#",
  },
  {
    icon: <FaToolbox size={20} className="text-teal-400" />,
    title: "SDK & Tools",
    description:
      "Download SDKs and tooling to kickstart your Visionlyft integration.",
    link: "#",
  },
];

const FeaturedResources = () => {
  return (
    <section className="relative bg-[#0b0b0b] py-24 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-14"
        >
          Featured Resources
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredResources.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#111] p-6 rounded-xl border border-white/10 hover:border-white/20 shadow-md hover:shadow-indigo-500/10 transition-all duration-300 text-left"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-white text-base font-semibold mb-2 group-hover:underline">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;
