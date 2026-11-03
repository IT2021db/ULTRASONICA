import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export const Footer: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <footer className="w-full bg-[#001029] border-t border-[#12243d] text-white">
      <div className="max-w-[1280px] mx-auto px-gutter pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl">
          {/* Col 1: Brand details */}
          <div className="lg:col-span-5 flex flex-col items-start gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <img
                alt="ULTRASONICA Icon"
                className="w-6 h-6 object-contain"
                src={`${import.meta.env.BASE_URL}images/logo.png`}
              />
              <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-white font-bold">
                ULTRASONICA
              </span>
            </div>

            <p className="font-subheading-eyebrow text-subheading-eyebrow text-secondary-fixed-dim uppercase tracking-widest text-[11px] sm:text-[13px]">
              {t.navigation.brandSubtitle}
            </p>

            <p className="font-body-sm text-body-sm text-slate-300 mt-space-xs max-w-md">
              {t.footer.description}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-white mb-space-xs">
              {t.footer.navigationTitle}
            </span>

            <nav className="flex flex-col gap-space-xs">
              <Link
                to="/"
                className="font-body-sm text-body-sm text-slate-400 hover:text-secondary-fixed transition-colors"
              >
                {t.navigation.home}
              </Link>

              <Link
                to="/uslugi"
                className="font-body-sm text-body-sm text-slate-400 hover:text-secondary-fixed transition-colors"
              >
                {t.navigation.services}
              </Link>

              <Link
                to="/realizacje"
                className="font-body-sm text-body-sm text-slate-400 hover:text-secondary-fixed transition-colors"
              >
                {t.navigation.projects}
              </Link>

              <Link
                to="/kontakt"
                className="font-body-sm text-body-sm text-slate-400 hover:text-secondary-fixed transition-colors"
              >
                {t.navigation.contact}
              </Link>

              <span className="font-body-sm text-body-sm text-slate-400">
                {t.footer.privacyPolicy}
              </span>
            </nav>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 flex flex-col gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-white mb-space-xs">
              {t.footer.contactTitle}
            </span>

            <p className="font-body-sm text-body-sm text-slate-300">
              ul. Władysława IV 23, 81-358 Gdynia
            </p>

            <a
              className="font-body-sm text-body-sm text-secondary-fixed hover:underline"
              href="mailto:programistka.pl@gmail.com"
            >
              programistka.pl@gmail.com
            </a>

            <a
              className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary-fixed-dim hover:text-secondary-fixed mt-space-xs"
              href="https://maps.google.com/?q=Władysława+IV+55+Gdynia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">map</span>
              {t.footer.mapLink}
            </a>

            {/* Language switch */}
            <div className="flex items-center gap-space-sm mt-space-sm">
              <span className="font-label-sm text-label-sm text-slate-400">
                {t.footer.languageLabel}:
              </span>

              <div className="flex items-center bg-[#071933] border border-[#1a2e4e] rounded-full px-2 py-0.5">
                <button
                  type="button"
                  onClick={() => setLanguage("PL")}
                  className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold transition-all ${
                    language === "PL"
                      ? "bg-[#162e54] text-secondary-fixed"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  PL
                </button>

                <span className="text-slate-500 font-label-sm text-label-sm px-0.5">
                  |
                </span>

                <button
                  type="button"
                  onClick={() => setLanguage("EN")}
                  className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold transition-all ${
                    language === "EN"
                      ? "bg-[#162e54] text-secondary-fixed"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-space-md border-t border-[#12243d] flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <span className="font-body-sm text-body-sm text-slate-500">
            © 2026 ULTRASONICA. {t.footer.copyright}
          </span>

          <span className="font-label-sm text-label-sm text-slate-500">
            {t.footer.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
};
