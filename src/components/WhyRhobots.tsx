import React from 'react';
import { Shield, Zap, Puzzle, Users, Code, Lock, Building } from 'lucide-react';

const features = [
  {
    icon: Puzzle,
    title: 'Modular & API-first',
    description: 'Mix and match our AI agents to create custom workflows that fit your exact needs.'
  },
  {
    icon: Shield,
    title: 'On-Premises Deployment',
    description: 'Deploy AI agents within your infrastructure. Complete data sovereignty with air-gapped solutions for maximum security.'
  },
  {
    icon: Code,
    title: 'Leading-edge Stack',
    description: 'Built on state-of-the-art LLMs and open-source technologies for maximum flexibility and performance.'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'From concept to production in days, not months. Our fine-tuning platform accelerates your AI initiatives.'
  },
  {
    icon: Users,
    title: 'Human-in-the-loop',
    description: 'Built-in safety mechanisms and human oversight ensure reliable, trustworthy AI decision-making.'
  },
  {
    icon: Building,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified, multi-tenant isolation, audit trails, and role-based access controls for corporate environments.'
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
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Rhobots?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've built our AI platform with the principles that matter most to modern organizations: 
            security, flexibility, and real-world performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: '99.9%', label: 'Uptime' },
            { number: '<100ms', label: 'Response Time' },
            { number: '500+', label: 'Enterprise Clients' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRhobots;