"use client";
import React from "react";
import { FiZap } from "react-icons/fi";
import { motion } from "framer-motion";

const integrations = [
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Google Analytics", logo: "/logos/google-analytics.svg" },
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Zapier", logo: "/logos/zapier.svg" },
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "Mailchimp", logo: "/logos/mailchimp.svg" },
];

export default function Integrations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white flex flex-col items-center px-4 py-32">
      {/* Animated Icon */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-24 h-24 bg-green-700 opacity-20 rounded-full blur-2xl animate-ping" />
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FiZap className="w-16 h-16 text-green-500 relative z-10" />
        </motion.div>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-center drop-shadow-md">
        Integrations Marketplace
      </h1>
      <p className="text-gray-400 text-center max-w-md text-base font-medium mb-10">
        Connect Visionlyft with your favorite tools, platforms, and apps to
        supercharge your workflows. More integrations launching soon!
      </p>

      {/* Partner Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
        {integrations.map((integration, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-md hover:ring-2 hover:ring-green-500/30 hover:scale-105 transform transition"
          >
            <div className="w-12 h-12 mb-3">
              {/* Replace with actual logos when ready */}
              <img
                src={integration.logo}
                alt={integration.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-center">
              {integration.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
