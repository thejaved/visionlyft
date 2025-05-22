"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";

type Method = "All" | "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type Auth = "All" | "Protected" | "Public";

export interface Filter {
  method: Method;
  model: string;
  auth: Auth;
  search: string;
}

interface Props {
  onFilterChange: (filters: Filter) => void;
}

const methods: Method[] = ["All", "GET", "POST", "PUT", "PATCH", "DELETE"];
const authOptions: Auth[] = ["All", "Protected", "Public"];

const selectStyles =
  "w-full appearance-none bg-zinc-800 text-sm text-white border border-white/10 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500";
const inputStyles =
  "w-full bg-zinc-800 text-sm text-white border border-white/10 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";
const buttonStyles =
  "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow transition";

const FilterSearchBar: React.FC<Props> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<Filter>({
    method: "All",
    model: "",
    auth: "All",
    search: "",
  });

  const updateFilter = useCallback(
    (key: keyof Filter, value: Filter[keyof Filter]) => {
      setFilters((prev) => {
        const next = { ...prev, [key]: value };
        onFilterChange(next);
        return next;
      });
    },
    [onFilterChange]
  );

  // Submit on Enter in search
  const onSearchKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onFilterChange(filters);
      }
    },
    [filters, onFilterChange]
  );

  return (
    <div className="w-full bg-zinc-950 border-b border-white/10 px-4 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {/* Method */}
        <div className="relative">
          <label className="sr-only" htmlFor="method-select">
            Method
          </label>
          <select
            id="method-select"
            className={selectStyles}
            value={filters.method}
            onChange={(e) => updateFilter("method", e.target.value as Method)}
          >
            {methods.map((m) => (
              <option key={m} value={m}>
                {m === "All" ? "All Methods" : m}
              </option>
            ))}
          </select>
          <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Model */}
        <div>
          <label className="sr-only" htmlFor="model-input">
            Model
          </label>
          <input
            id="model-input"
            type="text"
            placeholder="Filter by model"
            className={inputStyles}
            value={filters.model}
            onChange={(e) => updateFilter("model", e.target.value)}
          />
        </div>

        {/* Auth */}
        <div className="relative">
          <label className="sr-only" htmlFor="auth-select">
            Auth
          </label>
          <select
            id="auth-select"
            className={selectStyles}
            value={filters.auth}
            onChange={(e) => updateFilter("auth", e.target.value as Auth)}
          >
            {authOptions.map((a) => (
              <option key={a} value={a}>
                {a === "All" ? "All Auth" : a}
              </option>
            ))}
          </select>
          <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Search + Button */}
        <div className="sm:col-span-2 flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <label className="sr-only" htmlFor="search-input">
              Search Path
            </label>
            <input
              id="search-input"
              type="text"
              placeholder="Search path…"
              className={inputStyles + " pr-10"}
              value={filters.search}
              onChange={(e) => updateFilter("search", e.target.value)}
              onKeyDown={onSearchKey}
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <button
            type="button"
            className={buttonStyles}
            onClick={() => onFilterChange(filters)}
          >
            <FiSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(FilterSearchBar);
