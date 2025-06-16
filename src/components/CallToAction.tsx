import React from 'react';
import { Calendar, Zap, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:50px_50px]"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-300/20 rounded-full blur-lg animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Workflow with AI?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join Fortune 500 companies and enterprise leaders who trust Rhobots AI agents 
            to transform their operations while maintaining the highest security standards.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
              <Calendar className="mr-3 w-6 h-6" />
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Value props */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white mb-2">Free</div>
              <div className="text-sm">Initial Consultation</div>
            </div>
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white mb-2">30 Days</div>
              <div className="text-sm">Risk-Free Trial</div>
            </div>
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm">Expert Support</div>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 text-blue-100 text-sm">
            <p className="mb-4">Backed by leading AI researchers and trusted by enterprise clients</p>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-300 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2">4.9/5 from 200+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;