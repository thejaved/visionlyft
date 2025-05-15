import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] flex items-center justify-center px-4 py-10 text-white">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-xl p-8 ring-1 ring-white/10 hover:ring-2 hover:ring-blue-600 transition">
        <h2 className="text-2xl font-extrabold text-center mb-6 tracking-tight">
          Welcome back to Visionlyft
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md bg-black/30 text-white border border-white/10 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 p-2 text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md bg-black/30 text-white border border-white/10 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 p-2 text-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold rounded-md shadow-md hover:scale-105 transition-transform"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
