// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Adarsh Pandey's Portfolio</h1>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:underline">Home</Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:underline">About</Link>
          <Link to="/skills" className="text-gray-700 dark:text-gray-300 hover:underline">Skills</Link>
          <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:underline">Projects</Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:underline">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu (Shown when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 space-y-2 bg-white dark:bg-gray-800">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:underline">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:underline">About</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:underline">Skills</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:underline">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:underline">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
