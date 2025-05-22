"use client";
import { useRouter } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ModelGridView from "@/components/models/ModelGridView";
import NewModelModal from "@/components/models/NewModelModal";
import React, { useState, useEffect, useCallback } from "react";
import HeroSection from "@/app/components/common/HeroSection";
import Button from "@/app/components/ui/Button";
import { FiPlus, FiSettings } from "react-icons/fi";

export interface Field {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
}

export interface Model {
  name: string;
  description?: string;
  fields: Field[];
  updated: string;
  endpoint: string;
}

const LOCAL_STORAGE_KEY = "visionlyft-models";

const DEFAULT_MODELS: Model[] = [
  {
    name: "User",
    fields: [
      { name: "id", type: "string", required: true },
      { name: "email", type: "string", required: true },
      { name: "role", type: "string", required: false },
      { name: "createdAt", type: "date", required: false },
      { name: "updatedAt", type: "date", required: false },
      { name: "active", type: "boolean", required: true },
    ],
    updated: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    endpoint: "/api/workspace/user",
  },
  {
    name: "Product",
    fields: Array(9).fill({ name: "field", type: "string", required: false }),
    updated: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    endpoint: "/api/workspace/product",
  },
  {
    name: "Order",
    fields: Array(7).fill({
      name: "orderField",
      type: "string",
      required: true,
    }),
    updated: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    endpoint: "/api/workspace/order",
  },
];

const ModelsPage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [models, setModels] = useState<Model[] | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : DEFAULT_MODELS;
        setModels(Array.isArray(parsed) ? parsed : DEFAULT_MODELS);
      } catch (err) {
        console.warn("Error loading models from storage:", err);
        setModels(DEFAULT_MODELS);
      }
    }
  }, []);

  useEffect(() => {
    if (models) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(models));
    }
  }, [models]);

  const handleEdit = useCallback(
    (name: string) => router.push(`/models/${name.toLowerCase()}?tab=Fields`),
    [router]
  );

  const handleDelete = useCallback(
    (name: string) =>
      setModels((prev) => prev?.filter((model) => model.name !== name) ?? []),
    []
  );

  const handleViewDocs = useCallback(
    (name: string) =>
      router.push(`/models/${name.toLowerCase()}?tab=Docs+Preview`),
    [router]
  );

  const handleSave = useCallback(
    (data: { name: string; description: string; fields: Field[] }) => {
      const now = new Date().toISOString();
      setModels((prev) => [
        ...(prev || []),
        {
          name: data.name,
          description: data.description,
          fields: data.fields,
          updated: now,
          endpoint: `/api/workspace/${data.name.toLowerCase()}`,
        },
      ]);
    },
    []
  );

  if (models === null) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const modelsWithHandlers = models.map((model) => ({
    ...model,
    fieldsCount: model.fields.length,
    onEdit: () => handleEdit(model.name),
    onDelete: () => handleDelete(model.name),
    onViewDocs: () => handleViewDocs(model.name),
  }));

  return (
    <>
      <Header />

      <HeroSection
        title="Manage Your Data Models Effortlessly"
        description="Define schemas visually and auto-generate APIs, docs, and endpoints.
          No backend setup needed—just plug and build with Visionlyft."
        buttons={
          <>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              <FiPlus size={16} />
              Create Model
            </Button>
            <Button
              variant="secondary"
              className="group flex items-center gap-2 px-6 py-2 text-sm relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition duration-500" />
              <FiSettings size={16} />
              Settings
            </Button>
          </>
        }
      />
      <ModelGridView models={modelsWithHandlers} />
      <NewModelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
      <Footer />
    </>
  );
};

export default ModelsPage;
