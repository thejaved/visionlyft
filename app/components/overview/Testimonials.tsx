"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "Visionlyft replaced weeks of backend work with one click. Insane time-saver.",
    name: "Priya N.",
    role: "Solo Developer",
  },
  {
    quote:
      "I used to write my own Swagger docs every sprint. Now it's all there—instantly.",
    name: "Akash S.",
    role: "Tech Lead, SaaS Startup",
  },
  {
    quote:
      "The best part? I didn’t touch any backend config. Just model, deploy, done.",
    name: "Neha R.",
    role: "Indie Maker",
  },
];

const Testimonials = () => {
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
          What Users Are Saying
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm text-left"
            >
              <FiMessageSquare className="text-indigo-500 mb-4" size={24} />

              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                “{t.quote}”
              </p>

              <div className="text-white font-semibold">{t.name}</div>
              <div className="text-xs text-gray-400">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
