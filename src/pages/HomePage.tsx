
import React from "react";

import { HeroSection } from "../components/sections/home/HeroSection";
import { ProblemsSection } from "../components/sections/home/ProblemsSection";
import { ServicesSection } from "../components/sections/home/ServicesSection";
import { ProcessSection } from "../components/sections/home/ProcessSection";
import { AboutSection } from "../components/sections/home/AboutSection";
import { WhyUsSection } from "../components/sections/home/WhyUsSection";
import { ProjectsSection } from "../components/sections/home/ProjectsSection";
import { CTASection } from "../components/sections/home/CTASection";

export const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <WhyUsSection />
      <ProjectsSection />
      <CTASection />
    </main>
  );
};
