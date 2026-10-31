import React from 'react';
import { Badge } from '../../ui/Badge';

interface ProblemCard {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

const problems: ProblemCard[] = [
  {
    icon: 'schedule',
    title: 'Powtarzalne zadania zabierają cenny czas',
    description:
      'Setki godzin w każdym miesiącu uciekają na ręczne przepisywanie danych z PDF-ów, rutynowe odpisywanie na powtarzalne zapytania i ręczne generowanie zestawień w firmie.',
    highlight: 'Utrata nawet 20-30h miesięcznie na pracownika',
  },
  {
    icon: 'hub',
    title: 'Dane rozsiane po wielu narzędziach',
    description:
      'Brak płynnej spójności między CRM, arkuszami Excel, skrzynkami mailowymi i systemem fakturowania powoduje błędy ludzkie, opóźnienia i chaos informacyjny.',
    highlight: 'Brak jednego źródła prawdy o zamówieniach',
  },
  {
    icon: 'psychology_alt',
    title: 'AI brzmi obiecująco, ale od czego zacząć?',
    description:
      'Obawa przed niekontrolowanymi kosztami, wyciekiem firmowych dokumentów oraz skomplikowanymi wdrożeniami skutecznie blokuje automatyzację procesów.',
    highlight: 'Brak pragmatycznego doradztwa technicznego',
  },
];

export const ProblemDiagnosisSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAF9] text-[#0B0F19] py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-gutter">
        {/* Section Header */}
        <div className="max-w-2xl mb-space-xl">
          <Badge variant="telemetry-light" className="mb-space-xs">
            DIAGNOZA PROBLEMÓW BIZNESOWYCH
          </Badge>
          <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
            Znasz to w swojej codziennej działalności?
          </h2>
          <p className="font-body-lg text-body-lg text-[#475569] mt-space-xs">
            Większość małych i średnich firm nie potrzebuje rewolucji technologicznej ani haseł z konferencji. Potrzebuje uwolnienia ludzi od żmudnej, powtarzalnej pracy.
          </p>
        </div>

        {/* Problem Cards 3-up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-space-lg border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(10,108,255,0.08)] hover:border-[#0A6CFF]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center mb-space-md group-hover:scale-105 group-hover:bg-[#0A6CFF] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">{problem.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-semibold">
                  {problem.title}
                </h3>
                <p className="font-body-md text-body-md text-[#475569]">
                  {problem.description}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-slate-100 flex items-center gap-2 text-[#0A6CFF] font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                <span>{problem.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
