
import React from "react";

import { HeroInsignia } from "../../../interactive/HeroInsignia";

type HeroVisualProps = {
  hero: {
    automation: string;
    tailored: string;
    confidentiality: string;
    enterprise: string;
  };
};

export const HeroVisual: React.FC<HeroVisualProps> = ({ hero }) => {
  return (
    <div className="lg:col-span-5 flex justify-center items-center relative">
      <div className="relative w-72 sm:w-80 md:w-96 aspect-square flex items-center justify-center">

        {/* Ambient Hexagonal Halo Layers */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0A6CFF]/20 to-[#00E5FF]/25 blur-3xl animate-pulse" />

        {/* Dynamic Telemetry Rings */}
        <div className="absolute inset-4 rounded-full bg-[#081a33]/60 border border-[#193560] backdrop-blur-sm shadow-xl flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#00daf3]/10 via-transparent to-[#0A6CFF]/10" />
        </div>

        {/* Floating Brand Insignia */}
        <HeroInsignia />

        {/* Automation Widget */}
        <div className="absolute -top-3 -right-2 bg-[#081b36]/90 border border-[#193764] backdrop-blur-lg px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
            bolt
          </span>

          <div>
            <p className="font-label-sm text-label-sm text-slate-300 leading-none">
              {hero.automation}
            </p>

            <p className="font-headline-sm text-headline-sm text-white leading-tight font-bold">
              {hero.tailored}
            </p>
          </div>
        </div>

        {/* Confidentiality Widget */}
        <div className="absolute -bottom-4 -left-4 bg-[#081b36]/90 border border-[#193764] backdrop-blur-lg px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#001029] border border-[#173055] flex items-center justify-center text-secondary-fixed">
            <span className="material-symbols-outlined text-[18px]">
              lock
            </span>
          </div>

          <div>
            <p className="font-label-sm text-label-sm text-slate-300 leading-none">
              {hero.confidentiality}
            </p>

            <p className="font-headline-sm text-headline-sm text-white leading-tight font-bold">
              {hero.enterprise}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
