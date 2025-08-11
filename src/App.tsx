import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import WhyRhobots from './components/WhyRhobots';

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