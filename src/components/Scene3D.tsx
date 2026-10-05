import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { scrollState } from '@/lib/scroll-state';

const CREAM = '#e6d6b8';
const GOLD = '#d9bd8f';
const BRONZE = '#9c8462';
const RING = '#7d6a4d';

interface Layout {
  x: number; // figure x as a fraction of half the visible width
  y: number;
  scale: number;
  spread: number; // crystal orbit multiplier
  lift: number; // crystal vertical offset
  armUp: number; // 0 = arms down, 1 = arms raised
  turn: number; // extra y rotation
}

// One entry per page section. The scene interpolates between neighbours as
// the reader scrolls.
const LAYOUT: Layout[] = [
  { x: 0.36, y: -0.1, scale: 1, spread: 1, lift: 0, armUp: 1, turn: 0 },
  { x: -0.58, y: -0.5, scale: 0.75, spread: 1.9, lift: 0.4, armUp: 0.2, turn: 0.5 },
  { x: 0.72, y: -0.9, scale: 0.6, spread: 2.2, lift: 0.8, armUp: 0.5, turn: -0.6 },
  { x: -0.6, y: -0.7, scale: 0.65, spread: 2.0, lift: 0.2, armUp: 0.1, turn: 0.8 },
  { x: 0.72, y: -0.7, scale: 0.65, spread: 2.1, lift: 0.5, armUp: 0.3, turn: -0.8 },
  { x: 0.5, y: -0.3, scale: 0.85, spread: 1.4, lift: 0.1, armUp: 1, turn: 0 },
];

const keyed = (t: number, key: keyof Layout, compact: boolean) => {
  const last = LAYOUT.length - 1;
  const i = Math.min(Math.floor(t), last);
  const j = Math.min(i + 1, last);
  const f = THREE.MathUtils.smoothstep(t - i, 0, 1);
  let a = LAYOUT[i][key];
  let b = LAYOUT[j][key];
  if (compact) {
    // On narrow screens the text takes the full width, so the figure shrinks
    // into the top-right corner, clear of the headline.
    if (key === 'x') {
      a = 0.36;
      b = 0.36;
    } else if (key === 'y') {
      a += 2.6;
      b += 2.6;
    } else if (key === 'scale') {
      a *= 0.5;
      b *= 0.5;
    } else if (key === 'spread') {
      a *= 0.6;
      b *= 0.6;
    }
  }
  return THREE.MathUtils.lerp(a, b, f);
};

interface CrystalSeed {
  angle: number;
  radius: number;
  height: number;
  speed: number;
  size: number;
}

const makeCrystals = (count: number): CrystalSeed[] =>
  Array.from({ length: count }, (_, i) => {
    const r = (n: number) => {
      // deterministic pseudo-random so layout is stable between renders
      const x = Math.sin(i * 127.1 + n * 311.7) * 43758.5453;
      return x - Math.floor(x);
    };
    return {
      angle: r(1) * Math.PI * 2,
      radius: 1.6 + r(2) * 1.5,
      height: -0.4 + r(3) * 2.6,
      speed: 0.08 + r(4) * 0.14,
      size: 0.12 + r(5) * 0.22,
    };
  });

const Stars: React.FC<{ count: number }> = ({ count }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 36;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 2] = -2 - Math.random() * 16;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.004;
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, scrollState.section * 0.9, 2, 0.016);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color={GOLD} size={0.05} sizeAttenuation transparent opacity={0.75} depthWrite={false} />
    </points>
  );
};

