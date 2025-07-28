import React from 'react';
import { Search, Settings, Globe, Mic, ArrowRight, BookOpen, Wrench, Compass, MessageCircle } from 'lucide-react';

const products = [
  {
    icon: BookOpen,
    name: 'DocumentLM',
    tagline: 'The AI That Actually Reads Your Docs',
    subtitle: '(Unlike Your Intern)',
    description: 'Finally, an AI that shows its work! Our RAG-powered research assistant reads through your documents, finds exactly what you need, and even cites its sources. Your high school English teacher would be proud.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    quirkyFact: '📚 Processes 1000+ pages in seconds'
  },
  {
    icon: Wrench,
    name: 'FineTuning Platform',
    tagline: 'Custom AI Training',
    subtitle: '(No Treats Required)',
    description: 'Train AI models that actually understand your business. Think of it as teaching your AI the company handbook, industry jargon, and all those unwritten rules that make your domain special.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    quirkyFact: '🎯 Domain-specific accuracy up to 95%'
  },
  {
    icon: Compass,
    name: 'AI Browser Agent',
    tagline: 'Your Digital Detective',
    subtitle: '(Sherlock Holmes, But Faster)',
    description: 'This AI surfs the web like a pro researcher with ADHD - but in a good way. It finds information, summarizes findings, and connects dots you never knew existed.',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    quirkyFact: '🔍 Scans 100+ sources simultaneously'
  },
  {
    icon: MessageCircle,
    name: 'Voice AI Agent',
    tagline: 'The AI That Talks Back',
    subtitle: '(In a Good Way)',
    description: 'Natural conversations, smart responses, and zero awkward silences. Perfect for customer service, sales calls, or just having someone to talk to who actually listens.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    quirkyFact: '🎙️ Understands 50+ languages & accents'
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
            Meet Our AI{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Squad
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Each agent has their own superpower, but they work together like the world's most efficient (and never-tired) team. 
            <span className="text-cyan-400 font-semibold"> No office drama, guaranteed.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${product.bgGradient} border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Quirky fact badge */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {product.quirkyFact}
                </div>

                {/* Icon */}
                <div className={`py-2 w-18 h-18 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center mb-6 transition-all duration-300`}>
                  <Icon className="w-9 h-9 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {product.name}
                </h3>
                
                <div className="mb-4">
                  <p className={`text-lg font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    {product.tagline}
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    {product.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Enhanced CTA */}
                <button className="group/btn flex items-center text-white hover:text-blue-400 font-medium transition-all duration-300 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full">
                  <span>Meet This Agent</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Enhanced hover effect overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-1000 delay-100"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-1000 delay-300"></div>
                  <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-1000 delay-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fun team stats */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Our AI Squad Stats</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Always On Duty</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">∞</div>
                <div className="text-gray-400 text-sm">Patience Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">0</div>
                <div className="text-gray-400 text-sm">Sick Days Taken</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-400 text-sm">Team Spirit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
