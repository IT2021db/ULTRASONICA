import React from "react";

export const Scenario03ClientPortal: React.FC = () => {
  return (
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
              <span className="material-symbols-outlined text-[#E11D48] text-[22px] shrink-0 mt-0.5">
                report_problem
              </span>
              <div>
                <span className="font-label-md text-label-md font-bold text-[#E11D48] uppercase tracking-wider block mb-1">
                  Problem
                </span>
                <p className="font-body-md text-body-md text-[#475569]">
                  Zamówienia spływały chaotycznie przez telefon, SMS-y i maile,
                  co prowadziło do pomyłek i opóźnień produkcyjnych.
                </p>
              </div>
            </div>

            {/* Solution Block */}
            <div className="p-4 rounded-lg bg-[#F0F7FF] border border-[#D5E7FF] flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#0A6CFF] text-[22px] shrink-0 mt-0.5">
                devices
              </span>
              <div>
                <span className="font-label-md text-label-md font-bold text-[#0A6CFF] uppercase tracking-wider block mb-1">
                  Rozwiązanie
                </span>
                <p className="font-body-md text-body-md text-[#334155]">
                  Prosta, responsywna aplikacja webowa dla stałych kontrahentów
                  z podglądem stanów, automatyczną wyceną i historią zleceń.
                </p>
              </div>
            </div>

            {/* Effect Block */}
            <div className="p-4 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#16A34A] text-[22px] shrink-0 mt-0.5">
                verified
              </span>
              <div>
                <span className="font-label-md text-label-md font-bold text-[#16A34A] uppercase tracking-wider block mb-1">
                  Efekt
                </span>
                <p className="font-body-md text-body-md text-[#1E293B]">
                  Pełna przejrzystość zamówień dla klientów w trybie 24/7 oraz
                  uporządkowany harmonogram dla zespołu produkcyjnego.
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
              <span className="material-symbols-outlined text-slate-400 text-[16px]">
                account_circle
              </span>
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
                    <span className="font-label-sm text-label-sm font-semibold text-white">
                      #ORD-9021 • Moduły X4
                    </span>
                    <span className="font-label-sm text-label-sm text-slate-400">
                      Dostawa: Piątek, 14:00
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-[#1A2A44] text-secondary-fixed font-medium">
                    W produkcji
                  </span>
                </div>
                <div className="p-2.5 rounded bg-[#0F2039] flex items-center justify-between border border-[#1E304F]">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm font-semibold text-white">
                      #ORD-8940 • Elementy T-800
                    </span>
                    <span className="font-label-sm text-label-sm text-slate-400">
                      Dostawa: Zrealizowano
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-[#1A2A44] text-[#00E5FF] font-medium">
                    Wysłane kurierem
                  </span>
                </div>
              </div>

              {/* Direct Quick Action button */}
              <div className="pt-1 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-slate-400">
                  Dostępność magazynu: 98%
                </span>
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
                <span className="font-label-sm text-label-sm font-bold text-secondary-fixed">
                  Mobilny status
                </span>
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                  notifications_active
                </span>
              </div>
              <div className="p-2 rounded bg-[#0F2039] border border-[#1E304F]">
                <span className="font-label-sm text-label-sm text-slate-400 block text-[10px]">
                  Powiadomienie PUSH:
                </span>
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
  );
};
