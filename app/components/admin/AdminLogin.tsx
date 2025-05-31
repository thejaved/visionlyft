"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

const LogoPlaceholder: React.FC = () => (
  <div className="w-16 h-16 rounded-full bg-primary/40 flex items-center justify-center">
    <span className="text-white text-2xl font-extrabold">V</span>
  </div>
);

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Both email and password are required.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password, remember }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Login failed.");
      }

      // Optionally store a token here:
      // const data = await response.json();
      // localStorage.setItem("token", data.token);

      router.push("/admin/dashboard");
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] overflow-hidden px-4">
      {/* Simplified Background Blobs */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px]
                   bg-gradient-to-br from-primary/30 to-indigo-800/20
                   rounded-full blur-3xl animate-[spin_20s_linear_infinite]"
      />
      <div
        className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px]
                   bg-indigo-900/20 to-primary/20 via-[#0a0a0a]/0
                   rounded-full blur-3xl"
      />

      {/* Card with Gradient Border */}
      <div className="relative z-10 w-full max-w-md p-px rounded-3xl bg-gradient-to-br from-primary to-indigo-900 shadow-2xl">
        <div className="bg-[#111] rounded-2xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <LogoPlaceholder />
          </div>

          <h2 className="text-3xl font-extrabold text-white mb-1 text-center">
            Admin Login
          </h2>
          <p className="text-gray-400 text-sm mb-6 text-center">
            Sign in to access your Visionlyft dashboard
          </p>

          {error && (
            <div
              className="mb-4 px-4 py-2 bg-red-900 text-red-400 text-sm rounded flex items-center"
              role="alert"
            >
              <span className="mr-2">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-medium mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute inset-y-0 left-3 my-auto text-gray-500" />
                <input
                  id="email"
                  type="email"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@visionlyft.com"
                  className="
                    w-full
                    bg-gray-800 text-gray-100 placeholder-gray-500
                    border border-gray-600 rounded-lg
                    pl-10 pr-4 py-3
                    focus:outline-none focus:ring-2 focus:ring-primary
                    focus:border-transparent
                  "
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-300 text-sm font-medium mb-1"
              >
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute inset-y-0 left-3 my-auto text-gray-500" />
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="
                    w-full
                    bg-gray-800 text-gray-100 placeholder-gray-500
                    border border-gray-600 rounded-lg
                    pl-10 pr-4 py-3
                    focus:outline-none focus:ring-2 focus:ring-primary
                    focus:border-transparent
                  "
                />
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm select-none">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary focus:ring-2"
                />
                <span className="ml-2 text-gray-300">Remember me</span>
              </label>
              <Link
                href="/admin/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full flex justify-center items-center
                px-4 py-3
                text-white font-semibold rounded-lg
                ${
                  loading
                    ? "bg-primary/50 cursor-not-allowed"
                    : "bg-primary hover:bg-[#e22047] hover:shadow-neon hover:scale-105"
                }
                transition transform duration-200 shadow-md
              `}
            >
              {loading && (
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
              )}
              <span>{loading ? "Signing In..." : "Sign In"}</span>
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center text-gray-500 text-sm">
              <span className="border-t border-gray-600 w-16" />
              <span className="px-2">OR</span>
              <span className="border-t border-gray-600 w-16" />
            </div>

            {/* Social Login */}
            <button
              type="button"
              onClick={() => alert("Google sign-in coming soon")}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-lg"
            >
              <FaGoogle className="text-red-500" />
              <span>Sign in with Google</span>
            </button>
          </form>

          {/* Footer Note */}
          <p className="text-center text-xs text-gray-500 mt-6">
            © {new Date().getFullYear()} Visionlyft. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
