import { Shield, Zap, Lock, Globe, Building2 } from 'lucide-react';

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

const DifferentiatorsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Enterprises
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Choose Rhobots</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Built for production from day one, with the security, governance, and reliability that enterprise teams require.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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
  );
};

export default DifferentiatorsSection;
