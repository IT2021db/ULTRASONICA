
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export const Scenario03ClientPortal: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].caseStudiesPage;
  const scenario = t.scenarios[2];
  const demo = scenario.demo;

  return (
    <article className="bg-white border border-slate-200 p-6 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Columns (6 cols) */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-label-sm text-label-sm font-bold text-[#0A6CFF] bg-[#F0F7FF] border border-[#D5E7FF] px-2.5 py-1 rounded">
              {language === "PL" ? "SCENARIUSZ 03" : "SCENARIO 03"}
            </span>
            <span className="font-subheading-eyebrow text-subheading-eyebrow text-slate-500 font-bold uppercase tracking-wider text-[11px] sm:text-[13px]">
              {scenario.category}
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-[#0B0F19] font-bold">
            {scenario.title}
          </h2>

          <div className="space-y-4">
            {/* Problem Block */}
            <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#E11D48] text-[22px] shrink-0 mt-0.5">
                report_problem
              </span>
              <div>
                <span className="font-label-md text-label-md font-bold text-[#E11D48] uppercase tracking-wider block mb-1">
                  {t.labels.problem}
                </span>
                <p className="font-body-md text-body-md text-[#475569]">
                  {scenario.problem}
                </p>
              </div>
            </div>

            {/* Solution Block */}
            <div className="p-4 rounded-lg bg-[#F0F7FF] border border-[#D5E7FF] flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#0A6CFF] text-[22px] shrink-0 mt-0.5">
                devices
              </span>
              <div>
                <span className="font-label-md text-label-md font-bold text-[#0A6CFF] uppercase tracking-wider block mb-1">
                  {t.labels.solution}
                </span>
                <p className="font-body-md text-body-md text-[#334155]">
                  {scenario.solution}
                </p>
              </div>
            </div>

            {/* Effect Block */}
            <div className="p-4 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#16A34A] text-[22px] shrink-0 mt-0.5">
                verified
              </span>
              <div>
                <span className="font-label-md text-label-md font-bold text-[#16A34A] uppercase tracking-wider block mb-1">
                  {t.labels.effect}
                </span>
                <p className="font-body-md text-body-md text-[#1E293B]">
                  {scenario.effect}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Composite UI: Monitor + Phone Composition (6 cols) */}
        <div className="lg:col-span-6 relative flex items-center justify-center pt-4 pb-2">
          {/* Monitor Mockup */}
          <div className="w-full max-w-[440px] bg-[#001029] rounded-xl p-3 shadow-xl border border-slate-800">
            <div className="flex items-center justify-between pb-3 bg-[#001029] border-b border-[#1A2A44]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
              </div>
              <span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">
                {demo.applicationName}
              </span>
              <span className="material-symbols-outlined text-slate-400 text-[16px]">
                account_circle
              </span>
            </div>

            <div className="rounded-lg bg-[#02132C] p-4 space-y-3">
              <div className="flex justify-between items-center gap-2">
                <span className="font-headline-sm text-headline-sm text-white font-bold">
                  {demo.orderStatus}
                </span>
                <span className="font-label-sm text-label-sm text-secondary-fixed bg-[#0F2039] px-2 py-0.5 rounded border border-[#1A2A44]">
                  {t.labels.demoView}
                </span>
              </div>

              {/* Table Preview */}
              <div className="space-y-2">
                <div className="p-2.5 rounded bg-[#0F2039] flex items-center justify-between border border-[#1E304F] gap-2">
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm font-semibold text-white">
                      {demo.order1}
                    </span>
                    <span className="font-label-sm text-label-sm text-slate-400">
                      {demo.batch1}
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-[#1A2A44] text-secondary-fixed font-medium shrink-0">
                    {demo.inProduction}
                  </span>
                </div>

                <div className="p-2.5 rounded bg-[#0F2039] flex items-center justify-between border border-[#1E304F] gap-2">
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-sm text-label-sm font-semibold text-white">
                      {demo.order2}
                    </span>
                    <span className="font-label-sm text-label-sm text-slate-400">
                      {demo.batch2}
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-[#1A2A44] text-[#00E5FF] font-medium shrink-0">
                    {demo.readyToShip}
                  </span>
                </div>
              </div>

              {/* Demo information and action */}
              <div className="pt-1 flex items-center justify-between gap-2">
                <span className="font-label-sm text-label-sm text-slate-400">
                  {demo.orderHistory}
                </span>
                <span className="font-label-sm text-label-sm px-3 py-1.5 bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] text-white rounded font-medium shadow-sm whitespace-nowrap">
                  {demo.newOrder}
                </span>
              </div>
            </div>
          </div>

          {/* Overlapping Mobile Phone Screen Mockup */}
          <div className="absolute -bottom-4 right-0 sm:right-4 w-[190px] bg-[#000E25] p-2 shadow-2xl rounded-lg border border-slate-700">
            <div className="rounded-xl bg-[#02132C] p-3 space-y-2.5 border border-[#1A2A44]">
              <div className="w-10 h-1 bg-slate-600 rounded-full mx-auto mb-1"></div>

              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm font-bold text-secondary-fixed">
                  {demo.mobileStatus}
                </span>
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
                  notifications_active
                </span>
              </div>

              <div className="p-2 rounded bg-[#0F2039] border border-[#1E304F]">
                <span className="font-label-sm text-label-sm text-slate-400 block text-[10px]">
                  {demo.statusUpdate}
                </span>
                <span className="font-body-sm text-body-sm text-slate-200 text-xs block leading-tight font-medium">
                  {demo.notification}
                </span>
              </div>

              <div className="w-full py-1 text-center bg-[#1A2A44] rounded text-[11px] font-label-sm text-secondary-fixed">
                {demo.orderDetails}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