const Stage: React.FC<{ compact: boolean }> = ({ compact }) => {
  const root = useRef<THREE.Group>(null);
  const figure = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  const crystalRefs = useRef<(THREE.Mesh | null)[]>([]);
  const sparkle = useRef<THREE.Mesh>(null);
  const smooth = useRef(0);

  const crystals = useMemo(() => makeCrystals(compact ? 8 : 12), [compact]);

  useFrame((state, dt) => {
    const time = state.clock.elapsedTime;
    smooth.current = THREE.MathUtils.damp(smooth.current, scrollState.section, 3, dt);
    const t = smooth.current;

    const x = keyed(t, 'x', compact) * (state.viewport.width / 2);
    const y = keyed(t, 'y', compact);
    const scale = keyed(t, 'scale', compact);
    const spread = keyed(t, 'spread', compact);
    const lift = keyed(t, 'lift', compact);
    const armUp = keyed(t, 'armUp', compact);
    const turn = keyed(t, 'turn', compact);

    if (root.current) {
      root.current.position.set(x, y, 0);
      root.current.scale.setScalar(scale);
    }

    if (figure.current) {
      figure.current.rotation.y =
        turn + Math.sin(time * 0.45) * 0.22 + scrollState.pointerX * 0.35;
      figure.current.position.y = Math.sin(time * 1.2) * 0.05;
    }

    const wave = Math.sin(time * 2.2) * 0.16;
    const rest = 0.25;
    const raised = 2.55;
    const angle = THREE.MathUtils.lerp(rest, raised, armUp);
    if (leftArm.current) leftArm.current.rotation.z = -(angle + wave);
    if (rightArm.current) rightArm.current.rotation.z = angle - wave;

    crystalRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const c = crystals[i];
      const a = c.angle + time * c.speed;
      mesh.position.set(
        Math.cos(a) * c.radius * spread,
        c.height + lift + Math.sin(time * 0.7 + c.angle) * 0.2,
        Math.sin(a) * c.radius * spread * 0.55,
      );
      mesh.rotation.x += dt * 0.25;
      mesh.rotation.y += dt * 0.35;
    });

    if (sparkle.current) {
      sparkle.current.rotation.y += dt * 0.8;
      sparkle.current.position.set(2.2 * spread * 0.7, 1.7 + lift + Math.sin(time) * 0.15, 0.4);
    }
  });

  return (
    <group ref={root}>
      <group ref={figure}>
        {/* body */}
        <mesh position={[0, 0.3, 0]}>
          <capsuleGeometry args={[0.3, 0.7, 8, 20]} />
          <meshStandardMaterial color={CREAM} roughness={0.55} />
        </mesh>
        {/* head */}
        <mesh position={[0, 1.22, 0]}>
          <sphereGeometry args={[0.3, 24, 24]} />
          <meshStandardMaterial color={CREAM} roughness={0.5} />
        </mesh>
        {/* arms, pivoting at the shoulder */}
        <group ref={leftArm} position={[-0.42, 0.62, 0]}>
          <mesh position={[0, -0.34, 0]}>
            <capsuleGeometry args={[0.1, 0.5, 6, 12]} />
            <meshStandardMaterial color={CREAM} roughness={0.55} />
          </mesh>
        </group>
        <group ref={rightArm} position={[0.42, 0.62, 0]}>
          <mesh position={[0, -0.34, 0]}>
            <capsuleGeometry args={[0.1, 0.5, 6, 12]} />
            <meshStandardMaterial color={CREAM} roughness={0.55} />
          </mesh>
        </group>
        {/* legs */}
        <mesh position={[-0.17, -0.62, 0]}>
          <capsuleGeometry args={[0.11, 0.42, 6, 12]} />
          <meshStandardMaterial color={CREAM} roughness={0.55} />
        </mesh>
        <mesh position={[0.17, -0.62, 0]}>
          <capsuleGeometry args={[0.11, 0.42, 6, 12]} />
          <meshStandardMaterial color={CREAM} roughness={0.55} />
        </mesh>
      </group>

      {/* ring platform */}
      <mesh position={[0, -1.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.0, 0.07, 12, 96]} />
        <meshStandardMaterial color={RING} roughness={0.7} />
      </mesh>
      <mesh position={[0, -1.06, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.0, 64]} />
        <meshBasicMaterial color="#17120d" transparent opacity={0.75} />
      </mesh>

      {/* drifting crystals */}
      {crystals.map((c, i) => (
        <mesh
          key={i}
          ref={(m) => {
            crystalRefs.current[i] = m;
          }}
        >
          <dodecahedronGeometry args={[c.size, 0]} />
          <meshStandardMaterial color={BRONZE} roughness={0.45} metalness={0.25} flatShading />
        </mesh>
      ))}

      <mesh ref={sparkle}>
        <octahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial color="#efe6d2" emissive="#d9bd8f" emissiveIntensity={0.35} roughness={0.3} />
      </mesh>
    </group>
  );
};

const useIsCompact = () => {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const update = () => setCompact(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);
  return compact;
};

const Scene3D: React.FC = () => {
  const compact = useIsCompact();

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      scrollState.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      scrollState.pointerY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.6, compact ? 9.5 : 8], fov: 42 }}
        dpr={compact ? 1 : [1, 1.5]}
        gl={{ antialias: !compact }}
      >
        <color attach="background" args={['#0d0b09']} />
        <ambientLight intensity={0.6} color="#fff1dc" />
        <directionalLight position={[3, 5, 5]} intensity={1.2} color="#ffe9c7" />
        <pointLight position={[-4, 2, 3]} intensity={0.9} color="#d9bd8f" />
        <Stars count={compact ? 260 : 650} />
        <Stage compact={compact} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
