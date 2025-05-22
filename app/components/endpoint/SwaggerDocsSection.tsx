"use client";

import React, { memo } from "react";
import Button from "@/ui/Button";
import { FiBookOpen } from "react-icons/fi";

const SwaggerDocsSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white px-4 md:px-6 lg:px-8 py-16 md:py-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Auto-Generated Swagger/OpenAPI Docs
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
          This API is fully documented and OpenAPI-compliant. Explore all
          endpoints, request/response schemas, and test them interactively in
          the live documentation.
        </p>
        <div>
          <Button
            variant="primary"
            onClick={() => {
              window.open("/api/docs", "_blank");
            }}
            className="inline-flex items-center gap-2 mt-4"
            aria-label="View Full API Docs"
          >
            <FiBookOpen size={18} />
            <span className="text-sm sm:text-base">View Full API Docs</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default memo(SwaggerDocsSection);
