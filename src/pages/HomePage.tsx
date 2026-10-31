import React from 'react';
import { Link } from 'react-router-dom';
import { HeroInsignia } from '../components/interactive/HeroInsignia';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION (Głęboki granat #001029) */}
      <section className="relative w-full overflow-hidden bg-[#001029] text-white py-20 lg:py-28 border-b border-[#142642]">
        {/* Ambient Hexagonal Background Lattice */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
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
              <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-[#0a1e3a]/90 border border-[#1b355d] backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed shadow-[0_0_8px_#00daf3] animate-pulse"></span>
                <span className="font-subheading-eyebrow text-subheading-eyebrow text-secondary-fixed uppercase tracking-wider text-[11px] sm:text-[13px]">
                  Inżynieria inteligentnych systemów
                </span>
              </div>

              <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-white tracking-tight leading-tight">
                Inteligentne systemy, które{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed via-primary to-primary-container">
                  oszczędzają czas
                </span>{' '}
                Twojej firmy
              </h1>

              <p className="font-body-lg text-body-lg text-slate-300 max-w-xl">
                Programujemy dedykowane aplikacje i wdrażamy sztuczną inteligencję tak, żeby natychmiast działały w codziennej pracy: prosto, bezpiecznie i bez technicznego żargonu.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center font-label-md text-label-md font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] px-8 py-3.5 rounded-[10px] shadow-[0_0_24px_rgba(0,229,255,0.4)] hover:shadow-[0_0_36px_rgba(0,229,255,0.65)] hover:scale-[1.02] active:scale-[0.99] transition-all"
                >
                  Wyślij zapytanie
                  <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
                </Link>
                <Link
                  to="/uslugi"
                  className="inline-flex items-center justify-center font-label-md text-label-md font-medium text-secondary-fixed bg-[#091b35] border border-[#1a3359] hover:bg-[#11294e] px-7 py-3.5 rounded-[10px] shadow-sm transition-all group"
                >
                  Zobacz usługi
                  <span className="material-symbols-outlined ml-1.5 text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_outward
                  </span>
                </Link>
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
                    Bez żargonu technicznego
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
                    Bezpieczeństwo danych i RODO
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
                    Praktyczne korzyści biznesowe
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
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">bolt</span>
                  <div>
                    <p className="font-label-sm text-label-sm text-slate-300 leading-none">Automatyzacja procesów</p>
                    <p className="font-headline-sm text-headline-sm text-white leading-tight font-bold">100% dopasowania</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#081b36]/90 border border-[#193764] backdrop-blur-lg px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#001029] border border-[#173055] flex items-center justify-center text-secondary-fixed">
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-slate-300 leading-none">Poufność i zgodność</p>
                    <p className="font-headline-sm text-headline-sm text-white leading-tight font-bold">Klasa Enterprise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM IDENTIFICATION (Czyste jasne tło #FAFAF9, eleganckie białe karty) */}
      <section className="w-full bg-[#FAFAF9] text-[#0B0F19] py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-gutter">
          {/* Section Header */}
          <div className="max-w-2xl mb-space-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] mb-space-xs shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A6CFF]"></span>
              <span className="font-subheading-eyebrow text-subheading-eyebrow font-bold tracking-wider text-[11px] sm:text-[13px]">
                DIAGNOZA PROBLEMÓW BIZNESOWYCH
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
              Znasz to w swojej codziennej działalności?
            </h2>
            <p className="font-body-lg text-body-lg text-[#475569] mt-space-xs">
              Większość małych i średnich firm nie potrzebuje rewolucji technologicznej ani haseł z konferencji. Potrzebuje uwolnienia ludzi od żmudnej, powtarzalnej pracy.
            </p>
          </div>

          {/* Problem Cards 3-up */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="bg-white rounded-lg p-space-lg border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(10,108,255,0.08)] hover:border-[#0A6CFF]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:scale-105 group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">schedule</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-semibold">
                  Powtarzalne zadania zabierają cenny czas
                </h3>
                <p className="font-body-md text-body-md text-[#475569]">
                  Setki godzin w każdym miesiącu uciekają na ręczne przepisywanie danych z PDF-ów, rutynowe odpisywanie na powtarzalne zapytania i ręczne generowanie zestawień w firmie.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-slate-100 flex items-center gap-2 text-[#0A6CFF] font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                <span>Utrata nawet 20-30h miesięcznie na pracownika</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-space-lg border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(10,108,255,0.08)] hover:border-[#0A6CFF]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:scale-105 group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">hub</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-semibold">
                  Dane rozsiane po wielu narzędziach
                </h3>
                <p className="font-body-md text-body-md text-[#475569]">
                  Brak płynnej spójności między CRM, arkuszami Excel, skrzynkami mailowymi i systemem fakturowania powoduje błędy ludzkie, opóźnienia i chaos informacyjny.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-slate-100 flex items-center gap-2 text-[#0A6CFF] font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                <span>Brak jednego źródła prawdy o zamówieniach</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-space-lg border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(10,108,255,0.08)] hover:border-[#0A6CFF]/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:scale-105 group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">psychology_alt</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-semibold">
                  AI brzmi obiecująco, ale od czego zacząć?
                </h3>
                <p className="font-body-md text-body-md text-[#475569]">
                  Obawa przed niekontrolowanymi kosztami, wyciekiem firmowych dokumentów oraz skomplikowanymi wdrożeniami skutecznie blokuje automatyzację procesów.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-slate-100 flex items-center gap-2 text-[#0A6CFF] font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                <span>Brak pragmatycznego doradztwa technicznego</span>
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
                  KOMPLEKSOWA REALIZACJA
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
                Usługi zaprojektowane pod realny biznes
              </h2>
            </div>
            <p className="font-body-md text-body-md text-[#475569] max-w-md">
              Nie sprzedajemy modnych eksperymentów. Dostarczamy stabilne, bezpieczne narzędzia, które stają się kręgosłupem operacyjnym Twojej firmy.
            </p>
          </div>

          {/* Bento-style 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Card 1: AI CORE */}
            <div className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(10,108,255,0.1)] hover:border-[#0A6CFF]/50 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-[#0A6CFF]/10 to-[#00E5FF]/20 border border-[#0A6CFF]/20 flex items-center justify-center text-[#0A6CFF] shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[30px]">smart_toy</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#0A6CFF] bg-[#F0F7FF] px-3 py-1 rounded-full border border-[#D5E7FF] uppercase tracking-widest font-semibold">
                    01 / AI CORE
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-bold">
                  Wdrożenia AI &amp; LLM
                </h3>
                <p className="font-body-md text-body-md text-[#475569] mb-space-md">
                  Dedykowane asystenty operacyjne oparte na wewnętrznej bazie wiedzy firmy. Inteligentna ekstrakcja danych, kategoryzacja zapytań ofertowych oraz bezpieczne modele z pełną izolacją danych.
                </p>
                <ul className="flex flex-col gap-2.5 mb-space-md bg-[#F8FAFC] p-4 rounded-lg border border-slate-100">
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">check_circle</span>
                    Prywatna baza wiedzy firmowej (RAG)
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">check_circle</span>
                    Automatyczna weryfikacja dokumentów
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">check_circle</span>
                    Wewnętrzne chatboty operacyjne
                  </li>
                </ul>
              </div>
              <Link
                to="/uslugi"
                className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-[#0A6CFF] group-hover:text-[#0056d1] transition-colors pt-space-sm border-t border-slate-100"
              >
                Więcej o wdrożeniach AI
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
                    <span className="material-symbols-outlined text-[30px]">dashboard_customize</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#0A6CFF] bg-[#F0F7FF] px-3 py-1 rounded-full border border-[#D5E7FF] uppercase tracking-widest font-semibold">
                    02 / SOFTWARE
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-bold">
                  Aplikacje i systemy dedykowane
                </h3>
                <p className="font-body-md text-body-md text-[#475569] mb-space-md">
                  Wieloletnie doświadczenie w projektowaniu portali B2B, systemów ERP/CRM oraz paneli operacyjnych dostosowanych do indywidualnej specyfiki Twojej branży.
                </p>
                <ul className="flex flex-col gap-2.5 mb-space-md bg-[#F8FAFC] p-4 rounded-lg border border-slate-100">
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">check_circle</span>
                    Autorskie panele zarządzania i CRM
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">check_circle</span>
                    Platformy B2B &amp; strefy klienta
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">check_circle</span>
                    Skalowalna architektura i czysty kod
                  </li>
                </ul>
              </div>
              <Link
                to="/uslugi"
                className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-[#0A6CFF] group-hover:text-[#0056d1] transition-colors pt-space-sm border-t border-slate-100"
              >
                Więcej o systemach dedykowanych
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
                    <span className="material-symbols-outlined text-[30px]">sync_alt</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#0A6CFF] bg-[#F0F7FF] px-3 py-1 rounded-full border border-[#D5E7FF] uppercase tracking-widest font-semibold">
                    03 / WORKFLOW
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-bold">
                  Automatyzacja i integracje
                </h3>
                <p className="font-body-md text-body-md text-[#475569] mb-space-md">
                  Bezpieczne łączenie używanego dotychczas oprogramowania: poczty, magazynu, księgowości i zewnętrznych API. Eliminujemy powtarzalne, ręczne czynności.
                </p>
                <ul className="flex flex-col gap-2.5 mb-space-md bg-[#F8FAFC] p-4 rounded-lg border border-slate-100">
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">check_circle</span>
                    Automatyczny obieg faktur i zamówień
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">check_circle</span>
                    Dwukierunkowa synchronizacja API
                  </li>
                  <li className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">check_circle</span>
                    Powiadomienia i webhooki w czasie rzeczywistym
                  </li>
                </ul>
              </div>
              <Link
                to="/uslugi"
                className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-[#0A6CFF] group-hover:text-[#0056d1] transition-colors pt-space-sm border-t border-slate-100"
              >
                Więcej o integracjach
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
                METODOLOGIA WDROŻENIA
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
              Jak wygląda współpraca krok po kroku
            </h2>
            <p className="font-body-md text-body-md text-[#475569] mt-space-xs">
              Bez nierealnych obietnic i bez tygodni spędzonych na tworzeniu niepotrzebnej dokumentacji. Działamy w jasnym rytmie inżynieryjnym.
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
                  <span className="material-symbols-outlined text-[24px]">record_voice_over</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  1. Rozmowa o Twojej firmie i celach
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  Słuchamy, jak wygląda Twoja codzienna praca i gdzie pojawiają się wąskie gardła. Rozmawiasz bezpośrednio z głównym inżynierem bez żargonu.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-slate-100">
                <span className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                  Rozpoznanie potrzeb
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center font-display-hero text-headline-lg text-[#0A6CFF]/20 select-none font-bold">
                02
              </div>
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[24px]">analytics</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  2. Audyt procesów i precyzyjny plan
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  Wskazujemy konkretne miejsca, w których automatyzacja lub AI przyniesie natychmiastową korzyść finansową i oszczędność godzin roboczych.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-slate-100">
                <span className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                  Przejrzysty zakres
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center font-display-hero text-headline-lg text-[#0A6CFF]/20 select-none font-bold">
                03
              </div>
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[24px]">terminal</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  3. Zwinne wdrożenie i testy
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  Bezpośrednia realizacja architektury w ścisłej współpracy z Tobą. Każdy moduł testowany jest na rzeczywistych danych bez opóźnień.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-slate-100">
                <span className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                  Sprawdzona stabilność
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center font-display-hero text-headline-lg text-[#0A6CFF]/20 select-none font-bold">
                04
              </div>
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  4. Rozwój, asysta i opieka
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  Partnerska asysta techniczna. W razie potrzeby elastycznie angażujemy zaufanych partnerów specjalistycznych, zapewniając spokój rozwoju.
                </p>
              </div>
              <div className="mt-space-md pt-space-xs border-t border-slate-100">
                <span className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                  Zwinne wsparcie partnerskie
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
                  alt="ULTRASONICA Lead Software Engineer"
                  className="w-full h-[460px] object-cover filter saturate-95 hover:saturate-100 transition-all duration-500"
                  src="/images/engineer.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-[#0B0F19]">
                  <p className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">
                    Inżynieria z ludzką twarzą
                  </p>
                  <p className="font-body-sm text-body-sm text-[#475569]">
                    Rzemiosło software'owe poparte latami praktyki i pragmatyzmem biznesowym
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0A6CFF]"></span>
                    <span className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                      Gdynia, Polska / Model Partnerski
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[#0A6CFF]">
                <span className="material-symbols-outlined text-[16px]">engineering</span>
                <span className="font-subheading-eyebrow text-subheading-eyebrow uppercase tracking-wider font-bold text-[11px] sm:text-[13px]">
                  KIM JESTEŚMY
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
                Wieloletnie doświadczenie software'owe połączone z inżynierią AI
              </h2>
              <div className="flex flex-col gap-space-sm font-body-lg text-body-lg text-[#475569]">
                <p>
                  ULTRASONICA to synonim solidnego rzemiosła programistycznego wypracowanego przez ponad dekadę tworzenia zaawansowanych systemów biznesowych B2B, aplikacji dedykowanych oraz integracji IT.
                </p>
                <p>
                  Dziś łączymy to sprawdzone, wieloletnie doświadczenie architektoniczne z praktycznym wdrażaniem sztucznej inteligencji. Nie gonimy za nowinkami z prezentacji konferencyjnych – stosujemy modele AI jako precyzyjne narzędzie inżynieryjne, które realnie usuwa wąskie gardła i obniża koszty operacyjne.
                </p>
                <p>
                  Pracujemy w zwinnym modelu partnerskim prowadzonym bezpośrednio przez główną inżynierkę zaufaną elastyczną siecią ekspertów technologicznych. Zamiast korporacyjnych pośredników i anonimowych szczebli menedżerskich, rozmawiasz bezpośrednio z osobą odpowiedzialną za kod i architekturę Twoich systemów.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md w-full pt-space-sm">
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <span className="font-headline-md text-headline-md text-[#0A6CFF] font-bold block">10+ lat</span>
                  <span className="font-body-sm text-body-sm text-[#475569]">Doświadczenia w systemach B2B i architekturze IT</span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <span className="font-headline-md text-headline-md text-[#0A6CFF] font-bold block">0 narzutu</span>
                  <span className="font-body-sm text-body-sm text-[#475569]">Bezpośredni kontakt inżynieryjny bez pośredników</span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                  <span className="font-headline-md text-headline-md text-[#0A6CFF] font-bold block">Pełna</span>
                  <span className="font-body-sm text-body-sm text-[#475569]">Własność praw autorskich do tworzonego kodu</span>
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
                WARTOŚCI WSPÓŁPRACY
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
              Dlaczego firmy wybierają ULTRASONICA?
            </h2>
            <p className="font-body-md text-body-md text-[#475569] mt-space-xs">
              Cztery fundamenty, na których budujemy zaufanie i trwałe relacje inżynieryjne.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            <div className="bg-white p-space-lg rounded-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[26px]">translate</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  Język biznesu, a nie kodu
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  Tłumaczymy zawiłości AI i architektury oprogramowania na jasne decyzje operacyjne. Wiesz dokładnie, co kupujesz i dlaczego.
                </p>
              </div>
              <div className="pt-space-md border-t border-slate-100 flex items-center gap-1.5 text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Bezpośrednia komunikacja</span>
              </div>
            </div>

            <div className="bg-white p-space-lg rounded-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[26px]">track_changes</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  Cel przed technologią
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  Nie wciskamy skomplikowanego AI tam, gdzie wystarczy sprawdzona logika biznesowa. Dobieramy narzędzie do problemu, nigdy odwrotnie.
                </p>
              </div>
              <div className="pt-space-md border-t border-slate-100 flex items-center gap-1.5 text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Oszczędność budżetu</span>
              </div>
            </div>

            <div className="bg-white p-space-lg rounded-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[26px]">policy</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  Ochrona danych i RODO
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  Twoje dane i tajemnice przedsiębiorstwa nigdy nie zasilają publicznych modeli komercyjnych. Zapewniamy pełną suwerenność danych.
                </p>
              </div>
              <div className="pt-space-md border-t border-slate-100 flex items-center gap-1.5 text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Prywatna infrastruktura</span>
              </div>
            </div>

            <div className="bg-white p-space-lg rounded-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[26px]">receipt_long</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  Transparentna wycena
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  Jasny kosztorys po bezpośredniej analizie potrzeb. Żadnych ukrytych opłat licencyjnych ani sztucznych narzutów korporacyjnych.
                </p>
              </div>
              <div className="pt-space-md border-t border-slate-100 flex items-center gap-1.5 text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Przewidywalność ROI</span>
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
                  CASE STUDIES
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
                Przykładowe scenariusze wdrożenia
              </h2>
            </div>
            <Link
              to="/realizacje"
              className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-[#0A6CFF] hover:text-[#0056d1] transition-colors"
            >
              Zobacz wszystkie realizacje
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          {/* 2 Real-world Solution Scenario Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            <div className="bg-white rounded-lg p-space-lg sm:p-space-xl border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#0A6CFF]/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-space-md">
                  <span className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] font-label-sm text-label-sm font-semibold tracking-wide">
                    PRZYKŁADOWY SCENARIUSZ WDROŻENIA
                  </span>
                  <span className="material-symbols-outlined text-[#0A6CFF] text-[22px]">auto_awesome</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] font-bold mb-space-xs">
                  Inteligentny asystent ofertowania B2B
                </h3>
                <p className="font-body-md text-body-md text-[#475569] mb-space-md">
                  Automatyczne przetwarzanie zapytań ofertowych ze skrzynki e-mail, ekstrakcja parametrów technicznych i wstępne generowanie kalkulacji cenowej z bazy ERP.
                </p>
                <div className="bg-[#F8FAFC] p-space-md rounded-lg border border-slate-200/80 mb-space-md">
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div>
                      <span className="font-label-sm text-label-sm text-[#64748B] block">Czas odpowiedzi:</span>
                      <span className="font-headline-sm text-headline-sm text-[#0A6CFF] font-bold">Skrócony o 85%</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-[#64748B] block">Bezpieczeństwo:</span>
                      <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">Baza on-premise</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-space-xs flex items-center justify-between border-t border-slate-100">
                <span className="font-label-sm text-label-sm text-slate-500 font-medium">
                  Moduł: AI Copilot + API Integration
                </span>
                <Link
                  to="/realizacje"
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-[#0A6CFF] font-semibold hover:underline"
                >
                  Szczegóły scenariusza
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg p-space-lg sm:p-space-xl border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#0A6CFF]/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-space-md">
                  <span className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] font-label-sm text-label-sm font-semibold tracking-wide">
                    PRZYKŁADOWY SCENARIUSZ WDROŻENIA
                  </span>
                  <span className="material-symbols-outlined text-[#0A6CFF] text-[22px]">flowsheet</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] font-bold mb-space-xs">
                  Automatyczny obieg faktur i dokumentów magazynowych
                </h3>
                <p className="font-body-md text-body-md text-[#475569] mb-space-md">
                  System OCR wspierany wizyjnymi modelami AI odczytuje faktury kosztowe ze skanów i e-maili, weryfikuje kwoty z zamówieniami i automatycznie przekazuje wpisy do księgowości.
                </p>
                <div className="bg-[#F8FAFC] p-space-md rounded-lg border border-slate-200/80 mb-space-md">
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div>
                      <span className="font-label-sm text-label-sm text-[#64748B] block">Eliminacja pomyłek:</span>
                      <span className="font-headline-sm text-headline-sm text-[#0A6CFF] font-bold">Precyzja 99.4%</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-[#64748B] block">Zgodność:</span>
                      <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">Integracja KSeF / ERP</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-space-xs flex items-center justify-between border-t border-slate-100">
                <span className="font-label-sm text-label-sm text-slate-500 font-medium">
                  Moduł: Vision AI + Księgowość Cloud
                </span>
                <Link
                  to="/realizacje"
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-[#0A6CFF] font-semibold hover:underline"
                >
                  Szczegóły scenariusza
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>
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
                Umów się na bezpośrednią, 30-minutową rozmowę inżynieryjną. Przeanalizujemy Twoje procesy i wskażemy bez owijania w bawełnę, gdzie automatyzacja lub AI realnie przyniesie zwrot.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
                <Link
                  to="/kontakt"
                  className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] px-9 py-4 rounded-[10px] shadow-[0_0_24px_rgba(0,229,255,0.45)] hover:shadow-[0_0_36px_rgba(0,229,255,0.7)] hover:scale-105 transition-all"
                >
                  Wyślij zapytanie ofertowe
                  <span className="material-symbols-outlined ml-2 text-[20px]">send</span>
                </Link>
                <a
                  href="mailto:programistka.pl@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md font-medium text-white bg-[#0a1e3b]/80 border border-[#1e3962] hover:bg-[#112d54] px-7 py-4 rounded-[10px] shadow-sm transition-colors"
                >
                  <span className="material-symbols-outlined mr-2 text-[18px]">mail</span>
                  Napisz bezpośrednio
                </a>
              </div>
              <p className="font-label-sm text-label-sm text-slate-400 mt-space-md">
                Odpowiadamy w ciągu 24h • Bez korporacyjnego narzutu • Zgodność z RODO
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
