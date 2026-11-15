
import React from "react";
import { Link } from "react-router-dom";

export const PartnershipBanner: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter pb-16 lg:pb-24">
      <div className="relative bg-white border-2 border-dashed border-slate-300 p-8 sm:p-12 overflow-hidden shadow-sm rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[16px]">
                terminal
              </span>
              <span>MODEL PARTNERSKI • BEZPOŚREDNI NADZÓR ARCHITEKTA</span>
            </div>

            <h3 className="font-headline-lg text-headline-lg text-[#0B0F19] font-bold">
              Tu wkrótce pojawią się autoryzowane realizacje
            </h3>

            <p className="font-body-md text-body-md text-[#475569] max-w-2xl leading-relaxed">
              Łączymy wieloletnie inżynieryjne fundamenty wytwarzania
              oprogramowania z najnowocześniejszymi modelami AI i
              automatyzacją procesów. Prowadzimy rygorystyczną politykę
              poufności (NDA) — wdrożenia komercyjne publikujemy wyłącznie po
              pełnej walidacji telemetrycznej i zgodzie klienta.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-slate-700 font-label-md text-label-md font-medium">
                <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                  verified_user
                </span>
                Ścisła klauzula NDA
              </div>

              <div className="flex items-center gap-2 text-slate-700 font-label-md text-label-md font-medium">
                <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                  shield
                </span>
                Suwerenność danych (On-premise / Private Cloud)
              </div>

              <div className="flex items-center gap-2 text-slate-700 font-label-md text-label-md font-medium">
                <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                  code
                </span>
                Własność kodu i dedykowane repozytoria
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-lg bg-[#F8FAFC] border border-slate-200 flex flex-col items-start space-y-4 shadow-sm">
            <span className="font-label-sm text-label-sm text-[#0A6CFF] bg-[#EBF3FF] px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
              PROGRAM PILOTAŻOWY 2026
            </span>

            <h4 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">
              Zostań partnerem wdrożeniowym
            </h4>

            <p className="font-body-sm text-body-sm text-[#475569]">
              Dla zakwalifikowanych firm oferujemy dedykowane warunki
              wdrożenia pilotażowego z bezpośrednim zaangażowaniem głównego
              architekta w zamian za udokumentowane case study.
            </p>

            <Link
              to="/kontakt"
              className="w-full text-center font-label-md text-label-md font-semibold text-white bg-[#0A6CFF] hover:bg-[#0056d1] px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              Zgłoś proces do pilotażu →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
