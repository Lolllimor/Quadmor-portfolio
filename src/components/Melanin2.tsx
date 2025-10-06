import Image from 'next/image';
import React from 'react';

export const Melanin2 = () => {
  const Pill = ({ children }: { children: string }) => (
    <span className="text-white border border-white rounded-[2.5rem] px-4 h-[2.25rem] flex items-center justify-center text-[13.01px] whitespace-nowrap">
      {children}
    </span>
  );
  return (
    <div className=" max-w-5xl mx-auto bg-white  max-h-[48rem]  flex">
      <div className="grid grid-cols-2 w-full ">
        <div className="pl-[4.313rem] flex flex-col gap-[2.625rem] pr-[1.875rem] pt-[2.938rem] mt-2">
          <div className="flex flex-col gap-2 ">
            <Image
              src={'/melanin.png'}
              alt="home-decor logo"
              height={579}
              width={358}
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
              Design a platform that empowers African creatives to share their
              crafts with a global audience, blending education with cultural
              exchange. The platform should enable workshops, tutorials, and
              live sessions, while also fostering collaboration and discovery
              through community features.
            </p>
          </div>
          <div className="flex flex-col  gap-4 mb-[4.438rem]">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              opportunity statement
            </div>
            <p className="text-gray  ">
              How might we reposition the app as a community-first experience,
              where financial tools play a supportive role rather than the
              dominant one.
            </p>
          </div>
        </div>
        <div className="bg-reddishBrown flex flex-col justify-end pt-[2.938rem] pl-5 max-w-[33.188rem] ">
          <div className="w-full h-[20.688rem] relative overflow-hidden">
            <img
              src="/melanin-bg.gif"
              alt="Chart animation"
              className="absolute left-1/2 top-0 -translate-x-1/2 w-[693px]"
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
