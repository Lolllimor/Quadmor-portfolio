import Image from 'next/image';
import React from 'react';
import { KycIcon } from './icons/kyc';

export const HomeDecor = () => {
  return (
    <div className=" max-w-5xl mx-auto  bg-white pt-[2.5rem] ">
      <div className="flex flex-col gap-8   w-full px-[4.438rem] mx-auto mb-8">
        <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
          past work
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Image
              src={'/home-decor.png'}
              alt="home-decor logo"
              height={59.62}
              width={122.59}
            />
          </div>
          <p className="font-causten font-medium text-gray max-w-[25.938rem]">
            A community-driven platform built to make life in gated estates
            simpler, safer, and more connected. It combines smart financial
            tools with everyday features that help residents manage essentials,
            access trusted services, and strengthen neighborhood connections.
          </p>
        </div>
      </div>
      <div className="h-[31.313rem] flex items-end w-full relative">
        <div className='grid grid-cols-3 gap-8 h-[28.188rem] bg-[url("/home-decor-phone.png")] bg-cover bg-center bg-no-repeat w-full px-[3.75rem]'>
  
            <div className="border border-[#F7E59B] rounded-4xl p-3.5 flex gap-3.5 max-w-[274px] bg-[#353535] h-full max-h-[6.75rem] mt-[4.688rem]">
              <div className="h-[4.875rem] w-[4.875rem] flex flex-col items-center justify-center  bg-black rounded-[19px] ">
                <KycIcon />
                <span className="text-[8px]">Level 1</span>
              </div>
              <div className="flex flex-col justify-between max-h-[3.813rem]">
                <p className="text-xs text-[#FEEB9F] font-semibold">
                  Upgrade KYC Level
                </p>
                <p className="text-[0.5rem] text-white">
                  Have both your ID Card and your Utility Bill handy. Upgrade
                  your KYC level here{' '}
                </p>
              </div>
            </div>

          <div></div>
          <div className="absolute bottom-0 right-[3.764rem]">
            <Image
              src={'/home-decor2.png'}
              alt="quickteller logo"
              height={501}
              width={280}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
