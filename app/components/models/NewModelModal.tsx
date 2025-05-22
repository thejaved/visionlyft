"use client";
import React, { useState } from "react";
import { FiX, FiPlus } from "react-icons/fi";
import Button from "@/ui/Button";

type Field = {
  name: string;
  type: string;
  required: boolean;
  defaultValue: string;
};

const fieldTypes = [
  "string",
  "number",
  "boolean",
  "date",
  "enum",
  "array",
  "object",
];

const NewModelModal = ({
  isOpen,
  onClose,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    name: string;
    description: string;
    fields: Field[];
  }) => void;
}) => {
  const [modelName, setModelName] = useState("");
  const [description, setDescription] = useState("");
  const [fields, setFields] = useState<Field[]>([
    { name: "", type: "string", required: false, defaultValue: "" },
  ]);

  if (!isOpen) return null;

  const updateField = <K extends keyof Field>(
    index: number,
    key: K,
    value: Field[K]
  ) => {
    const updated = [...fields];
    updated[index] = { ...updated[index], [key]: value };
    setFields(updated);
  };

  const addField = () => {
    setFields([
      ...fields,
      { name: "", type: "string", required: false, defaultValue: "" },
    ]);
  };

  const removeField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-zinc-900 text-white rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[70vh] p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Create New Model</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Inputs */}
          <div className="grid gap-4">
            <div>
              <label className="text-sm block mb-1 font-medium">
                Model Name
              </label>
              <input
                type="text"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                placeholder="e.g. Product"
                className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm block mb-1 font-medium">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the model purpose"
                rows={3}
                className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-white/10 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Fields */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold mb-4">Fields</h4>
            <div className="space-y-3">
              {fields.map((field, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 bg-zinc-800 border border-white/10 p-4 rounded-lg"
                >
                  <input
                    value={field.name}
                    onChange={(e) => updateField(index, "name", e.target.value)}
                    placeholder="Field name"
                    className="w-full sm:w-1/4 bg-zinc-900 text-white px-4 py-2 text-sm rounded-md border border-white/10 focus:ring-2 focus:ring-indigo-500"
                  />

                  <div className="relative w-full sm:w-1/4">
                    <select
                      value={field.type}
                      onChange={(e) =>
                        updateField(index, "type", e.target.value)
                      }
                      className="appearance-none w-full bg-zinc-900 text-white px-4 py-2 text-sm rounded-md border border-white/10 pr-10 focus:ring-2 focus:ring-indigo-500"
                    >
                      {fieldTypes.map((type) => (
                        <option key={type} value={type}>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  <input
                    value={field.defaultValue}
                    onChange={(e) =>
                      updateField(index, "defaultValue", e.target.value)
                    }
                    placeholder="Default value"
                    className="w-full sm:w-1/4 bg-zinc-900 text-white px-4 py-2 text-sm rounded-md border border-white/10 focus:ring-2 focus:ring-indigo-500"
                  />

                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-2 text-sm text-gray-300">
                      <input
                        type="checkbox"
                        checked={field.required}
                        onChange={(e) =>
                          updateField(index, "required", e.target.checked)
                        }
                        className="accent-indigo-500"
                      />
                      Required
                    </label>
                    <button
                      onClick={() => removeField(index)}
                      className="text-red-400 hover:text-red-500"
                      title="Delete field"
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add Field Button (below scroll) */}
        <div className="px-6 py-4 bg-zinc-900 border-t border-white/10">
          <button
            onClick={addField}
            className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300"
          >
            <FiPlus /> Add Field
          </button>
        </div>

        {/* Sticky Footer */}
        <div className="p-6 border-t border-white/10 flex justify-end gap-3 bg-zinc-900">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onSave({ name: modelName, description, fields });
              onClose();
            }}
            disabled={!modelName.trim()}
          >
            Save Model
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewModelModal;
