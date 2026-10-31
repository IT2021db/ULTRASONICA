export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

export const methodologySteps: MethodologyStep[] = [
  {
    step: '01',
    title: '1. Rozmowa o Twojej firmie i celach',
    description:
      'Słuchamy, jak wygląda Twoja codzienna praca i gdzie pojawiają się wąskie gardła. Rozmawiasz bezpośrednio z głównym inżynierem bez żargonu.',
    icon: 'record_voice_over',
    tag: 'Rozpoznanie potrzeb',
  },
  {
    step: '02',
    title: '2. Audyt procesów i precyzyjny plan',
    description:
      'Wskazujemy konkretne miejsca, w których automatyzacja lub AI przyniesie natychmiastową korzyść finansową i oszczędność godzin roboczych.',
    icon: 'analytics',
    tag: 'Przejrzysty zakres',
  },
  {
    step: '03',
    title: '3. Zwinne wdrożenie i testy',
    description:
      'Bezpośrednia realizacja architektury w ścisłej współpracy z Tobą. Każdy moduł testowany jest na rzeczywistych danych bez opóźnień.',
    icon: 'terminal',
    tag: 'Sprawdzona stabilność',
  },
  {
    step: '04',
    title: '4. Rozwój, asysta i opieka',
    description:
      'Partnerska asysta techniczna. W razie potrzeby elastycznie angażujemy zaufanych partnerów specjalistycznych, zapewniając spokój rozwoju.',
    icon: 'support_agent',
    tag: 'Zwinne wsparcie partnerskie',
  },
];
