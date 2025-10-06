import Image from 'next/image';
import React from 'react';

export const QuickTeller3 = () => {
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
              src={'/quickteller.png'}
              alt="quickteller logo"
              height={46}
              width={176}
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              my role
            </div>
            <p className="text-gray uppercase ">ux RESEARCHER & DESIGNER</p>
          </div>
          <div className="flex flex-col  gap-4">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              CLIENT BRIEF
            </div>
            <p className="text-gray  ">
              We need to run a usability test on the Parking & Tolling feature
              to see how easily users can access parking, pay tolls, and get
              receipts. The test should measure task success, speed, errors, and
              overall satisfaction, with feedback from both frequent commuters &
              occasional drivers to guide final design improvements.
            </p>
          </div>
          <div className="flex flex-col  gap-4 mb-[4.438rem]">
            <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
              THE GOAL
            </div>
            <p className="text-gray  ">
              Enable drivers to manage parking & toll payments seamlessly,
              reducing friction, saving time, & building trust through cashless
              transactions & receipts.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.behance.net/gallery/188111073/Pouchii-Redesign"
              className="border border-darkBlue rounded-[2.5rem]"
            >
              <div className="bg-darkBlue text-white w-full py-2.5 rounded-[2.5rem] flex items-center justify-center border-[12px] border-white">
                Full Case Study - 90% Done
              </div>
            </a>
          </div>
        </div>
        <div className="bg-darkBlue pt-[2.938rem] pl-5 max-w-[33.188rem]">
          <div className="flex flex-col gap-4 mb-[8.5rem]">
            <div className="flex  gap-2 w-full overflow-clip">
              <Pill>Usability Test </Pill>
              <Pill> Unmoderated Sessions </Pill>
              <Pill>Supervised Research</Pill>
              <Pill>Design for Speed and Exploration</Pill>
            </div>
            <div className="flex gap-2 overflow-clip">
              <Pill> Global Benchmarking</Pill>
              <Pill>Evaluation Metrics</Pill>
              <Pill>Comparison Analysis</Pill>
            </div>
          </div>

          <div className="w-full h-[20.125rem] relative overflow-hidden">
            <img
              src="/chart.gif"
              alt="Chart animation"
              className="absolute left-1/2 top-0 -translate-x-1/2 h-[22rem] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
