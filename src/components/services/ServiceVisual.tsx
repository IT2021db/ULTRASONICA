import React from "react";
import { translations, type Language } from "../../i18n/translations";

interface ServiceVisualProps {
  index: number;
  language: Language;
}

export const ServiceVisual: React.FC<ServiceVisualProps> = ({
  index,
  language,
}) => {
  const t = translations[language];

  return (
    <div
      className={`${
        index === 1
          ? "order-2 lg:order-1 lg:col-span-5"
          : "order-2 lg:col-span-5"
      } flex items-center justify-center`}
    >
      <div className="w-full min-h-[300px] lg:min-h-[360px] bg-[#F4F8FC] rounded-lg border border-[#142642] p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#0A6CFF]/20 blur-[80px]" />

        <div className="relative z-10 flex flex-col gap-6">
          {/* MODULE 01 – AI ANALYSIS */}
          {index === 0 && (
            <div className="w-full flex-1 flex items-center justify-center py-5">
              <div className="w-full max-w-[330px]">
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="h-px flex-1 bg-[#BBD3EF]" />
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[#64748B]">
                    {language === "PL" ? "ANALIZA DANYCH" : "DATA ANALYSIS"}
                  </span>
                  <div className="h-px flex-1 bg-[#BBD3EF]" />
                </div>

                <div className="flex items-center justify-center gap-3 mb-4">
                  {[
                    t.servicesPage.moduleVisuals.data,
                    t.servicesPage.moduleVisuals.model,
                    t.servicesPage.moduleVisuals.result,
                  ].map((item, i) => (
                    <React.Fragment key={item}>
                      {i > 0 && (
                        <span className="material-symbols-outlined text-[#0A6CFF] text-lg">
                          arrow_forward
                        </span>
                      )}
                      <div
                        className={`flex-1 min-w-0 rounded-xl border p-3 flex flex-col items-center justify-center gap-2 ${
                          i === 1
                            ? "bg-[#EAF3FF] border-[#9CC5FA]"
                            : "bg-white border-[#C9DCF2]"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-xl ${
                            i === 1 ? "text-[#0A6CFF]" : "text-[#64748B]"
                          }`}
                        >
                          {i === 0
                            ? "database"
                            : i === 1
                              ? "neurology"
                              : "insights"}
                        </span>
                        <span
                          className={`text-[9px] font-bold tracking-wide ${
                            i === 1 ? "text-[#0A6CFF]" : "text-[#0B2545]"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-2 border-t border-[#D5E2F0] pt-4">
                  <span className="material-symbols-outlined text-[#00A6BD] text-lg">
                    verified
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.12em] text-[#64748B]">
                    {language === "PL"
                      ? "WERYFIKACJA WYNIKÓW"
                      : "RESULT VERIFICATION"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 02 – REACT APPLICATIONS */}
          {index === 1 && (
            <div className="w-full flex-1 flex items-center justify-center py-5">
              <div className="w-full max-w-[330px]">
                <div className="rounded-xl border border-[#C9DCF2] bg-white overflow-hidden shadow-sm">
                  {/* Browser header */}
                  <div className="h-9 px-3 flex items-center gap-1.5 border-b border-[#DCE7F3] bg-[#F4F8FC]">
                    <span className="w-2 h-2 rounded-full bg-[#B8C9DC]" />
                    <span className="w-2 h-2 rounded-full bg-[#B8C9DC]" />
                    <span className="w-2 h-2 rounded-full bg-[#B8C9DC]" />
                    <div className="ml-3 flex-1 h-4 rounded bg-white border border-[#E1EAF4]" />
                  </div>

                  {/* Application preview */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#0A6CFF] flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-base">
                            apps
                          </span>
                        </div>
                        <span className="text-[10px] font-bold tracking-wide text-[#0B2545]">
                          WEB APPLICATION
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[#0A6CFF] text-lg">
                        more_horiz
                      </span>
                    </div>

                    <div className="grid grid-cols-[1fr_1.4fr] gap-3">
                      <div className="rounded-lg bg-[#F0F5FB] p-3 flex flex-col gap-2">
                        <div className="h-2 w-3/4 rounded bg-[#B8CDE6]" />
                        <div className="h-2 w-full rounded bg-[#D5E2F0]" />
                        <div className="h-2 w-4/5 rounded bg-[#D5E2F0]" />
                        <div className="h-2 w-2/3 rounded bg-[#D5E2F0]" />
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="rounded-lg border border-[#D5E2F0] p-2">
                          <div className="h-2 w-2/3 rounded bg-[#A9C9F2] mb-2" />
                          <div className="h-5 rounded bg-[#EAF3FF]" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-9 rounded-lg bg-[#EAF3FF] border border-[#D5E2F0]" />
                          <div className="h-9 rounded-lg bg-[#F0F7FA] border border-[#D5E2F0]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 pt-4">
                  <span className="text-[10px] font-semibold tracking-[0.12em] text-[#64748B]">
                    REACT
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#00A6BD]" />
                  <span className="text-[10px] font-semibold tracking-[0.12em] text-[#64748B]">
                    TYPESCRIPT
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#00A6BD]" />
                  <span className="text-[10px] font-semibold tracking-[0.12em] text-[#64748B]">
                    WEB
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 03 – API INTEGRATIONS */}
          {index === 2 && (
            <div className="w-full flex-1 flex items-center justify-center px-4 py-5">
              <div className="w-full max-w-[330px]">
                <div className="grid grid-cols-[1fr_16px_1fr_16px_1fr] items-center">
                  {/* System A */}
                  <div className="min-w-0 bg-white border border-[#C9DCF2] rounded-xl h-[82px] flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-xl">
                      database
                    </span>
                    <span className="text-[9px] font-bold text-[#0B2545] mt-2">
                      CRM
                    </span>
                  </div>

                  <div className="h-px bg-[#8BB9F0] w-full" />

                  {/* API */}
                  <div className="min-w-0 bg-[#EAF3FF] border border-[#9CC5FA] rounded-xl h-[82px] flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-xl">
                      api
                    </span>
                    <span className="text-[9px] font-bold text-[#0A6CFF] mt-2">
                      API
                    </span>
                  </div>

                  <div className="h-px bg-[#8BB9F0] w-full" />

                  {/* System B */}
                  <div className="min-w-0 bg-white border border-[#C9DCF2] rounded-xl h-[82px] flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-[#00A6BD] text-xl">
                      cloud
                    </span>
                    <span className="text-[9px] font-bold text-[#0B2545] mt-2">
                      ERP
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 py-5">
                  <span className="material-symbols-outlined text-[#0A6CFF] text-xl">
                    sync_alt
                  </span>
                  <span className="text-[9px] font-semibold tracking-[0.14em] text-[#64748B]">
                    {language === "PL" ? "WYMIANA DANYCH" : "DATA EXCHANGE"}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3 border-t border-[#D5E2F0] pt-4">
                  {["REST API", "JSON", "HTTP"].map((item, i) => (
                    <React.Fragment key={item}>
                      {i > 0 && (
                        <span className="w-1 h-1 rounded-full bg-[#94A3B8]" />
                      )}
                      <span className="text-[9px] tracking-wider font-semibold text-[#64748B]">
                        {item}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
