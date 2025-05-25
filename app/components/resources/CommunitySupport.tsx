"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDiscord, FaSlack, FaQuestionCircle } from "react-icons/fa";

const community = [
  {
    title: "Join Our Discord",
    icon: <FaDiscord size={20} className="text-indigo-400" />,
    description:
      "Chat with engineers, share ideas, and get early product updates in our active Discord community.",
    link: "https://discord.gg/visionlyft",
  },
  {
    title: "Slack Connect",
    icon: <FaSlack size={20} className="text-pink-400" />,
    description:
      "Prefer Slack? Connect with our team directly in our workspace for faster technical guidance.",
    link: "https://visionlyft.com/slack",
  },
  {
    title: "FAQs & Troubleshooting",
    icon: <FaQuestionCircle size={20} className="text-yellow-400" />,
    description:
      "Get quick answers to common questions in our searchable knowledge base.",
    link: "/resources/faqs",
  },
];

const CommunitySupport = () => {
  return (
    <section className="bg-[#0b0b0c] py-28 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-16"
        >
          Community & Support
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {community.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="block bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-white/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;
