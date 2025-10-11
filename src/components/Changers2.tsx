import Image from 'next/image';
import React from 'react';

export const Changers2 = () => {
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
            <Image
              src={'/changers.png'}
              alt="quickteller logo"
              height={46}
              width={115}
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              my role
            </div>
            <p className="text-gray uppercase ">lead ux designer</p>
          </div>
          <div className="flex flex-col  gap-4">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              project brief
            </div>
            <p className="text-gray  ">
              CHANGERS is an initiative built on the belief that &quot;Every
              little helps.&quot; The project unites individuals, communities,
              and corporate organizations passionate about social justice and
              development.
            </p>
          </div>
          <div className="flex flex-col  gap-4">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              DESIGN PROCESS
            </div>
            <p className="text-gray  ">
              The design process for the CHANGERS platform was a comprehensive,
              user-centered approach that prioritized accessibility, simplicity,
              and functionality.
            </p>
          </div>
        </div>
        <div className="bg-[#1CA5AF] flex flex-col justify-end pt-[2.938rem] max-w-[33.188rem]">
          <div className="w-full h-[290px] mb-[62px] relative overflow-hidden">
            <img
              src="/changers.gif"
              alt="Chart animation"
              className="absolute left-1/2 top-0 -translate-x-1/2 h-[315px] w-full"
            />
          </div>
          <div className="pl-5  flex flex-col gap-4 mb-[2.625rem]">
            <div className="flex  gap-2 w-full overflow-clip">
              <Pill>Scalable Design System</Pill>
              <Pill>Design Social & Community Spaces</Pill>
              <Pill>Design for Speed and Exploration</Pill>
            </div>
            <div className="flex gap-2 overflow-clip">
              <Pill>Craft Seamless Learner Journeys</Pill>
              <Pill>Design Smart Discovery Patterns</Pill>
              <Pill>Craft Seamless Learner Journeys</Pill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
