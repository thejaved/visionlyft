"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

const contactOptions = [
  {
    title: "Sales Inquiry",
    description: "Discuss your project goals, pricing, and how we can help.",
    icon: <FiMail className="text-indigo-400" size={20} />,
    action: "Contact Sales",
  },
  {
    title: "Technical Support",
    description:
      "Need help with implementation or have questions? Our support team is here.",
    icon: <FiMessageSquare className="text-pink-400" size={20} />,
    action: "Get Support",
  },
  {
    title: "Call Us",
    description: "Prefer to speak directly? We’re happy to connect by phone.",
    icon: <FiPhone className="text-yellow-400" size={20} />,
    action: "+91 82879 76642",
  },
];

const ContactOptions = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-14"
        >
          Get in Touch
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactOptions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-white/20 shadow-md transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {item.description}
              </p>
              <button className="text-sm text-indigo-400 hover:underline font-medium">
                {item.action}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
