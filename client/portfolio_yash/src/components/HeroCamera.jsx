import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { easing } from 'maath';

const HeroCamera = ({ children, isMobile }) => {
  const group = useRef();

  useFrame((state, delta) => {
    // Correct target format for camera position
    easing.damp3(
      state.camera.position,
      [0, 0, 20], // Target position
      0.25, // Smooth time
      delta
    );

    // Only adjust group rotation if not on mobile
    if (!isMobile) {
      easing.dampE(
        group.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0], // Target rotation
      
        0.25, // Smooth time
        delta
      );
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;