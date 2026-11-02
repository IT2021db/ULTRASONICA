import React from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "../components/sections/home/HeroSection";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION (Głęboki granat #001029) */}
      <HeroSection />

      {/* SECTION 2: PROBLEM IDENTIFICATION (Czyste jasne tło #FAFAF9, eleganckie białe karty) */}
      <section className="w-full bg-[#FAFAF9] text-[#0B0F19] py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-gutter">
          {/* Section Header */}
          <div className="max-w-2xl mb-space-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] mb-space-xs shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A6CFF]"></span>
              <span className="font-subheading-eyebrow text-subheading-eyebrow font-bold tracking-wider text-[11px] sm:text-[13px]">
                {t.home.problems.badge}
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
              {t.home.problems.title}
            </h2>
            <p className="font-body-lg text-body-lg text-[#475569] mt-space-xs">
              {t.home.problems.description}
            </p>
          </div>

          {/* Problem Cards 3-up */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="bg-white rounded-lg p-space-lg border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(10,108,255,0.08)] hover:border-[#0A6CFF]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:scale-105 group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">
                    schedule
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-semibold">
                  {t.home.problems.cards[0].title}
                </h3>
                <p className="font-body-md text-body-md text-[#475569]">
                  {t.home.problems.cards[0].description}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-slate-100 flex items-center gap-2 text-[#0A6CFF] font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
                <span>{t.home.problems.cards[0].result}</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-space-lg border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(10,108,255,0.08)] hover:border-[#0A6CFF]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:scale-105 group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">
                    hub
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-semibold">
                  {t.home.problems.cards[1].title}
                </h3>
                <p className="font-body-md text-body-md text-[#475569]">
                  {t.home.problems.cards[1].description}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-slate-100 flex items-center gap-2 text-[#0A6CFF] font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
                <span> {t.home.problems.cards[1].result} </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-space-lg border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(10,108,255,0.08)] hover:border-[#0A6CFF]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:scale-105 group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">
                    psychology_alt
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-semibold">
                  {t.home.problems.cards[2].title}
                </h3>
                <p className="font-body-md text-body-md text-[#475569]">
                  {t.home.problems.cards[2].description}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-slate-100 flex items-center gap-2 text-[#0A6CFF] font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
                <span> {t.home.problems.cards[2].result} </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: USŁUGI (Jasne tło #F4F6F9, wyraziste białe karty z kobaltowymi/cyjanowymi akcentami) */}
      <section className="w-full bg-[#F4F6F9] py-20 lg:py-28 relative border-t border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-gutter">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0EDFF] border border-[#BFDBFE] text-[#0A6CFF] mb-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span>
                <span className="font-subheading-eyebrow text-subheading-eyebrow font-bold tracking-wider text-[11px] sm:text-[13px]">
                  {t.home.services.badge}
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
                {t.home.services.title}
              </h2>
            </div>
            <p className="font-body-md text-body-md text-[#475569] max-w-md">
              {t.home.services.description}
            </p>
          </div>

          {/* Bento-style 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Card 1: AI CORE */}
            <div className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(10,108,255,0.1)] hover:border-[#0A6CFF]/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-[#0A6CFF]/10 to-[#00E5FF]/20 border border-[#0A6CFF]/20 flex items-center justify-center text-[#0A6CFF] shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[30px]">
                      smart_toy
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#0A6CFF] bg-[#F0F7FF] px-3 py-1 rounded-full border border-[#D5E7FF] uppercase tracking-widest font-semibold">
                    01 / AI CORE
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-bold">
                  {t.home.services.cards[0].title}
                </h3>
                <p className="font-body-md text-body-md text-[#475569] mb-space-md">
                  {t.home.services.cards[0].description}
                </p>
                <ul className="flex flex-col gap-2.5 mb-space-md bg-[#F8FAFC] p-4 rounded-lg border border-slate-100">
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                      check_circle
                    </span>
                    {t.home.services.cards[0].features[0]}
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                      check_circle
                    </span>
                    {t.home.services.cards[0].features[1]}
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                      check_circle
                    </span>
                    {t.home.services.cards[0].features[2]}
                  </li>
                </ul>
              </div>
              <Link
                to="/uslugi"
                className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-[#0A6CFF] group-hover:text-[#0056d1] transition-colors pt-space-sm border-t border-slate-100"
              >
                {t.home.services.cards[0].link}
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Card 2: SOFTWARE */}
            <div className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(10,108,255,0.1)] hover:border-[#0A6CFF]/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-[#0A6CFF]/10 to-[#00E5FF]/20 border border-[#0A6CFF]/20 flex items-center justify-center text-[#0A6CFF] shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[30px]">
                      dashboard_customize
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#0A6CFF] bg-[#F0F7FF] px-3 py-1 rounded-full border border-[#D5E7FF] uppercase tracking-widest font-semibold">
                    02 / SOFTWARE
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-bold">
                  {t.home.services.cards[1].title}
                </h3>
                <p className="font-body-md text-body-md text-[#475569] mb-space-md">
                  {t.home.services.cards[1].description}
                </p>
                <ul className="flex flex-col gap-2.5 mb-space-md bg-[#F8FAFC] p-4 rounded-lg border border-slate-100">
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                      check_circle
                    </span>
                    {t.home.services.cards[1].features[0]}
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                      check_circle
                    </span>
                    {t.home.services.cards[1].features[1]}
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                      check_circle
                    </span>
                    {t.home.services.cards[1].features[2]}
                  </li>
                </ul>
              </div>
              <Link
                to="/uslugi"
                className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-[#0A6CFF] group-hover:text-[#0056d1] transition-colors pt-space-sm border-t border-slate-100"
              >
                {t.home.services.cards[1].link}
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Card 3: WORKFLOW */}
            <div className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(10,108,255,0.1)] hover:border-[#0A6CFF]/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-[#0A6CFF]/10 to-[#00E5FF]/20 border border-[#0A6CFF]/20 flex items-center justify-center text-[#0A6CFF] shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[30px]">
                      sync_alt
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#0A6CFF] bg-[#F0F7FF] px-3 py-1 rounded-full border border-[#D5E7FF] uppercase tracking-widest font-semibold">
                    03 / WORKFLOW
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-bold">
                  {t.home.services.cards[2].title}
                </h3>
                <p className="font-body-md text-body-md text-[#475569] mb-space-md">
                  {t.home.services.cards[2].description}
                </p>
                <ul className="flex flex-col gap-2.5 mb-space-md bg-[#F8FAFC] p-4 rounded-lg border border-slate-100">
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                      check_circle
                    </span>
                    {t.home.services.cards[2].features[0]}
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                      check_circle
                    </span>
                    {t.home.services.cards[2].features[1]}
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                      check_circle
                    </span>
                    {t.home.services.cards[2].features[2]}
                  </li>
                </ul>
              </div>
              <Link
                to="/uslugi"
                className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-[#0A6CFF] group-hover:text-[#0056d1] transition-colors pt-space-sm border-t border-slate-100"
              >
                {t.home.services.cards[2].link}
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: JAK PRACUJEMY (Czyste tło #FAFAF9, kafelki 01-04 w bieli) */}
      <section className="w-full bg-[#FAFAF9] py-20 lg:py-28 border-t border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="max-w-xl mb-space-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] mb-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A6CFF]"></span>
              <span className="font-subheading-eyebrow text-subheading-eyebrow font-bold tracking-wider text-[11px] sm:text-[13px]">
                {t.home.process.badge}
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
              {t.home.process.title}
            </h2>
            <p className="font-body-md text-body-md text-[#475569] mt-space-xs">
              {t.home.process.description}
            </p>
          </div>

          {/* Process 4-step Horizontal Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">
            <div className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center font-display-hero text-headline-lg text-[#0A6CFF]/20 select-none font-bold">
                01
              </div>
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[24px]">
                    record_voice_over
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  {t.home.process.steps[0].title}
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  {t.home.process.steps[0].description}
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-slate-100">
                <span className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                  {t.home.process.steps[0].result}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center font-display-hero text-headline-lg text-[#0A6CFF]/20 select-none font-bold">
                02
              </div>
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[24px]">
                    analytics
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  {t.home.process.steps[1].title}
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  {t.home.process.steps[1].description}
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-slate-100">
                <span className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                  {t.home.process.steps[1].result}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center font-display-hero text-headline-lg text-[#0A6CFF]/20 select-none font-bold">
                03
              </div>
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[24px]">
                    terminal
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  {t.home.process.steps[2].title}
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  {t.home.process.steps[2].description}
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-slate-100">
                <span className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                  {t.home.process.steps[2].result}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center font-display-hero text-headline-lg text-[#0A6CFF]/20 select-none font-bold">
                04
              </div>
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[24px]">
                    support_agent
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  {t.home.process.steps[3].title}
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  {t.home.process.steps[3].description}
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-slate-100">
                <span className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                  {t.home.process.steps[3].result}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: KIM JESTEŚMY (Jasny panel z wkomponowanym zdjęciem zespołu) */}
      <section className="w-full bg-[#F4F6F9] py-20 lg:py-28 relative border-t border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden bg-white border border-slate-200 shadow-xl">
                <img
                  alt={t.home.about.imageAlt}
                  className="w-full h-[460px] object-cover filter saturate-95 hover:saturate-100 transition-all duration-500"
                  src="/images/engineer.jpg"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-[#0B0F19]">
                  <p className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">
                    Inżynieria z ludzką twarzą
                  </p>
                  <p className="font-body-sm text-body-sm text-[#475569]">
                    Rzemiosło software'owe poparte latami praktyki i
                    pragmatyzmem biznesowym
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0A6CFF]"></span>
                    <span className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                      Gdynia, Polska / Model Partnerski
                    </span>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[#0A6CFF]">
                <span className="material-symbols-outlined text-[16px]">
                  engineering
                </span>
                <span className="font-subheading-eyebrow text-subheading-eyebrow uppercase tracking-wider font-bold text-[11px] sm:text-[13px]">
                  {t.home.about.badge}
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
                {t.home.about.title}
              </h2>
              <div className="flex flex-col gap-space-sm font-body-lg text-body-lg text-[#475569]">
                <p>{t.home.about.paragraphs[0]}</p>
                <p>{t.home.about.paragraphs[1]}</p>
                <p>{t.home.about.paragraphs[2]}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md w-full pt-space-sm">
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <span className="font-headline-md text-headline-md text-[#0A6CFF] font-bold block">
                    {t.home.about.metrics[0].value}
                  </span>
                  <span className="font-body-sm text-body-sm text-[#475569]">
                    {t.home.about.metrics[0].label}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <span className="font-headline-md text-headline-md text-[#0A6CFF] font-bold block">
                    {t.home.about.metrics[1].value}
                  </span>
                  <span className="font-body-sm text-body-sm text-[#475569]">
                    {t.home.about.metrics[1].label}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <span className="font-headline-md text-headline-md text-[#0A6CFF] font-bold block">
                    {t.home.about.metrics[2].value}
                  </span>
                  <span className="font-body-sm text-body-sm text-[#475569]">
                    {t.home.about.metrics[2].label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: DLACZEGO ULTRASONICA (Jasne tło #FAFAF9, 4 białe kafelki) */}
      <section className="w-full bg-[#FAFAF9] py-20 lg:py-24 border-t border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] mb-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A6CFF]"></span>
              <span className="font-subheading-eyebrow text-subheading-eyebrow font-bold tracking-wider text-[11px] sm:text-[13px]">
                {t.home.whyUs.badge}
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
              {t.home.whyUs.title}
            </h2>
            <p className="font-body-md text-body-md text-[#475569] mt-space-xs">
              {t.home.whyUs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            <div className="bg-white p-space-lg rounded-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[26px]">
                    translate
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  {t.home.whyUs.cards[0].title}
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  {t.home.whyUs.cards[0].description}
                </p>
              </div>
              <div className="pt-space-md border-t border-slate-100 flex items-center gap-1.5 text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  check
                </span>
                <span>{t.home.whyUs.cards[0].result}</span>
              </div>
            </div>

            <div className="bg-white p-space-lg rounded-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[26px]">
                    track_changes
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  {t.home.whyUs.cards[1].title}
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  {t.home.whyUs.cards[1].description}
                </p>
              </div>
              <div className="pt-space-md border-t border-slate-100 flex items-center gap-1.5 text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  check
                </span>
                <span>{t.home.whyUs.cards[1].result}</span>
              </div>
            </div>

            <div className="bg-white p-space-lg rounded-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[26px]">
                    policy
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  {t.home.whyUs.cards[2].title}
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  {t.home.whyUs.cards[2].description}
                </p>
              </div>
              <div className="pt-space-md border-t border-slate-100 flex items-center gap-1.5 text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  check
                </span>
                <span>{t.home.whyUs.cards[2].result}</span>
              </div>
            </div>

            <div className="bg-white p-space-lg rounded-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[26px]">
                    receipt_long
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  {t.home.whyUs.cards[3].title}
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  {t.home.whyUs.cards[3].description}
                </p>
              </div>
              <div className="pt-space-md border-t border-slate-100 flex items-center gap-1.5 text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  check
                </span>
                <span>{t.home.whyUs.cards[3].result}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TEASER REALIZACJI (Jasne tło #F4F6F9, karty scenariuszy w bieli ze zrównoważonymi akcentami) */}
      <section className="w-full bg-[#F4F6F9] py-20 lg:py-28 relative border-t border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0EDFF] border border-[#BFDBFE] text-[#0A6CFF] mb-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span>
                <span className="font-subheading-eyebrow text-subheading-eyebrow font-bold tracking-wider text-[11px] sm:text-[13px]">
                  {t.home.projects.badge}
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
                {t.home.projects.title}
              </h2>
            </div>
            <Link
              to="/realizacje"
              className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-[#0A6CFF] hover:text-[#0056d1] transition-colors"
            >
              {t.home.projects.description}
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* 2 Real-world Solution Scenario Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            <div className="bg-white rounded-lg p-space-lg sm:p-space-xl border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#0A6CFF]/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-space-md">
                  <span className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] font-label-sm text-label-sm font-semibold tracking-wide">
                    {t.home.projects.cards[0].category}
                  </span>
                  <span className="material-symbols-outlined text-[#0A6CFF] text-[22px]">
                    auto_awesome
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] font-bold mb-space-xs">
                  {t.home.projects.cards[0].title}
                </h3>
                <p className="font-body-md text-body-md text-[#475569] mb-space-md">
                  {t.home.projects.cards[0].description}
                </p>
                <ul className="flex flex-col gap-2.5 mb-space-md bg-[#F8FAFC] p-4 rounded-lg border border-slate-100">
                  {t.home.projects.cards[0].features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]"
                    >
                      <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-space-xs flex items-center justify-between border-t border-slate-100">
                <div className="pt-space-sm border-t border-slate-100">
                  <p className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                    {t.home.projects.cards[0].result}
                  </p>
                </div>
                <Link
                  to="/realizacje"
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-[#0A6CFF] font-semibold hover:underline"
                >
                  Szczegóły scenariusza
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg p-space-lg sm:p-space-xl border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#0A6CFF]/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-space-md">
                  <span className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] font-label-sm text-label-sm font-semibold tracking-wide">
                    {t.home.projects.cards[1].category}
                  </span>
                  <span className="material-symbols-outlined text-[#0A6CFF] text-[22px]">
                    flowsheet
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] font-bold mb-space-xs">
                  {t.home.projects.cards[1].title}
                </h3>
                <p className="font-body-md text-body-md text-[#475569] mb-space-md">
                  {t.home.projects.cards[1].description}
                </p>
                <ul className="flex flex-col gap-2.5 mb-space-md bg-[#F8FAFC] p-4 rounded-lg border border-slate-100">
                  {t.home.projects.cards[1].features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]"
                    >
                      <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-space-xs flex items-center justify-between border-t border-slate-100">
                <span className="font-label-sm text-label-sm text-slate-500 font-medium">
                  Moduł: Vision AI + Księgowość Cloud
                </span>
                <div className="pt-space-sm border-t border-slate-100">
                  <p className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                    {t.home.projects.cards[1].result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CONVERSION CTA BANNER */}
      <section className="w-full bg-[#FAFAF9] py-16 lg:py-24 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
          <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-[#001433] via-[#051c3d] to-[#001029] border border-[#19355f] p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#00E5FF]/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -left-16 -top-16 w-80 h-80 bg-[#0A6CFF]/25 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081a33]/80 border border-[#1d375f] backdrop-blur-md text-secondary-fixed mb-space-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
                <span className="font-subheading-eyebrow text-subheading-eyebrow font-semibold uppercase text-[11px] sm:text-[13px]">
                  POROZMAWIAJMY O TWOIM BIZNESIE
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl sm:text-display-hero text-white font-bold tracking-tight mb-space-sm">
                Porozmawiajmy o tym, co możemy usprawnić u Ciebie
              </h2>
              <p className="font-body-lg text-body-lg text-slate-300 max-w-xl mb-space-lg">
                Umów się na bezpośrednią, 30-minutową rozmowę inżynieryjną.
                Przeanalizujemy Twoje procesy i wskażemy bez owijania w bawełnę,
                gdzie automatyzacja lub AI realnie przyniesie zwrot.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
                <Link
                  to="/kontakt"
                  className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] px-9 py-4 rounded-[10px] shadow-[0_0_24px_rgba(0,229,255,0.45)] hover:shadow-[0_0_36px_rgba(0,229,255,0.7)] hover:scale-105 transition-all"
                >
                  Wyślij zapytanie ofertowe
                  <span className="material-symbols-outlined ml-2 text-[20px]">
                    send
                  </span>
                </Link>
                <a
                  href="mailto:programistka.pl@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md font-medium text-white bg-[#0a1e3b]/80 border border-[#1e3962] hover:bg-[#112d54] px-7 py-4 rounded-[10px] shadow-sm transition-colors"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px]">
                    mail
                  </span>
                  Napisz bezpośrednio
                </a>
              </div>
              <p className="font-label-sm text-label-sm text-slate-400 mt-space-md">
                Odpowiadamy w ciągu 24h • Bez korporacyjnego narzutu • Zgodność
                z RODO
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
