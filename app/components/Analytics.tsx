"use client";
import React from "react";
import {
  FiBarChart2,
  FiUsers,
  FiTrendingUp,
  FiLink,
  FiClock,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white flex flex-col items-center px-4 py-32">
      {/* Animated Icon */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-24 h-24 bg-blue-700 opacity-20 rounded-full blur-2xl animate-ping" />
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FiBarChart2 className="w-16 h-16 text-blue-500 relative z-10" />
        </motion.div>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-center drop-shadow-md">
        Analytics Dashboard
      </h1>
      <p className="text-gray-400 text-center max-w-md text-base font-medium mb-10">
        Your all-in-one hub to monitor clicks, engagement, link performance, and
        user behavior. Advanced real-time analytics launching soon!
      </p>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl w-full mb-10">
        {[
          { icon: FiUsers, label: "Total Visitors", value: "12,350" },
          { icon: FiLink, label: "Top Link Clicks", value: "4,112" },
          { icon: FiTrendingUp, label: "Conversion Rate", value: "7.2%" },
          { icon: FiClock, label: "Avg. Time on Page", value: "2m 45s" },
        ].map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-md hover:ring-2 hover:ring-blue-500/30 transition"
          >
            <stat.icon className="w-8 h-8 mb-3 text-blue-400" />
            <p className="text-xl font-bold">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Live Preview Placeholder */}
      <div className="w-full max-w-5xl bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-md p-8 mb-10 text-center">
        <p className="text-gray-300 text-lg font-semibold mb-4">
          Live Data Preview (Coming Soon)
        </p>
        <div className="h-48 bg-black/30 border border-white/10 rounded-md flex items-center justify-center text-gray-500 text-sm">
          [ Your future real-time analytics graph will appear here ]
        </div>
      </div>
    </div>
  );
}
