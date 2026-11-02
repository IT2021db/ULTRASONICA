
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../i18n/translations";

export const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const cards = [
    { icon: "smart_toy", label: "01 / AI CORE" },
    { icon: "dashboard_customize", label: "02 / SOFTWARE" },
    { icon: "sync_alt", label: "03 / WORKFLOW" },
  ];

  return (
    <section className="w-full bg-[#F4F6F9] py-20 lg:py-28 relative border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0EDFF] border border-[#BFDBFE] text-[#0A6CFF] mb-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
              <span className="font-subheading-eyebrow text-subheading-eyebrow font-bold tracking-wider text-[11px] sm:text-[13px]">
                {t.home.services.badge}
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
              {t.home.services.title}
            </h2>
          </div>
          <p className="font-body-md text-body-md text-[#475569] max-w-md">
            {t.home.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {t.home.services.cards.map((card, index) => (
            <div
              key={cards[index].label}
              className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(10,108,255,0.1)] hover:border-[#0A6CFF]/50 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-[#0A6CFF]/10 to-[#00E5FF]/20 border border-[#0A6CFF]/20 flex items-center justify-center text-[#0A6CFF] shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[30px]">
                      {cards[index].icon}
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#0A6CFF] bg-[#F0F7FF] px-3 py-1 rounded-full border border-[#D5E7FF] uppercase tracking-widest font-semibold">
                    {cards[index].label}
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-bold">
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

              <Link
                to="/uslugi"
                className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-[#0A6CFF] group-hover:text-[#0056d1] transition-colors pt-space-sm border-t border-slate-100"
              >
                {card.link}
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
