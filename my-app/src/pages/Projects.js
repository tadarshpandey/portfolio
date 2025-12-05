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
    // {
    //   title: "Chatbot Web App",
    //   description: "About: Developed a web-based chatbot using Python and Streamlit, enabling real-time user interaction through a clean conversational interface. Role: Designed the chat flow, implemented backend logic for response generation, managed deployment, and maintained the GitHub codebase. Outcomes: Delivered a live, fully functional chatbot showcasing skills in Python, Streamlit, andconversational AI integration; improved usability with input handling and scalable deployment.",
    //   tech: "Python, Streamlit",
    //   github: "https://github.com/tadarshpandey/chatbot",
    //   demo: "https://adarshpandeyind-chatbot.streamlit.app/",
    // },
    // {
    //   title: "AI Notes Summarizer",
    //   description: "About: Built a web app for users to input large texts or upload documents, then generate concise summaries via AI (Hugging Face), with frontend-backend architecture (React + Django). Role: Developed features including user authentication, note CRUD (create/read/update/delete), file upload, search & filtering, and integration of summarization models. Outcomes: Users can save, edit, delete, export summarized notes, support dark mode, responsive UI, and manage notes securely.",
    //   tech: "Django, React, PostgreSQL",
    //   github: "https://github.com/tadarshpandey/ai_notes_portal",
    //   //demo: "", // add live demo link if available
    // },
    
    // {
    //   title: "Real Estate Website",
    //   description: "A property listing website with admin features and search.",
    //   tech: "Django, HTML/CSS, MySQL",
    //   github: "https://github.com/tadarshpandey/project_shre",
    //   //demo: "", // add live demo link if available
    // },
    <p>For now building real world projects and would be mention SOON. Keep in touch. Thanks for visiting.</p>
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
