import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { solutions } from '../utils/solutionsData';
import { useSolutionStore } from '../hooks/useSolutionStore';

export function SolutionInfoPanel() {
  const { selectedId, setSelected } = useSolutionStore();

  const selectedSolution = solutions.find(s => s.id === selectedId);

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <AnimatePresence>
      {selectedSolution && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-96 max-w-[calc(100vw-4rem)] z-20"
        >
          <div
            className="rounded-2xl backdrop-blur-xl border p-6 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${selectedSolution.gradient.primary}15, ${selectedSolution.gradient.secondary}10)`,
              borderColor: `${selectedSolution.gradient.primary}40`
            }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3
                className="text-3xl font-bold text-white mb-2"
                style={{ textShadow: `0 0 30px ${selectedSolution.gradient.primary}` }}
              >
                {selectedSolution.name}
              </h3>
              <p
                className="text-lg font-medium"
                style={{ color: selectedSolution.gradient.secondary }}
              >
                {selectedSolution.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              {selectedSolution.description}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {selectedSolution.features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: selectedSolution.gradient.primary }}
                  />
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {selectedSolution.deepDive.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ color: selectedSolution.gradient.primary }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-xl font-semibold text-white flex items-center justify-center gap-2 group"
              style={{
                background: `linear-gradient(135deg, ${selectedSolution.gradient.primary}, ${selectedSolution.gradient.secondary})`
              }}
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Decorative glow */}
            <div
              className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30"
              style={{ background: selectedSolution.gradient.primary }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
