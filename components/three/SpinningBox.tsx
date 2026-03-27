"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";
import * as THREE from "three";

interface SpinningBoxProps extends React.ComponentProps<"mesh"> {
  scale?: number;
}

export function SpinningBox({ scale = 1, ...props }: SpinningBoxProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useCursor(hovered);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x = ref.current.rotation.y += delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? scale * 1.4 : scale * 1.2}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry />
      <meshStandardMaterial color={hovered ? "hotpink" : "indianred"} />
    </mesh>
  );
}
