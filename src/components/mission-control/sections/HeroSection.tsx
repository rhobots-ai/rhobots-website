import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const headlines = [
  'Enterprise AI',
  'Intelligent Automation',
  'Custom Solutions'
];

export function HeroSection() {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 z-10 pointer-events-none bg-slate-950 relative">
      {/* Main headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
          <span className="block text-white/90">Production-Ready</span>
          <motion.span
            key={currentHeadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2"
          >
            {headlines[currentHeadline]}
          </motion.span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto px-6 leading-relaxed">
          Five powerful AI solutions that understand your business.
          <br className="hidden md:block" />
          Deploy in days, not months.
        </p>
      </motion.div>
    </div>
  );
}
