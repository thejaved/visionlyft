"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade your plan anytime via your dashboard.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial for the Growth plan.",
  },
  {
    question: "What if I need a custom solution?",
    answer:
      "We can create a tailored solution for your business needs. Contact our team for a personalized quote.",
  },
  {
    question: "How is usage tracked?",
    answer:
      "Usage is calculated based on API calls and storage. Details are available in your admin panel.",
  },
];

export default function PricingFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0b0b0b] py-28 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10"
        >
          Need a Custom Plan?
        </motion.h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-12">
          If your team has unique needs or higher volume, we're happy to provide
          a tailored quote.
          <br /> Contact sales to explore a custom enterprise solution.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-10"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 py-4 text-left"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-white text-left font-medium flex justify-between items-center"
              >
                {faq.question}
                <span className="text-white/50">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.p
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-400 mt-2"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
