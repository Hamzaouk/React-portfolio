import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { RiReactjsLine } from "react-icons/ri"; 
import { FaHtml5, FaCss3Alt, FaNodeJs, FaJs, FaBootstrap } from "react-icons/fa"; 
import { SiTailwindcss, SiSass } from "react-icons/si"; 

const Skills = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    // Create a GSAP timeline for the animation
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Animate each skill div with a staggered effect
    tl.fromTo(
      skillsRef.current, 
      { 
        y: 0,
        scale: 1
      },
      { 
        y: -20, // Move up 20 pixels
        scale: 1.05, // Slightly scale up
        duration: 0.5,
        stagger: 0.1, // Stagger the animation between elements
        ease: "power1.inOut"
      }
    );

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  // Helper function to add refs to the array
  const addToRefs = (el) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">
        <span className="text-neutral-500">My </span>Skills
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div ref={addToRefs} className="rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div ref={addToRefs} className="rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>
        <div ref={addToRefs} className="rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>
        <div ref={addToRefs} className="rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform">
          <SiTailwindcss className="text-7xl text-blue-400" />
        </div>
        <div ref={addToRefs} className="rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform">
          <SiSass className="text-7xl text-pink-500" />
        </div>
        <div ref={addToRefs} className="rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform">
          <FaBootstrap className="text-7xl text-purple-600" />
        </div>
        <div ref={addToRefs} className="rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform">
          <FaJs className="text-7xl text-yellow-400" />
        </div>
        <div ref={addToRefs} className="rounded-2xl border-4 border-neutral-800 p-4 transform transition-transform">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Skills;