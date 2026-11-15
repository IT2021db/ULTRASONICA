import React from "react";

export const Scenario02InvoiceProcessing: React.FC = () => {
  return (
    <article className="bg-white border border-slate-200 p-6 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Visual Mockup */}
        <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
          <div className="w-full max-w-[460px] bg-[#001029] p-3 shadow-xl rounded-lg border border-slate-800">
            <div className="bg-[#02132C] p-5 flex flex-col space-y-4 rounded-md border border-[#1A2A44]">
              <div className="flex items-center justify-between pb-2 border-b border-[#1A2A44]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                    document_scanner
                  </span>
                  <span className="font-headline-sm text-headline-sm text-white font-bold">
                    OCR Parser • ERP Bridge
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary-fixed bg-[#0F2039] px-2.5 py-0.5 rounded-full border border-[#1E304F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
                  Status: Zgodny
                </span>
              </div>

              {/* Document analysis view */}
              <div className="p-3.5 rounded-lg bg-[#0F2039] space-y-2.5 border border-[#1E304F]">
                <div className="flex items-center justify-between font-label-sm text-label-sm">
                  <span className="text-slate-300 font-medium">
                    Plik: Faktura_VAT_2026_03_991.pdf
                  </span>
                  <span className="text-secondary-fixed font-semibold">
                    100% zaufania OCR
                  </span>
                </div>

                {/* Extracted Entities Pills */}
                <div className="grid grid-cols-2 gap-2 text-label-sm font-label-sm">
                  <div className="p-2 rounded bg-[#1A2A44] border border-[#25354F]">
                    <span className="text-slate-400 block text-xs">
                      Sprzedawca:
                    </span>
                    <span className="text-white font-semibold truncate block">
                      Nordic Metal Sp. z o.o.
                    </span>
                    <span className="text-secondary-fixed-dim text-xs">
                      NIP: 586-21-44-890 [Biała Lista OK]
                    </span>
                  </div>
                  <div className="p-2 rounded bg-[#1A2A44] border border-[#25354F]">
                    <span className="text-slate-400 block text-xs">
                      Kwota brutto:
                    </span>
                    <span className="text-white font-semibold block">
                      48 760,00 PLN
                    </span>
                    <span className="text-secondary-fixed-dim text-xs">
                      VAT: 23% (9 117,72 PLN)
                    </span>
                  </div>
                </div>

                <div className="p-2 rounded bg-[#1A2A44] border border-[#25354F]">
                  <span className="text-slate-400 block text-xs">
                    Numer konta (IBAN):
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-mono text-xs">
                      PL 88 1090 1102 0000 0005 3211 9901
                    </span>
                    <span className="text-secondary-fixed text-xs font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">
                        check_circle
                      </span>
                      Zweryfikowano
                    </span>
                  </div>
                </div>
              </div>

              {/* Live ERP Routing Log */}
              <div className="p-3 rounded-lg bg-[#1A2A44] flex flex-col gap-1.5 font-label-sm text-label-sm border border-[#25354F]">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Ścieżka dekretacji ERP:</span>
                  <span className="text-white font-medium">
                    Konto 401-02 (Surowce)
                  </span>
                </div>
                <div className="flex items-center justify-between text-secondary-fixed">
                  <span>Przesłano do Comarch Optima:</span>
                  <span className="font-mono">Payload HTTP 201 Created</span>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  className="font-label-sm text-label-sm px-4 py-2 bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] text-white rounded-lg font-semibold shadow-sm"
                  type="button"
                >
                  Zatwierdź i zaksięguj
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Columns */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-label-sm text-label-sm font-bold text-[#0A6CFF] bg-[#F0F7FF] border border-[#D5E7FF] px-2.5 py-1 rounded">
              SCENARIUSZ 02
            </span>
            <span className="font-subheading-eyebrow text-subheading-eyebrow text-slate-500 font-bold uppercase tracking-wider text-[11px] sm:text-[13px]">
              FINANSE &amp; KSIĘGOWOŚĆ OPERACYJNA
            </span>
          </div>

          <h2 className="font-headline-lg text-headline-lg text-[#0B0F19] font-bold">
            Automatyczne przetwarzanie faktur i dokumentów kosztowych
          </h2>

          <div className="space-y-4">
            {/* Problem Block */}
            <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#E11D48] text-[22px] shrink-0 mt-0.5">
                report_problem
              </span>
              <div>
                <span className="font-label-md text-label-md font-bold text-[#E11D48] uppercase tracking-wider block mb-1">
                  Problem
                </span>
                <p className="font-body-md text-body-md text-[#475569]">
                  Dział księgowości ręcznie przepisywał dane z setek faktur PDF
                  i skanów trafiających na pocztę.
                </p>
              </div>
            </div>

            {/* Solution Block */}
            <div className="p-4 rounded-lg bg-[#F0F7FF] border border-[#D5E7FF] flex items-start gap-3.5">
              <span className="material-symbols-outlined text-[#0A6CFF] text-[22px] shrink-0 mt-0.5">
                visibility
              </span>
              <div>
                <span className="font-label-md text-label-md font-bold text-[#0A6CFF] uppercase tracking-wider block mb-1">
                  Rozwiązanie
                </span>
                <p className="font-body-md text-body-md text-[#334155]">
                  System OCR wspomagany AI, który automatycznie odczytuje
                  pozycje, weryfikuje NIP oraz kwoty i przesyła dane
                  bezpośrednio do systemu ERP.
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
                  Efekt
                </span>
                <p className="font-body-md text-body-md text-[#1E293B]">
                  Całkowita eliminacja ręcznego przepisywania danych i pomyłek w
                  numerach kont, natychmiastowe księgowanie kosztów.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
