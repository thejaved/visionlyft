"use client";
import React, { useEffect, useState } from "react";
import TestApi from "@/components/models/tabs/TestApi";
import { useRouter, useSearchParams } from "next/navigation";
import DocsPreview from "@/components/models/tabs/DocsPreview";
import ModelFieldEditor from "@/components/models/tabs/ModelFieldEditor";

const tabs = ["Fields", "Docs Preview", "Test API"];

interface ModelTabsProps {
  initialTab?: string;
  model?: any;
}

const ModelTabs = ({ initialTab = "Fields", model }: ModelTabsProps) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentTab = searchParams.get("tab");
    if (currentTab && tabs.includes(currentTab)) {
      setActiveTab(currentTab);
    }
  }, [searchParams]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="w-full bg-black text-white border-t border-white/10">
      {/* Tab Header */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex gap-6 border-b border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`relative text-sm font-medium pb-2 transition-colors ${
              activeTab === tab
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-indigo-500 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {activeTab === "Fields" && <ModelFieldEditor model={model} />}
        {activeTab === "Docs Preview" && <DocsPreview model={model} />}
        {activeTab === "Test API" && <TestApi model={model} />}
      </div>
    </div>
  );
};

export default ModelTabs;
