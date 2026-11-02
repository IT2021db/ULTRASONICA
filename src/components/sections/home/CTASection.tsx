
import React from "react";
import { Link } from "react-router-dom";

export const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAF9] py-16 lg:py-24 relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-[#001433] via-[#051c3d] to-[#001029] border border-[#19355f] p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#00E5FF]/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-80 h-80 bg-[#0A6CFF]/25 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081a33]/80 border border-[#1d375f] backdrop-blur-md text-secondary-fixed mb-space-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping" />
              <span className="font-subheading-eyebrow text-subheading-eyebrow font-semibold uppercase text-[11px] sm:text-[13px]">
                POROZMAWIAJMY O TWOIM BIZNESIE
              </span>
            </div>

            <h2 className="font-headline-xl text-headline-xl sm:text-display-hero text-white font-bold tracking-tight mb-space-sm">
              Porozmawiajmy o tym, co możemy usprawnić u Ciebie
            </h2>

            <p className="font-body-lg text-body-lg text-slate-300 max-w-xl mb-space-lg">
              Umów się na bezpośrednią, 30-minutową rozmowę inżynieryjną.
              Przeanalizujemy Twoje procesy i wskażemy bez owijania w bawełnę,
              gdzie automatyzacja lub AI realnie przyniesie zwrot.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
              <Link
                to="/kontakt"
                className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] px-9 py-4 rounded-[10px] shadow-[0_0_24px_rgba(0,229,255,0.45)] hover:shadow-[0_0_36px_rgba(0,229,255,0.7)] hover:scale-105 transition-all"
              >
                Wyślij zapytanie ofertowe
                <span className="material-symbols-outlined ml-2 text-[20px]">
                  send
                </span>
              </Link>

              <a
                href="mailto:programistka.pl@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md font-medium text-white bg-[#0a1e3b]/80 border border-[#1e3962] hover:bg-[#112d54] px-7 py-4 rounded-[10px] shadow-sm transition-colors"
              >
                <span className="material-symbols-outlined mr-2 text-[18px]">
                  mail
                </span>
                Napisz bezpośrednio
              </a>
            </div>

            <p className="font-label-sm text-label-sm text-slate-400 mt-space-md">
              Odpowiadamy w ciągu 24h • Bez korporacyjnego narzutu • Zgodność
              z RODO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
