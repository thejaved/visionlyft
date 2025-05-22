"use client";
import React from "react";
import { FiEdit2, FiFileText, FiTrash2 } from "react-icons/fi";

export interface Model {
  name: string;
  description?: string;
  fields: {
    name: string;
    type: string;
    required: boolean;
    defaultValue?: string;
  }[];
  updated: string;
  endpoint: string;
  onEdit: () => void;
  onDelete: () => void;
  onViewDocs: () => void;
}

interface ModelGridViewProps {
  models: Model[];
}

const ModelGridView = ({ models }: ModelGridViewProps) => {
  function formatRelativeTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();

    if (isNaN(date.getTime())) return "Unknown";

    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const ranges = [
      { limit: 60, unit: "second" as const },
      { limit: 3600, unit: "minute" as const },
      { limit: 86400, unit: "hour" as const },
      { limit: 2592000, unit: "day" as const },
      { limit: 31536000, unit: "month" as const },
    ];

    let unit: Intl.RelativeTimeFormatUnit = "year";
    let value = -Math.floor(diffInSeconds / 31536000);

    for (const range of ranges) {
      if (diffInSeconds < range.limit) {
        unit = range.unit;
        const divisor =
          unit === "second"
            ? 1
            : unit === "minute"
            ? 60
            : unit === "hour"
            ? 3600
            : unit === "day"
            ? 86400
            : 2592000;
        value = -Math.floor(diffInSeconds / divisor);
        break;
      }
    }

    const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    return formatter.format(value, unit);
  }

  return (
    <section className="w-full px-6 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Generated Models</h2>

        {models.length === 0 ? (
          <div className="text-center text-gray-400 text-sm py-20 border border-white/10 rounded-xl bg-white/5">
            No models found. Click “Create Model” to get started.
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((model, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 backdrop-blur-md hover:shadow-lg transition"
              >
                {/* Header */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{model.name}</h3>
                  <span className="text-xs text-gray-400">
                    {formatRelativeTime(model.updated)}
                  </span>
                </div>

                {/* Field Summary */}
                <p className="text-sm text-gray-300">
                  {model.fields.length}{" "}
                  {model.fields.length === 1 ? "field" : "fields"}
                </p>

                {/* Endpoint */}
                <code className="block text-sm text-indigo-400 truncate">
                  {model.endpoint}
                </code>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button
                    aria-label={`Edit ${model.name}`}
                    onClick={model.onEdit}
                    className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                  >
                    <FiEdit2 size={16} />
                  </button>
                  <button
                    aria-label={`View Docs for ${model.name}`}
                    onClick={model.onViewDocs}
                    className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
                  >
                    <FiFileText size={16} />
                  </button>
                  <button
                    aria-label={`Delete ${model.name}`}
                    onClick={model.onDelete}
                    className="p-2 rounded-md bg-red-500/20 hover:bg-red-500/40 text-red-400 transition"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ModelGridView;
