"use client";
import React from "react";
import { motion } from "framer-motion";

const LivePreview = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-28">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-4"
        >
          See It in Action
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Visionlyft takes you from data model to live, documented
          API—instantly. See how it works:
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl group"
        >
          {/* Browser header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          {/* Video */}
          <div className="relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
              poster="/preview-thumbnail.png"
            >
              <source src="/demo-preview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Optional shimmer ring on hover */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl group-hover:ring-2 group-hover:ring-indigo-500/30 transition-all duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LivePreview;
