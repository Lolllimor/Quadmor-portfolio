import Image from 'next/image';
import React from 'react';

export const Swaddle2 = () => {
  const Pill = ({ children }: { children: string }) => (
    <span className="text-white border border-white rounded-[2.5rem] px-4 h-[2.25rem] flex items-center justify-center text-[13.01px] whitespace-nowrap">
      {children}
    </span>
  );
  return (
    <div className=" max-w-5xl mx-auto bg-white  max-h-[48rem] overflow-clip flex">
      <div className="grid grid-cols-2 w-full ">
        <div className="pl-[4.313rem] flex flex-col gap-[2.625rem] pr-[1.875rem] pt-[2.938rem] mt-2">
          <div className="flex gap-4">
            <Image
              src={'/swaddle.png'}
              alt="swaddle logo"
              height={80}
              width={80}
              className="w-20 h-20"
            />
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-5xl font-causten text-babyPurple">
                Swaddle App
              </span>
              <span className="font-medium text-xl font-inter text-black">
                Motherhood made easier
              </span>
            </div>
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
              Modern mothers juggle countless responsibilities; managing
              children’s schedules, keeping up with school activities, and
              balancing work and personal life, all while often lacking easy
              access to trusted local support. Existing solutions are either
              fragmented or impersonal, leaving mothers to rely on scattered
              tools, word-of-mouth recommendations, or time-consuming searches.
            </p>
          </div>
          <div className="flex flex-col  gap-4 mb-[4.438rem]">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              goal
            </div>
            <p className="text-gray  ">
              Design an AI-powered, community-driven app that helps modern
              mothers seamlessly organize their children’s schedules, access
              trusted local recommendations, and connect with other mums all
              within a single reliable platform.
            </p>
            <span className="mt-1 font-semibold text-xl text-black ">
              Full Case Study Coming Soon...
            </span>
          </div>
        </div>
        <div className="bg-[#8A77BE] flex flex-col justify-end pt-[2.938rem] pl-5 max-w-[33.188rem] ">
          <div className="w-full mb-[62px] h-[20.688rem] relative overflow-hidden">
            <video
              src="/swaddle-vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute left-1/2 top-0 -translate-x-1/2 h-[29.188rem] w-auto"
            />
          </div>
          <div className="flex flex-col gap-4 mb-[5.313rem]">
            <div className="flex  gap-2 w-full overflow-clip">
              <Pill>Scalable Design System</Pill>
              <Pill>Design Social & Community Spaces</Pill>
              <Pill>Design for Speed and Exploration</Pill>
            </div>
            <div className="flex gap-2 overflow-clip">
              <Pill> Craft Seamless Learner Journeys</Pill>
              <Pill>Design Smart Discovery Patterns</Pill>
              <Pill>Craft Seamless Learner Journeys</Pill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
