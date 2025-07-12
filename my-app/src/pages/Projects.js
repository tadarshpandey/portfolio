// src/pages/Projects.js
import React from 'react';


// Reusable component for each project
const ProjectCard = ({ title, description, tech, github, demo }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-2">
    <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
    <p className="text-sm text-gray-500">Tech: {tech}</p>
    <div className="space-x-4 pt-2">
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        GitHub
      </a>
      {demo && (
        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
          Live Demo
        </a>
      )}
    </div>
  </div>
);

// Main Projects page
const Projects = () => {
  const projects = [
    {
      title: "AI Notes Summarizer",
      description: "A web app that summarizes academic notes using AI-backed APIs.",
      tech: "Django, React, PostgreSQL",
      github: "https://github.com/tadarshpandey/ai_notes_portal",
      demo: "https://ai-notes-frontend.onrender.com/",
    },
    {
      title: "Chatbot Web App",
      description: "An open-source chatbot redeployed using Streamlit.",
      tech: "Python, Streamlit",
      github: "https://github.com/tadarshpandey/chatbot",
      demo: "https://adarshpandeyind-chatbot.streamlit.app/",
    },
    {
      title: "Real Estate Website",
      description: "A property listing website with admin features and search.",
      tech: "Django, HTML/CSS, MySQL",
      github: "https://github.com/tadarshpandey/project_shre",
      //demo: "#", // add live demo link if available
    },
  ];

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
