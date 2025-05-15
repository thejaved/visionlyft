import React from "react";
import {
  FiLink,
  FiShoppingBag,
  FiCalendar,
  FiUser,
  FiGlobe,
  FiEdit,
  FiLayers,
  FiMonitor,
} from "react-icons/fi";

const demoTemplates = [
  {
    title: "Link Landing Page",
    subtitle: "Bio Link",
    description:
      "Create a branded landing page that holds all your important links in one place.",
    icon: <FiLink className="w-6 h-6 text-blue-400" />,
    badge: "Popular",
  },
  {
    title: "Product Showcase",
    subtitle: "Ecommerce",
    description:
      "Showcase your products beautifully with layouts designed for conversions.",
    icon: <FiShoppingBag className="w-6 h-6 text-pink-400" />,
    badge: "New",
  },
  {
    title: "Event Registration",
    subtitle: "Event Marketing",
    description:
      "Drive signups for your next webinar, event, or product launch in minutes.",
    icon: <FiCalendar className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Portfolio Page",
    subtitle: "Personal Branding",
    description:
      "Show off your work and attract new clients with a clean, customizable portfolio.",
    icon: <FiUser className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Multi-Page Microsite",
    subtitle: "Campaign Pages",
    description:
      "Run targeted marketing campaigns with fully customizable micro websites.",
    icon: <FiLayers className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Newsletter Signup",
    subtitle: "Lead Generation",
    description:
      "Capture emails and grow your newsletter or email list with styled signup pages.",
    icon: <FiEdit className="w-6 h-6 text-teal-400" />,
  },
  {
    title: "Service Landing Page",
    subtitle: "Agency & Services",
    description:
      "Launch your service offering with high-conversion landing page templates.",
    icon: <FiMonitor className="w-6 h-6 text-rose-400" />,
  },
  {
    title: "Global Redirect Link",
    subtitle: "Advanced Link Routing",
    description:
      "Send visitors to custom destinations based on location, device, or language.",
    icon: <FiGlobe className="w-6 h-6 text-indigo-400" />,
  },
];

export default function Templates() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white flex flex-col items-center justify-center px-4 py-32">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-center drop-shadow-md">
        Templates Library
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mb-8 text-base font-medium">
        Choose from a growing collection of professionally designed,
        conversion-optimized templates ready to elevate your brand.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
        {demoTemplates.map((template, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-lg ring-1 ring-white/10 hover:ring-2 hover:ring-blue-600 hover:shadow-blue-500/20 transform transition-all duration-300 hover:scale-105 hover:-rotate-1"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-tr from-blue-700 via-purple-700 to-pink-700 opacity-30 blur-2xl rotate-12" />

            {template.badge && (
              <span className="absolute top-3 right-3 bg-blue-600 text-[10px] font-semibold px-2 py-1 rounded-full shadow-md">
                {template.badge}
              </span>
            )}

            <div className="mb-3">{template.icon}</div>

            <h2 className="text-lg font-bold tracking-tight">
              {template.title}
            </h2>
            <h3 className="text-xs text-gray-400 mb-2 font-semibold">
              {template.subtitle}
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed mb-4 font-medium">
              {template.description}
            </p>

            <button className="mt-auto inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold rounded-md shadow-md hover:scale-105 transition-transform">
              Preview Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
