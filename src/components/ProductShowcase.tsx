import React from 'react';
import { Search, Settings, Globe, Mic, ArrowRight } from 'lucide-react';

const products = [
  {
    icon: Search,
    name: 'DocumentLM',
    tagline: 'Talk to your documents, cite your claims.',
    description: 'RAG-based research assistant with citations and traceability. Transform your documents into intelligent, queryable knowledge bases.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    icon: Settings,
    name: 'FineTuning Platform',
    tagline: 'Custom intelligence, your domain, your rules.',
    description: 'Model adaptation platform for industry-specific needs. Train AI models that understand your unique business context.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    icon: Globe,
    name: 'AI Browser Agent',
    tagline: 'Search. Summarize. Act.',
    description: 'An autonomous browser agent that reads, interprets, and extracts insights from the web with human-like comprehension.',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10'
  },
  {
    icon: Mic,
    name: 'Voice AI Agent',
    tagline: 'Your voice, our cognition.',
    description: 'Natural language voice assistant for smart calling, task automation, and enterprise communication solutions.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10'
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Specialized AI{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each Rhobots agent is purpose-built for specific domains, yet designed to work seamlessly together in your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${product.bgGradient} border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {product.name}
                </h3>
                
                <p className={`text-lg font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-4`}>
                  {product.tagline}
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* CTA */}
                <button className="group/btn flex items-center text-white hover:text-blue-400 font-medium transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;