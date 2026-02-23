import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, MeshDistortMaterial } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { Solution } from '../utils/solutionsData';
import { useSolutionStore } from '../hooks/useSolutionStore';
import { motion } from 'framer-motion';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
interface SolutionNodeProps {
  solution: Solution;
  radius?: number;
}

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

export function SolutionNode({ solution, radius = 4 }: SolutionNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [localHovered, setLocalHovered] = useState(false);
  const { selectedId, hoveredId, setSelected, setHovered } = useSolutionStore();

  const isSelected = selectedId === solution.id;
  const isHovered = hoveredId === solution.id;
  const isOtherSelected = selectedId !== null && !isSelected;

  // Calculate position on orbital ring
  const angle = (solution.orbitalPosition * Math.PI) / 180;
  const basePosition = useMemo<[number, number, number]>(() => [
    Math.cos(angle) * radius,
    Math.sin(angle) * radius * 0.4,
    Math.sin(angle) * radius * 0.3
  ], [angle, radius]);

  // Animated spring for hover/selection
  const { scale, emissiveIntensity, opacity, positionZ } = useSpring({
    scale: isSelected ? 1.5 : isHovered ? 1.3 : isOtherSelected ? 0.8 : 1,
    emissiveIntensity: isSelected ? 1.5 : isHovered ? 1.2 : isOtherSelected ? 0.2 : 0.6,
    opacity: isOtherSelected ? 0.3 : 1,
    positionZ: isSelected ? basePosition[2] + 2 : basePosition[2],
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Rotation animation
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  const handlePointerOver = () => {
    setLocalHovered(true);
    setHovered(solution.id);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setLocalHovered(false);
    setHovered(null);
    document.body.style.cursor = 'default';
  };

  const handleClick = () => {
    setSelected(isSelected ? null : solution.id);
  };

  // Geometry based on solution config
  const geometry = useMemo(() => {
    switch (solution.nodeGeometry) {
      case 'octahedron':
        return <octahedronGeometry args={[0.5, 0]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[0.5, 0]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[0.5, 0]} />;
      case 'torus':
        return <torusGeometry args={[0.4, 0.15, 16, 32]} />;
      case 'torusKnot':
        return <torusKnotGeometry args={[0.3, 0.1, 64, 8]} />;
      default:
        return <octahedronGeometry args={[0.5, 0]} />;
    }
  }, [solution.nodeGeometry]);

  return (
    <animated.group
      position-x={basePosition[0]}
      position-y={basePosition[1]}
      position-z={positionZ}
      scale={scale}
    >
      <mesh
        ref={meshRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        {geometry}
        <AnimatedMeshDistortMaterial
          color={solution.gradient.primary}
          emissive={solution.gradient.secondary}
          emissiveIntensity={emissiveIntensity}
          distort={localHovered ? 0.4 : 0.2}
          speed={2}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={opacity}
        />
      </mesh>

      {/* Glow effect */}
      <mesh scale={1.4}>
        {geometry}
        <meshBasicMaterial
          color={solution.gradient.primary}
          transparent
          opacity={isHovered || isSelected ? 0.15 : 0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Label */}
      <Html
        position={[0, 0.9, 0]}
        center
        distanceFactor={8}
        style={{ pointerEvents: 'none' }}
      >
        <div
          className={`
            text-white text-sm font-bold px-3 py-1.5 rounded-full
            backdrop-blur-md whitespace-nowrap
            transition-all duration-300 border
            ${isHovered || isSelected
              ? 'opacity-100 bg-black/60 border-white/30'
              : 'opacity-60 bg-black/40 border-white/10'}
          `}
          style={{
            textShadow: `0 0 10px ${solution.gradient.primary}`
          }}
        >
          {solution.name}
        </div>
      </Html>

      {/* Info Panel positioned near the node */}
      {isSelected && (
        <Html
          position={[1.5, 0, 0]} // Offset to the right of the node
          center
          zIndexRange={[100, 0]}
        >
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-80 md:w-96 z-50 pointer-events-auto"
            style={{ pointerEvents: 'auto' }}
          >
            <div
              className="rounded-2xl backdrop-blur-xl border p-6 relative overflow-hidden shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${solution.gradient.primary}25, ${solution.gradient.secondary}15)`,
                borderColor: `${solution.gradient.primary}40`,
                backgroundColor: 'rgba(15, 23, 42, 0.6)' // Ensure contrast over other nodes
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(null);
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              <div className="mb-4">
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ textShadow: `0 0 20px ${solution.gradient.primary}` }}
                >
                  {solution.name}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: solution.gradient.secondary }}
                >
                  {solution.subtitle}
                </p>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {solution.description}
              </p>

              <div className="space-y-2 mb-4">
                {solution.features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: solution.gradient.primary }}
                    />
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {solution.deepDive.stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div
                      className="text-lg font-bold"
                      style={{ color: solution.gradient.primary }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 text-sm group"
                style={{
                  background: `linear-gradient(135deg, ${solution.gradient.primary}, ${solution.gradient.secondary})`
                }}
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </Html>
      )}
    </animated.group>
  );
}
