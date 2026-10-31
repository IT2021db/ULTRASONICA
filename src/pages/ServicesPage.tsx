import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const faqItems = [
    {
      q: 'Czy muszę znać się na AI?',
      a: 'Nie, to nasza rola. Tłumaczymy wszystko prostym, zrozumiałym językiem biznesowym i dbamy o to, by narzędzia były intuicyjne dla każdego członka Twojego zespołu od pierwszego dnia.',
    },
    {
      q: 'Ile to kosztuje?',
      a: 'Każdy projekt ma inną skalę i specyfikę techniczną. Po pierwszej, bezpłatnej rozmowie i analizie wymagań przygotowujemy jasną, przejrzystą wycenę z podziałem na etapy – bez ukrytych kosztów.',
    },
    {
      q: 'Czy moje dane są bezpieczne?',
      a: 'Bezwzględnie tak. Projektujemy rozwiązania zgodnie z RODO, korzystając z odizolowanych, bezpiecznych instancji, gdzie Twoje firmowe dane nigdy nie są wykorzystywane do trenowania ogólnodostępnych modeli publicznych.',
    },
    {
      q: 'Jak wygląda współpraca?',
      a: 'Rozmawiasz bezpośrednio z głównym inżynierem i architektem rozwiązań, a nie z account managerem czy handlowcem. Po analizie celów biznesowych tworzymy architekturę techniczną i zwinnie wdrażamy narzędzie w krótkich iteracjach z pełnym transferem wiedzy.',
    },
    {
      q: 'Czy można zacząć od małego projektu?',
      a: 'Oczywiście. Zawsze rekomendujemy start od szybkiego pilotażu (Proof of Concept) lub automatyzacji jednego, najbardziej uciążliwego wąskiego gardła, by natychmiast zobaczyć mierzalny zwrot z inwestycji.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION (Głęboki granat w stylu brandu) */}
      <section className="relative w-full overflow-hidden bg-[#001029] text-white px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-28 border-b border-[#142642]">
        {/* Hexagonal Geometric Ambient Backdrop */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full object-cover" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
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
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-container/20 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-secondary-container/15 blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-[1280px] mx-auto flex flex-col items-start">
          {/* Status Chip */}
          <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-[#0a1e3a]/90 border border-[#1b355d] backdrop-blur-md shadow-sm mb-space-md">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed shadow-[0_0_8px_#00daf3] animate-pulse"></span>
            <span className="font-subheading-eyebrow text-subheading-eyebrow uppercase text-secondary-fixed tracking-wider font-semibold text-[11px] sm:text-[13px]">
              KOMPLEKSOWE PORTFOLIO USŁUG
            </span>
          </div>

          {/* Main Headline & Subtitle */}
          <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-white max-w-4xl tracking-tight mb-space-md font-bold">
            Nasze Usługi:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed via-primary to-primary-container">
              Inżynieria i AI
            </span>{' '}
            dla Twojego Biznesu
          </h1>

          <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl mb-space-xl leading-relaxed">
            Lata komercyjnego rzemiosła programistycznego łączymy z architekturą modeli nowej generacji. Budujemy gotowe, stabilne rozwiązania produkcyjne i bezpieczne wdrożenia AI w modelu bezpośredniej współpracy z głównym inżynierem – bez pośredników i korporacyjnego szumu.
          </p>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter w-full pt-space-lg">
            <div className="flex flex-col bg-[#091b35]/90 border border-[#1a3359] p-space-md rounded-lg shadow-sm backdrop-blur-sm">
              <span className="font-headline-xl text-headline-xl text-secondary-fixed font-bold">99.8%</span>
              <span className="font-label-sm text-label-sm text-slate-300 uppercase tracking-wider mt-1">
                Dostępność Systemów
              </span>
            </div>
            <div className="flex flex-col bg-[#091b35]/90 border border-[#1a3359] p-space-md rounded-lg shadow-sm backdrop-blur-sm">
              <span className="font-headline-xl text-headline-xl text-primary font-bold">10x</span>
              <span className="font-label-sm text-label-sm text-slate-300 uppercase tracking-wider mt-1">
                Szybsza Praca z Wiedzą
              </span>
            </div>
            <div className="flex flex-col bg-[#091b35]/90 border border-[#1a3359] p-space-md rounded-lg shadow-sm backdrop-blur-sm">
              <span className="font-headline-xl text-headline-xl text-secondary-fixed-dim font-bold">100%</span>
              <span className="font-label-sm text-label-sm text-slate-300 uppercase tracking-wider mt-1">
                Bezpieczeństwa &amp; RODO
              </span>
            </div>
            <div className="flex flex-col bg-[#091b35]/90 border border-[#1a3359] p-space-md rounded-lg shadow-sm backdrop-blur-sm">
              <span className="font-headline-xl text-headline-xl text-tertiary font-bold">24/7</span>
              <span className="font-label-sm text-label-sm text-slate-300 uppercase tracking-wider mt-1">
                Monitorowanie Aktywne
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 COMPREHENSIVE SERVICE BLOCKS (Jasny styl z eleganckimi białymi kartami) */}
      <section className="w-full bg-[#FAFAF9] px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-28 border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-space-xl lg:gap-24">
          {/* SERVICE BLOCK 1: Wdrożenia AI */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center bg-white p-space-md md:p-space-lg lg:p-space-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-200 relative overflow-hidden rounded-lg hover:shadow-[0_12px_32px_rgba(10,108,255,0.08)] transition-all duration-300">
            {/* Left Column: Narrative Details */}
            <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="font-subheading-eyebrow text-subheading-eyebrow text-[#0A6CFF] bg-[#F0F7FF] border border-[#D5E7FF] px-3 py-1 rounded-full uppercase font-semibold text-[11px] sm:text-[13px]">
                  MODUŁ 01
                </span>
                <span className="font-label-sm text-label-sm text-[#475569] font-medium">
                  Sztuczna Inteligencja
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-[#0B0F19] font-bold tracking-tight">
                Wdrożenia AI &amp; LLM
              </h2>
              <p className="font-body-lg text-body-lg text-[#475569] leading-relaxed">
                Praktyczne wdrożenia modeli sztucznej inteligencji oparte na solidnym inżynieryjnym fundamencie. Nie robimy powierzchownych eksperymentów – integrujemy modele językowe z rzeczywistą logiką biznesową przedsiębiorstwa, tworząc wymierne zyski operacyjne.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md w-full mt-space-xs">
                <div className="p-space-md bg-[#F8FAFC] rounded-lg border border-slate-200/90 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-[#0A6CFF]">
                    <span className="material-symbols-outlined text-[20px]">group</span>
                    <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-semibold">Dla kogo</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#475569]">
                    Firmy obsługujące dużą liczbę zapytań, tonące w powtarzalnych dokumentach lub chcące usprawnić pracę zespołu.
                  </p>
                </div>
                <div className="p-space-md bg-[#F8FAFC] rounded-lg border border-slate-200/90 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-[#0A6CFF]">
                    <span className="material-symbols-outlined text-[20px]">bolt</span>
                    <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-semibold">Co zyskasz</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#475569]">
                    Czas pracowników uwolniony od rutyny, natychmiastowe odpowiedzi dla klientów, dostęp do wiedzy firmy w ułamku sekundy.
                  </p>
                </div>
              </div>
              {/* Przykładowe Zastosowania */}
              <div className="w-full flex flex-col gap-2 mt-space-xs">
                <span className="font-label-md text-label-md text-[#0B0F19] font-semibold">
                  Przykładowe zastosowania:
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F0F7FF] border border-[#D5E7FF] rounded-full font-body-sm text-body-sm text-[#1E293B] font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#0A6CFF]">smart_toy</span>
                    Inteligentne chatboty i asystenci firmowi
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F0F7FF] border border-[#D5E7FF] rounded-full font-body-sm text-body-sm text-[#1E293B] font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#0A6CFF]">description</span>
                    Analiza i podsumowywanie umów oraz ofert
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F0F7FF] border border-[#D5E7FF] rounded-full font-body-sm text-body-sm text-[#1E293B] font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#0A6CFF]">search_insights</span>
                    Semantyczne przeszukiwanie bazy wiedzy
                  </span>
                </div>
              </div>
              {/* Jak to wygląda w praktyce */}
              <div className="w-full p-space-md bg-[#F1F5F9] rounded-lg flex items-start gap-space-sm mt-space-xs border border-slate-200">
                <span className="material-symbols-outlined text-[#0A6CFF] mt-0.5">verified_user</span>
                <div>
                  <span className="font-label-md text-label-md font-semibold text-[#0B0F19] block">
                    Jak to wygląda w praktyce:
                  </span>
                  <span className="font-body-sm text-body-sm text-[#475569]">
                    Bezpośredni kontakt z inżynierem architektury: wdrażamy odizolowane, bezpieczne instancje z gwarancją poufności danych firmowych oraz prowadzimy warsztatowe wdrożenie zespołu.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Telemetry */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full bg-[#F8FAFC] p-space-md shadow-md border border-slate-200 relative flex flex-col gap-space-sm rounded-lg">
                <div className="relative w-full h-56 rounded-lg overflow-hidden bg-slate-900">
                  <img
                    alt="Neural Engine Visual"
                    className="w-full h-full object-cover opacity-90"
                    src="/images/service_ai.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#001029]/80 backdrop-blur-md font-label-sm text-label-sm text-secondary-fixed flex items-center gap-1.5 border border-[#1b345a]">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span> NEURAL_ENGINE: ACTIVE
                  </div>
                </div>
                {/* Mini Telemetry Graphic */}
                <div className="w-full bg-white p-space-sm rounded-lg border border-slate-200 flex flex-col gap-2 shadow-sm">
                  <div className="flex justify-between items-center font-label-sm text-label-sm text-[#475569]">
                    <span>Efektywność Przetwarzania Dokumentów</span>
                    <span className="text-[#0A6CFF] font-bold">+84.6%</span>
                  </div>
                  {/* Inline SVG Progress Graph */}
                  <svg className="w-full h-8" fill="none" viewBox="0 0 300 32">
                    <path
                      d="M0 24 Q 40 28, 80 16 T 160 14 T 240 6 T 300 2"
                      fill="none"
                      stroke="#0A6CFF"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M0 24 Q 40 28, 80 16 T 160 14 T 240 6 T 300 2 L 300 32 L 0 32 Z"
                      fill="#0A6CFF"
                      opacity="0.15"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE BLOCK 2: Aplikacje i systemy dedykowane */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center bg-white p-space-md md:p-space-lg lg:p-space-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-200 relative overflow-hidden rounded-lg hover:shadow-[0_12px_32px_rgba(10,108,255,0.08)] transition-all duration-300">
            {/* Left Column: Visual System Architecture Mockup */}
            <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full bg-[#F8FAFC] p-space-md shadow-md border border-slate-200 relative flex flex-col gap-space-sm rounded-lg">
                <div className="relative w-full h-56 rounded-lg overflow-hidden bg-slate-900">
                  <img
                    alt="Enterprise Core Architecture"
                    className="w-full h-full object-cover opacity-90"
                    src="/images/service_dev.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#001029]/80 backdrop-blur-md font-label-sm text-label-sm text-primary flex items-center gap-1.5 border border-[#1b345a]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> ENTERPRISE_CORE: v4.2
                  </div>
                </div>
                {/* Mini Functional Metric */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-space-sm rounded-lg border border-slate-200 flex flex-col shadow-sm">
                    <span className="font-label-sm text-label-sm text-[#475569]">Architektura</span>
                    <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">Microservices</span>
                  </div>
                  <div className="bg-white p-space-sm rounded-lg border border-slate-200 flex flex-col shadow-sm">
                    <span className="font-label-sm text-label-sm text-[#475569]">Czas Odpowiedzi</span>
                    <span className="font-headline-sm text-headline-sm text-[#0A6CFF] font-bold">&lt; 45ms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Details */}
            <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-start gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="font-subheading-eyebrow text-subheading-eyebrow text-[#0A6CFF] bg-[#F0F7FF] border border-[#D5E7FF] px-3 py-1 rounded-full uppercase font-semibold text-[11px] sm:text-[13px]">
                  MODUŁ 02
                </span>
                <span className="font-label-sm text-label-sm text-[#475569] font-medium">
                  Architektura Oprogramowania
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-[#0B0F19] font-bold tracking-tight">
                Aplikacje i systemy dedykowane
              </h2>
              <p className="font-body-lg text-body-lg text-[#475569] leading-relaxed">
                Dedykowane oprogramowanie webowe i platformy biznesowe rozwiązujące unikalne wąskie gardła. Eliminujemy ograniczenia szablonowych platform, tworząc kod dokładnie na miarę.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md w-full mt-space-xs">
                <div className="p-space-md bg-[#F8FAFC] rounded-lg border border-slate-200/90 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-[#0A6CFF]">
                    <span className="material-symbols-outlined text-[20px]">domain</span>
                    <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-semibold">Dla kogo</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#475569]">
                    Przedsiębiorstwa, które wyrosły z gotowych systemów pudełkowych lub arkuszy kalkulacyjnych.
                  </p>
                </div>
                <div className="p-space-md bg-[#F8FAFC] rounded-lg border border-slate-200/90 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-[#0A6CFF]">
                    <span className="material-symbols-outlined text-[20px]">fit_screen</span>
                    <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-semibold">Co zyskasz</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#475569]">
                    Pełną kontrolę nad procesem, skalowalność i narzędzie idealnie skrojone pod nawyki Twoich pracowników.
                  </p>
                </div>
              </div>
              {/* Przykładowe Zastosowania */}
              <div className="w-full flex flex-col gap-2 mt-space-xs">
                <span className="font-label-md text-label-md text-[#0B0F19] font-semibold">
                  Przykładowe zastosowania:
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F0F7FF] border border-[#D5E7FF] rounded-full font-body-sm text-body-sm text-[#1E293B] font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#0A6CFF]">storefront</span>
                    Panele klienta B2B
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F0F7FF] border border-[#D5E7FF] rounded-full font-body-sm text-body-sm text-[#1E293B] font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#0A6CFF]">precision_manufacturing</span>
                    Systemy zarządzania zleceniami i produkcją
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F0F7FF] border border-[#D5E7FF] rounded-full font-body-sm text-body-sm text-[#1E293B] font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#0A6CFF]">admin_panel_settings</span>
                    Dedykowane panele administracyjne
                  </span>
                </div>
              </div>
              {/* Jak to wygląda w praktyce */}
              <div className="w-full p-space-md bg-[#F1F5F9] rounded-lg flex items-start gap-space-sm mt-space-xs border border-slate-200">
                <span className="material-symbols-outlined text-[#0A6CFF] mt-0.5">terminal</span>
                <div>
                  <span className="font-label-md text-label-md font-semibold text-[#0B0F19] block">
                    Jak to wygląda w praktyce:
                  </span>
                  <span className="font-body-sm text-body-sm text-[#475569]">
                    Praca w zwinnym modelu partnerskim: od precyzyjnych warsztatów funkcjonalnych z architektem, przez kod prototypu, po wdrożenie produkcyjne i stałą asystę powdrożeniową.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE BLOCK 3: Automatyzacja procesów i integracje */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center bg-white p-space-md md:p-space-lg lg:p-space-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-200 relative overflow-hidden rounded-lg hover:shadow-[0_12px_32px_rgba(10,108,255,0.08)] transition-all duration-300">
            {/* Left Column: Narrative Details */}
            <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="font-subheading-eyebrow text-subheading-eyebrow text-[#0A6CFF] bg-[#F0F7FF] border border-[#D5E7FF] px-3 py-1 rounded-full uppercase font-semibold text-[11px] sm:text-[13px]">
                  MODUŁ 03
                </span>
                <span className="font-label-sm text-label-sm text-[#475569] font-medium">
                  Ekosystem Cyfrowy
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-[#0B0F19] font-bold tracking-tight">
                Automatyzacja procesów i integracje
              </h2>
              <p className="font-body-lg text-body-lg text-[#475569] leading-relaxed">
                Bezproblemowe łączenie używanych na co dzień aplikacji i likwidacja ręcznego przepisywania danych. Tworzymy spójną magistralę wymiany informacji w całym przedsiębiorstwie.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md w-full mt-space-xs">
                <div className="p-space-md bg-[#F8FAFC] rounded-lg border border-slate-200/90 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-[#0A6CFF]">
                    <span className="material-symbols-outlined text-[20px]">hub</span>
                    <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-semibold">Dla kogo</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#475569]">
                    Zespoły pracujące na wielu nieskomunikowanych narzędziach (CRM, ERP, skrzynka pocztowa, fakturowanie).
                  </p>
                </div>
                <div className="p-space-md bg-[#F8FAFC] rounded-lg border border-slate-200/90 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-[#0A6CFF]">
                    <span className="material-symbols-outlined text-[20px]">hourglass_empty</span>
                    <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-semibold">Co zyskasz</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-[#475569]">
                    Zero błędów ludzkich przy przepisywaniu danych, powiadomienia w czasie rzeczywistym i oszczędność dziesiątek godzin tygodniowo.
                  </p>
                </div>
              </div>
              {/* Przykładowe Zastosowania */}
              <div className="w-full flex flex-col gap-2 mt-space-xs">
                <span className="font-label-md text-label-md text-[#0B0F19] font-semibold">
                  Przykładowe zastosowania:
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F0F7FF] border border-[#D5E7FF] rounded-full font-body-sm text-body-sm text-[#1E293B] font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#0A6CFF]">receipt_long</span>
                    Automatyczny obieg faktur
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F0F7FF] border border-[#D5E7FF] rounded-full font-body-sm text-body-sm text-[#1E293B] font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#0A6CFF]">sync_alt</span>
                    Synchronizacja zamówień ze stanem magazynowym
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F0F7FF] border border-[#D5E7FF] rounded-full font-body-sm text-body-sm text-[#1E293B] font-medium">
                    <span className="material-symbols-outlined text-[16px] text-[#0A6CFF]">notifications_active</span>
                    Powiadomienia SMS / Slack / Email
                  </span>
                </div>
              </div>
              {/* Jak to wygląda w praktyce */}
              <div className="w-full p-space-md bg-[#F1F5F9] rounded-lg flex items-start gap-space-sm mt-space-xs border border-slate-200">
                <span className="material-symbols-outlined text-[#0A6CFF] mt-0.5">security_update_good</span>
                <div>
                  <span className="font-label-md text-label-md font-semibold text-[#0B0F19] block">
                    Jak to wygląda w praktyce:
                  </span>
                  <span className="font-body-sm text-body-sm text-[#475569]">
                    Bezpieczna konfiguracja webhooków, API i zautomatyzowanych reguł z monitoringiem działania 24/7.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Telemetry / Flow Visualization */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full bg-[#F8FAFC] p-space-md shadow-md border border-slate-200 relative flex flex-col gap-space-sm rounded-lg">
                <div className="relative w-full h-56 rounded-lg overflow-hidden bg-slate-900">
                  <img
                    alt="Pipeline Flow Visualization"
                    className="w-full h-full object-cover opacity-90"
                    src="/images/service_automation.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#001029]/80 backdrop-blur-md font-label-sm text-label-sm text-secondary-fixed flex items-center gap-1.5 border border-[#1b345a]">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span> PIPELINE: SYNCHRONIZED
                  </div>
                </div>
                {/* Flow Visual Diagram Nodes */}
                <div className="flex items-center justify-between p-space-sm bg-white border border-slate-200 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#F0F7FF] border border-[#D5E7FF] flex items-center justify-center text-[#0A6CFF] font-bold text-label-sm">
                      ERP
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-[18px]">east</span>
                    <div className="w-8 h-8 rounded-full bg-[#E0EDFF] border border-[#BFDBFE] flex items-center justify-center text-[#0A6CFF] font-bold text-label-sm">
                      AI
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-[18px]">east</span>
                    <div className="w-8 h-8 rounded-full bg-[#F0F7FF] border border-[#D5E7FF] flex items-center justify-center text-[#0A6CFF] font-bold text-label-sm">
                      CRM
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#0A6CFF] font-bold">100% zautomatyzowane</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FAQ SECTION (Czyste jasne tło, białe akordeony z ciemnym tekstem) */}
      <section className="w-full bg-[#FAFAF9] px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-28 relative">
        <div className="max-w-[880px] mx-auto flex flex-col items-center">
          {/* Eyebrow & Title */}
          <div className="flex flex-col items-center text-center mb-space-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] mb-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A6CFF]"></span>
              <span className="font-subheading-eyebrow text-subheading-eyebrow uppercase tracking-widest font-bold text-[11px] sm:text-[13px]">
                ODPOWIEDZI NA CZĘSTE PYTANIA
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-[#0B0F19] font-bold tracking-tight">
              Najczęściej zadawane pytania
            </h2>
            <p className="font-body-md text-body-md text-[#475569] max-w-xl mt-space-xs">
              Wszystko, co warto wiedzieć przed rozpoczęciem wspólnego wdrożenia technologicznego z zespołem Ultrasonica.
            </p>
          </div>

          {/* Accordion Container */}
          <div className="w-full flex flex-col gap-space-sm" id="faq-accordion">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="faq-item bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 rounded-lg hover:border-[#0A6CFF]/40"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="faq-toggle w-full px-space-md py-space-md flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-semibold flex items-center gap-space-sm">
                      <span className="w-6 h-6 rounded-full bg-[#F0F7FF] border border-[#D5E7FF] flex items-center justify-center text-label-sm text-[#0A6CFF] font-bold">
                        {idx + 1}
                      </span>
                      {item.q}
                    </span>
                    <span
                      className={`faq-icon material-symbols-outlined text-[#0A6CFF] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    className={`faq-content overflow-hidden transition-all duration-300 px-space-md bg-slate-50/60 ${
                      isOpen ? 'max-h-96 py-space-md pt-0' : 'max-h-0'
                    }`}
                  >
                    <div className="font-body-md text-body-md text-[#475569] leading-relaxed">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION (Mocny granatowy pas konwersyjny w stylu strony głównej) */}
      <section className="w-full bg-[#FAFAF9] px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-24 relative overflow-hidden border-t border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
          <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-[#001433] via-[#051c3d] to-[#001029] border border-[#19355f] p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#00E5FF]/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -left-16 -top-16 w-80 h-80 bg-[#0A6CFF]/25 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081a33]/80 border border-[#1d375f] backdrop-blur-md text-secondary-fixed mb-space-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
                <span className="font-subheading-eyebrow text-subheading-eyebrow font-semibold uppercase text-[11px] sm:text-[13px]">
                  POROZMAWIAJMY O TWOIM PROJEKCIE
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl sm:text-display-hero text-white font-bold tracking-tight mb-space-sm">
                Gotowy na optymalizację swoich procesów?
              </h2>
              <p className="font-body-lg text-body-lg text-slate-300 max-w-xl mb-space-lg">
                Napisz do nas lub umów się na wstępną 30-minutową konsultację z architektem rozwiązań. Zero korporacyjnego szumu, zwięzła analiza techniczna i transparentne podejście inżynieryjne.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
                <Link
                  to="/kontakt"
                  className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] px-9 py-4 rounded-[10px] shadow-[0_0_24px_rgba(0,229,255,0.45)] hover:shadow-[0_0_36px_rgba(0,229,255,0.7)] hover:scale-105 transition-all"
                >
                  Wyślij zapytanie
                  <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
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
