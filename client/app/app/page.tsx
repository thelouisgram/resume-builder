"use client";
import {
  FilePenLineIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloudIcon,
  XIcon,
} from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { dummyResumeData } from "@/assets/assets";
import { useRouter } from "next/navigation";
import { Resume, ResumeData } from '@/types/dashboard'

type ModalType = "create" | "upload" | "edit" | null;

interface ModalState {
  type: ModalType;
  resumeId?: string;
}

// Constants
const RESUME_COLORS = ["#9333EA", "#d97706", "#dc2626", "#0284c7", "#16a34a"] as const;

const Page = () => {
  const router = useRouter();

  // State management
  const [allResumes, setAllResumes] = useState<ResumeData>([]);
  const [modalState, setModalState] = useState<ModalState>({ type: null });
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  // API functions
  const loadAllResumes = async (): Promise<ResumeData> => {
    // Simulate API call and convert StaticImageData to string
    return dummyResumeData.map(resume => ({
      ...resume,
      personal_info: {
        ...resume.personal_info,
        image: resume.personal_info.image.src
      }
    }));
  };

  // Load resumes on mount
  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const data = await loadAllResumes();
        setAllResumes(data);
      } catch (err) {
        console.error("Failed to load resumes:", err);
      }
    };

    fetchResumes();
  }, []);

  // Modal handlers
  const openModal = useCallback((type: ModalType, resumeId?: string) => {
    setModalState({ type, resumeId });
    if (type === "edit" && resumeId) {
      const resume = allResumes.find((r) => r._id === resumeId);
      if (resume) setTitle(resume.title);
    }
  }, [allResumes]);

  const closeModal = useCallback(() => {
    setModalState({ type: null });
    setTitle("");
    setResume(null);
  }, []);

  // Resume actions
  const createResume = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
    router.push("/app/builder/res123");
  }, [router, closeModal]);

  const uploadResume = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
    router.push("/app/builder/res234");
  }, [router, closeModal]);

  const editResumeTitle = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!modalState.resumeId) return;

    setAllResumes((prev) =>
      prev.map((r) =>
        r._id === modalState.resumeId ? { ...r, title, updatedAt: new Date().toISOString() } : r
      )
    );
    closeModal();
  }, [modalState.resumeId, title, closeModal]);

  const deleteResume = useCallback(async (resumeId: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this resume?");
    if (!confirmed) return;

    setAllResumes((prev) => prev.filter((r) => r._id !== resumeId));
  }, []);

  const navigateToResume = useCallback((resumeId: string) => {
    router.push(`/app/builder/${resumeId}`);
  }, [router]);

  // Memoized computed values
  const { showCreateModal, showUploadModal, showEditModal } = useMemo(() => ({
    showCreateModal: modalState.type === "create",
    showUploadModal: modalState.type === "upload",
    showEditModal: modalState.type === "edit",
  }), [modalState.type]);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:block hidden">
          Welcome, John Doe
        </h1>

        {/* Action Buttons */}
        <ActionButtons onCreateClick={() => openModal("create")} onUploadClick={() => openModal("upload")} />

        <hr className="border-slate-300 my-6 sm:w-[305px]" />

        {/* Resume Grid */}
        <ResumeGrid
          resumes={allResumes}
          colors={RESUME_COLORS}
          onResumeClick={navigateToResume}
          onEdit={openModal}
          onDelete={deleteResume}
        />

        {/* Modals */}
        {showCreateModal && (
          <Modal
            title="Create a Resume"
            onClose={closeModal}
            onSubmit={createResume}
            inputValue={title}
            onInputChange={setTitle}
            buttonText="Create Resume"
          />
        )}

        {showUploadModal && (
          <UploadModal
            onClose={closeModal}
            onSubmit={uploadResume}
            title={title}
            onTitleChange={setTitle}
            resume={resume}
            onResumeChange={setResume}
          />
        )}

        {showEditModal && (
          <Modal
            title="Edit Resume"
            onClose={closeModal}
            onSubmit={editResumeTitle}
            inputValue={title}
            onInputChange={setTitle}
            buttonText="Save Changes"
          />
        )}
      </div>
    </div>
  );
};

// Component: Action Buttons
interface ActionButtonsProps {
  onCreateClick: () => void;
  onUploadClick: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onCreateClick, onUploadClick }) => (
  <div className="flex gap-4">
    <button
      onClick={onCreateClick}
      className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center 
        rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group 
        hover:border-indigo-500 duration-300 cursor-pointer"
    >
      <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
      <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">Create Resume</p>
    </button>
    <button
      onClick={onUploadClick}
      className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center 
        rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group 
        hover:border-purple-500 duration-300 cursor-pointer"
    >
      <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />
      <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">Upload Existing</p>
    </button>
  </div>
);

