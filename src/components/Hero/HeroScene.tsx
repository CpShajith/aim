import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, Float, PerspectiveCamera, Html, Sparkles } from '@react-three/drei';
import DashboardScreen from './DashboardScreen';

interface LaptopProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const Laptop = (props: LaptopProps) => {
    // Placeholder for the actual GLTF model
    // const { nodes, materials } = useGLTF('/models/laptop.glb')

    return (
        <group {...props}>
            {/* Base */}
            <mesh>
                <boxGeometry args={[3, 0.2, 2]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Lid Group */}
            <group position={[0, 0.1, -1]} rotation={[0.2, 0, 0]}>
                {/* Lid Back */}
                <mesh position={[0, 1, 0]}>
                    <boxGeometry args={[3, 2, 0.1]} />
                    <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
                </mesh>

                {/* Screen Bezel */}
                <mesh position={[0, 1, 0.06]}>
                    <planeGeometry args={[2.9, 1.9]} />
                    <meshBasicMaterial color="#000" />
                </mesh>

                {/* Screen Content */}
                <mesh position={[0, 1, 0.07]}>
                    <planeGeometry args={[2.8, 1.8]} />
                    <meshBasicMaterial color="#000" toneMapped={false} />
                    <Html
                        transform
                        occlude
                        position={[0, 0, 0.01]}
                        style={{
                            width: '900px',
                            height: '580px',
                            backgroundColor: 'black',
                            transform: 'scale(0.31)' // Scale down to fit the geometry
                        }}
                    >
                        <DashboardScreen />
                    </Html>
                </mesh>
            </group>
        </group>
    );
};

const Scene = () => {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
            <ambientLight intensity={0.7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="cyan" />
            <Environment preset="city" />

            <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.5} color="#00ffff" />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Laptop position={[0, -1, 0]} rotation={[0.2, -0.2, 0]} />
            </Float>

            <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2.5} far={4} />
        </>
    );
};

const HeroScene: React.FC = () => {
    return (
        <div className="w-full h-screen absolute top-0 left-0 -z-10 bg-black">
            <Canvas shadows dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default HeroScene;
