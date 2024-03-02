"use client"
import { useRef } from "react";
import { Canvas, useFrame} from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

function MeshComponent() {
    const fileURL = "/female-base/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useGLTF(fileURL)

    useFrame(() => {
        mesh.current.rotation.y += 0.005;
    });

    gltf.scene.rotation.y = Math.PI

    return (
        <mesh ref={mesh} position={[0, -1, 0]}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

export function Slider() {
    return (
        <div className='flex justify-center items-center h-full'>
            <Canvas>
                <OrbitControls
                    minDistance={1.5}
                    maxDistance={2.5}
                    target={[0, 0, 0]}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI - Math.PI / 4}
                />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <MeshComponent />
            </Canvas>
        </div>
    );
}