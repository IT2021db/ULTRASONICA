
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";
import { HeroInsignia } from "../interactive/HeroInsignia";

export const ServicesHero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden bg-[#001029] text-white px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-16 border-b border-[#142642]">
      {/* Hexagonal Geometric Ambient Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          className="w-full h-full object-cover"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              height="97"
              id="hex-pattern"
              patternTransform="scale(1)"
              patternUnits="userSpaceOnUse"
              width="56"
            >
              <path
                d="M28 0 L56 16.16 L56 48.5 L28 64.66 L0 48.5 L0 16.16 Z M28 48.5 L56 64.66 L56 97 L28 113.16 L0 97 L0 64.66 Z"
                fill="none"
                stroke="#00e3fd"
                strokeOpacity="0.35"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect fill="url(#hex-pattern)" height="100%" width="100%" />
        </svg>
      </div>

      {/* Radiant Glow Spheres */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-container/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-secondary-container/15 blur-[100px] pointer-events-none" />

      {/* Main Hero Layout */}
      <div className="relative max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

        {/* LEFT COLUMN - Content */}
        <div className="lg:col-span-7 flex flex-col items-start">

          {/* Status Chip */}
          <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-[#0a1e3a]/90 border border-[#1b355d] backdrop-blur-md shadow-sm mb-space-md">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed shadow-[0_0_8px_#00daf3] animate-pulse" />
            <span className="font-subheading-eyebrow text-subheading-eyebrow uppercase text-secondary-fixed tracking-wider font-semibold text-[11px] sm:text-[13px]">
              {t.servicesPage.hero.badge}
            </span>
          </div>

          {/* Main Headline & Subtitle */}
          <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-white max-w-4xl tracking-tight mb-space-md font-bold">
            {t.servicesPage.hero.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed via-primary to-primary-container">
              {t.servicesPage.hero.highlight}
            </span>{" "}
            {t.servicesPage.hero.subtitle}
          </h1>

          <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl mb-space-xl leading-relaxed">
            {t.servicesPage.hero.description}
          </p>

          {/* Key Expertise Areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-gutter w-full pt-space-lg">

            <div className="flex flex-col bg-[#091b35]/90 border border-[#1a3359] p-space-md rounded-lg shadow-sm backdrop-blur-sm">
              <span className="text-[10px] sm:text-xs text-secondary-fixed font-semibold tracking-widest mb-2">
                01 / DEVELOPMENT
              </span>
              <span className="text-lg sm:text-xl lg:text-2xl text-white font-bold tracking-tight">
                React
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {t.servicesPage.metrics[0]}
              </span>
              <div className="w-7 h-0.5 bg-secondary-fixed mt-3 rounded-full" />
            </div>

            <div className="flex flex-col bg-[#091b35]/90 border border-[#1a3359] p-space-md rounded-lg shadow-sm backdrop-blur-sm">
              <span className="text-[10px] sm:text-xs text-primary font-semibold tracking-widest mb-2">
                02 / INTELLIGENCE
              </span>
              <span className="text-lg sm:text-xl lg:text-2xl text-white font-bold tracking-tight">
                AI / LLM
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {t.servicesPage.metrics[1]}
              </span>
              <div className="w-7 h-0.5 bg-primary mt-3 rounded-full" />
            </div>

            <div className="flex flex-col bg-[#091b35]/90 border border-[#1a3359] p-space-md rounded-lg shadow-sm backdrop-blur-sm">
              <span className="text-[10px] sm:text-xs text-secondary-fixed-dim font-semibold tracking-widest mb-2">
                03 / CONNECTIVITY
              </span>
              <span className="text-lg sm:text-xl lg:text-2xl text-white font-bold tracking-tight">
                API
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {t.servicesPage.metrics[2]}
              </span>
              <div className="w-7 h-0.5 bg-secondary-fixed-dim mt-3 rounded-full" />
            </div>

            <div className="flex flex-col bg-[#091b35]/90 border border-[#1a3359] p-space-md rounded-lg shadow-sm backdrop-blur-sm">
              <span className="text-[10px] sm:text-xs text-tertiary font-semibold tracking-widest mb-2">
                04 / EFFICIENCY
              </span>
              <span className="text-lg sm:text-xl lg:text-2xl text-white font-bold tracking-tight">
                Automation
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {t.servicesPage.metrics[3]}
              </span>
              <div className="w-7 h-0.5 bg-tertiary mt-3 rounded-full" />
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN - Brand Insignia */}
     <div className="col-span-1 lg:col-span-5 flex justify-center items-center mt-8 lg:mt-0">
        <div className="relative w-56 sm:w-64 md:w-72 xl:w-96 aspect-square flex items-center justify-center">

            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0A6CFF]/20 to-[#00E5FF]/25 blur-3xl animate-pulse" />

            <div className="absolute inset-4 rounded-full bg-[#081a33]/60 border border-[#193560] backdrop-blur-sm shadow-xl flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#00daf3]/10 via-transparent to-[#0A6CFF]/10" />
            </div>

            <HeroInsignia />
          </div>
        </div>

      </div>
    </section>
  );
};
