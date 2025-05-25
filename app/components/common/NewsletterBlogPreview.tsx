"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const blogs = [
  {
    title: "5 Ways Visionlyft Scales Your API Workflow",
    image: "/blog/scale-api.jpg",
    tag: "Engineering",
  },
  {
    title: "Secure by Default: Our Encryption Approach",
    image: "/blog/security.jpg",
    tag: "Security",
  },
  {
    title: "Designing Better Workflows with Visionlyft",
    image: "/blog/workflow.jpg",
    tag: "Productivity",
  },
];

const NewsletterBlogPreview = () => {
  return (
    <section className="relative bg-[#0b0b0c] py-32 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      {/* Animated Glow Blobs */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-indigo-500/10 rounded-full blur-[100px] z-0"
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-pink-500/10 rounded-full blur-[120px] z-0"
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.1, 0.95] }}
        transition={{ duration: 16, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Stay in the Loop
          </h2>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Be the first to hear about Visionlyft updates, insights, and
            behind-the-scenes engineering stories.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto group">
            <div className="relative w-full">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 transition group-focus-within:text-white/70" />
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-10 pr-4 py-3 rounded-lg bg-[#111] text-white border border-white/10 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 text-sm w-full placeholder-white/40 shadow-inner transition"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold text-sm hover:brightness-110 transition shadow-md"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        {/* Blog Preview Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              className="group overflow-hidden rounded-xl bg-[#111] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-md hover:shadow-indigo-500/10 relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-xs bg-white/10 text-white px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                  {blog.tag}
                </span>
              </div>
              <div className="p-5 relative z-10">
                <h3 className="text-white font-semibold text-base leading-snug">
                  {blog.title}
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterBlogPreview;
