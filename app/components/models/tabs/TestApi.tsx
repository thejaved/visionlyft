"use client";
import React, { useState, useEffect } from "react";
import Button from "@/ui/Button";
import { FiChevronDown } from "react-icons/fi";

const methods = ["GET", "POST", "PUT", "DELETE"];

interface TestApiProps {
  model?: { name?: string };
}

const TestApi = ({ model }: TestApiProps) => {
  const modelName = model?.name?.toLowerCase() || "undefined";
  const endpoint = `/api/workspace/${modelName}`;

  const [method, setMethod] = useState("GET");
  const [payload, setPayload] = useState('{\n  "name": "Test Model"\n}');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isJsonValid, setIsJsonValid] = useState(true);

  useEffect(() => {
    if (method === "POST" || method === "PUT") {
      try {
        JSON.parse(payload);
        setIsJsonValid(true);
        setError(null);
      } catch (e) {
        setIsJsonValid(false);
        setError("Invalid JSON format");
      }
    } else {
      setIsJsonValid(true);
      setError(null);
    }
  }, [payload, method]);

  const handleSend = async () => {
    if ((method === "POST" || method === "PUT") && !isJsonValid) return;

    setLoading(true);
    setResponse(null);

    try {
      const mockResponse =
        method === "GET"
          ? { id: "1", name: model?.name, fetched: true }
          : method === "POST"
          ? { success: true, created: true, data: JSON.parse(payload) }
          : method === "PUT"
          ? { success: true, updated: true, data: JSON.parse(payload) }
          : { success: true, deleted: true, id: "1" };

      setTimeout(() => {
        setResponse(JSON.stringify(mockResponse, null, 2));
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-6 pb-24 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="space-y-2">
          <h2 className="text-3xl font-extrabold">Test API</h2>
          <p className="text-sm text-gray-400">
            Interact with your auto-generated endpoint using mock requests.
          </p>
        </header>

        <section className="bg-zinc-900 border border-white/10 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 space-y-6">
            {/* Request Method + URL */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Method Dropdown */}
              <div className="relative w-40">
                <select
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                  className="appearance-none w-full bg-zinc-800 text-white border border-white/10 px-4 py-2 pr-10 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {methods.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
                <FiChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>

              {/* Endpoint Field */}
              <input
                type="text"
                value={endpoint}
                readOnly
                className="flex-1 bg-zinc-800 text-gray-400 px-4 py-2 rounded-md text-sm border border-white/10"
              />
            </div>

            {/* JSON Body Input */}
            {(method === "POST" || method === "PUT") && (
              <div className="relative">
                <label className="text-sm text-gray-300 mb-1 block font-medium">
                  JSON Payload
                </label>
                <textarea
                  value={payload}
                  onChange={(e) => setPayload(e.target.value)}
                  rows={6}
                  spellCheck={false}
                  className={`w-full font-mono bg-zinc-800 text-white text-sm border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                    isJsonValid
                      ? "border-white/10 focus:ring-indigo-500"
                      : "border-red-500 focus:ring-red-500"
                  }`}
                  placeholder={`{
                                  "name": "Test ${model?.name || "Model"}"
                                }`}
                />
                {!isJsonValid && (
                  <p className="text-xs text-red-400 mt-1 absolute right-3 bottom-2">
                    Invalid JSON
                  </p>
                )}
              </div>
            )}

            {/* Submit */}
            <div className="flex justify-end">
              <Button
                onClick={handleSend}
                disabled={
                  loading ||
                  (!isJsonValid && (method === "POST" || method === "PUT"))
                }
              >
                {loading ? "Sending..." : "Send Request"}
              </Button>
            </div>
          </div>
        </section>

        {response && (
          <section className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-zinc-800">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                Mock Response
              </h4>
              <span className="text-xs text-gray-400">200 OK</span>
            </div>
            <div className="bg-zinc-950 overflow-auto max-h-96">
              <pre className="text-sm text-green-400 font-mono p-4 whitespace-pre leading-relaxed min-w-full">
                {response}
              </pre>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default TestApi;
