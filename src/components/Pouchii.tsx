import Image from 'next/image';
import React from 'react';

export const Pouchii = () => {
  return (
    <div className=" max-w-5xl mx-auto  bg-white pt-[2.5rem] relative">
      <div className="flex flex-col gap-8   w-full px-[4.438rem] mx-auto mb-8">
        <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
          past work
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Image
              src={'/pouchii.png'}
              alt="pouchii logo"
              height={37}
              width={188}
            />
            <span className="text-gray text-[1.25rem] font-medium">
              Digitizing communities.
            </span>
          </div>
          <p className="font-causten font-medium text-gray max-w-[25.938rem]">
            A community-first platform designed to make everyday life simpler,
            more connected, and more supportive. It blends financial tools with
            practical features that help users manage daily needs, discover
            trusted resources, and build meaningful connections.{' '}
          </p>
        </div>
      </div>
      <div className='bg-[url("/pouchii-bg.png")] bg-cover bg-center bg-no-repeat h-[31.625rem] flex items-center justify-center'>
        <Image
          src={'/pouchii-phone.png'}
          alt="Pouchi visualiztion on mobile"
          width={451}
          height={551}
          className="w-auto h-[31.625rem] object-center object-contain absolute"
        />
      </div>
    </div>
  );
};
