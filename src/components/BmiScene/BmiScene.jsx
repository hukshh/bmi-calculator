import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const MorphingSphere = ({ bmi }) => {
  const meshRef = useRef();
  
  // Map BMI to distortion and color
  // Normal BMI is 18.5 - 25
  const config = useMemo(() => {
    if (!bmi) return { color: '#6366f1', speed: 1.5, distort: 0.3 };
    
    if (bmi < 18.5) {
      return { color: '#fbbf24', speed: 2, distort: 0.5 }; // Underweight
    } else if (bmi < 25) {
      return { color: '#10b981', speed: 1, distort: 0.2 }; // Normal
    } else if (bmi < 30) {
      return { color: '#f97316', speed: 1.5, distort: 0.4 }; // Overweight
    } else {
      return { color: '#f43f5e', speed: 2.5, distort: 0.6 }; // Obese
    }
  }, [bmi]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 4);
      meshRef.current.rotation.y = Math.cos(time / 2);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color={config.color}
          speed={config.speed}
          distort={config.distort}
          radius={1}
          metalness={0.5}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
};

const BmiScene = ({ bmi }) => {
  return (
    <div style={{ width: '100%', height: '300px', position: 'relative' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <MorphingSphere bmi={bmi} />
      </Canvas>
    </div>
  );
};

export default BmiScene;
