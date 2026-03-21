import { Outlet } from 'react-router-dom';
import NavbarLanding from './NavbarLanding';
import FooterLanding from './FooterLanding';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-container-lowest text-on-surface font-body">
      <NavbarLanding />
      <Outlet />
      <FooterLanding />
    </div>
  );
}
