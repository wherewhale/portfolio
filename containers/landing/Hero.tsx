"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { MeshReflectorMaterial, BakeShadows } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { Computers, Instances } from "@/components/three/Computers";
import CameraRig from "@/components/three/CameraRig";

export default function HeroSection() {
  const textControls = useAnimation();
  const slashControls = useAnimation();
  const [showThreeJs, setShowThreeJs] = useState(false);

  useEffect(() => {
    const runSequence = async () => {
      await textControls.start((i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.4, duration: 0.8, ease: "easeOut" },
      }));

      await new Promise((resolve) => setTimeout(resolve, 1500));

      slashControls.start({
        scaleX: 1,
        opacity: 1,
        transition: { duration: 0.2, ease: "easeInOut" },
      });

      await textControls.start((i) => ({
        y: "100vh",
        rotate: i % 2 === 0 ? 12 : -15,
        opacity: 0,
        transition: { duration: 0.8, ease: "easeIn" },
      }));

      setShowThreeJs(true);
    };

    runSequence();
  }, [textControls, slashControls]);

  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center overflow-hidden">
      {/* 텍스트 시퀀스 영역 */}
      {!showThreeJs && (
        <div className="relative z-10 w-full px-6 md:px-12 flex flex-col justify-center gap-16 font-bold text-3xl md:text-5xl lg:text-7xl tracking-tight">
          <motion.div
            custom={0}
            initial={{ opacity: 0, x: 50 }}
            animate={textControls}
            className="text-left"
          >
            보이지 않는 <span className="text-primary">16ms</span> 속에
          </motion.div>
          <motion.div
            custom={1}
            initial={{ opacity: 0, x: 50 }}
            animate={textControls}
            className="text-center text-muted-foreground"
          >
            남겨질 구조를 설계하는
          </motion.div>
          <motion.div
            custom={2}
            initial={{ opacity: 0, x: 50 }}
            animate={textControls}
            className="text-right"
          >
            개발자 손영호입니다.
          </motion.div>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={slashControls}
            className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground z-20 origin-left"
            style={{ transform: "rotate(-10deg) translateY(-50%)" }}
          />
        </div>
      )}

      {/* Three.js 씬 영역 */}
      {showThreeJs && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full z-0 bg-black"
        >
          <div className="absolute inset-0 w-full h-full z-10">
            <Canvas
              shadows
              dpr={[1, 1.5]}
              camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
            >
              <color attach="background" args={["black"]} />
              <hemisphereLight intensity={0.15} groundColor="black" />
              <spotLight
                decay={0}
                position={[10, 20, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
              />

              <group position={[0, -1, 0]}>
                <Instances>
                  <Computers scale={0.5} />
                </Instances>

                <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[50, 50]} />
                  <MeshReflectorMaterial
                    blur={[300, 30]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={180}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#202020"
                    metalness={0.8}
                  />
                </mesh>
              </group>

              <EffectComposer enableNormalPass>
                <Bloom
                  luminanceThreshold={0.5}
                  mipmapBlur
                  luminanceSmoothing={0.0}
                  intensity={3}
                />
                <DepthOfField
                  target={[0, 0, 13]}
                  focalLength={0.3}
                  bokehScale={5}
                  height={700}
                />
              </EffectComposer>

              <CameraRig />
              <BakeShadows />
            </Canvas>
          </div>
        </motion.div>
      )}
    </section>
  );
}
