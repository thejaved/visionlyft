"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCloud, FaBuilding, FaMobileAlt } from "react-icons/fa";

const useCases = [
  {
    key: "saas",
    title: "SaaS Teams",
    icon: <FaCloud size={20} className="text-indigo-500" />,
    content: {
      heading: "Build, Ship, Iterate",
      description:
        "SaaS teams use Visionlyft to streamline API integration, monitor performance, and deploy faster.",
      code: `// Initialize SDK
import { Visionlyft } from 'visionlyft';

const api = new Visionlyft('your-api-key');

api.fetch('/projects').then(res => console.log(res));`,
    },
  },
  {
    key: "enterprise",
    title: "Enterprise APIs",
    icon: <FaBuilding size={20} className="text-pink-500" />,
    content: {
      heading: "Connect Legacy & Modern Stacks",
      description:
        "Enterprises rely on Visionlyft to bridge legacy systems and modern microservices with secure APIs.",
      code: `POST /bridge
Authorization: Bearer YOUR_TOKEN

{
  "legacySystem": "ERPv2",
  "target": "microserviceA"
}`,
    },
  },
  {
    key: "mobile",
    title: "Mobile App Dev",
    icon: <FaMobileAlt size={20} className="text-purple-500" />,
    content: {
      heading: "Deliver Real-Time Features",
      description:
        "Mobile developers plug into Visionlyft to support push, sync, auth, and more via one unified API.",
      code: `// Push Notification Example
visionlyft.push.send({
  to: 'user123',
  title: 'Welcome!',
  message: 'Thanks for joining Visionlyft.'
});`,
    },
  },
];

const LiveDemo = () => {
  const [active, setActive] = useState("saas");
  const current = useCases.find((c) => c.key === active);

  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-white mb-4"
        >
          Live Demo & Use Cases
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base mb-12"
        >
          See how different teams build powerful digital experiences using
          Visionlyft’s unified API architecture.
        </motion.p>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`group flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                active === tab.key
                  ? "bg-white/10 border-white/20 text-white"
                  : "bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        {/* Animated Content View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current?.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            {/* Text + Code */}
            <div className="text-left max-w-xl mx-auto">
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">
                {current?.content.heading}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                {current?.content.description}
              </p>
              <pre className="text-sm bg-[#111] border border-white/10 rounded-lg p-4 text-left text-white whitespace-pre-wrap overflow-x-auto leading-snug font-mono">
                <code>{current?.content.code}</code>
              </pre>
            </div>

            {/* Output Box */}
            <div className="flex justify-center">
              <motion.div
                className="relative w-full h-64 sm:h-72 bg-[#111] border border-white/10 rounded-xl flex items-center justify-center text-gray-500 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="absolute top-4 right-4 text-[10px] text-white/20">
                  Live Output
                </span>
                <span className="text-xs text-white/30">
                  Preview not enabled
                </span>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LiveDemo;
