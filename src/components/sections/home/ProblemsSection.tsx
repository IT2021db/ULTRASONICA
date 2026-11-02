
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../i18n/translations";

export const ProblemsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = ["schedule", "hub", "psychology_alt"];

  return (
    <section className="w-full bg-[#FAFAF9] text-[#0B0F19] py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="max-w-2xl mb-space-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] mb-space-xs shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A6CFF]" />
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {t.home.problems.cards.map((card, index) => (
            <div
              key={icons[index]}
              className="bg-white rounded-lg p-space-lg border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(10,108,255,0.08)] hover:border-[#0A6CFF]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:scale-105 group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">
                    {icons[index]}
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-semibold">
                  {card.title}
                </h3>

                <p className="font-body-md text-body-md text-[#475569]">
                  {card.description}
                </p>
              </div>

              <div className="mt-space-md pt-space-sm border-t border-slate-100 flex items-center gap-2 text-[#0A6CFF] font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
                <span>{card.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
