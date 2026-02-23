import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Preload, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import { CentralCore } from './CentralCore';
import { SolutionNode } from './SolutionNode';
import { DataStreams } from './DataStreams';
import { ParticleField } from './ParticleField';
import { solutions } from '../utils/solutionsData';
import { useSolutionStore } from '../hooks/useSolutionStore';
import { ExperienceTier } from '../hooks/useDeviceCapabilities';

interface SolutionsHubProps {
  tier: ExperienceTier;
}

function OrbitalRig({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const { selectedId, hoveredId } = useSolutionStore();

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Slow rotation when nothing is selected/hovered
    // Stop when something is selected
    const rotationSpeed = selectedId ? 0 : hoveredId ? 0.02 : 0.08;
    groupRef.current.rotation.y += delta * rotationSpeed;
  });

  return <group ref={groupRef}>{children}</group>;
}

function Scene({ tier }: { tier: ExperienceTier }) {
  const particleCount = tier === 'full' ? 100 : 30;
  const fieldCount = tier === 'full' ? 500 : 150;

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#3b82f6" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />

      {/* Central core */}
      <CentralCore />

      {/* Orbital rig with solution nodes */}
      <OrbitalRig>
        {solutions.map((solution) => (
          <SolutionNode key={solution.id} solution={solution} radius={4.5} />
        ))}
        <DataStreams particleCount={particleCount} />
      </OrbitalRig>

      {/* Background particles */}
      <ParticleField count={fieldCount} spread={25} />

      {/* Camera Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={5}
        maxDistance={25}
        makeDefault
        enableDamping
        dampingFactor={0.05}
        autoRotate={false}
      />

      {/* Environment */}
      <Environment preset="night" />

      {/* Post-processing */}
      {tier === 'full' && (
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            intensity={0.8}
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={new THREE.Vector2(0.0005, 0.0005)}
          />
        </EffectComposer>
      )}

      <Preload all />
    </>
  );
}

export function SolutionsHub({ tier }: SolutionsHubProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        dpr={tier === 'full' ? [1, 2] : [1, 1]}
        gl={{
          powerPreference: 'high-performance',
          antialias: tier === 'full',
          stencil: false,
          depth: true
        }}
        camera={{ position: [0, 0, 12], fov: 50 }}
      >
        <Suspense fallback={null}>
          <Scene tier={tier} />
        </Suspense>
      </Canvas>
    </div>
  );
}
