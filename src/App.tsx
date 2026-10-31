import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/interactive/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/uslugi" element={<ServicesPage />} />
            <Route path="/realizacje" element={<CaseStudiesPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
