import React, { useRef } from 'react';
import { useGLTF, Float } from '@react-three/drei';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/react.glb');

  return (
    <Float {...props} dispose={null} floatIntensity={5}>
      <group scale={0.004}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 8.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('/models/react.glb');

export default ReactLogo;
