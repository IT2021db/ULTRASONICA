
import React from "react";

type HeroBenefitsProps = {
  benefits: {
    communication: string;
    security: string;
    business: string;
  };
};

export const HeroBenefits: React.FC<HeroBenefitsProps> = ({
  benefits,
}) => {
  const items = [
    {
      icon: "forum",
      label: benefits.communication,
    },
    {
      icon: "verified_user",
      label: benefits.security,
    },
    {
      icon: "trending_up",
      label: benefits.business,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-space-sm pt-space-md">
      {items.map((item) => (
        <div
          key={item.icon}
          className="flex items-center gap-2 bg-[#091b35]/90 border border-[#1b345a] backdrop-blur-md px-3.5 py-2 rounded-xl shadow-sm"
        >
          <span
            className="material-symbols-outlined text-secondary-fixed text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {item.icon}
          </span>

          <span className="font-label-sm text-label-sm text-slate-200">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
