export interface Solution {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: {
    primary: string;
    secondary: string;
    tailwind: string;
  };
  orbitalPosition: number;
  nodeGeometry: 'octahedron' | 'icosahedron' | 'dodecahedron' | 'torus' | 'torusKnot';
  glowIntensity: number;
  particleColor: string;
  deepDive: {
    headline: string;
    stats: { value: string; label: string }[];
    useCases: string[];
  };
}

export const solutions: Solution[] = [
  {
    id: 'studio',
    name: 'Studio',
    subtitle: 'Custom AI Training',
    description: 'Domain-specific AI models trained on your data, understanding your business context, terminology, and workflows.',
    features: ['Custom model training', 'Fine-tuning pipelines', 'Domain adaptation', 'Continuous learning'],
    gradient: {
      primary: '#9333ea',
      secondary: '#ec4899',
      tailwind: 'from-purple-600 to-pink-600'
    },
    orbitalPosition: 0,
    nodeGeometry: 'octahedron',
    glowIntensity: 1.2,
    particleColor: '#a855f7',
    deepDive: {
      headline: 'Train AI That Speaks Your Language',
      stats: [
        { value: '40%', label: 'Accuracy Boost' },
        { value: '3 Days', label: 'To First Model' },
        { value: '10M+', label: 'Docs Processed' }
      ],
      useCases: ['Legal document analysis', 'Medical terminology extraction', 'Financial compliance']
    }
  },
  {
    id: 'extract',
    name: 'Extract',
    subtitle: 'Document Intelligence',
    description: 'Automated extraction from invoices, contracts, and unstructured documents with production-grade accuracy.',
    features: ['Invoice processing', 'Field extraction', 'Validation workflows', 'API integration'],
    gradient: {
      primary: '#10b981',
      secondary: '#14b8a6',
      tailwind: 'from-emerald-600 to-teal-600'
    },
    orbitalPosition: 72,
    nodeGeometry: 'icosahedron',
    glowIntensity: 1.0,
    particleColor: '#34d399',
    deepDive: {
      headline: 'Extract Intelligence From Any Document',
      stats: [
        { value: '99.2%', label: 'Accuracy Rate' },
        { value: '50ms', label: 'Avg Processing' },
        { value: '200+', label: 'Doc Types' }
      ],
      useCases: ['Invoice automation', 'Contract analysis', 'Form digitization']
    }
  },
  {
    id: 'sage',
    name: 'Sage',
    subtitle: 'Natural Language BI',
    description: 'Query your databases in plain English. Zero SQL required, auto-learns your schema, integrates with existing BI.',
    features: ['Natural language queries', 'Auto-schema detection', 'SQL generation', 'BI platform integration'],
    gradient: {
      primary: '#3b82f6',
      secondary: '#6366f1',
      tailwind: 'from-blue-600 to-indigo-600'
    },
    orbitalPosition: 144,
    nodeGeometry: 'dodecahedron',
    glowIntensity: 1.1,
    particleColor: '#60a5fa',
    deepDive: {
      headline: 'Ask Questions, Get Answers',
      stats: [
        { value: '10x', label: 'Faster Insights' },
        { value: '0', label: 'SQL Required' },
        { value: '95%', label: 'Query Accuracy' }
      ],
      useCases: ['Executive dashboards', 'Ad-hoc reporting', 'Data exploration']
    }
  },
  {
    id: 'pulse',
    name: 'Pulse',
    subtitle: 'Call Center AI',
    description: 'Real-time call assistance with script generation, transcription, sentiment analysis, and quality control.',
    features: ['Real-time transcription', 'Script assistance', 'Sentiment tracking', 'Quality scoring'],
    gradient: {
      primary: '#ec4899',
      secondary: '#ef4444',
      tailwind: 'from-pink-600 to-red-600'
    },
    orbitalPosition: 216,
    nodeGeometry: 'torus',
    glowIntensity: 1.3,
    particleColor: '#f472b6',
    deepDive: {
      headline: 'Supercharge Your Support Team',
      stats: [
        { value: '35%', label: 'Faster Resolution' },
        { value: '4.8', label: 'Avg CSAT Score' },
        { value: '24/7', label: 'AI Assistance' }
      ],
      useCases: ['Customer support', 'Sales calls', 'Quality assurance']
    }
  },
  {
    id: 'operator',
    name: 'Operator',
    subtitle: 'Browser Automation',
    description: 'Enterprise-grade browser automation leveraging AI agents for task execution, with session management, video recording, and multi-provider support.',
    features: ['AI-powered automation', 'Real-time monitoring', 'Video recording & audit trails', 'Multi-LLM support'],
    gradient: {
      primary: '#f97316',
      secondary: '#f59e0b',
      tailwind: 'from-orange-600 to-amber-600'
    },
    orbitalPosition: 288,
    nodeGeometry: 'torusKnot',
    glowIntensity: 1.15,
    particleColor: '#fb923c',
    deepDive: {
      headline: 'Automate Any Web Workflow',
      stats: [
        { value: '80%', label: 'Time Saved' },
        { value: '100%', label: 'Audit Trail' },
        { value: '∞', label: 'Scalability' }
      ],
      useCases: ['Data scraping', 'Form filling', 'Testing automation']
    }
  }
];
