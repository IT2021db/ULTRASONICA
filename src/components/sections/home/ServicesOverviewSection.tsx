import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../../data/services';
import { Badge } from '../../ui/Badge';

export const ServicesOverviewSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F4F6F9] py-20 lg:py-28 relative border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-gutter">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <Badge variant="telemetry-light" className="mb-2">
              KOMPLEKSOWA REALIZACJA
            </Badge>
            <h2 className="font-headline-xl text-headline-xl text-[#0B0F19] tracking-tight font-bold">
              Usługi zaprojektowane pod realny biznes
            </h2>
          </div>
          <p className="font-body-md text-body-md text-[#475569] max-w-md">
            Nie sprzedajemy modnych eksperymentów. Dostarczamy stabilne, bezpieczne narzędzia, które stają się kręgosłupem operacyjnym Twojej firmy.
          </p>
        </div>

        {/* Bento-style 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-space-lg border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-[0_16px_36px_rgba(10,108,255,0.1)] hover:border-[#0A6CFF]/50 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-[#0A6CFF]/10 to-[#00E5FF]/20 border border-[#0A6CFF]/20 flex items-center justify-center text-[#0A6CFF] shadow-sm group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[30px]">{service.homeIcon}</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-[#0A6CFF] bg-[#F0F7FF] px-3 py-1 rounded-full border border-[#D5E7FF] uppercase tracking-widest font-semibold">
                    {service.homePillarCode}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[#0B0F19] mb-space-xs font-bold">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-md text-[#475569] mb-space-md">
                  {service.shortDescription}
                </p>
                <ul className="flex flex-col gap-2.5 mb-space-md bg-[#F8FAFC] p-4 rounded-lg border border-slate-100">
                  {service.homeBulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 font-body-sm text-body-sm text-[#1E293B]">
                      <span className="material-symbols-outlined text-[#0A6CFF] text-[18px]">check_circle</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/uslugi"
                className="inline-flex items-center gap-2 font-label-md text-label-md font-semibold text-[#0A6CFF] group-hover:text-[#0056d1] transition-colors pt-space-sm border-t border-slate-100"
              >
                Więcej o {service.title.toLowerCase()}
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
