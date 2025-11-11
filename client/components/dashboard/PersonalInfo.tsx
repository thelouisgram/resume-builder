import { User } from "lucide-react";
import Image from "next/image";
import React from "react";
import { PersonalInfoProps } from "@/types/dashboard";

interface PersonalInfo {
  data: PersonalInfoProps;
  onChange: (field: keyof PersonalInfoProps, value: string | File) => void;
  removeBackground: boolean;
  setRemoveBackground: (value: boolean) => void;
}

const PersonalInfo: React.FC<PersonalInfo> = ({
  data,
  onChange,
  removeBackground,
  setRemoveBackground,
}) => {
  const handleChange = (
    field: keyof PersonalInfoProps,
    value: string | File
  ) => {
    onChange(field, value);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">
        Personal Information
      </h3>
      <p className="text-sm text-gray-600">
        Get started with the personal information
      </p>
      <div className="flex items-center gap-2">
        <label>
          {data?.image ? (
            <Image
              src={
                typeof data.image === "string"
                  ? data.image
                  : URL.createObjectURL(data.image)
              }
              alt="user-image"
              width={80}
              height={80}
              className="w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80 cursor-pointer"
            />
          ) : (
            <div className="inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer">
              <User className="size-10 p-2.5 border rounded-full" />
              Upload User Image
            </div>
          )}
          <input
            type="file"
            accept="image/jpeg, image/png"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleChange("image", e.target.files[0]);
              }
            }}
          />
        </label>
        {typeof data.image === "object" && data.image && (
          <div className="flex flex-col gap-1 pl-4 text-sm">
            <p>Remove background</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                onChange={() => {
                  setRemoveBackground(!removeBackground);
                }}
                checked={removeBackground}
              />
              <div
                className={`relative w-9 h-5 rounded-full transition-colors duration-200 ${
                  removeBackground ? "bg-green-600" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                    removeBackground ? "translate-x-4" : "translate-x-0"
                  }`}
                ></span>
              </div>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
