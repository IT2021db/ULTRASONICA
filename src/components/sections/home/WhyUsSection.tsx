
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../i18n/translations";

export const WhyUsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [
    "translate",
    "track_changes",
    "policy",
    "receipt_long",
  ];

  return (
    <section className="w-full bg-[#FAFAF9] py-20 lg:py-24 border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] mb-2 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A6CFF]" />
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
          {t.home.whyUs.cards.map((card, index) => (
            <div
              key={icons[index]}
              className="bg-white p-space-lg rounded-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[26px]">
                    {icons[index]}
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  {card.title}
                </h3>

                <p className="font-body-sm text-body-sm text-[#475569]">
                  {card.description}
                </p>
              </div>

              <div className="pt-space-md border-t border-slate-100 flex items-center gap-1.5 text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  check
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
