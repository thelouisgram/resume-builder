import React from "react";
import { ExperienceProps } from "@/types/dashboard";
import { Briefcase, Plus, Sparkles, Trash2 } from "lucide-react";

interface ExperienceForm {
  data: ExperienceProps[];
  onChange: (value: ExperienceProps[]) => void;
}

const Experience: React.FC<ExperienceForm> = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience: ExperienceProps = {
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      description: "",
      is_current: false,
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (index: number) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateExperience = (
    index: number,
    field: string,
    value: string | boolean
  ) => {
    const updated = [...data];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Professional Experience
          </h3>
          <p className="text-sm text-gray-600">Add your work experience</p>
        </div>
        <button
          onClick={addExperience}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200
        transition-colors disabled:opacity-50"
        >
          <Plus className="size-4" />
          Add Experience
        </button>
      </div>
      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Briefcase className="size-12 mx-auto mb-3 text-gray-300" />
          <p>No experience added yet.</p>
          <p className="text-sm">
            Click &apos;Add Experience&lsquo; to get started
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((exp, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between items-start">
                <h4>Experience #{index + 1}</h4>
                <button
                  onClick={() => {
                    removeExperience(index);
                  }}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={exp.company || ""}
                  onChange={(e) =>
                    updateExperience(index, "company", e.target.value)
                  }
                  placeholder="Company"
                  className="px-3 py-2 text-sm rounded-lg"
                />
                <input
                  type="text"
                  value={exp.position || ""}
                  onChange={(e) =>
                    updateExperience(index, "position", e.target.value)
                  }
                  placeholder="Position"
                  className="px-3 py-2 text-sm rounded-lg"
                />
                <input
                  type="month"
                  value={exp.start_date || ""}
                  onChange={(e) =>
                    updateExperience(index, "start_date", e.target.value)
                  }
                  placeholder="Start Date"
                  className="px-3 py-2 text-sm rounded-lg"
                />
                <input
                  type="month"
                  value={exp.end_date || ""}
                  onChange={(e) =>
                    updateExperience(index, "end_date", e.target.value)
                  }
                  placeholder="End Date"
                  className="px-3 py-2 text-sm rounded-lg disabled:bg-gray-100"
                  disabled={exp.is_current}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor={`current-${index}`}
                  className="flex gap-2"
                >
                  <input
                    type="checkbox"
                    checked={exp.is_current}
                    onChange={(e) =>
                      updateExperience(
                        index,
                        "is_current",
                        e.target.checked ? true : false
                      )
                    }
                    id={`current-${index}`}
                    className="rounded-lg border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-shadow-gray-700">
                    Currently Working Here
                  </span>
                </label>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-gray-700">
                      Job Description
                    </label>
                    <button
                      className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200
                            transition-colors disabled:opacity-50"
                    >
                      <Sparkles className="size-4" />
                      AI enhance
                    </button>
                  </div>
                  <textarea
                    value={exp.description || ""}
                    onChange={(e) =>
                      updateExperience(index, "description", e.target.value)
                    }
                    placeholder="Description"
                    className="w-full px-3 py-2 text-sm rounded-lg md:col-span-2"
                    rows={5}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
