import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Pic from "../assets/photo.jpg"

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    // Create a GSAP timeline for the typing animation
    const tl = gsap.timeline({ repeat: -1 });

    // Array of titles to type and delete
    const titles = [
      "Web Full stack Developer",
      "Node.js Enthusiast",
      "JavaScript Developer"
    ];

    // Animation sequence
    titles.forEach((title, index) => {
      // Type the text
      tl.to(textElement, {
        duration: 2,
        text: title,
        ease: "none"
      });

      // Pause at the end of typing
      tl.to(textElement, {
        duration: 1
      });

      // Delete the text
      tl.to(textElement, {
        duration: 1,
        text: "",
        ease: "none"
      });

      // Small pause between deletions
      tl.to(textElement, {
        duration: 0.5
      });
    });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
   <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Hamza Oukhatou</h1>
              <span 
                ref={textRef}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent h-12 block"
              >
                Web Full stack Developer
              </span>
              <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Hi, I'm HAMZA, a passionate full-stack web development student on a journey to build user-friendly and efficient web applications. I specialize in JavaScript and have hands-on experience with HTML, CSS, JavaScript, and Node.js. As I continue to learn and grow, I'm excited to bring creativity and functionality together in every project I work on.
              </p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={Pic} alt="Profile pic" className="rounded-full" />
          </div>
        </div>
    </div>
  </div>
 );
};

export default Hero;