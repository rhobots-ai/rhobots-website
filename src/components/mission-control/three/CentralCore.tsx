import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';

export function CentralCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.2;
      coreRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    }

    if (glowRef.current) {
      const pulse = 1 + Math.sin(t * 2) * 0.1;
      glowRef.current.scale.setScalar(pulse);
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.z = t * 0.3;
      ringsRef.current.rotation.x = Math.sin(t * 0.7) * 0.2;
    }
  });

  return (
    <group>
      {/* Main core */}
      <Sphere ref={coreRef} args={[0.5, 64, 64]}>
        <MeshDistortMaterial
          color="#3b82f6"
          emissive="#1d4ed8"
          emissiveIntensity={0.8}
          distort={0.3}
          speed={3}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>

      {/* Inner glow */}
      <Sphere ref={glowRef} args={[0.7, 32, 32]}>
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Outer glow */}
      <Sphere args={[0.9, 32, 32]}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Orbital rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.9, 0.02, 16, 100]} />
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <torusGeometry args={[1.2, 0.015, 16, 100]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[Math.PI / 2, -Math.PI / 4, 0]}>
          <torusGeometry args={[1.5, 0.01, 16, 100]} />
          <meshBasicMaterial color="#1d4ed8" transparent opacity={0.2} />
        </mesh>
      </group>

      {/* Rhobots icon overlay */}
      <Html center position={[0, 0, 0]} zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            overflow: 'hidden',
            boxShadow: '0 0 18px #3b82f6aa, 0 0 36px #3b82f660',
            border: '1.5px solid rgba(96,165,250,0.4)',
            background: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src="/images/icon.png"
            alt="Rhobots"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Html>
    </group>
  );
}
