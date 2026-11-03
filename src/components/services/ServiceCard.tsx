import React from "react";
import { ServiceVisual } from "./ServiceVisual";
import type { Language } from "../../i18n/translations";
import { translations } from "../../i18n/translations";

type Service = (typeof translations)["PL"]["servicesPage"]["services"][number];

interface ServiceCardProps {
  service: Service;
  index: number;
  language: Language;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  language,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center bg-white p-space-md md:p-space-lg lg:p-space-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-200 relative overflow-hidden rounded-lg hover:shadow-[0_12px_32px_rgba(10,108,255,0.08)] transition-all duration-300">
      <ServiceVisual index={index} language={language} />

      {/* SERVICE DESCRIPTION */}
      <div
        className={`${
          index === 1
            ? "order-1 lg:order-2 lg:col-span-7"
            : "order-1 lg:col-span-7"
        } flex flex-col items-start gap-space-md`}
      >
        {/* CATEGORY */}
        <div className="flex items-center gap-space-xs">
          <span className="font-subheading-eyebrow text-subheading-eyebrow text-[#0A6CFF] bg-[#F0F7FF] border border-[#D5E7FF] px-3 py-1 rounded-full uppercase font-semibold text-[11px] sm:text-[13px]">
            {service.module}
          </span>

          <span className="font-label-sm text-label-sm text-[#475569] font-medium">
            {service.category}
          </span>
        </div>

        {/* TITLE */}
        <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-[#0B0F19] font-bold tracking-tight">
          {service.title}
        </h2>

        {/* DESCRIPTION */}
        <p className="font-body-lg text-body-lg text-[#475569] leading-relaxed">
          {service.description}
        </p>

        {/* AUDIENCE AND BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md w-full mt-space-xs">
          <div className="p-space-md bg-[#F8FAFC] rounded-lg border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-[#0A6CFF]">
              <span className="material-symbols-outlined text-[20px]">
                group
              </span>

              <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-semibold">
                {service.audienceLabel}
              </span>
            </div>

            <p className="font-body-sm text-body-sm text-[#475569]">
              {service.audience}
            </p>
          </div>

          <div className="p-space-md bg-[#F8FAFC] rounded-lg border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-[#0A6CFF]">
              <span className="material-symbols-outlined text-[20px]">
                lightbulb
              </span>

              <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-semibold">
                {service.benefitLabel}
              </span>
            </div>

            <p className="font-body-sm text-body-sm text-[#475569]">
              {service.benefit}
            </p>
          </div>
        </div>

        {/* EXAMPLE APPLICATIONS */}
        <div className="w-full flex flex-col gap-2 mt-space-xs">
          <span className="font-label-md text-label-md text-[#0B0F19] font-semibold">
            {service.examplesLabel}
          </span>

          <div className="flex flex-wrap gap-2">
            {service.examples.map((example, exampleIndex) => (
              <span
                key={exampleIndex}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F0F7FF] border border-[#D5E7FF] rounded-full font-body-sm text-body-sm text-[#1E293B] font-medium"
              >
                <span className="material-symbols-outlined text-[16px] text-[#0A6CFF]">
                  {exampleIndex === 0
                    ? "auto_awesome"
                    : exampleIndex === 1
                      ? "description"
                      : "integration_instructions"}
                </span>

                {example}
              </span>
            ))}
          </div>
        </div>

        {/* PRACTICAL APPROACH */}
        <div className="w-full p-space-md bg-[#F1F5F9] rounded-lg flex items-start gap-space-sm mt-space-xs border border-slate-200">
          <span className="material-symbols-outlined text-[#0A6CFF] mt-0.5">
            engineering
          </span>

          <div>
            <span className="font-label-md text-label-md font-semibold text-[#0B0F19] block">
              {service.practicalLabel}
            </span>

            <span className="font-body-sm text-body-sm text-[#475569]">
              {service.practical}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
