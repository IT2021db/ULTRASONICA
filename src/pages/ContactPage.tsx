import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import { company } from "../data/company";

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  gdpr: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  gdpr?: string;
}

const pageCopy = {
  PL: {
    badge: "ARCHITEKTURA I KONSULTACJE B2B",
    title: "Opowiedz nam o swojej firmie",
    intro: "Umów się na wstępną, niezobowiązującą rozmowę. Przeanalizujemy Twoje potrzeby i zaproponujemy możliwe kierunki działania.",
    metricLabels: ["Zakres", "Poufność", "Kontakt", "Pierwszy krok"],
    metricValues: ["Proces", "Ustalenia", "Bezpośredni", "Rozmowa"],
    metricDescriptions: ["Analiza dopasowana do zapytania", "Zakres ustalany dla projektu", "Kontakt z osobą realizującą projekt", "Niezobowiązująca rozmowa"],
    formEyebrow: "FORMULARZ KONTAKTOWY",
    formTitle: "Opisz swoje zapytanie",
    online: "Formularz",
    name: "Imię i nazwisko",
    namePlaceholder: "np. Jan Kowalski",
    email: "Adres e-mail",
    emailPlaceholder: "jan.kowalski@firma.pl",
    company: "Nazwa firmy",
    optional: "opcjonalnie",
    companyPlaceholder: "np. Twoja Firma Sp. z o.o.",
    topic: "Czego dotyczy zapytanie?",
    chooseTopic: "Wybierz obszar tematyczny...",
    topicAi: "Wdrożenie AI i LLM",
    topicSoftware: "Dedykowana aplikacja lub system B2B",
    topicAutomation: "Automatyzacja procesów i integracje",
    topicAdvice: "Nie wiem, potrzebuję porady",
    message: "Wiadomość",
    messageMin: "minimum 20 znaków",
    messagePlaceholder: "Opisz proces, który chcesz usprawnić lub zautomatyzować.",
    processing: "Wysyłanie...",
    send: "Wyślij zapytanie",
    emailIntro: "Wolisz napisać bezpośrednio z poczty?",
    officeEyebrow: "KONTAKT",
    officeTitle: "ULTRASONICA",
    addressLabel: "Adres",
    emailLabel: "Adres e-mail",
    phoneTitle: "Kontakt mailowy",
    phoneDescription: "Napisz kilka słów o sprawie. Wrócimy z informacją o możliwych dalszych krokach.",
    mapHeading: "LOKALIZACJA",
    region: "Trójmiasto, Polska",
    mapCity: "Gdynia",
    privacyTitle: "Dane i prywatność",
    privacyDescription: "Informacje o danych przekazanych w zapytaniu, dostawcach usług i prawach osób znajdziesz w polityce prywatności.",
  },
  EN: {
    badge: "B2B ENGINEERING AND CONSULTING",
    title: "Tell us about your business",
    intro: "Arrange an initial, no-obligation conversation. We will review your needs and outline possible next steps.",
    metricLabels: ["Scope", "Confidentiality", "Contact", "First step"],
    metricValues: ["Process", "Project-based", "Direct", "Discussion"],
    metricDescriptions: ["Analysis tailored to your enquiry", "Agreed for each project", "Contact with the person delivering the work", "An initial no-obligation discussion"],
    formEyebrow: "CONTACT FORM",
    formTitle: "Describe your enquiry",
    online: "Form",
    name: "Full name",
    namePlaceholder: "e.g. Alex Smith",
    email: "Email address",
    emailPlaceholder: "alex.smith@company.com",
    company: "Company name",
    optional: "optional",
    companyPlaceholder: "e.g. Example Ltd.",
    topic: "What is your enquiry about?",
    chooseTopic: "Select a topic...",
    topicAi: "AI and LLM implementation",
    topicSoftware: "Custom application or B2B system",
    topicAutomation: "Process automation and integrations",
    topicAdvice: "Not sure yet — I need advice",
    message: "Message",
    messageMin: "at least 20 characters",
    messagePlaceholder: "Describe the process you would like to improve or automate.",
    processing: "Sending...",
    send: "Send an enquiry",
    emailIntro: "Would you prefer to email us directly?",
    officeEyebrow: "CONTACT",
    officeTitle: "ULTRASONICA",
    addressLabel: "Address",
    emailLabel: "Email address",
    phoneTitle: "Email contact",
    phoneDescription: "Tell us briefly what you need. We will get back to you with possible next steps.",
    mapHeading: "LOCATION",
    region: "Tricity, Poland",
    mapCity: "Gdynia",
    privacyTitle: "Data and privacy",
    privacyDescription: "Information about enquiry data, service providers and your rights is available in the privacy policy.",
  },
} as const;

