"use client";
import React from "react";
import { FiX, FiClock } from "react-icons/fi";

const mockVersions = [
  {
    id: "v1.3",
    label: "Version 1.3",
    timestamp: "2025-05-18 12:45 PM",
  },
  {
    id: "v1.2",
    label: "Version 1.2",
    timestamp: "2025-05-17 08:20 AM",
  },
  {
    id: "v1.1",
    label: "Initial Version",
    timestamp: "2025-05-16 09:50 AM",
  },
];

const VersionDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <aside className="fixed top-0 right-0 w-full sm:max-w-md h-full z-50 bg-zinc-900 border-l border-white/10 shadow-lg text-white overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FiClock size={18} />
          Version History
        </h2>
        <button
          onClick={onClose}
          aria-label="Close"
          className="text-gray-400 hover:text-white transition"
        >
          <FiX size={20} />
        </button>
      </div>

      {/* Version List */}
      <div className="px-6 py-6 space-y-4">
        {mockVersions.map((version) => (
          <div
            key={version.id}
            className="p-4 rounded-lg border border-white/10 bg-zinc-800 flex justify-between items-center"
          >
            <div>
              <div className="text-sm font-medium">{version.label}</div>
              <div className="text-xs text-gray-400">{version.timestamp}</div>
            </div>
            <button
              onClick={() => alert(`Reverting to ${version.label}...`)}
              className="text-xs bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-md font-medium transition"
            >
              Revert
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default VersionDrawer;
