import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import {translations} from "../../i18n/translations";
export const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const navLinks = [
  { name: t.navigation.home, path: "/" },
  { name: t.navigation.services, path: "/uslugi" },
  { name: t.navigation.projects, path: "/realizacje" },
  { name: t.navigation.contact, path: "/kontakt" },
];

 const contactLabel = t.navigation.contactButton;

  const brandSubtitle =
    language === "PL"
      ? "INŻYNIERIA INTELIGENTNYCH SYSTEMÓW"
      : "INTELLIGENT SYSTEMS ENGINEERING";

  return (
    <header className="fixed top-0 w-full z-50 bg-[#001029]/85 backdrop-blur-xl border-b border-[#13233c] shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
      <div className="h-20 max-w-[1280px] mx-auto px-gutter flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link to="/" className="flex items-center gap-space-sm group">
          <img
            alt="ULTRASONICA Icon"
            className="w-8 h-8 rounded-full object-contain"
            src="/images/logo.png"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-white font-bold group-hover:text-secondary-fixed transition-colors">
              ULTRASONICA
            </span>
            <span className="font-subheading-eyebrow text-subheading-eyebrow text-secondary-fixed-dim uppercase tracking-widest text-[11px] sm:text-[13px]">
              {brandSubtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "transition-colors text-secondary-fixed font-bold"
                  : "font-label-md text-label-md text-slate-300 hover:text-white transition-colors"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions (Language Switcher, Contact CTA, Mobile Toggle) */}
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#071933] border border-[#1a2e4e] rounded-full px-space-xs py-1">
            <button
              type="button"
              onClick={() => setLanguage("PL")}
              className={`font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-semibold transition-all ${
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
              className={`font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-semibold transition-all ${
                language === "EN"
                  ? "bg-[#162e54] text-secondary-fixed"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA Button */}
          <Link
            to="/kontakt"
            className="hidden sm:inline-flex items-center justify-center font-label-md text-label-md font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] px-space-lg py-2.5 rounded-[10px] shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_28px_rgba(0,229,255,0.55)] transition-all"
          >
            {contactLabel}
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#071933] transition-colors"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001029]/95 border-b border-[#13233c] px-gutter py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 px-3 rounded-lg text-base ${
                  isActive
                    ? "text-secondary-fixed font-bold bg-[#071933]"
                    : "text-slate-300 hover:text-white hover:bg-[#071933]/60"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-[#13233c]">
            <Link
              to="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center font-label-md text-label-md font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] px-space-lg py-2.5 rounded-[10px] shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              {contactLabel}{" "}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
