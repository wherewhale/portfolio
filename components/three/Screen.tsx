import { RenderTexture, useGLTF } from "@react-three/drei";

function Screen({ frame, panel, children, ...props }: any) {
  const { nodes, materials } = useGLTF(
    "/assets/glb/computers_1-transformed.glb",
  ) as any;
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[frame].geometry}
        material={materials.Texture}
      />
      <mesh geometry={nodes[panel].geometry}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}

export default Screen;
