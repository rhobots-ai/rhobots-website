import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavbarLanding from './NavbarLanding';
import FooterLanding from './FooterLanding';
import ConsentBanner from '../ConsentBanner';
import { initConsentedAnalytics } from '../../lib/consent';

export default function Layout() {
  useEffect(() => {
    initConsentedAnalytics();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-surface-container-lowest text-on-surface font-body">
      <NavbarLanding />
      <Outlet />
      <FooterLanding />
      <ConsentBanner />
    </div>
  );
}
