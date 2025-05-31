"use client";

import {
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaPaintBrush,
  FaTools,
  FaUsers,
  FaBuilding,
  FaGlobe,
  FaRocket,
  FaSearch,
  FaPencilRuler,
  FaServer,
  FaLifeRing,
} from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Software Development",
    icon: <FaCode size={20} className="text-indigo-400" />,
    description:
      "We build tailored web and mobile applications using modern frameworks, focusing on performance, scalability, and maintainability.",
  },
  {
    title: "Cloud Infrastructure",
    icon: <FaCloud size={20} className="text-pink-400" />,
    description:
      "Deploy on secure, scalable platforms like AWS and Azure with seamless integration and real-time capabilities.",
  },
  {
    title: "UX/UI Design",
    icon: <FaPaintBrush size={20} className="text-purple-400" />,
    description:
      "Intuitive, accessible interfaces that enhance user experience and support business goals across all devices.",
  },
  {
    title: "Security & Compliance",
    icon: <FaShieldAlt size={20} className="text-yellow-400" />,
    description:
      "Robust protection including encryption, OAuth2, and industry-compliant practices for data safety and integrity.",
  },
  {
    title: "Ongoing Maintenance",
    icon: <FaTools size={20} className="text-teal-400" />,
    description:
      "Regular updates, performance checks, and 24/7 monitoring to ensure your systems run smoothly.",
  },
];

const clients = [
  {
    title: "Startups",
    icon: <FaRocket size={20} className="text-pink-400" />,
    description:
      "Helping early-stage teams move fast with MVPs and launch-ready platforms.",
  },
  {
    title: "Enterprises",
    icon: <FaBuilding size={20} className="text-indigo-400" />,
    description:
      "Supporting digital transformation through robust APIs and secure infrastructure.",
  },
  {
    title: "Agencies & Partners",
    icon: <FaUsers size={20} className="text-purple-400" />,
    description:
      "Reliable tech partnerships that scale creative and client delivery.",
  },
  {
    title: "Global Teams",
    icon: <FaGlobe size={20} className="text-yellow-400" />,
    description:
      "Cloud-native solutions that power remote collaboration and distributed work.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    icon: <FaSearch size={20} className="text-blue-400" />,
    description:
      "We begin with in-depth discussions to understand your goals, pain points, and priorities.",
  },
  {
    title: "Design",
    icon: <FaPencilRuler size={20} className="text-purple-400" />,
    description:
      "We turn insights into wireframes and high-fidelity designs tailored to your users.",
  },
  {
    title: "Development",
    icon: <FaServer size={20} className="text-green-400" />,
    description:
      "Agile development brings your product to life with clean, scalable code.",
  },
  {
    title: "Support",
    icon: <FaLifeRing size={20} className="text-pink-400" />,
    description:
      "Post-launch, we ensure everything runs smoothly with maintenance, monitoring, and updates.",
  },
];

const CoreServices = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-16"
        >
          Our Core Services
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-white/20 shadow-md hover:shadow-pink-500/10 transition-all duration-300 overflow-hidden"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg mb-4">
                {service.icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mt-28">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-16"
        >
          Who We Work With
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-white/20 shadow-md hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg mb-4">
                {client.icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {client.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mt-28">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-16"
        >
          Our Process
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-white/20 shadow-md hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg mb-4">
                {step.icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
