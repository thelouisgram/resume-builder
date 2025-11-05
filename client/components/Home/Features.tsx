"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Zap } from 'lucide-react';
import Title from './Title';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-violet-600">
          <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
          <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
      ),
      title: "AI-Powered Resume",
      description: "Let AI help you craft the perfect resume with smart suggestions and optimization.",
      bgColor: "bg-violet-100",
      borderColor: "border-violet-300",
      hoverBg: "group-hover:bg-violet-100",
      hoverBorder: "group-hover:border-violet-300"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-green-600">
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
        </svg>
      ),
      title: "Professional Templates",
      description: "Choose from dozens of ATS-friendly templates designed by hiring experts.",
      bgColor: "bg-green-100",
      borderColor: "border-green-300",
      hoverBg: "group-hover:bg-green-100",
      hoverBorder: "group-hover:border-green-300"
    },
    {
      icon: (
        <svg className="size-6 stroke-orange-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15V3" />
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5" />
        </svg>
      ),
      title: "Easy Export",
      description: "Export professional resumes in PDF, DOCX, or share via link instantly.",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-300",
      hoverBg: "group-hover:bg-orange-100",
      hoverBorder: "group-hover:border-orange-300"
    }
  ];

  return (
    <section id='features' className="flex flex-col items-center my-10 scroll-mt-12">
          <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
           <Zap width={14} />
            <span>Simple Process</span>
        </div>
        <Title title='Build your resume' description='Our streamlined process helps you helps you create a professional resume in minutes with intelligent AI-powered tools.'/>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl xl:-mt-10 mx-auto">
        {/* Feature Image */}
        <div className="w-full md:w-1/2">
          <Image 
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" 
            alt="Resume Builder Features" 
            width={800}
            height={600}
            className="max-w-2xl w-full xl:-ml-32"
            priority
          />
        </div>

        {/* Features List */}
        <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 max-w-md group cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className={`
                p-6 flex gap-4 rounded-xl transition-all duration-300
                border border-transparent
                ${feature.hoverBg} 
                ${feature.hoverBorder}
                ${activeIndex === index ? `${feature.bgColor} ${feature.borderColor}` : ''}
              `}>
                {feature.icon}
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-700">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;