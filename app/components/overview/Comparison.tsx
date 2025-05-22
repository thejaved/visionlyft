"use client";
import React from "react";
import { FiCheckCircle, FiXCircle, FiAlertCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const data = [
  {
    feature: "One-click API creation",
    visionlyft: <FiCheckCircle className="text-green-400 mx-auto" />,
    others: <FiXCircle className="text-red-400 mx-auto" />,
  },
  {
    feature: "Multi-tenant isolation",
    visionlyft: <FiCheckCircle className="text-green-400 mx-auto" />,
    others: <FiXCircle className="text-red-400 mx-auto" />,
  },
  {
    feature: "Built-in dashboard",
    visionlyft: <FiCheckCircle className="text-green-400 mx-auto" />,
    others: <FiAlertCircle className="text-yellow-400 mx-auto" />,
  },
  {
    feature: "Zero backend setup",
    visionlyft: <FiCheckCircle className="text-green-400 mx-auto" />,
    others: <FiXCircle className="text-red-400 mx-auto" />,
  },
];

const Comparison = () => {
  return (
    <section className="w-full bg-black text-white px-6 py-24">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          Why Visionlyft vs Others?
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-separate border-spacing-y-3">
            <thead>
              <tr className="text-sm text-gray-400">
                <th className="text-left px-4 py-2 w-1/2">Feature</th>
                <th className="text-center px-4 py-2 w-1/4">Visionlyft</th>
                <th className="text-center px-4 py-2 w-1/4">Others</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className="bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  <td className="text-left px-4 py-4 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className="text-center px-4 py-4">{row.visionlyft}</td>
                  <td className="text-center px-4 py-4">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
