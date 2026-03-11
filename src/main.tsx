import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage.tsx';
import TermsPage from './pages/TermsPage.tsx';
import PrivacyPage from './pages/PrivacyPage.tsx';
import './index.css';
import App from './App.tsx';

// Lazy load Mission Control for performance (heavy 3D components)
const MissionControlPage = lazy(() => import('./pages/MissionControlPage.tsx'));

// Loading component for Mission Control
const MissionControlLoading = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-400">Loading Mission Control...</p>
    </div>
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route
          path="/mission-control"
          element={
            <Suspense fallback={<MissionControlLoading />}>
              <MissionControlPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
