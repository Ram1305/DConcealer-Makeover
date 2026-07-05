"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  Sparkles,
  ContactShadows,
  RoundedBox,
} from "@react-three/drei";
import * as THREE from "three";

function Lipstick({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.25;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <group ref={ref} position={position}>
        <mesh position={[0, 0.55, 0]} castShadow>
          <cylinderGeometry args={[0.16, 0.16, 0.55, 32]} />
          <meshStandardMaterial
            color="#D4AF37"
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>
        <mesh position={[0, 1.0, 0]} castShadow>
          <coneGeometry args={[0.15, 0.35, 32]} />
          <meshStandardMaterial
            color="#8b1e3f"
            metalness={0.2}
            roughness={0.25}
          />
        </mesh>
        <mesh position={[0, 0.05, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.18, 0.5, 32]} />
          <meshStandardMaterial
            color="#111111"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Mirror({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z = Math.sin(Date.now() * 0.0003) * 0.15;
  });
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.9}>
      <group ref={ref} position={position} rotation={[0, 0.3, 0.1]}>
        <mesh castShadow>
          <torusGeometry args={[0.55, 0.05, 32, 64]} />
          <meshStandardMaterial
            color="#D4AF37"
            metalness={1}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[0, 0, -0.02]}>
          <circleGeometry args={[0.5, 64]} />
          <meshPhysicalMaterial
            color="#fdf6ea"
            metalness={0.3}
            roughness={0}
            transmission={0.6}
            thickness={0.2}
          />
        </mesh>
        <mesh position={[0, -0.75, 0]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.5, 16]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function Compact({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.2;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={ref} position={position}>
        <RoundedBox args={[0.75, 0.75, 0.14]} radius={0.08} smoothness={4} castShadow>
          <meshStandardMaterial color="#FCE4EC" metalness={0.4} roughness={0.35} />
        </RoundedBox>
        <mesh position={[0, 0, 0.08]}>
          <circleGeometry args={[0.22, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

function Brush({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.15;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.4}>
      <group ref={ref} position={position} rotation={[0, 0, 0.6]}>
        <mesh position={[0, -0.5, 0]} castShadow>
          <cylinderGeometry args={[0.045, 0.045, 0.8, 16]} />
          <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[0, -0.02, 0]} castShadow>
          <cylinderGeometry args={[0.06, 0.05, 0.18, 16]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.15} />
        </mesh>
        <mesh position={[0, 0.32, 0]} castShadow>
          <coneGeometry args={[0.16, 0.55, 32]} />
          <meshStandardMaterial color="#3a2b2b" roughness={0.9} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1.4} castShadow />
      <pointLight position={[-3, -2, 2]} intensity={0.6} color="#D4AF37" />

      <Lipstick position={[-2.1, 0.4, 0]} />
      <Mirror position={[2, 0.8, -0.5]} />
      <Compact position={[1.7, -1.1, 0.5]} />
      <Brush position={[-1.6, -1.3, -0.3]} />

      <Sparkles
        count={60}
        scale={[7, 5, 3]}
        size={2.5}
        speed={0.3}
        color="#D4AF37"
        opacity={0.7}
      />

      <ContactShadows
        position={[0, -2.1, 0]}
        opacity={0.25}
        scale={10}
        blur={2.5}
        far={4}
      />
      <Environment preset="studio" />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        shadows
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
