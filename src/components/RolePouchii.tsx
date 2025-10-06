import Image from 'next/image';
import React from 'react';

export const RolePouchii = () => {
  const Pill = ({ children }: { children: string }) => (
    <span className="text-white border border-white rounded-[2.5rem] px-4 h-[2.25rem] flex items-center justify-center text-[13.01px] whitespace-nowrap">
      {children}
    </span>
  );
  return (
    <div className=" max-w-5xl mx-auto bg-white  max-h-[48rem] h-full flex">
      <div className="grid grid-cols-2 w-full ">
        <div className="pl-[4.313rem] flex flex-col gap-[2.625rem] pr-[1.875rem] pt-[2.938rem] mt-2">
          <div className="flex flex-col gap-2 ">
            <Image
              src={'/pouchii.png'}
              alt="pouchii logo"
              height={37}
              width={188}
            />
            <span className="text-gray text-[1.25rem] font-medium">
              Digitizing communities.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              my role
            </div>
            <p className="text-gray uppercase ">lead ux designer</p>
          </div>
          <div className="flex flex-col  gap-4">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              problem statement
            </div>
            <p className="text-gray  ">
              The app positions itself too strongly as a fintech product,
              emphasizing financial activities over everyday needs. This focus
              prevents it from solving real user problems and stops it from
              being perceived as the community-driven solution users actually
              need.
            </p>
          </div>
          <div className="flex flex-col  gap-4">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              opportunity statement
            </div>
            <p className="text-gray  ">
              How might we reposition the app as a community-first experience,
              where financial tools play a supportive role rather than the
              dominant one.
            </p>
            <button className="border border-purple rounded-[2.5rem]">
              <div className="bg-purple text-white w-full py-2.5 rounded-[2.5rem] border-2 border-white">
                Click to View Full Case Study
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-1 font-inter text-center items-center pb-4">
            <span className="text-xs text-black">
              or copy and paste the link below
            </span>
            <a
              href="https://www.behance.net/gallery/188111073/Pouchii-Redesign"
              className="text-black text-[12.09px] underline"
            >
              https://www.behance.net/gallery/188111073/Pouchii-Redesign
            </a>
          </div>
        </div>
        <div className="bg-purple pt-[2.938rem] pl-5 max-w-[33.188rem]">
          <div className="flex flex-col gap-4 ">
            <div className="flex  gap-2 w-full overflow-clip">
              <Pill>Redesign the Look and Feel</Pill>
              <Pill>Improve Onboarding Experience</Pill>
              <Pill>Design for Speed and Exploration</Pill>
            </div>
            <div className="flex gap-2 overflow-clip">
              <Pill>Craft Micro-Engagement Loops</Pill>
              <Pill>Micro-Interaction Patterns</Pill>
              <Pill>Micro-Interactions for Delight</Pill>
            </div>
          </div>

          <div className="w-full h-[23.063rem] relative overflow-hidden">
            <video
              src="/pouchii-gif.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute left-1/2 top-0 -translate-x-1/2 h-[28.188rem] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
