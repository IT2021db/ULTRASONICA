import React from "react";

export const CaseStudiesHero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white border-b border-slate-200/80">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#00E5FF]/10 via-[#0A6CFF]/5 to-transparent blur-[120px] rounded-full"></div>

      <section className="relative max-w-[1280px] mx-auto px-gutter pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="flex flex-col items-start max-w-4xl">
          <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A6CFF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A6CFF]"></span>
            </span>
            <span className="font-subheading-eyebrow text-subheading-eyebrow tracking-widest uppercase font-bold text-[#0A6CFF] text-[11px] sm:text-[13px]">
              Przykładowe scenariusze wdrożeń • Nie są to referencje klientów
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-[#0B0F19] font-bold tracking-tight mb-4">
            Od procesów biznesowych do inteligentnych systemów
          </h1>

          <p className="font-body-lg text-body-lg text-[#475569] max-w-2xl leading-relaxed">
            Poznaj przykładowe scenariusze wykorzystania sztucznej inteligencji,
            automatyzacji i dedykowanego oprogramowania w przedsiębiorstwach.
            Pokazuję w nich, jak projektować rozwiązania, które integrują systemy,
            usprawniają przepływ informacji i wspierają codzienną pracę
            zespołów.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-10 p-5 bg-[#F8FAFC] border border-slate-200 shadow-sm rounded-lg">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-slate-500 font-semibold">
                OCHRONA DANYCH
              </span>
              <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">
                Kontrola dostępu
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-slate-500 font-semibold">
                ARCHITEKTURA AI
              </span>
              <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">
                LLM + RAG
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-slate-500 font-semibold">
                AUTOMATYZACJA
              </span>
              <span className="font-headline-sm text-headline-sm text-[#0A6CFF] font-bold">
                Inteligentne procesy
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-slate-500 font-semibold">
                INTEGRACJE SYSTEMÓW
              </span>
              <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">
                API i Webhooks
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
