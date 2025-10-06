import React from 'react';

export const DesignSystem = () => {
  return (
    <div className=" max-w-5xl mx-auto  bg-white pt-[2.5rem] relative">
      <div className="flex flex-col gap-8   w-full px-[4.438rem] mx-auto mb-8">
        <div className="px-4 flex items-center justify-center bg-gray text-white uppercase w-fit h-[2.188rem]">
          past work
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2">
            <span className="text-babyBlue text-2xl font-bold font-causten">
              Design System
            </span>
          </div>
          <p className="font-causten font-medium text-gray max-w-[27.375rem]">
            A design system built on the principle of inclusivity, embedding
            accessibility (A11y) standards into its very foundation. From
            WCAG-compliant color tokens and accessible component patterns to
            clear documentation & usage guidelines, the system ensures that
            every product team starts with inclusive defaults rather than
            retrofitting fixes.
          </p>
        </div>
      </div>
      <div className='bg-[url("/design-system-bg.png")] bg-cover bg-center bg-no-repeat h-[32.188rem] flex justify-center'>
        <span className="text-babyBlue text-5xl font-bold mt-[9rem]">
          DESIGN SYSTEM CASE STUDY
        </span>
      </div>
    </div>
  );
};