export const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const copy = pageCopy[language];
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    gdpr: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
    details?: string;
  } | null>(null);

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const val =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    // Clear specific error on edit
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = t.contactForm.invalidName;
    }

    if (!validateEmail(formData.email.trim())) {
      newErrors.email = t.contactForm.invalidEmail;
    }

    if (!formData.subject) {
      newErrors.subject = t.contactForm.subjectRequired;
    }

    if (!formData.message.trim() || formData.message.trim().length < 20) {
      newErrors.message = t.contactForm.messageTooShort;
    }

    if (!formData.gdpr) {
      newErrors.gdpr = t.contactForm.consentRequired;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus({
        type: "error",
        message: t.contactForm.incomplete,
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    if (!endpoint) {
      setSubmitStatus({ type: "error", message: t.contactForm.notConfigured });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Contact form request failed");

      setSubmitStatus({ type: "success", message: t.contactForm.sent });
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        gdpr: false,
      });
    } catch {
      setSubmitStatus({ type: "error", message: t.contactForm.failed });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full text-[#0B0F19]">
      {/* Hero / Nagłówek sekcji kontaktowej */}
      <section className="relative w-full overflow-hidden pb-12 pt-8 sm:pt-14 bg-gradient-to-b from-[#F0F5FD] to-[#FAFAF9] border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
          {/* Telemetry Subheading Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0A6CFF] animate-pulse"></span>
            <span className="font-subheading-eyebrow text-subheading-eyebrow uppercase tracking-widest font-bold text-[11px] sm:text-[13px]">
              {copy.badge}
            </span>
            <span className="font-label-sm text-label-sm text-[#475569]">
              • Gdynia, Polska
            </span>
          </div>

          {/* Main Headline & Subtitle */}
          <div className="max-w-3xl">
            <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero text-[#0B0F19] font-bold tracking-tight mb-4">
              {copy.title}
            </h1>
            <p className="font-body-lg text-body-lg text-[#475569] leading-relaxed">
              {copy.intro}
            </p>
          </div>

          {/* Quick Metrics Strip w jasnym stylu */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-10 p-6 bg-white border border-slate-200/90 shadow-sm rounded-lg">
            <div>
                <span className="font-headline-sm text-headline-sm text-[#0A6CFF] font-bold block">
                  {copy.metricValues[0]}
                </span>
              <span className="font-label-sm text-label-sm text-[#475569]">
                  {copy.metricDescriptions[0]}
              </span>
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold block">
                  {copy.metricValues[1]}
              </span>
              <span className="font-label-sm text-label-sm text-[#475569]">
                  {copy.metricDescriptions[1]}
              </span>
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm text-[#0A6CFF] font-bold block">
                  {copy.metricValues[2]}
              </span>
              <span className="font-label-sm text-label-sm text-[#475569]">
                  {copy.metricDescriptions[2]}
              </span>
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold block">
                  {copy.metricValues[3]}
              </span>
              <span className="font-label-sm text-label-sm text-[#475569]">
                  {copy.metricDescriptions[3]}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Główny układ: formularz po lewej w białej karcie, moduły informacyjne po prawej */}
      <section className="w-full py-16 pb-24 bg-[#FAFAF9]">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Kolumna lewa: Formularz w eleganckiej białej karcie */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-slate-200 rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <div>
                  <span className="font-subheading-eyebrow text-subheading-eyebrow text-[#0A6CFF] uppercase tracking-wider block mb-1 font-bold text-[11px] sm:text-[13px]">
                    {copy.formEyebrow}
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-[#0B0F19] font-bold">
                    {copy.formTitle}
                  </h2>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F0F7FF] border border-[#D5E7FF] rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#0A6CFF] animate-ping"></span>
                  <span className="font-label-sm text-label-sm text-[#0A6CFF] font-semibold">
                    {copy.online}
                  </span>
                </div>
              </div>

              {/* Status komunikatu */}
              {submitStatus && (
                <div
                  role={submitStatus.type === "error" ? "alert" : "status"}
                  aria-live={submitStatus.type === "error" ? "assertive" : "polite"}
                  className={`mb-6 p-4 rounded-lg font-body-sm transition-all duration-300 ${
                    submitStatus.type === "error"
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "bg-[#F0F7FF] border border-[#D5E7FF] text-[#0B0F19]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#0A6CFF] text-[24px]">
                      {submitStatus.type === "error" ? "error" : "task_alt"}
                    </span>
                    <div>
                      <strong className="font-headline-sm text-headline-sm text-[#0B0F19] block mb-1 font-bold">
                        {submitStatus.message}
                      </strong>
                      {submitStatus.details && (
                        <p className="font-body-sm text-body-sm text-[#475569] mt-1 leading-relaxed">
                          {submitStatus.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
                noValidate
              >
                {/* Imię i Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-2">
                    <label
                      className="font-label-md text-label-md text-[#0B0F19] font-semibold flex items-center justify-between"
                      htmlFor="name"
                    >
                      <span>
                        {copy.name}{" "}
                        <span className="text-[#0A6CFF]">*</span>
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={copy.namePlaceholder}
                        className="w-full h-12 px-4 rounded-lg bg-[#F8FAFC] border border-slate-300 text-[#0B0F19] font-body-md placeholder:text-slate-400 focus:outline-none focus:border-[#0A6CFF] focus:bg-white transition-colors shadow-inner"
                      />
                    </div>
                    {errors.name && (
                      <span id="name-error" className="font-label-sm text-label-sm text-red-600">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className="font-label-md text-label-md text-[#0B0F19] font-semibold flex items-center justify-between"
                      htmlFor="email"
                    >
                      <span>
                        {copy.email} <span className="text-[#0A6CFF]">*</span>
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={copy.emailPlaceholder}
                        className="w-full h-12 px-4 rounded-lg bg-[#F8FAFC] border border-slate-300 text-[#0B0F19] font-body-md placeholder:text-slate-400 focus:outline-none focus:border-[#0A6CFF] focus:bg-white transition-colors shadow-inner"
                      />
                    </div>
                    {errors.email && (
                      <span id="email-error" className="font-label-sm text-label-sm text-red-600">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Nazwa firmy */}
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-label-md text-[#0B0F19] font-semibold flex items-center justify-between"
                    htmlFor="company"
                  >
                    <span>{copy.company}</span>
                    <span className="font-label-sm text-label-sm text-[#64748B]">
                      {copy.optional}
                    </span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={copy.companyPlaceholder}
                    className="w-full h-12 px-4 rounded-lg bg-[#F8FAFC] border border-slate-300 text-[#0B0F19] font-body-md placeholder:text-slate-400 focus:outline-none focus:border-[#0A6CFF] focus:bg-white transition-colors shadow-inner"
                  />
                </div>

                {/* Temat zapytania */}
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-label-md text-[#0B0F19] font-semibold"
                    htmlFor="subject"
                  >
                    <span>
                      {copy.topic}{" "}
                      <span className="text-[#0A6CFF]">*</span>
                    </span>
                  </label>
                  <div className="relative">
                    <select
                    id="subject"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full h-12 px-4 pr-10 rounded-lg bg-[#F8FAFC] border border-slate-300 text-[#0B0F19] font-body-md focus:outline-none focus:border-[#0A6CFF] focus:bg-white transition-colors appearance-none shadow-inner cursor-pointer"
                    >
                      <option className="text-slate-400" disabled value="">
                        {copy.chooseTopic}
                      </option>
                      <option value="AI">{copy.topicAi}</option>
                      <option value="Custom software">{copy.topicSoftware}</option>
                      <option value="Automation">{copy.topicAutomation}</option>
                      <option value="Advice">{copy.topicAdvice}</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#64748B]">
                      <span className="material-symbols-outlined text-[20px]">
                        expand_more
                      </span>
                    </div>
                  </div>
                  {errors.subject && (
                    <span id="subject-error" className="font-label-sm text-label-sm text-red-600">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Treść wiadomości */}
                <div className="flex flex-col gap-2">
                  <label
                    className="font-label-md text-label-md text-[#0B0F19] font-semibold flex items-center justify-between"
                    htmlFor="message"
                  >
                    <span>
                      {copy.message} <span className="text-[#0A6CFF]">*</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-[#64748B]">
                      {copy.messageMin}
                    </span>
                  </label>
                  <textarea
                    id="message"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={copy.messagePlaceholder}
                    className="w-full p-4 rounded-lg bg-[#F8FAFC] border border-slate-300 text-[#0B0F19] font-body-md placeholder:text-slate-400 focus:outline-none focus:border-[#0A6CFF] focus:bg-white transition-colors shadow-inner resize-y min-h-[110px]"
                  ></textarea>
                  {errors.message && (
                    <span id="message-error" className="font-label-sm text-label-sm text-red-600">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Zgoda RODO */}
                <div className="flex flex-col gap-1 pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group select-none">
                    <input
                      id="gdpr"
                      name="gdpr"
                      type="checkbox"
                      aria-invalid={Boolean(errors.gdpr)}
                      aria-describedby={errors.gdpr ? "gdpr-error" : undefined}
                      required
                      checked={formData.gdpr}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-slate-300 accent-[#0A6CFF] cursor-pointer"
                    />
                    <span className="font-body-sm text-body-sm text-[#475569] leading-snug group-hover:text-[#0B0F19] transition-colors">
                      {language === "PL"
                        ? "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na zapytanie zgodnie z "
                        : "I agree to the processing of my personal data to respond to my enquiry in accordance with the "}
                      <a className="text-[#0A6CFF] underline" href="/privacy-policy">
                        {t.footer.privacyPolicy}
                      </a>.
                    </span>
                  </label>
                  {errors.gdpr && (
                    <span id="gdpr-error" className="font-label-sm text-label-sm text-red-600 ml-7">
                      {errors.gdpr}
                    </span>
                  )}
                </div>

                {/* Przyciski akcji */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <button
                    id="submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-md text-label-md font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] px-8 py-3.5 rounded-[10px] shadow-[0_0_22px_rgba(0,229,255,0.35)] hover:shadow-[0_0_32px_rgba(0,229,255,0.6)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer ${
                      isSubmitting ? "opacity-75" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined text-[18px] animate-spin">
                          progress_activity
                        </span>
                        <span>{copy.processing}</span>
                      </>
                    ) : (
                      <>
                        <span>{copy.send}</span>
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </>
                    )}
                  </button>
                  <span className="font-label-sm text-label-sm text-[#64748B] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#0A6CFF]">
                      lock
                    </span>
                    {language === "PL"
                      ? "Nie wpisuj w formularzu danych poufnych."
                      : "Do not include confidential information in this form."}
                  </span>
                </div>

                {/* Alternatywa mailowa */}
                <div className="pt-4 mt-2 bg-[#F8FAFC] border border-slate-200/90 rounded-lg p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#0A6CFF]">
                      info
                    </span>
                    <span className="font-label-sm text-label-sm text-[#475569]">
                      {copy.emailIntro}
                    </span>
                  </div>
                  <a
                    className="font-label-sm text-label-sm text-[#0A6CFF] hover:underline font-semibold"
                    href={`mailto:${company.email}?subject=Zapytanie%20ofertowe%20-%20ULTRASONICA`}
                  >
                    {company.email}
                  </a>
                </div>
              </form>
            </div>

            {/* Kolumna prawa: Białe karty z danymi firmy, mapą i zaufaniem */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Karta Siedziba operacyjna */}
              <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">
                      corporate_fare
                    </span>
                  </div>
                  <div>
                    <span className="font-subheading-eyebrow text-subheading-eyebrow text-[#0A6CFF] uppercase tracking-wider block font-bold text-[11px] sm:text-[13px]">
                      {copy.officeEyebrow}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">
                      {copy.officeTitle}
                    </h3>
                  </div>
                </div>

                {/* Specs */}
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F0F7FF] border border-[#D5E7FF] flex items-center justify-center text-[#0A6CFF] shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">
                        location_on
                      </span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-[#64748B] block">
                        {copy.addressLabel}
                      </span>
                      <p className="font-body-md text-body-md text-[#0B0F19] font-semibold">
                        {company.addressLine1}
                      </p>
                      <p className="font-body-sm text-body-sm text-[#475569]">
                        {company.postalAddress}
                      </p>
                      <a
                        className="inline-flex items-center gap-1 mt-1.5 font-label-md text-label-md font-semibold text-[#0A6CFF] hover:underline"
                        href={company.mapUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span>{language === "PL" ? "Otwórz w Mapach Google" : "Open in Google Maps"}</span>
                        <span className="material-symbols-outlined text-[16px]">
                          open_in_new
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F0F7FF] border border-[#D5E7FF] flex items-center justify-center text-[#0A6CFF] shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">
                        mail
                      </span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-[#64748B] block">
                        {copy.emailLabel}
                      </span>
                      <a
                        className="font-body-md-medium text-body-md-medium text-[#0A6CFF] hover:underline break-all font-semibold"
                        href={`mailto:${company.email}`}
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>

                  {/* Dlaczego nie podajemy telefonu */}
                  <div className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200/90 flex items-start gap-3 mt-4">
                    <span className="material-symbols-outlined text-[20px] text-[#0A6CFF] shrink-0 mt-0.5">
                      phonelink_erase
                    </span>
                    <div>
                      <span className="font-label-sm text-label-sm text-[#0B0F19] font-bold block mb-0.5">
                        {copy.phoneTitle}
                      </span>
                      <p className="font-body-sm text-body-sm text-[#475569] leading-relaxed">
                        {copy.phoneDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Moduł mapy */}
              <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between px-2 pt-1">
                  <span className="font-label-sm text-label-sm text-[#64748B] uppercase tracking-wider font-semibold">
                    {copy.mapHeading}
                  </span>
                  <span className="font-label-sm text-label-sm text-[#0A6CFF] flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A6CFF]"></span>{" "}
                    {copy.region}
                  </span>
                </div>
                <a
                  href={company.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${copy.mapHeading}: ${company.addressLine1}, ${company.postalAddress}`}
                  className="w-full h-48 bg-cover bg-center rounded-lg border border-slate-200 relative overflow-hidden group cursor-pointer"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDq9W0KXL1fNBVrJT_-g3AvWRGo7QmR-4cL0GSOsuKtWh4JobI2ueCiDZvJluSheVHUGBc2YtCHt0ZcLQR6AaWgFckuiPT-UKl8joutmav9VEhj-ObewCMiG4wNzYf09PJFL1VNjgU0C9zIDyi1y48Mi4JnKHJDCDpqDLy3FyxLySlfXGsEMkV23fuFTHHUDVohcz1Q1egkQ8P5feN-nX6LbZ0NrlxXWwXpzT44W4kQ')",
                  }}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                    <div className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 flex items-center gap-2 shadow-md">
                      <span className="material-symbols-outlined text-[18px] text-[#0A6CFF]">
                        pin_drop
                      </span>
                      <span className="font-label-sm text-label-sm text-[#0B0F19] font-bold">
                        {copy.mapCity}
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Karta Gwarancja prywatności RODO */}
              <div className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    verified_user
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-headline-sm text-headline-sm text-[#0B0F19] font-bold">
                    {copy.privacyTitle}
                  </span>
                  <p className="font-body-sm text-body-sm text-[#475569] leading-relaxed">
                    {copy.privacyDescription}{" "}
                    <a className="text-[#0A6CFF] underline" href="/privacy-policy">
                      {t.footer.privacyPolicy}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

