// src/pages/Skills.js
import React from 'react';
import TechTimeline from './TechTimeline';

// Skills page showing categorized tech stack
const Skills = () => {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>

      {/* Programming Languages */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Languages</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Python(Basic)</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>C Programming</li>
        </ul>
      </div>

      {/* Frameworks and Tools */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Frameworks / Tools</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Django(Basic)</li>
          
          <li>Git/GitHub(Basic)</li>
          <li>VS Code</li>
        </ul>
      </div>

      {/* Databases */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">Databases</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>MySQL</li>
          
        </ul>
      </div>

       <>{/*<div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 my-10 rounded-full shadow-md" />
          <hr className="border-t border-red-400" /> */}
        <hr className="w-full h-1 rounded-full shadow-md border-t border-yellow-400 mt-12 mb-4" />


        <div>
          <TechTimeline />
        </div></>  


    </section>
    
  );
};

export default Skills;
