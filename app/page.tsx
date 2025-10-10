'use client';
import { DesignSystem } from '@/src/components/DesignSystem';
import { HeroSection } from '@/src/components/HeroSection';
import { PresentWork } from '@/src/components/PresentWork';
import { QuickTeller } from '@/src/components/QuickTeller';
import { RolePouchii } from '@/src/components/RolePouchii';
import { WorkSection } from '@/src/components/WorkSection';
import { Pouchii } from '@/src/components/Pouchii';
import { QuickTeller2 } from '@/src/components/QuickTeller2';
import { QuickTeller3 } from '@/src/components/QuickTeller3';
import { HomeDecor } from '@/src/components/HomeDecor';
import { HomeDecor2 } from '@/src/components/HomeDecor2';
import { Melanin } from '@/src/components/Melanin';
import { Melanin2 } from '@/src/components/Melanin2';
import { Swaddle } from '@/src/components/Swaddle';
import { Swaddle2 } from '@/src/components/Swaddle2';
import Footer from '@/src/components/footer';
import { useRef } from 'react';

export default function Home() {
  const topRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-[100vw]">
      <div className="site-wrapper">
        <HeroSection topRef={topRef} />
        <WorkSection />
        <PresentWork />
        <QuickTeller2 />
        <QuickTeller3 />
        <Pouchii />
        <RolePouchii />

        <HomeDecor />
        <HomeDecor2 />
        {/* <Melanin />
        <Melanin2 /> */}
        <DesignSystem />
        <QuickTeller />
        <Swaddle />
        <Swaddle2 />
        <Footer onBackToTop={scrollToTop} />
      </div>
    </div>
  );
}
