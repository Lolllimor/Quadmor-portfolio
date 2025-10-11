import Image from 'next/image';
import React from 'react';

export const Melanin = () => {
  return (
    <div className=" max-w-5xl mx-auto  bg-white pt-[2.5rem] ">
      <div className="flex flex-col gap-8   w-full px-[4.438rem] mx-auto mb-8">
        <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
          past work
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Image
              src={'/melanin.png'}
              alt="home-decor logo"
              height={579}
              width={358}
            />
          </div>
          <p className="font-causten font-medium text-gray max-w-[25.938rem]">
            An AI-powered, community-driven app designed for modern mothers. For
            organising kids’ schedules, finding trusted local recommendations
            and connecting with other mums.
          </p>
        </div>
      </div>
      <div className='bg-[url("/malanin-bg.png")] bg-cover bg-center bg-no-repeat h-[31.625rem] flex items-center justify-center relative'>
        <div className=" h-[31.625rem] relative w-[35rem]  overflow-hidden ">
          <img
            src="/melanin-landing-page.png"
            alt="Chart animation"
            className="absolute w-[50rem] left-1/2 bottom-0 -translate-x-1/2   rounded-t-3xl  "
          />
        </div>
      </div>
    </div>
  );
};
