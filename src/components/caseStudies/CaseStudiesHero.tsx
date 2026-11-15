import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export const CaseStudiesHero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].caseStudiesPage.hero;

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
              {t.badge}
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-[#0B0F19] font-bold tracking-tight mb-4">
            {t.title}
          </h1>

          <p className="font-body-lg text-body-lg text-[#475569] max-w-2xl leading-relaxed">
            {t.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-10 p-5 bg-[#F8FAFC] border border-slate-200 shadow-sm rounded-lg">
            {t.metrics.map((metric, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-label-sm text-label-sm text-slate-500 font-semibold">
                  {metric.label}
                </span>
                <span
                  className={`font-headline-sm text-headline-sm font-bold ${
                    index === 2 ? "text-[#0A6CFF]" : "text-[#0B0F19]"
                  }`}
                >
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
