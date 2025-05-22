"use client";

import React, { memo } from "react";
import {
  FiPlayCircle,
  FiRefreshCw,
  FiBookOpen,
  FiLock,
  FiUnlock,
} from "react-icons/fi";
import { motion } from "framer-motion";

export interface Endpoint {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  model: string;
  auth: boolean;
}

interface Props {
  endpoints: Endpoint[];
  onTry: (ep: Endpoint) => void;
  onRefresh: (ep: Endpoint) => void;
  onDocs: (ep: Endpoint) => void;
}

const methodColors: Record<Endpoint["method"], string> = {
  GET: "bg-green-600",
  POST: "bg-blue-600",
  PUT: "bg-yellow-600",
  PATCH: "bg-yellow-600",
  DELETE: "bg-red-600",
};

const ActionButton: React.FC<{
  label: string;
  onClick: () => void;
  icon: React.ReactNode;
  colorClass: string;
}> = ({ label, onClick, icon, colorClass }) => (
  <button
    onClick={onClick}
    aria-label={label}
    title={label}
    className={`${colorClass}/10 hover:${colorClass}/20 p-2 rounded-lg transition`}
  >
    {icon}
  </button>
);

const EndpointTable: React.FC<Props> = ({
  endpoints,
  onTry,
  onRefresh,
  onDocs,
}) => (
  <section className="w-full px-4 py-12 bg-black text-white">
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          API Endpoints
        </h2>
        <p className="text-sm text-gray-400">
          Quickly test and integrate auto-generated REST endpoints.
        </p>
      </header>

      {/* Mobile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {endpoints.map((ep) => {
          const key = `${ep.method}-${ep.path}`;
          return (
            <div
              key={key}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-4 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span
                    className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${
                      methodColors[ep.method]
                    }`}
                  >
                    {ep.method}
                  </span>
                  <code className="font-mono text-indigo-300 truncate">
                    {ep.path}
                  </code>
                </div>
                <div className="flex items-center text-sm space-x-2">
                  <span>{ep.model}</span>
                  <span className="text-gray-500">•</span>
                  {ep.auth ? (
                    <span className="inline-flex items-center gap-1 text-green-400">
                      <FiLock size={12} /> Auth
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-gray-400">
                      <FiUnlock size={12} /> Public
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4 flex space-x-2 justify-end">
                <ActionButton
                  label="Try"
                  onClick={() => onTry(ep)}
                  icon={<FiPlayCircle size={20} />}
                  colorClass="bg-indigo-500"
                />
                <ActionButton
                  label="Refresh"
                  onClick={() => onRefresh(ep)}
                  icon={<FiRefreshCw size={20} />}
                  colorClass="bg-yellow-500"
                />
                <ActionButton
                  label="Docs"
                  onClick={() => onDocs(ep)}
                  icon={<FiBookOpen size={20} />}
                  colorClass="bg-blue-500"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-2xl shadow-2xl border border-white/10 bg-zinc-900">
        <table className="min-w-full divide-y divide-white/20">
          <thead className="sticky top-0 bg-zinc-900 text-gray-400 text-xs uppercase">
            <tr>
              <th className="px-6 py-3 text-left">Method</th>
              <th className="px-6 py-3 text-left">Path</th>
              <th className="px-6 py-3 text-left">Model</th>
              <th className="px-6 py-3 text-left">Auth</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-zinc-900 divide-y divide-white/10">
            {endpoints.map((ep) => {
              const key = `${ep.method}-${ep.path}`;
              return (
                <motion.tr
                  key={key}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.1 }}
                  className="border-t border-white/10"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                        methodColors[ep.method]
                      }`}
                    >
                      {ep.method}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-indigo-300 whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {ep.path}
                  </td>
                  <td className="px-6 py-4 text-white/90 whitespace-nowrap">
                    {ep.model}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {ep.auth ? (
                      <span className="inline-flex items-center gap-1 text-green-400">
                        <FiLock size={14} /> Auth
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-gray-400">
                        <FiUnlock size={14} /> Public
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap space-x-2">
                    <ActionButton
                      label="Try"
                      onClick={() => onTry(ep)}
                      icon={<FiPlayCircle size={18} />}
                      colorClass="bg-indigo-500"
                    />
                    <ActionButton
                      label="Refresh"
                      onClick={() => onRefresh(ep)}
                      icon={<FiRefreshCw size={18} />}
                      colorClass="bg-yellow-500"
                    />
                    <ActionButton
                      label="Docs"
                      onClick={() => onDocs(ep)}
                      icon={<FiBookOpen size={18} />}
                      colorClass="bg-blue-500"
                    />
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default memo(EndpointTable);
