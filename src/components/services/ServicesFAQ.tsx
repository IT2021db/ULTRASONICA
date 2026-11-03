import React from "react";
import { useServicesFAQ } from "../../hooks/useServicesFAQ";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export const ServicesFAQ: React.FC = () => {
  const { language } = useLanguage();
  const { openFaq, toggleFaq } = useServicesFAQ();
  const t = translations[language];
  const faqItems = t.servicesPage.faq.items;

  return (
    <section className="w-full bg-[#FAFAF9] px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-28 relative">
      <div className="max-w-[880px] mx-auto flex flex-col items-center">
        {/* Eyebrow & Title */}
        <div className="flex flex-col items-center text-center mb-space-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] mb-2 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A6CFF]"></span>
            <span className="font-subheading-eyebrow text-subheading-eyebrow uppercase tracking-widest font-bold text-[11px] sm:text-[13px]">
              {t.servicesPage.faq.badge}
            </span>
          </div>

          <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-[#0B0F19] font-bold tracking-tight">
            {t.servicesPage.faq.title}
          </h2>

          <p className="font-body-md text-body-md text-[#475569] max-w-xl mt-space-xs">
            {t.servicesPage.faq.description}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="w-full flex flex-col gap-space-sm" id="faq-accordion">
          {faqItems.map((item, idx) => {
            const isOpen = openFaq === idx;

            return (
              <div
                key={idx}
                className="faq-item bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 rounded-lg hover:border-[#0A6CFF]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="faq-toggle w-full px-space-md py-space-md flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-semibold flex items-center gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-[#F0F7FF] border border-[#D5E7FF] flex items-center justify-center text-label-sm text-[#0A6CFF] font-bold">
                      {idx + 1}
                    </span>
                    {item.q}
                  </span>

                  <span
                    className={`faq-icon material-symbols-outlined text-[#0A6CFF] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                <div
                  className={`faq-content overflow-hidden transition-all duration-300 px-space-md bg-slate-50/60 ${
                    isOpen ? "max-h-96 py-space-md pt-0" : "max-h-0"
                  }`}
                >
                  <div className="font-body-md text-body-md text-[#475569] leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
