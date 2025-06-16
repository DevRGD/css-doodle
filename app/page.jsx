'use client';

import gsap from 'gsap';
import doodles from '@/libs/doodles';
import sections from '@/libs/sections';
import { useGSAP } from '@gsap/react';
import { useState, useRef } from 'react';
import Doodle from '@/components/Doodle';
import Section from '@/components/Section';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [activeDoodle, setActiveDoodle] = useState({ id: 'initial', doodle: doodles.bauhausCircles });
  const main = useRef(null);
  const doodleContainerRef = useRef(null);

  useGSAP(
    () => {
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: `.${section.id}-section`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveDoodle(section),
          onEnterBack: () => setActiveDoodle(section),
        });
      });
    },
    { scope: main },
  );

  useGSAP(
    () => {
      gsap.fromTo(doodleContainerRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.inOut' });
    },
    { dependencies: [activeDoodle.id] },
  );

  return (
    <main ref={main} className="relative w-full bg-slate-950 text-slate-100">
      <div ref={doodleContainerRef} className="fixed inset-0 z-0">
        <Doodle key={activeDoodle.id}>{activeDoodle.doodle}</Doodle>
      </div>

      <div className="relative z-10">
        {sections.map((section) => (
          <Section
            key={section.id}
            section={section}
            doodleElement={<Doodle className="h-32 w-32 md:h-48 md:w-48">{section.doodle}</Doodle>}
          />
        ))}
      </div>
    </main>
  );
}
