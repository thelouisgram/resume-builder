"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { dummyResumeData } from "@/assets/assets";
import { Resume } from "@/types/dashboard";
import ResumePreview from "@/components/dashboard/ResumePreview";
import Loader from '@/components/dashboard/Loader'
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import type { StaticImageData } from 'next/image';

const Page = () => {
  const { resumeId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState<Resume | null>(null);

  useEffect(() => {
    const loadResume = async () => {
      setIsLoading(true);

      const found = await new Promise<typeof dummyResumeData[number] | null>((resolve) => {
        const result = dummyResumeData.find((r) => r._id === resumeId) || null;
        setTimeout(() => resolve(result), 200);
      });

      if (found) {
        const imageUrl =
          typeof found.personal_info.image === "string"
            ? found.personal_info.image
            : (found.personal_info.image as StaticImageData).src;

        setResumeData({
          ...found,
          personal_info: {
            ...found.personal_info,
            image: imageUrl,
          },
        } as Resume);

        document.title = found.title;
      } else {
        setResumeData(null);
      }

      setIsLoading(false);
    };

    if (resumeId) {
      loadResume();
    }
  }, [resumeId]);

  return resumeData ? (
    <div className="bg-slate-100">
      <div className="max-w-3xl mx-auto py-10">
        <ResumePreview
          data={resumeData}
          template={resumeData.template}
          accentColor={resumeData.accent_color}
          classes="py-4 bg-white"
        />
      </div>
    </div>
  ) : (
    <div className="">
      {isLoading ? <Loader /> : 
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-6xl text-center text-slate-400 font-medium">Resume not found</p>
          <Link 
            href="/" 
            className="flex items-center justify-center mt-6 bg-green-500 hover:bg-green-600
              text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-400 transition-colors"
          >
            <ArrowLeftIcon className="size-4 mr-2" /> 
            go to home page
          </Link>
        </div>
      }
    </div>
  );
};

export default Page;