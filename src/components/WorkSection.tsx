'use client';
import React, { useState } from 'react';
import { OpenLink } from './icons/open-link';

export const WorkSection = () => {
  const [active, setActive] = useState('product');
  return (
    <div className="flex max-w-5xl mx-auto h-[768px]">
      <div className="w-1/2 px-10 pt-20 font-inter flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-2">
          <span className="text-[2.5rem] font-inter leading-[3rem]">
            I’ve grouped my work into 4 categories.
          </span>
          <p>
            My journey in design began with Architecture, which gave me a strong
            foundation in visual structure. That path led me to Graphic Design,
            and ultimately to the core of what I believe design is truly about;
            User Experience.
          </p>
        </div>
        <div className="bg-blue w-full rounded-[0.5rem] py-[1.81rem] text-white font-semibold flex items-center justify-center mb-[7.3125rem]">
          You are viewing the Product Design Section
        </div>
      </div>
      <div className="flex flex-col  py-[7.3125rem] px-[50px] mx-auto bg-white">
        <div className="flex  gap-0  h-[16.6875rem]">
          <div
            className={`bg-blue w-[12.5rem] h-[16.6875rem] rounded-tl-[1.875rem] pl-[1.372rem] pb-[1rem] transition-transform duration-300 hover:scale-95 font-semibold  flex justify-start items-end cursor-pointer ${
              active === 'product' && ' scale-95'
            }`}
          >
            <p className="w-[7.6875rem] font-semibold text-2xl leading-[1.75rem]">
              Product Design
            </p>
          </div>
          <div className="bg-orange w-[12.5rem] h-[16.6875rem] rounded-tr-[1.875rem] transition-transform duration-300 hover:scale-95 pl-[1.875rem] pb-[1rem] flex justify-start items-end cursor-pointer">
            <p className="w-[5rem] font-semibold text-2xl leading-[1.75rem]">
              Digital Art
            </p>
          </div>
        </div>
        <div className="flex  h-[16.6875rem]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/quadmor/recent-activity/articles/"
            className="bg-grayGreen w-[12.5rem] h-[16.6875rem] rounded-bl-[1.875rem] transition-transform duration-300 hover:scale-95 flex flex-col justify-between  pl-[1.372rem] pb-[1rem] cursor-pointer"
          >
            <div className="w-full flex justify-end p-[3px]">
              <OpenLink />
            </div>
            <p className="w-[7.6875rem] font-semibold text-2xl leading-[1.75rem]">
              Articles & Ideas
            </p>
          </a>
          <div className="bg-otherPurple w-[12.5rem] h-[16.6875rem] rounded-br-[1.875rem] transition-transform duration-300 hover:scale-95 flex justify-start items-end pl-[1.875rem] pb-[1rem] cursor-pointer">
            <p className="w-[7.6875rem] font-semibold text-2xl leading-[1.75rem]">
              Graphic Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
