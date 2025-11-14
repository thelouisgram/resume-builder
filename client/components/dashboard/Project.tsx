"use client";
import React from "react";
import { ProjectProps } from "@/types/dashboard";
import { Folder, Plus, Trash2 } from "lucide-react";

interface ProjectFormProps {
  data: ProjectProps[];
  onChange: (value: ProjectProps[]) => void;
}

const Project: React.FC<ProjectFormProps> = ({ data, onChange }) => {
  const addProject = () => {
    const newProject: ProjectProps = {
      name: "",
      type: "",
      description: "",
    };
    onChange([...data, newProject]);
  };

  const removeProject = (index: number) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateProject = (
    index: number,
    field: keyof ProjectProps,
    value: string
  ) => {
    const updated = [...data];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    onChange(updated);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Projects
          </h3>
          <p className="text-sm text-gray-600">
            Add completed or ongoing projects.
          </p>
        </div>

        <button
          onClick={addProject}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
        >
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

      {/* Projects List */}
      {data.length === 0 ? (
       <div className="text-center py-8 text-gray-500">
          <Folder className="size-12 mx-auto mb-3 text-gray-300" />
          <p>No project added yet.</p>
          <p className="text-sm">
            Click &apos;Add Project&lsquo; to get started
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {data.map((project, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between items-start">
                <h4>Project #{index + 1}</h4>
                <button
                  onClick={() => {
                    removeProject(index);
                  }}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Project Name"
                    value={project.name}
                    onChange={(e) =>
                      updateProject(index, "name", e.target.value)
                    }
                    className="w-full p-2 border border-gray-200 rounded mb-2 text-sm focus:ring focus:ring-green-100 focus:border-green-400 outline-none transition-all"
                  />

                  <input
                    type="text"
                    placeholder="Project Type (e.g., Web App, Research, etc.)"
                    value={project.type}
                    onChange={(e) =>
                      updateProject(index, "type", e.target.value)
                    }
                    className="w-full p-2 border border-gray-200 rounded mb-2 text-sm focus:ring focus:ring-green-100 focus:border-green-400 outline-none transition-all"
                  />

                  <textarea
                    placeholder="Project Description"
                    value={project.description}
                    onChange={(e) =>
                      updateProject(index, "description", e.target.value)
                    }
                    className="w-full p-2 border border-gray-200 rounded text-sm focus:ring focus:ring-green-100 focus:border-green-400 outline-none transition-all"
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
