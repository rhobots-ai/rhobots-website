import { Building, DollarSign, Heart, Scale, Shield, ShoppingCart, Cog, GraduationCap, Film, Wifi, Zap, Truck, Home, Smartphone, Cloud, Plane, Users } from 'lucide-react';

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
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    subtitle: 'Cart Smarts',
    description: 'Personalized shopping, demand forecasting, and support that doesn\'t bounce at checkout. Turn browsers into buyers—at scale.',
    gradient: 'from-pink-500 to-rose-500',
    emoji: '🛍️',
    quirkyFact: 'Predicts trends faster than they trend'
  },
  {
    icon: Cog,
    title: 'Manufacturing',
    subtitle: 'Smarter Production',
    description: 'Predictive maintenance, quality inspection, and supply chain optimization that keep lines moving and margins happy.',
    gradient: 'from-gray-500 to-slate-500',
    emoji: '⚙️',
    quirkyFact: 'Finds bottlenecks before they bottleneck'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    subtitle: 'Learning Amplified',
    description: 'Adaptive learning, research copilots, and automated admin that give educators more time to actually teach.',
    gradient: 'from-indigo-500 to-blue-500',
    emoji: '🎓',
    quirkyFact: 'Never sleeps through class'
  },
  {
    icon: Film,
    title: 'Media & Entertainment',
    subtitle: 'Lights, Camera, Insights',
    description: 'Content tagging, highlight generation, and audience insights so good they deserve their own trailer.',
    gradient: 'from-red-500 to-orange-500',
    emoji: '🎬',
    quirkyFact: 'Binge-processes footage without spoilers'
  },
  {
    icon: Wifi,
    title: 'Telecommunications',
    subtitle: 'Connected Intelligence',
    description: 'Network monitoring, churn prediction, and AI support that understands “my internet is being weird.”',
    gradient: 'from-cyan-500 to-blue-500',
    emoji: '📶',
    quirkyFact: 'Optimizes before the bars drop'
  },
  {
    icon: Zap,
    title: 'Energy & Utilities',
    subtitle: 'Powering Efficiency',
    description: 'Load forecasting, anomaly detection, and safety monitoring that keep the lights on and the costs down.',
    gradient: 'from-yellow-500 to-amber-500',
    emoji: '⚡',
    quirkyFact: 'Finds spikes before they shock you'
  },
  {
    icon: Truck,
    title: 'Transportation & Logistics',
    subtitle: 'Right Place, Right Time',
    description: 'Route optimization, ETA predictions, and ops copilots that make “on time” your new default.',
    gradient: 'from-emerald-500 to-teal-500',
    emoji: '🚚',
    quirkyFact: 'Finds the fastest path through chaos'
  },
  {
    icon: Home,
    title: 'Real Estate',
    subtitle: 'Smart Properties',
    description: 'Lead scoring, document automation, and market analysis that makes closing feel... well, easier.',
    gradient: 'from-lime-500 to-green-500',
    emoji: '🏠',
    quirkyFact: 'Spots value before the listings do'
  },
  {
    icon: Smartphone,
    title: 'Consumer Technology',
    subtitle: 'Delight at Scale',
    description: 'Feedback analysis, product insights, and support that sounds human—because it is.',
    gradient: 'from-purple-500 to-fuchsia-500',
    emoji: '📱',
    quirkyFact: 'Understands users better than your backlog'
  },
  {
    icon: Cloud,
    title: 'Software & SaaS',
    subtitle: 'Ship Smarter',
    description: 'Release notes, docs, and support workflows that actually keep up with your sprints.',
    gradient: 'from-sky-500 to-cyan-500',
    emoji: '☁️',
    quirkyFact: 'Cuts tickets before they pile up'
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    subtitle: 'Smooth Journeys',
    description: 'Personalized recommendations, guest support, and ops automation that make every trip feel first-class.',
    gradient: 'from-orange-500 to-amber-500',
    emoji: '✈️',
    quirkyFact: 'Reduces turbulence in your CX'
  },
  {
    icon: Users,
    title: 'Nonprofits & NGOs',
    subtitle: 'Impact First',
    description: 'Grant writing copilots, donor insights, and program reporting that free up time to drive real impact.',
    gradient: 'from-rose-500 to-pink-500',
    emoji: '🤝',
    quirkyFact: 'Stretches every dollar further'
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
