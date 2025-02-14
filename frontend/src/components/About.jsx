import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutImg from "../assets/me.jpg";
import Veg from "../assets/vegeta-gif-1.gif";


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Image animation
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        x: -100,
        scale: 0.8
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Text animation
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        x: 100
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="about" className="border-b border-neutral-900 dark:border-neutral-200 pb-4">
      <h1 
        ref={titleRef}
        className="my-20 text-center text-4xl opacity-0"
      >
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
        <div 
          ref={imageRef}
          className="flex-shrink-0 opacity-0"
        >
          <img 
            className="rounded-sm w-[600px] h-auto shadow-lg" 
            src={Veg} 
            alt="About me image" 
          />
        </div>
        <div 
          ref={textRef}
          className="max-w-xl text-center lg:text-left flex items-center opacity-0"
        >
          <p className="my-2 py-6 text-lg  dark:text-gray-200">
            I am a dedicated and versatile full-stack developer with a passion for creating 
            efficient and user-friendly web applications. With 5 years of professional 
            experience, I have worked with a variety of technologies, including React, 
            Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development 
            began with a deep curiosity for how things work, and it has evolved into a 
            career where I continuously strive to learn and adapt to new challenges. I 
            thrive in collaborative environments and enjoy solving complex problems to 
            deliver high-quality solutions. Outside of coding, I enjoy staying active, 
            exploring new technologies, and contributing to open-source projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;