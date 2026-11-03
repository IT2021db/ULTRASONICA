import React from "react";
import { ServicesHero } from "../components/services/ServicesHero";
import { ServicesList } from "../components/services/ServicesList";
import { ServicesFAQ } from "../components/services/ServicesFAQ";
import { ServicesCTA } from "../components/services/ServicesCTA";

export const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <ServicesHero />
      <ServicesList />
      <ServicesFAQ />
      <ServicesCTA />
    </div>
  );
};
