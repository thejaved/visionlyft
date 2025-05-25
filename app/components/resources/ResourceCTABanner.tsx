"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/app/components/common/Button";

const ResourceCTABanner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 py-20 px-6 sm:px-12 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
        >
          Need Help? Talk to an Engineer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-white/90 max-w-xl mx-auto mb-8"
        >
          Whether you're stuck on integration or want expert advice on scaling
          your product, our engineers are here to assist you directly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button variant="secondary">Talk to an Engineer</Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />
    </section>
  );
};

export default ResourceCTABanner;
