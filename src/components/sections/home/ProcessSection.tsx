
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../i18n/translations";

export const ProcessSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    { number: "01", icon: "record_voice_over" },
    { number: "02", icon: "analytics" },
    { number: "03", icon: "terminal" },
    { number: "04", icon: "support_agent" },
  ];

  return (
    <section className="w-full bg-[#FAFAF9] py-20 lg:py-28 border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="max-w-xl mb-space-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] mb-2 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A6CFF]" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">
          {t.home.process.steps.map((step, index) => (
            <div
              key={steps[index].number}
              className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#0A6CFF]/40 transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center font-display-hero text-headline-lg text-[#0A6CFF]/20 select-none font-bold">
                {steps[index].number}
              </div>

              <div>
                <div className="w-11 h-11 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[24px]">
                    {steps[index].icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold mb-2">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-[#475569]">
                  {step.description}
                </p>
              </div>

              <div className="mt-space-md pt-space-xs border-t border-slate-100">
                <span className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                  {step.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

