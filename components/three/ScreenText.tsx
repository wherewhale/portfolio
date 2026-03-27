import Screen from "@/components/three/Screen";
import { PerspectiveCamera, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function ScreenText({ invert, x = 0, y = 1.2, ...props }: any) {
  const textRef = useRef<any>(null);
  const rand = Math.random() * 10000;
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x =
        x + Math.sin(rand + state.clock.elapsedTime / 4) * 8;
    }
  });
  return (
    <Screen {...props}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 15]}
      />
      <color attach="background" args={[invert ? "black" : "#35c19f"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text
        font="/Inter-Medium.woff"
        position={[x, y, 0]}
        ref={textRef}
        fontSize={4}
        letterSpacing={-0.1}
        color={!invert ? "black" : "#35c19f"}
      >
        DEVELOPER, REALIZATION, FRONT-END, IMAGINATION
      </Text>
    </Screen>
  );
}

export default ScreenText;
