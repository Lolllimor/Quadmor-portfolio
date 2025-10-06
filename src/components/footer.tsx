import Image from 'next/image';
import React from 'react';
import { BehanceIcon } from './icons/behance';
import { LinkedinIcon } from './icons/linkedin';
import { ResumeIcon } from './icons/resume';
import { EmailIcon } from './icons/email';
import { ArrowUpIcon } from './icons/arrow-up';

const Footer = ({ onBackToTop }: { onBackToTop: () => void }) => {
  return (
    <div className="mt-[6.438rem] mb-[4.188rem] flex flex-col items-center justify-center bg-gray max-w-5xl">
      <span
        className="font-causten font-medium text-white text-[1.5rem] mb-[2.375rem]
      uppercase"
      >
        You can view more of my works at;
      </span>
      <div className="flex items-center gap-[3.5rem] mb-[2.375rem]">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://behance.net/quadrimorin"
          className="flex flex-col gap-2 items-center justify-center max-w-[7rem]"
        >
          <div className="w-[7rem] h-[7rem] flex items-center justify-center rounded-[0.75rem] bg-white">
            <BehanceIcon width={56} height={56} />
          </div>
          <span className="font-causten text-center font-regular text-white text-[1.5rem] leading-tight">
            Visit my Behance
          </span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/quadmor/"
          className="flex flex-col gap-2 items-center justify-center max-w-[7rem]"
        >
          <div className="w-[7rem] h-[7rem] flex items-center justify-center rounded-[0.75rem] bg-white">
            <LinkedinIcon width={56} height={56} />
          </div>
          <span className="font-causten text-center font-regular text-white text-[1.5rem] leading-tight">
            Visit my LinkedIn
          </span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/u/0/d/1IR7KcUJ-AhLLcHaqBAmNEAXeO2hbPF4y/view?usp=sharing&pli=1"
          className="flex flex-col gap-2 items-center justify-center max-w-[7rem]"
        >
          <div className="w-[7rem] h-[7rem] flex items-center justify-center rounded-[0.75rem] bg-white">
            <ResumeIcon width={56} height={56} />
          </div>
          <span className="font-causten text-center font-regular text-white text-[1.5rem] leading-tight">
            Download Resume
          </span>
        </a>
        <a
          href="mailto:quadmor@hotmail.com"
          className="flex flex-col gap-2 items-center justify-center max-w-[7rem]"
        >
          <div className="w-[7rem] h-[7rem] flex items-center justify-center rounded-[0.75rem] bg-white">
            <EmailIcon />
          </div>
          <span className="font-causten text-center font-regular text-white text-[1.5rem] leading-tight">
            Send an Email
          </span>
        </a>
      </div>
      <div
        onClick={onBackToTop}
        className="flex items-center gap-1 mb-[2.375rem] cursor-pointer"
      >
        <span className="underline text-white font-causten text-[1.5rem]">
          Back to Top
        </span>
        <ArrowUpIcon />
      </div>
      <span className="font-causten font-semibold text-[7.737rem] max-w-[436px] text-center leading-28">
        QUADRI MORIN
      </span>
    </div>
  );
};

export default Footer;
