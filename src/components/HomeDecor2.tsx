import Image from 'next/image';
import React from 'react';

export const HomeDecor2 = () => {
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
              src={'/home-decor.png'}
              alt="home-decor logo"
              height={59.62}
              width={122.59}
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
              CLIENT BRIEF
            </div>
            <p className="text-gray  ">
              We want a mobile app designed specifically for gated estates. Most
              existing solutions we’ve seen don’t work well & they neglect real
              community need. What we need is a community-first app: one that
              simplifies estate living, connects neighbors, and provides
              seamless access to essential services.
            </p>
          </div>
          <div className="flex flex-col  gap-4 mb-[4.438rem]">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              THE GOAL
            </div>
            <p className="text-gray  ">
              To create an app that’s not just functional, but also
              human-centred. An that residents actually enjoy using and see as
              part of their everyday lives.
            </p>
            <button className="border border-tealGray rounded-[2.5rem]">
              <div className="bg-tealGray text-white w-full py-2.5 rounded-[2.5rem] border-2 border-white">
                Click to View Full Case Study
              </div>
            </button>
            <div className="flex flex-col gap-1 font-inter text-center items-center pb-4">
              <span className="text-xs text-black">
                or copy and paste the link below
              </span>
              <a
                href="https://www.behance.net/gallery/220371897/ESTATE-COMMUNITY-APP"
                className="text-black text-[12.09px] underline"
              >
                https://www.behance.net/gallery/220371897/ESTATE-COMMUNITY-APP
              </a>
            </div>
          </div>
        </div>
        <div className="bg-tealGray pt-[2.938rem] pl-5 max-w-[33.188rem] ">
          <div className="flex flex-col gap-4 mb-[5.313rem]">
            <div className="flex  gap-2 w-full overflow-clip">
              <Pill>Community Feel</Pill>
              <Pill>Improve Community Experience</Pill>
              <Pill>Design for Speed and Exploration</Pill>
            </div>
            <div className="flex gap-2 overflow-clip">
              <Pill> Design for Trust</Pill>
              <Pill>Craft Micro-Engagement Loops</Pill>
              <Pill>Micro-Interactions for Delight</Pill>
            </div>
          </div>

          <div className="w-full h-[20.688rem] relative overflow-hidden">
            <img
              src="/home-decor-animation.gif"
              alt="Chart animation"
              className="absolute left-1/2 top-0 -translate-x-1/2 h-[23rem] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
