import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export const ServicesCTA: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].servicesPage.cta;
  return (
    <section className="w-full bg-[#FAFAF9] px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-24 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-[#001433] via-[#051c3d] to-[#001029] border border-[#19355f] p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#00E5FF]/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -left-16 -top-16 w-80 h-80 bg-[#0A6CFF]/25 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081a33]/80 border border-[#1d375f] backdrop-blur-md text-secondary-fixed mb-space-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
              <span className="font-subheading-eyebrow text-subheading-eyebrow font-semibold uppercase text-[11px] sm:text-[13px]">
                {t.badge}
              </span>
            </div>

            <h2 className="font-headline-xl text-headline-xl sm:text-display-hero text-white font-bold tracking-tight mb-space-sm">
              {t.title}
            </h2>

            <p className="font-body-lg text-body-lg text-slate-300 max-w-xl mb-space-lg">
              {t.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
              <Link
                to="/kontakt"
                className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] px-9 py-4 rounded-[10px] shadow-[0_0_24px_rgba(0,229,255,0.45)] hover:shadow-[0_0_36px_rgba(0,229,255,0.7)] hover:scale-105 transition-all"
              >
                {t.primaryButton}
                <span className="material-symbols-outlined ml-2 text-[20px]">
                  arrow_forward
                </span>
              </Link>

              <a
                href="mailto:programistka.pl@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md font-medium text-white bg-[#0a1e3b]/80 border border-[#1e3962] hover:bg-[#112d54] px-7 py-4 rounded-[10px] shadow-sm transition-colors"
              >
                <span className="material-symbols-outlined mr-2 text-[18px]">
                  mail
                </span>
                {t.secondaryButton}
              </a>
            </div>

            <p className="font-label-sm text-label-sm text-slate-400 mt-space-md">
              {t.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
