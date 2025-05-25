"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Visionlyft transformed the way we ship APIs—our productivity increased by 40% within weeks.",
    name: "Emma Williams",
    role: "Engineering Manager",
    company: "Flowstack",
  },
  {
    quote:
      "As an enterprise, integration is key. Visionlyft delivered a robust platform that just works.",
    name: "Rahul Mehta",
    role: "CTO",
    company: "Infobase Ltd",
  },
  {
    quote:
      "Our mobile team now builds in days what took weeks. Visionlyft APIs are a game changer!",
    name: "Sara Liu",
    role: "Product Lead",
    company: "Zaply",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-white mb-16"
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-[#111] border border-white/10 rounded-xl p-6 text-left hover:border-white/20 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full">
                  <FaQuoteLeft className="text-white/30 text-lg" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-gray-400 text-xs">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                “{t.quote}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
