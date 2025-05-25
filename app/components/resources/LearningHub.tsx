"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";

const tutorials = [
  {
    title: "Getting Started with Visionlyft",
    videoUrl: "https://www.youtube.com/watch?v=xyz123",
    thumbnail: "/tutorials/thumb1.jpg",
  },
  {
    title: "Integrating APIs in Minutes",
    videoUrl: "https://www.youtube.com/watch?v=xyz456",
    thumbnail: "/tutorials/thumb2.jpg",
  },
  {
    title: "Deploy to Cloud with Visionlyft",
    videoUrl: "https://www.youtube.com/watch?v=xyz789",
    thumbnail: "/tutorials/thumb3.jpg",
  },
];

const LearningHub = () => {
  return (
    <section className="bg-[#0a0a0a] py-28 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-14"
        >
          Learning Hub
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Explore quick tutorials and webinars to get the most out of
          Visionlyft's platform.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((item, i) => (
            <motion.a
              key={i}
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative block rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <FaPlayCircle className="text-white text-4xl" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium text-base">
                  {item.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningHub;
