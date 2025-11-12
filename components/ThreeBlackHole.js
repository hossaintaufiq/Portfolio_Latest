"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function EnergySwirl() {
  const ringRef = useRef();
  const glowRef = useRef();

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();

    // Mouse-based parallax motion
    const targetRotX = mouse.y * 0.2;
    const targetRotY = mouse.x * 0.4;

    if (ringRef.current) {
      ringRef.current.rotation.x = THREE.MathUtils.lerp(
        ringRef.current.rotation.x,
        targetRotX,
        0.05
      );
      ringRef.current.rotation.z += 0.0025;
    }

    if (glowRef.current) {
      glowRef.current.material.opacity = 0.1 + Math.sin(t * 1.5) * 0.05;
      glowRef.current.rotation.z += 0.0008;
    }
  });

  return (
    <group>
      {/* Outer glowing halo */}
      <mesh ref={glowRef} scale={[3.5, 3.5, 3.5]}>
        <torusGeometry args={[2.5, 0.25, 32, 200]} />
        <meshStandardMaterial
          emissive="#00e5ff"
          emissiveIntensity={1.8}
          metalness={0.6}
          roughness={0.3}
          color="#00bcd4"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner bright energy swirl */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.2, 0.15, 32, 200]} />
        <meshStandardMaterial
          emissive="#76ff03"
          emissiveIntensity={2.2}
          color="#76ff03"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

function NebulaParticles() {
  const pointsRef = useRef();

  const particles = React.useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 7000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 300;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.y = t;
  });

  return (
    <points ref={pointsRef} geometry={particles}>
      <pointsMaterial
        size={0.6}
        color="#00bcd4"
        transparent
        opacity={0.12}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7] }}>
        <color attach="background" args={["#020409"]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={2.5} />
        <Stars radius={300} depth={100} count={8000} factor={5} fade speed={0.2} />
        <NebulaParticles />
        {/* <EnergySwirl /> */}
      </Canvas>
    </div>
  );
}
