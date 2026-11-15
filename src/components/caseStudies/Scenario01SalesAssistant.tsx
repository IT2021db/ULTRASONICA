import React from "react";

export const Scenario01SalesAssistant: React.FC = () => {
  return (
    <article className="bg-white border border-slate-200 p-6 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
            <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#E11D48] text-[22px] shrink-0 mt-0.5">
                report_problem
              </span>
              <div>
                <span className="font-label-md text-label-md font-bold text-[#E11D48] uppercase tracking-wider block mb-1">
                  Problem
                </span>
                <p className="font-body-md text-body-md text-[#475569]">
                  Handlowcy spędzali po 2-3 godziny dziennie na przeszukiwaniu
                  specyfikacji technicznych i redagowaniu powtarzalnych maili.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#F0F7FF] border border-[#D5E7FF] flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#0A6CFF] text-[22px] shrink-0 mt-0.5">
                neurology
              </span>
              <div>
                <span className="font-label-md text-label-md font-bold text-[#0A6CFF] uppercase tracking-wider block mb-1">
                  Rozwiązanie
                </span>
                <p className="font-body-md text-body-md text-[#334155]">
                  Wdrożenie wewnętrznego asystenta AI połączonego z katalogiem
                  produktów i bezpieczną bazą wiedzy firmy.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#16A34A] text-[22px] shrink-0 mt-0.5">
                verified
              </span>
              <div>
                <span className="font-label-md text-label-md font-bold text-[#16A34A] uppercase tracking-wider block mb-1">
                  Efekt
                </span>
                <p className="font-body-md text-body-md text-[#1E293B]">
                  Wstępne wersje spersonalizowanych ofert generowane w 10
                  sekund; handlowcy skupiają się na relacjach i domykaniu
                  sprzedaży.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="w-full max-w-[540px] bg-[#001029] rounded-t-xl p-2.5 pb-0 shadow-xl border border-slate-800">
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#000E25] rounded-t-lg">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
              </div>
              <div className="px-3 py-0.5 rounded-md bg-[#0F2039] text-slate-400 text-label-sm font-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px] text-secondary-fixed">
                  lock
                </span>
                crm.ultrasonica.local/sales-copilot
              </div>
              <div className="w-8"></div>
            </div>

            <div className="bg-[#02132C] p-4 sm:p-5 flex flex-col space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1A2A44]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                    smart_toy
                  </span>
                  <span className="font-headline-sm text-headline-sm text-white">
                    Sales Assistant RAG
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary-fixed bg-[#0F2039] px-2 py-0.5 rounded-full border border-[#1A2A44]">
                  Katalog v4.2 aktywny
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-[#0F2039] max-w-[85%] text-slate-200 border border-[#1E304F]">
                  <span className="font-label-sm text-label-sm text-slate-400 block mb-1">
                    Zapytanie klienta (E-mail ID: #4812)
                  </span>
                  <p className="font-body-sm text-body-sm text-slate-200">
                    „Dzień dobry, szukamy 15 falowników o mocy &gt;22kW
                    odpornych na pył chemiczny z dostawą w 48h. Jaki model
                    rekomendujecie?”
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#1A2A44] ml-auto max-w-[92%] shadow-sm border border-[#25354F]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px]">
                        auto_awesome
                      </span>{" "}
                      Propozycja szkicu (czas reakcji: 1.4s)
                    </span>
                    <span className="font-label-sm text-label-sm text-[#00E5FF] font-medium">
                      Trafność: 99.4%
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-white mb-3">
                    Sugerowany model:{" "}
                    <strong className="text-secondary-fixed">
                      UltraDrive-X25 (IP66)
                    </strong>
                    . Mamy na stanie w magazynie Gdynia 24 sztuki. Przygotowano
                    wycenę hurtową z rabatem progowym (tier B).
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

              <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0F2039] text-slate-400 border border-[#1A2A44]">
                <span className="material-symbols-outlined text-[18px]">
                  attach_file
                </span>
                <span className="font-body-sm text-body-sm flex-1 text-slate-400">
                  Wpisz komendę lub podaj numer zapytania...
                </span>
                <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                  send
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[590px] h-3.5 bg-slate-800 rounded-b-xl flex justify-center items-center">
            <div className="w-16 h-1 bg-slate-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </article>
  );
};
