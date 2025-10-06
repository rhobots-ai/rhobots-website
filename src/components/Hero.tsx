import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Lightbulb } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Hero = () => {
  const [currentThought, setCurrentThought] = useState(0);
  const thoughts = [
    "Processing your workflow...",
    "Optimizing efficiency...",
    "Brewing digital coffee...",
    "Thinking outside the box...",
    "Connecting the dots..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThought((prev) => (prev + 1) % thoughts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none"></div>

      {/* Floating AI thought bubbles */}
      <div className="absolute top-20 right-10 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 text-white text-sm animate-bounce delay-1000 hidden md:block pointer-events-none">
        <div className="flex items-center space-x-2">
          <Brain className="w-4 h-4 text-cyan-400" />
          <span className="transition-all duration-500">{thoughts[currentThought]}</span>
        </div>
      </div>

      <div className="absolute bottom-32 left-10 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 text-white text-sm animate-bounce delay-2000 hidden md:block pointer-events-none">
        <div className="flex items-center space-x-2">
          <Lightbulb className="w-4 h-4 text-yellow-400" />
          <span>Innovation in progress...</span>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Logo/Brand */}
          <BrandLogo className="mb-8" variant="lg" />

          {/* Quirky main headline */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Enterprise AI.
            </h1>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Engineered For Reality
              </span>
            </h1>
            <div className="flex items-center justify-center mt-4">
              <Zap className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-lg text-gray-300 italic">(From infra to production—fast)</span>
            </div>
          </div>

          {/* Enhanced subheadline */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Productized services that harden your infra, integrate securely, and operationalize AI with governance, observability, and SLAs—
            <span className="text-cyan-400 font-semibold">so you ship in days, not months.</span>
          </p>

          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            {/* <button
              onClick={() => {
                const el = document.getElementById('product-showcase');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center relative overflow-hidden"
            >
              <span className="relative z-10">Meet Our AI Squad</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button> */}
            <button
              onClick={() => navigate('/contact')}
              className="group bg-white text-blue-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center relative overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Quirky trust indicators */}
          <div className="mt-16">
            <div className="text-gray-400 text-lg mb-4">
              Trusted by humans who appreciate AI that actually works
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                99.9% Uptime
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse delay-300"></div>
                500+ Happy Clients
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse delay-700"></div>
                Zero Robot Uprisings
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce hidden md:block pointer-events-none"></div>
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-300 hidden md:block pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-700 hidden md:block pointer-events-none"></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-1000 hidden md:block pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-1500 hidden md:block pointer-events-none"></div>
    </section>
  );
};

export default Hero;
