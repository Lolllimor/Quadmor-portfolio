import Image from 'next/image';
import React from 'react';

export const QuickTeller = () => {
  return (
    <div className=" max-w-5xl mx-auto  bg-white pt-[2.5rem] ">
      <div className="flex flex-col gap-8   w-full px-[4.438rem] mx-auto mb-8">
        <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
          past work
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Image
              src={'/quickteller.png'}
              alt="quickteller logo"
              height={46}
              width={176}
            />
          </div>
          <p className="font-causten font-medium text-gray max-w-[25.938rem]">
            A Parking & Tolling Management feature that lets drivers pay for
            parking, and settle tolls seamlessly. With cashless payments,
            real-time notifications, and clear receipts, it reduces wait times
            and delivers a faster, more transparent experience for commuters and
            casual drivers alike.
          </p>
        </div>
      </div>
      <div className="h-[33.813rem] flex items-end w-full relative">
        <div className="grid grid-cols-[0.4fr_0.6fr] bg-[#003C58] h-[28.188rem] pl-[4.438rem] w-full">
          <div className="absolute top-0">
            <Image
              width={375}
              height={824}
              src={'/quick-phone.png'}
              alt="Quick teller representation on a phone"
            />
          </div>
          <div className='absolute bottom-0 right-0'>
            <Image
              width={567}
              height={397}
              src={'/quick-park.png'}
              alt="Quick teller representation on a phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
