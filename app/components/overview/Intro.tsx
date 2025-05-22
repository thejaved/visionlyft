"use client";
import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-24 relative overflow-hidden">
      {/* Optional background glow orb */}
      <div className="absolute top-[-60px] left-[50%] w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full -translate-x-1/2 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <p className="text-sm uppercase tracking-wider text-indigo-400 mb-4">
          Platform Overview
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          What is Visionlyft?
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6" />

        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          Visionlyft is an all-in-one platform that auto-generates REST APIs,
          OpenAPI docs, and a sleek dashboard interface — instantly from your
          data model. It's built to help startups, indie developers, and teams
          launch faster with zero backend overhead.
        </p>
      </motion.div>
    </section>
  );
};

export default Intro;
