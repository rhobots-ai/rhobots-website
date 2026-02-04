import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Award, BarChart, TrendingUp, Users, Bot } from 'lucide-react';

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
  },
  {
    title: 'Operator',
    subtitle: 'Browser Automation Platform',
    description: 'Enterprise-grade browser automation leveraging AI agents for task execution, with session management, video recording, and multi-provider support.',
    features: ['AI-powered automation', 'Real-time monitoring', 'Video recording & audit trails', 'Multi-LLM support'],
    icon: Bot,
    gradient: 'from-orange-600 to-amber-600'
  }
];

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % solutions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
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
        <div>
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
  );
};

export default SolutionsSection;
