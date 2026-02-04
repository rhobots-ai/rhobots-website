import { useState } from 'react';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const stats = [
  { value: '85%', label: 'Faster Deployment', description: 'From pilot to production' },
  { value: '10x', label: 'ROI in Year 1', description: 'Measured business impact' },
  { value: '99.9%', label: 'Uptime SLA', description: 'Enterprise reliability' },
  { value: '<100ms', label: 'Response Time', description: 'Real-time performance' }
];

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-16 pb-20">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <BrandLogo className="mb-8" variant="lg" align="start" />

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-amber-600">95% of AI pilots fail</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                to reach production
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Rhobots delivers production-grade AI that integrates securely into your systems,
              drives measurable efficiency, and operationalizes at scale.
            </p>

            <p className="text-lg text-blue-600 font-semibold mb-8">
              We don't experiment. We ship reliable AI in days, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button onClick={() => navigate('contact')} className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>On-Premise Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
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

        {/* Stats integrated into hero */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-900 font-semibold mb-1 text-sm lg:text-base">{stat.label}</div>
              <div className="text-xs lg:text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
