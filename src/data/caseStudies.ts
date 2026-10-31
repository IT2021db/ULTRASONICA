export interface CaseStudy {
  id: string;
  scenarioNumber: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  effect: string;
  homeTeaserMetric?: {
    primaryLabel: string;
    primaryValue: string;
    secondaryLabel: string;
    secondaryValue: string;
  };
  homeTeaserModule?: string;
  homeTeaserIcon?: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: '01',
    scenarioNumber: 'SCENARIUSZ 01',
    category: 'SPRZEDAŻ B2B & KATALOGI TECHNICZNE',
    title: 'Asystent AI do odpowiadania na zapytania ofertowe',
    problem:
      'Handlowcy spędzali po 2-3 godziny dziennie na przeszukiwaniu specyfikacji technicznych i redagowaniu powtarzalnych maili.',
    solution:
      'Wdrożenie wewnętrznego asystenta AI połączonego z katalogiem produktów i bezpieczną bazą wiedzy firmy.',
    effect:
      'Wstępne wersje spersonalizowanych ofert generowane w 10 sekund; handlowcy skupiają się na relacjach i domykaniu sprzedaży.',
    homeTeaserMetric: {
      primaryLabel: 'Czas odpowiedzi:',
      primaryValue: 'Skrócony o 85%',
      secondaryLabel: 'Bezpieczeństwo:',
      secondaryValue: 'Baza on-premise',
    },
    homeTeaserModule: 'Moduł: AI Copilot + API Integration',
    homeTeaserIcon: 'auto_awesome',
  },
  {
    id: '02',
    scenarioNumber: 'SCENARIUSZ 02',
    category: 'FINANSE & KSIĘGOWOŚĆ OPERACYJNA',
    title: 'Automatyczne przetwarzanie faktur i dokumentów kosztowych',
    problem:
      'Dział księgowości ręcznie przepisywał dane z setek faktur PDF i skanów trafiających na pocztę.',
    solution:
      'System OCR wspomagany AI, który automatycznie odczytuje pozycje, weryfikuje NIP oraz kwoty i przesyła dane bezpośrednio do systemu ERP.',
    effect:
      'Całkowita eliminacja ręcznego przepisywania danych i pomyłek w numerach kont, natychmiastowe księgowanie kosztów.',
    homeTeaserMetric: {
      primaryLabel: 'Eliminacja pomyłek:',
      primaryValue: 'Precyzja 99.4%',
      secondaryLabel: 'Zgodność:',
      secondaryValue: 'Integracja KSeF / ERP',
    },
    homeTeaserModule: 'Moduł: Vision AI + Księgowość Cloud',
    homeTeaserIcon: 'flowsheet',
  },
  {
    id: '03',
    scenarioNumber: 'SCENARIUSZ 03',
    category: 'PORTAL B2B & PLANOWANIE PRODUKCJI',
    title: 'Dedykowany portal klienta z systemem zamówień',
    problem:
      'Zamówienia spływały chaotycznie przez telefon, SMS-y i maile, co prowadziło do pomyłek i opóźnień produkcyjnych.',
    solution:
      'Prosta, responsywna aplikacja webowa dla stałych kontrahentów z podglądem stanów, automatyczną wyceną i historią zleceń.',
    effect:
      'Pełna przejrzystość zamówień dla klientów w trybie 24/7 oraz uporządkowany harmonogram dla zespołu produkcyjnego.',
  },
  {
    id: '04',
    scenarioNumber: 'SCENARIUSZ 04',
    category: 'SYNCHRONIZACJA • LEAD NURTURING',
    title: 'Integracja CRM z pocztą i powiadomieniami',
    problem:
      'Brak automatyzacji powodował gubienie leadów i brak terminowego kontaktu po wysłaniu oferty handlowej.',
    solution:
      'Dwukierunkowa integracja skrzynki pocztowej z systemem CRM oraz inteligentne powiadomienia o aktywności klienta.',
    effect:
      'Zespół handlowy zawsze wie, kiedy klient zapoznał się z ofertą, a przypomnienia wysyłają się automatycznie.',
  },
];
