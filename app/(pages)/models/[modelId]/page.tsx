"use client";
import React, { useEffect, useState } from "react";
import ModelTabs from "@/components/models/ModelTabs";
import { useParams, useSearchParams } from "next/navigation";
import VersionDrawer from "@/components/models/VersionDrawer";
import ModelDetailHeader from "@/components/models/ModelDetailHeader";
import Link from "next/link";

const LOCAL_STORAGE_KEY = "visionlyft-models";

const ModelDetailPage = () => {
  const { modelId } = useParams();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "fields";

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [model, setModel] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored && modelId) {
      const allModels = JSON.parse(stored);
      const found = allModels.find(
        (m: any) => m.name.toLowerCase() === modelId
      );
      if (found) {
        setModel(found);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    } else {
      setNotFound(true);
    }
  }, [modelId]);

  if (notFound) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Model Not Found</h1>
        <p className="text-gray-400 mb-6">
          The model you're looking for does not exist or has been removed.
        </p>
        <Link
          href="/models"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm transition"
        >
          ← Back to Models
        </Link>
      </div>
    );
  }

  return (
    <>
      <ModelDetailHeader
        modelName={model?.name || "Untitled Model"}
        updated={model?.updated}
        onOpenVersions={() => setDrawerOpen(true)}
      />
      <ModelTabs initialTab={tab} model={model} />
      <VersionDrawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
};

export default ModelDetailPage;
