export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 1,
    question: 'Czy muszę znać się na AI?',
    answer:
      'Nie, to nasza rola. Tłumaczymy wszystko prostym, zrozumiałym językiem biznesowym i dbamy o to, by narzędzia były intuicyjne dla każdego członka Twojego zespołu od pierwszego dnia.',
  },
  {
    id: 2,
    question: 'Ile to kosztuje?',
    answer:
      'Każdy projekt ma inną skalę i specyfikę techniczną. Po pierwszej, bezpłatnej rozmowie i analizie wymagań przygotowujemy jasną, przejrzystą wycenę z podziałem na etapy – bez ukrytych kosztów.',
  },
  {
    id: 3,
    question: 'Czy moje dane są bezpieczne?',
    answer:
      'Bezwzględnie tak. Projektujemy rozwiązania zgodnie z RODO, korzystając z odizolowanych, bezpiecznych instancji, gdzie Twoje firmowe dane nigdy nie są wykorzystywane do trenowania ogólnodostępnych modeli publicznych.',
  },
  {
    id: 4,
    question: 'Jak wygląda współpraca?',
    answer:
      'Rozmawiasz bezpośrednio z głównym inżynierem i architektem rozwiązań, a nie z account managerem czy handlowcem. Po analizie celów biznesowych tworzymy architekturę techniczną i zwinnie wdrażamy narzędzie w krótkich iteracjach z pełnym transferem wiedzy.',
  },
  {
    id: 5,
    question: 'Czy można zacząć od małego projektu?',
    answer:
      'Oczywiście. Zawsze rekomendujemy start od szybkiego pilotażu (Proof of Concept) lub automatyzacji jednego, najbardziej uciążliwego wąskiego gardła, by natychmiast zobaczyć mierzalny zwrot z inwestycji.',
  },
];
