export interface ServiceApplication {
  icon: string;
  label: string;
}

export interface ServiceModule {
  id: string;
  moduleNumber: string;
  category: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  dlaKogo: string;
  coZyskasz: string;
  zastosowania: ServiceApplication[];
  wPraktyce: string;
  image: string;
  telemetryLabel: string;
  homePillarCode: string;
  homeIcon: string;
  homeBulletPoints: string[];
}

export const servicesData: ServiceModule[] = [
  {
    id: 'ai',
    moduleNumber: 'MODUŁ 01',
    category: 'Sztuczna Inteligencja',
    title: 'Wdrożenia AI & LLM',
    shortDescription:
      'Dedykowane asystenty operacyjne oparte na wewnętrznej bazie wiedzy firmy. Inteligentna ekstrakcja danych, kategoryzacja zapytań ofertowych oraz bezpieczne modele z pełną izolacją danych.',
    fullDescription:
      'Praktyczne wdrożenia modeli sztucznej inteligencji oparte na solidnym inżynieryjnym fundamencie. Nie robimy powierzchownych eksperymentów – integrujemy modele językowe z rzeczywistą logiką biznesową przedsiębiorstwa, tworząc wymierne zyski operacyjne.',
    dlaKogo:
      'Firmy obsługujące dużą liczbę zapytań, tonące w powtarzalnych dokumentach lub chcące usprawnić pracę zespołu.',
    coZyskasz:
      'Czas pracowników uwolniony od rutyny, natychmiastowe odpowiedzi dla klientów, dostęp do wiedzy firmy w ułamku sekundy.',
    zastosowania: [
      { icon: 'smart_toy', label: 'Inteligentne chatboty i asystenci firmowi' },
      { icon: 'description', label: 'Analiza i podsumowywanie umów oraz ofert' },
      { icon: 'search_insights', label: 'Semantyczne przeszukiwanie bazy wiedzy' },
    ],
    wPraktyce:
      'Bezpośredni kontakt z inżynierem architektury: wdrażamy odizolowane, bezpieczne instancje z gwarancją poufności danych firmowych oraz prowadzimy warsztatowe wdrożenie zespołu.',
    image: '/images/service_ai.jpg',
    telemetryLabel: 'NEURAL_ENGINE: ACTIVE',
    homePillarCode: '01 / AI CORE',
    homeIcon: 'smart_toy',
    homeBulletPoints: [
      'Prywatna baza wiedzy firmowej (RAG)',
      'Automatyczna weryfikacja dokumentów',
      'Wewnętrzne chatboty operacyjne',
    ],
  },
  {
    id: 'software',
    moduleNumber: 'MODUŁ 02',
    category: 'Architektura Oprogramowania',
    title: 'Aplikacje i systemy dedykowane',
    shortDescription:
      'Wieloletnie doświadczenie w projektowaniu portali B2B, systemów ERP/CRM oraz paneli operacyjnych dostosowanych do indywidualnej specyfiki Twojej branży.',
    fullDescription:
      'Dedykowane oprogramowanie webowe i platformy biznesowe rozwiązujące unikalne wąskie gardła. Eliminujemy ograniczenia szablonowych platform, tworząc kod dokładnie na miarę.',
    dlaKogo:
      'Przedsiębiorstwa, które wyrosły z gotowych systemów pudełkowych lub arkuszy kalkulacyjnych.',
    coZyskasz:
      'Pełną kontrolę nad procesem, skalowalność i narzędzie idealnie skrojone pod nawyki Twoich pracowników.',
    zastosowania: [
      { icon: 'storefront', label: 'Panele klienta B2B' },
      { icon: 'precision_manufacturing', label: 'Systemy zarządzania zleceniami i produkcją' },
      { icon: 'admin_panel_settings', label: 'Dedykowane panele administracyjne' },
    ],
    wPraktyce:
      'Praca w zwinnym modelu partnerskim: od precyzyjnych warsztatów funkcjonalnych z architektem, przez kod prototypu, po wdrożenie produkcyjne i stałą asystę powdrożeniową.',
    image: '/images/service_dev.jpg',
    telemetryLabel: 'ENTERPRISE_CORE: v4.2',
    homePillarCode: '02 / SOFTWARE',
    homeIcon: 'dashboard_customize',
    homeBulletPoints: [
      'Autorskie panele zarządzania i CRM',
      'Platformy B2B & strefy klienta',
      'Skalowalna architektura i czysty kod',
    ],
  },
  {
    id: 'workflow',
    moduleNumber: 'MODUŁ 03',
    category: 'Ekosystem Cyfrowy',
    title: 'Automatyzacja procesów i integracje',
    shortDescription:
      'Bezpieczne łączenie używanego dotychczas oprogramowania: poczty, magazynu, księgowości i zewnętrznych API. Eliminujemy powtarzalne, ręczne czynności.',
    fullDescription:
      'Bezproblemowe łączenie używanych na co dzień aplikacji i likwidacja ręcznego przepisywania danych. Tworzymy spójną magistralę wymiany informacji w całym przedsiębiorstwie.',
    dlaKogo:
      'Zespoły pracujące na wielu nieskomunikowanych narzędziach (CRM, ERP, skrzynka pocztowa, fakturowanie).',
    coZyskasz:
      'Zero błędów ludzkich przy przepisywaniu danych, powiadomienia w czasie rzeczywistym i oszczędność dziesiątek godzin tygodniowo.',
    zastosowania: [
      { icon: 'receipt_long', label: 'Automatyczny obieg faktur' },
      { icon: 'sync_alt', label: 'Synchronizacja zamówień ze stanem magazynowym' },
      { icon: 'notifications_active', label: 'Powiadomienia SMS / Slack / Email' },
    ],
    wPraktyce:
      'Bezpieczna konfiguracja webhooków, API i zautomatyzowanych reguł z monitoringiem działania 24/7.',
    image: '/images/service_automation.jpg',
    telemetryLabel: 'PIPELINE: SYNCHRONIZED',
    homePillarCode: '03 / WORKFLOW',
    homeIcon: 'sync_alt',
    homeBulletPoints: [
      'Automatyczny obieg faktur i zamówień',
      'Dwukierunkowa synchronizacja API',
      'Powiadomienia i webhooki w czasie rzeczywistym',
    ],
  },
];
