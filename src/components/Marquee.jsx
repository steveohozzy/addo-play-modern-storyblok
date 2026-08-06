'use client';

import { useEffect, useRef, useState } from 'react';
import { storyblokEditable } from '@storyblok/react';

export default function Marquee({ blok }) {
  const panels = (blok.MarqueeItems ?? []).filter((item) => item?.Title);

  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const looped = [...panels, ...panels];

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(trackRef.current.scrollWidth / 2);
    };

    measure();
    document.fonts?.ready?.then(measure);

    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const colours = [
    'from-[#FF0073] to-[#FF4FA3]',
    'from-[#FF7300] to-[#FFB800]',
    'from-[#0B9FEE] to-[#4FC3FF]',
    'from-[#7C3AED] to-[#A855F7]',
    'from-[#10B981] to-[#34D399]',
  ];

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-[#34156F] via-[#4C1D95] to-[#1D4ED8] py-5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />

      <div
        key={distance}
        ref={trackRef}
        className="relative z-10 flex w-max items-center will-change-transform"
        style={{
          '--marquee-distance': `${distance}px`,
          animation: distance > 0 ? 'marquee 35s linear infinite' : 'none',
        }}
      >
        {looped.map((panel, i) => (
          <div
            key={`${panel._uid}-${i}`}
            className="flex shrink-0 items-center gap-5 pr-6"
          >
            <div
              className={`rounded-full bg-gradient-to-r ${colours[i % colours.length]} px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)]`}
            >
              <span className="font-heading text-lg font-black text-white md:text-xl">
                {panel.Title}
              </span>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur">
              <span className="text-sm text-white" aria-hidden>
                ★
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}