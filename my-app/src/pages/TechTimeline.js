// src/components/TechTimeline.js
import React from 'react';

const techTimeline = [
  {
    year: "2021",
    stack: "HTML, CSS, JS",
    desc: "Started web development basics"
  },
  {
    year: "2022",
    stack: "Python, Django",
    desc: "Built backend skills and first web app"
  },
  {
    year: "2023",
    stack: "React, REST APIs",
    desc: "Shifted to modern frontend + integration"
  },
  {
    year: "2024",
    stack: "MySQL, MongoDB, Node.js",
    desc: "Built full-stack apps & API connections"
  },
  {
    year: "2025",
    stack: "AI APIs, HuggingFace",
    desc: "Integrated smart AI summarizers in projects"
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
