import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Play, Building2, Shield, Zap, TrendingUp, Users, Lock, Globe, Award, BarChart } from 'lucide-react';
import BrandLogo from './components/BrandLogo';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';

const UnifyStyleLanding = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { value: '85%', label: 'Faster Deployment', description: 'From pilot to production' },
    { value: '10x', label: 'ROI in Year 1', description: 'Measured business impact' },
    { value: '99.9%', label: 'Uptime SLA', description: 'Enterprise reliability' },
    { value: '<100ms', label: 'Response Time', description: 'Real-time performance' }
  ];

  const solutions = [
    {
      title: 'Studio',
      subtitle: 'Custom AI Training',
      description: 'Domain-specific AI models trained on your data, understanding your business context, terminology, and workflows.',
      features: ['Custom model training', 'Fine-tuning pipelines', 'Domain adaptation', 'Continuous learning'],
      icon: Award,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Extract',
      subtitle: 'Document Intelligence',
      description: 'Automated extraction from invoices, contracts, and unstructured documents with production-grade accuracy.',
      features: ['Invoice processing', 'Field extraction', 'Validation workflows', 'API integration'],
      icon: BarChart,
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      title: 'Sage',
      subtitle: 'Natural Language BI',
      description: 'Query your databases in plain English. Zero SQL required, auto-learns your schema, integrates with existing BI.',
      features: ['Natural language queries', 'Auto-schema detection', 'SQL generation', 'BI platform integration'],
      icon: TrendingUp,
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Pulse',
      subtitle: 'Call Center AI',
      description: 'Real-time call assistance with script generation, transcription, sentiment analysis, and quality control.',
      features: ['Real-time transcription', 'Script assistance', 'Sentiment tracking', 'Quality scoring'],
      icon: Users,
      gradient: 'from-pink-600 to-red-600'
    }
  ];

  const differentiators = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'On-prem deployment, air-gapped options, SOC 2 Type II practices. Your data never leaves your infrastructure.'
    },
    {
      icon: Zap,
      title: 'Days, Not Months',
      description: 'Productized services with pre-built platforms. Customize to your needs and deploy in days.'
    },
    {
      icon: Lock,
      title: 'Governance Built-In',
      description: 'Compliance, auditability, and human-in-the-loop controls from day one.'
    },
    {
      icon: Globe,
      title: 'Production-Grade',
      description: 'Built for scale with observability, monitoring, and SLAs that enterprise teams require.'
    },
    {
      icon: Building2,
      title: 'Enterprise Ready',
      description: 'SSO, RBAC, audit logs, and all the enterprise features your security team demands.'
    }
  ];

  const trustedBy = [
    { name: 'PB Partners', logo: 'https://www.pbpartners.com/images/logo.svg' },
    { name: 'Safexpress', logo: 'https://www.safexpress.com/assets/images/new-logo-white.png' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % solutions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <BrandLogo className="mb-8" variant="lg" align="start" />

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-amber-600">95% of AI pilots fail</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  to reach production
                </span>
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Rhobots delivers production-grade AI that integrates securely into your systems,
                drives measurable efficiency, and operationalizes at scale.
                <span className="block mt-4 text-blue-600 font-semibold">
                  We don't experiment. We ship reliable AI in days, not months.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button onClick={() => navigate('contact')} className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center">
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>On-Premise Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Enterprise SLA</span>
                </div>
              </div>
            </div>

            {/* Right: Video/Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-50">
                {isVideoPlaying ? (
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/-oODQSd9rLk?autoplay=1&rel=0"
                      title="Rhobots Platform Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div
                    className="aspect-video relative overflow-hidden cursor-pointer group"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-cyan-100"></div>
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                    {/* Scrolling Text */}
                    <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
                      <div className="flex animate-marquee whitespace-nowrap text-5xl lg:text-6xl font-semibold text-gray-900">
                        <span className="mx-8">ENTERPRISE AI</span>
                        <span className="mx-8">PRODUCTION READY</span>
                        <span className="mx-8">SECURE DEPLOYMENT</span>
                        <span className="mx-8">SCALABLE SOLUTIONS</span>
                        <span className="mx-8">ENTERPRISE AI</span>
                        <span className="mx-8">PRODUCTION READY</span>
                        <span className="mx-8">SECURE DEPLOYMENT</span>
                        <span className="mx-8">SCALABLE SOLUTIONS</span>
                      </div>
                    </div>

                    {/* Play button in bottom right */}
                    <div className="absolute bottom-6 right-6 z-10 w-16 h-16 rounded-full bg-white backdrop-blur-sm border-2 border-gray-300 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-600 transition-all duration-300 shadow-xl">
                      <Play className="w-7 h-7 text-blue-600 ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white backdrop-blur-md rounded-xl px-6 py-4 border border-gray-200 shadow-xl">
                <div className="text-3xl font-bold text-gray-900">10x</div>
                <div className="text-sm text-gray-600">Faster Deployment</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white backdrop-blur-md rounded-xl px-6 py-4 border border-gray-200 shadow-xl">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-6">Trusted by enterprises across</h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {trustedBy.map((company, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section with Tabs */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Production-Grade AI
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Solutions</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Pre-built platforms that understand your domain, integrate securely, and deliver measurable business impact.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${solution.gradient} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {solution.title}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    activeTab === index ? 'opacity-100' : 'opacity-0 hidden'
                  }`}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-2xl p-10 border border-gray-200 shadow-lg">
                    <div className="flex items-start gap-6 mb-8">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                        <p className={`text-xl bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent font-semibold mb-4`}>
                          {solution.subtitle}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className={`w-5 h-5 text-blue-600 flex-shrink-0`} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <button className={`bg-gradient-to-r ${solution.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2`}>
                        Learn More About {solution.title}
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentiators Grid */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Enterprises
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Choose Rhobots</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Built for production from day one, with the security, governance, and reliability that enterprise teams require.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to transform your
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> AI from pilot to production?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              Join leading enterprises that are operationalizing AI at scale with Rhobots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate('contact')} className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => navigate('contact')} className="bg-white text-gray-900 px-10 py-5 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-blue-600 hover:bg-gray-50 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UnifyStyleLanding;
