import React from 'react';
import { Link } from 'react-router-dom';

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Dynamic Ambient Header Stage Layer */}
      <div className="relative w-full overflow-hidden bg-white border-b border-slate-200/80">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#00E5FF]/10 via-[#0A6CFF]/5 to-transparent blur-[120px] rounded-full"></div>

        {/* Hero Header Stage */}
        <section className="relative max-w-[1280px] mx-auto px-gutter pt-12 pb-16 lg:pt-16 lg:pb-20">
          <div className="flex flex-col items-start max-w-4xl">
            {/* Honest Disclaimer Badge (Pill with animated telemetry pip) */}
            <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A6CFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A6CFF]"></span>
              </span>
              <span className="font-subheading-eyebrow text-subheading-eyebrow tracking-widest uppercase font-bold text-[#0A6CFF] text-[11px] sm:text-[13px]">
                Przykładowy scenariusz wdrożenia • Nie referencja klienta
              </span>
            </div>

            <h1 className="font-headline-xl text-headline-xl text-[#0B0F19] font-bold tracking-tight mb-4">
              Jak inteligentne systemy pracują w firmach
            </h1>

            <p className="font-body-lg text-body-lg text-[#475569] max-w-2xl leading-relaxed">
              Zobacz realistyczne scenariusze wdrożeń automatyzacji i sztucznej inteligencji w małych i średnich przedsiębiorstwach. Żadnych fikcyjnych statystyk — czysta inżynieria procesowa i mierzalna eliminacja chaosu.
            </p>

            {/* Technical Telemetry Indicators Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-10 p-5 bg-[#F8FAFC] border border-slate-200 shadow-sm rounded-lg">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-slate-500 font-semibold">ARCHITEKTURA</span>
                <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">Zero Data Leak</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-slate-500 font-semibold">STANDARD MODELI</span>
                <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">Private LLM / RAG</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-slate-500 font-semibold">CZAS REAKCJI</span>
                <span className="font-headline-sm text-headline-sm text-[#0A6CFF] font-bold">≤ 10 sekund</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-slate-500 font-semibold">INTEGRACJE ERP</span>
                <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">REST API &amp; Webhook</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CASE SCENARIOS MASTER CONTAINER (Jasne tło, białe estetyczne karty) */}
      <div className="bg-[#FAFAF9] py-16 lg:py-24">
        <section className="max-w-[1280px] mx-auto px-gutter space-y-16 lg:space-y-24">
          {/* SCENARIUSZ 01: ASYSTENT AI DO ZAPYTAŃ OFERTOWYCH */}
          <article className="bg-white border border-slate-200 p-6 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text Columns (6 cols) */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-label-sm text-label-sm font-bold text-[#0A6CFF] bg-[#F0F7FF] border border-[#D5E7FF] px-2.5 py-1 rounded">
                    SCENARIUSZ 01
                  </span>
                  <span className="font-subheading-eyebrow text-subheading-eyebrow text-slate-500 font-bold uppercase tracking-wider text-[11px] sm:text-[13px]">
                    SPRZEDAŻ B2B &amp; KATALOGI TECHNICZNE
                  </span>
                </div>

                <h2 className="font-headline-lg text-headline-lg text-[#0B0F19] font-bold">
                  Asystent AI do odpowiadania na zapytania ofertowe
                </h2>

                <div className="space-y-4">
                  {/* Problem Block */}
                  <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#E11D48] text-[22px] shrink-0 mt-0.5">report_problem</span>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-[#E11D48] uppercase tracking-wider block mb-1">Problem</span>
                      <p className="font-body-md text-body-md text-[#475569]">
                        Handlowcy spędzali po 2-3 godziny dziennie na przeszukiwaniu specyfikacji technicznych i redagowaniu powtarzalnych maili.
                      </p>
                    </div>
                  </div>

                  {/* Solution Block */}
                  <div className="p-4 rounded-lg bg-[#F0F7FF] border border-[#D5E7FF] flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[22px] shrink-0 mt-0.5">neurology</span>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-[#0A6CFF] uppercase tracking-wider block mb-1">Rozwiązanie</span>
                      <p className="font-body-md text-body-md text-[#334155]">
                        Wdrożenie wewnętrznego asystenta AI połączonego z katalogiem produktów i bezpieczną bazą wiedzy firmy.
                      </p>
                    </div>
                  </div>

                  {/* Effect Block */}
                  <div className="p-4 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#16A34A] text-[22px] shrink-0 mt-0.5">verified</span>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-[#16A34A] uppercase tracking-wider block mb-1">Efekt</span>
                      <p className="font-body-md text-body-md text-[#1E293B]">
                        Wstępne wersje spersonalizowanych ofert generowane w 10 sekund; handlowcy skupiają się na relacjach i domykaniu sprzedaży.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* UI Frame: Laptop Frame (6 cols) */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                <div className="w-full max-w-[540px] bg-[#001029] rounded-t-xl p-2.5 pb-0 shadow-xl border border-slate-800">
                  {/* Laptop Top Bezel */}
                  <div className="flex items-center justify-between px-3 py-1.5 bg-[#000E25] rounded-t-lg">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-[#0F2039] text-slate-400 text-label-sm font-label-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px] text-secondary-fixed">lock</span>
                      crm.ultrasonica.local/sales-copilot
                    </div>
                    <div className="w-8"></div>
                  </div>

                  {/* Screen Inner Content: CRM AI Chat Interface */}
                  <div className="bg-[#02132C] p-4 sm:p-5 flex flex-col space-y-4">
                    {/* Context header */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#1A2A44]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary-fixed text-[20px]">smart_toy</span>
                        <span className="font-headline-sm text-headline-sm text-white">Sales Assistant RAG</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary-fixed bg-[#0F2039] px-2 py-0.5 rounded-full border border-[#1A2A44]">
                        Katalog v4.2 aktywny
                      </span>
                    </div>

                    {/* Chat flow */}
                    <div className="space-y-3">
                      {/* User incoming request inquiry */}
                      <div className="p-3 rounded-lg bg-[#0F2039] max-w-[85%] text-slate-200 border border-[#1E304F]">
                        <span className="font-label-sm text-label-sm text-slate-400 block mb-1">
                          Zapytanie klienta (E-mail ID: #4812)
                        </span>
                        <p className="font-body-sm text-body-sm text-slate-200">
                          „Dzień dobry, szukamy 15 falowników o mocy &gt;22kW odpornych na pył chemiczny z dostawą w 48h. Jaki model rekomendujecie?”
                        </p>
                      </div>

                      {/* AI Generated Response preview */}
                      <div className="p-3.5 rounded-lg bg-[#1A2A44] ml-auto max-w-[92%] shadow-sm border border-[#25354F]">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[15px]">auto_awesome</span> Propozycja szkicu (czas reakcji: 1.4s)
                          </span>
                          <span className="font-label-sm text-label-sm text-[#00E5FF] font-medium">Trafność: 99.4%</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-white mb-3">
                          Sugerowany model: <strong className="text-secondary-fixed">UltraDrive-X25 (IP66)</strong>. Mamy na stanie w magazynie Gdynia 24 sztuki. Przygotowano wycenę hurtową z rabatem progowym (tier B).
                        </p>
                        <div className="flex gap-2">
                          <button
                            className="font-label-sm text-label-sm px-3 py-1 bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] text-white rounded font-semibold shadow-sm"
                            type="button"
                          >
                            Wstaw do Gmaila
                          </button>
                          <button
                            className="font-label-sm text-label-sm px-3 py-1 bg-[#0F2039] text-slate-200 border border-[#25354F] rounded hover:text-white"
                            type="button"
                          >
                            Zmień rabat
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Input simulation */}
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0F2039] text-slate-400 border border-[#1A2A44]">
                      <span className="material-symbols-outlined text-[18px]">attach_file</span>
                      <span className="font-body-sm text-body-sm flex-1 text-slate-400">
                        Wpisz komendę lub podaj numer zapytania...
                      </span>
                      <span className="material-symbols-outlined text-secondary-fixed text-[20px]">send</span>
                    </div>
                  </div>
                </div>

                {/* Laptop Bottom Base */}
                <div className="w-full max-w-[590px] h-3.5 bg-slate-800 rounded-b-xl flex justify-center items-center">
                  <div className="w-16 h-1 bg-slate-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </article>

          {/* SCENARIUSZ 02: AUTOMATYCZNE PRZETWARZANIE FAKTUR */}
          <article className="bg-white border border-slate-200 p-6 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Visual Mockup (6 cols - Order 2 on mobile, 1 on desktop) */}
              <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
                <div className="w-full max-w-[460px] bg-[#001029] p-3 shadow-xl rounded-lg border border-slate-800">
                  <div className="bg-[#02132C] p-5 flex flex-col space-y-4 rounded-md border border-[#1A2A44]">
                    <div className="flex items-center justify-between pb-2 border-b border-[#1A2A44]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary-fixed text-[22px]">document_scanner</span>
                        <span className="font-headline-sm text-headline-sm text-white font-bold">
                          OCR Parser • ERP Bridge
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary-fixed bg-[#0F2039] px-2.5 py-0.5 rounded-full border border-[#1E304F]">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span> Status: Zgodny
                      </span>
                    </div>

                    {/* Document analysis view */}
                    <div className="p-3.5 rounded-lg bg-[#0F2039] space-y-2.5 border border-[#1E304F]">
                      <div className="flex items-center justify-between font-label-sm text-label-sm">
                        <span className="text-slate-300 font-medium">Plik: Faktura_VAT_2026_03_991.pdf</span>
                        <span className="text-secondary-fixed font-semibold">100% zaufania OCR</span>
                      </div>

                      {/* Extracted Entities Pills */}
                      <div className="grid grid-cols-2 gap-2 text-label-sm font-label-sm">
                        <div className="p-2 rounded bg-[#1A2A44] border border-[#25354F]">
                          <span className="text-slate-400 block text-xs">Sprzedawca:</span>
                          <span className="text-white font-semibold truncate block">Nordic Metal Sp. z o.o.</span>
                          <span className="text-secondary-fixed-dim text-xs">NIP: 586-21-44-890 [Biała Lista OK]</span>
                        </div>
                        <div className="p-2 rounded bg-[#1A2A44] border border-[#25354F]">
                          <span className="text-slate-400 block text-xs">Kwota brutto:</span>
                          <span className="text-white font-semibold block">48 760,00 PLN</span>
                          <span className="text-secondary-fixed-dim text-xs">VAT: 23% (9 117,72 PLN)</span>
                        </div>
                      </div>

                      <div className="p-2 rounded bg-[#1A2A44] border border-[#25354F]">
                        <span className="text-slate-400 block text-xs">Numer konta (IBAN):</span>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-mono text-xs">PL 88 1090 1102 0000 0005 3211 9901</span>
                          <span className="text-secondary-fixed text-xs font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px]">check_circle</span> Zweryfikowano
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Live ERP Routing Log */}
                    <div className="p-3 rounded-lg bg-[#1A2A44] flex flex-col gap-1.5 font-label-sm text-label-sm border border-[#25354F]">
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Ścieżka dekretacji ERP:</span>
                        <span className="text-white font-medium">Konto 401-02 (Surowce)</span>
                      </div>
                      <div className="flex items-center justify-between text-secondary-fixed">
                        <span>Przesłano do Comarch Optima:</span>
                        <span className="font-mono">Payload HTTP 201 Created</span>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-1">
                      <button
                        className="font-label-sm text-label-sm px-4 py-2 bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] text-white rounded-lg font-semibold shadow-sm"
                        type="button"
                      >
                        Zatwierdź i zaksięguj
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Columns (6 cols - Order 1 on mobile, 2 on desktop) */}
              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-label-sm text-label-sm font-bold text-[#0A6CFF] bg-[#F0F7FF] border border-[#D5E7FF] px-2.5 py-1 rounded">
                    SCENARIUSZ 02
                  </span>
                  <span className="font-subheading-eyebrow text-subheading-eyebrow text-slate-500 font-bold uppercase tracking-wider text-[11px] sm:text-[13px]">
                    FINANSE &amp; KSIĘGOWOŚĆ OPERACYJNA
                  </span>
                </div>

                <h2 className="font-headline-lg text-headline-lg text-[#0B0F19] font-bold">
                  Automatyczne przetwarzanie faktur i dokumentów kosztowych
                </h2>

                <div className="space-y-4">
                  {/* Problem Block */}
                  <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#E11D48] text-[22px] shrink-0 mt-0.5">report_problem</span>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-[#E11D48] uppercase tracking-wider block mb-1">Problem</span>
                      <p className="font-body-md text-body-md text-[#475569]">
                        Dział księgowości ręcznie przepisywał dane z setek faktur PDF i skanów trafiających na pocztę.
                      </p>
                    </div>
                  </div>

                  {/* Solution Block */}
                  <div className="p-4 rounded-lg bg-[#F0F7FF] border border-[#D5E7FF] flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[22px] shrink-0 mt-0.5">visibility</span>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-[#0A6CFF] uppercase tracking-wider block mb-1">Rozwiązanie</span>
                      <p className="font-body-md text-body-md text-[#334155]">
                        System OCR wspomagany AI, który automatycznie odczytuje pozycje, weryfikuje NIP oraz kwoty i przesyła dane bezpośrednio do systemu ERP.
                      </p>
                    </div>
                  </div>

                  {/* Effect Block */}
                  <div className="p-4 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#16A34A] text-[22px] shrink-0 mt-0.5">verified</span>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-[#16A34A] uppercase tracking-wider block mb-1">Efekt</span>
                      <p className="font-body-md text-body-md text-[#1E293B]">
                        Całkowita eliminacja ręcznego przepisywania danych i pomyłek w numerach kont, natychmiastowe księgowanie kosztów.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* SCENARIUSZ 03: DEDYKOWANY PORTAL KLIENTA */}
          <article className="bg-white border border-slate-200 p-6 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text Columns (6 cols) */}
              <div className="lg:col-span-6 flex flex-col space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-label-sm text-label-sm font-bold text-[#0A6CFF] bg-[#F0F7FF] border border-[#D5E7FF] px-2.5 py-1 rounded">
                    SCENARIUSZ 03
                  </span>
                  <span className="font-subheading-eyebrow text-subheading-eyebrow text-slate-500 font-bold uppercase tracking-wider text-[11px] sm:text-[13px]">
                    PORTAL B2B &amp; PLANOWANIE PRODUKCJI
                  </span>
                </div>

                <h2 className="font-headline-lg text-headline-lg text-[#0B0F19] font-bold">
                  Dedykowany portal klienta z systemem zamówień
                </h2>

                <div className="space-y-4">
                  {/* Problem Block */}
                  <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#E11D48] text-[22px] shrink-0 mt-0.5">report_problem</span>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-[#E11D48] uppercase tracking-wider block mb-1">Problem</span>
                      <p className="font-body-md text-body-md text-[#475569]">
                        Zamówienia spływały chaotycznie przez telefon, SMS-y i maile, co prowadziło do pomyłek i opóźnień produkcyjnych.
                      </p>
                    </div>
                  </div>

                  {/* Solution Block */}
                  <div className="p-4 rounded-lg bg-[#F0F7FF] border border-[#D5E7FF] flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[22px] shrink-0 mt-0.5">devices</span>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-[#0A6CFF] uppercase tracking-wider block mb-1">Rozwiązanie</span>
                      <p className="font-body-md text-body-md text-[#334155]">
                        Prosta, responsywna aplikacja webowa dla stałych kontrahentów z podglądem stanów, automatyczną wyceną i historią zleceń.
                      </p>
                    </div>
                  </div>

                  {/* Effect Block */}
                  <div className="p-4 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#16A34A] text-[22px] shrink-0 mt-0.5">verified</span>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-[#16A34A] uppercase tracking-wider block mb-1">Efekt</span>
                      <p className="font-body-md text-body-md text-[#1E293B]">
                        Pełna przejrzystość zamówień dla klientów w trybie 24/7 oraz uporządkowany harmonogram dla zespołu produkcyjnego.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Composite UI: Monitor + Phone Composition (6 cols) */}
              <div className="lg:col-span-6 relative flex items-center justify-center pt-4 pb-2">
                {/* Monitor Mockup */}
                <div className="w-full max-w-[440px] bg-[#001029] rounded-xl p-3 shadow-xl border border-slate-800">
                  <div className="flex items-center justify-between pb-3 bg-[#001029] border-b border-[#1A2A44]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">
                      Portal Kontrahenta • B2B Portal
                    </span>
                    <span className="material-symbols-outlined text-slate-400 text-[16px]">account_circle</span>
                  </div>

                  <div className="rounded-lg bg-[#02132C] p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-headline-sm text-headline-sm text-white font-bold">
                        Aktualne zlecenia w toku
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary-fixed bg-[#0F2039] px-2 py-0.5 rounded border border-[#1A2A44]">
                        3 aktywne
                      </span>
                    </div>

                    {/* Table Preview */}
                    <div className="space-y-2">
                      <div className="p-2.5 rounded bg-[#0F2039] flex items-center justify-between border border-[#1E304F]">
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm font-semibold text-white">#ORD-9021 • Moduły X4</span>
                          <span className="font-label-sm text-label-sm text-slate-400">Dostawa: Piątek, 14:00</span>
                        </div>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-[#1A2A44] text-secondary-fixed font-medium">
                          W produkcji
                        </span>
                      </div>
                      <div className="p-2.5 rounded bg-[#0F2039] flex items-center justify-between border border-[#1E304F]">
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm font-semibold text-white">#ORD-8940 • Elementy T-800</span>
                          <span className="font-label-sm text-label-sm text-slate-400">Dostawa: Zrealizowano</span>
                        </div>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-[#1A2A44] text-[#00E5FF] font-medium">
                          Wysłane kurierem
                        </span>
                      </div>
                    </div>

                    {/* Direct Quick Action button */}
                    <div className="pt-1 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-slate-400">Dostępność magazynu: 98%</span>
                      <button
                        className="font-label-sm text-label-sm px-3 py-1.5 bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] text-white rounded font-medium shadow-sm"
                        type="button"
                      >
                        + Nowe zamówienie
                      </button>
                    </div>
                  </div>
                </div>

                {/* Overlapping Mobile Phone Screen Mockup */}
                <div className="absolute -bottom-4 right-0 sm:right-4 w-[190px] bg-[#000E25] p-2 shadow-2xl rounded-lg border border-slate-700">
                  <div className="rounded-xl bg-[#02132C] p-3 space-y-2.5 border border-[#1A2A44]">
                    <div className="w-10 h-1 bg-slate-600 rounded-full mx-auto mb-1"></div>
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-bold text-secondary-fixed">Mobilny status</span>
                      <span className="material-symbols-outlined text-[14px] text-secondary-fixed">notifications_active</span>
                    </div>
                    <div className="p-2 rounded bg-[#0F2039] border border-[#1E304F]">
                      <span className="font-label-sm text-label-sm text-slate-400 block text-[10px]">Powiadomienie PUSH:</span>
                      <span className="font-body-sm text-body-sm text-slate-200 text-xs block leading-tight font-medium">
                        Partia #ORD-9021 opuściła linię montażową.
                      </span>
                    </div>
                    <div className="w-full py-1 text-center bg-[#1A2A44] rounded text-[11px] font-label-sm text-secondary-fixed">
                      Podgląd trasy GPS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* SCENARIUSZ 04: INTEGRACJA CRM Z POCZTĄ I POWIADOMIENIAMI */}
          <article className="bg-white border border-slate-200 p-6 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Mobile Phone Mockup (6 cols - Order 2 on mobile, 1 on desktop) */}
              <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
                <div className="w-full max-w-[320px] bg-[#001029] p-3 shadow-xl rounded-lg border border-slate-800">
                  <div className="bg-[#02132C] p-4 flex flex-col space-y-3.5 rounded-md border border-[#1A2A44]">
                    {/* Dynamic Island */}
                    <div className="flex justify-center items-center py-1">
                      <div className="w-20 h-4 bg-[#000E25] rounded-full flex items-center justify-end px-2">
                        <div className="w-2 h-2 rounded-full bg-secondary-fixed"></div>
                      </div>
                    </div>
                    {/* Header Status */}
                    <div className="flex items-center justify-between pb-1 border-b border-[#1A2A44]">
                      <span className="font-headline-sm text-headline-sm text-white font-bold">CRM Sentinel</span>
                      <span className="material-symbols-outlined text-secondary-fixed text-[18px]">sync</span>
                    </div>
                    {/* Notification Stack 1 */}
                    <div className="p-3 rounded-xl bg-[#1A2A44] shadow-md space-y-1 border border-[#25354F]">
                      <div className="flex items-center justify-between text-label-sm font-label-sm">
                        <span className="text-secondary-fixed font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">mark_email_read</span> Oferta otwarta
                        </span>
                        <span className="text-slate-400 text-xs">2 min temu</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-slate-200 text-xs leading-snug">
                        Prezes firmy <strong className="text-white">Vanguard Logistyka</strong> otworzył załącznik wyceny (czas czytania: 4m 12s).
                      </p>
                    </div>
                    {/* Notification Stack 2 */}
                    <div className="p-3 rounded-xl bg-[#0F2039] space-y-1 border border-[#1E304F]">
                      <div className="flex items-center justify-between text-label-sm font-label-sm">
                        <span className="text-[#00E5FF] font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">schedule_send</span> Auto-przypomnienie
                        </span>
                        <span className="text-slate-400 text-xs">Zaplanowane</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-slate-300 text-xs leading-snug">
                        Sekwencja Follow-up #2 przygotowana do wysyłki na jutro g. 09:30 (brak odpowiedzi na maila #1).
                      </p>
                    </div>
                    {/* Notification Stack 3 */}
                    <div className="p-3 rounded-xl bg-[#0F2039] space-y-1 border border-[#1E304F]">
                      <div className="flex items-center justify-between text-label-sm font-label-sm">
                        <span className="text-white font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px] text-amber-400">phone_in_talk</span> Sugerowany telefon
                        </span>
                        <span className="text-secondary-fixed text-xs font-bold">GORĄCY LEAD</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-slate-300 text-xs leading-snug">
                        Współczynnik zainteresowania: <strong className="text-white">94%</strong>. Rekomendowany kontakt dziś do 16:00.
                      </p>
                    </div>
                    <button
                      className="w-full py-2.5 bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] text-white font-label-md text-label-md rounded-xl font-semibold shadow-sm flex items-center justify-center gap-1.5"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">call</span> Zadzwoń do klienta
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Columns (6 cols - Order 1 on mobile, 2 on desktop) */}
              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-label-sm text-label-sm font-bold text-[#0A6CFF] bg-[#F0F7FF] border border-[#D5E7FF] px-2.5 py-1 rounded">
                    SCENARIUSZ 04
                  </span>
                  <span className="font-subheading-eyebrow text-subheading-eyebrow text-slate-500 font-bold uppercase tracking-wider text-[11px] sm:text-[13px]">
                    SYNCHRONIZACJA • LEAD NURTURING
                  </span>
                </div>

                <h2 className="font-headline-lg text-headline-lg text-[#0B0F19] font-bold">
                  Integracja CRM z pocztą i powiadomieniami
                </h2>

                <div className="space-y-4">
                  {/* Problem Block */}
                  <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#E11D48] text-[22px] shrink-0 mt-0.5">report_problem</span>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-[#E11D48] uppercase tracking-wider block mb-1">Problem</span>
                      <p className="font-body-md text-body-md text-[#475569]">
                        Brak automatyzacji powodował gubienie leadów i brak terminowego kontaktu po wysłaniu oferty handlowej.
                      </p>
                    </div>
                  </div>

                  {/* Solution Block */}
                  <div className="p-4 rounded-lg bg-[#F0F7FF] border border-[#D5E7FF] flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[22px] shrink-0 mt-0.5">sync_alt</span>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-[#0A6CFF] uppercase tracking-wider block mb-1">Rozwiązanie</span>
                      <p className="font-body-md text-body-md text-[#334155]">
                        Dwukierunkowa integracja skrzynki pocztowej z systemem CRM oraz inteligentne powiadomienia o aktywności klienta.
                      </p>
                    </div>
                  </div>

                  {/* Effect Block */}
                  <div className="p-4 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#16A34A] text-[22px] shrink-0 mt-0.5">verified</span>
                    <div>
                      <span className="font-label-md text-label-md font-bold text-[#16A34A] uppercase tracking-wider block mb-1">Efekt</span>
                      <p className="font-body-md text-body-md text-[#1E293B]">
                        Zespół handlowy zawsze wie, kiedy klient zapoznał się z ofertą, a przypomnienia wysyłają się automatycznie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>

      {/* BANER / RAMKA: Tu wkrótce pojawią się autoryzowane realizacje */}
      <section className="max-w-[1280px] mx-auto px-gutter pb-16 lg:pb-24">
        <div className="relative bg-white border-2 border-dashed border-slate-300 p-8 sm:p-12 overflow-hidden shadow-sm rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">terminal</span>
                <span>MODEL PARTNERSKI • BEZPOŚREDNI NADZÓR ARCHITEKTA</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-[#0B0F19] font-bold">
                Tu wkrótce pojawią się autoryzowane realizacje
              </h3>
              <p className="font-body-md text-body-md text-[#475569] max-w-2xl leading-relaxed">
                Łączymy wieloletnie inżynieryjne fundamenty wytwarzania oprogramowania z najnowocześniejszymi modelami AI i automatyzacją procesów. Prowadzimy rygorystyczną politykę poufności (NDA) — wdrożenia komercyjne publikujemy wyłącznie po pełnej walidacji telemetrycznej i zgodzie klienta.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-slate-700 font-label-md text-label-md font-medium">
                  <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">verified_user</span>
                  Ścisła klauzula NDA
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-label-md text-label-md font-medium">
                  <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">shield</span>
                  Suwerenność danych (On-premise / Private Cloud)
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-label-md text-label-md font-medium">
                  <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">code</span>
                  Własność kodu i dedykowane repozytoria
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-lg bg-[#F8FAFC] border border-slate-200 flex flex-col items-start space-y-4 shadow-sm">
              <span className="font-label-sm text-label-sm text-[#0A6CFF] bg-[#EBF3FF] px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                PROGRAM PILOTAŻOWY 2026
              </span>
              <h4 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">
                Zostań partnerem wdrożeniowym
              </h4>
              <p className="font-body-sm text-body-sm text-[#475569]">
                Dla zakwalifikowanych firm oferujemy dedykowane warunki wdrożenia pilotażowego z bezpośrednim zaangażowaniem głównego architekta w zamian za udokumentowane case study.
              </p>
              <Link
                to="/kontakt"
                className="w-full text-center font-label-md text-label-md font-semibold text-white bg-[#0A6CFF] hover:bg-[#0056d1] px-4 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Zgłoś proces do pilotażu →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="w-full bg-[#FAFAF9] pb-24 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-[#001433] via-[#051c3d] to-[#001029] border border-[#19355f] p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#00E5FF]/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -left-16 -top-16 w-80 h-80 bg-[#0A6CFF]/25 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081a33]/80 border border-[#1d375f] backdrop-blur-md text-secondary-fixed mb-space-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
                <span className="font-subheading-eyebrow text-subheading-eyebrow font-semibold uppercase text-[11px] sm:text-[13px]">
                  POROZMAWIAJMY O TWOIM BIZNESIE
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-white font-bold tracking-tight">
                Chcesz wdrożyć podobne rozwiązanie w swojej firmie? Porozmawiajmy.
              </h2>
              <p className="font-body-lg text-body-lg text-slate-300 max-w-xl">
                Przeanalizujemy Twoje procesy biznesowe i wskażemy wąskie gardła, które najszybciej uwolnią czas Twojego zespołu. Bez pustych obietnic i zbędnych kosztów.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/kontakt"
                  className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] px-8 py-3.5 rounded-[10px] shadow-[0_0_24px_rgba(0,229,255,0.45)] hover:shadow-[0_0_36px_rgba(0,229,255,0.7)] hover:scale-105 transition-all"
                >
                  Wyślij zapytanie
                </Link>
                <a
                  className="w-full sm:w-auto inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-white px-6 py-3.5 rounded-[10px] bg-[#0a1e3b]/80 border border-[#1e3962] hover:bg-[#112d54] transition-colors"
                  href="mailto:programistka.pl@gmail.com"
                >
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  Napisz bezpośrednio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
