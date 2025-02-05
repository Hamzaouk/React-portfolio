import React from 'react';
import AboutImg from "../assets/me.jpg";

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
        <div className="flex-shrink-0">
          <img className="rounded-2xl w-[400px] h-auto" src={AboutImg} alt="About me image" />
        </div>
        <div className="max-w-xl text-center lg:text-left flex items-center">
          <p className="my-2 py-6 text-lg">
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