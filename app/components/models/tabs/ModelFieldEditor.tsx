"use client";
import React, { useEffect, useState } from "react";
import { FiTrash2, FiPlus } from "react-icons/fi";
import Button from "@/ui/Button";

const fieldTypes = [
  "string",
  "number",
  "boolean",
  "date",
  "enum",
  "array",
  "object",
];

type Field = {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
};

const LOCAL_STORAGE_KEY = "visionlyft-models";

const ModelFieldEditor = ({ model }: { model?: any }) => {
  const [fields, setFields] = useState<Field[]>([]);

  useEffect(() => {
    if (!model) return;

    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return;

    try {
      const models = JSON.parse(raw);
      const match = models.find(
        (m: any) => m.name.toLowerCase() === model.name.toLowerCase()
      );
      if (match?.fields) {
        setFields(match.fields);
      }
    } catch (err) {
      console.warn("Invalid models format:", err);
    }
  }, [model]);

  const updateField = <K extends keyof Field>(
    index: number,
    key: K,
    value: Field[K]
  ) => {
    const updated = [...fields];
    updated[index][key] = value;
    setFields(updated);
  };

  const addField = () => {
    setFields((prev) => [
      ...prev,
      { name: "", type: "string", required: false, defaultValue: "" },
    ]);
  };

  const removeField = (index: number) => {
    setFields((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw || !model?.name) return;

    try {
      const models = JSON.parse(raw);
      const updatedModels = models.map((m: any) =>
        m.name.toLowerCase() === model.name.toLowerCase() ? { ...m, fields } : m
      );

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedModels));
      alert("Schema updated in model.");
    } catch (err) {
      console.error("Failed to save schema:", err);
    }
  };

  return (
    <div className="w-full px-6 pb-24 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-xl font-bold">Schema Editor</h2>

        {fields.map((field, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center bg-zinc-900 border border-white/10 rounded-lg p-4"
          >
            <input
              type="text"
              value={field.name}
              onChange={(e) => updateField(index, "name", e.target.value)}
              placeholder="Field name"
              className="bg-zinc-800 px-3 py-2 rounded-md text-sm border border-white/10 w-full"
            />

            <select
              value={field.type}
              onChange={(e) => updateField(index, "type", e.target.value)}
              className="bg-zinc-800 px-3 py-2 rounded-md text-sm border border-white/10 w-full"
            >
              {fieldTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={field.defaultValue || ""}
              onChange={(e) =>
                updateField(index, "defaultValue", e.target.value)
              }
              placeholder="Default value"
              className="bg-zinc-800 px-3 py-2 rounded-md text-sm border border-white/10 w-full"
            />

            <label className="inline-flex items-center text-sm">
              <input
                type="checkbox"
                checked={field.required}
                onChange={(e) =>
                  updateField(index, "required", e.target.checked)
                }
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2 text-gray-300">Required</span>
            </label>

            <button
              onClick={() => removeField(index)}
              aria-label="Delete field"
              className="text-red-400 hover:text-red-600 transition"
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        ))}

        <div className="flex justify-between pt-6">
          <Button
            variant="secondary"
            onClick={addField}
            className="flex items-center gap-2"
          >
            <FiPlus size={16} />
            Add Field
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Schema
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModelFieldEditor;
