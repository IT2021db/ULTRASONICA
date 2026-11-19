import React from "react";
import { useLanguage } from "../context/LanguageContext";

const draft = {
  PL: {
    badge: "SZKIC DO UZUPEŁNIENIA",
    title: "Polityka prywatności",
    intro:
      "To roboczy szkic, niegotowy do publikacji. Uzupełnij wszystkie pola oznaczone nawiasami i potwierdź informacje dotyczące administratora, podstawy prawnej, odbiorców oraz czasu przechowywania danych.",
    sections: [
      {
        title: "1. Administrator danych",
        body: "Administratorem danych jest [pełna nazwa podmiotu / imię i nazwisko przedsiębiorcy], pod adresem ul. Władysława IV 23, 81-358 Gdynia, kontakt: ultrasonica.tech@gmail.com. [Uzupełnij dane rejestrowe, jeśli są wymagane, oraz kontakt do inspektora ochrony danych, jeżeli został wyznaczony.]",
      },
      {
        title: "2. Jakie dane zbieramy i po co",
        body: "Formularz kontaktowy może zbierać imię i nazwisko, adres e-mail, nazwę firmy, temat i treść wiadomości. Dane są wykorzystywane do obsługi zapytania i kontaktu w sprawie opisanej w formularzu. [Wskaż właściwą podstawę prawną, czy podanie danych jest dobrowolne lub niezbędne oraz jakie są skutki ich niepodania. Potwierdź faktyczny zakres danych i cel.]",
      },
      {
        title: "3. Odbiorcy i dostawcy usług",
        body: "[Wpisz dostawców, którzy otrzymują lub przechowują zgłoszenia, np. operator formularza, poczty, hostingu i kopii zapasowych. Opisz ewentualne przekazywanie danych poza Europejski Obszar Gospodarczy oraz stosowane zabezpieczenia. Potwierdź, czy zachodzi zautomatyzowane podejmowanie decyzji lub profilowanie.]",
      },
      {
        title: "4. Okres przechowywania",
        body: "[Określ, jak długo przechowujesz zapytania i korespondencję oraz kryteria usuwania lub archiwizacji. Uwzględnij odrębnie dane potrzebne do zawarcia lub realizacji umowy, jeśli dotyczy.]",
      },
      {
        title: "5. Prawa osób, których dane dotyczą",
        body: "Osobom, których dane dotyczą, mogą przysługiwać prawa określone w przepisach o ochronie danych, w tym prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu lub przenoszenia — zależnie od podstawy i okoliczności przetwarzania. W sprawach prywatności napisz na ultrasonica.tech@gmail.com. Przysługuje także prawo wniesienia skargi do właściwego organu nadzorczego.",
      },
      {
        title: "6. Pliki cookies i zmiany dokumentu",
        body: "[Opisz używane pliki cookies, narzędzia analityczne lub inne technologie śledzące oraz sposób zarządzania zgodami. Uzupełnij datę wejścia w życie i sposób informowania o zmianach.]",
      },
    ],
    source: "Podstawa informacyjna: art. 13 RODO. Szkic wymaga uzupełnienia i weryfikacji względem rzeczywistych procesów.",
    sourceLabel: "tekst rozporządzenia w EUR-Lex",
  },
  EN: {
    badge: "DRAFT — DETAILS REQUIRED",
    title: "Privacy Policy",
    intro:
      "This is a working draft and is not ready for publication. Complete every bracketed field and verify the controller, legal basis, recipients and retention period against your actual data practices.",
    sections: [
      {
        title: "1. Data controller",
        body: "The controller is [full legal name / sole trader name], at Władysława IV 23, 81-358 Gdynia, Poland. Contact: ultrasonica.tech@gmail.com. [Add registration details where required and the data protection officer's contact details, if one has been appointed.]",
      },
      {
        title: "2. Data collected and purposes",
        body: "The contact form may collect your name, email address, company, subject and message. The data is used to handle your enquiry and contact you about the matter described in the form. [State the applicable legal basis, whether providing the data is voluntary or necessary, and the consequences of not providing it. Confirm the actual data categories and purpose.]",
      },
      {
        title: "3. Recipients and service providers",
        body: "[List providers that receive or store enquiries, such as the form, email, hosting and backup providers. Describe any transfers outside the European Economic Area and the safeguards used. Confirm whether automated decision-making or profiling takes place.]",
      },
      {
        title: "4. Retention period",
        body: "[Specify how long enquiries and correspondence are retained and the criteria for deletion or archiving. Separately address records needed to enter into or perform a contract, if applicable.]",
      },
      {
        title: "5. Your data protection rights",
        body: "Depending on the legal basis and circumstances, individuals may have rights under data protection law, including access, rectification, erasure, restriction, objection and data portability. For privacy enquiries, contact ultrasonica.tech@gmail.com. You may also lodge a complaint with the competent supervisory authority.",
      },
      {
        title: "6. Cookies and changes to this policy",
        body: "[Describe cookies, analytics or other tracking technologies used and how consent is managed. Add the effective date and how changes will be communicated.]",
      },
    ],
    source: "Information framework: GDPR Article 13. This draft must be completed and checked against actual processing activities.",
    sourceLabel: "the regulation on EUR-Lex",
  },
} as const;

export const PrivacyPolicyPage: React.FC = () => {
  const { language } = useLanguage();
  const content = draft[language];

  return (
    <section className="w-full bg-[#FAFAF9] py-12 sm:py-16 text-[#0B0F19]">
      <div className="max-w-4xl mx-auto px-gutter">
        <p className="inline-flex rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold tracking-wide text-amber-900">
          {content.badge}
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-5 rounded-lg border border-amber-300 bg-amber-50 p-4 leading-relaxed text-amber-950">
          {content.intro}
        </p>
        <div className="mt-10 space-y-8">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold">{section.title}</h2>
              <p className="mt-2 leading-7 text-slate-700">{section.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 border-t border-slate-200 pt-5 text-sm text-slate-600">
          {content.source}{" "}
          <a
            className="text-[#0A6CFF] underline"
            href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.sourceLabel}
          </a>
        </p>
      </div>
    </section>
  );
};

