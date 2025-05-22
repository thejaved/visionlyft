import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  FiX,
  FiSend,
  FiLoader,
  FiCopy,
  FiPlus,
  FiTrash2,
  FiRefreshCw,
  FiClock,
  FiTerminal,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/ui/Button";

interface HeaderField {
  id: number;
  key: string;
  value: string;
}
interface HistoryItem {
  id: number;
  method: string;
  path: string;
  status: number;
  time: number;
  timestamp: string;
}
interface EndpointPlaygroundProps {
  isOpen: boolean;
  onClose: () => void;
  method: string;
  path: string;
}

const methodColors: Record<string, string> = {
  GET: "bg-green-600",
  POST: "bg-blue-600",
  PUT: "bg-yellow-600",
  PATCH: "bg-yellow-600",
  DELETE: "bg-red-600",
};

const ToolbarButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...props }) => (
  <button
    {...props}
    className={`p-2 rounded bg-zinc-800 hover:bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
      className || ""
    }`}
  >
    {children}
  </button>
);

const StatusBadge: React.FC<{ status: number }> = ({ status }) => {
  const color =
    status < 300
      ? "bg-green-500"
      : status < 400
      ? "bg-yellow-500"
      : "bg-red-500";
  return (
    <span className={`${color} text-xs text-white px-2 py-0.5 rounded`}>
      {status}
    </span>
  );
};

