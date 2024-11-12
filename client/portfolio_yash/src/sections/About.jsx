import { useState,useEffect,useRef } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { skills } from '../constants/index.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { clgYear } from '../constants/index.js';
import { useMediaQuery } from 'react-responsive';


const About = () => {

  const globeRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('yashsabne39@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  useEffect(() => {
    const globe = globeRef.current;
    let rotationSpeed = 4; 
    if (globe) {  
      const animate = () => { 
        const controls = globe.controls();
       
        if (controls) {
          controls.autoRotate = true;
          controls.autoRotateSpeed = rotationSpeed ; 
        
          controls.update();
        }
        requestAnimationFrame(animate);  
      };
      animate();
    }
  }, []);


  useGSAP(() => {
    gsap.to(".skillshow", {
      opacity: 1,
      y: 20,
      x: 2,
      duration: 0.5,
      stagger: 0.25
    })
  }, [])

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Yash Sabne</p>
              <p className="grid-subtext">
                With 1 year experience in web development, profient in MERN Technologies,
                attendent at Sardar Vallabhbhai National Institute of Technology(2023-2027).
              </p>
            </div>
          </div>
        </div>


        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/skillls_img.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <div className="grid-subtext">
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill, i) => (
                    <li key={i} className="font-bold list-disc skillshow opacity-0">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
               ref={globeRef}
               height={ isMobile?400:500}  
               width={isMobile?400:500}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 20.5937, 
                    lng: 78.9629, 
                    text: 'India',
                    color: 'white',
                    size: 1000
                  }
                ]}

              />

            </div>
            <div> 
              <p className="grid-headtext">I am available for both remote and on-site work, committed to delivering high-quality solutions.</p>
              <p className="grid-subtext">Open to collaborations and projects across various time zones, I ensure timely and efficient delivery as fast than rotation regardless of location.</p>
              <a href="#contact" className="w-fit">
           
              </a>
            </div>

          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
            <div>
              <p className="grid-headtext">My Education and Certification details</p>
              <p className="grid-subtext">
                Currently i am {clgYear[0]} year student at S.V. National Institute of Technology Persuing the bachelor of technology(B-tech) in Electronic and Communication Engineering
                <a href="#education" className="w-fit">
                <Button name="Get Details" isBeam containerClass="w-full mt-10" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
          <img src="assets/grid4.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
 

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">yashsabne39@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;