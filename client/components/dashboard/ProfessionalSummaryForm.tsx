import { Sparkles } from "lucide-react";
import React from "react";

interface ProfessionalSummaryProps {
  data: string;
  onChange: (value: string) => void;
}

const ProfessionalSummaryForm: React.FC<ProfessionalSummaryProps> = ({
  onChange,
  data,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Professional Summary
          </h3>
          <p className="text-sm text-gray-600">
            Add summary for your resume here.
          </p>
        </div>
        <button
          className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200
        transition-colors disabled:opacity-50"
        >
          <Sparkles className="size-4" />
          AI enhance
        </button>
      </div>
      <div className="mt-6">
        <textarea
          rows={7}
          id="professional-summary"
          className="w-full text-sm p-3 px-4 mt-2 border border-gray-200 rounded-lg
        focus:ring focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none resize-none "
          value={data || ""}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          placeholder="Write a compelling summary that highlights your key strengths and career objectives..."
        />
        <p className="text-xs text-gray-500 max-w-4/5 mx-auto text-center">
          <strong>Tip: </strong>Keep it concise (3-4 sentences) and focus on your most relevant
          achievements and skills.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSummaryForm;
