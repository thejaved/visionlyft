"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/app/components/common/Button";

const pricingPlans = [
  {
    title: "Starter",
    price: "$29/mo",
    description: "Perfect for individuals and small teams getting started.",
    features: [
      "Basic API access",
      "Up to 3 projects",
      "Community support",
      "Rate limits apply",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    title: "Growth",
    price: "$99/mo",
    description: "Ideal for growing teams and production use.",
    features: [
      "All Starter features",
      "Priority support",
      "Up to 15 projects",
      "Increased rate limits",
      "Advanced analytics",
    ],
    cta: "Upgrade Now",
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Custom infrastructure, SLAs, and compliance options.",
    features: [
      "All Growth features",
      "Dedicated support",
      "Custom API limits",
      "Onboarding assistance",
      "Enterprise SLAs",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const PricingTiersGrid = () => {
  return (
    <section className="bg-[#0b0b0c] py-28 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-16"
        >
          Flexible Pricing That Grows With You
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border border-white/10 bg-[#111] p-8 text-left shadow-md transition-all duration-300 hover:border-white/20 hover:shadow-lg ${
                plan.highlight
                  ? "border-indigo-500/30 shadow-indigo-500/10"
                  : ""
              }`}
            >
              <h3 className="text-white text-xl font-semibold mb-2">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-white mb-2">{plan.price}</p>
              <p className="text-sm text-gray-400 mb-5">{plan.description}</p>
              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j}>✓ {feature}</li>
                ))}
              </ul>
              <Button variant={plan.highlight ? "primary" : "secondary"}>
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiersGrid;
