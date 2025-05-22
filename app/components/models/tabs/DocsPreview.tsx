"use client";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

interface DocsPreviewProps {
  model?: { name?: string };
}

const DocsPreview = ({ model }: DocsPreviewProps) => {
  const endpoint = model?.name
    ? `/api/workspace/${model.name.toLowerCase()}`
    : "/api/workspace/undefined";

  return (
    <div className="w-full px-6 pb-20 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">Docs Preview</h2>
          <p className="text-gray-400 text-sm">
            Your auto-generated Swagger/OpenAPI preview based on the model.
          </p>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-lg overflow-hidden shadow">
          <div className="px-5 py-4 border-b border-white/10">
            <code className="text-sm text-indigo-400">{endpoint}</code>
          </div>

          {/* Endpoint methods */}
          <div className="divide-y divide-white/10 text-sm">
            {["GET", "POST", "PUT", "DELETE"].map((method) => (
              <div
                key={method}
                className="flex items-start sm:items-center justify-between px-5 py-4 hover:bg-zinc-800 transition"
              >
                <div>
                  <span
                    className={`inline-block text-xs font-bold px-2 py-1 rounded mr-2 ${
                      method === "GET"
                        ? "bg-green-600"
                        : method === "POST"
                        ? "bg-blue-600"
                        : method === "PUT"
                        ? "bg-yellow-600"
                        : "bg-red-600"
                    }`}
                  >
                    {method}
                  </span>
                  <span className="text-gray-300">{endpoint}</span>
                </div>
                <button
                  className="text-gray-500 hover:text-white transition flex items-center gap-1"
                  aria-label={`Expand ${method} details`}
                >
                  <FiChevronDown size={16} />
                  <span className="hidden sm:inline">Details</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPreview;
