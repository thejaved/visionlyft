"use client";

import React, { useState, useMemo } from "react";
import { FiBookOpen, FiRefreshCw } from "react-icons/fi";

import Button from "@/components/ui/Button";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/common/HeroSection";
import RateLimitPanel from "@/components/endpoint/RateLimitPanel";
import EndpointPlayground from "@/components/endpoint/EndpointPlayground";
import SwaggerDocsSection from "@/components/endpoint/SwaggerDocsSection";
import AdvancedToolsPanel from "@/components/endpoint/AdvancedToolsPanel";
import EndpointTable, { Endpoint } from "@/components/endpoint/EndpointTable";
import FilterSearchBar, { Filter } from "@/components/endpoint/FilterSearchBar";

const allEndpoints: Endpoint[] = [
  { method: "GET", path: "/api/users", model: "User", auth: true },
  { method: "POST", path: "/api/orders", model: "Order", auth: true },
  { method: "DELETE", path: "/api/products/:id", model: "Product", auth: true },
];

export default function EndpointsPage() {
  const [filters, setFilters] = useState<Filter>({
    method: "All",
    model: "",
    auth: "All",
    search: "",
  });

  const [playgroundOpen, setPlaygroundOpen] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint | null>(
    null
  );

  const filtered = useMemo(() => {
    return allEndpoints.filter((ep) => {
      if (filters.method !== "All" && ep.method !== filters.method)
        return false;
      if (filters.auth !== "All") {
        const wantsProtected = filters.auth === "Protected";
        if (ep.auth !== wantsProtected) return false;
      }
      if (
        filters.model &&
        !ep.model.toLowerCase().includes(filters.model.toLowerCase())
      )
        return false;
      if (
        filters.search &&
        !ep.path.toLowerCase().includes(filters.search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [filters]);

  const openPlayground = (ep: Endpoint) => {
    setSelectedEndpoint(ep);
    setPlaygroundOpen(true);
  };

  return (
    <>
      <Header />

      <HeroSection
        title="API Endpoints"
        description="Auto-generated REST endpoints for your data models. Use them instantly in any app."
        buttons={
          <>
            <Button
              variant="secondary"
              onClick={() => console.log("Sync Models")}
            >
              <FiRefreshCw size={16} />
              Sync Models
            </Button>
            <Button
              variant="primary"
              onClick={() => console.log("View Global Docs")}
            >
              <FiBookOpen size={16} />
              View Global Docs
            </Button>
          </>
        }
      />

      <FilterSearchBar onFilterChange={setFilters} />

      <EndpointTable
        endpoints={filtered}
        onTry={openPlayground}
        onRefresh={(ep) => console.log("Refresh", ep)}
        onDocs={(ep) => console.log("Docs", ep)}
      />

      <SwaggerDocsSection />
      <RateLimitPanel />
      <AdvancedToolsPanel />

      <EndpointPlayground
        isOpen={playgroundOpen}
        onClose={() => setPlaygroundOpen(false)}
        method={selectedEndpoint?.method || "GET"}
        path={selectedEndpoint?.path || "/"}
      />

      <Footer />
    </>
  );
}
