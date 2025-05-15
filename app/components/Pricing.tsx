"use client";
import React from "react";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for individuals & freelancers",
    price: "$0",
    features: ["1 Project", "Basic Analytics", "Community Support"],
    cta: "Start Free",
  },
  {
    name: "Pro",
    tagline: "For growing businesses & teams",
    price: "$19/mo",
    features: ["Unlimited Projects", "Advanced Analytics", "Priority Support"],
    popular: true,
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    tagline: "Tailored for large organizations",
    price: "Contact Us",
    features: [
      "Custom Integrations",
      "Dedicated Success Manager",
      "Premium 24/7 Support",
    ],
    cta: "Talk to Sales",
  },
];

export default function Pricing() {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white py-28 px-6 overflow-hidden">
      {/* Blurred Orb Accent */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-700 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Pricing Plans
        </h2>
        <p className="text-gray-400 text-base max-w-md mx-auto mb-16">
          Simple, transparent pricing for everyone. Choose a plan that scales
          with your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-md ring-1 ring-white/10 hover:ring-2 hover:ring-blue-500/30 transition`}
            >
              {plan.popular && (
                <span className="absolute top-3 right-3 bg-blue-600/80 text-[10px] font-semibold px-2 py-1 rounded-full shadow-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-xs text-gray-400 mb-5">{plan.tagline}</p>
              <p className="text-3xl font-extrabold mb-8">{plan.price}</p>
              <ul className="space-y-3 mb-10 text-left">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <FiCheck className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold rounded-md shadow-md hover:ring-2 hover:ring-blue-500/40 transition">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
