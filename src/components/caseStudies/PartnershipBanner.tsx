
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export const PartnershipBanner: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].caseStudiesPage.partnership;

  return (
    <section className="max-w-[1280px] mx-auto px-gutter pb-16 lg:pb-24">
      <div className="relative bg-white border border-[#D5E7FF] p-8 sm:p-12 overflow-hidden shadow-sm rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[16px]">
                architecture
              </span>
              <span>{t.badge}</span>
            </div>

            <h3 className="font-headline-lg text-headline-lg text-[#0B0F19] font-bold">
              {t.title}
            </h3>

            <p className="font-body-md text-body-md text-[#475569] max-w-2xl leading-relaxed">
              {t.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              {t.features.map((feature, index) => {
                const icons = [
                  "verified_user",
                  "account_tree",
                  "integration_instructions",
                ];

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-slate-700 font-label-md text-label-md font-medium"
                  >
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                      {icons[index]}
                    </span>
                    {feature}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-lg bg-[#F8FAFC] border border-slate-200 flex flex-col items-start space-y-4 shadow-sm">
            <span className="font-label-sm text-label-sm text-[#0A6CFF] bg-[#EBF3FF] px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
              {t.approach}
            </span>

            <h4 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">
              {t.contactTitle}
            </h4>

            <p className="font-body-sm text-body-sm text-[#475569]">
              {t.contactDescription}
            </p>

            <Link
              to="/kontakt"
              className="w-full text-center font-label-md text-label-md font-semibold text-white bg-[#0A6CFF] hover:bg-[#0056d1] px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              {t.contactButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
