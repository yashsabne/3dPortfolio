import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Ring } from "@react-three/drei";
import HackerRoom from '../components/HackerRoom';
import { useMediaQuery } from 'react-responsive'
 
import CanvasLoader from '../components/CanvasLoader';
import Target from '../components/Target'; 
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  
  useGSAP(() => {
    gsap.fromTo(
      "#more-info-btn", 
      {
        opacity: 0,
        y: -100,   
      }, 
      {
        opacity: 1,
        y: window.innerHeight - 260,
        delay: 1.5,
        ease: "bounce.out",  
        duration: 2,        
      }
    );
  }, []);
  
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'>
      <div className='w-full mx-auto flex-col sm:mt-36 mt-20 c-space gap-3' id='info_name'>

      <div className="absolute left-0 right-0 w-full z-10 c-space" id='more-info-btn'>
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>

        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans my-1' >
          Hi, I am Yash Sabne <span className='waving-hand'>👋</span>
        </p>

        <p className="hero_tag text-gray_gradient">Developer in Web, Software, and Tech.</p>
      </div>

      <div className='w-full h-full absolute inset-0 mt-3'>
        <Canvas className="w-full h-full">
          {/* Adding OrbitControls for better camera interaction */} 

          {/* Wrapping the HackerRoom component in Suspense to show CanvasLoader while loading */}
          <Suspense fallback={<CanvasLoader />}>
            {/* Using PerspectiveCamera from drei */}
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            
            <HeroCamera>

              <HackerRoom
                scale={isMobile ? 0.05 : 0.08}
                position={isMobile ? [0.5, -3, 0] : [0.5, -5.3, 0]}
                rotation={[0.15, -Math.PI-0.06, 0]} />
            </HeroCamera>

            <group>
              <Target  
              scale={isMobile ? 0.5 : 0.9}
              position={isMobile ? [-3, 4, 0] : [-9, -5, 1]}
              rotation={[0, 120, 0]}
              />

              <ReactLogo 
              position={isMobile ? [2, 4, 1] : [9, 2, 1]}
              scale={isMobile ? 0.6 : 0.9} 
              />

              <Cube 
              position={isMobile ? [2.1, -5, 0]: [9, -5, 1]}
              scale={isMobile ? 0.5 : 0.9}
              />

    
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, -10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

     
    </section>
  );
};

export default Hero;
