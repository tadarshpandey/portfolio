
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Adarsh Portfolio</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:underline">Home</Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:underline">About</Link>
          <Link to="/skills" className="text-gray-700 dark:text-gray-300 hover:underline">Skills</Link>
          <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:underline">Projects</Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
