
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export const Scenario04CrmIntegration: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].caseStudiesPage;
  const scenario = t.scenarios[3];
  const demo = scenario.demo;

  return (
    <article className="bg-white border border-slate-200 p-6 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Mobile Phone Mockup */}
        <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
          <div className="w-full max-w-[320px] bg-[#001029] p-3 shadow-xl rounded-lg border border-slate-800">
            <div className="bg-[#02132C] p-4 flex flex-col space-y-3.5 rounded-md border border-[#1A2A44]">
              {/* Dynamic Island */}
              <div className="flex justify-center items-center py-1">
                <div className="w-20 h-4 bg-[#000E25] rounded-full flex items-center justify-end px-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-fixed"></div>
                </div>
              </div>

              {/* Header Status */}
              <div className="flex items-center justify-between pb-1 border-b border-[#1A2A44]">
                <span className="font-headline-sm text-headline-sm text-white font-bold">
                  {demo.applicationName}
                </span>
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                  sync
                </span>
              </div>

              {/* Notification Stack 1 */}
              <div className="p-3 rounded-xl bg-[#1A2A44] shadow-md space-y-1 border border-[#25354F]">
                <div className="flex items-center justify-between text-label-sm font-label-sm">
                  <span className="text-secondary-fixed font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      mark_email_read
                    </span>{" "}
                    {demo.newCorrespondence}
                  </span>
                  <span className="text-slate-400 text-xs">
                    {demo.example}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-slate-200 text-xs leading-snug">
                  {demo.message}
                </p>
              </div>

              {/* Notification Stack 2 */}
              <div className="p-3 rounded-xl bg-[#0F2039] space-y-1 border border-[#1E304F]">
                <div className="flex items-center justify-between text-label-sm font-label-sm">
                  <span className="text-[#00E5FF] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      schedule_send
                    </span>{" "}
                    {demo.followUpTask}
                  </span>
                  <span className="text-slate-400 text-xs">
                    {demo.toDo}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-slate-300 text-xs leading-snug">
                  {demo.taskDescription}
                </p>
              </div>

              {/* Notification Stack 3 */}
              <div className="p-3 rounded-xl bg-[#0F2039] space-y-1 border border-[#1E304F]">
                <div className="flex items-center justify-between text-label-sm font-label-sm">
                  <span className="text-white font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-amber-400">
                      assignment
                    </span>{" "}
                    {demo.nextStep}
                  </span>
                  <span className="text-secondary-fixed text-xs font-bold">
                    {demo.crm}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-slate-300 text-xs leading-snug">
                  {demo.nextStepDescription}
                </p>
              </div>

              <div className="w-full py-2.5 bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] text-white font-label-md text-label-md rounded-xl font-semibold shadow-sm flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">
                  person_search
                </span>{" "}
                {demo.customerCard}
              </div>

              <div className="text-center text-[10px] text-slate-500">
                {demo.demoView}
              </div>
            </div>
          </div>
        </div>

        {/* Content Columns */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-label-sm text-label-sm font-bold text-[#0A6CFF] bg-[#F0F7FF] border border-[#D5E7FF] px-2.5 py-1 rounded">
              {language === "PL" ? "SCENARIUSZ 04" : "SCENARIO 04"}
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
                sync_alt
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
      </div>
    </article>
  );
};
