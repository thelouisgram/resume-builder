import { Plus, Sparkles, X } from "lucide-react";
import React, { useState } from "react";

interface SkillsFormProps {
  data: string[];
  onChange: (value: string[]) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    const skill = newSkill.trim();
    if (skill && !data.includes(skill)) {
      onChange([...data, skill]);
      setNewSkill("");
    }
  };

  const removeSkill = (index: number) => {
  onChange(data.filter((_, i) => i !== index));
};


  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="space-y-4">
      <div className="">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          Skills
        </h3>
        <p className="text-sm text-gray-600">
          Add your soft Technical skills here
        </p>
      </div>
      <div className="flex gap-2 ">
        <input
          type="text"
          placeholder="Enter a skill (e.g., Javascript, Project Management "
          className="flex-1 px-3 py-2 text-sm"
          onChange={(e) => {
            setNewSkill(e.target.value);
          }}
          onKeyDown={(e) => {
            handleKeyPress(e);
          }}
          value={newSkill}
        />
        <button
          onClick={addSkill}
          disabled={!newSkill.trim()}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg
        hover:bg-blue-700 transition-colors disabled:cursor-not-allowed"
        >
          <Plus className="size-4" />
          Add
        </button>
      </div>
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {data.map((skill, index:number) => {
            return <span key={index} className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800
            rounded-full text-sm">
                {skill}
                <button onClick={()=>{removeSkill(index)}} className="ml-1 hover:bg-blue-200 rounded-full
                p-0.5 transition-colors">
                  <X className="size-4" />
                </button>
            </span>;
          })}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <Sparkles className="size-12 mx-auto mb-3 text-gray-300" />
          <p>No skill added yet.</p>
          <p className="text-sm">
            Add your technical and soft skills above.
          </p>
        </div>
      )}
      <div className="p-3 bg-blue-50 rounded-md">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Add 8-12 relevant skills. Include both technical
          (programming languages, tools) and soft skills (leadership, communication).
        </p>
      </div>
    </div>
  );
};

export default SkillsForm;
