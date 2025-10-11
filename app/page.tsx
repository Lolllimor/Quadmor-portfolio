'use client';
import { DesignSystem2 } from '@/src/components/DesignSystem2';
import { DesignSystem } from '@/src/components/DesignSystem';
import { QuickTeller2 } from '@/src/components/QuickTeller2';
import { HeroSection } from '@/src/components/HeroSection';
import { PresentWork } from '@/src/components/PresentWork';
import { QuickTeller } from '@/src/components/QuickTeller';
import { RolePouchii } from '@/src/components/RolePouchii';
import { WorkSection } from '@/src/components/WorkSection';
import { HomeDecor2 } from '@/src/components/HomeDecor2';
import { HomeDecor } from '@/src/components/HomeDecor';
import { Changers2 } from '@/src/components/Changers2';
import { Changers } from '@/src/components/Changers';
import { Swaddle2 } from '@/src/components/Swaddle2';
import { Pouchii } from '@/src/components/Pouchii';
import { Swaddle } from '@/src/components/Swaddle';
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
