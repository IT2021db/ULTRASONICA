import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/interactive/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { ContactPage } from "./pages/ContactPage";

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<CaseStudiesPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Redirects from old Polish URLs */}
            <Route
              path="/uslugi"
              element={<Navigate to="/services" replace />}
            />
            <Route
              path="/realizacje"
              element={<Navigate to="/projects" replace />}
            />
            <Route
              path="/kontakt"
              element={<Navigate to="/contact" replace />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
