import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

type Geo = 'torus' | 'icosahedron' | 'octahedron' | 'cone' | 'dodecahedron';

interface SectionDef {
  id: string;
  label: string;
  color: string;
  position: [number, number, number];
  geometry: Geo;
}

// Evenly spaced on a shallow arc, same height — a deliberate row, not a scatter.
const SECTIONS: SectionDef[] = [
  { id: 'about', label: 'about', color: '#6989f2', position: [-2.1, 0.9, -0.3], geometry: 'torus' },
  { id: 'skills', label: 'skills', color: '#e7a540', position: [-0.3, 0.9, 0.7], geometry: 'octahedron' },
  { id: 'projects', label: 'projects', color: '#54d4ba', position: [1.5, 0.9, 1.2], geometry: 'icosahedron' },
  { id: 'research', label: 'research', color: '#a78bfa', position: [3.3, 0.9, 0.7], geometry: 'dodecahedron' },
  { id: 'contact', label: 'contact', color: '#eb5c68', position: [5.1, 0.9, -0.3], geometry: 'cone' },
];

const SectionMarker: React.FC<SectionDef & { onSelect: (id: string) => void }> = ({
  id,
  label,
  color,
  position,
  geometry,
  onSelect,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.35;
  });

  let geo: React.ReactNode;
  if (geometry === 'torus') geo = <torusGeometry args={[0.55, 0.22, 16, 48]} />;
  else if (geometry === 'icosahedron') geo = <icosahedronGeometry args={[0.78, 0]} />;
  else if (geometry === 'octahedron') geo = <octahedronGeometry args={[0.82, 0]} />;
  else if (geometry === 'dodecahedron') geo = <dodecahedronGeometry args={[0.72, 0]} />;
  else geo = <coneGeometry args={[0.7, 1.3, 4]} />;

  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.35}>
      <mesh
        ref={meshRef}
        position={position}
        castShadow
        scale={hovered ? 1.18 : 1}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(id);
        }}
      >
        {geo}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.65 : 0.22}
          roughness={0.35}
          metalness={0.15}
        />
      </mesh>
      <Html position={[position[0], position[1] - 1.15, position[2]]} center>
        <span className="font-mono text-[10px] uppercase tracking-widest text-paper-dim px-2 py-0.5 bg-ink/80 border border-line whitespace-nowrap select-none">
          {label}
        </span>
      </Html>
    </Float>
  );
};

const World3D: React.FC<{ onSelect: (id: string) => void; paused: boolean }> = ({ onSelect, paused }) => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas shadows camera={{ position: [-2.8, 4.8, 12], fov: 52 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#0c0f15']} />
        <fog attach="fog" args={['#0c0f15', 12, 26]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[8, 12, 6]} intensity={1.05} castShadow shadow-mapSize={[1024, 1024]} />
        <pointLight position={[-6, 4, -3]} intensity={0.45} color="#6989f2" />

        <mesh position={[0, -0.62, 0]} receiveShadow>
          <cylinderGeometry args={[7.2, 7.2, 0.3, 56]} />
          <meshStandardMaterial color="#12151d" roughness={0.95} />
        </mesh>

        {SECTIONS.map((s) => (
          <SectionMarker key={s.id} {...s} onSelect={onSelect} />
        ))}

        <OrbitControls
          target={[-2.8, 0.7, 0]}
          enablePan={false}
          minDistance={7}
          maxDistance={16}
          maxPolarAngle={Math.PI / 2.15}
          autoRotate={!paused}
          autoRotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
};

export default World3D;
