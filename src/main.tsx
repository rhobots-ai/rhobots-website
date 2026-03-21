import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import OperatorPage from './pages/OperatorPage';
import ExtractPage from './pages/ExtractPage';
import SagePage from './pages/SagePage';
import PulsePage from './pages/PulsePage';
import CopilotPage from './pages/CopilotPage';
import DemoRequestPage from './pages/DemoRequestPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import LegalPage from './pages/LegalPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePage from './pages/CookiePage';
import SlaPage from './pages/SlaPage';
import DocsPage from './pages/DocsPage';
import PricingPage from './pages/PricingPage';
import SecurityPage from './pages/SecurityPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products/operator" element={<OperatorPage />} />
          <Route path="/products/extract" element={<ExtractPage />} />
          <Route path="/products/sage" element={<SagePage />} />
          <Route path="/products/pulse" element={<PulsePage />} />
          <Route path="/products/copilot" element={<CopilotPage />} />
          <Route path="/demo" element={<DemoRequestPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookie" element={<CookiePage />} />
          <Route path="/sla" element={<SlaPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/security" element={<SecurityPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
