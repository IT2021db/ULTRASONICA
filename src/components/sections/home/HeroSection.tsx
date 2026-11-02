import React from "react";
import { HeroInsignia } from "../../interactive/HeroInsignia";
import { Badge } from "../../ui/Badge";
import { Button } from "../../ui/Button";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../i18n/translations";

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-[#001029] text-white py-20 lg:py-28 border-b border-[#142642]">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          className="w-full h-full"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              height="97"
              id="hero-hex-grid"
              patternTransform="scale(1.2)"
              patternUnits="userSpaceOnUse"
              width="56"
            >
              <path
                d="M28 0 L56 16.17 L56 48.5 L28 64.67 L0 48.5 L0 16.17 Z M28 48.5 L56 64.67 L56 97 L28 113.17 L0 97 L0 64.67 Z"
                fill="none"
                stroke="#00E5FF"
                strokeOpacity="0.25"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect fill="url(#hero-hex-grid)" height="100%" width="100%" />
        </svg>
      </div>

      {/* Soft glowing orb accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0A6CFF]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-[#00E5FF]/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left: Typographic Anchor & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
            {/* Live Telemetry Pill */}
            <Badge variant="telemetry-dark">{t.hero.badge}</Badge>

            <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-white tracking-tight leading-tight">
              {t.hero.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed via-primary to-primary-container">
                {t.hero.highlight}
              </span>{" "}
              {t.hero.subtitle}
            </h1>

            <p className="font-body-lg text-body-lg text-slate-300 max-w-xl">
              {t.hero.description}{" "}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <Button to="/kontakt" variant="primary" icon="arrow_forward">
                {t.hero.contactButton}
              </Button>

              <Button to="/uslugi" variant="secondary" icon="arrow_outward">
                {t.hero.servicesButton}
              </Button>
            </div>

            {/* Highlight Badges */}
            <div className="flex flex-wrap items-center gap-space-sm pt-space-md">
              <div className="flex items-center gap-2 bg-[#091b35]/90 border border-[#1b345a] backdrop-blur-md px-3.5 py-2 rounded-xl shadow-sm">
                <span
                  className="material-symbols-outlined text-secondary-fixed text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  forum
                </span>
                <span className="font-label-sm text-label-sm text-slate-200">
                  {t.hero.benefits.communication}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-[#091b35]/90 border border-[#1b345a] backdrop-blur-md px-3.5 py-2 rounded-xl shadow-sm">
                <span
                  className="material-symbols-outlined text-secondary-fixed text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
                <span className="font-label-sm text-label-sm text-slate-200">
                  {t.hero.benefits.security}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-[#091b35]/90 border border-[#1b345a] backdrop-blur-md px-3.5 py-2 rounded-xl shadow-sm">
                <span
                  className="material-symbols-outlined text-secondary-fixed text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  trending_up
                </span>
                <span className="font-label-sm text-label-sm text-slate-200">
                  {t.hero.benefits.business}
                </span>
              </div>
            </div>
          </div>

          {/* Right: 3D Holographic Resonance Node & Logo */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square flex items-center justify-center">
              {/* Ambient Hexagonal Halo Layers */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0A6CFF]/20 to-[#00E5FF]/25 blur-3xl animate-pulse"></div>

              {/* Dynamic Telemetry Rings */}
              <div className="absolute inset-4 rounded-full bg-[#081a33]/60 border border-[#193560] backdrop-blur-sm shadow-xl flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#00daf3]/10 via-transparent to-[#0A6CFF]/10"></div>
              </div>

              {/* Floating Brand Insignia */}
              <HeroInsignia />

              {/* Floating Data Widgets for depth */}
              <div className="absolute -top-3 -right-2 bg-[#081b36]/90 border border-[#193764] backdrop-blur-lg px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                  bolt
                </span>
                <div>
                  <p className="font-label-sm text-label-sm text-slate-300 leading-none">
                    {t.hero.automation}
                  </p>
                  <p className="font-headline-sm text-headline-sm text-white leading-tight font-bold">
                    {t.hero.tailored}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#081b36]/90 border border-[#193764] backdrop-blur-lg px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#001029] border border-[#173055] flex items-center justify-center text-secondary-fixed">
                  <span className="material-symbols-outlined text-[18px]">
                    lock
                  </span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-slate-300 leading-none">
                    {t.hero.confidentiality}
                  </p>
                  <p className="font-headline-sm text-headline-sm text-white leading-tight font-bold">
                    {t.hero.enterprise}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
