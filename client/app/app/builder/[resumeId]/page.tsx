"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { dummyResumeData } from "@/assets/assets";
import { Resume, Experience, Project, Education } from "@/types/dashboard";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  FileText,
  Folder,
  GraduationCap,
  Sparkles,
  User,
} from "lucide-react";
import PersonalInfoForm from "@/components/dashboard/PersonalInfoForm";
import ResumePreview from "@/components/dashboard/ResumePreview";
import TemplateSelector from "@/components/dashboard/TemplateSelector";
import ColorPicker from "@/components/dashboard/ColorPicker";
import ProfessionalSummaryForm from "@/components/dashboard/ProfessionalSummaryForm";
import ExperienceForm from "@/components/dashboard/ExperienceForm";
import ProjectForm from "@/components/dashboard/ProjectForm";
import EducationForm from "@/components/dashboard/EducationForm";
import SkillsForm from "@/components/dashboard/SkillsForm";

const Page = () => {
  const { resumeId } = useParams();

  const [resumeData, setResumeData] = useState<Resume>({
    _id: "",
    userId: "",
    title: "",
    public: false,
    personal_info: {
      full_name: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      website: "",
      profession: "",
      image: "",
    },
    professional_summary: "",
    skills: [],
    experience: [],
    education: [],
    project: [],
    template: "classic",
    accent_color: "#3B8256",
    updatedAt: "",
    createdAt: "",
  });

  const loadExistingData = async () => {
    const resume = dummyResumeData.find((resume) => resume._id === resumeId);
    if (resume) {
      setResumeData({
        ...resume,
        personal_info: {
          ...resume.personal_info,
          image:
            typeof resume.personal_info.image === "string"
              ? resume.personal_info.image
              : resume.personal_info.image?.src ?? "",
        },
      });
      document.title = resume.title;
    }
  };

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const sections = [
    { id: "personal", title: "Personal Info", icon: User },
    { id: "summary", title: "Summary", icon: FileText },
    { id: "experience", title: "Experience", icon: Briefcase },
    { id: "education", title: "Education", icon: GraduationCap },
    { id: "projects", title: "Projects", icon: Folder },
    { id: "skills", title: "Skills", icon: Sparkles },
  ];

  const activeSection = sections[activeSectionIndex];

  useEffect(() => {
    Promise.resolve().then(() => loadExistingData());
  }, []);

  type ObjectKeys<T> = {
    [K in keyof T]: T[K] extends object ? K : never;
  }[keyof T];

  const handleChange = <T extends ObjectKeys<Resume>>(
    section: T,
    field: keyof Resume[T],
    value: string | File
  ) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] as object),
        [field]: value,
      },
    }));
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          href="/app"
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 
          transition-colors"
        >
          <ArrowLeft className="size-4" /> Back to Dashboard
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left panel - Form */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
              {/* Progress bar using activeSectionIndex */}
              <hr className="absolute top-0 left-0 right-0 border-2 border-gray-200" />
              <hr
                className="absolute top-0 left-0 h-1 bg-linear-to-r from-green-500 to-green-600 
                border-none transition-all duration-300"
                style={{
                  width: `${
                    (activeSectionIndex / (sections.length - 1)) * 100
                  }%`,
                }}
              />
              {/* Section navigation */}
              <div className="flex justify-between items-center mb-6 border-b  border-gray-300 py-1">
                <div className="flex items-center gap-2">
                  <TemplateSelector
                    selectedTemplate={resumeData.template}
                    onChange={(template) => {
                      setResumeData((prev) => ({ ...prev, template }));
                    }}
                  />
                  <ColorPicker
                    selectedColor={resumeData.accent_color}
                    onChange={(accent_color) => {
                      setResumeData((prev) => ({ ...prev, accent_color }));
                    }}
                  />
                </div>
                <div className="flex items-center">
                  {activeSectionIndex > 0 && (
                    <button
                      onClick={() =>
                        setActiveSectionIndex((prev) => Math.max(prev - 1, 0))
                      }
                      className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium
                      text-gray-600 hover:bg-gray-50 transition-all"
                    >
                      <ChevronLeft className="size-4" /> Previous
                    </button>
                  )}
                  {activeSectionIndex < sections.length - 1 && (
                    <button
                      onClick={() =>
                        setActiveSectionIndex((prev) =>
                          Math.min(prev + 1, sections.length - 1)
                        )
                      }
                      className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium
                    text-gray-600 hover:bg-gray-50 transition-all"
                    >
                      Next
                      <ChevronRight className="size-4" />
                    </button>
                  )}
                </div>
              </div>
              {/* Form Content */}
              <div className="space-y-6">
                {activeSection.id === "personal" && (
                  <PersonalInfoForm
                    data={resumeData.personal_info}
                    onChange={(field, value) =>
                      handleChange("personal_info", field, value)
                    }
                    removeBackground={removeBackground}
                    setRemoveBackground={setRemoveBackground}
                  />
                )}
                {activeSection.id === "summary" && (
                  <ProfessionalSummaryForm
                    data={resumeData.professional_summary}
                    onChange={(value: string) =>
                      setResumeData((prev) => ({
                        ...prev,
                        professional_summary: value as string,
                      }))
                    }
                  />
                )}
                {activeSection.id === "experience" && (
                  <ExperienceForm
                    data={resumeData.experience}
                    onChange={(value: Experience[]) =>
                      setResumeData((prev) => ({
                        ...prev,
                        experience: value,
                      }))
                    }
                  />
                )}
                {activeSection.id === "education" && (
                  <EducationForm
                    data={resumeData.education}
                    onChange={(value: Education[]) =>
                      setResumeData((prev) => ({
                        ...prev,
                        education: value,
                      }))
                    }
                  />
                )}
                {activeSection.id === "projects" && (
                  <ProjectForm
                    data={resumeData.project}
                    onChange={(value: Project[]) =>
                      setResumeData((prev) => ({
                        ...prev,
                        project: value,
                      }))
                    }
                  />
                )}
                {activeSection.id === "skills" && (
                  <SkillsForm
                    data={resumeData.skills}
                    onChange={(value: string[]) =>
                      setResumeData((prev) => ({
                        ...prev,
                        skills: value, 
                      }))
                    }
                  />
                )}
              </div>
              <button className="bg-linear-to-br from-green-100 to-green-200 ring-green-300
              text-green-600 ring hover:ring-green-400 rounded-md transition-all px-6 py-2 mt-6 text-sm">
                Save changes
              </button>
            </div>
          </div>
          {/* Right panel - preview */}
          <div className="lg:col-span-7 max-lg:mt-6">
            <div className="">{/* - - - buttons - - - */}</div>
            <div className="">
              <ResumePreview
                data={resumeData}
                accentColor={resumeData.accent_color}
                template={resumeData.template}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
