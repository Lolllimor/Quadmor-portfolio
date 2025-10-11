import Image from 'next/image';
import React from 'react';

export const Changers = () => {
  return (
    <div className=" max-w-5xl mx-auto  bg-white pt-[2.5rem] ">
      <div className="flex flex-col gap-8   w-full px-[4.438rem] mx-auto mb-8">
        <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
          past work
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Image
              src={'/changers.png'}
              alt="quickteller logo"
              height={148}
              width={115}
            />
          </div>
          <p className="font-causten font-medium text-gray max-w-[25.938rem]">
            A platfrom to address social issues, promote community well-being,
            and create positive societal change by supporting grassroots
            initiatives and campaigns.
          </p>
        </div>
      </div>
      <div className="h-[33.813rem] flex  w-full relative bg-[#1CA5AF] ">
        <div className="flex justify-center items-start -mt-[76px]  overflow-clip  w-full">
          <Image
            src={'/changers1.png'}
            alt="Sample of changers webpage"
            width={560}
            height={100}
            className="w-[600px] "
          />
        </div>
        <Image
          src={'/changers3.png'}
          alt="Changers sample"
          width={197}
          height={245}
          className="absolute left-[72px] top-[52px]"
        />
        <Image
          src={'/changers2.png'}
          alt="Changers sample"
          width={197}
          height={245}
          className="absolute right-[72px] bottom-[52px]"
        />
      </div>
    </div>
  );
};
