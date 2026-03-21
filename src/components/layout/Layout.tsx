import { Outlet } from 'react-router-dom';
import NavbarLanding from './NavbarLanding';
import NavbarProduct from './NavbarProduct';
import FooterLanding from './FooterLanding';
import FooterProduct from './FooterProduct';

interface LayoutProps {
  variant: 'landing' | 'product';
}

export default function Layout({ variant }: LayoutProps) {
  const Navbar = variant === 'landing' ? NavbarLanding : NavbarProduct;
  const Footer = variant === 'landing' ? FooterLanding : FooterProduct;

  return (
    <div className="min-h-screen flex flex-col bg-surface-container-lowest text-on-surface font-body">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
