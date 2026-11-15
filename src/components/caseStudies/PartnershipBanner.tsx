
import React from "react";
import { Link } from "react-router-dom";

export const PartnershipBanner: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter pb-16 lg:pb-24">
      <div className="relative bg-white border border-[#D5E7FF] p-8 sm:p-12 overflow-hidden shadow-sm rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[16px]">
                architecture
              </span>
              <span>PROJEKTY DEDYKOWANE • PARTNERSTWO TECHNOLOGICZNE</span>
            </div>

            <h3 className="font-headline-lg text-headline-lg text-[#0B0F19] font-bold">
              Technologia dopasowana do sposobu działania Twojej firmy
            </h3>

            <p className="font-body-md text-body-md text-[#475569] max-w-2xl leading-relaxed">
              Każdy projekt rozpoczyna się od analizy procesów i potrzeb
              przedsiębiorstwa. Na tej podstawie określany jest zakres
              rozwiązania, jego architektura oraz możliwości integracji
              z istniejącą infrastrukturą IT.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-slate-700 font-label-md text-label-md font-medium">
                <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                  verified_user
                </span>
                Poufność i kontrola dostępu
              </div>

              <div className="flex items-center gap-2 text-slate-700 font-label-md text-label-md font-medium">
                <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                  account_tree
                </span>
                Architektura dopasowana do firmy
              </div>

              <div className="flex items-center gap-2 text-slate-700 font-label-md text-label-md font-medium">
                <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">
                  integration_instructions
                </span>
                Integracje i dedykowane systemy
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-lg bg-[#F8FAFC] border border-slate-200 flex flex-col items-start space-y-4 shadow-sm">
            <span className="font-label-sm text-label-sm text-[#0A6CFF] bg-[#EBF3FF] px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
              INDYWIDUALNE PODEJŚCIE
            </span>

            <h4 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">
              Porozmawiaj o swoim projekcie
            </h4>

            <p className="font-body-sm text-body-sm text-[#475569]">
              Pierwsza rozmowa pozwoli określić potrzeby, możliwe kierunki
              rozwoju oraz zakres potencjalnego projektu.
            </p>

            <Link
              to="/kontakt"
              className="w-full text-center font-label-md text-label-md font-semibold text-white bg-[#0A6CFF] hover:bg-[#0056d1] px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              Przejdź do kontaktu →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
