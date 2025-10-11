import Image from 'next/image';
import React from 'react';

export const DesignSystem2 = () => {
  const Pill = ({ children }: { children: string }) => (
    <span className="text-white border border-white rounded-[2.5rem] px-4 h-[2.25rem] flex items-center justify-center text-[13.09px] whitespace-nowrap">
      {children}
    </span>
  );
  return (
    <div className=" max-w-5xl mx-auto bg-white  max-h-[48rem] h-full flex">
      <div className="grid grid-cols-2 w-full ">
        <div className="pl-[4.313rem] flex flex-col gap-[2.625rem] pr-[1.875rem] pt-[2.938rem] mt-2 pb-[2.125rem]">
          <div className="flex flex-col gap-2 ">
            <p className="text-2xl font-causten font-bold text-[#48A0EA]">
              Design System
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              my role
            </div>
            <p className="text-gray uppercase ">ux DESIGNER</p>
          </div>
          <div className="flex flex-col  gap-4">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              OBJECTIVE
            </div>
            <p className="text-gray  ">
              The objectives of this project are to establish accessibility as a
              core standard across all product lines by providing reusable
              WCAG-compliant components and tokens, equipping teams with clear
              documentation and best practices for consistent adoption, &
              reducing the inefficiencies of late-stage accessibility fixes by
              embedding inclusivity upfront in the design process.
            </p>
          </div>
          <div className="flex flex-col  gap-4">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              THE IMPACT
            </div>
            <p className="text-gray  ">
              This project will enable product teams to design and build
              experiences that are accessible by default, ensuring inclusivity
              at scale, reducing compliance risks, and strengthening trust with
              a diverse user base.
            </p>
            <span className="mt-1 font-semibold text-xl text-black ">
              Full Case Study Coming Soon...
            </span>
          </div>
        </div>
        <div className="bg-darkBlue pt-[2.938rem] pl-5 max-w-[33.188rem]">
          <div className="flex flex-col gap-4 mb-[2.625rem]">
            <div className="flex  gap-2 w-full overflow-clip">
              <Pill>Design System</Pill>
              <Pill>Variable</Pill>
              <Pill>Icon Set</Pill>
              <Pill>Color Sytles</Pill>
              <Pill>Design for Speed and Exploration</Pill>
            </div>
            <div className="flex gap-2 overflow-clip">
              <Pill>Design for Assessibility</Pill>
              <Pill>Adaptive Design</Pill>
              <Pill>Micro-Interactions for Delight</Pill>
            </div>
          </div>

          <Image
            height={512}
            width={637}
            src={'/quickteller-side.png'}
            alt="Quickteller color palatte"
          />
        </div>
      </div>
    </div>
  );
};
