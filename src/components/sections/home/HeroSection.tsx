// 

import React from "react";

import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../i18n/translations";

import { HeroBackground } from "./hero/HeroBackground";
import { HeroContent } from "./hero/HeroContent";
import { HeroVisual } from "./hero/HeroVisual";

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-[#001029] text-white py-20 lg:py-28 border-b border-[#142642]">

      <HeroBackground />

      <div className="relative max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

          <HeroContent hero={t.hero} />

          <HeroVisual hero={t.hero} />

        </div>
      </div>

    </section>
  );
};
