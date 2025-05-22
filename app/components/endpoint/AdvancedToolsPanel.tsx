"use client";

import React, { memo } from "react";
import { FiPlusCircle, FiRepeat, FiLayers } from "react-icons/fi";

interface Tool {
  icon: any;
  title: string;
  description: string;
  colorClass: string;
  hoverClass: string;
}

const tools: Tool[] = [
  {
    icon: FiPlusCircle,
    title: "Add Custom Route",
    description:
      "Extend your API with additional custom paths for special logic.",
    colorClass: "bg-indigo-600",
    hoverClass: "group-hover:text-indigo-400",
  },
  {
    icon: FiRepeat,
    title: "Proxy External API",
    description:
      "Redirect and wrap external APIs as part of your endpoint surface.",
    colorClass: "bg-pink-600",
    hoverClass: "group-hover:text-pink-400",
  },
  {
    icon: FiLayers,
    title: "Add Middleware",
    description:
      "Attach logic like auth, validation, and logging to your endpoints.",
    colorClass: "bg-yellow-500",
    hoverClass: "group-hover:text-yellow-400",
  },
];

const ToolCard: React.FC<Tool> = memo(
  ({ icon: Icon, title, description, colorClass, hoverClass }) => (
    <div className="group flex flex-col bg-zinc-900 border border-white/10 p-6 rounded-2xl hover:shadow-lg transition-all duration-200">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full ${colorClass} mb-4 transform transition-transform group-hover:scale-110`}
      >
        <Icon className="text-white" size={24} aria-hidden="true" />
      </div>
      <h3
        className={`text-lg font-semibold mb-2 transition-colors ${hoverClass}`}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-400 flex-1">{description}</p>
    </div>
  )
);
ToolCard.displayName = "ToolCard";

export default function AdvancedToolsPanel() {
  return (
    <section className="w-full px-4 py-12 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          Advanced Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
