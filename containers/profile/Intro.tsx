"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  TorusKnot,
  MeshDistortMaterial,
  Float,
  Environment,
} from "@react-three/drei";

function ProfileIntroSection() {
  return (
    <section
      id="intro"
      className="scroll-mt-32 flex flex-col md:flex-row gap-12 items-center md:items-start"
    >
      {/* 사진 대신 3D 요소 배치 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-2xl overflow-hidden bg-muted/50 border relative"
      >
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          <Suspense fallback={null}>
            <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
              <TorusKnot args={[1, 0.3, 128, 32]} scale={0.6}>
                <MeshDistortMaterial
                  color="#3b82f6"
                  envMapIntensity={1}
                  clearcoat={1}
                  clearcoatRoughness={0.1}
                  metalness={0.4}
                  roughness={0.2}
                  distort={0.4}
                  speed={4}
                />
              </TorusKnot>
            </Float>
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col gap-6"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
          상상을 현실로 만드는 <br className="hidden md:block" />
          개발자 WHA1E입니다<span className="text-primary">.</span>
        </h1>

        <div className="text-muted-foreground leading-relaxed space-y-4 whitespace-pre-line text-justify break-keep">
          <p>
            개발 공부를 시작한 2020년도부터 일상의 문제를 비즈니스적 가치로
            실현하는 것에 즐거움을 느꼈습니다. 무작정 공부보다는 간단한 이벤트
            페이지부터 랜딩 페이지까지 필요한 비즈니스 로직을 직접 개발하며,
            사용자를 위한 서비스를 만들며 성장했습니다.
          </p>
          <p>
            폐쇄적 음악 시장의 문제를 해결하기 위한 서비스 기획과 프로덕트
            개발에 참여하여 수백만 원 규모의 거래를 유치했으며, AI를 활용한 교육
            서비스를 개발하며, 7000명에 달하는 고객을 유치하고, 공교육 DT 혁신에
            기여했습니다.
          </p>
          <p>
            개발 뿐만 아니라 업무를 함께 배우며 성장한 저는, 아래의 핵심가치를
            기반하여 앞으로의 성장 방향성을 설정하고 있습니다.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default ProfileIntroSection;
