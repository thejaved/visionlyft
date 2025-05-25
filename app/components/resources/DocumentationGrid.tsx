"use client";

import React from "react";
import { motion } from "framer-motion";

const docs = [
  {
    title: "Getting Started",
    description:
      "Kick off your journey with Visionlyft's core concepts and setup guides.",
    link: "/docs/getting-started",
  },
  {
    title: "Authentication",
    description: "Learn how to manage secure access using OAuth2 and API keys.",
    link: "/docs/authentication",
  },
  {
    title: "API Reference",
    description:
      "Detailed reference of all available endpoints, parameters, and responses.",
    link: "/docs/api-reference",
  },
  {
    title: "Webhooks",
    description:
      "Integrate real-time notifications using webhooks and event listeners.",
    link: "/docs/webhooks",
  },
  {
    title: "Rate Limits",
    description:
      "Understand how to work within usage quotas and optimize your API calls.",
    link: "/docs/rate-limits",
  },
  {
    title: "Errors & Debugging",
    description:
      "Troubleshooting tips and best practices for handling error responses.",
    link: "/docs/errors-debugging",
  },
];

const DocumentationGrid = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-16 text-center"
        >
          Documentation Hub
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc, i) => (
            <motion.a
              key={i}
              href={doc.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#111] border border-white/10 rounded-xl p-6 hover:border-white/20 hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-300 block"
            >
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-400 transition">
                {doc.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {doc.description}
              </p>
              <span className="inline-block mt-4 text-sm text-indigo-400 group-hover:underline">
                Read More →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentationGrid;
