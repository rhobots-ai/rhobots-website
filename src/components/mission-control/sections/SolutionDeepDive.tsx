import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { solutions } from '../utils/solutionsData';

gsap.registerPlugin(ScrollTrigger);

interface SolutionSectionProps {
  solution: typeof solutions[0];
  index: number;
}

function SolutionSection({ solution, index }: SolutionSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });

  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-32 relative overflow-hidden"
      style={{
        background: `linear-gradient(${isEven ? '135deg' : '225deg'},
          ${solution.gradient.primary}08 0%,
          transparent 50%,
          ${solution.gradient.secondary}05 100%)`
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
        style={{
          background: `radial-gradient(circle, ${solution.gradient.primary}, transparent 70%)`,
          left: isEven ? '-10%' : 'auto',
          right: isEven ? 'auto' : '-10%',
          top: '20%'
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={isEven ? 'lg:order-1' : 'lg:order-2'}
          >
            {/* Section number */}
            <div
              className="text-8xl font-black opacity-10 mb-4"
              style={{ color: solution.gradient.primary }}
            >
              0{index + 1}
            </div>

            {/* Title */}
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
              {solution.name}
            </h2>
            <p
              className="text-2xl font-semibold mb-6"
              style={{ color: solution.gradient.primary }}
            >
              {solution.subtitle}
            </p>

            {/* Headline */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {solution.deepDive.headline}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {solution.features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${solution.gradient.primary}20` }}
                  >
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: solution.gradient.primary }}
                    />
                  </div>
                  <span className="text-gray-200 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-3 group transition-all"
              style={{
                background: `linear-gradient(135deg, ${solution.gradient.primary}, ${solution.gradient.secondary})`
              }}
            >
              Explore {solution.name}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="grid grid-cols-1 gap-8">
              {solution.deepDive.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.15, duration: 0.6 }}
                  className="p-8 rounded-2xl border backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${solution.gradient.primary}10, ${solution.gradient.secondary}05)`,
                    borderColor: `${solution.gradient.primary}30`
                  }}
                >
                  <div
                    className="text-6xl lg:text-7xl font-black mb-2"
                    style={{ color: solution.gradient.primary }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-lg uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Use cases */}
            <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-white font-semibold mb-4">Use Cases</h4>
              <div className="flex flex-wrap gap-2">
                {solution.deepDive.useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="px-4 py-2 rounded-full text-sm border"
                    style={{
                      color: solution.gradient.primary,
                      borderColor: `${solution.gradient.primary}40`,
                      background: `${solution.gradient.primary}10`
                    }}
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SolutionDeepDive() {
  return (
    <div className="bg-slate-950">
      {solutions.map((solution, index) => (
        <SolutionSection key={solution.id} solution={solution} index={index} />
      ))}
    </div>
  );
}
