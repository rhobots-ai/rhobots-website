import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import OperatorPage from './pages/OperatorPage';
import ExtractPage from './pages/ExtractPage';
import SagePage from './pages/SagePage';
import PulsePage from './pages/PulsePage';
import CopilotPage from './pages/CopilotPage';
import DemoRequestPage from './pages/DemoRequestPage';
import NotFoundPage from './pages/NotFoundPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout variant="landing" />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route element={<Layout variant="product" />}>
          <Route path="/products/operator" element={<OperatorPage />} />
          <Route path="/products/extract" element={<ExtractPage />} />
          <Route path="/products/sage" element={<SagePage />} />
          <Route path="/products/pulse" element={<PulsePage />} />
          <Route path="/products/copilot" element={<CopilotPage />} />
          <Route path="/demo" element={<DemoRequestPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