export default function EndpointPlayground({
  isOpen,
  onClose,
  method,
  path,
}: EndpointPlaygroundProps) {
  const [body, setBody] = useState("{");
  const [response, setResponse] = useState<string | null>(null);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [headers, setHeaders] = useState<HeaderField[]>([
    { id: Date.now(), key: "Content-Type", value: "application/json" },
  ]);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("ep_history");
    if (saved) setHistory(JSON.parse(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem("ep_history", JSON.stringify(history));
  }, [history]);

  const filteredHistory = useMemo(
    () => history.filter((h) => h.path.includes(search)),
    [history, search]
  );

  const sendRequest = useCallback(async () => {
    setLoading(true);
    setResponse(null);
    const start = performance.now();
    try {
      const res = await fetch(path, {
        method,
        headers: headers.reduce(
          (acc, h) => (h.key ? { ...acc, [h.key]: h.value } : acc),
          {} as Record<string, string>
        ),
        body: method === "GET" ? undefined : body,
      });
      const data = await res.json();
      const time = Math.round(performance.now() - start);
      setStatusCode(res.status);
      setDuration(time);
      const text = JSON.stringify(data, null, 2);
      setResponse(text);
      setHistory((h) => [
        {
          id: Date.now(),
          method,
          path,
          status: res.status,
          time,
          timestamp: new Date().toLocaleString(),
        },
        ...h,
      ]);
    } catch (err: any) {
      setResponse(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, [path, method, headers, body]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/70"
          onClick={onClose}
        />
        <motion.div
          className="relative z-10 w-full max-w-5xl md:max-w-7xl h-[90vh] bg-zinc-900 rounded-xl shadow-xl overflow-hidden flex flex-col"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-3 border-b border-zinc-700 space-y-2 md:space-y-0">
            <div className="flex items-center gap-2">
              <FiTerminal size={20} className="text-indigo-400" />
              <h2 className="text-lg font-semibold text-gray-100">
                API Playground
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <ToolbarButton onClick={() => setShowHistory((s) => !s)}>
                <FiClock />
              </ToolbarButton>
              <ToolbarButton onClick={onClose}>
                <FiX />
              </ToolbarButton>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
            {/* Request Panel */}
            <div className="w-full md:w-1/3 flex flex-col p-2 md:p-4 overflow-auto">
              <div className="flex justify-between items-center mb-2">
                <h3 className="flex items-center gap-1 text-sm font-medium text-gray-200">
                  <FiSend /> Request
                </h3>
                <span
                  className={`${methodColors[method]} text-xs text-white uppercase px-2 py-0.5 rounded`}
                >
                  {method}
                </span>
              </div>
              <div className="space-y-2 mb-3">
                {headers.map(({ id, key, value }) => (
                  <div key={id} className="flex gap-2 flex-wrap">
                    <input
                      className="flex-1 min-w-[120px] bg-zinc-800 text-sm border border-zinc-700 rounded px-2 py-1 focus:outline-none text-gray-100"
                      placeholder="Header"
                      value={key}
                      onChange={(e) =>
                        setHeaders((h) =>
                          h.map((h2) =>
                            h2.id === id ? { ...h2, key: e.target.value } : h2
                          )
                        )
                      }
                    />
                    <input
                      className="flex-1 min-w-[120px] bg-zinc-800 text-sm border border-zinc-700 rounded px-2 py-1 focus:outline-none text-gray-100"
                      placeholder="Value"
                      value={value}
                      onChange={(e) =>
                        setHeaders((h) =>
                          h.map((h2) =>
                            h2.id === id ? { ...h2, value: e.target.value } : h2
                          )
                        )
                      }
                    />
                    <ToolbarButton
                      onClick={() =>
                        setHeaders((h) => h.filter((x) => x.id !== id))
                      }
                    >
                      <FiTrash2 className="text-red-400" />
                    </ToolbarButton>
                  </div>
                ))}
                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant="primary"
                    onClick={() =>
                      setHeaders((h) => [
                        ...h,
                        { id: Date.now(), key: "", value: "" },
                      ])
                    }
                  >
                    <FiPlus /> Header
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      try {
                        setBody(JSON.stringify(JSON.parse(body), null, 2));
                      } catch {}
                    }}
                  >
                    <FiRefreshCw /> Format
                  </Button>
                  <Button variant="secondary" onClick={() => setBody("")}>
                    Clear
                  </Button>
                </div>
              </div>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="flex-1 bg-zinc-800 font-mono text-sm border border-zinc-700 rounded p-2 focus:outline-none text-gray-100 min-h-[120px] md:min-h-0 resize-none"
              />
              <div className="mt-3 text-right">
                <Button
                  variant="primary"
                  onClick={sendRequest}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <FiLoader className="animate-spin" /> Sending
                    </>
                  ) : (
                    <>
                      <FiSend /> Send
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="hidden md:block w-px bg-zinc-700" />

            {/* Response Panel */}
            <div className="w-full md:w-2/3 flex flex-col p-2 md:p-4 overflow-auto">
              <div className="flex justify-between items-center mb-2">
                <h3 className="flex items-center gap-1 text-sm font-medium text-gray-200">
                  <FiTerminal /> Response
                </h3>
                <div className="flex items-center gap-2">
                  {statusCode != null && <StatusBadge status={statusCode} />}
                  {duration != null && (
                    <span className="text-xs text-gray-400">
                      ({duration}ms)
                    </span>
                  )}
                  <ToolbarButton
                    onClick={() =>
                      response && navigator.clipboard.writeText(response)
                    }
                    disabled={!response}
                  >
                    <FiCopy />
                  </ToolbarButton>
                </div>
              </div>
              <pre className="flex-1 overflow-auto bg-zinc-800 font-mono text-xs p-2 rounded text-green-400 whitespace-pre-wrap break-words">
                {loading ? "Waiting..." : response ?? "No response yet."}
              </pre>
            </div>

            {/* History Sidebar */}
            {showHistory && (
              <motion.div
                className="fixed bottom-0 md:static left-0 md:right-0 h-1/2 md:h-full w-full md:w-80 bg-zinc-900 border-t md:border-t-0 md:border-l border-zinc-700 p-4 flex flex-col"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="flex items-center gap-1 text-lg font-semibold text-gray-100">
                    <FiClock /> History
                  </h3>
                  <ToolbarButton onClick={() => setShowHistory(false)}>
                    <FiX />
                  </ToolbarButton>
                </div>
                <input
                  className="mb-3 w-full bg-zinc-800 text-sm border border-zinc-700 rounded px-2 py-1 focus:outline-none text-gray-100"
                  placeholder="Search path..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="flex-1 overflow-auto space-y-2">
                  {filteredHistory.length === 0 ? (
                    <p className="text-sm text-gray-400">No records</p>
                  ) : (
                    filteredHistory.map((h) => (
                      <div
                        key={h.id}
                        className="p-2 bg-zinc-800 rounded cursor-pointer hover:bg-zinc-700"
                        onClick={() => {
                          setResponse(
                            localStorage.getItem("ep_last_response") || ""
                          );
                          setStatusCode(h.status);
                          setDuration(h.time);
                          setShowHistory(false);
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span
                            className={`${
                              methodColors[h.method] || "bg-gray-600"
                            } text-xs text-white uppercase px-2 py-0.5 rounded`}
                          >
                            {h.method}
                          </span>
                          <span className="text-xs font-mono text-gray-400">
                            {h.timestamp}
                          </span>
                        </div>
                        <p className="text-sm font-mono text-gray-100 truncate">
                          {h.path}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
