// src/components/TechTimeline.js
import React from 'react';

const techTimeline = [  
  {
    year: "2025",
    stack: "Django(python), Django rest framework, react, postgresql",
    desc: "Built full-stack apps & API connections, and a project which have these all implementaions i.e., notes-summarizer-portal, as you can go through projects section."
  },
  {
    year: "2024",
    stack: "Java, .Net",
    desc: "Again learned java and solved many programing question with it and also same for dotnet-but these two aren't my main skills in which I work."
  },
  {
    year: "2023",
    stack: "Python, SQL(MySQL)",
    desc: "Built small real world projects and backend skills with python language. Learned about Structural Query Language for further database implementation in my projects."
  },
  {
    year: "2022",
    stack: "C Programming Language",
    desc: "Started with basics, learns how to solve problems through coding-A backbone of Software. Started with basic logics and operations."
  }
];

const TechTimeline = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-10 text-center">🚀 My Tech Journey</h2>
      <div className="relative border-l-4 border-blue-500 ml-4 space-y-10">
        {techTimeline.map((item, index) => (
          <div key={index} className="relative pl-6">
            {/* Circle Marker */}
            <div className="absolute -left-[0.75rem] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900"></div>
            
            {/* Content */}
            <h3 className="text-lg font-semibold">
              <span className="text-blue-600 dark:text-blue-400">{item.year}</span> — {item.stack}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTimeline;
