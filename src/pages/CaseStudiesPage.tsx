import React from "react";

import { CaseStudiesHero } from "../components/caseStudies/CaseStudiesHero";
import { Scenario01SalesAssistant } from "../components/caseStudies/Scenario01SalesAssistant";
import { Scenario02InvoiceProcessing } from "../components/caseStudies/Scenario02InvoiceProcessing";
import { Scenario03ClientPortal } from "../components/caseStudies/Scenario03ClientPortal";
import { Scenario04CrmIntegration } from "../components/caseStudies/Scenario04CrmIntegration";
import { PartnershipBanner } from "../components/caseStudies/PartnershipBanner";
import { CaseStudiesCTA } from "../components/caseStudies/CaseStudiesCTA";

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <CaseStudiesHero />
      <div className="bg-[#FAFAF9] py-16 lg:py-24">
        <section className="max-w-[1280px] mx-auto px-gutter space-y-16 lg:space-y-24">
          <Scenario01SalesAssistant />
          <Scenario02InvoiceProcessing />
          <Scenario03ClientPortal />
          <Scenario04CrmIntegration />
        </section>
      </div>
      <PartnershipBanner />
      <CaseStudiesCTA />
    </div>
  );
};
