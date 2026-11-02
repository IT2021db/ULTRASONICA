
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../i18n/translations";

export const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = ["auto_awesome", "flowsheet"];

  return (
    <section className="w-full bg-[#F4F6F9] py-20 lg:py-28 relative border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0EDFF] border border-[#BFDBFE] text-[#0A6CFF] mb-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
              <span className="font-subheading-eyebrow text-subheading-eyebrow font-bold tracking-wider text-[11px] sm:text-[13px]">
                {t.home.projects.badge}
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
              {t.home.projects.title}
            </h2>
          </div>

          <Link
            to="/realizacje"
            className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-[#0A6CFF] hover:text-[#0056d1] transition-colors"
          >
            {t.home.projects.description}
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {t.home.projects.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-space-lg sm:p-space-xl border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#0A6CFF]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-space-md">
                  <span className="px-3 py-1 rounded-full bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] font-label-sm text-label-sm font-semibold tracking-wide">
                    {card.category}
                  </span>
                  <span className="material-symbols-outlined text-[#0A6CFF] text-[22px]">
                    {icons[index]}
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md text-[#0B0F19] font-bold mb-space-xs">
                  {card.title}
                </h3>

                <p className="font-body-md text-body-md text-[#475569] mb-space-md">
                  {card.description}
                </p>

                <ul className="flex flex-col gap-2.5 mb-space-md bg-[#F8FAFC] p-4 rounded-lg border border-slate-100">
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]"
                    >
                      <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {index === 0 ? (
                <div className="pt-space-xs flex items-center justify-between border-t border-slate-100">
                  <div className="pt-space-sm border-t border-slate-100">
                    <p className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                      {card.result}
                    </p>
                  </div>
                  <Link
                    to="/realizacje"
                    className="inline-flex items-center gap-1 font-label-md text-label-md text-[#0A6CFF] font-semibold hover:underline"
                  >
                    Szczegóły scenariusza
                    <span className="material-symbols-outlined text-[16px]">
                      chevron_right
                    </span>
                  </Link>
                </div>
              ) : (
                <div className="pt-space-xs flex items-center justify-between border-t border-slate-100">
                  <span className="font-label-sm text-label-sm text-slate-500 font-medium">
                    Moduł: Vision AI + Księgowość Cloud
                  </span>
                  <div className="pt-space-sm border-t border-slate-100">
                    <p className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                      {card.result}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
