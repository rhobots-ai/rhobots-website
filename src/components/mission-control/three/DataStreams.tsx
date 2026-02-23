import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { solutions } from '../utils/solutionsData';

interface DataStreamsProps {
  particleCount?: number;
}

export function DataStreams({ particleCount = 100 }: DataStreamsProps) {
  const particlesRef = useRef<THREE.Points>(null);

  // Generate particle positions for streams between nodes and center
  const { positions, colors, velocities } = useMemo(() => {
    const positions = new Float32Array(particleCount * solutions.length * 3);
    const colors = new Float32Array(particleCount * solutions.length * 3);
    const velocities = new Float32Array(particleCount * solutions.length);

    let idx = 0;
    solutions.forEach((solution, solutionIdx) => {
      const angle = (solution.orbitalPosition * Math.PI) / 180;
      const endX = Math.cos(angle) * 4;
      const endY = Math.sin(angle) * 4 * 0.4;
      const endZ = Math.sin(angle) * 4 * 0.3;

      const color = new THREE.Color(solution.gradient.primary);

      for (let i = 0; i < particleCount; i++) {
        const t = i / particleCount;

        // Position along the stream with some noise
        positions[idx * 3] = endX * t + (Math.random() - 0.5) * 0.2;
        positions[idx * 3 + 1] = endY * t + (Math.random() - 0.5) * 0.2;
        positions[idx * 3 + 2] = endZ * t + (Math.random() - 0.5) * 0.2;

        // Color
        colors[idx * 3] = color.r;
        colors[idx * 3 + 1] = color.g;
        colors[idx * 3 + 2] = color.b;

        // Velocity (for animation)
        velocities[idx] = 0.3 + Math.random() * 0.3 + solutionIdx * 0.1;

        idx++;
      }
    });

    return { positions, colors, velocities };
  }, [particleCount]);

  // Store initial positions for animation
  const initialPositions = useMemo(() => new Float32Array(positions), [positions]);

  useFrame(({ clock }) => {
    if (!particlesRef.current) return;

    const geometry = particlesRef.current.geometry;
    const positionAttr = geometry.attributes.position;
    const t = clock.getElapsedTime();

    let idx = 0;
    solutions.forEach((solution) => {
      const angle = (solution.orbitalPosition * Math.PI) / 180;
      const endX = Math.cos(angle) * 4;
      const endY = Math.sin(angle) * 4 * 0.4;
      const endZ = Math.sin(angle) * 4 * 0.3;

      for (let i = 0; i < particleCount; i++) {
        // Animate particles along the stream
        const progress = ((t * velocities[idx]) % 1);
        const noise = Math.sin(t * 2 + idx * 0.1) * 0.1;

        positionAttr.array[idx * 3] = endX * progress + noise;
        positionAttr.array[idx * 3 + 1] = endY * progress + noise * 0.5;
        positionAttr.array[idx * 3 + 2] = endZ * progress + noise * 0.3;

        idx++;
      }
    });

    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
