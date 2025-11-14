"use client";
import React from "react";
import { Education } from "@/types/dashboard";
import { GraduationCap, Plus, Trash2 } from "lucide-react";

interface EducationFormProps {
  data: Education[];
  onChange: (value: Education[]) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation: Education = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: "",
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (index: number) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateEducation = (
    index: number,
    field: keyof Education,
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
            Education
          </h3>
          <p className="text-sm text-gray-600">
            Add your academic qualifications.
          </p>
        </div>

        <button
          onClick={addEducation}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors"
        >
          <Plus className="size-4" />
          Add Education
        </button>
      </div>

      {/* Education List */}
      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <GraduationCap className="size-12 mx-auto mb-3 text-gray-300" />
          <p>No education added yet.</p>
          <p className="text-sm">
            Click &apos;Add Education&apos; to get started
          </p>
        </div>
      ) : (
        <div className="space-y-6 ">
          {data.map((edu, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3 "
            >
              <div className="flex justify-between items-start">
                <h4>Education #{index + 1}</h4>
                <button
                  onClick={() => removeEducation(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              <div className="w-full grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                  className="w-full p-2 border border-gray-200 rounded text-sm focus:ring focus:ring-green-100 focus:border-green-400 outline-none transition-all"
                />

                <input
                  type="text"
                  placeholder="Degree (e.g., BSc, MSc)"
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  className="w-full p-2 border border-gray-200 rounded text-sm focus:ring focus:ring-green-100 focus:border-green-400 outline-none transition-all"
                />

                <input
                  type="text"
                  placeholder="Field of Study"
                  value={edu.field}
                  onChange={(e) =>
                    updateEducation(index, "field", e.target.value)
                  }
                  className="w-full p-2 border border-gray-200 rounded text-sm focus:ring focus:ring-green-100 focus:border-green-400 outline-none transition-all"
                />

                <input
                  type="month"
                  placeholder="Graduation Date"
                  value={edu.graduation_date}
                  onChange={(e) =>
                    updateEducation(index, "graduation_date", e.target.value)
                  }
                  className="w-full p-2 border border-gray-200 rounded text-sm focus:ring focus:ring-green-100 focus:border-green-400 outline-none transition-all"
                />

                <input
                  type="text"
                  placeholder="GPA (optional)"
                  value={edu.gpa}
                  onChange={(e) =>
                    updateEducation(index, "gpa", e.target.value)
                  }
                  className="w-full p-2 border border-gray-200 rounded text-sm focus:ring focus:ring-green-100 focus:border-green-400 outline-none transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
