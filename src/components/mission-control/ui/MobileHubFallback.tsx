import { useState } from 'react';
import { motion, AnimatePresence, useTime, useTransform, MotionValue } from 'framer-motion';
import { CheckCircle, ArrowRight, X } from 'lucide-react';
import { solutions, Solution } from '../utils/solutionsData';

const ORBIT_DIAMETER_VW = 70;
const NODE_ORBIT_VW = 35;

interface OrbitalNodeProps {
  solution: Solution;
  angleDeg: number;
  rotation: MotionValue<number>;
  isSelected: boolean;
  onSelect: () => void;
}

function OrbitalNode({ solution, angleDeg, rotation, isSelected, onSelect }: OrbitalNodeProps) {
  const counterRotate = useTransform(rotation, r => -r);

  return (
    // Plain div handles the CSS orbital positioning — Framer Motion must NOT touch this transform
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        // Rotate to angle → translate outward → un-rotate so node faces up → shift to center
        transform: `rotate(${angleDeg}deg) translateY(-${NODE_ORBIT_VW}vw) rotate(${-angleDeg}deg) translate(-50%, -50%)`,
        transformOrigin: '0 0',
        zIndex: 20,
      }}
    >
      {/* Counter-rotate wrapper cancels parent ring rotation so labels stay upright */}
      <motion.div style={{ rotate: counterRotate }} className="flex flex-col items-center">
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={onSelect}
          className="flex flex-col items-center focus:outline-none"
        >
          <motion.div
            animate={isSelected ? { scale: [1, 1.1, 1] } : { scale: 1 }}
            transition={{ duration: 1.5, repeat: isSelected ? Infinity : 0 }}
            className="w-14 h-14 rounded-2xl mb-1.5 flex items-center justify-center shadow-lg relative"
            style={{
              background: `linear-gradient(135deg, ${solution.gradient.primary}, ${solution.gradient.secondary})`,
              boxShadow: isSelected
                ? `0 0 25px ${solution.gradient.primary}90`
                : `0 4px 15px ${solution.gradient.primary}40`,
            }}
          >
            <span className="text-xl font-black text-white">{solution.name[0]}</span>
            {isSelected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 rounded-2xl border-2"
                style={{ borderColor: solution.gradient.primary }}
              />
            )}
          </motion.div>
          <span
            className="text-xs font-semibold tracking-wide whitespace-nowrap"
            style={{ color: isSelected ? solution.gradient.primary : 'rgba(255,255,255,0.7)' }}
          >
            {solution.name}
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}

export function MobileHubFallback() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedSolution = solutions.find(s => s.id === selectedId);
  const time = useTime();
  const rotation = useTransform(time, t => (selectedId ? 0 : (t / 30000) * 360) % 360);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex flex-col justify-center">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Header — absolute at top */}
      <div className="absolute top-0 left-0 right-0 z-10 text-center pt-12 pb-4 px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-2"
        >
          <span
            className="text-4xl font-black tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #60a5fa, #3b82f6, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Rho
          </span>
          <span className="text-4xl font-black tracking-tight text-white">bots</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-blue-400/70 text-xs font-medium tracking-[0.2em] uppercase"
        >
          Enterprise AI OS
        </motion.p>
      </div>

      {/* Orbital Hub */}
      <div
        className="relative flex items-center justify-center"
        style={{ height: `${ORBIT_DIAMETER_VW}vw`, margin: '2vw 0' }}
      >
        {/* Dashed orbit rings */}
        <div className="absolute pointer-events-none" style={{ width: `${ORBIT_DIAMETER_VW}vw`, height: `${ORBIT_DIAMETER_VW}vw` }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full rounded-full border border-dashed border-blue-500/15"
          />
        </div>
        <div className="absolute pointer-events-none" style={{ width: `${ORBIT_DIAMETER_VW * 1.15}vw`, height: `${ORBIT_DIAMETER_VW * 1.15}vw` }}>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full rounded-full border border-dashed border-purple-500/10"
          />
        </div>

        {/* Rhobots icon at center */}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute z-20 pointer-events-none"
          style={{
            width: 64, height: 64, borderRadius: 18, overflow: 'hidden',
            boxShadow: '0 0 24px #3b82f6aa, 0 0 48px #3b82f660, 0 0 80px #3b82f630',
            border: '2px solid rgba(96,165,250,0.4)', background: '#0f172a',
          }}
        >
          <img src="/images/icon.png" alt="Rhobots" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>

        {/* Rotating orbital ring with nodes */}
        <motion.div
          className="absolute"
          style={{
            width: `${ORBIT_DIAMETER_VW}vw`,
            height: `${ORBIT_DIAMETER_VW}vw`,
            rotate: rotation,
          }}
        >
          {solutions.map((solution, index) => {
            const angleDeg = (index / solutions.length) * 360 - 90;
            return (
              <OrbitalNode
                key={solution.id}
                solution={solution}
                angleDeg={angleDeg}
                rotation={rotation}
                isSelected={selectedId === solution.id}
                onSelect={() => setSelectedId(selectedId === solution.id ? null : solution.id)}
              />
            );
          })}
        </motion.div>
      </div>

      {/* Bottom sheet */}
      <AnimatePresence>
        {selectedSolution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-h-[80vh] overflow-y-auto rounded-t-3xl relative"
              style={{
                background: `linear-gradient(180deg, ${selectedSolution.gradient.primary}18 0%, #0f172a 25%)`,
              }}
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-white/20" />
              </div>

              <div className="px-6 pb-10 pt-2">
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${selectedSolution.gradient.primary}, ${selectedSolution.gradient.secondary})`,
                    }}
                  >
                    <span className="text-lg font-black text-white">{selectedSolution.name[0]}</span>
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-white mb-0.5"
                      style={{ textShadow: `0 0 20px ${selectedSolution.gradient.primary}80` }}
                    >
                      {selectedSolution.name}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: selectedSolution.gradient.secondary }}>
                      {selectedSolution.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-5">{selectedSolution.description}</p>

                {/* Stats */}
                <div
                  className="grid grid-cols-3 gap-3 mb-5 p-4 rounded-2xl"
                  style={{
                    background: `${selectedSolution.gradient.primary}10`,
                    border: `1px solid ${selectedSolution.gradient.primary}20`,
                  }}
                >
                  {selectedSolution.deepDive.stats.map(stat => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl font-bold" style={{ color: selectedSolution.gradient.primary }}>
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {selectedSolution.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: selectedSolution.gradient.primary }} />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                  style={{
                    background: `linear-gradient(135deg, ${selectedSolution.gradient.primary}, ${selectedSolution.gradient.secondary})`,
                  }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
