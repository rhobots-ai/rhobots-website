import { useEffect, useState } from 'react';
import { FileText, Wrench, BarChart3, PhoneCall, Play } from 'lucide-react';

const products = [
  {
    icon: Wrench,
    name: 'Studio',
    tagline: 'Custom AI Training',
    subtitle: '(No Treats Required)',
    description: 'Train AI models that actually understand your business. Think of it as teaching your AI the company handbook, industry jargon, and all those unwritten rules that make your domain special.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    quirkyFact: '🎯 Domain-specific accuracy up to 95%',
    videoId: '-oODQSd9rLk'
  },
  {
    icon: FileText,
    name: 'Extract',
    tagline: 'The AI That Knows Your Invoices Better Than You Do',
    subtitle: '(And Never Misses a Decimal)',
    description: 'Built for MSME Invoice Financing, Extract automates disbursals by extracting key fields like invoice number, amount, and dates with unmatched accuracy. Trained on your data for the exact output you need—fast.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    quirkyFact: '📄 Parses 10,000+ invoices in minutes',
    videoId: 'qPWJrMV-_8I'
  },
  {
    icon: BarChart3,
    name: 'Sage',
    tagline: 'The AI Layer Your BI Was Missing',
    subtitle: '(Writes SQL So You Don’t Have To)',
    description: 'Generative BI that lets you query your data in plain English—no SQL skills required. Sage auto-learns your database, works with zero manual setup, and keeps the continuity of your existing BI platform intact.',
    gradient: 'from-purple-500 to-indigo-500',
    bgGradient: 'from-purple-500/10 to-indigo-500/10',
    quirkyFact: '📊 Writes complex SQL in seconds',
    videoId: 'zzJqarZLEe8'
  },
  {
    icon: PhoneCall,
    name: 'Pulse',
    tagline: 'The AI Co-Pilot for Every Call',
    subtitle: '(Because Your Agents Deserve Superpowers)',
    description: 'Embedded AI for functional call-centre apps—from real-time call script generation to accurate transcription, sentiment analysis, and quality control. Pulse turns every agent into your best agent.',
    gradient: 'from-pink-500 to-red-500',
    bgGradient: 'from-pink-500/10 to-red-500/10',
    quirkyFact: '☎️ Analyses calls in milliseconds',
    videoId: 'R_h2WEKYV4E'
  }
];

const ProductShowcase = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveVideoId(null);
      }
    };

    if (activeVideoId) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeVideoId]);

  return (
    <section className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            LLM as a Person{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              LaaP
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
                <button
                  className="group/btn flex items-center text-white hover:text-blue-400 font-medium transition-all duration-300 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/20 hover:border-blue-400/50"
                  onClick={() => setActiveVideoId(product.videoId)}
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover/btn:bg-blue-400/20 transition-all duration-300 mr-3">
                    <Play className="w-3 h-3 ml-0.5 group-hover/btn:scale-110 transition-transform duration-300" fill="currentColor" />
                  </div>
                  <span>Watch Demo</span>
                </button>

                {/* Enhanced hover effect overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>

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

      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
              title="Agent demo video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
