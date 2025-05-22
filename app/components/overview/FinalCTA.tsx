"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/ui/Button";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="w-full bg-zinc-950 text-white px-6 py-28">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Build. Launch. Scale.
        </motion.h2>

        <p className="text-gray-400 mb-10">
          Join hundreds of developers and startups using Visionlyft to ship
          faster with zero backend hassle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button variant="primary">Create Workspace</Button>
          </Link>
          <Link href="/docs">
            <Button variant="secondary">View Docs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
