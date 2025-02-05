import { RiReactjsLine } from "react-icons/ri"; // React
import { FaHtml5, FaCss3Alt, FaNodeJs, FaJs, FaBootstrap } from "react-icons/fa"; // HTML, CSS, Node.js, JavaScript, Bootstrap
import { SiTailwindcss, SiSass } from "react-icons/si"; // Tailwind CSS, Sass

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Skills</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" /> {/* React */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-500" /> {/* HTML */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-500" /> {/* CSS */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-blue-400" /> {/* Tailwind CSS */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSass className="text-7xl text-pink-500" /> {/* Sass */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-7xl text-purple-600" /> {/* Bootstrap */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJs className="text-7xl text-yellow-400" /> {/* JavaScript */}
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" /> {/* Node.js */}
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
