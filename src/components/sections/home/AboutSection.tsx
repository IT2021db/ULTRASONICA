
import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../i18n/translations";

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="w-full bg-[#F4F6F9] py-20 lg:py-28 relative border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden bg-white border border-slate-200 shadow-xl">
              <img
                alt={t.home.about.imageAlt}
                className="w-full h-[460px] object-cover filter saturate-95 hover:saturate-100 transition-all duration-500"
                src="/images/engineer.jpg"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[#0A6CFF]">
              <span className="material-symbols-outlined text-[16px]">
                engineering
              </span>
              <span className="font-subheading-eyebrow text-subheading-eyebrow uppercase tracking-wider font-bold text-[11px] sm:text-[13px]">
                {t.home.about.badge}
              </span>
            </div>

            <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
              {t.home.about.title}
            </h2>

            <div className="flex flex-col gap-space-sm font-body-lg text-body-lg text-[#475569]">
              {t.home.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md w-full pt-space-sm">
              {t.home.about.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm"
                >
                  <span className="font-headline-md text-headline-md text-[#0A6CFF] font-bold block">
                    {metric.value}
                  </span>
                  <span className="font-body-sm text-body-sm text-[#475569]">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
