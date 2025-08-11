import React from 'react';
import { Shield, Zap, Puzzle, Users, Code, Lock, Building, Coffee, Heart, Rocket } from 'lucide-react';

const features = [
  {
    icon: Puzzle,
    title: 'Mix & Match Like LEGO',
    subtitle: 'Modular & API-first',
    description: 'Build your perfect AI workflow by combining our agents. Think of it as LEGO blocks, but for artificial intelligence (and way less painful to step on).',
    emoji: '🧩'
  },
  {
    icon: Shield,
    title: 'Fort Knox-Level Security',
    subtitle: 'On-Premises Deployment',
    description: 'Your data stays in your house. We deploy AI agents within your infrastructure with air-gapped solutions that are more secure than your diary.',
    emoji: '🏰'
  },
  {
    icon: Code,
    title: 'Built with the Good Stuff',
    subtitle: 'Leading-edge Stack',
    description: 'State-of-the-art LLMs and open-source tech that would make even the most skeptical developer nod approvingly.',
    emoji: '⚡'
  },
  {
    icon: Rocket,
    title: 'Lightning Fast Setup',
    subtitle: 'Rapid Deployment',
    description: 'From "Hey, we need AI" to "Wow, this actually works!" in days, not geological epochs. Your patience will thank you.',
    emoji: '🚀'
  },
  {
    icon: Heart,
    title: 'Humans Still Matter',
    subtitle: 'Human-in-the-loop',
    description: 'Our AI is smart, but it knows when to ask for help. Built-in safety mechanisms ensure your AI doesn\'t go rogue (we\'ve seen those movies too).',
    emoji: '❤️'
  },
  {
    icon: Building,
    title: 'Enterprise-Grade Everything',
    subtitle: 'Security & Compliance',
    description: 'SOC 2 Type II certified with all the enterprise bells and whistles. Your compliance team will actually smile.',
    emoji: '🏢'
  }
];

const WhyRhobots = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why We're Not Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Average AI Company
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We've built our AI platform with the stuff that actually matters: security that works, flexibility that doesn't break, 
            and performance that makes your boss happy. <span className="text-cyan-400 font-semibold">Revolutionary concept, we know.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Emoji badge */}
                <div className="absolute top-4 right-4 text-2xl opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {feature.emoji}
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 italic">
                      {feature.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-1000"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-1000 delay-200"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced stats section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">The Numbers Don't Lie</h3>
            <p className="text-gray-400">Here's what happens when AI actually works properly</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '99.9%', label: 'Uptime', subtitle: 'More reliable than your internet' },
              { number: '<100ms', label: 'Response Time', subtitle: 'Faster than your morning coffee' },
              { number: '500+', label: 'Happy Clients', subtitle: 'And counting (they keep coming back)' },
              { number: '0', label: 'Robot Uprisings', subtitle: 'Our track record speaks for itself' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold mb-2">
                    {stat.label}
                  </div>
                  <div className="text-s text-gray-400 leading-relaxed">
                    {stat.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRhobots;
