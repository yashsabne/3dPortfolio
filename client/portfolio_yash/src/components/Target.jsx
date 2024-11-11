import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

  useEffect(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <primitive object={scene} ref={targetRef} {...props} />
  );
}

// Preload the GLTF model to optimize loading
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

export default Target;
