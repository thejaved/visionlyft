"use client";
import React from "react";
import Link from "next/link";
import { FiChevronLeft, FiClock } from "react-icons/fi";
import Button from "@/ui/Button";

interface ModelDetailHeaderProps {
  modelName: string;
  updated?: string;
  onOpenVersions: () => void;
}

const ModelDetailHeader = ({
  modelName,
  updated = "unknown",
  onOpenVersions,
}: ModelDetailHeaderProps) => {
  return (
    <section className="w-full bg-gradient-to-br from-zinc-950/80 via-black to-zinc-950 border-b border-white/10 backdrop-blur-sm px-6 py-12 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Model Title & Description */}
        <div className="space-y-3">
          <Link
            href="/models"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white bg-white/5 border border-white/10 rounded-full px-3 py-1 transition"
          >
            <FiChevronLeft size={14} />
            Back to Models
          </Link>

          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight relative w-fit pb-1">
              {modelName}
              <span className="block h-0.5 bg-indigo-500 w-full mt-1 rounded-full" />
            </h1>
            <p className="text-sm text-gray-400 max-w-md mt-2">
              Manage schema, test the endpoint, and explore API responses in
              real time.
            </p>

            <div className="mt-3 inline-flex items-center gap-2 text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              <FiClock size={12} />
              <span>Last updated: {updated}</span>
            </div>
          </div>
        </div>

        {/* Right: View Versions */}
        <div>
          <Button
            variant="secondary"
            onClick={onOpenVersions}
            className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 hover:bg-white/10 transition rounded-full text-sm"
          >
            <FiClock size={16} />
            View Versions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModelDetailHeader;
