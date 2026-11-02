
import React from "react";

import { Badge } from "../../../ui/Badge";
import { Button } from "../../../ui/Button";
import { HeroBenefits } from "./HeroBenefits";

type HeroContentProps = {
  hero: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    description: string;
    contactButton: string;
    servicesButton: string;
    benefits: {
      communication: string;
      security: string;
      business: string;
    };
  };
};

export const HeroContent: React.FC<HeroContentProps> = ({ hero }) => {
  return (
    <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
      <Badge variant="telemetry-dark">
        {hero.badge}
      </Badge>

      <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-white tracking-tight leading-tight">
        {hero.title}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed via-primary to-primary-container">
          {hero.highlight}
        </span>{" "}
        {hero.subtitle}
      </h1>

      <p className="font-body-lg text-body-lg text-slate-300 max-w-xl">
        {hero.description}{" "}
      </p>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
        <Button to="/kontakt" variant="primary" icon="arrow_forward">
          {hero.contactButton}
        </Button>

        <Button to="/uslugi" variant="secondary" icon="arrow_outward">
          {hero.servicesButton}
        </Button>
      </div>

      <HeroBenefits benefits={hero.benefits} />
    </div>
  );
};
