import Image from 'next/image';
import React from 'react';

export const Swaddle = () => {
  return (
    <div className=" max-w-5xl mx-auto max-h-[768px] overflow-clip  bg-white pt-[2.5rem] relative">
      <div className="flex flex-col gap-8   w-full  mx-auto ">
        <div className="mx-[4.438rem] px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
          past work
        </div>
        <div className=" px-[4.438rem] flex justify-between gap-2">
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
          <p className="font-causten font-medium text-gray max-w-[25.938rem]">
            An AI-powered, community-driven app designed for modern mothers. For
            organising kids’ schedules, finding trusted local recommendations
            and connecting with other mums.
          </p>
        </div>
        <img
          src={'/swaddle-bg.png'}
          alt="swaddle background"
          className="w-full h-[476px]"
        />
      </div>
    </div>
  );
};
