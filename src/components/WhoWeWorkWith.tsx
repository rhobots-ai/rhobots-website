import React from 'react';
import { GraduationCap, Heart, Scale, Building, Users, DollarSign, Briefcase, Shield } from 'lucide-react';

const sectors = [
  {
    icon: Building,
    title: 'Fortune 500 Enterprises',
    subtitle: 'The Big Players',
    description: 'When your company has more employees than some small countries, you need AI that can keep up. We scale operations without breaking a sweat (or your budget).',
    gradient: 'from-blue-500 to-indigo-500',
    emoji: '🏢',
    quirkyFact: 'Handles workflows bigger than your org chart'
  },
  {
    icon: DollarSign,
    title: 'Financial Services',
    subtitle: 'Money Matters',
    description: 'Risk analysis, compliance monitoring, and customer service that actually makes sense. Your auditors will love us (and that\'s saying something).',
    gradient: 'from-green-500 to-emerald-500',
    emoji: '💰',
    quirkyFact: 'More secure than your bank vault'
  },
  {
    icon: Scale,
    title: 'Legal Industry',
    subtitle: 'Justice & Documents',
    description: 'Transform legal research and contract analysis. Our AI reads faster than a speed-reading lawyer on espresso, and remembers everything.',
    gradient: 'from-yellow-500 to-orange-500',
    emoji: '⚖️',
    quirkyFact: 'Processes contracts at superhuman speed'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    subtitle: 'Caring for Care',
    description: 'HIPAA-compliant AI that helps with patient care and medical research. Because healthcare heroes deserve AI that actually helps.',
    gradient: 'from-red-500 to-pink-500',
    emoji: '🏥',
    quirkyFact: 'Privacy-first, always'
  },
  {
    icon: Shield,
    title: 'Government',
    subtitle: 'Public Service',
    description: 'Enhance public services while maintaining security standards that would make Fort Knox jealous. Democracy, but with better AI.',
    gradient: 'from-purple-500 to-violet-500',
    emoji: '🏛️',
    quirkyFact: 'Security clearance not required (but appreciated)'
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
            Our Favorite{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Humans to Help
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            From Fortune 500 giants to highly regulated industries, we help organizations that take their data seriously 
            (and appreciate AI that doesn't cause compliance nightmares). <span className="text-cyan-400 font-semibold">We're picky like that.</span>
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
                {/* Quirky fact badge */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  {sector.quirkyFact}
                </div>

                {/* Icon */}
                <div className={`py-2 w-18 h-18 rounded-full bg-gradient-to-r ${sector.gradient} flex items-center justify-center mb-6 transition-all duration-300`}>
                  <Icon className="w-9 h-9 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {sector.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4 italic">
                  {sector.subtitle}
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  {sector.description}
                </p>

                {/* Enhanced hover gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${sector.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-1000 delay-100"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-1000 delay-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced trust section */}
        <div className="text-center">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">The Cool Kids Club</h3>
            <p className="text-gray-400 text-lg">Organizations that trust us with their most important stuff</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { label: 'Fortune 500', subtitle: 'Big names, bigger results' },
              { label: 'Financial Services', subtitle: 'Money talks, we listen' },
              { label: 'Global Law Firms', subtitle: 'Justice served digitally' },
              { label: 'Healthcare Systems', subtitle: 'Caring for the carers' }
            ].map((client, index) => (
              <div key={client.label} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-white font-bold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {client.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {client.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fun testimonial */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/10">
            <div className="text-2xl mb-4">💬</div>
            <blockquote className="text-lg text-gray-300 italic mb-4">
              "Finally, AI that doesn't make our compliance team break out in hives. Rhobots gets it."
            </blockquote>
            <cite className="text-sm text-gray-400">
              — Chief Technology Officer, Fortune 100 Financial Services Company
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
