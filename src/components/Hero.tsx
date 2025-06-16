import React from 'react';
import {ArrowRight, Bot, Zap} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Bot className="w-12 h-12 text-blue-400 animate-pulse"/>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
            </div>
            <span className="ml-3 text-2xl font-bold text-white">Rhobots</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            AI Agents That
          </h1>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Think. Work. Scale.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unifying specialized AI capabilities to power your data, voice, workflow, and research.
            Experience the future of intelligent automation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </button>
            <button
              className="group bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center backdrop-blur-sm">
              <Zap className="mr-2 w-5 h-5 group-hover:text-yellow-400 transition-colors"/>
              Talk to an Agent
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-gray-400 text-sm">
            Trusted by researchers, enterprises, and innovators worldwide
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-700"></div>
    </section>
  );
};

export default Hero;