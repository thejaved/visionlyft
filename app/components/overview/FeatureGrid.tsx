"use client";
import React from "react";
import {
  FiCpu,
  FiLayout,
  FiUsers,
  FiShield,
  FiBookOpen,
  FiGlobe,
} from "react-icons/fi";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FiCpu size={20} />,
    title: "Instant API Generation",
    description: "Get live endpoints in seconds from your schema.",
  },
  {
    icon: <FiLayout size={20} />,
    title: "Built-in Dashboard",
    description: "Manage usage, models, and API keys effortlessly.",
  },
  {
    icon: <FiUsers size={20} />,
    title: "Multi-Tenant Support",
    description: "Isolate teams, roles, and data per workspace.",
  },
  {
    icon: <FiShield size={20} />,
    title: "Secure & Scalable",
    description: "Backed by serverless infra and MongoDB Atlas.",
  },
  {
    icon: <FiBookOpen size={20} />,
    title: "Auto Docs",
    description: "OpenAPI & Swagger docs for all your endpoints.",
  },
  {
    icon: <FiGlobe size={20} />,
    title: "Custom Domains",
    description: "Brand your APIs or microservices easily.",
  },
];

const FeatureGrid = () => {
  return (
    <section className="w-full bg-zinc-950 text-white px-6 py-28">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-indigo-400 mb-3">
          Features
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-16"
        >
          Visionlyft at a Glance
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:shadow-lg transition duration-300 overflow-hidden hover:ring-1 hover:ring-indigo-500/40"
            >
              {/* Icon with soft background */}
              <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-300 group-hover:text-white/90 leading-relaxed transition">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
