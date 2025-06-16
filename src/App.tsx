import React from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import WhyRhobots from './components/WhyRhobots';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <ProductShowcase />
      <WhyRhobots />
      <WhoWeWorkWith />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;