// Component: Resume Grid
interface ResumeGridProps {
  resumes: ResumeData;
  colors: readonly string[];
  onResumeClick: (id: string) => void;
  onEdit: (type: ModalType, id: string) => void;
  onDelete: (id: string) => void;
}

const ResumeGrid: React.FC<ResumeGridProps> = ({ resumes, colors, onResumeClick, onEdit, onDelete }) => (
  <div className="flex flex-wrap gap-4">
    {resumes.map((resume, index) => {
      const baseColor = colors[index % colors.length];
      return (
        <ResumeCard
          key={resume._id}
          resume={resume}
          color={baseColor}
          onClick={() => onResumeClick(resume._id)}
          onEdit={() => onEdit("edit", resume._id)}
          onDelete={() => onDelete(resume._id)}
        />
      );
    })}
  </div>
);

// Component: Resume Card
interface ResumeCardProps {
  resume: Resume; // Fixed: Using Resume instead of ResumeData
  color: string;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ resume, color, onClick, onEdit, onDelete }) => (
  <button
    onClick={onClick}
    className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center
      rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
    style={{
      background: `linear-gradient(135deg, ${color}10, ${color}40)`,
      borderColor: `${color}40`,
    }}
  >
    <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all" style={{ color }} />
    <p className="text-sm group-hover:scale-105 transition-all px-2 text-center" style={{ color }}>
      {resume.title}
    </p>
    <p
      className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 
        transition-all px-2 text-center"
      style={{ color: `${color}90` }}
    >
      Updated on {new Date(resume.updatedAt).toLocaleDateString()}
    </p>
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute top-1 right-1 group-hover:flex items-center hidden"
    >
      <TrashIcon
        onClick={onDelete}
        className="size-7 p-1.5 hover:bg-white/50 text-slate-500 transition-colors rounded cursor-pointer"
      />
      <PencilIcon
        onClick={onEdit}
        className="size-7 p-1.5 hover:bg-white/50 text-slate-500 transition-colors rounded cursor-pointer"
      />
    </div>
  </button>
);

// Component: Base Modal
interface ModalProps {
  title: string;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  onInputChange: (value: string) => void;
  buttonText: string;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, onSubmit, inputValue, onInputChange, buttonText }) => (
  <form
    onSubmit={onSubmit}
    onClick={onClose}
    className="fixed inset-0 bg-black/70 backdrop-blur z-10 flex items-center justify-center"
  >
    <div onClick={(e) => e.stopPropagation()} className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <input
        onChange={(e) => onInputChange(e.target.value)}
        value={inputValue}
        type="text"
        placeholder="Enter resume title"
        className="w-full px-4 py-2 mb-4 border border-slate-300 rounded focus:outline-none focus:border-green-600"
        required
        autoFocus
      />
      <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
        {buttonText}
      </button>
      <XIcon
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
        onClick={onClose}
      />
    </div>
  </form>
);

// Component: Upload Modal
interface UploadModalProps {
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  onTitleChange: (value: string) => void;
  resume: File | null;
  onResumeChange: (file: File | null) => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ onClose, onSubmit, title, onTitleChange, resume, onResumeChange }) => (
  <form
    onSubmit={onSubmit}
    onClick={onClose}
    className="fixed inset-0 bg-black/70 backdrop-blur z-10 flex items-center justify-center"
  >
    <div onClick={(e) => e.stopPropagation()} className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6">
      <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
      <input
        onChange={(e) => onTitleChange(e.target.value)}
        value={title}
        type="text"
        placeholder="Enter resume title"
        className="w-full px-4 py-2 mb-4 border border-slate-300 rounded focus:outline-none focus:border-green-600"
        required
      />
      <label htmlFor="resume-input" className="block text-sm text-slate-700">
        Select Resume File:
        <div
          className="flex flex-col items-center justify-center gap-2 border group text-slate-400 
            border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500
            hover:text-green-700 cursor-pointer transition-colors"
        >
          {resume ? (
            <p className="text-slate-700">{resume.name}</p>
          ) : (
            <>
              <UploadCloudIcon className="size-14 stroke-1" />
              <p className="text-sm">Upload Resume</p>
            </>
          )}
          <input
            id="resume-input"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              onResumeChange(file);
            }}
            required
          />
        </div>
      </label>
      <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
        Upload Resume
      </button>
      <XIcon
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
        onClick={onClose}
      />
    </div>
  </form>
);

export default Page;