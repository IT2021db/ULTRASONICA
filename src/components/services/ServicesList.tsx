import React from "react";
import { ServiceCard } from "./ServiceCard";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export const ServicesList: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="w-full bg-[#FAFAF9] px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-28 border-b border-slate-200/80">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-space-xl lg:gap-24">
        {t.servicesPage.services.map((service, index) => (
          <ServiceCard
            key={service.module}
            service={service}
            index={index}
            language={language}
          />
        ))}
      </div>
    </section>
  );
};
