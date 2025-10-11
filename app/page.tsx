'use client';
import { DesignSystem } from '@/src/components/DesignSystem';
import { HeroSection } from '@/src/components/HeroSection';
import { PresentWork } from '@/src/components/PresentWork';
import { DesignSystem2 } from '@/src/components/DesignSystem2';
import { RolePouchii } from '@/src/components/RolePouchii';
import { WorkSection } from '@/src/components/WorkSection';
import { Pouchii } from '@/src/components/Pouchii';
import { QuickTeller } from '@/src/components/QuickTeller';
import { QuickTeller2 } from '@/src/components/QuickTeller2';
import { HomeDecor } from '@/src/components/HomeDecor';
import { HomeDecor2 } from '@/src/components/HomeDecor2';
import { Melanin } from '@/src/components/Melanin';
import { Melanin2 } from '@/src/components/Melanin2';
import { Swaddle } from '@/src/components/Swaddle';
import { Swaddle2 } from '@/src/components/Swaddle2';
import Footer from '@/src/components/footer';
import { useRef } from 'react';
import { Changers } from '@/src/components/Changers';
import { Changers2 } from '@/src/components/Changers2';

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
        <QuickTeller />
        <QuickTeller2 />
        <Changers />
        <Changers2/>
        <Pouchii />
        <RolePouchii />

        <HomeDecor />
        <HomeDecor2 />
       
        <DesignSystem />
        <DesignSystem2 />
        <Swaddle />
        <Swaddle2 />
        <Footer onBackToTop={scrollToTop} />
      </div>
    </div>
  );
}
