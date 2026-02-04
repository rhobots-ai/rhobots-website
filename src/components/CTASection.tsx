import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to transform your
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> AI from pilot to production?</span>
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Join leading enterprises that are operationalizing AI at scale with Rhobots.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('contact')} className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center">
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => navigate('contact')} className="bg-white text-gray-900 px-10 py-5 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-blue-600 hover:bg-gray-50 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
