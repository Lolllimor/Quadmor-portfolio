'use client';

import Image from 'next/image';
import React from 'react';
import { Star } from './icons/star';

export const HeroSection = ({
  topRef,
}: {
  topRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div ref={topRef} className="p-[2rem] max-w-5xl mx-auto h-[48rem]">
      <div className="px-4 py-2 bg-white text-gray uppercase w-fit mb-10">
        Design Portfolio
      </div>
      <div className="flex justify-between">
        <span className="text-white font-semibold font-causten text-[80px]">
          Quadri Morin
        </span>
        <div className="rounded-fill w-[12.875rem] h-[12.875rem] ">
          <Image
            src={'/avatar.png'}
            alt="Designer Image "
            width={200}
            height={200}
            className="rounded-full w-[12.5rem] h-[12.5rem] object-cover object-top border-8 border-white"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2.5 mt-1.5">
        <p className="font-inter text-white font-normal text-base">
          My Design journey through the years
        </p>
        <div className="grid grid-rows-3 gap-4 w-full">
          <div className="grid grid-cols-[0.6fr_0.35fr_0.15fr] gap-4 text-white max-h-[6.688rem] w-full">
            <div className="font-extrabold text-[3rem] flex items-center justify-center uppercase text-center h-full w-full  tracking-[2rem] text-offwhite bg-orangeBrown">
              Design
            </div>
            <div className="font-extrabold text-[2rem] flex items-center justify-center uppercase text-center py-[1.5625rem] w-full tracking-[0.32em] text-black bg-lilac">
              Research
            </div>
            <div className="bg-pink px-5 py-4 flex flex-col justify-between ">
              <div className="flex justify-between items-center">
                <div className="w-6 h-6 rounded-full bg-yellow" />
                <div className="w-4 h-4 rounded-full bg-gray" />
              </div>
              <div className="flex justify-between items-center">
                <div className="w-4 h-4 rounded-full  bg-gray" />
                <div className="w-6 h-6 rounded-full bg-yellow" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4  h-[6.688rem]">
            <div className="bg-grayBlue flex items-center justify-center">
              <div className="flex items-center justify-center h-20 gap-2">
                <div className="chart-bar bg-charcoalBlack h-2/3 w-4"></div>
                <div className="chart-bar bg-yellow h-2/5 w-4"></div>
                <div className="chart-bar bg-charcoalBlack h-full w-4"></div>
                <div className="chart-bar bg-yellow h-4/5 w-4"></div>
              </div>
            </div>
            <div className="bg-yellow font-extrabold text-5xl uppercase text-center oy-6 tracking-[0.32em] flex items-center justify-center text-black">
              ux/ui
            </div>
            <div className="bg-deepPurple flex items-center justify-center px-5.5 py-4">
              <div className="w-[4.6875rem] h-[4.6875rem] rounded-full bg-gray"></div>
              <div className="w-[4.6875rem] h-[4.6875rem] rounded-full bg-yellow -ml-[2rem]"></div>
              <div className="w-[4.6875rem] h-[4.6875rem] rounded-full bg-orangeBrown -ml-[2rem]"></div>
              <div className="w-[4.6875rem] h-[4.6875rem] rounded-full bg-grayGreen -ml-[2rem]"></div>
              <div className="w-[4.6875rem] h-[4.6875rem] rounded-full bg-white -ml-[2rem]"></div>
            </div>
          </div>
          <div className="grid grid-cols-[0.15fr_0.35fr_0.6fr] gap-4 text-white  h-[6.688rem]">
            <div className="bg-dullPurple px-6 py-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <Star />
                <Star color="#F3D062" />
              </div>
              <div className="flex justify-between items-center">
                <Star color="#F3D062" />
                <Star />
              </div>
            </div>
            <div className="font-extrabold text-[2rem] uppercase text-center py-[2.3125rem] w-full tracking-[0.32em] flex items-center justify-center text-white bg-pink">
              Branding
            </div>
            <div className="bg-lilac flex items-center justify-center text-black font-extrabold text-[3rem] uppercase text-center py-6 tracking-[2rem]">
              graphic
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
