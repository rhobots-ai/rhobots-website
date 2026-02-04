import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import TrustedBySection from './components/TrustedBySection';
import SolutionsSection from './components/SolutionsSection';
import DifferentiatorsSection from './components/DifferentiatorsSection';
import CTASection from './components/CTASection';
import { Analytics } from '@vercel/analytics/react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TrustedBySection />
      <SolutionsSection />
      <DifferentiatorsSection />
      <CTASection />
      <Footer />
      <Analytics />
    </div>
  );
};

export default Landing;
