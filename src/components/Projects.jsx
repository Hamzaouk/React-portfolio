import React from 'react';
import blogImage from '../assets/projects/blog.jpg'; 
import calcImage from '../assets/projects/calculatrice.jpg'; 
import tachesImage from '../assets/projects/taches.jpg'; 
import stockImage from '../assets/projects/stock.jpg'; 
import { FaGithub } from 'react-icons/fa';

const Projects = () => {

  return (
    <div className="border-b border-neutral-900 py-12">
      <h2 className="my-20 text-center text-4xl"><span className="text-neutral-500">My </span>Projects</h2>
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Project 1: Blog */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          {/* Project Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src={calcImage} 
              alt="Blog Project" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"             
            />
          </div>
          
          {/* Project Description */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4">Calculatrice</h3>
            <p className="text-neutral-400 mb-6">
            L'objectif est de créer une calculatrice simple en Node.js qui prend en charge plusieurs opérations mathématiques, implémente les principes de programmation orientée objet en JavaScript et adhère à la gestion des erreurs et aux principes SOLID.
            </p>
            
            {/* GitHub Link Button */}
            <a 
              href="https://github.com/yourusername/blog-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-48 bg-purple-600 text-white 
                         py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              <FaGithub className="mr-2" />
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        {/* Project 1: Blog */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          {/* Project Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src={blogImage} 
              alt="Blog Project" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"             
            />
          </div>
          
          {/* Project Description */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4">Blog Website</h3>
            <p className="text-neutral-400 mb-6">
            Ce projet met en avant les fondamentaux du développement web, tout en assurant une navigation fluide et une structure bien organisée.
            </p>
            
            {/* GitHub Link Button */}
            <a 
              href="https://github.com/Hamzaouk/Blog-Statique" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-48 bg-purple-600 text-white 
                         py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              <FaGithub className="mr-2" />
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        {/* Project 1: Blog */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          {/* Project Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src={stockImage} 
              alt="Blog Project" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"             
            />
          </div>
          
          {/* Project Description */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4">Gestionaire de stock</h3>
            <p className="text-neutral-400 mb-6">
            une application basée sur Node.js conçue pour faciliter la gestion des stocks d'une entreprise, qu'il s'agisse de petites, moyennes ou grandes structures. Ce projet offre une solution centralisée et efficace pour suivre les produits, surveiller les niveaux de stock, et optimiser les opérations d'approvisionnement.            </p>
            
            {/* GitHub Link Button */}
            <a 
              href="https://github.com/yourusername/blog-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-48 bg-purple-600 text-white 
                         py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              <FaGithub className="mr-2" />
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        {/* Project 1: Blog */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          {/* Project Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src={tachesImage} 
              alt="Blog Project" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"             
            />
          </div>
          
          {/* Project Description */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4">Gestionaire des taches</h3>
            <p className="text-neutral-400 mb-6">
            Cette project est Développer une application backend pour la gestion des tâches en utilisant Node.js, Express.js, et MongoDB.
            Les utilisateurs peuvent gérer leurs tâches grâce à des opérations CRUD complètes, avec des données stockées dans une base MongoDB.
            </p>
            
            {/* GitHub Link Button */}
            <a 
              href="https://github.com/yourusername/blog-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-48 bg-purple-600 text-white 
                         py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              <FaGithub className="mr-2" />
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;