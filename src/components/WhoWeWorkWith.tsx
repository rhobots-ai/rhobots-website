import React from 'react';
import { GraduationCap, Heart, Scale, Building, Users } from 'lucide-react';

const sectors = [
  {
    icon: Building,
    title: 'Fortune 500 Enterprises',
    description: 'Scale operations with custom AI agents that understand your business domain and integrate with existing workflows.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Users,
    title: 'Financial Services',
    description: 'Enhance risk analysis, compliance monitoring, and customer service with secure, regulated AI solutions.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Scale,
    title: 'Legal',
    description: 'Transform legal research, contract analysis, and case preparation with intelligent document processing.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Streamline patient care, medical research, and clinical documentation with HIPAA-compliant AI solutions.',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: GraduationCap,
    title: 'Government',
    description: 'Enhance public services and policy analysis while maintaining the highest security and privacy standards.',
    gradient: 'from-purple-500 to-violet-500'
  }
];

const WhoWeWorkWith = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Who We{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From Fortune 500 enterprises to regulated industries, 
            Rhobots empowers corporations to harness specialized AI while maintaining the highest security and compliance standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className="group relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 120}ms`
                }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${sector.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {sector.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {sector.description}
                </p>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${sector.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="text-center">
          <p className="text-gray-400 mb-8 text-lg">Trusted by enterprise clients worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for client logos */}
            <div className="px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <span className="text-white font-semibold">Fortune 500</span>
            </div>
            <div className="px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <span className="text-white font-semibold">Financial Services</span>
            </div>
            <div className="px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <span className="text-white font-semibold">Global Law Firm</span>
            </div>
            <div className="px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <span className="text-white font-semibold">Healthcare Corp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;