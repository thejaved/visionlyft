"use client";

import React, { useState, useMemo } from "react";
import { FiTrendingUp, FiZap, FiServer } from "react-icons/fi";
import { motion } from "framer-motion";

export default function RateLimitPanel() {
  const [enabled, setEnabled] = useState(true);
  const toggleStatus = () => setEnabled((prev) => !prev);

  // Replace these with props or external hooks
  const requestsToday = 1248;
  const dailyLimit = 2000;
  const throttleLimit = 1000;
  const throttleUsed = 600;

  const usagePercent = useMemo(
    () => Math.min(Math.round((requestsToday / dailyLimit) * 100), 100),
    [requestsToday, dailyLimit]
  );
  const throttlePercent = useMemo(
    () => Math.min(Math.round((throttleUsed / throttleLimit) * 100), 100),
    [throttleUsed, throttleLimit]
  );

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-12 bg-zinc-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
          Rate Limits & API Status
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Requests Today */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <FiTrendingUp size={24} className="text-indigo-400" />
                <div>
                  <p className="text-sm text-gray-400">Requests Today</p>
                  <p className="text-3xl font-bold text-indigo-400">
                    {requestsToday.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-indigo-500 transition-all"
                  style={{ width: `${usagePercent}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-gray-400">
                {usagePercent}% of {dailyLimit.toLocaleString()} limit
              </p>
            </div>
          </motion.div>

          {/* Throttle Limit */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <FiZap size={24} className="text-yellow-400" />
                <div>
                  <p className="text-sm text-gray-400">Throttle Limit</p>
                  <p className="text-3xl font-bold text-yellow-400">
                    {throttleLimit.toLocaleString()} / day
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-yellow-500 transition-all"
                  style={{ width: `${throttlePercent}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-gray-400">
                {throttlePercent}% used
              </p>
            </div>
          </motion.div>

          {/* API Status Toggle */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <FiServer
                size={24}
                className={enabled ? "text-green-400" : "text-red-400"}
              />
              <div>
                <p className="text-sm text-gray-400">API Status</p>
                <p
                  className={`text-lg font-semibold ${
                    enabled ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {enabled ? "Enabled" : "Disabled"}
                </p>
              </div>
            </div>
            <motion.button
              onClick={toggleStatus}
              whileTap={{ scale: 0.95 }}
              className={`self-start px-5 py-2 rounded-md text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 
                ${
                  enabled
                    ? "bg-green-600 hover:bg-green-700 focus:ring-green-500"
                    : "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                }`}
            >
              Toggle Status
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
