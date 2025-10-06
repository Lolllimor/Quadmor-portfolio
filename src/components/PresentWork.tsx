import React from 'react';
import { ResumeIcon } from './icons/resume';
import { BehanceIcon } from './icons/behance';
import { LinkedinIcon } from './icons/linkedin';

export const PresentWork = () => {
  return (
    <div className=" mb-[3.25rem] max-w-5xl mx-auto  px-[2.25rem] h-[48rem]  flex  items-end">
      <div className="grid grid-cols-[0.55fr_0.45fr]">
        {' '}
        <div className="w-full h-full pr-5.5 border-r border-white flex flex-col justify-between">
          <div className="flex flex-col gap-[26px] ">
            <div className="px-4 py-2 bg-white text-gray uppercase w-fit ">
              Bio
            </div>
            <p className="font-inter max-w-[517px]">
              Strategic Product Designer with 7+ years in Fintech, SaaS, and AI,
              bridging design thinking with measurable business outcomes. I lead
              end-to-end design; from research and testing to scalable UI
              systems, using data-driven insights to refine solutions. Skilled
              in Figma, Adobe Suite, and Blender, I craft impactful visuals and
              advocate for accessibility while thriving in 0–1 environments.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold font-causten text-white text-[32px] leading-[48px]">
              Click to Read my recent publication
            </p>
            <div className='bg-[url("/publication-bg.png")] bg-contain bg-center bg-no-repeat h-[110px] px-8 text-babyBlue font-semibold text-2xl flex items-center justify-center font-inter leading-[32px]'>
              Design System Onboarding — Turning Tools into Team Culture.
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold font-inter text-white">
                Or copy & paste the link below
              </p>
              <a
                href="https://www.linkedin.com/pulse/design-system-onboarding-turning-tools-team-culture-quadri-morin-ysvcf/?trackingId=CPwcfPyLSMyR2VhktiZWlQ%3D%3D"
                target="_blank"
                className="text-xs font-normal font-inter text-white underline"
              >
                https://www.linkedin.com/pulse/design-system-onboarding-turning-tools-team-culture-quadri-morin-ysvcf/?trackingId=CPwcfPyLSMyR2VhktiZWlQ%3D%3D
              </a>
            </div>
          </div>
        </div>
        <div className="w-full pl-10 flex flex-col justify-between h-[615px]">
          <span className="text-[36px] leading-[40px] font-causten">
            Currently working at <b>Interswitch</b> as a{' '}
            <b>Senior Product Designer</b>
          </span>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-semibold font-causten">
                  SystemSpecs
                </span>
                <div className="px-3 py-1 bg-white font-inter text-gray text-[8px] flex items-center justify-center max-h-[15px]">
                  Hybrid
                </div>
              </div>
              <div className="flex items-center font-causten gap-2">
                <span>Lead UX Designer</span>
                <div className="w-[1px] h-full bg-white border-0" />
                <span>Dec 2022 - March 2025</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-semibold font-causten">
                  Instollar
                </span>
                <div className="px-3 py-1 bg-white font-inter text-gray text-[8px] flex items-center justify-center max-h-[15px]">
                  Remote
                </div>
              </div>
              <div className="flex items-center font-causten gap-2">
                <span>Senior UI/UX Designer</span>
                <div className="w-[1px] h-full bg-white border-0" />
                <span>Mar 2020 - March 2022</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <button className="w-full bg-white text-gray py-2 font-inter flex items-center justify-center gap-3">
              View Resume <ResumeIcon />
            </button>
            <button className="w-full bg-white text-gray py-2 font-inter flex items-center justify-center gap-3">
              Behance <BehanceIcon />
            </button>
            <button className="w-full bg-white text-gray py-2 font-inter flex items-center justify-center gap-3">
              Linkedin <LinkedinIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
