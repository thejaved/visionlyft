"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "AWS", logo: "/logos/01.png" },
  { name: "Azure", logo: "/logos/02.png" },
  { name: "Stripe", logo: "/logos/03.png" },
  { name: "Slack", logo: "/logos/04.png" },
  { name: "DigitalOcean", logo: "/logos/05.png" },
  { name: "Cloudflare", logo: "/logos/06.png" },
];

const TrustedBy = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-24 px-6 sm:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-gray-400 uppercase tracking-wide mb-12"
        >
          Trusted by forward-thinking teams
        </motion.h2>

        {/* Logo Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 140 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 sm:h-12 object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
