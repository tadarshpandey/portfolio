// src/pages/Home.js
import React from 'react';

// This is the homepage of the portfolio, styled with Tailwind CSS
const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Adarsh Pandey</h1>
      <p className="text-xl md:text-2xl mb-6">
        Full-Stack Developer | AI & Django Enthusiast
      </p>
      <div className="space-x-4">
        <a
          href="https://github.com/tadarshpandey"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-2 rounded shadow hover:bg-gray-200"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/adarsh-pandey-41b92126b"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-700 px-6 py-2 rounded shadow hover:bg-gray-200"
        >
          LinkedIn
        </a>
        <a
          href="/adarsh_pandey_resume.pdf"
          download
          className="bg-white text-green-700 px-6 py-2 rounded shadow hover:bg-gray-200"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
